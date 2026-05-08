import { motion } from 'framer-motion';
import { LayoutGrid } from 'lucide-react';
import frameworkData from '../content/framework.json';
import FrameworkCard from './FrameworkCard';

const { section, items } = frameworkData;

export default function FrameworkSection() {
  return (
    <section id="framework" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-purple-500/10 bg-purple-50 dark:border-purple-500/20 border-purple-200 border dark:text-purple-400 text-purple-600 text-xs font-semibold mb-4 uppercase tracking-widest">
            <LayoutGrid size={12} />
            {section.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-th-hi mb-3">{section.title}</h2>
          <p className="dark:text-slate-400 text-slate-500 text-base max-w-xl mx-auto">{section.description}</p>
        </motion.div>

        {/* Framework cards grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <FrameworkCard key={item.id} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
