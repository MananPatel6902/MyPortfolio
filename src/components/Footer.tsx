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
  };

  return (
    <footer className="bg-dark-200 text-white py-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <a href="#home" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
                Manan Patel
              </a>
              <p className="text-gray-400 mt-4 max-w-md leading-relaxed">
                Showcasing my journey and expertise in the fields of
                Artificial Intelligence and Data Science.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex space-x-4">
                {socialData.map((social) => {
                  const IconComponent = iconMap[social.icon];
                  return IconComponent ? (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/5 p-3 rounded-full text-gray-400 hover:bg-primary-600 hover:text-white transition-all hover:scale-110"
                      aria-label={social.platform}
                    >
                      <IconComponent size={20} />
                    </a>
                  ) : null;
                })}
              </div>

              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-primary-400 transition-colors"
              >
                Back to Top
                <div className="bg-white/5 p-2 rounded-full group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <ArrowUp size={16} />
                </div>
              </button>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Manan Patel. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              {['Home', 'Journey', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-500 hover:text-primary-400 text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;