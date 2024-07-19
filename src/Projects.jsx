import React from 'react';
import Card from './Card';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      title: "feathered", 
      description: "language learning app supporting up to 8 langauges, utlizing gpt 4o mini api", 
      link: "https://feathered.boo/", 
      image: "/path/to/rigging-icon.png" 
    },
    { 
      id: 2, 
      title: "graphify", 
      description: "a visual spotify playlist generator based on a graph system, uses spotify api", 
      link: "https://graphify.stream/", 
      image: "/path/to/rigging-icon.png" 
    },
    { 
      id: 3, 
      title: "patatap clone", 
      description: "The bone hierarchy determines how objects move.", 
      link: "#", 
      image: "/path/to/rigging-icon.png" 
    },
    { 
      id: 4, 
      title: "rubik's cube map", 
      description: "The bone hierarchy determines how objects move.", 
      link: "#", 
      image: "/path/to/rigging-icon.png" 
    },
    { 
      id: 5, 
      title: "audio visualizer", 
      description: "The bone hierarchy determines how objects move.", 
      link: "#", 
      image: "/path/to/rigging-icon.png" 
    },
    // Add more projects...
  ];

  return (
    <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
      <div className="grid grid-cols-3 gap-8 p-8">
        {projects.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;