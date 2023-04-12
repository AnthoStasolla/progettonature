import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = ({ titolo, prezzo, giorni, immagine }) => {
  return (
    <>
      <div className="pricing">
        <div className="trip-container">
          <div
            className="trip"
            style={{
              background: `url(${immagine})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="rounded rounded-5 contenuto">
              <h3>{titolo}</h3>
              <span className="bar"></span>
              <p className="btc">€{prezzo}</p>
              <p>{giorni} giorni</p>
            </div>
            <Link to="/contact" className="btn">
              Book
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
