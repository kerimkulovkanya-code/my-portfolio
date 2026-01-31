export default function App() {
  return (
    <div className="container">
      {/* HERO */}
      <section className="section">
        <h1 style={{ fontSize: "3rem" }}>Kantoro Kerimkulov</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
          Software Engineering Student | Web Developer
        </p>
        <button style={{ marginTop: "2rem" }}>
          View My Work
        </button>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>About Me</h2>
        <p style={{ marginTop: "1rem", maxWidth: "700px" }}>
          I am a Software Engineering Technology student at Centennial College,
          passionate about building clean, user-focused web applications.
          I work with React, JavaScript, and modern web tools.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2>Projects</h2>

        <div style={{ marginTop: "1.5rem" }}>
          <h3>Portfolio Website</h3>
          <p>
            Personal portfolio built with React and Vite, deployed on Netlify.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <h2>Contact</h2>
        <p>Email: kerimkulovkanya@gmail.com</p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/kerimkulovkanya-code" target="_blank">
            github.com/kerimkulovkanya-code
          </a>
        </p>
      </section>
    </div>
  );
}
