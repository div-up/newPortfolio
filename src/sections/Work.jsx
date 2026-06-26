import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PX = 'clamp(24px,6vw,96px)';

const JOBS = [
  { num: '01', date: 'MAR 2026 — PRESENT', title: 'CONSULTANT', co: 'DELOITTE', desc: 'Building scalable business applications and contributing to digital transformation. Working across modern frontend stacks to deliver high-quality, performant solutions for enterprise clients.', tags: ['REACT','MICRO-FE','AZURE','JEST'] },
  { num: '02', date: 'DEC 2023 — MAR 2026', title: 'SOFTWARE DEVELOPER (SDE-1)', co: 'JIO PLATFORMS LIMITED', desc: 'Built and maintained scalable web applications and partner-facing platforms. Contributed to Micro-frontend architecture, performance optimization, and a shared component library used across products.', tags: ['REACT','TYPESCRIPT','MICRO-FE','JEST'] },
];

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <section id="work" ref={ref} className="relative py-32" style={{ paddingLeft: PX, paddingRight: PX, background: 'var(--section-bg)' }}>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
        style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 'clamp(10px,1vw,12px)', letterSpacing: '0.25em', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        WORK EXPERIENCE
      </motion.p>
      <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
        style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: 'clamp(48px,7vw,100px)', lineHeight: '0.92', marginBottom: '4rem' }}>
        <span style={{ color: 'var(--text)' }}>WHERE I'VE</span><br/>
        <span style={{ color: 'var(--accent)' }}>MADE IMPACT</span>
      </motion.div>
      <div className="flex flex-col gap-0">
        {JOBS.map((job, i) => (
          <motion.div key={job.num}
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            className="group border-t py-10 md:py-12 grid md:grid-cols-[1fr_2fr] gap-8 cursor-pointer"
            style={{ transition: 'background 0.3s', borderTopColor: 'var(--section-border)', background: 'transparent' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--card-bg)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
            <div>
              <div style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: 'clamp(60px,8vw,120px)', color: 'var(--text)', lineHeight: 1, transition: 'color 0.3s' }}
                className="group-hover:text-[var(--accent)]">{job.num}</div>
              <div style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 'clamp(9px,0.9vw,11px)', letterSpacing: '0.2em', color: 'var(--muted)', marginTop: '0.5rem' }}>{job.date}</div>
            </div>
            <div className="flex flex-col justify-center">
              <div style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: 'clamp(22px,2.5vw,36px)', color: 'var(--text)', letterSpacing: '0.05em' }}>{job.title}</div>
              <div style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 'clamp(11px,0.9vw,13px)', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{job.co}</div>
              <div style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 'clamp(13px,1.1vw,15px)', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '1rem' }}>{job.desc}</div>
              <div className="flex flex-wrap gap-2">
                {job.tags.map(t => (
                  <span key={t} style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: '10px', letterSpacing: '0.15em', color: 'var(--accent)', border: '1px solid var(--card-border)', padding: '3px 10px', borderRadius: '2px' }}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
        <div className="border-t" style={{ borderColor: 'var(--section-border)' }} />
      </div>
    </section>
  );
}
