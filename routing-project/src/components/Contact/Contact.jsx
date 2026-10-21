import React from "react";
import { useNavigate } from "react-router";

function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact Me</h1>

      <p>I'd love to hear from you!</p>

      <p>
        <strong>Name:</strong> Santhosh B S
      </p>

      <p>
        <strong>Email:</strong> santhosh220506@gmail.com
      </p>

      <p>
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/santhoshsekar-bs"
          target="_blank"
          rel="noreferrer"
        >
          My LinkedIn Profile
        </a>
      </p>

      <p>
        <strong>GitHub:</strong>{" "}
        <a
          href="https://github.com/santhosh-bs22"
          target="_blank"
          rel="noreferrer"
        >
          My GitHub Profile
        </a>
      </p>

      <button onClick={() => navigate("/")}>Go to Home</button>

      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  );
}

export default Contact;
