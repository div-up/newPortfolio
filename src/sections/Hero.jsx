import { motion } from 'framer-motion';

const words = ['BUILDING','GREAT','STUFF','SINCE','2022'];
const colors = ['#C4A882','#E85D26','#C4A882','#C4A882','#C4A882'];
const opacities = [1, 1, 1, 0.7, 0.3];

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#1a0800] via-[#0a0a0a] to-[#0a0a0a] opacity-60" />
    <div className="relative z-10 pl-14 md:pl-20 pt-20">
      <motion.p initial={{opacity:0,y:20}} animate={{opacity:0.5,y:0}} transition={{duration:0.7,delay:0.2}}
        className="text-xs tracking-[0.4em] uppercase text-[#C4A882] mb-6">
        DIVYANSHU UPADHYAY
      </motion.p>
      <h1 className="leading-[0.88] uppercase tracking-tighter">
        {words.map((word,i) => (
          <motion.div key={word}
            initial={{opacity:0,y:60}}
            animate={{opacity:opacities[i],y:0}}
            transition={{duration:0.7,delay:0.3+i*0.15}}
            style={{color:colors[i]}}
            className="text-[16vw] sm:text-[13vw] md:text-[11vw] font-extrabold block">
            {word}
          </motion.div>
        ))}
      </h1>
    </div>
  </section>
);
export default Hero;
