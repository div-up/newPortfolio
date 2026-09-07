import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Atom, Boxes, BrainCircuit, Braces, Code2, Database, FileCode2, GitBranch,
  Gauge, Layers3, Network, Package, Route, Server, Settings2, Wind, Workflow, Wrench,
} from 'lucide-react';

const PX = 'clamp(28px,8vw,152px)';

const FOUNDATION = {
  label: '01 · FOUNDATION',
  title: 'CONCEPTS',
  icon: BrainCircuit,
  intro: 'The engineering principles behind every product decision.',
  skills: [[Layers3, 'Micro-Frontend'], [Network, 'System Design'], [Boxes, 'OOP'], [Workflow, 'CI / CD'], [Settings2, 'Agile'], [Gauge, 'Performance']],
};

const CORE = [
  {
    label: '02 · SERVICES', title: 'BACKEND', icon: Server,
    intro: 'Services, APIs, and dependable data.',
    skills: [[Server, 'Node.js'], [Route, 'Express.js'], [Network, 'REST APIs'], [Network, 'GraphQL'], [Database, 'MongoDB'], [Database, 'MySQL']],
  },
  {
    label: '03 · EXPERIENCES', title: 'FRONTEND', icon: Atom,
    intro: 'Interfaces that are clear, fast, and responsive.',
    skills: [[Atom, 'React'], [Braces, 'JavaScript'], [FileCode2, 'TypeScript'], [Wind, 'Tailwind CSS'], [Code2, 'HTML / CSS'], [Workflow, 'Redux']],
  },
];

const TOOLING = {
  label: '04 · DELIVERY',
  title: 'TOOLING',
  icon: Wrench,
  intro: 'The workflow that turns the system into a shipped product.',
  skills: [[GitBranch, 'Git / GitHub'], [Code2, 'VS Code'], [Gauge, 'Vite'], [Package, 'Webpack'], [Settings2, 'Azure DevOps'], [Wrench, 'Cursor']],
};

function SkillTags({ skills }) {
  return (
    <ul className="flex flex-wrap gap-2 mt-6">
      {skills.map(([Icon, skill]) => (
        <li key={skill} className="flex items-center gap-2"
          style={{ color: 'var(--muted)', border: '1px solid var(--card-border)', padding: '7px 9px', fontSize: '12px', lineHeight: 1 }}>
          <Icon size={14} strokeWidth={1.8} color="var(--accent)" aria-hidden="true" />
          {skill}
        </li>
      ))}
    </ul>
  );
}

function SystemCard({ group }) {
  const Icon = group.icon;
  return (
    <article style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', padding: 'clamp(22px, 3vw, 36px)' }}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '0.8rem' }}>{group.label}</p>
          <h3 style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: 'clamp(30px, 3.3vw, 46px)', lineHeight: 0.9, letterSpacing: '0.04em' }}>{group.title}</h3>
        </div>
        <span className="grid place-items-center" style={{ width: 42, height: 42, color: 'var(--accent)', border: '1px solid var(--card-border)' }}>
          <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
        </span>
      </div>
      <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.55, marginTop: '1rem' }}>{group.intro}</p>
      <SkillTags skills={group.skills} />
    </article>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="skills" ref={ref} className="relative" style={{ paddingLeft: PX, paddingRight: PX, background: 'var(--section-alt)' }}>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
        style={{ fontSize: 'clamp(10px,1vw,12px)', letterSpacing: '0.25em', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        HOW I BUILD
      </motion.p>
      <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
        style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: 'clamp(48px,7vw,100px)', lineHeight: '0.92', marginBottom: '3rem' }}>
        <span style={{ color: 'var(--text)' }}>MY TECH</span><br />
        <span style={{ color: 'var(--accent)' }}>BUILD SYSTEM</span>
      </motion.div>

      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.2 }}>
          <SystemCard group={FOUNDATION} />
        </motion.div>
        <div aria-hidden="true" className="mx-auto" style={{ width: 1, height: 34, background: 'var(--accent)' }} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          <div aria-hidden="true" className="hidden md:block absolute left-1/4 right-1/4 top-0" style={{ height: 1, background: 'var(--accent)' }} />
          {CORE.map((group, index) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3 + index * 0.1 }}>
              <SystemCard group={group} />
            </motion.div>
          ))}
        </div>
        <div aria-hidden="true" className="mx-auto" style={{ width: 1, height: 34, background: 'var(--accent)' }} />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.55 }}>
          <SystemCard group={TOOLING} />
        </motion.div>
      </div>
    </section>
  );
}
