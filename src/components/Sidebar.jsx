import { motion } from 'framer-motion';

const links = [
  { href: 'https://github.com/div-up', label: 'GitHub', icon: 'GH' },
  { href: 'https://www.linkedin.com/in/divyanshu-upadhyay-dev/', label: 'LinkedIn', icon: 'LI' },
  { href: 'mailto:divyanshukr786@gmail.com', label: 'Email', icon: '@' },
];

const Sidebar = () => (
  <motion.aside
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-8 p-6"
  >
    {links.map(({ href, label, icon }) => (
      <a key={label} href={href} target="_blank" rel="noopener noreferrer"
        aria-label={label}
        className="text-[#C4A882] hover:text-[#E85D26] transition-colors duration-300 text-xs font-bold tracking-widest"
        title={label}>
        {icon}
      </a>
    ))}
  </motion.aside>
);
export default Sidebar;
