import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PX = 'clamp(28px,8vw,152px)';

const STATS = [['2.5+','YEARS EXPERIENCE'],['3+','PROJECTS WORKED ON'],['50K+','PARTNERS SERVED'],['10+','TECHNOLOGIES']];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <section id="about" ref={ref} className="relative py-32" style={{ paddingLeft: PX, paddingRight: PX, background: 'var(--section-alt)' }}>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
        style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 'clamp(10px,1vw,12px)', letterSpacing: '0.25em', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        ABOUT ME
      </motion.p>
      <div style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: 'clamp(48px,7vw,100px)', lineHeight: '0.92', marginBottom: '3rem' }}>
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
          <span>I'M A</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
          <span style={{ color: 'var(--accent)' }}>PASSIONATELY SKILLED</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}>
          <span>SOFTWARE ENGINEER</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.4 }}>
          <span>WITH STRONG FOCUS ON</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.5 }}>
          <span style={{ color: 'var(--accent)' }}>HIGH QUALITY &amp; IMPACTFUL</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.6 }}>
          <span>DIGITAL EXPERIENCES.</span>
        </motion.div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20">
        {STATS.map(([num, label], i) => (
          <motion.div key={label} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}>
            <div style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: 'clamp(36px,5vw,72px)', color: 'var(--accent)', lineHeight: 1 }}>{num}</div>
            <div style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 'clamp(9px,0.9vw,11px)', letterSpacing: '0.2em', color: 'var(--muted)', marginTop: '0.5rem' }}>{label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
