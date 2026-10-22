import React from "react";
import { useNavigate } from "react-router";
import "./About.css";

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          MERN Stack Developer skilled in React.js, JavaScript, Node.js,
          Express.js, MongoDB, and Tailwind CSS. Experienced in developing
          real-world full-stack applications, integrating REST APIs,
          implementing authentication and role-based access, working with
          biometric device APIs, and building responsive user interfaces. Strong
          understanding of frontend and backend development, database
          operations, API integration, debugging, and collaborative development.
        </p>
      </section>
      <section className="about-section">
        <h2>My Skills</h2>
        <ul className="about-skills-list">
          <li>
            <strong>Languages:</strong> JavaScript, Java
          </li>
          <li>
            <strong>Frontend:</strong> React.js, Tailwind CSS
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express.js
          </li>
          <li>
            <strong>Database:</strong> MongoDB
          </li>
          <li>
            <strong>Tools:</strong> Git, GitHub, Figma, Postman
          </li>
        </ul>
      </section>
      <section className="about-section">
        <h2>My Projects</h2>

        <div className="about-project-item">
          <h3>CineVerse - Movie Website (React)</h3>
          <p>
            Built responsive movie browsing platform with multilingual support
            and trailer integration.
          </p>
        </div>

        <div className="about-project-item">
          <h3>SerenityStays - Hotel Reservation Website</h3>
          <p>
            Developed a user-friendly hotel reservation interface with room
            selection and booking functionality.
          </p>
        </div>

        <div className="about-project-item">
          <h3>Weather Website</h3>
          <p>Built real-time weather application using API integration.</p>
        </div>

        <div className="about-project-item">
          <h3>EcomX - E-Commerce Website</h3>
          <p>
            Built a full-featured e-commerce platform with product listings,
            shopping cart functionality, and a user-friendly interface.
          </p>
        </div>
      </section>
      <div className="about-btn-group">
        <button className="about-btn" onClick={() => navigate("/contact")}>
          Go to Contact Page →
        </button>
        <button
          className="about-btn about-btn-outline"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default About;
