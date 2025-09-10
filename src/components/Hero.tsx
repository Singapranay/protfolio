import React from 'react';
import { Github, Linkedin, ExternalLink, BookOpen, Code } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-7/12 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hey there! I'm <span className="text-blue-600">Pranay Singa</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
              Full Stack developer
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
            A passionate developer who loves bringing ideas to life through clean, efficient, and scalable web solutions. From crafting intuitive frontends to building robust backends, I thrive on turning real-world challenges into innovative digital experiences. Constantly learning, evolving, and pushing boundaries to deliver impactful tech.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/Singapranay" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/pranay-singa-95a420240/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://leetcode.com/u/Pranaysinga/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
              >
                <Code size={18} />
                <span>LeetCode</span>
              </a>
              {/* <a 
                href="https://medium.com/@narlarushikesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-black transition-colors"
              >
                <BookOpen size={18} />
                <span>Medium</span>
              </a> */}
            </div>
          </div>
          
          <div className="md:w-4/12 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://i.ibb.co/nNCKm3JL/final.jpg" 
                alt="Pranay Singa" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;