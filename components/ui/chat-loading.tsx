"use client";

import { motion } from "framer-motion";

export function ChatLoading() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-yellow-100 backdrop-blur">
        <div className="flex items-center gap-1.5">
          <motion.div
            className="h-2 w-2 rounded-full bg-[#ffd60a]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0,
            }}
          />
          <motion.div
            className="h-2 w-2 rounded-full bg-[#ffd60a]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
          <motion.div
            className="h-2 w-2 rounded-full bg-[#ffd60a]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
        </div>
        <motion.span
          className="text-xs font-medium"
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Thinking...
        </motion.span>
      </div>
    </div>
  );
}

export function ChatLoadingSimple() {
  return (
    <div className="flex justify-start items-end gap-2">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffd60a] to-[#ffcc00] flex items-center justify-center flex-shrink-0 shadow-lg shadow-yellow-500/20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <svg
            className="w-5 h-5 text-[#0b0b15]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </motion.div>
      </div>
      <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-gray-800 border border-gray-200 rounded-bl-sm shadow-lg">
        <div className="flex items-center gap-1.5">
          <motion.div
            className="h-2 w-2 rounded-full bg-[#ffd60a]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 1, 0.4],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1],
              delay: 0,
            }}
          />
          <motion.div
            className="h-2 w-2 rounded-full bg-[#ffd60a]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 1, 0.4],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
          />
          <motion.div
            className="h-2 w-2 rounded-full bg-[#ffd60a]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 1, 0.4],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.4,
            }}
          />
        </div>
        <motion.span
          className="text-xs font-semibold text-gray-600"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Thinking...
        </motion.span>
      </div>
    </div>
  );
}

export function ChatLoadingAdvanced() {
  return (
    <div className="flex justify-start">
      <div className="relative flex items-center gap-3 px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-1.5">
          <motion.div
            className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#ffd60a] to-[#5a23c8]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 1, 0.4],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1],
              delay: 0,
            }}
          />
          <motion.div
            className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#ffd60a] to-[#5a23c8]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 1, 0.4],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
          />
          <motion.div
            className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#ffd60a] to-[#5a23c8]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 1, 0.4],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.4,
            }}
          />
        </div>
        <div className="flex items-center gap-1">
          <motion.span
            className="text-xs font-semibold text-[#ffd60a]"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Thinking
          </motion.span>
          <motion.span
            className="text-xs font-semibold text-[#ffd60a]"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            .
          </motion.span>
          <motion.span
            className="text-xs font-semibold text-[#ffd60a]"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7,
            }}
          >
            .
          </motion.span>
          <motion.span
            className="text-xs font-semibold text-[#ffd60a]"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9,
            }}
          >
            .
          </motion.span>
        </div>
      </div>
    </div>
  );
}
