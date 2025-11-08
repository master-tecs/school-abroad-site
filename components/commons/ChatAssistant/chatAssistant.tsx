"use client";

import { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import "./chatAssistant.scss";

interface Message {
  sender: "user" | "bot";
  text: string;
  streaming?: boolean;
}

const CHAT_ENDPOINT = "/api/chat";
const STREAM_DELAY_MS = 16;

type StructuredMessage = {
  sender?: string;
  text?: string;
  message?: string;
};

type N8nChunk = {
  content?: string;
  role?: string;
};

type N8nPayload = {
  sessionId?: string;
  data?: {
    sessionId?: string;
    messages?: StructuredMessage[];
  };
  messages?: StructuredMessage[];
  chunks?: N8nChunk[];
  content?: string;
  response?: {
    body?: Array<{ output?: string }>;
  };
};

const extractText = (raw: unknown): string | null => {
  if (typeof raw === "string") {
    const trimmed = raw.trim();
    if (!trimmed) return null;

    if (
      (trimmed.startsWith("{") && trimmed.endsWith("}")) ||
      (trimmed.startsWith("[") && trimmed.endsWith("]"))
    ) {
      try {
        const parsed = JSON.parse(trimmed);
        return extractText(parsed);
      } catch {
        return trimmed;
      }
    }

    return trimmed;
  }

  if (!raw || typeof raw !== "object") {
    return null;
  }

  const payload = raw as Record<string, unknown>;

  if (typeof payload.output === "string") return payload.output;
  if (typeof payload.text === "string") return payload.text;
  if (typeof payload.message === "string") return payload.message;
  if (typeof payload.content === "string") return payload.content;

  if (Array.isArray(payload.body)) {
    for (const item of payload.body) {
      const bodyText = extractText(item);
      if (bodyText) return bodyText;
    }
  }

  if (payload.response && typeof payload.response === "object") {
    const response = payload.response as {
      body?: Array<Record<string, unknown>>;
    };
    if (Array.isArray(response.body)) {
      for (const item of response.body) {
        const bodyText = extractText(item);
        if (bodyText) return bodyText;
      }
    }
  }

  return null;
};

export default function ChatAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text:
        "Hi! I’m your School Abroad assistant. Ask me about mentorship plans, bookings, or anything else you need.",
    },
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const [hasLoadedHistory, setHasLoadedHistory] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, open]);

  // Initialise / persist chat session
  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedSession = window.localStorage.getItem(
      "schoolAbroadChatSessionId",
    );
    if (storedSession) {
      setSessionId(storedSession);
    } else {
      const newId = crypto.randomUUID();
      window.localStorage.setItem("schoolAbroadChatSessionId", newId);
      setSessionId(newId);
    }
  }, []);

  // Attempt to load history once per session when chat opens
  useEffect(() => {
    const loadHistory = async () => {
      if (!open || !sessionId || hasLoadedHistory) return;

      try {
        const response = await fetch(
          `${CHAT_ENDPOINT}?action=loadPreviousSession`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sessionId }),
          },
        );

        if (response.ok) {
          const data = await response.json();
          const responseSession =
            typeof data?.sessionId === "string"
              ? data.sessionId
              : typeof data?.data?.sessionId === "string"
                ? data.data.sessionId
                : undefined;

          if (responseSession && responseSession !== sessionId) {
            if (typeof window !== "undefined") {
              window.localStorage.setItem(
                "schoolAbroadChatSessionId",
                responseSession,
              );
            }
            setSessionId(responseSession);
          }

          type HistoryItem = { sender?: string; text?: string };
          const history: HistoryItem[] = Array.isArray(data?.messages)
            ? (data.messages as HistoryItem[])
            : [];

          if (history.length > 0) {
            setMessages((prev) => [
              ...prev,
              ...history.map<Message>((item) => ({
                sender: item?.sender === "user" ? "user" : "bot",
                text: String(item?.text ?? ""),
              })),
            ]);
          }
        }
      } catch (error) {
        console.error("[ChatAssistant] load history error", error);
      } finally {
        setHasLoadedHistory(true);
      }
    };

    void loadHistory();
  }, [open, sessionId, hasLoadedHistory]);

  const appendStreamingText = (content: string) => {
    const text = extractText(content);
    if (!text) return;
    setMessages((prev) => {
      const updated = [...prev];
      const lastMessage = updated[updated.length - 1];

      if (lastMessage && lastMessage.sender === "bot" && lastMessage.streaming) {
        updated[updated.length - 1] = {
          ...lastMessage,
          text: `${lastMessage.text}${text}`,
        };
      } else {
        updated.push({
          sender: "bot",
          text,
          streaming: true,
        });
      }

      return updated;
    });
  };

  const finaliseStreamingText = () => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.streaming
          ? {
              ...msg,
              streaming: false,
            }
          : msg,
      ),
    );
  };

  const processStructuredMessages = (payload: N8nPayload) => {
    const rawMessages: StructuredMessage[] = Array.isArray(payload?.messages)
      ? payload.messages!
      : Array.isArray(payload?.data?.messages)
        ? payload.data!.messages!
        : [];

    if (!rawMessages.length) return false;

    const replies: Message[] = rawMessages
      .filter(
        (item) => (item?.sender ?? "").toLowerCase() !== "user",
      )
      .map((item) => ({
        sender: "bot" as const,
        text: String(item?.text ?? item?.message ?? ""),
      }))
      .filter((msg) => msg.text.trim().length > 0);

    if (!replies.length) return false;

    setMessages((prev) => [...prev, ...replies]);
    return true;
  };

  const processSessionFromPayload = (payload: N8nPayload) => {
    const responseSession =
      typeof payload?.sessionId === "string"
        ? payload.sessionId
        : typeof payload?.data?.sessionId === "string"
          ? payload.data.sessionId
          : undefined;

    if (responseSession && responseSession !== sessionId) {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "schoolAbroadChatSessionId",
          responseSession,
        );
      }
      setSessionId(responseSession);
    }
  };

  const sendToAssistant = async (question: string) => {
    const userMessage: Message = { sender: "user", text: question };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch(`${CHAT_ENDPOINT}?action=sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          chatInput: question,
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error(`Chat failed with status ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;
      let buffered = "";
      let assistantResponded = false;

      while (!done) {
        const { value, done: streamDone } = await reader.read();
        done = streamDone;

        if (value) {
          buffered += decoder.decode(value, { stream: !done });

          const segments = buffered.split("\n");
          buffered = segments.pop() ?? "";

          for (const rawSegment of segments) {
            const trimmed = rawSegment.trim();
            if (!trimmed) continue;

            // Support Server Sent Events format
            const dataLine = trimmed.startsWith("data:")
              ? trimmed.slice(5).trim()
              : trimmed;

            let payload: N8nPayload | string = dataLine;
            try {
              payload = JSON.parse(dataLine) as N8nPayload;
            } catch {
              // plain text chunk – treat as streaming content
              appendStreamingText(dataLine);
              assistantResponded = true;
              continue;
            }

            if (typeof payload !== "string") {
              processSessionFromPayload(payload);

              if (processStructuredMessages(payload)) {
                assistantResponded = true;
                continue;
              }

              if (payload?.chunks && Array.isArray(payload.chunks)) {
                payload.chunks.forEach((chunk: N8nChunk) => {
                  if (chunk?.content) {
                    appendStreamingText(String(chunk.content));
                    assistantResponded = true;
                  }
                });
                continue;
              }

              if (payload?.content) {
                appendStreamingText(String(payload.content));
                assistantResponded = true;
                continue;
              }

              if (payload?.response?.body?.[0]?.output) {
                appendStreamingText(String(payload.response.body[0].output));
                assistantResponded = true;
                continue;
              }

              const directText = extractText(payload);
              if (directText) {
                appendStreamingText(directText);
                assistantResponded = true;
                continue;
              }
            }

            if (typeof payload === "string") {
                appendStreamingText(payload);
              assistantResponded = true;
              continue;
            }
          }

          await new Promise((resolve) =>
            setTimeout(resolve, STREAM_DELAY_MS),
          );
        }
      }

      if (buffered.trim()) {
        appendStreamingText(buffered.trim());
        assistantResponded = true;
      }

      finaliseStreamingText();

      if (!assistantResponded) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text:
              "I’m sorry—I couldn’t find an answer. Please try rephrasing your question.",
          },
        ]);
      }
    } catch (error) {
      console.error("[ChatAssistant] error", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            "Something went wrong reaching the assistant. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || loading || !sessionId) return;
    setInput("");
    void sendToAssistant(trimmed);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
    }
  };

  const hasStreamingMessage = messages.some((msg) => msg.streaming);

  return (
    <div className={`chat-widget ${open ? "open" : ""}`}>
      <div className="chat-header" onClick={() => setOpen(!open)}>
        <div className="header-left">
          <SmartToyIcon className="ai-icon" />
          <h4>School Abroad Assistant</h4>
        </div>
        {open && <CloseIcon className="close-icon" />}
      </div>

      {open && (
        <div className="chat-body">
          <div className="messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`message ${msg.sender}${msg.streaming ? " streaming" : ""}`}
              >
                <span className="message-text">{msg.text}</span>
                {msg.streaming && <span className="live-cursor" />}
              </div>
            ))}
            {loading && !hasStreamingMessage && (
              <div className="message bot typing-indicator">
                <span />
                <span />
                <span />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your message..."
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={loading || input.trim().length === 0}
            >
              {loading ? "..." : <SendIcon />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}