import React from 'react';

const About = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 max-w-2xl mx-auto opacity-0 animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">about me</h2>
      <img 
        src="/dog.JPG" 
        alt="Yoder" 
        className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
      />
      <p className="text-gray-600 mb-4">
        cs student @ davidson college with an interest in web development and computer graphics (in progress) 
      </p>
      <p className="text-gray-600 mb-4">
        i enjoy making web apps and making visual content
      </p>  
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">skills</h3>
        <div className="flex flex-wrap gap-2">
          {['JavaScript', 'React', 'Node.js', 'Three.js', 'Python', 'Git', 'HTML','CSS', 'After Effects', 'Premiere Pro'].map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;