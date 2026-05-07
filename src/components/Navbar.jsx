import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdLightMode,MdDarkMode } from "react-icons/md";

const LINKS = ['ABOUT','WORK','SKILLS','PROJECTS','CONTACT'];

export default function Navbar({ theme, onToggleTheme }) {
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
      className="fixed top-0 right-0 z-50 flex flex-col items-end gap-3 pr-6 md:p-8"
    >
      <div className="flex flex-col items-end gap-2 md:flex-row backdrop-blur-md">
        {LINKS.map((link) => (
          <button key={link} onClick={() => scrollTo(link)}
            style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 'clamp(9px,0.85vw,11px)', letterSpacing: '0.2em', color: scrolled ? 'var(--muted)' : 'var(--link)', background: 'transparent', border: 'none', cursor: 'pointer', padding: '2px 0', transition: 'color 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#c0522a'}
            onMouseLeave={e => e.currentTarget.style.color = scrolled ? 'var(--muted)' : 'var(--link)'}
          >{link}</button>
        ))}
        <button type="button" onClick={onToggleTheme} className='border-none'
          style={{ fontFamily: 'Space Grotesk,sans-serif', color: 'var(--link)', background: 'transparent', cursor: 'pointer', padding: '6px 10px', transition: 'color 0.3s, border-color 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#c0522a'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--link)'}
        >{theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}</button>
      </div>
    </motion.nav>
  );
}
