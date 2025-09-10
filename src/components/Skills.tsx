import React from 'react';
import { 
  Code, Database, BarChart2, Server, 
  Cpu, LineChart, Table, FileSpreadsheet 
} from 'lucide-react';

interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C","C++"],
      icon: <Code className="text-blue-600" size={28} />
    },
    {
      title: "Frontend Technologies",
      skills: ["HTML", "CSS", "JavaScript","React js","Angular js","Bootstrap"],
      icon: <BarChart2 className="text-green-600" size={28} />
    },
    {
      title: "Backend Technologies & Frameworks",
      skills: ["Git & GitHub", "Postman", "Power BI","Java / Spring Boot","Node.js","Express.js"],
      icon: <LineChart className="text-purple-600" size={28} />
    },
    {
      title: "Databases",
      skills: ["SQL","MongoDB","PostgreSQL","Mongoose"],
      icon: <Database className="text-orange-600" size={28} />
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Technical <span className="text-blue-600">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-gray-800 ml-3">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;