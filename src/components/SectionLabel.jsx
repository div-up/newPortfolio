import { motion } from 'framer-motion';

const SectionLabel = ({label}) => (
  <motion.p
    initial={{opacity:0,x:-20}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    transition={{duration:0.5}}
    className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#C4A882] opacity-40 mb-8 md:mb-12 font-medium"
  >
    {label}
  </motion.p>
);
export default SectionLabel;
