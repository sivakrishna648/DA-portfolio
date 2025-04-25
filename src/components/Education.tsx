import React, { useEffect, useRef } from 'react';
import { educationData } from '../data/educationData';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
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
      id="education"
      ref={sectionRef}
      className="py-20 bg-slate-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">My </span>
          <span className="text-pink-400">Education</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-pink-500/50 pl-8 ml-4">
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className="mb-12 relative"
              >
                <div className="absolute -left-12 w-8 h-8 bg-slate-900 border-2 border-pink-500 rounded-full flex items-center justify-center">
                  <GraduationCap size={16} className="text-pink-400" />
                </div>
                <div className="bg-slate-700 rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-pink-500/10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                    <span className="text-sm font-medium bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full mt-2 md:mt-0">
                      {item.degree.toLowerCase().includes('bachelor') ? `CGPA: ${item.cgpa}` :
                       item.degree.toLowerCase().includes('12th') ? `Percentage: ${item.percentage}` :
                       `GPA: ${item.gpa}`}
                    </span>
                  </div>
                  <h4 className="text-lg text-gray-300 mb-4">{item.institution}</h4>
                  <div className="flex flex-col sm:flex-row sm:gap-6 mb-4">
                    <div className="flex items-center gap-2 text-gray-400 mb-2 sm:mb-0">
                      <Calendar size={16} />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={16} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                  {item.achievements && (
                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-gray-200 mb-2">Key Achievements:</h5>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;