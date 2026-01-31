import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import "../App.css";

const Projects = () => {
  return (
    <div className="page projects-page">
      <h1>My Projects</h1>
      <div className="project">
        <img src={project1} alt="Project 1" />
        <h3>Project 1: Portfolio Website</h3>
        <p>Built a personal portfolio website using React and Vite. Focused on responsive design and navigation.</p>
      </div>
      <div className="project">
        <img src={project2} alt="Project 2" />
        <h3>Project 2: Social Media App</h3>
        <p>Developed a small social media web app with React, Firebase for authentication, and database integration.</p>
      </div>
      <div className="project">
        <img src={project3} alt="Project 3" />
        <h3>Project 3: Task Manager</h3>
        <p>Created a task manager app using React and localStorage to organize daily tasks efficiently.</p>
      </div>
    </div>
  );
};

export default Projects;
