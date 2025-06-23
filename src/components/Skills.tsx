import React, { useState, useEffect, useRef } from 'react';
import { skillsData } from '../data/skills';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-zinc-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Skills</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills that I have honed through my academic journey and practical experiences.
          </p>
        </div>
        
        <div ref={skillsRef} className="mt-8 bg-gray-800 rounded-xl p-8 shadow-md">
          <div className="flex flex-wrap justify-center gap-4">
            {skillsData.map(skill => (
              <div 
                key={`cloud-${skill.name}`}
                className="px-6 py-3 rounded-full transition-all duration-300 cursor-pointer relative group"
                style={{
                  backgroundColor: hoveredSkill === skill.name 
                    ? 'rgba(37, 99, 235, 0.9)' 
                    : 'rgba(59, 130, 246, 0.2)',
                  fontSize: `${Math.max(0.9, skill.level / 100 + 0.4)}rem`,
                  opacity: isVisible ? 1 : 0,
                  transform: `${isVisible ? 'translateY(0)' : 'translateY(20px)'} ${
                    hoveredSkill === skill.name ? 'scale(1.15)' : 'scale(1)'
                  }`,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  zIndex: hoveredSkill === skill.name ? 10 : 1
                }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <span className={`font-medium transition-all duration-300 ${
                  hoveredSkill === skill.name 
                    ? 'text-white' 
                    : 'text-gray-200'
                }`}>
                  {skill.name}
                </span>
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;