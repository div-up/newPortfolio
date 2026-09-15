import { motion } from 'framer-motion';

const LINKS = [
  { label: 'GH', href: 'https://github.com/div-up' },
  {
    label: 'LI',
    href: 'https://linkedin.com/in/divyanshu-upadhyay-dev',
  },
  {
    label: '@',
    href: 'mailto:divyanshukr786@gmail.com',
  },
];

const HERO_LINES = [
  ['BUILDING', 'accent'],
  ['GREAT', 'text'],
  ['STUFF', 'text'],
  ['SINCE 2023', 'accent'],
];

const heroLine = {
  hidden: { opacity: 0, x: -60 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.15 * index,
      ease: 'easeOut',
    },
  }),
};

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />

      <motion.p
        className="hero-label"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        DIVYANSHU UPADHYAY
      </motion.p>

      <div className="hero-heading">
        {HERO_LINES.map(([text, color], index) => (
          <motion.div
            key={text}
            custom={index}
            variants={heroLine}
            initial="hidden"
            animate="visible"
            className={color}
          >
            {text}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <span />
        SCROLL TO EXPLORE
      </motion.div>

      <motion.div
        className="hero-seal"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        aria-label="Available for new opportunities"
      >
        <svg className="hero-seal-text" viewBox="0 0 100 100">
          <path
            id="hero-seal-path"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            fill="none"
          />
          <text>
            <textPath href="#hero-seal-path">
              LEARN • CODE • REPEAT • LEARN • CODE • REPEAT •
            </textPath>
          </text>
        </svg>

        <span className="hero-seal-mark">↘</span>
      </motion.div>

      <nav className="hero-links" aria-label="Social links">
        {LINKS.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer">
            {label}
          </a>
        ))}
      </nav>
    </section>
  );
}