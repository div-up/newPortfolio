import { useEffect, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Work from './sections/Work';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen" style={{ background: 'var(--app-bg)', color: 'var(--text)' }}>
      {/* <CustomCursor /> */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="space-y-24">
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
