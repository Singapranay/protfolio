import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  githubLink: string;
  image: string;
  tags: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Employee Management System",
      description: "Employee Management System is a tool used to manage employee details like personal info, attendance, payroll, and performance. It helps HR work efficiently and keeps records organized.",
      githubLink: "https://github.com/Singapranay/Employee_Mangement_System",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Bootstrap", "Spring boot", "MySQL","Angular js"]
    },
    {
      title: "Ecommerce Website ",
      description: "SV Clothing Store Easybuy E-commerce is an online platform for browsing and purchasing a wide range of clothing and fashion items. It offers features like product search, secure payment, user accounts, and order tracking for a smooth shopping experience.",
      githubLink: "https://github.com/Singapranay/EasyBuy",
      image: "https://images.pexels.com/photos/2726370/pexels-photo-2726370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["MERN", "HTML", "CSS","JavaScript","Bootstrap"]
    },
    {
      title: "Craft your cravings",
      description: "Table Reservation System is an online platform that allows customers to book tables at restaurants in advance. It helps manage reservations, reduce wait times, and improve customer experience with real-time availability and confirmation.",
      githubLink: "https://github.com/Singapranay/Craft-Your-Craving",
      image: "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Node js", "Bootstrap", "MongoDB","React js", "Express js"]
    },
    {
      title: "Boat Booking System",
      description: "Boat Booking System is an online platform that allows users to book boat rides for leisure or transportation. It manages booking details, schedules, payment processing, and seat availability to ensure a smooth experience for customers.",
      githubLink: "https://github.com/Singapranay/Boat-Booking-System-PHP",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["php", "Bootstrap", "phpmyadmin","mysql"]
    },
    {
      title: "Beat-Maker",
      description: "Beat-Maker is a web application that allows users to create and share music beats. It features a user-friendly interface for composing beats, a library of sound samples to choose and enjoy.",
      githubLink: "https://github.com/Singapranay/beat_maker_end",
      image: "https://images.pexels.com/photos/6256258/pexels-photo-6256258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["JavaScript", "CSS", "HTML"]
    },
    {
      title: "Wordloom Medium Article Generator",
      description: "Wordloom is a web application that generates medium articles based on user-provided keywords. It uses AI to create engaging content, allowing users to customize the article's tone and style before publishing.",
      githubLink: "https://github.com/Singapranay/wordloom",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["MERN", "JWT-Token", "javascript", "CSS"]
    },
    {
      title: "Url Shrinker ",
      description: "The URL Shrinker Web Application converts long URLs into short, easy-to-share links. It stores the original URL with a unique code and redirects users to the full URL when the short link is accessed. This improves link readability and usability across platforms.",
      githubLink: "https://github.com/Singapranay/url-shrinker",
      image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "JavaScript", "typescript", "CSS","MongoDB"]
    },
    {
      title: "Property path finder",
      description: "A platform connecting with people who need assistance for various property-related tasks like finding, buying, or selling properties.",
      githubLink: "https://github.com/Singapranay/sample/tree/main/html_project",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Web Development", "JavaScript", "CSS"]
    },
    {
      title: "Micro Forge Studio AI",
      description: "Micro Forge Studio AI is a web application that allows users to create and manage different components of the code. It provides tools for testing, and deploying models, making it easier for developers.",
      githubLink: "https://github.com/Singapranay/micro-forge-studio-ai",
      image: "https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Data Structures", "Algorithms", "Java"]
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Featured <span className="text-blue-600">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;