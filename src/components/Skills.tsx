import React, { useEffect, useRef } from 'react';
import { skillsData } from '../data/skillsData';

const Skills: React.FC = () => {
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
      id="skills"
      ref={sectionRef}
      className="py-20 bg-slate-900 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">My </span>
          <span className="text-pink-400">Skills</span>
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-white mb-6 border-b border-pink-500/30 pb-2">
                {category}
              </h3>
              <div className="space-y-6">
                {skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5 mb-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-400 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-xl font-bold text-white text-center mb-8">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Excel', 'SPSS', 
              'Google Analytics', 'MS SQL Server', 'PostgreSQL', 'SAS', 
              'Hadoop', 'Spark', 'Machine Learning', 'Statistical Analysis', 
              'Data Visualization'].map((tool, index) => (
              <div 
                key={index}
                className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-lg text-gray-300 hover:bg-pink-500/10 hover:border-pink-500/30 hover:text-pink-400 transition-all duration-300"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;