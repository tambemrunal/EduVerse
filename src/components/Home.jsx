import React from "react";
import "./Home.css";
import landingImage from "../assets/girl-img.png"; // Replace with your image
//home
const Home = () => {
  return (
    <div className="home-container">
      <div className="text-section">
        <h2>Be a successful student from online</h2>
        <h1>
          Find Your <span className="highlight">Next level</span> Online Course
        </h1>
        <p>
          EduVerse offers professional training classes and special features to
          help you improve your skills and develop your career path.
        </p>
        <div className="buttons">
          <button className="start-btn">Get Started</button>
          <button className="watch-btn">Watch Video</button>
        </div>
      </div>

      <div className="image-section">
        <img src={landingImage} alt="E-learning" />
      </div>
    </div>
  );
};

export default Home;
