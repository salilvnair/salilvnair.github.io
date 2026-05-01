import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ChevronDown, Calendar, Zap } from 'lucide-react';
import Navbar from './components/Navbar';
import ChatTerminal from './components/ChatTerminal';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
import profileData from './content/profile.json';
import siteData from './content/site.json';

const { firstName, lastName, title, subtitle, experienceStart, experienceEnd, yearsLabel, heroCta, github } = profileData;

export default function App() {
  useEffect(() => {
    document.title = siteData.title;
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-th-bg min-h-screen text-th-mid overflow-x-hidden transition-colors duration-200">
      <Navbar />

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-6 bg-grid">

        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full dark:bg-indigo-600/5 bg-indigo-400/10 blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full dark:bg-purple-600/5 bg-purple-400/10 blur-[100px]" />
        </div>

        {/* Experience badge */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-th-card border border-th-border text-sm dark:text-slate-400 text-slate-600">
          <Calendar size={13} className="dark:text-indigo-400 text-indigo-500" />
          <span>{experienceStart} → {experienceEnd}&nbsp;·&nbsp;</span>
          <Zap size={13} className="dark:text-yellow-400 text-yellow-500" />
          <span className="text-th-hi font-medium">{yearsLabel}</span>
        </motion.div>

        {/* Name */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
          className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-3">
            <span className="text-th-hi">{firstName}&nbsp;</span>
            <span className="text-gradient">{lastName}</span>
          </h1>
          <p className="dark:text-slate-400 text-slate-500 text-lg md:text-xl font-light max-w-md mx-auto">
            {title}&nbsp;&nbsp;·&nbsp;&nbsp;{subtitle}
          </p>
        </motion.div>

        {/* Chat terminal */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full">
          <ChatTerminal />
        </motion.div>

        {/* Scroll CTA */}
        <motion.button onClick={scrollToProjects} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 2.5 }}
          className="mt-10 flex flex-col items-center gap-1.5 dark:text-slate-500 text-slate-400 dark:hover:text-slate-300 hover:text-slate-700 transition-colors group">
          <span className="text-xs font-medium tracking-wide uppercase">{heroCta}</span>
          <ChevronDown size={18} className="animate-scroll-bounce" />
        </motion.button>
      </section>

      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}
