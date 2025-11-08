"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Bot, Loader2, MessageCircle, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const CHAT_ENDPOINT =
  process.env.NEXT_PUBLIC_N8N_CHAT_URL ??
  "https://n8n.srv1091639.hstgr.cloud/webhook/8f61c22c-0a61-4153-99e6-8f11c336c70d/chat";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "Hi there! 👋  Ask me anything about your membership, mentorship calls, or study abroad resources.",
    },
  ]);
  const [isSending, setIsSending] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  // Keep list scrolled to bottom
  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const disabled = isSending || !input.trim();

  const sendMessage = async () => {
    const question = input.trim();
    if (!question) return;

    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", content: question },
    ]);
    setInput("");
    setIsSending(true);

    try {
      const response = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });

      if (!response.ok) {
        throw new Error(`Chat failed with status ${response.status}`);
      }

      const payload = await response.json();
      const answer =
        payload?.answer ?? payload?.message ?? payload?.data ?? "I’m sorry, I couldn’t find an answer.";

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: answer,
        },
      ]);
    } catch (error) {
      console.error("[Chatbot] fetch error", error);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Something went wrong reaching the assistant. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!disabled) void sendMessage();
  };

  const toggleOpen = () => setOpen((value) => !value);

  const icon = useMemo(() => (open ? X : Bot), [open]);
  const TriggerIcon = icon;

  return (
    <div className="fixed bottom-6 right-6 z-[99] flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <button
        onClick={toggleOpen}
        className={clsx(
          "group rounded-full border border-white/10 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 p-4 text-white shadow-lg shadow-indigo-900/40 transition hover:scale-105 hover:shadow-indigo-900/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:ring-blue-400"
        )}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <TriggerIcon className="h-5 w-5 transition-transform group-hover:scale-110 group-hover:rotate-6" />
      </button>

      {open && (
        <div className="w-[min(88vw,22rem)] rounded-3xl border border-white/10 bg-slate-950/90 p-4 text-white shadow-2xl backdrop-blur-lg sm:w-96">
          <header className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-blue-300" />
              <div>
                <p className="text-sm font-semibold">Membership Concierge</p>
                <span className="text-xs text-blue-200/70">
                  Online & typically replies instantly
                </span>
              </div>
            </div>

            <button
              onClick={toggleOpen}
              className="rounded-full p-1 text-blue-200 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div
            ref={listRef}
            className="mb-4 h-64 space-y-3 overflow-y-auto rounded-2xl border border-white/5 bg-white/5 p-3 pr-2 text-sm shadow-inner"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={clsx("flex", {
                  "justify-end": message.role === "user",
                  "justify-start": message.role === "assistant",
                })}
              >
                <div
                  className={clsx(
                    "max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2 shadow-sm transition",
                    message.role === "user"
                      ? "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white"
                      : "bg-white/10 text-blue-100 backdrop-blur"
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isSending && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-blue-100">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Thinking…
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your question…"
              className="flex-1 border-white/10 bg-white/10 text-sm text-white placeholder:text-blue-200/50 focus-visible:ring-blue-400"
              autoComplete="off"
            />
            <Button
              type="submit"
              size="sm"
              disabled={disabled}
              className="rounded-full bg-blue-500 px-4 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-500/60"
            >
              {isSending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send"}
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}