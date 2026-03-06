import { motion } from 'framer-motion';

const Footer = () => (
  <footer className="px-14 md:px-20 py-12 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#0a0a0a]">
    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}
      className="text-xs tracking-[0.2em] uppercase text-[#C4A882] opacity-40">
      © 2026 Divyanshu Upadhyay. All rights reserved.
    </motion.p>
    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.2}}
      className="text-xs tracking-[0.2em] uppercase text-[#C4A882] opacity-40">
      Built with React + Tailwind CSS
    </motion.p>
  </footer>
);
export default Footer;
