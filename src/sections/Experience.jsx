import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import SectionLabel from '../components/SectionLabel';

const JOBS = [
  {
    num: '01',
    date: 'MAR 2026 — PRESENT',
    title: 'CONSULTANT',
    co: 'DELOITTE',
    desc: 'Building scalable business applications and contributing to digital transformation. Working across modern frontend stacks to deliver high-quality, performant solutions for enterprise clients.',
    tags: ['REACT', 'MICRO-FE', 'AZURE', 'JEST'],
  },
  {
    num: '02',
    date: 'DEC 2023 — MAR 2026',
    title: 'SOFTWARE DEVELOPER (SDE-1)',
    co: 'JIO PLATFORMS LIMITED',
    desc: 'Built and maintained scalable web applications and partner-facing platforms. Contributed to Micro-frontend architecture, performance optimization, and a shared component library used across products.',
    tags: ['REACT', 'TYPESCRIPT', 'MICRO-FE', 'JEST'],
  },
];

export default function Work() {
  return (
    <section id="work" className="section">
      <SectionLabel label="WORK EXPERIENCE" />

      <SectionHeading accent="MADE IMPACT">
        WHERE I'VE
      </SectionHeading>

      <div className="work-list">
        {JOBS.map((job, index) => (
          <Reveal key={job.num} delay={0.15 + index * 0.1}>
            <article className="work-item">
              <div>
                <div className="work-number">{job.num}</div>
                <div className="eyebrow">{job.date}</div>
              </div>

              <div className="work-content">
                <div className="work-title">{job.title}</div>
                <div className="work-company">{job.co}</div>
                <div className="work-description">{job.desc}</div>

                <div className="tag-list">
                  {job.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        <div className="list-end" />
      </div>
    </section>
  );
}