import { useState, useEffect } from 'react';
import { Github, Zap, Menu, X } from 'lucide-react';
import navData from '../content/navigation.json';
import ThemeToggle from './ThemeToggle';

const { brand, links, cta } = navData;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl border-b border-th-border' : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'var(--navbar-bg)' } : {}}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => scrollTo(brand.homeSectionId)} className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-glow-sm">
            <Zap size={14} className="text-white" />
          </div>
          <span className="font-mono font-semibold dark:text-slate-200 text-slate-700 group-hover:text-th-hi transition-colors">
            {brand.name}<span className="text-indigo-500 dark:text-indigo-400">{brand.tld}</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((item) => (
            <button key={item.sectionId} onClick={() => scrollTo(item.sectionId)}
              className="px-4 py-2 text-sm dark:text-slate-400 text-slate-500 dark:hover:text-white hover:text-slate-900 rounded-lg dark:hover:bg-white/5 hover:bg-slate-100 transition-all">
              {item.label}
            </button>
          ))}

          {/* Theme toggle */}
          <div className="mx-2">
            <ThemeToggle />
          </div>

          <a href={cta.url} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all shadow-glow-sm hover:shadow-glow-md">
            <Github size={15} />
            {cta.label}
          </a>
        </div>

        {/* Mobile right: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="text-th-lo hover:text-th-hi p-2" onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden backdrop-blur-xl border-b border-th-border px-6 py-4 flex flex-col gap-2"
          style={{ background: 'var(--navbar-mobile-bg)' }}
        >
          {links.map((item) => (
            <button key={item.sectionId} onClick={() => scrollTo(item.sectionId)}
              className="text-left px-4 py-3 text-sm dark:text-slate-300 text-slate-600 dark:hover:text-white hover:text-slate-900 dark:hover:bg-white/5 hover:bg-slate-100 rounded-lg transition-all">
              {item.label}
            </button>
          ))}
          <a href={cta.url} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 text-sm text-white bg-indigo-600 rounded-lg">
            <Github size={15} />
            {cta.label}
          </a>
        </div>
      )}
    </nav>
  );
}
