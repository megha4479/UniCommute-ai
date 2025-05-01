import React, { useState, useEffect } from "react";
import "./RotatingHero.css";

// const images = [
//   "images/images.png",
//   "images/images2.png",
//   "images/images3.png"
// ];
import img1 from './images/images.png';
import img2 from './images/images1.png';
import img3 from './images/images3.png';

const images = [img1, img2, img3];
  

export default function RotatingHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="rotating-hero"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      <div className="rotating-overlay">
        <h1 className="rotating-title">Explore Stress-Free <br />Bus Rides</h1>
        <p className="rotating-subtitle">
          Discover the beauty of comfort with our bus services
        </p>
      </div>
    </div>
  );
}    