import React from "react";
import Hero from "../Components/Hero";
import Form from "../Components/Form";
import herocontact from "../assets/immagini/herocontact.jpg";

const Contactscreen = () => {
  return (
    <>
      <Hero img={herocontact}>
        <h1>CONTACT US</h1>
        <p>Contact Nature Travel</p>
      </Hero>
      <Form />
    </>
  );
};

export default Contactscreen;
