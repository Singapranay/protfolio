import React, { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  affiliation: string;
  image: string;
  link: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "JAVA Full Stack ",
      issuer: "Allsoft solutions and services | IBM",
      affiliation: "Allsoft Solutions & Services Pvt. Ltd. (NCR/Mohali)",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://drive.google.com/file/d/1wO9VdP8OWkOB5Th33V14iFrwTdv_t7qg/view?usp=sharing"
    },
    {
      title: "Programming in C++: A Hands-on Introduction",
      issuer: "Coursera",
      affiliation: "Codio's University of California",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://drive.google.com/file/d/1XZbM9MvLsTlvUWfKoSwf5_CIJin6BKIH/view?usp=sharing"
    },
    {
      title: "Mastering Data Structurs & Algorithms using C++",
      issuer: "Udemy",
      affiliation: "IIT Roorkie",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://drive.google.com/file/d/10BDthkbPwNEikK2_SRdmjtzZVL5LNmgz/view?usp=sharing"
    },
    {
      title: "Building Web Applications in PHP",
      issuer: "Coursera",
      affiliation: "University of Michigan ",
      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://drive.google.com/file/d/1wbrLWA7PXY_5cHXV7TucDnQ8m2sT6rjH/view?usp=sharing"
    },
    {
      title: "Introduction to HTML, CSS, & JavaScript",
      issuer: "Programming Pathshala",
      affiliation: "IBM",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://drive.google.com/file/d/1duiASWTMKvBbOsB887ITaNHK3_jlrnY_/view?usp=sharing"
    },
    {
      title: "Algorithms on Strings",
      issuer: "Coursera",
      affiliation: "University of California San Diego",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://drive.google.com/file/d/1quUwxMPMOqTh-k-leqSiEwY-bvR3ddl8/view?usp=sharing"
    },
    {
      title: " ChatGPT Advanced Data Analysis",
      issuer: "Coursera",
      affiliation: "Vanderbilt University ",
      image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://drive.google.com/file/d/1D9Zm_wPjX3uYEIgGnEU_sr41hsUJra2x/view?usp=sharing"
    },
    {
      title: "Generative AI for Everyone",
      issuer: "Coursera",
      affiliation: " DeepLearning.AI",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://drive.google.com/file/d/1OzTgAsRGmAvWn4vj9TBCmK3_hmdw8ca0/view?usp=sharing"
    },
    {
      title: "Dynamic Programming, Greedy Algorithms",
      issuer: "Coursera", 
      affiliation: " University of Colorado Boulder",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://drive.google.com/file/d/1eK02BLL_GJ4QXFAw01oN9hCZ0IWEAMB5/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Professional <span className="text-blue-600">Certifications</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a 
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white bg-blue-600 px-4 py-2 rounded-md">
                    View Certificate
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start">
                  <Award className="text-blue-600 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600">
                      <span className="font-medium">{cert.issuer}</span>
                      {cert.affiliation && (
                        <span> | {cert.affiliation}</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;