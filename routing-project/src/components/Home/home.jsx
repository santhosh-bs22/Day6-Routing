import React from "react";
import { useNavigate } from "react-router";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Hi, I'm Santhosh B S </h1>
      <h3 className="home-role">MERN Stack Developer</h3>

      <p className="home-intro-text">
        Welcome to my portfolio! I am passionate about building full-stack web
        applications, working with React.js, Node.js, Express.js, MongoDB, and
        modern REST APIs.
      </p>

      <div className="home-btn-group">
        <button className="home-btn" onClick={() => navigate("/about")}>
          Go to About Me →
        </button>
        <button
          className="home-btn home-btn-outline"
          onClick={() => navigate("/contact")}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Home;
