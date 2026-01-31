import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="page home-page">
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hello! I’m <strong>Kantoro Kerimkulov</strong>, a passionate Software Engineering student and aspiring web developer. Explore my projects, services, and more.
      </p>
      <Link to="/about">
        <button className="btn">Learn More About Me</button>
      </Link>
    </div>
  );
};

export default Home;
