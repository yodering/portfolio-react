import React from 'react';
import Card from './Card';

const Videos = () => {
  const videos = [
    { 
      id: 1, 
      title: "mens bb hype 23", 
      description: "video for davidson college", 
      link: "#", 
      image: "/mensbb2023.png" 
    },
    { 
      id: 2, 
      title: "mens bb hype 22", 
      description: "video for davidson college", 
      link: "#", 
      image: "/mensbb2022.png" 
    },
    { 
      id: 3, 
      title: "womens bb hype", 
      description: "video for davidson college", 
      link: "#", 
      image: "/womensbbhype.png" 
    },
    { 
      id: 4, 
      title: "des watson intro", 
      description: "video for davidson college", 
      link: "#", 
      image: "/deswatson.png" 
    },
    { 
      id: 5, 
      title: "all sports awards", 
      description: "video for davidson college", 
      link: "#", 
      image: "/allsports.png" 
    },
    { 
      id: 6, 
      title: "volleyball hype", 
      description: "video for davidson college", 
      link: "#", 
      image: "/volleyball1.png" 
    },
    { 
      id: 7, 
      title: "volleyball hype 2", 
      description: "video for davidson college", 
      link: "#", 
      image: "/volleyball2.png" 
    },
    { 
      id: 8, 
      title: "graphify showcase", 
      description: "graphify project showcase", 
      link: "#", 
      image: "/graphifyprev.png" 
    },
    { 
      id: 9, 
      title: "unsolved (movie)", 
      description: "movie for filmmaking", 
      link: "#", 
      image: "/unsolved.png" 
    },
    { 
      id: 10, 
      title: "wolf ###", 
      description: "csgo edit", 
      link: "#", 
      image: "/yhapojj.png" 
    },
    { 
      id: 11, 
      title: "grass n nature", 
      description: "irl edit", 
      link: "#", 
      image: "/grassnature.png" 
    },
    { 
      id: 12, 
      title: "mario car", 
      description: "mario kart edit", 
      link: "#", 
      image: "/mariokart.png" 
    },
    { 
      id: 13, 
      title: "mileage", 
      description: "fortnite edit", 
      link: "#", 
      image: "/mileage.png" 
    },
    { 
      id: 14, 
      title: "whats the hold up", 
      description: "csgo edit", 
      link: "#", 
      image: "/holdup.png" 
    },
    { 
      id: 15, 
      title: "foreign", 
      description: "fortnite edit", 
      link: "#", 
      image: "/foreign.png" 
    }
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