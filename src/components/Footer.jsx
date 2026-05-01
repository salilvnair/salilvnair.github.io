import { Github, Zap, Heart } from 'lucide-react';
import navData from '../content/navigation.json';

const { brand, footer } = navData;

export default function Footer() {
  return (
    <footer className="border-t border-th-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Zap size={12} className="text-white" />
          </div>
          <span className="font-mono text-sm font-semibold text-th-lo">
            {brand.name}<span className="text-indigo-500 dark:text-indigo-400">{brand.tld}</span>
          </span>
        </div>

        {/* Center */}
        <p className="text-xs text-th-faint flex items-center gap-1.5">
          {footer.builtWith}
          <span className="text-th-border">·</span>
          <Heart size={11} className="text-pink-500/60" />
          <span>{footer.openSourceLabel}</span>
        </p>

        {/* GitHub */}
        <a href={footer.githubUrl} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-th-lo dark:hover:text-white hover:text-slate-900 transition-colors">
          <Github size={14} />
          {footer.githubDisplay}
        </a>
      </div>
    </footer>
  );
}
