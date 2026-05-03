import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import projectsData from '../content/projects.json';
import ProjectCard from './ProjectCard';

const { section, categories, items } = projectsData;

/** Category field can be a string or an array — normalise to array for matching. */
function inCategory(project, catId) {
  const cats = Array.isArray(project.category) ? project.category : [project.category];
  return cats.includes(catId);
}

const categoriesWithCount = categories.map((cat) => ({
  ...cat,
  count: cat.id === 'all' ? items.length : items.filter((p) => inCategory(p, cat.id)).length,
}));

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? items
    : items.filter((p) => inCategory(p, activeCategory));

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-indigo-500/10 bg-indigo-50 dark:border-indigo-500/20 border-indigo-200 border dark:text-indigo-400 text-indigo-600 text-xs font-semibold mb-4 uppercase tracking-widest">
            <Layers size={12} />
            {section.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-th-hi mb-3">{section.title}</h2>
          <p className="dark:text-slate-400 text-slate-500 text-base max-w-xl mx-auto">{section.description}</p>
        </motion.div>

        {/* Category tabs */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categoriesWithCount.map((cat) => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-glow-sm'
                  : 'bg-th-card border border-th-border dark:text-slate-400 text-slate-500 dark:hover:text-white hover:text-slate-900 hover:border-indigo-500/40'
              }`}>
              {cat.label}
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                activeCategory === cat.id
                  ? 'bg-white/20 text-white'
                  : 'dark:bg-white/5 bg-slate-200/60 dark:text-slate-500 text-slate-500'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mt-14 text-center">
          <p className="dark:text-slate-500 text-slate-400 text-sm mb-4">{section.footerNote}</p>
          <a href={section.footerCtaUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-th-card border border-th-border text-th-hi font-medium hover:border-indigo-500/50 dark:hover:bg-indigo-500/10 hover:bg-indigo-50 transition-all text-sm">
            {section.footerCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
