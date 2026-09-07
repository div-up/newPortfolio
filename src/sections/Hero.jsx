import { motion } from 'framer-motion';

export default function Hero() {
  const links = [
    { label: 'GH', href: 'https://github.com/div-up' },
    { label: 'LI', href: 'https://linkedin.com/in/divyanshu-upadhyay-dev' },
    { label: '@', href: 'mailto:divyanshukr786@gmail.com' },
  ];
  return (
    <section id="hero" className="hero-section relative min-h-screen overflow-hidden flex flex-col justify-center" style={{ paddingInline: 'clamp(28px, 8vw, 152px)', background: 'var(--section-bg)' }}>
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 'clamp(10px,1vw,12px)', letterSpacing: '0.25em', color: 'var(--muted)', marginBottom: '1.5rem', position: 'relative' }}>
        DIVYANSHU UPADHYAY
      </motion.p>
      <div style={{ fontFamily: 'Bebas Neue,sans-serif', lineHeight: '0.88', fontSize: 'clamp(72px,13vw,180px)', position: 'relative' }}>
        {[['BUILDING', 'var(--accent)'],['GREAT', 'var(--text)'], ['STUFF', 'var(--text)'], ['SINCE 2023', 'var(--accent)']].map(([t, c], i) => (
          <motion.div key={t} style={{ color: c }} initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 * i }}>{t}</motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="mt-14 flex items-center gap-6">
        <div style={{ width: 48, height: 1, background: 'var(--divider)' }} />
        <span style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: '11px', letterSpacing: '0.3em', color: 'var(--muted)' }}>SCROLL TO EXPLORE</span>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.9 }}
        className="hero-seal absolute bottom-8 right-8 hidden md:grid" aria-label="Available for new opportunities">
        <svg className="hero-seal-text" viewBox="0 0 100 100" aria-hidden="true">
          <path id="hero-seal-path" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
          <text><textPath href="#hero-seal-path">LEARN • CODE • REPEAT • LEARN • CODE • REPEAT • </textPath></text>
        </svg>
        <span className="hero-seal-mark">↘</span>
      </motion.div>
      <div className="absolute right-0 top-0 h-full flex flex-col justify-center gap-8 pr-6" style={{ zIndex: 20 }}>
        {links.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer"
            style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)', writingMode: 'vertical-rl', transform: 'rotate(180deg)', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>{label}</a>
        ))}
      </div>
    </section>
  );
}
