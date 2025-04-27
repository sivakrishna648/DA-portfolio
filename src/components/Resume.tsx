import React, { useEffect, useRef } from 'react';
import { Download, FileText, Award, Briefcase } from 'lucide-react';
import { experienceData } from '../data/experienceData';

const Resume: React.FC = () => {
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
      id="resume"
      ref={sectionRef}
      className="py-20 bg-slate-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="text-white">My </span>
          <span className="text-pink-400">Resume</span>
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          I have hands on experience as a data analyst, working with various projects to transform raw data into actionable insights.
        </p>

        <div className="flex justify-center mb-16">
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Shivakrishna_Resume.pdf"
            className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                <Briefcase size={24} className="text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>

            <div className="space-y-8">
              {experienceData.map((item, index) => (
                <div 
                  key={index}
                  className="bg-slate-700 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-pink-500/10"
                >
                  <h4 className="text-xl font-semibold text-white mb-1">{item.position}</h4>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h5 className="text-gray-300">{item.company}</h5>
                    <span className="text-sm font-medium bg-slate-600 text-gray-300 px-3 py-1 rounded-full mt-2 md:mt-0">
                      {item.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {item.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                <Award size={24} className="text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>

            <div className="space-y-6">
              {[
                
                {
                  name: "Microsoft Certified: Data Analyst Associate",
                  organization: "Microsoft",
                  date: "2022",
                  description: "Advanced certification for data analysis using Microsoft Power BI, including data modeling, visualization, and DAX."
                },
                {
                  name: "IBM Data Science Professional Certificate",
                  organization: "IBM",
                  date: "2023",
                  description: "Professional certification covering data science methodology, Python programming, databases, data visualization, and machine learning."
                },
                {
                  name: "Tableau Desktop Specialist",
                  organization: "Tableau",
                  date: "2024",
                  description: "Certification demonstrating proficiency in building visualizations, dashboards, and stories in Tableau."
                }
              ].map((cert, index) => (
                <div 
                  key={index}
                  className="bg-slate-700 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-pink-500/10"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
                    <span className="text-pink-400 text-sm">{cert.date}</span>
                  </div>
                  <h5 className="text-gray-300 mb-3">{cert.organization}</h5>
                  <p className="text-gray-400">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;