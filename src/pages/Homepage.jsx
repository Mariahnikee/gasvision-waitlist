import React from "react";
import logo from '../assets/logo.png'
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="squeeze-page">
      <div className="overlay">
        <div className="content">
          <img
            src = {logo}
            alt="GasVision Logo" 
            className="logo" 
          />
          <h1>Hey there, we're building something special for you!</h1>
          <p>
            Join our waitlist to access a bundle of solutions that will make refilling, 
            repairing, and replacing your gas cylinder easier than ever! We're also 
            working hard to reduce the number of deaths caused by gas explosions. If this 
            sounds interesting to you, join our waitlist to contribute to the cause.
          </p>
          <button className="waitlist-btn">Join the waitlist →</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
