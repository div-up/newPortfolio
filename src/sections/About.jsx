import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const lines = [
  { text: "I'm a ", highlight: null },
  { text: 'passionately skilled', highlight: true },
  { text: 'fullstack developer with', highlight: null },
  { text: 'strong focus on building', highlight: null },
  { text: 'high quality & impactful', highlight: null },
  { text: 'digital experiences.', highlight: false, muted: true },
];

const About = () => (
  <section id="about" className="min-h-screen flex flex-col justify-center px-14 md:px-20 py-32 bg-[#0a0a0a]">
    <SectionLabel label="ABOUT ME" />
    <h2 className="text-[5.5vw] md:text-[4.5vw] font-extrabold leading-[1.1] max-w-5xl">
      {[
        { text: "I'm a ", hl: false, muted: false },
        { text: 'passionately skilled', hl: true, muted: false },
        { text: 'fullstack developer with', hl: false, muted: false },
        { text: 'strong focus on building', hl: false, muted: false },
        { text: 'high quality & impactful', hl: false, muted: false },
        { text: 'digital experiences.', hl: false, muted: true },
      ].map(({ text, hl, muted }, i) => (
        <motion.span key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: muted ? 0.35 : 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: i * 0.12 }}
          className={`block ${hl ? 'text-[#E85D26]' : 'text-[#C4A882]'}`}>
          {text}
        </motion.span>
      ))}
    </h2>
  </section>
);
export default About;
