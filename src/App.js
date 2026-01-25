import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import GithubLogo from './photos/github-logo.png';
import LinkedinLogo from './photos/LinkedinLogo.png';
import Resume from './Nicholas_Arsenault_Resume.pdf'

// Try to import images, but handle if they don't exist
let Me = null;
let GameMenu = null;
try {
  Me = require('./photos/me-small.jpg');
} catch (e) {
  // Image doesn't exist, will use placeholder
}
try {
  GameMenu = require('./photos/crypt.png');
} catch (e) {
  // Image doesn't exist, will hide the image
}


function App() {
  const [isEnlarged, setIsEnlarged] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSize = () => {
    setIsEnlarged(!isEnlarged);
  }

  return (
    <div className="App">
      <header className={`hero-section ${scrolled ? 'scrolled' : ''}`}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">Nicholas Arsenault</span>
            </h1>
            <p className="hero-subtitle">Computer Science Graduate & Full Stack Developer</p>
            <p className="hero-tagline">Building games, web apps, and software that people love to use</p>
            <div className="hero-buttons">
              <a href={Resume} className="btn btn-primary" target="_blank" rel="noopener noreferrer" download>
                Download Resume
              </a>
              <a href="#projects" className="btn btn-secondary">
                View Projects
              </a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/nickynault" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <img src={GithubLogo} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/nicholas-arsenault-544802233" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={LinkedinLogo} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </header>

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="section-number">01.</span>
            About Me
          </h2>
          <div className="about-content">
            <div className="about-text">
              <p>I'm a recent graduate from Wayne State University (August 2023) with a 
                Bachelor's degree in Computer Science and a Minor in Design. I've been coding since my sophomore
                year of college, and making projects in and out of school ever since.</p>
              <p>I'm very interested in
                <strong> Python, React, ethical hacking/cybersecurity</strong>, and working on games in 
                <strong> Unreal Engine and Godot</strong>.</p>
              <p>Below you'll find projects of mine, social links, and a bit more about my experiences. Feel free 
                to contact me with any questions or job opportunities, and thanks for checking out my page!</p>
            </div>
            <div className="about-image-wrapper">
              <div className="about-image-frame">
                {Me && !imageError ? (
                  <img src={Me} alt="Nicholas Arsenault" className="profile-image" onError={() => setImageError(true)} />
                ) : (
                  <div className="profile-placeholder show">
                    <span>NA</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section education-section">
        <div className="container">
          <h2 className="section-title">
            <span className="section-number">02.</span>
            Education
          </h2>
          <div className="education-content">
            <div className="education-card">
              <h3>Bachelor of Science in Computer Science</h3>
              <p className="education-meta">Wayne State University • Graduated August 2023</p>
              <p className="education-minor">Minor in Design</p>
              <p>Key courses: Data Structures, Cybersecurity, Algorithms, Web Development, C++, Java, Software Engineering, etc.</p>
              <a href="https://wayne.edu/" target="_blank" rel="noopener noreferrer" className="education-link">
                Check out WSU →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="section-number">03.</span>
            Projects
          </h2>
          <div className="project-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>Project Crypt</h3>
                <span className="project-badge">Game Dev</span>
              </div>
              <p>A collaborative project with Jester Studios, Project Crypt is an early stage game using Godot 4. It will have
                a roguelike AND a wave based survival mode. It will first be available on PC. 
                This is currently a work in progress as of 10/17/2024.</p>
              {GameMenu && (
                <div className="project-image-wrapper">
                  <img src={GameMenu} alt="Project Crypt main menu" 
                       className={isEnlarged ? "project-image enlarged" : "project-image"} 
                       onClick={toggleSize} />
                  {isEnlarged && (
                    <button className="close-image" onClick={toggleSize}>×</button>
                  )}
                </div>
              )}
            </div>
            <div className="project-card">
              <div className="project-header">
                <h3>Password Generator</h3>
                <span className="project-badge">Python</span>
              </div>
              <p>A simple, easy to use password generator that saves each new password automatically. No online connection or
                issues with data leaks, and users can even change how secure the password is.</p>
              <div className="project-links">
                <a href="https://github.com/nickynault/Password-Generator" target="_blank" rel="noopener noreferrer" className="project-link">
                  <span>View on GitHub</span>
                  <span className="link-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="section-number">04.</span>
            Certifications
          </h2>
          <div className="certification-grid">
            <div className="certification-card">
              <div className="cert-icon">🎮</div>
              <h3>Unreal Engine 5 Course</h3>
              <p className="cert-meta">Udemy • October 2023</p>
            </div>
            <div className="certification-card">
              <div className="cert-icon">💻</div>
              <h3>Python 3, Linux and C++ Courses</h3>
              <p className="cert-meta">Codecademy • 2021-2023</p>
            </div>
            <div className="certification-card">
              <div className="cert-icon">🔒</div>
              <h3>CISSO: Certified Information Systems Security Officer</h3>
              <p className="cert-meta">Mile2 • April 2023</p>
            </div>
          </div>
        </div>
      </section>

      <section id="work-experience" className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="section-number">05.</span>
            Work Experience
          </h2>
          <div className="experience-list">
            <div className="experience-card">
              <div className="experience-header">
                <h3>Warehouse Associate</h3>
                <span className="experience-company">Camfil</span>
              </div>
              <p className="experience-duration">Started August 2023, Currently Employed</p>
              <p>As a warehouse associate, I collaborate closely with the warehouse manager to ensure 
                timely completion of custom orders and deliveries, including will calls, shipments, 
                and Camfil truck deliveries. My team and I, alongside the salesmen, directly affect how fast orders get out, 
                which affects our business, and we're doing very well profit-wise compared to the previous year. 
                I've learned much about managing a team in a commercial setting, inventory management, organization, 
                and dealing with somewhat stressful situations.</p>
              <a href="https://www.camfil.com/en-us/" target="_blank" rel="noopener noreferrer" className="experience-link">
                Camfil's Site →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Get in Touch</h3>
              <p>I'm always open to discussing new opportunities, interesting projects, or just having a chat about tech!</p>
              <a href="mailto:nickarsenault18@gmail.com" className="footer-email">nickarsenault18@gmail.com</a>
            </div>
            <div className="footer-section">
              <h3>Connect</h3>
              <div className="footer-social">
                <a href="https://github.com/nickynault" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <img src={GithubLogo} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/nicholas-arsenault-544802233" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <img src={LinkedinLogo} alt="LinkedIn" />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Resume</h3>
              <a href={Resume} className="btn btn-primary" target="_blank" rel="noopener noreferrer" download>
                Download Resume
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Designed & Built by Nicholas Arsenault</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
