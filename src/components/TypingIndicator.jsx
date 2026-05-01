import { motion } from 'framer-motion';
import chatData from '../content/chat.json';

const { agentLabel } = chatData;

function AgentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
      <path d="M6 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -4" />
      <path d="M12 2v2" />
      <path d="M9 12v9" /><path d="M15 12v9" />
      <path d="M5 16l4 -2" /><path d="M15 14l4 2" />
      <path d="M9 18h6" />
      <path d="M10 8v.01" /><path d="M14 8v.01" />
    </svg>
  );
}

export default function TypingIndicator() {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }}
      className="flex items-end gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-indigo-500/30 flex items-center justify-center mb-0.5 shadow-glow-sm"
        style={{ background: 'var(--agent-avatar-bg)', color: 'var(--agent-avatar-text)' }}>
        <AgentIcon />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-semibold tracking-widest uppercase dark:text-indigo-400/70 text-indigo-500 pl-0.5">
          {agentLabel}
        </span>
        <div className="bg-th-card border border-th-border rounded-2xl rounded-bl-sm px-4 py-3 shadow-card">
          <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="w-2 h-2 rounded-full bg-indigo-400 inline-block animate-typing-dot"
                style={{ animationDelay: `${i * 0.16}s` }} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
