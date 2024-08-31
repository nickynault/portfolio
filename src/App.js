import React from 'react';
import './App.css';
import GithubLogo from './photos/Github-Logo-PNG.png';
import LinkedinLogo from './photos/LinkedinLogo.png';
import Me from './photos/me-small.jpg'


function App() {
  return (
    <div className="App">
      <header>
        <h1 className="centered-header">Nicholas Arsenault</h1>
        <p className="centered-header"><i>Computer Science Grad and Full Stack Developer</i></p>
      </header>


      <section id="about">
        <div className='about-me-content'>
        <h2>About Me</h2>
          <p>Hey there! I'm a recent graduate from Wayne State University as of August 2023 with a 
            Bachelor's degree in Computer Science and a Minor in Design. I've been coding since my sophomore
            year, and making projects in school and some on my own since then. I'm very interested in
            Python, React, AWS, and making games in Unreal and Godot. I'm still actively learning, but
            I've already come pretty far! <br></br><br></br>

            Below you'll find projects of mine, social links, and a bit more about my experience. Feel free 
            to contact me with any questions or job opportunities, and thanks for checking out my page!
          </p>
          <img src={Me} alt="Me!" className="profile-image" />
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Project One</h3>
            <p>An innovative project that solves problem X using technology Y.</p>
            <a href="https://github.com/your-username/project-one">View on GitHub</a>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>A fun app that helps users with task Z, built with A, B, and C.</p>
            <a href="https://github.com/your-username/project-two">View on GitHub</a>
          </div>
        </div>
      </section>

      <section id="work-experience">
        <h2>Work Experience</h2>
        <div className="experience-list">
          <div className="experience-card">
            <h3>Job Title at Company</h3>
            <p>Duration: Start Date - End Date</p>
            <p>Brief description of your role and responsibilities.</p>
          </div>
          <div className="experience-card">
            <h3>Another Job Title at Another Company</h3>
            <p>Duration: Start Date - End Date</p>
            <p>Brief description of your role and responsibilities.</p>
          </div>
        </div>
      </section>

      <section id="certifications">
        <h2>Certifications</h2>
        <div className="certification-list">
          <div className="certification-card">
            <h3>Certification Name</h3>
            <p>Issuing Organization - Year</p>
          </div>
          <div className="certification-card">
            <h3>Another Certification</h3>
            <p>Issuing Organization - Year</p>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div id="resume">
          <a href="/resume.pdf" className="resume-button" target="_blank" rel="noopener noreferrer" download>Download My Resume</a>
        </div>
        <div id="social-links" className="social-links">
          <a href="https://github.com/nickynault" target="_blank" rel="noopener noreferrer">
            <img src={GithubLogo} alt="GitHub" style={{ width: '67px', height: '67px' }} />
          </a>
          <a href="https://www.linkedin.com/in/nicholas-arsenault-544802233" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinLogo} alt="LinkedIn" style={{ width: '67px', height: '67px' }} />
          </a>
        </div>
        <div id="contact">
          <p className="contact-info">Email: <a href="mailto:nickarsenault18@gmail.com">nickarsenault18@gmail.com</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
