import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openProjectDetails = (id: number) => {
    setSelectedProject(id);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const selectedProjectData =
    selectedProject !== null
      ? projectsData.find((p) => p.id === selectedProject)
      : null;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore a selection of my most impactful projects, showcasing practical
            applications of various technologies and methodologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-blue-600/80 text-white px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs bg-gray-600/80 text-white px-2 py-1 rounded">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => openProjectDetails(project.id)}
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    View Details
                  </button>

                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject !== null && selectedProjectData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/60"
              onClick={closeProjectDetails}
            ></div>

            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-lg shadow-xl m-4">
              <button
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{selectedProjectData.title}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProjectData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-4 rounded-lg overflow-hidden">
                  <img
                    src={selectedProjectData.image}
                    alt={selectedProjectData.title}
                    className="max-w-full h-auto object-contain mx-auto"
                  />
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">Description</h4>
                  <p className="text-gray-700 mb-4">{selectedProjectData.description}</p>
                  <p className="text-gray-700 whitespace-pre-line">{selectedProjectData.details}</p>
                </div>

                <div className="flex gap-4">
                  {selectedProjectData.github && (
                    <a
                      href={selectedProjectData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-900 text-white rounded flex items-center gap-2 hover:bg-gray-800 transition-colors"
                    >
                      <Github size={18} />
                      View Repository
                    </a>
                  )}
                  {selectedProjectData.link && (
                    <a
                      href={selectedProjectData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2 hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
