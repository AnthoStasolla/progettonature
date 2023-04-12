import React from "react";
import Hero from "../Components/Hero";
import abouthero from "../assets/immagini/abouthero.jpg";
import Panelabout from "../Components/Panelabout";

const Aboutscreen = () => {
  return (
    <>
      <Hero img={abouthero}>
        <h1>About Us</h1>
        <p>Who We Are...Our Passion First</p>
      </Hero>
      <Panelabout />
    </>
  );
};

export default Aboutscreen;
