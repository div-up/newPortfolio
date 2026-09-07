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
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const linkStyle = {
    fontFamily: 'Space Grotesk,sans-serif', fontSize: 'clamp(7px,0.85vw,11px)', letterSpacing: '0.09em',
    color: scrolled ? 'var(--muted)' : 'var(--link)', background: 'transparent', border: 'none', cursor: 'pointer',
    padding: '2px 0', transition: 'color 0.3s',
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 right-1 z-50 pt-2 pr-3 pb-4 pl-4 md:right-0 md:p-8"
    >
      <div className="flex flex-col items-end gap-2 md:flex-row md:items-center md:gap-4">
        {LINKS.map((link) => (
          <button key={link} onClick={() => scrollTo(link)} style={linkStyle}
            onMouseEnter={e => e.currentTarget.style.color = '#c0522a'}
            onMouseLeave={e => e.currentTarget.style.color = scrolled ? 'var(--muted)' : 'var(--link)'}
          >{link}</button>
        ))}
      </div>
    </motion.nav>
  );
}
