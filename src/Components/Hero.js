import React from "react";
import "./Hero.css";
import heroimg from "../assets/immagini/savanadark.jpg";

const Hero = ({ children, img }) => {
  const image = img ? img : heroimg;
  return (
    <>
      <div
        className="hero-img"
        style={{
          background: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no repeat",
          height: 700,
        }}
      >
        <div className="heading">{children}</div>
      </div>
    </>
  );
};

export default Hero;
