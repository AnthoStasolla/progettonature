import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import error from "../assets/immagini/errorpage.jpg";

const Errorscreen = () => {
  return (
    <>
      <Hero img={error}>
        <h1>- ERROR 404 -</h1>
        <p>Pagina Non Trovata</p>
        <div className="d-grid gap-2 col-6 mx-auto">
          <Link to="/" className="btn btn-outline-danger btn-lg ">
            Torna Alla Home
          </Link>
        </div>
      </Hero>
    </>
  );
};

export default Errorscreen;
