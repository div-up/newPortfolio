import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LINKS = ['ABOUT','WORK','SKILLS','PROJECTS','CONTACT'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 right-0 z-50 flex flex-col items-end gap-2 p-6 md:p-8"
    >
      {LINKS.map((link) => (
        <button key={link} onClick={() => scrollTo(link)}
          style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 'clamp(9px,0.85vw,11px)', letterSpacing: '0.2em', color: scrolled ? '#888' : '#555', background: 'none', border: 'none', cursor: 'pointer', padding: '2px 0', transition: 'color 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#c0522a'}
          onMouseLeave={e => e.currentTarget.style.color = scrolled ? '#888' : '#555'}
        >{link}</button>
      ))}
    </motion.nav>
  );
}
