import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function SystemIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-3.5 h-3.5">
      <rect x="3" y="3" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

const OPTIONS = [
  { value: 'system', Icon: SystemIcon, label: 'System default' },
  { value: 'light',  Icon: () => <Sun  size={13} strokeWidth={2.2} />, label: 'Light theme'  },
  { value: 'dark',   Icon: () => <Moon size={13} strokeWidth={2.2} />, label: 'Dark theme'   },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Theme selector"
      className="flex items-center rounded-full p-0.5 bg-th-card border border-th-border gap-0"
    >
      {OPTIONS.map(({ value, Icon, label }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            onClick={() => setTheme(value)}
            title={label}
            aria-pressed={active}
            className="relative w-[28px] h-[26px] flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 transition-colors duration-150"
          >
            {active && (
              <motion.span
                layoutId="theme-pill"
                className="absolute inset-0 rounded-full bg-th-surface border border-th-border shadow-sm"
                transition={{ type: 'spring', stiffness: 420, damping: 32 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors duration-150 ${
                active
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-th-faint hover:text-th-lo'
              }`}
            >
              <Icon />
            </span>
          </button>
        );
      })}
    </div>
  );
}
