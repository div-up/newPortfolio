import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Work from './sections/Work';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="bg-[#0d0d0d] text-white">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
