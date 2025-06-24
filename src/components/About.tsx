import React from 'react';
import { FileText, Code, GraduationCap, Map } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 animate-tilt"></div>
                <div className="relative bg-white rounded-xl overflow-hidden">
                  <img 
                    src="/Photos/Manan.png" 
                    alt="Manan Patel" 
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg transform rotate-3">
                  <p className="font-bold align-middle">Manan Patel</p>
                  <p className="text-sm opacity-90">Software Engineer</p>
                </div>
              </div>
            </div>
            
            {/* About Content */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Hello! I'm Manan Patel, a passionate technologist specializing in Artificial Intelligence, Machine Learning, and Data Science. 
                Currently pursuing my Integrated M.Tech in AI at VIT Bhopal, I thrive on building intelligent, 
                automated solutions that simplify complex problems and deliver meaningful impact.
              </p>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                My journey into AI and data started with a fascination for how machines learn from information to make smarter decisions. 
                Over time, this curiosity evolved into a strong skillset in building real-world applications-from gesture-based systems to AI-powered food diagnostics. 
                I enjoy translating data into actionable insights and automating workflows to enhance efficiency and user experience.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="text-blue-600">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Education</h3>
                    <p className="text-gray-600">Integrated M.Tech in AI, VIT</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-blue-600">
                    <Code size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Specialization</h3>
                    <p className="text-gray-600"> Artificial Intelligence, Machine Learning, Deep Learning, Data Analysis</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-blue-600">
                    <Map size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Location</h3>
                    <p className="text-gray-600">Bhopal, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-blue-600">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Languages</h3>
                    <p className="text-gray-600">English, Hindi, Gujarati</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-bold text-xl mb-3 text-gray-800">My Career Goals</h3>
                <p className="text-gray-700 mb-4">
                  I’m actively exploring opportunities where I can apply my AI and data science expertise to solve real-world challenges. 
                  My goal is to contribute to innovative projects that harness the power of automation and data to drive smarter decisions.
                </p>
                <p className="text-gray-700">
                  I'm perticularly interested in ML modeling and deployment, real-time data analysis, and AI implementation across multiple domains like healthcare and finance.
                  I aim to combine analytical thinking with creativity to build impactful, real-world solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
