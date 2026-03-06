import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PX = 'clamp(24px,6vw,96px)';

const CATS = [
  { name: 'FRONTEND', skills: ['React','Next.js','JavaScript (ES6+)','TypeScript','Tailwind CSS','HTML5/CSS3','Redux'] },
  { name: 'BACKEND', skills: ['Node.js','Express.js','REST APIs','GraphQL','MongoDB','MySQL','Firebase'] },
  { name: 'TOOLING', skills: ['Git/GitHub','VS Code','Vite','Webpack','Jest','Azure DevOps','Figma'] },
  { name: 'CONCEPTS', skills: ['Micro-Frontend','System Design','DSA','OOPS','CI/CD','Agile','Performance Opt.'] },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <section id="skills" ref={ref} className="relative bg-[#0d0d0d] py-32" style={{paddingLeft:PX,paddingRight:PX}}>
      <motion.p initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5}}
        style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'clamp(10px,1vw,12px)',letterSpacing:'0.25em',color:'#666',marginBottom:'1.5rem'}}>
        WHAT I WORK WITH
      </motion.p>
      <motion.div initial={{opacity:0,x:-40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.7,delay:0.1}}
        style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'clamp(48px,7vw,100px)',lineHeight:'0.92',marginBottom:'4rem'}}>
        <span style={{color:'#fff'}}>MY SKILLS &amp;</span><br/>
        <span style={{color:'#c0522a'}}>EXPERTISE</span>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e]">
        {CATS.map((cat, i) => (
          <motion.div key={cat.name}
            initial={{opacity:0,y:40}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.2+i*0.1}}
            className="bg-[#0d0d0d] p-8 group hover:bg-[#111] transition-colors">
            <div style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'clamp(20px,2vw,28px)',color:'#c0522a',letterSpacing:'0.05em',marginBottom:'1.5rem'}}>{cat.name}</div>
            <ul className="flex flex-col gap-3">
              {cat.skills.map((s, j) => (
                <motion.li key={s}
                  initial={{opacity:0,x:-20}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.4,delay:0.3+i*0.05+j*0.05}}
                  className="flex items-center gap-3"
                  style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'clamp(12px,1.1vw,14px)',color:'#888'}}>
                  <span style={{width:4,height:4,borderRadius:'50%',background:'#c0522a',display:'inline-block',flexShrink:0}}/>
                  {s}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
