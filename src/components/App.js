import React, { useState, useEffect } from "react";
import Tour from "./Tour";


let toursData = [
  {
    id: 1,
    name: "Paris Tour",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    price: 1200,
    description:
      "Paris is the capital city of France and one of the most beautiful cities in the world. It is widely known for its art, fashion, gastronomy, and rich cultural heritage. The city is home to iconic landmarks such as the Eiffel Tower, Louvre Museum, Notre-Dame Cathedral, and charming streets filled with cafés, museums, and historic architecture."
  },
  {
    id: 2,
    name: "Maldives Tour",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 1800,
    description:
      "The Maldives is a breathtaking tropical paradise made up of hundreds of islands in the Indian Ocean. It is famous for its crystal-clear turquoise waters, white sandy beaches, and luxurious overwater villas. This destination is perfect for honeymooners, relaxation seekers, snorkeling lovers, and anyone looking to enjoy nature at its finest."
  },
  {
    id: 3,
    name: "Dubai Tour",
    image: "https://images.unsplash.com/photo-1528701800489-20be3cfa64d4",
    price: 1500,
    description:
      "Dubai is a modern and vibrant city known for its luxury lifestyle, futuristic architecture, and world-class shopping experiences. From towering skyscrapers like the Burj Khalifa to desert safaris and luxury malls, Dubai offers a unique blend of traditional Arabian culture and modern innovation that attracts millions of tourists every year."
  },
  {
    id: 4,
    name: "London Tour",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    price: 1400,
    description:
      "London is the capital city of England and the United Kingdom, known for its long and fascinating history. The city offers royal palaces, world-famous museums, iconic landmarks like Big Ben and the London Eye, and a vibrant cultural scene that blends tradition with modern city life."
  },
  {
    id: 5,
    name: "Rome Tour",
    image: "https://images.unsplash.com/photo-1526481280690-9eadc21c69e3",
    price: 1300,
    description:
      "Rome is a historic city in Italy that feels like an open-air museum. It is famous for ancient architecture such as the Colosseum, Roman Forum, and Vatican City. Visitors can explore centuries of history, stunning art, delicious Italian cuisine, and a culture that has influenced the world for thousands of years."
  },
  {
    id: 6,
    name: "New York Tour",
    image: "https://images.unsplash.com/photo-1549921296-3ecf59a3d7c6",
    price: 1600,
    description:
      "New York City is one of the most iconic cities in the world, known for its skyscrapers, fast-paced lifestyle, and cultural diversity. From Broadway shows and Times Square to Central Park and world-class museums, the city offers endless experiences for tourists, artists, entrepreneurs, and dreamers alike."
  },
  {
    id: 7,
    name: "Tokyo Tour",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
    price: 1700,
    description:
      "Tokyo is Japan’s bustling capital city, famous for its advanced technology, vibrant nightlife, and deep-rooted traditions. The city beautifully blends modern skyscrapers with historic temples, traditional food markets, and cultural festivals, making it one of the most exciting travel destinations in the world."
  },
  {
    id: 8,
    name: "Bali Tour",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    price: 1100,
    description:
      "Bali is a stunning Indonesian island known for its lush green landscapes, peaceful beaches, and spiritual atmosphere. From forested mountains and rice terraces to coral reefs and yoga retreats, Bali is a perfect destination for travelers seeking relaxation, adventure, and cultural experiences."
  },
  {
    id: 9,
    name: "Switzerland Tour",
    image: "https://images.unsplash.com/photo-1500048993959-d6b73c5d0a4c",
    price: 2000,
    description:
      "Switzerland is famous for its breathtaking Alpine mountains, crystal-clear lakes, and scenic train journeys. The country offers charming villages, outdoor adventures, and a peaceful environment that attracts nature lovers, photographers, and travelers looking for clean landscapes and unforgettable views."
  },
  {
    id: 10,
    name: "Thailand Tour",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526",
    price: 1000,
    description:
      "Thailand is a vibrant travel destination known for its tropical beaches, ancient temples, colorful street markets, and delicious cuisine. Visitors can enjoy a mix of cultural heritage, adventure activities, nightlife, and friendly local hospitality, making Thailand a favorite destination for travelers worldwide."
  }
];

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(toursData);
      setLoading(false);
    }, 2000);
  }, []);

  function handleRemove(id) {
    setData(data.filter(item => item.id !== id));
  }

  function refreshTours() {
    setLoading(true);
    setTimeout(() => {
      setData(toursData);
      setLoading(false);
    }, 2000);
  }

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (data.length === 0) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>No tours left</h2>
        <button onClick={refreshTours}>Refresh</button>
      </div>
    );
  }

  return (
    <main id="main">
      {data.map(item => (
        <Tour key={item.id} item={item} handleRemove={handleRemove} />
      ))}
    </main>
  );
};

export default App;