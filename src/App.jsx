import React from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import project1 from './assets/project1.png';

function App() {
  return (
    <div>
      <Navbar />
      <header className="hero">
        <h1>Hello Portfolio!</h1>
        <p>Welcome to my React + Vite portfolio.</p>
      </header>
      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-list">
          <ProjectCard title="Project 1" description="This is my first project." image={project1} />
        </div>
      </section>
    </div>
  );
}

export default App;
