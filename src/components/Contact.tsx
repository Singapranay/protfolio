import React from 'react';
import { Mail, Phone, Linkedin, Github, Code, BookOpen } from 'lucide-react';

interface SocialLink {
  platform: string;
  icon: React.ReactNode;
  link: string;
  color: string;
}

const Contact: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      platform: "LinkedIn",
      icon: <Linkedin size={20} />,
      link: "https://www.linkedin.com/in/pranay-singa-95a420240/",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      platform: "GitHub",
      icon: <Github size={20} />,
      link: "https://github.com/Singapranay",
      color: "bg-gray-800 hover:bg-gray-900"
    },
    {
      platform: "LeetCode",
      icon: <Code size={20} />,
      link: "https://leetcode.com/u/Pranaysinga/",
      color: "bg-yellow-600 hover:bg-yellow-700"
    },
    {
      platform: "GeeksforGeeks",
      icon: <Code size={20} />,
      link: "https://www.geeksforgeeks.org/user/singapranay69/",
      color: "bg-green-600 hover:bg-green-700"
    }
    // {
    //   platform: "Medium",
    //   icon: <BookOpen size={20} />,
    //   link: "https://medium.com/@narlarushikesh",
    //   color: "bg-gray-900 hover:bg-black"
    // }
  ];

  return (
    <section id="contact" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Get In <span className="text-blue-600">Touch</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-center">
                  <Mail className="text-blue-600 mr-4" size={24} />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <a 
                      href="mailto:singapranay123@gmail.com"
                      className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      singapranay123@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="text-blue-600 mr-4" size={24} />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                    <a 
                      href="tel:+91 9014046673"
                      className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      +91 9014046673
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Connect on Social Platforms
                </h3>
                
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 text-white rounded-md transition-colors ${social.color}`}
                    >
                      {social.icon}
                      <span>{social.platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;