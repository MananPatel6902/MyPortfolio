import React, { useRef, useEffect, useState } from 'react';
import { timelineData } from '../data/timeline';
import { ArrowRight } from 'lucide-react';

const Timeline: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-id'));
            setActiveItem(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const getIconComponent = (iconName: string) => {
    try {
      const Icon = require('lucide-react')[iconName];
      return Icon ? <Icon size={24} /> : <ArrowRight size={24} />;
    } catch {
      return <ArrowRight size={24} />;
    }
  };

  return (
    <section id="journey" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my academic and professional path in the fields of Artificial Intelligence and Data Science, 
            highlighting key milestones and acquired skills along the way.
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

          {/* Timeline items */}
          {timelineData.map((item, index) => (
            <div 
              key={item.id}
              ref={el => itemRefs.current[index] = el}
              data-id={item.id}
              className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-blue-500 z-10 flex items-center justify-center">
                {item.icon && getIconComponent(item.icon)}
              </div>

              {/* Content */}
              <div 
                className={`w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-0 md:pl-8' : 'md:pl-0 md:pr-8'
                } pl-12 md:pl-0`}
              >
                <div 
                  className={`bg-white p-6 rounded-lg shadow-md transform transition-all duration-500 ${
                    activeItem === item.id ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-blue-600">{item.title}</h3>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{item.date}</span>
                  </div>
                  
                  {item.institution && (
                    <p className="text-gray-600 mb-3">{item.institution}</p>
                  )}
                  
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  
                  {item.skills && (
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map(skill => (
                        <span 
                          key={skill} 
                          className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;