import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';

interface ResumeOption {
  title: string;
  description: string;
  viewLink: string;
  downloadLink: string;
}

const Resume: React.FC = () => {
  const resumeOptions: ResumeOption[] = [
    {
      title: "Specialized Resume",
      description: "Tailored for Fullstack web development position, highlighting relevant skills and projects.",
      viewLink: "https://drive.google.com/file/d/19fBlCR0uMZjMgcS8MFpicpwGpmtEuUPX/view",
      downloadLink: "https://drive.google.com/file/d/19fBlCR0uMZjMgcS8MFpicpwGpmtEuUPX/view?usp=sharing"
    },
    {
      title: "General Resume",
      description: "A comprehensive overview of all skills and experiences suitable for broader tech roles.",
      viewLink: "https://drive.google.com/file/d/1jIANo7FbFFbGn8x3_LP5myJ7NYUtKHgt/view",
      downloadLink: "https://drive.google.com/file/d/1jIANo7FbFFbGn8x3_LP5myJ7NYUtKHgt/view?usp=sharing"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          My <span className="text-blue-600">Resume</span>
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeOptions.map((resume, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FileText className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {resume.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {resume.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={resume.viewLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <Eye size={18} />
                    <span>View</span>
                  </a>
                  <a 
                    href={resume.downloadLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    <Download size={18} />
                    <span>Download</span>
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

export default Resume;