import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { socialData } from '../data/social';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Map of icon names to components
  const iconMap: Record<string, React.ElementType> = {
    Github,
    Linkedin,
    Twitter,
    Instagram,
    Youtube
    // Add other icons used in socialData as needed
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <a href="#home" className="text-2xl font-bold">
                Manan's<span className="text-blue-400">Portfolio</span>
              </a>
              <p className="text-gray-400 mt-2 max-w-md">
                Showcasing my journey and expertise in the fields of 
                Artificial Intelligence and Data Science.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                {socialData.map((social) => {
                  const IconComponent = iconMap[social.icon];
                  return IconComponent ? (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 p-2 rounded-full text-gray-300 hover:bg-blue-600 hover:text-white transition-all"
                      aria-label={social.platform}
                    >
                      <IconComponent size={18} />
                    </a>
                  ) : null;
                })}
              </div>
              
              <button
                onClick={scrollToTop}
                className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition-all flex items-center justify-center"
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Manan Patel. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#home" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Home</a>
              <a href="#journey" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Journey</a>
              <a href="#projects" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Projects</a>
              <a href="#skills" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Skills</a>
              <a href="#about" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">About</a>
              <a href="#contact" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;