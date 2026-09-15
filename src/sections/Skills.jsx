import {
  Atom,
  Boxes,
  BrainCircuit,
  Braces,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Gauge,
  Layers3,
  Network,
  Package,
  Route,
  Server,
  Settings2,
  Wind,
  Workflow,
  Wrench,
} from 'lucide-react';

import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import SectionLabel from '../components/SectionLabel';

const FOUNDATION = {
  label: '01 · FOUNDATION',
  title: 'CONCEPTS',
  icon: BrainCircuit,
  intro: 'The engineering principles behind every product decision.',
  skills: [
    [Layers3, 'Micro-Frontend'],
    [Network, 'System Design'],
    [Boxes, 'OOP'],
    [Workflow, 'CI / CD'],
    [Settings2, 'Agile'],
    [Gauge, 'Performance'],
  ],
};

const CORE = [
  {
    label: '02 · SERVICES',
    title: 'BACKEND',
    icon: Server,
    intro: 'Services, APIs, and dependable data.',
    skills: [
      [Server, 'Node.js'],
      [Route, 'Express.js'],
      [Network, 'REST APIs'],
      [Network, 'GraphQL'],
      [Database, 'MongoDB'],
      [Database, 'MySQL'],
    ],
  },
  {
    label: '03 · EXPERIENCES',
    title: 'FRONTEND',
    icon: Atom,
    intro: 'Interfaces that are clear, fast, and responsive.',
    skills: [
      [Atom, 'React'],
      [Braces, 'JavaScript'],
      [FileCode2, 'TypeScript'],
      [Wind, 'Tailwind CSS'],
      [Code2, 'HTML / CSS'],
      [Workflow, 'Redux'],
    ],
  },
];

const TOOLING = {
  label: '04 · DELIVERY',
  title: 'TOOLING',
  icon: Wrench,
  intro: 'The workflow that turns the system into a shipped product.',
  skills: [
    [GitBranch, 'Git / GitHub'],
    [Code2, 'VS Code'],
    [Gauge, 'Vite'],
    [Package, 'Webpack'],
    [Settings2, 'Azure DevOps'],
    [Wrench, 'Cursor'],
  ],
};

function SkillTags({ skills }) {
  return (
    <ul className="skill-tags">
      {skills.map(([Icon, skill]) => (
        <li key={skill} className="skill-tag">
          <Icon size={14} strokeWidth={1.8} aria-hidden="true" />
          {skill}
        </li>
      ))}
    </ul>
  );
}

function SystemCard({ group }) {
  const Icon = group.icon;

  return (
    <article className="system-card">
      <div className="system-card-header">
        <div>
          <p className="system-label">{group.label}</p>
          <h3 className="system-title">{group.title}</h3>
        </div>

        <span className="system-icon">
          <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
        </span>
      </div>

      <p className="system-intro">{group.intro}</p>

      <SkillTags skills={group.skills} />
    </article>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <SectionLabel label="HOW I BUILD" />

      <SectionHeading accent="BUILD SYSTEM">
        MY TECH
      </SectionHeading>

      <div className="skills-system">
        <Reveal delay={0.15}>
          <SystemCard group={FOUNDATION} />
        </Reveal>

        <div className="system-connector" />

        <div className="core-skills">
          {CORE.map((group, index) => (
            <Reveal key={group.title} delay={0.2 + index * 0.1}>
              <SystemCard group={group} />
            </Reveal>
          ))}
        </div>

        <div className="system-connector" />

        <Reveal delay={0.4}>
          <SystemCard group={TOOLING} />
        </Reveal>
      </div>
    </section>
  );
}