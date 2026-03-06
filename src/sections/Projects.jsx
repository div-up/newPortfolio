import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PX = 'clamp(24px,6vw,96px)';

const PROJECTS = [
  { num:'01', title:'LOOMNOTES', year:'2024', desc:'Real-time collaborative note editor powered by WebSockets — multiple users, one canvas.', tags:['REACT','SOCKET.IO','EXPRESS','NODE.JS'], link:'#' },
  { num:'02', title:'GITMATCHED', year:'2024', desc:'A Tinder-style interface for discovering GitHub repositories — swipe to star, skip to pass.', tags:['REACT','REDUX','TAILWIND'], link:'#' },
  { num:'03', title:'DEVDASH', year:'2023', desc:'Developer productivity dashboard integrating GitHub, JIRA, and Slack for a unified workflow.', tags:['REACT','NODE.JS','REST API'], link:'#' },
  { num:'04', title:'SNAPCART', year:'2023', desc:'E-commerce platform with AI-powered product recommendations and blazing fast checkout.', tags:['NEXT.JS','STRIPE','MONGODB'], link:'#' },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <section id="projects" ref={ref} className="relative bg-[#0d0d0d] py-32" style={{paddingLeft:PX,paddingRight:PX}}>
      <motion.p initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5}}
        style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'clamp(10px,1vw,12px)',letterSpacing:'0.25em',color:'#666',marginBottom:'1.5rem'}}>
        SELECTED WORK
      </motion.p>
      <motion.div initial={{opacity:0,x:-40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.7,delay:0.1}}
        style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'clamp(48px,7vw,100px)',lineHeight:'0.92',marginBottom:'4rem'}}>
        <span style={{color:'#fff'}}>PROJECTS</span><br/>
        <span style={{color:'#c0522a'}}>I'M PROUD OF</span>
      </motion.div>
      <div className="flex flex-col gap-0">
        {PROJECTS.map((p, i) => (
          <motion.a key={p.num} href={p.link}
            initial={{opacity:0,y:40}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.2+i*0.1}}
            className="group border-t border-[#1e1e1e] py-8 md:py-10 grid md:grid-cols-[80px_1fr_auto] gap-6 items-center"
            style={{textDecoration:'none',transition:'background 0.3s'}}
            onMouseEnter={e=>e.currentTarget.style.background='#111'}
            onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
            <div style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'clamp(14px,1.5vw,18px)',color:'#333',letterSpacing:'0.1em'}}>{p.num}</div>
            <div>
              <div style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'clamp(28px,3.5vw,52px)',color:'#fff',lineHeight:1,letterSpacing:'0.03em',transition:'color 0.3s'}}
                className="group-hover:text-[#c0522a]">{p.title}</div>
              <div style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'clamp(12px,1vw,14px)',color:'#666',marginTop:'0.5rem',lineHeight:'1.6'}}>{p.desc}</div>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tags.map(t=>(
                  <span key={t} style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'10px',letterSpacing:'0.15em',color:'#c0522a',border:'1px solid #2a1a10',padding:'3px 10px',borderRadius:'2px'}}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'11px',letterSpacing:'0.15em',color:'#444'}}>{p.year}</div>
          </motion.a>
        ))}
        <div className="border-t border-[#1e1e1e]" />
      </div>
    </section>
  );
}
