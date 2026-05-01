import { motion } from 'framer-motion';
import { Code2, Database, Globe, Wrench, Layers, Terminal } from 'lucide-react';
import skillsData from '../content/skills.json';
import statsData from '../content/stats.json';

const { section, groups } = skillsData;
const { items: stats } = statsData;

const ICON_MAP = { Code2, Database, Globe, Wrench, Layers, Terminal };

function SkillBadge({ name, level, color }) {
  return (
    <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl bg-th-surface border border-th-border transition-all">
      <span className="text-sm text-th-mid font-medium">{name}</span>
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((dot) => (
          <span key={dot} className="w-1.5 h-1.5 rounded-full transition-all"
            style={{
              background: dot <= level ? color : 'var(--dot-inactive)',
              boxShadow: dot <= level ? `0 0 4px ${color}` : 'none',
            }} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-th-border">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-purple-500/10 bg-purple-50 dark:border-purple-500/20 border-purple-200 border dark:text-purple-400 text-purple-600 text-xs font-semibold mb-4 uppercase tracking-widest">
            <Code2 size={12} />
            {section.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-th-hi mb-3">{section.title}</h2>
          <p className="dark:text-slate-400 text-slate-500 text-base max-w-lg mx-auto">{section.description}</p>
        </motion.div>

        {/* Stats strip */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center p-5 rounded-2xl bg-th-card border border-th-border text-center">
              <span className="text-3xl font-black mb-1" style={{ color: stat.color }}>{stat.value}</span>
              <span className="text-xs text-th-lo font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, gi) => {
            const Icon = ICON_MAP[group.icon] ?? Code2;
            return (
              <motion.div key={group.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }} transition={{ duration: 0.5, delay: gi * 0.07 }}
                className="rounded-2xl bg-th-card border border-th-border p-5">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${group.color}20` }}>
                    <Icon size={15} style={{ color: group.color }} />
                  </div>
                  <h3 className="font-semibold text-th-hi text-sm">{group.label}</h3>
                </div>
                <div className="flex flex-col gap-2">
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill.name} {...skill} color={group.color} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
