"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Bot, Loader2, MessageCircle, X, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChatLoading } from "@/components/ui/chat-loading";
import { motion, AnimatePresence } from "framer-motion";
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
        "Hi! 👋 Welcome to School Abroad. I can answer your questions, service and mentorship plans, recommend programs, and guide you through our services. How can I help you get started today?",
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
            className="mb-4 h-64 overflow-y-auto rounded-2xl border border-white/5 bg-white/5 p-4 shadow-inner"
          >
            <div className="space-y-4">
              <AnimatePresence initial={false}>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={clsx("flex items-end gap-2", {
                      "justify-end": message.role === "user",
                      "justify-start": message.role === "assistant",
                    })}
                  >
                    {message.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ffd60a] to-[#ffcc00] flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Bot className="w-4 h-4 text-slate-900" />
                      </div>
                    )}
                    <div
                      className={clsx(
                        "max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 shadow-lg text-sm",
                        message.role === "user"
                          ? "bg-gradient-to-br from-[#732efd] via-[#6c63ff] to-[#5a23c8] text-white rounded-br-sm"
                          : "bg-white/10 text-blue-100 backdrop-blur rounded-bl-sm border border-white/10"
                      )}
                    >
                      {message.content}
                    </div>
                    {message.role === "user" && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#732efd] to-[#5a23c8] flex items-center justify-center flex-shrink-0 shadow-lg">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {isSending && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <ChatLoading />
                </motion.div>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <motion.div
              className="flex-1"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type your question…"
                className="flex-1 border-white/10 bg-white/10 text-sm text-white placeholder:text-blue-200/50 focus-visible:ring-[#732efd] focus-visible:border-[#732efd]/50 transition-all"
                autoComplete="off"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="submit"
                size="sm"
                disabled={disabled}
                className="rounded-full bg-gradient-to-r from-[#732efd] to-[#5a23c8] px-4 text-xs font-semibold text-white shadow-lg shadow-purple-900/40 transition hover:shadow-purple-900/60 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 className="h-4 w-4" />
                  </motion.div>
                ) : (
                  "Send"
                )}
              </Button>
            </motion.div>
          </form>
        </div>
      )}
    </div>
  );
}