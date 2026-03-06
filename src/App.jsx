import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Work from './sections/Work';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './index.css';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <CustomCursor />
      <Navbar />
      <Sidebar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;
