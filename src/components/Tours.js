import React from "react";
import Tour from "./Tour";

function Tours({ tours, setTours }) {
  return (
    <section>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} setTours={setTours} />
      ))}
    </section>
  );
}

export default Tours;
