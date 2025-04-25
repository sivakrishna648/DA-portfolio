import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-slate-900 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-white">Contact </span>
          <span className="text-pink-400">Me</span>
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-slate-800 rounded-xl p-8 shadow-lg h-full">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center mt-1">
                    <Mail size={20} className="text-pink-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-1">Email Me</h4>
                    <a href="mailto:contact@shivakrishna.com" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                      sivakrishnagudipudi6@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center mt-1">
                    <Phone size={20} className="text-pink-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-1">Call Me</h4>
                    <a href="tel:+1234567890" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                      +91 7396096585
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center mt-1">
                    <MapPin size={20} className="text-pink-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-1">Location</h4>
                    <p className="text-gray-400">
                      Guntur, Andhra Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-gray-300 font-medium mb-4">Social Profiles</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/sivakrishna648" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit my GitHub profile"
                    className="w-10 h-10 bg-slate-700 hover:bg-pink-500 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/sivakrishna-gudipudi-670015247" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit my LinkedIn profile"
                    className="w-10 h-10 bg-slate-700 hover:bg-pink-500 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-slate-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-gray-300 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-gray-300 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-gray-300 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-colors duration-300"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-gray-300 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-colors duration-300"
                  ></textarea>
                </div>
                
                {submitMessage && (
                  <div className={`mb-6 px-4 py-3 rounded-lg ${
                    submitMessage.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {submitMessage.text}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 w-full ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;