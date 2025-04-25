import React, { useState, useEffect, useRef } from 'react';
import { projectsData } from '../data/projectsData';
import { Eye, Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
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

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-slate-900 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">My </span>
          <span className="text-pink-400">Projects</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === 'all'
                ? 'bg-pink-500 text-white'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === 'dashboard'
                ? 'bg-pink-500 text-white'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
            onClick={() => setFilter('dashboard')}
          >
            Dashboards
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === 'ml'
                ? 'bg-pink-500 text-white'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
            onClick={() => setFilter('ml')}
          >
            Machine Learning
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === 'visualization'
                ? 'bg-pink-500 text-white'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
            onClick={() => setFilter('visualization')}
          >
            Visualizations
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg group hover:shadow-pink-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-pink-500 transition-colors duration-300"
                    >
                      <Eye size={20} />
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-pink-500 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-xs font-medium bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs bg-slate-700 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{project.date}</span>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-pink-400 hover:text-pink-300 transition-colors duration-300"
                  >
                    <span className="text-sm font-medium">View Project</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;