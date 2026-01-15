import React, { useState } from "react";


const Tour = ({ item, handleRemove }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} width="300" />
      <p>Price: ${item.price}</p>

      <p>
        {showMore
          ? item.description
          : `${item.description.substring(0, 200)}...`}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? " See less" : " Show more"}
        </button>
      </p>

      <button onClick={() => handleRemove(item.id)}>Remove</button>
    </div>
  );
};

export default Tour;