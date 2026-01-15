import React, { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const toursData = [
  {
    id: 1,
    name: "Paris Tour",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    price: 1200,
    description:
      "Paris is the capital city of France and one of the most romantic and culturally rich destinations in the world. Known for its timeless art, elegant fashion, world-class gastronomy, and vibrant history, Paris offers a unique blend of tradition and modern charm. The city is home to iconic landmarks such as the Eiffel Tower, which provides breathtaking panoramic views, the Louvre Museum, housing thousands of priceless artworks including the Mona Lisa, and the historic Notre-Dame Cathedral with its stunning Gothic architecture. Visitors can stroll along the Seine River, explore charming neighborhoods like Montmartre and Le Marais, or relax at cozy cafés lining the streets. Paris is also famous for its cuisine, from buttery croissants and baguettes to gourmet French dishes served in Michelin-starred restaurants. Shopping enthusiasts can enjoy luxury brands on the Champs-Élysées as well as local boutiques. Whether you are interested in art, history, food, or romance, Paris promises an unforgettable experience filled with beauty, elegance, and cultural depth."
  },
  {
    id: 2,
    name: "Maldives Tour",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 1800,
    description:
      "The Maldives is a breathtaking tropical paradise located in the Indian Ocean, famous for its crystal-clear turquoise waters, white sandy beaches, and luxurious overwater resorts. Comprising hundreds of coral islands, the Maldives is an ideal destination for travelers seeking peace, natural beauty, and exclusivity. The calm lagoons and vibrant coral reefs make it a perfect spot for snorkeling, scuba diving, and underwater exploration, where visitors can witness colorful marine life including turtles, rays, and tropical fish. Many resorts offer private villas with direct ocean access, creating a serene and romantic atmosphere ideal for honeymooners and couples. Beyond relaxation, tourists can enjoy water sports such as jet skiing, kayaking, and paddleboarding. Traditional Maldivian culture, seafood cuisine, and warm hospitality add to the overall experience. Sunsets in the Maldives are particularly mesmerizing, painting the sky with shades of orange and pink. Whether you want to unwind by the beach, enjoy luxury living, or explore marine adventures, the Maldives offers a perfect escape from everyday life."
  },
  {
    id: 3,
    name: "Dubai Tour",
    image: "https://images.unsplash.com/photo-1528701800489-20be3cfa64d4",
    price: 1500,
    description:
      "Dubai is a dynamic and futuristic city in the United Arab Emirates, known for its luxurious lifestyle, ultramodern architecture, and vibrant nightlife. The city is home to world-famous attractions such as the Burj Khalifa, the tallest building in the world, offering spectacular views from its observation decks. Dubai is also renowned for its massive shopping malls, including the Dubai Mall, where visitors can enjoy shopping, dining, and entertainment under one roof. Beyond luxury, Dubai offers rich cultural experiences through traditional souks, desert safaris, and heritage areas like Al Fahidi Historical District. Tourists can enjoy thrilling activities such as dune bashing, camel rides, and sandboarding in the desert. The city’s coastline features beautiful beaches, luxury resorts, and exciting water sports. Dubai’s diverse food scene reflects global flavors, from street food to fine dining. With its perfect mix of tradition, innovation, adventure, and comfort, Dubai is an exciting destination for travelers of all ages."
  }
];


 function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = () => {
    setLoading(true);
    setTimeout(() => {
      setTours(toursData);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) return <Loading />;

  if (tours.length === 0) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }
  return <main id="main">
  <Tours tours={tours} setTours={setTours}/>;
  </main>
}

export default App
