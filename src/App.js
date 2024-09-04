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

      <section className="school-section">
        <div className="school-content">
          <h2>Education</h2>
          <ul>
            <li><strong>Bachelor of Science in Computer Science</strong> – Wayne State University, Graduated: August 2023</li>
            <li>Key courses: Data Structures, Algorithms, Web Development, C++, Java, Software Engineering, etc.</li>
            <a href="https://wayne.edu/" target="_blank" rel="noopener noreferrer">Check out WSU!!!</a>
          </ul>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Password Generator</h3>
            <p>A simple, easy to use password generator that saves each new password for you. No online connection,
              issues with data leaks, and you can even change how tough your password is. This was a very useful and basic project
              I did to test my GUI and practical use coding skills.
            </p>
            <a href="https://github.com/nickynault/Password-Generator" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div className="project-card">
            <h3>PDF Converter</h3>
            <p>A simple to use PDF Converter that was just much more convenient for me than searching one up every time I need
              a quick conversion. It also includes other conversion types that are common or that I use sometimes.
              This is currently a work in progress as of 9/4/2024. Patience!
            </p>
            <a href="https://github.com/your-username/PDF-Converter" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        </div>
      </section>

      <section id="certifications">
        <h2>Certifications</h2>
        <div className="certification-list">
          <div className="certification-card">
            <h3>Unreal Engine 5 Course</h3>
            <p>Udemy - October 2023</p>
          </div>
          <div className="certification-card">
            <h3>Python 3, Linux and C++ Courses</h3>
            <p>Codecademy - 2021 through 2023</p>
          </div>
          <div className="certification-card">
            <h3>CISSO: Certified Information Systems Security Officer</h3>
            <p>Mile2 - April 2023</p>
          </div>
        </div>
      </section>

      <section id="work-experience">
        <h2>Work Experience</h2>
        <div className="experience-list">
          <div className="experience-card">
            <h3>Warehouse Associate at Camfil</h3>
            <p>Started August 2023, Currently Employed</p>
            <p>As a warehouse associate, I collaborate closely with the warehouse manager to ensure timely 
              completion of custom orders and deliveries, including will calls, shipments, and Camfil truck deliveries. 
              These efforts contributed to getting better release times on orders, which gets customers
              what they paid for earlier, makes our job easier, and gets us a better bonus around the Winter holidays.</p>
            <a href="https://www.camfil.com/en-us/" target="_blank" rel="noopener noreferrer">Camfil's Site</a>
          </div>
          <div className="experience-card">
            <h3>Another Job Title at Another Company</h3>
            <p>Started May 2023, Left November 2023</p>
            <p>At Ace, I would assemble grills to be shipped or delivered to customers and/or stores. 
              This sped up the process of order filling, and helped local Ace stores stock up and show off their grills to paying customers.</p>
            <a href="https://www.greatlakesace.com/" target="_blank" rel="noopener noreferrer">Ace's Site</a>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div id="resume">
          <a href="/Arsenault Resume 2024.pdf" className="resume-button" target="_blank" rel="noopener noreferrer" download>Download My Resume</a>
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
