import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4"
    >
      {/* Animated data particles background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="data-particles"></div>
      </div>

      <div
        ref={textRef}
        className="z-10 text-center opacity-0 transition-opacity duration-1000"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-pink-400">Shivakrishna</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-8">
          Data Analyst & Visualization Specialist
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Transforming complex data into meaningful insights and compelling visual stories
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={scrollToAbout}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
          >
            Discover My Work
          </button>
          <a
            href="#contact"
            className="bg-transparent border-2 border-pink-500 text-white hover:bg-pink-500/10 px-8 py-3 rounded-full font-medium transition-all duration-300"
          >
            Get In Touch
          </a>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Shivakrishna_Resume.pdf"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          type="button"
          onClick={scrollToAbout} 
          className="text-white/70 hover:text-white"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;