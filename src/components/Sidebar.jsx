import { motion } from 'framer-motion';

const links = [
  { href:'https://github.com/div-up', label:'GitHub', text:'GH' },
  { href:'https://www.linkedin.com/in/divyanshu-upadhyay-dev/', label:'LinkedIn', text:'LI' },
  { href:'mailto:divyanshukr786@gmail.com', label:'Email', text:'@' },
];

const Sidebar = () => (
  <motion.aside
    initial={{opacity:0,x:-16}}
    animate={{opacity:1,x:0}}
    transition={{duration:0.6,delay:0.4}}
    className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-8"
  >
    {links.map(({href,label,text}) => (
      <a key={label} href={href} target="_blank" rel="noopener noreferrer"
        aria-label={label}
        className="text-[10px] font-bold tracking-widest text-[#C4A882] hover:text-[#E85D26] transition-colors duration-300">
        {text}
      </a>
    ))}
  </motion.aside>
);
export default Sidebar;
