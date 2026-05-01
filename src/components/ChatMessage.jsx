import { motion } from 'framer-motion';
import chatData from '../content/chat.json';

const { agentLabel, userLabel } = chatData;

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </svg>
  );
}

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

function renderText(text) {
  return text.split('\n').map((line, li, arr) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <span key={li}>
        {parts.map((part, pi) =>
          part.startsWith('**') && part.endsWith('**') ? (
            <strong key={pi} className="font-semibold text-th-hi">{part.slice(2, -2)}</strong>
          ) : part
        )}
        {li < arr.length - 1 && <br />}
      </span>
    );
  });
}

export default function ChatMessage({ message }) {
  const { type, text } = message;

  if (type === 'system') {
    return (
      <motion.div initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }}
        className="font-mono text-xs dark:text-emerald-400/75 text-emerald-600 pl-1 select-none tracking-wide">
        {text}
      </motion.div>
    );
  }

  if (type === 'agent') {
    return (
      <motion.article initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: 'easeOut' }}
        className="flex items-end gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-indigo-500/30 flex items-center justify-center mb-0.5 shadow-glow-sm"
          style={{ background: 'var(--agent-avatar-bg)', color: 'var(--agent-avatar-text)' }}>
          <AgentIcon />
        </div>
        <div className="flex flex-col gap-1 max-w-[80%]">
          <span className="text-[10px] font-semibold tracking-widest uppercase dark:text-indigo-400/70 text-indigo-500 pl-0.5">
            {agentLabel}
          </span>
          <div className="bg-th-card border border-th-border rounded-2xl rounded-bl-sm px-4 py-3 shadow-card">
            <p className="text-[13px] leading-[1.75] dark:text-slate-300 text-slate-600">{renderText(text)}</p>
          </div>
        </div>
      </motion.article>
    );
  }

  if (type === 'visitor') {
    return (
      <motion.article initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: 'easeOut' }}
        className="flex items-end justify-end gap-3">
        <div className="flex flex-col items-end gap-1 max-w-[72%]">
          <span className="text-[10px] font-semibold tracking-widest uppercase dark:text-blue-300/60 text-blue-600/70 pr-0.5">
            {userLabel}
          </span>
          <div className="rounded-2xl rounded-br-sm px-4 py-3 shadow-card"
            style={{
              background: 'var(--visitor-bubble-bg)',
              border: '1px solid var(--visitor-bubble-border)',
            }}>
            <p className="text-[13px] leading-[1.7] font-medium"
              style={{ color: 'var(--visitor-bubble-text)' }}>
              {text}
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-blue-500/25 flex items-center justify-center mb-0.5"
          style={{ background: 'var(--user-avatar-bg)', color: 'var(--user-avatar-text)' }}>
          <UserIcon />
        </div>
      </motion.article>
    );
  }

  return null;
}
