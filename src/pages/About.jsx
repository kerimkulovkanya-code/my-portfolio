import React from "react";
import profile from "../assets/profile.jpg";
import "../App.css";

const About = () => {
  return (
    <div className="page about-page">
      <h1>About Me</h1>
      <img src={profile} alt="Kantoro Kerimkulov" className="profile-pic" />
      <p>
        My name is <strong>Kantoro Kerimkulov</strong>. I am currently studying Software Engineering Technology at Centennial College. I enjoy creating interactive web applications and learning about new technologies.
      </p>
      <a href="/src/assets/KantoroKerimkulov_Resume.pdf" target="_blank" rel="noopener noreferrer">
        <button className="btn">Download My Resume</button>
      </a>
    </div>
  );
};

export default About;
