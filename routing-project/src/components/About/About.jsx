import React from "react";
import { useNavigate } from "react-router";

function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>About Me</h1>

      <h2>Hi, I'm Santhosh B S 👋</h2>

      <p>
        I'm a Computer Science and Engineering student passionate about web
        development and software engineering.
      </p>

      <h3>Education</h3>
      <p>Computer Science and Engineering — Expected Graduation: 2027</p>

      <h3>Technical Skills</h3>
      <p>Frontend: HTML, CSS, JavaScript, React.js</p>
      <p>Backend: Node.js, Express.js</p>
      <p>Database: MongoDB</p>
      <p>Tools: Git, GitHub, VS Code</p>

      <h3>My Goal</h3>
      <p>
        My goal is to become a skilled Full Stack Developer and build useful,
        user-friendly web applications.
      </p>

      <button onClick={() => navigate("/")}>Go to Home</button>

      <button onClick={() => navigate("/contact")}>Go to Contact</button>
    </div>
  );
}

export default About;
