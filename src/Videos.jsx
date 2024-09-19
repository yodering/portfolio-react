import React from 'react';
import Card from './Card';

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "mens blackout 24",
      description: "video for davidson college",
      link: "https://youtu.be/HS7iC9yKKcA",
      image: "/blackout.jpeg"
    },
    {
      id: 2,
      title: "all sports awards 24",
      description: "video for davidson college",
      link: "https://youtu.be/fMrFim29oLg",
      image: "/allsports2.jpeg"
    },
    {
      id: 3,
      title: "mens bb hype 23",
      description: "video for davidson college",
      link: "https://youtu.be/LMd7-hhOxsg",
      image: "/mensbb2023.png"
    },
    {
      id: 4,
      title: "mens bb hype 22",
      description: "video for davidson college",
      link: "https://www.youtube.com/watch?feature=shared&v=KEq5_1M7xDc&ab_channel=yoder",
      image: "/mensbb2022.png"
    },
    {
      id: 5,
      title: "womens bb hype",
      description: "video for davidson college",
      link: "https://www.youtube.com/watch?feature=shared&v=rtDaAfUwV3c&ab_channel=yoder",
      image: "/womensbbhype.png"
    },
    {
      id: 6,
      title: "des watson intro",
      description: "video for davidson college",
      link: "https://www.youtube.com/watch?feature=shared&v=Kiw0TbndMCY&ab_channel=yoder",
      image: "/deswatson.png"
    },
    {
      id: 7,
      title: "all sports awards 23",
      description: "video for davidson college",
      link: "https://www.youtube.com/watch?feature=shared&v=-7Uiw8gXiW4&ab_channel=yoder",
      image: "/allsports.png"
    },
    {
      id: 8,
      title: "volleyball hype",
      description: "video for davidson college",
      link: "https://www.youtube.com/watch?feature=shared&v=uoPE0dgL-kw&ab_channel=yoder",
      image: "/volleyball1.png"
    },
    {
      id: 9,
      title: "volleyball hype 2",
      description: "video for davidson college",
      link: "https://www.youtube.com/watch?feature=shared&v=USYsN8QRP7M&ab_channel=yoder",
      image: "/volleyball2.png"
    },
    {
      id: 10,
      title: "margiela",
      description: "fortnite edit",
      link: "https://youtu.be/xLqsIZwqpRM?feature=shared",
      image: "/margiela.png"
    },
    {
      id: 11,
      title: "graphify showcase",
      description: "graphify project showcase",
      link: "https://www.youtube.com/watch?v=S0eZYE6Bkak&ab_channel=yoder",
      image: "/graphifyprev.png"
    },
    {
      id: 12,
      title: "unsolved (movie)",
      description: "movie for filmmaking",
      link: "https://www.youtube.com/watch?v=yg5DUpMZW3E&ab_channel=yoder",
      image: "/unsolved.png"
    },
    {
      id: 13,
      title: "wolf ###",
      description: "csgo edit",
      link: "https://www.youtube.com/watch?v=m2YfVd--P7c&ab_channel=yoder",
      image: "/yhapojj.png"
    },
    {
      id: 14,
      title: "grass n nature",
      description: "irl edit",
      link: "https://www.youtube.com/watch?v=N6XMra-Zp-k&ab_channel=yoder",
      image: "/grassnature.png"
    },
    {
      id: 15,
      title: "mario car",
      description: "mario kart edit",
      link: "https://youtu.be/evV8rPKmFP4",
      image: "/mariokart.png"
    },
    {
      id: 16,
      title: "mileage",
      description: "fortnite edit",
      link: "https://www.youtube.com/watch?v=O-Pw7rHcqts",
      image: "/mileage.png"
    },
    {
      id: 17,
      title: "whats the hold up",
      description: "csgo edit",
      link: "https://youtu.be/v7JVQ7Ysq00",
      image: "/holdup.png"
    },
    {
      id: 18,
      title: "foreign",
      description: "csgo edit",
      link: "https://www.youtube.com/watch?v=tsIj9WZlqfs",
      image: "/foreign.png"
    }
  ];

  return (
    <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {videos.map((video) => (
          <Card key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default Videos;
