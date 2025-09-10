import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface Education {
  institution: string;
  degree: string;
  location: string;
  score: string;
  period: string;
}

const Education: React.FC = () => {
  const educationHistory: Education[] = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology – Computer Science and Engineering",
      location: "Punjab, India",
      score: "CGPA: 7.0",
      period: "2022 – Present"
    },
    {
      institution: "SR Junior College",
      degree: "Intermediate Education – MPC",
      location: "Nizamabad, Telangana",
      score: "Percentage: 83.6%",
      period: "2020 – 2022"
    },
    {
      institution: "ZPHS High School",
      degree: "Matriculation",
      location: "Jakranpalle, Telangana",
      score: "Percentage: 100%",
      period: "2019 – 2020"
    }
  ];

  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Academic <span className="text-blue-600">Background</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-blue-500 pl-8 ml-4">
            {educationHistory.map((edu, index) => (
              <div 
                key={index} 
                className={`mb-12 ${index === educationHistory.length - 1 ? '' : ''}`}
              >
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] mt-1.5"></div>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <GraduationCap className="text-blue-600 mr-3" size={20} />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {edu.institution}
                    </h3>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-gray-700 font-medium">
                      {edu.degree}
                    </p>
                    <p className="text-gray-600">
                      {edu.location}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <p className="text-gray-700 font-medium">
                      {edu.score}
                    </p>
                    <p className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-1" />
                      {edu.period}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;