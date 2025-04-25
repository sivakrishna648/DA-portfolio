import React, { useEffect, useRef } from 'react';
import { PieChart, TrendingUp, Database } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-slate-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">About </span>
          <span className="text-pink-400">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center p-6 bg-slate-700 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-pink-500/20 flex items-center justify-center rounded-full mb-4">
              <PieChart size={32} className="text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Data Visualization</h3>
            <p className="text-gray-300 text-center">
              Creating clear, compelling visualizations that transform complex data into actionable insights.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-slate-700 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-pink-500/20 flex items-center justify-center rounded-full mb-4">
              <TrendingUp size={32} className="text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Statistical Analysis</h3>
            <p className="text-gray-300 text-center">
              Applying statistical methods to uncover trends, patterns, and correlations within datasets.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-slate-700 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-pink-500/20 flex items-center justify-center rounded-full mb-4">
              <Database size={32} className="text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Data Management</h3>
            <p className="text-gray-300 text-center">
              Organizing, cleaning, and transforming data to ensure accuracy and reliability in analysis.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-white mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-6">
            I am a passionate and aspiring Data Analyst with a solid foundation in statistical analysis, data visualization, and data-driven decision-making. Though a fresher, I bring hands-on experience from over 6 projects, where I applied analytical techniques to uncover insights, solve real-world problems, and support strategic decisions.
            </p>
            <p className="text-gray-300 mb-6">
            My approach blends technical proficiency with a strong sense of business understanding, enabling me to not only interpret data but also to communicate compelling, actionable insights through storytelling.
            I am enthusiastic about using tools like Python, SQL, Power BI, Excel, and Machine Learning to deliver value and contribute meaningfully to organizational success.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-slate-700 px-4 py-2 rounded-full">
                <span className="text-pink-400 font-medium">hands on Experience</span>
              </div>
              <div className="bg-slate-700 px-4 py-2 rounded-full">
                <span className="text-pink-400 font-medium">6+ Projects</span>
              </div>
              <div className="bg-slate-700 px-4 py-2 rounded-full">
                <span className="text-pink-400 font-medium">2+ real-world scenarios</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 bg-slate-700 p-1 rounded-lg shadow-xl">
            <div className="relative overflow-hidden rounded-lg aspect-square bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
              <div className="text-6xl font-bold text-white/20">DA</div>
              <div className="absolute inset-0 bg-slate-900/30"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent h-1/2"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Data Analyst</p>
                <p className="text-xs opacity-70">2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;