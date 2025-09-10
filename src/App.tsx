import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
// import Articles from './components/Articles';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SummerTraining from './components/SummerTraining';
import Achievements from './components/Achievements';

function App() {
  useEffect(() => {
    document.title = "Pranay Singa | Portfolio";
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <SummerTraining/>
      <Achievements/>
      <Resume />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;