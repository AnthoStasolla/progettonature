import React from "react";
import "./Video.css";
import { Link } from "react-router-dom";
import videohero from "../assets/video/videohero1.mp4";

const Video = () => {
  return (
    <>
      <div className="hero">
        <video autoPlay loop muted id="video">
          <source src={videohero} type="video/mp4" />
        </video>
        <div className="content">
          <h1>Nature. Travel.</h1>
          <p>All the best travel in the nature</p>

          <div>
            <Link to="/about" className="btn">
              About
            </Link>
            <Link to="/contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
