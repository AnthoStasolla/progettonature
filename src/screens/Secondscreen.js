import React from "react";
import Hero from "../Components/Hero";
import Cards from "../Components/Cards";
import { cards } from "../links";

const Secondscreen = () => {
  return (
    <div>
      <Hero>
        <h1>Choose Your Trip</h1>
        <p>Outdoor & Adventure Holidays in Nature</p>
      </Hero>
      <div className="row row-cols-lg-3 row-cols-md-2">
        {cards.map((card) => {
          return <Cards key={card.id} {...card} />;
        })}
      </div>
    </div>
  );
};

export default Secondscreen;
