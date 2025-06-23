import React from 'react';

const WorkflowLine: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 z-0">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="workflowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4">
              <animate
                attributeName="offset"
                values="-1; 2"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4">
              <animate
                attributeName="offset"
                values="-1; 2"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
        <path
          d="M0,50 Q25,30 50,50 T100,50"
          fill="none"
          stroke="url(#workflowGradient)"
          strokeWidth="0.8"
          strokeDasharray="3,3"
          className="animate-workflow"
        />
        <path
          d="M0,70 Q25,50 50,70 T100,70"
          fill="none"
          stroke="url(#workflowGradient)"
          strokeWidth="0.8"
          strokeDasharray="3,3"
          className="animate-workflow"
          style={{ animationDelay: "-10s" }}
        />
      </svg>
    </div>
  );
};

export default WorkflowLine; 