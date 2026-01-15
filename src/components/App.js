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
      "Paris is the capital city of France, known for its art, fashion, gastronomy and culture. The city is home to iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral asdfghjkasdfghjksdfghjkdfghjkdfghjksdfhj."
  },
  {
    id: 2,
    name: "Maldives Tour",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 1800,
    description:
      "The Maldives is a tropical paradise known for its crystal-clear waters, white sandy beaches, and luxury resorts. It is a perfect destination for relaxation and water sports ghjksdfghjdfghjdfghjdfgh dfghjfghjkdfgh dfghjdfghjk."
  },
  {
    id: 3,
    name: "Dubai Tour",
    image: "https://images.unsplash.com/photo-1528701800489-20be3cfa64d4",
    price: 1500,
    description:
      "Dubai is a modern city famous for luxury shopping, ultramodern architecture, and lively nightlife scene. Burj Khalifa, the tallest building in the world, is its main attraction dfghjdfghjwertyuiopasdfghjkl zxcvbnm."
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
  return <main>
  <Tours tours={tours} setTours={setTours}/>;
  </main>
}

export default App
