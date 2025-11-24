import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Manan Patel | Portfolio";

    // Update favicon
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = "https://cdn.jsdelivr.net/npm/lucide-static/icons/database.svg";
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ThreeBackground />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Timeline />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;