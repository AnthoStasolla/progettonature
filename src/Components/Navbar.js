import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { handleClick, isSidebarOpen, navColor, changeNavColor } =
    useGlobalContext();

  window.addEventListener("scroll", changeNavColor);
  return (
    <>
      <div
        className={navColor ? "header header-bg" : "header"}
        onClick={handleClick}
      >
        <Link to="/">
          <h1>NATURE TRAVEL</h1>
        </Link>
        <ul className={isSidebarOpen ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/second">Trip Idea</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {isSidebarOpen ? (
            <FaTimes size={20} style={{ color: "whitesmoke" }} />
          ) : (
            <FaBars size={20} style={{ color: "whitesmoke" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
