import React from 'react';

const Card = ({ title, description, link, image }) => (
  <div className="w-64 h-80 bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between p-6 group relative transition-shadow duration-300 hover:shadow-lg">
    {/* Glow effect (visible on hover) */}
    <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-purple-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"></div>
    
    <div className="flex-grow flex flex-col items-center justify-center text-center relative z-10">
      <img src={image} alt={title} className="w-24 h-24 object-cover mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <div className="relative z-10 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <a 
        href={link} 
        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-center py-2 rounded-md transition-colors duration-300 inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        visit
      </a>
    </div>
  </div>
);

export default Card;