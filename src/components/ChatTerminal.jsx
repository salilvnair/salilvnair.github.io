import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import chatData from '../content/chat.json';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';

const { messages, terminalTitle, terminalStatusLabel, statusBarPlayingLabel, statusBarDoneLabel } = chatData;

export default function ChatTerminal() {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const chatAreaRef = useRef(null);
  const timersRef = useRef([]);

  useEffect(() => {
    let cumulativeDelay = 0;

    messages.forEach((message, index) => {
      cumulativeDelay += message.delay;

      if (message.type === 'agent') {
        const typingDelay = cumulativeDelay;
        const typingDuration = message.typingDuration || 1500;
        const messageDelay = cumulativeDelay + typingDuration;

        const t1 = setTimeout(() => setIsTyping(true), typingDelay);
        const t2 = setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages((prev) => [...prev, message]);
          if (index === messages.length - 1) setIsDone(true);
        }, messageDelay);

        timersRef.current.push(t1, t2);
        cumulativeDelay = messageDelay;
      } else {
        const t = setTimeout(() => {
          setVisibleMessages((prev) => [...prev, message]);
          if (index === messages.length - 1) setIsDone(true);
        }, cumulativeDelay);
        timersRef.current.push(t);
      }
    });

    return () => timersRef.current.forEach(clearTimeout);
  }, []);

  /* Scroll only the chat container — never hijack page scroll */
  useEffect(() => {
    const el = chatAreaRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [visibleMessages, isTyping]);

  return (
    <div className="w-full max-w-2xl mx-auto animate-glow-pulse">
      <div
        className="rounded-2xl overflow-hidden border border-th-border bg-th-surface"
        style={{ boxShadow: 'var(--terminal-shadow)' }}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-th-card border-b border-th-border">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57] cursor-default" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e] cursor-default" />
            <span className="w-3 h-3 rounded-full bg-[#28c840] cursor-default" />
          </div>
          <span className="font-mono text-xs text-th-faint tracking-wider">{terminalTitle}</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[10px] dark:text-emerald-400/80 text-emerald-600">{terminalStatusLabel}</span>
          </div>
        </div>

        {/* Chat area — isolated scroll */}
        <div ref={chatAreaRef} className="h-[420px] overflow-y-auto px-5 py-5 flex flex-col gap-3 bg-th-surface">
          {visibleMessages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}

          <AnimatePresence>
            {isTyping && (
              <motion.div key="typing" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.2 }}>
                <TypingIndicator />
              </motion.div>
            )}
          </AnimatePresence>

          {isDone && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="flex items-center gap-2 pl-11 mt-1">
              <span className="font-mono text-xs text-th-faint">›</span>
              <span className="w-2 h-4 bg-indigo-500/60 rounded-sm animate-cursor-blink" />
            </motion.div>
          )}
        </div>

        {/* Status bar */}
        <div className="px-5 py-2 bg-th-card border-t border-th-border flex items-center justify-between">
          <span className="font-mono text-[10px] text-th-faint">
            {visibleMessages.length}/{messages.length} messages
          </span>
          <span className="font-mono text-[10px] text-th-faint">
            {isDone ? statusBarDoneLabel : statusBarPlayingLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
