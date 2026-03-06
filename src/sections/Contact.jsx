import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const Contact = () => (
  <section id="contact" className="min-h-screen flex flex-col justify-center px-14 md:px-20 py-32 bg-[#0a0a0a]">
    <SectionLabel label="GET IN TOUCH" />
    <motion.h2
      initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}
      className="text-[6vw] md:text-[5vw] font-extrabold text-[#C4A882] leading-[1.1] mb-16 max-w-4xl">
      Available for <span className="text-[#E85D26]">freelance</span> work and full-time <span className="text-[#E85D26]">positions</span>.
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
      <div>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:0.1}}
          className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4A882] opacity-40 mb-2">EMAIL</p>
          <a href="mailto:divyanshukr786@gmail.com"
            className="text-xl font-bold text-[#C4A882] hover:text-[#E85D26] transition-colors duration-300">
            divyanshukr786@gmail.com
          </a>
        </motion.div>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:0.2}}
          className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4A882] opacity-40 mb-2">LINKEDIN</p>
          <a href="https://www.linkedin.com/in/divyanshu-upadhyay-dev/" target="_blank" rel="noopener noreferrer"
            className="text-xl font-bold text-[#C4A882] hover:text-[#E85D26] transition-colors duration-300">
            linkedin.com/divyanshUpadhyay
          </a>
        </motion.div>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:0.3}}>
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4A882] opacity-40 mb-2">GITHUB</p>
          <a href="https://github.com/div-up" target="_blank" rel="noopener noreferrer"
            className="text-xl font-bold text-[#C4A882] hover:text-[#E85D26] transition-colors duration-300">
            github.com/div-up
          </a>
        </motion.div>
      </div>
      <motion.form initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7,delay:0.2}}
        className="flex flex-col gap-6" onSubmit={(e)=>e.preventDefault()}>
        <div className="border-b border-[#2a2a2a] pb-3">
          <input type="text" placeholder="Your Name" required
            className="w-full bg-transparent text-[#C4A882] placeholder-[#C4A882]/30 outline-none text-lg font-medium" />
        </div>
        <div className="border-b border-[#2a2a2a] pb-3">
          <input type="email" placeholder="Your Email" required
            className="w-full bg-transparent text-[#C4A882] placeholder-[#C4A882]/30 outline-none text-lg font-medium" />
        </div>
        <div className="border-b border-[#2a2a2a] pb-3">
          <textarea placeholder="Your Message" rows={4} required
            className="w-full bg-transparent text-[#C4A882] placeholder-[#C4A882]/30 outline-none text-lg font-medium resize-none" />
        </div>
        <motion.button type="submit"
          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          className="self-start mt-4 px-10 py-4 bg-[#E85D26] text-white text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#d14e1e] transition-colors duration-300">
          Send Message
        </motion.button>
      </motion.form>
    </div>
  </section>
);
export default Contact;
