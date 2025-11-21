"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useChat } from "@ai-sdk/react";
import Markdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { ChatLoadingSimple } from "@/components/ui/chat-loading";
import { Bot, User } from "lucide-react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    maxSteps: 10,
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content:
          "Hi! 👋 Welcome to School Abroad. I can answer your questions, service and mentorship plans, recommend programs, and guide you through our services. How can I help you get started today?",
      },
    ],
  });

  return (
    <div className="flex flex-col w-full h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="flex-1 overflow-y-auto px-4 py-8">
        <div className="w-full max-w-4xl mx-auto">
          <div className="space-y-6">
            <AnimatePresence initial={false}>
              {messages.map((message, i) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={cn(
                    "flex items-end gap-3",
                    message.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  {message.role === "assistant" && (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffd60a] to-[#ffcc00] flex items-center justify-center flex-shrink-0 shadow-lg shadow-yellow-500/20">
                      <Bot className="w-5 h-5 text-[#0b0b15]" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[70%] rounded-2xl px-4 py-3 shadow-lg",
                      message.role === "user"
                        ? "bg-gradient-to-br from-[#732efd] to-[#5a23c8] text-white rounded-br-sm"
                        : "bg-white text-gray-800 rounded-bl-sm border border-gray-200",
                    )}
                  >
                    {message.parts.map((part) => {
                      switch (part.type) {
                        case "text":
                          return (
                            <div
                              key={`${message.id}-${i}`}
                              className={cn(
                                "prose-sm prose-p:my-1 prose-li:my-0.5 prose-ul:my-1 prose-ol:my-1",
                                message.role === "user"
                                  ? "prose-invert"
                                  : "prose-gray",
                              )}
                            >
                              <Markdown>{part.text}</Markdown>
                            </div>
                          );
                        default:
                          return null;
                      }
                    })}
                  </div>
                  {message.role === "user" && (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#732efd] to-[#5a23c8] flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/20">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <ChatLoadingSimple />
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="border-t bg-white/80 backdrop-blur-sm shadow-lg">
        <form
          className="flex gap-3 justify-center items-center py-4 px-4 max-w-4xl mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex-1 max-w-3xl">
            <div className="flex gap-3 items-center bg-white rounded-2xl border-2 border-gray-200 focus-within:border-[#732efd] focus-within:shadow-lg focus-within:shadow-purple-500/10 transition-all duration-300 p-2">
              <Input
                className="flex-1 border-0 shadow-none !ring-transparent focus-visible:ring-0 text-base"
                value={input}
                placeholder="Type your message..."
                onChange={handleInputChange}
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  size="sm"
                  className="bg-gradient-to-r from-[#732efd] to-[#5a23c8] text-white rounded-xl px-6 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 transition-all"
                  disabled={isLoading || !input.trim()}
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v4m0 8v4m8-8h-4M4 12h4m5.636-4.364l-2.828 2.828m4.24 4.24l-2.828 2.828M18.364 7.636l-2.828-2.828M7.636 18.364l-2.828-2.828"
                        />
                      </svg>
                    </motion.div>
                  ) : (
                    "Send"
                  )}
                </Button>
              </motion.div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
