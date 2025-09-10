import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            About <span className="text-blue-600">Me</span>
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A passionate and dedicated Full Stack Web Developer who thrives on turning ideas into real-world applications. From building seamless user interfaces to crafting efficient backend systems, I enjoy every part of the development journey.

            With a strong foundation in both frontend and backend technologies, I specialize in building full-featured web apps that are not just functional—but scalable and intuitive. I love exploring new tools, frameworks, and best practices to continuously sharpen my skills and deliver modern solutions.

            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Currently pursuing my Bachelor's degree in Computer Science and Engineering, I'm constantly 
              expanding my knowledge and skills in the field of Fullstack Web Development. My goal 
              is to leverage the power of practical skills to create meaningful solutions that can make a difference.
            </p>
            
            {/* <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding or analyzing data, I enjoy writing articles about my insights and experiences.
              I believe in the power of sharing knowledge and continuous learning.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;