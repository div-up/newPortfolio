import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const HISTORY = [
  { period: 'NOW', title: 'Software Developer (SDE-1)', company: 'Jio Platforms Limited', year: '2024' },
  { period: '2023', title: 'Graduate Engineer Trainee (GET)', company: 'Jio Platforms Limited', year: '2023' },
];

const Experience = () => (
  <section id="experience" className="min-h-screen flex flex-col justify-center px-14 md:px-20 py-32" style={{ background: 'var(--section-bg)' }}>
    <SectionLabel label="EXPERIENCE" />
    <motion.p
      initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}
      className="text-[4.5vw] md:text-[3.5vw] font-extrabold text-[var(--muted-strong)] leading-[1.15] mb-20 max-w-4xl">
      Over <span className="text-[var(--accent)]">2 years</span> of experience in frontend & fullstack development, working on scalable apps used by millions.
    </motion.p>
    <div>
      <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] opacity-40 mb-8">HISTORY</p>
      {HISTORY.map((item, i) => (
        <motion.div key={i}
          initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.15}}
          className="border-b border-[var(--section-border)] py-6 grid grid-cols-3 gap-4 group hover:border-[var(--accent)] transition-colors duration-300">
          <span className="text-[var(--muted-strong)] opacity-50 font-bold text-lg">{item.period}</span>
          <div>
            <p className="text-[var(--muted-strong)] font-bold text-xl group-hover:text-[var(--text)] transition-colors duration-200">{item.title}</p>
            <p className="text-[var(--muted-strong)] opacity-50 text-sm mt-1">{item.company}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
export default Experience;
