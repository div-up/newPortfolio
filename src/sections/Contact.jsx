import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const PX = 'clamp(24px,6vw,96px)';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };
  const inputStyle = { fontFamily:'Space Grotesk,sans-serif', fontSize:'clamp(13px,1.1vw,15px)', color:'var(--text)', background:'transparent', border:'none', borderBottom:'1px solid var(--card-border)', padding:'12px 0', outline:'none', width:'100%', transition:'border-color 0.3s' };

  return (
    <section id="contact" ref={ref} className="relative py-32" style={{paddingLeft:PX,paddingRight:PX,background:'var(--section-bg)'}}>
      <motion.p initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5}}
        style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'clamp(10px,1vw,12px)',letterSpacing:'0.25em',color:'var(--muted)',marginBottom:'1.5rem'}}>
        GET IN TOUCH
      </motion.p>
      <motion.div initial={{opacity:0,x:-40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.7,delay:0.1}}
        style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'clamp(48px,7vw,100px)',lineHeight:'0.92',marginBottom:'4rem'}}>
        <span style={{color:'var(--text)'}}>LET'S MAKE</span><br/>
        <span style={{color:'var(--accent)'}}>SOMETHING GREAT</span>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-20">
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.2}}>
          <div className="mb-8">
            <div style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'clamp(9px,0.9vw,11px)',letterSpacing:'0.25em',color:'var(--muted)',marginBottom:'0.5rem'}}>EMAIL</div>
            <a href="mailto:divyanshukr786@gmail.com" style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'clamp(13px,1.2vw,16px)',color:'var(--text)',textDecoration:'none',transition:'color 0.3s'}}
              onMouseEnter={e=>e.currentTarget.style.color='var(--accent)'}
              onMouseLeave={e=>e.currentTarget.style.color='var(--text)'}>divyanshukr786@gmail.com</a>
          </div>
          <div>
            <div style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'clamp(9px,0.9vw,11px)',letterSpacing:'0.25em',color:'var(--muted)',marginBottom:'0.5rem'}}>LINKEDIN</div>
            <a href="https://linkedin.com/in/divyanshu-upadhyay-dev" target="_blank" rel="noreferrer"
              style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'clamp(13px,1.2vw,16px)',color:'var(--text)',textDecoration:'none',transition:'color 0.3s'}}
              onMouseEnter={e=>e.currentTarget.style.color='var(--accent)'}
              onMouseLeave={e=>e.currentTarget.style.color='var(--text)'}>linkedin.com/in/divyanshu-upadhyay-dev</a>
          </div>
        </motion.div>
        <motion.form onSubmit={handleSubmit} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.3}}
          className="flex flex-col gap-8">
          {sent ? (
            <p style={{fontFamily:'Space Grotesk,sans-serif',color:'var(--accent)',fontSize:'clamp(14px,1.2vw,16px)',letterSpacing:'0.1em'}}>MESSAGE SENT. I'LL BE IN TOUCH SOON.</p>
          ) : (
            <>
              <div>
                <input style={inputStyle} placeholder="Your Name" value={form.name} required
                  onChange={e=>setForm(f=>({...f,name:e.target.value}))}
                  onFocus={e=>e.target.style.borderColor='var(--accent)'}
                  onBlur={e=>e.target.style.borderColor='var(--card-border)'}/>
              </div>
              <div>
                <input type="email" style={inputStyle} placeholder="Your Email" value={form.email} required
                  onChange={e=>setForm(f=>({...f,email:e.target.value}))}
                  onFocus={e=>e.target.style.borderColor='var(--accent)'}
                  onBlur={e=>e.target.style.borderColor='var(--card-border)'}/>
              </div>
              <div>
                <textarea style={{...inputStyle,resize:'none',height:100}} placeholder="Your Message" value={form.message} required
                  onChange={e=>setForm(f=>({...f,message:e.target.value}))}
                  onFocus={e=>e.target.style.borderColor='var(--accent)'}
                  onBlur={e=>e.target.style.borderColor='var(--card-border)'}/>
              </div>
              <button type="submit"
                style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'clamp(11px,1vw,13px)',letterSpacing:'0.2em',color:'var(--text)',border:'1px solid var(--card-border)',padding:'16px 40px',background:'transparent',cursor:'pointer',transition:'all 0.3s',alignSelf:'flex-start'}}
                onMouseEnter={e=>{e.currentTarget.style.background='var(--accent)';e.currentTarget.style.borderColor='var(--accent)';e.currentTarget.style.color='#000';}}
                onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.borderColor='var(--card-border)';e.currentTarget.style.color='var(--text)';}}
              >SEND MESSAGE</button>
            </>
          )}
        </motion.form>
      </div>
      <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.6,delay:0.5}}
        className="mt-24 pt-8 border-t border-[var(--section-border)] flex flex-col md:flex-row justify-between items-center gap-4">
        <span style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'clamp(10px,0.9vw,12px)',letterSpacing:'0.2em',color:'var(--muted-strong)'}}>© 2026 DIVYANSHU UPADHYAY</span>
        <span style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'clamp(10px,0.9vw,12px)',letterSpacing:'0.2em',color:'var(--muted-strong)'}}>BUILT WITH REACT + TAILWIND</span>
      </motion.div>
    </section>
  );
}
