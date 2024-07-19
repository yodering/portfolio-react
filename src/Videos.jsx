import React from 'react';
import Card from './Card';

const Videos = () => {
  const videos = [
    { 
      id: 1, 
      title: "mens bb hype 23", 
      description: "video for davidson college", 
      link: "#", 
      image: "/path/to/rigging-icon.png" 
    },
    { 
      id: 2, 
      title: "mens bb hype 22", 
      description: "video for davidson college", 
      link: "#", 
      image: "/path/to/rigging-icon.png" 
    },
    { 
      id: 3, 
      title: "womens bb hype", 
      description: "video for davidson college", 
      link: "#", 
      image: "/path/to/rigging-icon.png" 
    },
    { 
      id: 4, 
      title: "des watson intro", 
      description: "video for davidson college", 
      link: "#", 
      image: "/path/to/rigging-icon.png" 
    },
    { 
      id: 5, 
      title: "all sports awards", 
      description: "video for davidson college", 
      link: "#", 
      image: "/path/to/rigging-icon.png" 
    },
    { 
      id: 6, 
      title: "wolf ###", 
      description: "The bone hierarchy determines how objects move.", 
      link: "#", 
      image: "/path/to/rigging-icon.png" 
    },
    { 
      id: 7, 
      title: "graphify showcase", 
      description: "The bone hierarchy determines how objects move.", 
      link: "#", 
      image: "/path/to/rigging-icon.png" 
    },
    { 
      id: 8, 
      title: "unsolved (movie)", 
      description: "The bone hierarchy determines how objects move.", 
      link: "#", 
      image: "/path/to/rigging-icon.png" 
    },
    { 
      id: 9, 
      title: "wolf ###", 
      description: "The bone hierarchy determines how objects move.", 
      link: "#", 
      image: "/path/to/rigging-icon.png" 
    },
    { 
      id: 10, 
      title: "grass n nature", 
      description: "The bone hierarchy determines how objects move.", 
      link: "#", 
      image: "/path/to/rigging-icon.png" 
    },
    { 
      id: 11, 
      title: "mario car", 
      description: "The bone hierarchy determines how objects move.", 
      link: "#", 
      image: "/path/to/rigging-icon.png" 
    },
    { 
      id: 12, 
      title: "mileage", 
      description: "The bone hierarchy determines how objects move.", 
      link: "#", 
      image: "/path/to/rigging-icon.png" 
    },
    { 
      id: 13, 
      title: "whats the hold up", 
      description: "The bone hierarchy determines how objects move.", 
      link: "#", 
      image: "/path/to/rigging-icon.png" 
    },
    { 
      id: 14, 
      title: "foreign", 
      description: "The bone hierarchy determines how objects move.", 
      link: "#", 
      image: "/path/to/rigging-icon.png" 
    }
    // Add more projects...
  ];

  return (
    <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
      <div className="grid grid-cols-3 gap-8 p-8">
        {videos.map((video) => (
          <Card key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default Videos;