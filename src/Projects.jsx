import React from 'react';
import Card from './Card';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      title: "feathered", 
      description: "language learning app supporting up to 8 langauges, utilizing gpt 4o mini api", 
      link: "https://feathered.boo/", 
      image: "/feathered.png" 
    },
    { 
      id: 2, 
      title: "graphify", 
      description: "a visual spotify playlist generator based on a graph system, uses spotify api", 
      link: "https://graphify.stream/", 
      image: "/graphify.png" 
    },
    { 
      id: 4, 
      title: "ai + vis dataset site", 
      description: "website made to display data vis testing from llm output, made in React", 
      link: "https://datavis-ai-site.netlify.app/", 
      image: "/datavis-ai.png" 
    },
    { 
      id: 5, 
      title: "patatap clone", 
      description: "clone of webapp patatap made for prof. owen mundy", 
      link: "https://yodering.github.io/patatap-clone/", 
      image: "/patatap.png" 
    },
    { 
      id: 6, 
      title: "audio visualizer", 
      description: "audio visualizer made with p5.js", 
      link: "https://yodering.github.io/audio-visualizer/", 
      image: "/audio.png" 
    },
    { 
      id: 7, 
      title: "rubik's cube map", 
      description: "map displaying rubik's cube competitions, made for datavis final", 
      link: "https://yodering.github.io/csc362-final/", 
      image: "/rubik.png" 
    }
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