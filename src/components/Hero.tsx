import React, { useState, useEffect } from 'react';
import { ArrowDownCircle, Database, Brain, BarChart2 } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Manan Patel';

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let currentIndex = 0;

    timer = setInterval(() => {
      setText(fullText.substring(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === fullText.length) {
        clearInterval(timer); // stop the interval once full text is typed
      }
    }, 100);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-bold mb-4">
            <span className="block text-white text-xl md:text-2xl mb-2">Hello, I'm</span>
            <span className="block text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 min-h-[3.5rem] md:min-h-[4rem]">
              {text}
              <span className="animate-blink">|</span>
            </span>
          </h1>
 
          <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
            Passionate about AI, data, and automation for creating seamless digital experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center gap-3 border border-white/20 transform transition-transform hover:scale-105">
              <Brain className="text-blue-400" size={24} />
              <span className="text-white font-medium">AI Researcher</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center gap-3 border border-white/20 transform transition-transform hover:scale-105">
              <Database className="text-teal-400" size={24} />
              <span className="text-white font-medium">Data Scientist</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center gap-3 border border-white/20 transform transition-transform hover:scale-105">
              <BarChart2 className="text-purple-400" size={24} />
              <span className="text-white font-medium">ML Engineer</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium transition-all hover:bg-blue-700 hover:shadow-lg flex items-center gap-2 group"
            >
              Explore My Projects
              <ArrowDownCircle size={20} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium transition-all hover:bg-white/10 hover:shadow-lg"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20 animate-bounce">
        <a href="#journey" aria-label="Scroll Down">
          <ArrowDownCircle size={32} className="text-white/80 hover:text-white transition-colors" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
