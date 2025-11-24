import React from 'react';
import { skillsData } from '../data/skills';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Skills3D from './Skills3D';

const Skills: React.FC = () => {
  // Group skills by category
  const categories = Array.from(new Set(skillsData.map((s) => s.category)));

  return (
    <section id="skills" className="py-20 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
              Technical Arsenal
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              A comprehensive overview of my technical skills honed through academic journey and practical experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <Skills3D />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.01}
                transitionSpeed={2000}
                className="h-full"
              >
                <div className="glass rounded-xl p-6 border border-white/5 hover:border-primary-500/30 transition-colors h-full">
                  <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillsData
                      .filter((s) => s.category === category)
                      .map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                          className="relative group"
                        >
                          <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-gray-300 group-hover:text-white group-hover:bg-primary-600/20 group-hover:border-primary-500/50 transition-all duration-300 cursor-default">
                            {skill.name}
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;