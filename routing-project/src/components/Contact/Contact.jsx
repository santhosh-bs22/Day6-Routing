import React from "react";
import { useNavigate } from "react-router";
import "./Contact.css";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">
        Feel free to reach out if you would like to connect or discuss
        opportunities!
      </p>

      <div className="contact-info-box">
        <p className="contact-row">
          <strong>Name:</strong> Santhosh B S
        </p>
        <p className="contact-row">
          <strong>Email:</strong>{" "}
          <a className="contact-link" href="mailto:santhosh220506@gmail.com">
            santhosh220506@gmail.com
          </a>
        </p>
        <p className="contact-row">
          <strong>LinkedIn:</strong>{" "}
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/santhoshsekar-bs"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/santhoshsekar-bs
          </a>
        </p>
        <p className="contact-row">
          <strong>GitHub:</strong>{" "}
          <a
            className="contact-link"
            href="https://github.com/santhosh-bs22"
            target="_blank"
            rel="noreferrer"
          >
            github.com/santhosh-bs22
          </a>
        </p>
      </div>

      <div className="contact-btn-group">
        <button className="contact-btn" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
        <button
          className="contact-btn contact-btn-outline"
          onClick={() => navigate("/about")}
        >
          ← Back to About Me
        </button>
      </div>
    </div>
  );
}

export default Contact;
