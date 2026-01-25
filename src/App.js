import React from 'react';
import { useState } from 'react';
import './App.css';
import GithubLogo from './photos/github-logo.png';
import LinkedinLogo from './photos/LinkedinLogo.png';
import Me from './photos/me-small.jpg'
import GameMenu from './photos/crypt.png'
import Resume from './ArsenaultResume2024.pdf'


function App() {
  const [isEnlarged, setIsEnlarged] = useState(false)

  const toggleSize = () => {
    setIsEnlarged(!isEnlarged);
  }

  return (
    <div className="App">
      <header>
        <h1 className="centered-header">Nicholas Arsenault</h1>
        <p className="centered-header"><i>Full Stack Developer & Game Developer</i></p>
        <p className="centered-header subtitle">Available for Freelance Projects & Full-Time Opportunities</p>
        <div className="header-contact">
          <p>📧 nickarsenault18@gmail.com</p>
          <div className="header-social">
            <a href="https://github.com/nickynault" target="_blank" rel="noopener noreferrer">
              <img src={GithubLogo} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/nicholas-arsenault-544802233" target="_blank" rel="noopener noreferrer">
              <img src={LinkedinLogo} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </header>

      <section id="about">
        <div className='about-me-content'>
          <div className="about-me-row-horizontal">
            <div className="about-me-header-col">
              <h2>About Me</h2>
            </div>
            <div className="about-me-text-col">
              <p>Hi! I'm Nicholas, a passionate Computer Science graduate from Wayne State University with a 
                strong foundation in both web development and game development. I love turning ideas into reality 
                through code, whether that's building responsive websites, creating engaging games, or developing 
                practical applications.<br /><br />
                I'm currently seeking opportunities in software development, web development, or game development 
                - whether that's freelance projects, part-time work, or full-time positions. I'm particularly 
                experienced with <strong>React, Python, AWS, Unreal Engine, and Godot</strong>, and I'm always 
                excited to learn new technologies.<br /><br />
                When I'm not coding, you'll find me working on personal projects, learning new frameworks, 
                or collaborating with other developers. I believe in writing clean, maintainable code and 
                creating user experiences that people actually enjoy using.
              </p>
            </div>
            <div className="about-me-image-col">
              <img src={Me} alt="Nicholas Arsenault" className="profile-image" />
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <h2>Services I Offer</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>🌐 Web Development</h3>
            <p>Full-stack web applications, responsive websites, and modern web experiences using React, Node.js, and more.</p>
          </div>
          <div className="service-card">
            <h3>🎮 Game Development</h3>
            <p>2D and 3D games using Unreal Engine 5 and Godot. From concept to playable prototype.</p>
          </div>
          <div className="service-card">
            <h3>📱 Application Development</h3>
            <p>Desktop applications, utilities, and tools built with Python, C++, and other languages.</p>
          </div>
          <div className="service-card">
            <h3>🎨 Portfolio & Business Sites</h3>
            <p>Professional portfolios, business websites, and landing pages that make an impact.</p>
          </div>
        </div>
        <div className="cta-section">
          <p><strong>Interested in working together?</strong> I'm available for freelance projects, 
          part-time positions, and full-time opportunities. Let's discuss how I can help bring your ideas to life!</p>
        </div>
      </section>

      <section className="education-section">
        <div className="education-content">
          <h2>Education & Skills</h2>
          <div className="education-skills">
            <div className="education">
              <h3>Education</h3>
              <ul>
                <li><strong>Bachelor of Science in Computer Science</strong> – Wayne State University, Graduated: August 2023</li>
                <li>Minor in Design</li>
                <li>Key courses: Data Structures, Algorithms, Web Development, C++, Java, Software Engineering</li>
                <a href="https://wayne.edu/" target="_blank" rel="noopener noreferrer">Wayne State University</a>
              </ul>
            </div>
            <div className="skills">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Languages</h4>
                  <p>Python, JavaScript, C++, Java, HTML/CSS</p>
                </div>
                <div className="skill-category">
                  <h4>Frameworks & Tools</h4>
                  <p>React, Node.js, AWS, Git, Linux</p>
                </div>
                <div className="skill-category">
                  <h4>Game Development</h4>
                  <p>Unreal Engine 5, Godot, Game Design</p>
                </div>
                <div className="skill-category">
                  <h4>Other</h4>
                  <p>REST APIs, Database Design, UI/UX Principles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>Featured Projects</h2>
        <div className="project-list-centered">
          <div className="project-card">
            <h3>Password Generator</h3>
            <p>A secure, offline password generator with customizable security levels and automatic password saving. 
              Built with Python, featuring a clean GUI and robust security features. Perfect for users who want 
              complete control over their password generation without relying on online services.</p>
            <div className="project-links">
              <a href="https://github.com/nickynault/Password-Generator" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
          <div className="project-card">
            <h3>ScanSpend</h3>
            <p>A receipt scanner and expense categorizer application that helps users track and organize their spending. 
              Built with Python, this tool uses image processing to extract information from receipts and automatically 
              categorizes expenses for better financial management.</p>
            <div className="project-links">
              <a href="https://github.com/nickynault/ScanSpend" target="_blank" rel="noopener noreferrer">View on GitHub</a>
              <span className="status-badge">In Development</span>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications">
        <h2>Certifications & Training</h2>
        <div className="certification-list">
          <div className="certification-card">
            <h3>Unreal Engine 5 Course</h3>
            <p>Udemy - October 2023</p>
            <p>Comprehensive training in modern game development with UE5</p>
          </div>
          <div className="certification-card">
            <h3>Python 3, Linux and C++ Courses</h3>
            <p>Codecademy - 2021 through 2023</p>
            <p>Advanced programming fundamentals and system administration</p>
          </div>
          <div className="certification-card">
            <h3>CISSO: Certified Information Systems Security Officer</h3>
            <p>Mile2 - April 2023</p>
            <p>Professional cybersecurity certification</p>
          </div>
        </div>
      </section>

      <section id="work-experience">
        <h2>Professional Experience</h2>
        <div className="experience-list">
          <div className="experience-card">
            <h3>Warehouse Associate at Camfil</h3>
            <p><strong>August 2023 - Present</strong></p>
            <p>While my current role is in warehouse operations, I've developed valuable skills in team collaboration, 
              inventory management, and process optimization. I work closely with management to ensure efficient 
              order fulfillment and have contributed to improved business performance. This experience has taught me 
              the importance of attention to detail, time management, and working effectively under pressure - 
              skills that translate well to software development.</p>
            <a href="https://www.camfil.com/en-us/" target="_blank" rel="noopener noreferrer">Learn about Camfil</a>
          </div>
          <div className="experience-card">
            <h3>Assembly Specialist at Ace Hardware</h3>
            <p><strong>May 2023 - November 2023</strong></p>
            <p>Specialized in product assembly and quality control for customer orders. This role enhanced my 
              problem-solving abilities and attention to detail - crucial skills for debugging and code review. 
              I learned to work efficiently under deadlines while maintaining high quality standards.</p>
            <a href="https://www.greatlakesace.com/" target="_blank" rel="noopener noreferrer">Great Lakes Ace Hardware</a>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div id="resume">
          <a href={Resume} className="resume-button" target="_blank" rel="noopener noreferrer" download>Download Resume</a>
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
          <p className="contact-info">Email: nickarsenault18@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
