import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import About from './sections/About';
import Work from './sections/Work';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--app-bg)', color: 'var(--text)' }}>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main style={{ display: 'flex', flexDirection: 'column', background: 'var(--section-bg)' }}>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>

    </div>
  );
}
