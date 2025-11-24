import React from 'react';
import { ArrowDownCircle, Database, Brain, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero3D from './Hero3D';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 z-20 relative pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xl md:text-2xl font-medium text-primary-300 mb-4 tracking-wide">
                HELLO, I'M
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                <span className="text-white">Manan</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 animate-pulse-glow">
                  Patel
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-300 text-lg md:text-2xl mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Crafting intelligent digital experiences with <span className="text-primary-400 font-semibold">AI</span>, <span className="text-secondary-400 font-semibold">Data</span>, and <span className="text-teal-400 font-semibold">Automation</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
            >
              {[
                { icon: Brain, label: 'AI Researcher', color: 'text-primary-400', border: 'border-primary-500/30' },
                { icon: Database, label: 'Data Scientist', color: 'text-secondary-400', border: 'border-secondary-500/30' },
                { icon: Code, label: 'Full Stack', color: 'text-teal-400', border: 'border-teal-500/30' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                  className={`glass px-6 py-3 rounded-full flex items-center gap-3 border ${item.border}`}
                >
                  <item.icon className={item.color} size={20} />
                  <span className="text-gray-200 font-medium">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-bold text-lg transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] hover:scale-105 flex items-center gap-2"
              >
                View Projects
                <ArrowDownCircle size={20} />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg transition-all hover:bg-white/10 hover:border-white/30 flex items-center gap-2"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <Hero3D />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center z-20"
      >
        <motion.a
          href="#journey"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Scroll Down"
        >
          <ArrowDownCircle size={32} className="text-gray-400 hover:text-white transition-colors" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
