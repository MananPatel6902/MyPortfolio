import React from 'react';
import { FileText, Code, GraduationCap, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-100 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            {/* Profile Image */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto">
                  <img
                    src="/Photos/Manan.png"
                    alt="Manan Patel"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-dark-200 border border-white/10 p-4 rounded-xl shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300 z-20">
                  <p className="font-bold text-white">Manan Patel</p>
                  <p className="text-sm text-primary-400">AI Engineer</p>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
                About Me
              </h2>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Hello! I'm Manan Patel, a passionate technologist specializing in <span className="text-primary-400 font-semibold">Artificial Intelligence</span>, <span className="text-secondary-400 font-semibold">Machine Learning</span>, and <span className="text-teal-400 font-semibold">Data Science</span>.
                  Currently pursuing my Integrated M.Tech in AI at VIT Bhopal, I thrive on building intelligent,
                  automated solutions that simplify complex problems and deliver meaningful impact.
                </p>

                <p>
                  My journey into AI and data started with a fascination for how machines learn from information to make smarter decisions.
                  Over time, this curiosity evolved into a strong skillset in building real-world applications—from gesture-based systems to AI-powered food diagnostics.
                  I enjoy translating data into actionable insights and automating workflows to enhance efficiency and user experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                {[
                  { icon: GraduationCap, title: "Education", desc: "Integrated M.Tech in AI, VIT" },
                  { icon: Code, title: "Specialization", desc: "AI, ML, Deep Learning, Data Analysis" },
                  { icon: MapPin, title: "Location", desc: "Bhopal, India" },
                  { icon: FileText, title: "Languages", desc: "English, Hindi, Gujarati" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary-500/30 transition-colors"
                  >
                    <div className="p-2 bg-primary-500/20 rounded-lg text-primary-400">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="glass p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-500/20 transition-colors duration-500"></div>
                <h3 className="font-bold text-xl mb-4 text-white relative z-10">My Career Goals</h3>
                <p className="text-gray-300 mb-4 relative z-10">
                  I’m actively exploring opportunities where I can apply my AI and data science expertise to solve real-world challenges.
                  My goal is to contribute to innovative projects that harness the power of automation and data to drive smarter decisions.
                </p>
                <p className="text-gray-300 relative z-10">
                  I'm particularly interested in ML modeling and deployment, real-time data analysis, and AI implementation across multiple domains like healthcare and finance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
