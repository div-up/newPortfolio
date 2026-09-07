import { motion } from 'framer-motion';

const Footer = () => (
  <footer className="border-t border-[var(--section-border)] flex flex-col md:flex-row justify-between items-center md:items-center gap-3 text-center md:text-left bg-[var(--section-bg)]"
    style={{ width: '100%', paddingInline: 'clamp(28px, 8vw, 152px)', paddingBlock: 'clamp(20px, 3vw, 32px)' }}>
    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}
      className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] opacity-40">
      © 2026 Divyanshu Upadhyay. All rights reserved.
    </motion.p>
    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.2}}
      className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] opacity-40">
      Built with React + Tailwind CSS
    </motion.p>
  </footer>
);
export default Footer;
