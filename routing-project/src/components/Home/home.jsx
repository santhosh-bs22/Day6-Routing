import React from "react";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Hi, I'm Santhosh </h1>
      <h2>Full Stack Developer</h2>

      <p>
        I'm passionate about building modern web applications using React.js,
        Node.js, Express.js, and MongoDB.
      </p>


      <button onClick={() => navigate("/about")}>About Me</button>

      <button onClick={() => navigate("/contact")}>Contact Me</button>
    </>
  );
}

export default Home;
