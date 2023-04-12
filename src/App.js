import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homescreen from "./screens/Homescreen";
import Secondscreen from "./screens/Secondscreen";
import Aboutscreen from "./screens/Aboutscreen";
import Contactscreen from "./screens/Contactscreen";
import Errorscreen from "./screens/Errorscreen";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/second" element={<Secondscreen />} />
        <Route path="/about" element={<Aboutscreen />} />
        <Route path="/contact" element={<Contactscreen />} />
        <Route path="*" element={<Errorscreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
