import React from 'react';

const SummerTraining: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-3xl mx-auto mt-10">
       <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Summer <span className="text-blue-600">Training</span>
        </h2>
      <p className="text-gray-700 mb-2">
        I completed my Summer Training at <strong>IBM All Soft Solutions and Services</strong>, where I learned Full Stack Java Development.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Frontend: HTML, CSS, JavaScript, Bootstrap</li>
        <li>Backend: Java (JDBC), Node.js</li>
        <li>Database: MongoDB</li>
        <li>Project: Table Reservation System</li>
        <li>Gained practical experience and hands-on skills in real-world application development.</li>
      </ul>
    </div>
  );
};

export default SummerTraining;
