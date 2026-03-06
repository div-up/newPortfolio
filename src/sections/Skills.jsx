import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const SKILLS = [
  'REACT', 'JAVASCRIPT', 'TYPESCRIPT',
  'NODE.JS', 'EXPRESS', 'MONGODB',
  'TAILWIND', 'GIT', 'AZURE DEVOPS',
];

const Skills = () => (
  <section id="skills" className="min-h-screen flex flex-col justify-center px-14 md:px-20 py-32 bg-[#0a0a0a]">
    <SectionLabel label="WHAT I DO" />
    <div>
      {SKILLS.map((skill, i) => (
        <motion.div key={skill}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className="border-b border-[#1a1a1a] py-3 group cursor-default">
          <motion.p
            whileHover={{ x: 16, color: '#E85D26' }}
            className="text-[5vw] md:text-[4vw] font-extrabold text-[#C4A882] leading-none tracking-tight uppercase transition-colors duration-200">
            {skill}
          </motion.p>
        </motion.div>
      ))}
    </div>
  </section>
);
export default Skills;
