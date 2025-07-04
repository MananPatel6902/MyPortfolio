import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { socialData } from '../data/social';
import WorkflowLine from './WorkflowLine';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Journey', href: '#journey' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const iconMap: Record<string, React.ElementType> = {
    Github,
    Linkedin,
    Twitter,
    Instagram,
    Youtube
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="relative">
        <WorkflowLine />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#home" className="flex items-center">
                <img
                  src="/Photos/logo3.png"
                  alt="Manan Patel"
                  className="h-24 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              {socialData.map((social) => {
                const IconComponent = iconMap[social.icon];
                return IconComponent ? (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors duration-300 ${
                      isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-300'
                    }`}
                    aria-label={social.platform}
                  >
                    <IconComponent size={20} />
                  </a>
                ) : null;
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className={`text-2xl p-2 rounded-md ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white shadow-lg transition-transform duration-300 transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } absolute top-16 left-0 right-0`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          {/* Social Links - Mobile */}
          <div className="flex items-center space-x-4 px-3 py-2">
            {socialData.map((social) => {
              const IconComponent = iconMap[social.icon];
              return IconComponent ? (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                  aria-label={social.platform}
                >
                  <IconComponent size={20} />
                </a>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;