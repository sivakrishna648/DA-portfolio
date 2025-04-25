import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <div className="font-[Poppins] bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;