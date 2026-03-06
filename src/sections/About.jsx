import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const PX = 'clamp(24px,6vw,96px)';

function MagText({ children, color = '#fff' }) {
  const [pos, setPos] = useState({ x: 0, y: 0, visible: false });
  const ref = useRef(null);
  const handleMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top, visible: true });
  };
  return (
    <span ref={ref} style={{position:'relative',display:'inline-block',cursor:'crosshair',overflow:'hidden'}}
      onMouseMove={handleMove} onMouseLeave={()=>setPos(p=>({...p,visible:false}))}>
      <span style={{color,fontFamily:'Bebas Neue,sans-serif'}}>{children}</span>
      {pos.visible && (
        <span style={{position:'absolute',left:pos.x-40,top:pos.y-40,width:80,height:80,borderRadius:'50%',background:'rgba(192,82,42,0.15)',border:'1px solid #c0522a',pointerEvents:'none',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',backdropFilter:'blur(0px) brightness(1.4)'}} />
      )}
    </span>
  );
}

const STATS = [['2+','YEARS EXPERIENCE'],['5+','PROJECTS BUILT'],['2M+','USERS REACHED'],['10+','TECHNOLOGIES']];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <section id="about" ref={ref} className="relative bg-[#0d0d0d] py-32" style={{paddingLeft:PX,paddingRight:PX}}>
      <motion.p initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5}}
        style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'clamp(10px,1vw,12px)',letterSpacing:'0.25em',color:'#666',marginBottom:'1.5rem'}}>
        ABOUT ME
      </motion.p>
      <div style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'clamp(48px,7vw,100px)',lineHeight:'0.92',marginBottom:'3rem'}}>
        <motion.div initial={{opacity:0,x:-40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.7,delay:0.1}}>
          <MagText>I'M A</MagText>
        </motion.div>
        <motion.div initial={{opacity:0,x:-40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.7,delay:0.2}}>
          <MagText color="#c0522a">PASSIONATELY SKILLED</MagText>
        </motion.div>
        <motion.div initial={{opacity:0,x:-40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.7,delay:0.3}}>
          <MagText>FULLSTACK DEVELOPER</MagText>
        </motion.div>
        <motion.div initial={{opacity:0,x:-40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.7,delay:0.4}}>
          <MagText>WITH STRONG FOCUS ON</MagText>
        </motion.div>
        <motion.div initial={{opacity:0,x:-40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.7,delay:0.5}}>
          <MagText color="#c0522a">HIGH QUALITY &amp; IMPACTFUL</MagText>
        </motion.div>
        <motion.div initial={{opacity:0,x:-40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.7,delay:0.6}}>
          <MagText>DIGITAL EXPERIENCES.</MagText>
        </motion.div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
        {STATS.map(([num,label],i)=>(
          <motion.div key={label} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.3+i*0.1}}>
            <div style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'clamp(36px,5vw,72px)',color:'#c0522a',lineHeight:1}}>{num}</div>
            <div style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'clamp(9px,0.9vw,11px)',letterSpacing:'0.2em',color:'#666',marginTop:'0.5rem'}}>{label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
