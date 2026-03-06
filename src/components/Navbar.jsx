import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const links = [['About','about'],['Work','work'],['Contact','contact']];
  return (
    <motion.nav initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
      className="fixed top-0 right-0 z-50 p-8 flex flex-col items-end gap-3">
      {links.map(([label,id]) => (
        <button key={id} onClick={()=>scrollTo(id)}
          className="text-xs tracking-[0.25em] uppercase text-[#C4A882] hover:text-[#E85D26] transition-colors duration-300">
          {label}
        </button>
      ))}
    </motion.nav>
  );
};
export default Navbar;
