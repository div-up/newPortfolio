import { motion } from 'framer-motion';

const SectionLabel = ({ label }) => (
  <motion.p
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 0.5, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-xs tracking-[0.4em] uppercase text-[#C4A882] mb-12 opacity-50"
  >
    {label}
  </motion.p>
);
export default SectionLabel;
