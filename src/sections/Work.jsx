import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const PROJECTS = [
  { title: 'QuizWhiz', desc: 'Full-stack trivia quiz app with React & Express', tags: ['React','Express','MongoDB','Tailwind'], link: 'https://triviaquizwhiz.netlify.app/' },
  { title: 'Sorting Visualizer', desc: 'Interactive sorting algorithm visualizer', tags: ['React','Bootstrap'], link: 'https://sortingvisualizer-web.netlify.app/' },
  { title: 'LoomNotes', desc: 'Real-time collaborative note editor with WebSockets', tags: ['React','Socket.io','Express'], link: '#' },
  { title: 'GitMatched', desc: 'Tinder-style GitHub repo discovery interface', tags: ['React','Redux','Tailwind'], link: '#' },
];

const Work = () => (
  <section id="work" className="min-h-screen flex flex-col justify-center px-14 md:px-20 py-32 bg-[#0a0a0a]">
    <SectionLabel label="SELECTED WORK" />
    <div className="grid grid-cols-1 gap-1">
      {PROJECTS.map((p, i) => (
        <motion.a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer"
          initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          transition={{duration:0.5,delay:i*0.1}}
          className="border-b border-[#1a1a1a] py-8 group flex items-center justify-between hover:border-[#E85D26] transition-all duration-300 cursor-none">
          <div>
            <p className="text-[5vw] md:text-[3.5vw] font-extrabold text-[#C4A882] group-hover:text-white transition-colors duration-200 leading-none tracking-tight uppercase">{p.title}</p>
            <p className="text-[#C4A882] opacity-40 mt-2 text-sm">{p.desc}</p>
            <div className="flex gap-2 mt-3 flex-wrap">
              {p.tags.map(t => (
                <span key={t} className="text-[10px] tracking-[0.2em] uppercase text-[#E85D26] border border-[#E85D26] px-2 py-0.5 opacity-70">{t}</span>
              ))}
            </div>
          </div>
          <motion.span className="text-[#E85D26] text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{x:[0,8,0]}} transition={{repeat:Infinity,duration:1.5}}>→</motion.span>
        </motion.a>
      ))}
    </div>
  </section>
);
export default Work;
