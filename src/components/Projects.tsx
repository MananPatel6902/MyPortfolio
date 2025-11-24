import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { ExternalLink, Github, X, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedProject(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const currentProject = projectsData.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my technical projects, ranging from AI/ML models to full-stack web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={2000}
                className="h-full"
              >
                <div
                  className="glass rounded-xl overflow-hidden border border-white/5 hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col group cursor-pointer"
                  onClick={() => openModal(project.id)}
                >
                  <div className="relative overflow-hidden h-48">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 backdrop-blur-md p-2 rounded-full text-white hover:bg-primary-600 transition-colors">
                        <Maximize2 size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3 text-sm flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded border border-white/5">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-100 w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80 shrink-0">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-transparent"></div>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-red-500/80 text-white p-2 rounded-full transition-colors backdrop-blur-md"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-6 left-6 md:left-8 right-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{currentProject.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-sm bg-primary-500/20 text-primary-200 px-3 py-1 rounded-full border border-primary-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-bold text-white mb-4">Overview</h4>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {currentProject.description}
                    </p>

                    <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                      <li>Responsive and interactive user interface</li>
                      <li>Optimized performance and accessibility</li>
                      <li>Secure data handling and processing</li>
                      <li>Modern design principles applied</li>
                    </ul>
                  </div>

                  <div className="md:col-span-1 space-y-6">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                      <h4 className="text-lg font-bold text-white mb-4">Project Links</h4>
                      <div className="space-y-3">
                        {currentProject.github && (
                          <a
                            href={currentProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium border border-gray-700"
                          >
                            <Github size={20} />
                            View Code
                          </a>
                        )}
                        {currentProject.demo && (
                          <a
                            href={currentProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium shadow-lg shadow-primary-900/20"
                          >
                            <ExternalLink size={20} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
