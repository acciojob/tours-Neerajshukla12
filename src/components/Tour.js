import React, { useState } from "react";
import Tours from "./Tours";


function Tour({ id, name, image, price, description, removeTour }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <article style={{ border: "1px solid #ccc", margin: "20px", padding: "20px" }}>
      <img src={image} alt={name} width="300" />
      <h3>{name}</h3>
      <h4>${price}</h4>
      <p>
        {showMore ? description : `${description.substring(0, 200)}...`}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "See less" : "Show more"}
        </button>
      </p>
      <button onClick={() => removeTour(id)}>Remove</button>
    </article>
  );
}

export default Tour