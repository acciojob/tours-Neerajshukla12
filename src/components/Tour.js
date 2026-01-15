import React, { useState } from "react";


function Tour({ id, name, image, price, description,setTours}) {
  const [showMore, setShowMore] = useState(false);

  const removeTour = (id) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  return (
    <article id="tour-item-para-rec6d6T3q5EBIdCfD" style={{ border: "1px solid #ccc", margin: "20px", padding: "20px" }}>
      <img src={image} alt={name} width="300" />
      <h3>{name}</h3>
      <h4>${price}</h4>
      <p>
        {showMore ? description : `${description.slice(0, 200)}...`}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "See less" : "Show more"}
        </button>
      </p>
      <button id="delete-btn-rec6d6T3q5EBIdCfD" onClick={() => removeTour(id)}>Remove</button>
    </article>
  );
}

export default Tour