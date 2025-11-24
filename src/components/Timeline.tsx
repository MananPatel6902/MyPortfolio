import React from 'react';
import { timelineData } from '../data/timeline';
import { GraduationCap, Briefcase, Trophy, FlaskConical, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Timeline: React.FC = () => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'graduation-cap':
        return <GraduationCap size={20} />;
      case 'flask-round':
        return <FlaskConical size={20} />;
      case 'briefcase':
        return <Briefcase size={20} />;
      case 'trophy':
        return <Trophy size={20} />;
      default:
        return <Briefcase size={20} />;
    }
  };

  return (
    <section id="journey" className="py-20 bg-dark-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
            My Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore my academic and professional path in the fields of Artificial Intelligence and Data Science.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500 opacity-30"></div>

          {/* Timeline items */}
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-dark-100 border-2 border-primary-500 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                <div className="text-primary-400">
                  {item.icon ? getIconComponent(item.icon) : <Briefcase size={20} />}
                </div>
              </div>

              {/* Content */}
              <div
                className={`w-full md:w-[calc(50%-3rem)] pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-0 md:pl-12' : 'md:pl-0 md:pr-12'
                  }`}
              >
                <Tilt
                  tiltMaxAngleX={3}
                  tiltMaxAngleY={3}
                  scale={1.02}
                  transitionSpeed={2000}
                >
                  <motion.div
                    className="glass p-6 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-all duration-300 relative group"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-primary-300 bg-primary-500/10 px-3 py-1 rounded-full w-fit">
                        <Calendar size={14} />
                        {item.date}
                      </div>
                    </div>

                    {item.institution && (
                      <p className="text-gray-300 font-medium mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-500"></span>
                        {item.institution}
                      </p>
                    )}

                    <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                      {item.description}
                    </p>

                    {item.skills && (
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map(skill => (
                          <span
                            key={skill}
                            className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded border border-white/5 hover:border-primary-500/30 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </Tilt>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;