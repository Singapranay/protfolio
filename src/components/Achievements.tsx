import React from 'react';

const Achievements: React.FC = () => {
  return (
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
    <section
      id="Achivements"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center"
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-6">🏆 Achievements</h2>
      
      <ul className="list-disc text-left space-y-4 text-gray-800 max-w-xl">
        <li>Solved 100+ problems on LeetCode.</li>
        <li>Secured 1st place in Mandel-Level Quiz Competition in my school.</li>
        <li>Completed Full Stack Java Internship at IBM All Soft Solutions.</li>
        <li>Developed a Table Reservation System as a group project.</li>
        <li>Achieved 10k+ rank in Telangana EAMCET (May 2022) among 200k+ students.</li>
        <li>Won "Best Innovation" title for AI-based Animal Repelling Device project.</li>
      </ul>
      
    </section>
    </p>
  );
};

export default Achievements;
