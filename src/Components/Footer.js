import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaPhone,
  FaTwitter,
  FaInstagram,
  FaSearch,
  FaMailBulk,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <h4>
                {" "}
                <FaSearch
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
                Italia, 70029
              </h4>
            </div>
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
                345/84563554
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
                naturetravel@gmail.com
              </h4>
            </div>
          </div>
          <div className="right">
            <h3>About Company</h3>
            <p>
              Around 50 years ago, the editors of a magazine called Travel &
              Camera made a big leap forward, embracing not just photography,
              but the entire world.
            </p>
            <div className="social">
              <FaFacebook
                size={30}
                style={{ color: "blue", marginRight: "1rem" }}
              />

              <FaInstagram
                size={30}
                style={{ color: "purple", marginRight: "1rem" }}
              />
              <FaTwitter
                size={30}
                style={{ color: "cyan", marginRight: "1rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
