import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import SectionLabel from '../components/SectionLabel';

const STATS = [
  ['2.5+', 'YEARS EXPERIENCE'],
  ['3+', 'PROJECTS WORKED ON'],
  ['50K+', 'PARTNERS SERVED'],
  ['10+', 'TECHNOLOGIES'],
];

const LINES = [
  "I'M A",
  'PASSIONATELY SKILLED',
  'SOFTWARE ENGINEER',
  'WITH STRONG FOCUS ON',
  'HIGH QUALITY & IMPACTFUL',
  'DIGITAL EXPERIENCES.',
];

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <SectionLabel label="ABOUT ME" />

      <div className="about-heading">
        {LINES.map((line, index) => (
          <Reveal
            key={line}
            type="left"
            delay={0.1 + index * 0.08}
          >
            <span className={index === 1 || index === 4 ? 'accent' : ''}>
              {line}
            </span>
          </Reveal>
        ))}
      </div>

      <div className="stats-grid">
        {STATS.map(([number, label], index) => (
          <Reveal key={label} delay={0.25 + index * 0.08}>
            <div className="stat-number">{number}</div>
            <div className="stat-label">{label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}