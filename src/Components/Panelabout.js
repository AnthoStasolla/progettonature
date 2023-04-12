import React from "react";
import "./Panelabout.css";
import foto1 from "../assets/immagini/aboutfoto1.jpg";
import foto2 from "../assets/immagini/aboutfoto2.jpg";
import { Link } from "react-router-dom";

const Panelabout = () => {
  return (
    <>
      <div className="about">
        <div className="left">
          <h1>About us</h1>
          <p>
            {" "}
            Around 50 years ago, the editors of a magazine called Travel &
            Camera made a big leap forward, embracing not just photography, but
            the entire world. They'd cover food, wine, fashion, hotels, cruises,
            beaches, cities, hiking, skiing — just about anything that anybody
            would do for fun.
          </p>
          <Link to="/contact">
            <button className="btn">Contact Us</button>
          </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top1">
              <img
                src={foto1}
                className="img1 border border-3 rounded-top"
                alt="foto"
              />
            </div>
            <div className="img-stack bottom1">
              <img
                src={foto2}
                className="img1 border border-3 rounded-bottom"
                alt="foto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panelabout;
