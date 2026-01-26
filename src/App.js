import React from 'react';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './App.css';
import GithubLogo from './photos/github-logo.png';
import LinkedinLogo from './photos/LinkedinLogo.png';
import Resume from './Nicholas_Arsenault_Resume.pdf'

// Tech stack icons
const techStack = [
  { name: 'JavaScript', icon: '💻', category: 'Languages' },
  { name: 'Python', icon: '🐍', category: 'Languages' },
  { name: 'C++', icon: '💻', category: 'Languages' },
  { name: 'Java', icon: '☕', category: 'Languages' },
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Node.js', icon: '📦', category: 'Backend' },
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
  { name: 'Git', icon: '🌿', category: 'Tools' },
  { name: 'Linux', icon: '🐧', category: 'OS' },
  { name: 'Google Workspace', icon: '📊', category: 'Productivity' },
  { name: 'Unreal Engine', icon: '🎮', category: 'Game Dev' },
  { name: 'Godot', icon: '🚀', category: 'Game Dev' }
];

const skills = [
  { name: 'JavaScript/React', level: 85, category: 'Frontend' },
  { name: 'Python', level: 80, category: 'Backend' },
  { name: 'Game Development', level: 75, category: 'Game Dev' },
  { name: 'Cybersecurity', level: 70, category: 'Security' },
  { name: 'Problem Solving', level: 90, category: 'Soft Skills' },
  { name: 'Team Collaboration', level: 85, category: 'Soft Skills' }
];

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

// Password Generator Installer Modal
function PasswordGeneratorInstaller({ isOpen, onClose }) {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [createShortcut, setCreateShortcut] = useState(true);
  const [launchAfterInstall, setLaunchAfterInstall] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    if (!selectedPlatform) {
      alert('Please select your operating system first.');
      return;
    }

    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      const fileName = selectedPlatform === 'windows' 
        ? 'Windows_Password_Generator.zip'
        : 'macOS_Password_Generator.zip';
      
      // Trigger download
      const link = document.createElement('a');
      link.href = `/${fileName}`;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
    }, 1000);
  };

  return (
    <div className="installer-modal-overlay">
      <div className="installer-modal">
        <div className="installer-header">
          <span className="installer-logo">🔒</span>
          <h2>Password Generator Installer</h2>
          <button className="close-installer" onClick={onClose}>×</button>
        </div>
        
        <p className="installer-subtitle">Secure password generation tool for Windows and Mac</p>

        <div className="platform-selector">
          <div 
            className={`platform-option ${selectedPlatform === 'windows' ? 'selected' : ''}`}
            onClick={() => setSelectedPlatform('windows')}
          >
            <span className="platform-icon">🪟</span>
            <div className="platform-name">Windows</div>
            <div className="platform-desc">Windows 10/11</div>
          </div>
          <div 
            className={`platform-option ${selectedPlatform === 'mac' ? 'selected' : ''}`}
            onClick={() => setSelectedPlatform('mac')}
          >
            <span className="platform-icon">🍎</span>
            <div className="platform-name">macOS</div>
            <div className="platform-desc">macOS 10.15+</div>
          </div>
        </div>

        <div className="options-group">
          <div className="option-item">
            <input 
              type="checkbox" 
              id="createDesktopShortcut" 
              checked={createShortcut}
              onChange={(e) => setCreateShortcut(e.target.checked)}
            />
            <label htmlFor="createDesktopShortcut">Create desktop shortcut</label>
          </div>
          <div className="option-item">
            <input 
              type="checkbox" 
              id="launchAfterInstall" 
              checked={launchAfterInstall}
              onChange={(e) => setLaunchAfterInstall(e.target.checked)}
            />
            <label htmlFor="launchAfterInstall">Launch Password Generator after installation</label>
          </div>
        </div>

        <div className="install-actions">
          <button 
            className="install-btn" 
            onClick={handleDownload}
            disabled={isDownloading || !selectedPlatform}
          >
            {isDownloading ? 'Downloading...' : 'Download & Install'}
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>

        <div className="install-instructions">
          <h3>Installation Instructions:</h3>
          <ol>
            <li>Extract the ZIP file to your desired location</li>
            <li>Run PasswordGenerator.exe (Windows) or PasswordGenerator.app (Mac)</li>
            <li>Enjoy secure password generation!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 500) {
      newErrors.message = 'Message must be 500 characters or less';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Spam protection: 30 second cooldown
    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      alert('Please wait 30 seconds before sending another message.');
      return;
    }
    
    setLastSubmitTime(now);
    setIsConfirming(true);
  };

  const handleConfirm = () => {
    setIsConfirming(false);
    setIsSubmitting(true);
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Nicholas Arsenault'
    };

    console.log('Attempting to send email with params:', templateParams);
    
    emailjs.send(
      'service_9kwzm4w', // service ID 
      'template_98d942s', // template ID 
      templateParams,
      'e3FEQC3wK_EtzkSmc' // public key 
    )
    .then((result) => {
      console.log('EmailJS success:', result);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, (error) => {
      console.error('EmailJS error details:', {
        error: error,
        errorText: error.text,
        errorMessage: error.message,
        errorStatus: error.status,
        errorDetails: error
      });
      setIsSubmitting(false);
      setIsError(true);
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    });
  };

  const handleCancel = () => {
    setIsConfirming(false);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setIsError(false);
  };

  if (isSuccess) {
    return (
      <div className="contact-form">
        <div className="success-message">
          <h3>Message Sent Successfully! 🎉</h3>
          <p>Thank you for reaching out! I'll get back to you soon.</p>
          <button onClick={resetForm} className="btn btn-primary">Send Another Message</button>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="contact-form">
        <div className="error-message">
          <h3>Oops! Something went wrong.</h3>
          <p>There was an issue sending your message. Please try again or email me directly at nickarsenault18@gmail.com</p>
          <button onClick={resetForm} className="btn btn-primary">Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form">
      {isConfirming && (
        <div className="confirmation-modal">
          <div className="modal-content">
            <h3>Send Message?</h3>
            <p>Please review your message before sending:</p>
            <div className="confirmation-details">
              <div className="confirmation-field">
                <strong>Name:</strong> <span>{formData.name}</span>
              </div>
              <div className="confirmation-field">
                <strong>Email:</strong> <span>{formData.email}</span>
              </div>
              <div className="confirmation-field">
                <strong>Subject:</strong> <span>{formData.subject}</span>
              </div>
              <div className="confirmation-field">
                <strong>Message:</strong>
                <div className="confirmation-message">{formData.message}</div>
              </div>
            </div>
            <div className="confirmation-buttons">
              <button onClick={handleConfirm} className="btn btn-primary">Yes, Send</button>
              <button onClick={handleCancel} className="btn btn-secondary">Cancel</button>
            </div>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>
        <div className="form-group">
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input 
            type="text" 
            name="subject"
            placeholder="Subject" 
            value={formData.subject}
            onChange={handleChange}
            className={errors.subject ? 'error' : ''}
          />
          {errors.subject && <span className="error-text">{errors.subject}</span>}
        </div>
        <div className="form-group">
          <textarea 
            name="message"
            placeholder="Your Message (max 500 characters)" 
            rows="5" 
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
            maxLength="500"
          ></textarea>
          <div className="char-count">{formData.message.length}/500</div>
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

function App() {
  const [isEnlarged, setIsEnlarged] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [isInstallerOpen, setIsInstallerOpen] = useState(false)

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
              <a href={Resume} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                View Resume
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

      <section id="tech-stack" className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="section-number">03.</span>
            Tech Stack
          </h2>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon">{tech.icon}</div>
                <h4>{tech.name}</h4>
                <span className="tech-category">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="section-number">04.</span>
            Skills
          </h2>
          <div className="skills-container">
            <div className="skill-category-group">
              <h3>Frontend Development</h3>
              <div className="skill-items">
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">React</span>
                <span className="skill-item">HTML/CSS</span>
                <span className="skill-item">Responsive Design</span>
              </div>
            </div>
            <div className="skill-category-group">
              <h3>Backend Development</h3>
              <div className="skill-items">
                <span className="skill-item">Python</span>
                <span className="skill-item">Node.js</span>
                <span className="skill-item">API Development</span>
                <span className="skill-item">Database Design</span>
              </div>
            </div>
            <div className="skill-category-group">
              <h3>Game Development</h3>
              <div className="skill-items">
                <span className="skill-item">Unreal Engine</span>
                <span className="skill-item">Godot</span>
                <span className="skill-item">Game Design</span>
                <span className="skill-item">2D/3D Graphics</span>
              </div>
            </div>
            <div className="skill-category-group">
              <h3>Security & DevOps</h3>
              <div className="skill-items">
                <span className="skill-item">Cybersecurity</span>
                <span className="skill-item">AWS</span>
                <span className="skill-item">Git</span>
                <span className="skill-item">Linux</span>
              </div>
            </div>
            <div className="skill-category-group">
              <h3>Programming Languages</h3>
              <div className="skill-items">
                <span className="skill-item">C++</span>
                <span className="skill-item">Java</span>
                <span className="skill-item">Python</span>
                <span className="skill-item">JavaScript</span>
              </div>
            </div>
            <div className="skill-category-group">
              <h3>Soft Skills</h3>
              <div className="skill-items">
                <span className="skill-item">Problem Solving</span>
                <span className="skill-item">Team Collaboration</span>
                <span className="skill-item">Communication</span>
                <span className="skill-item">Project Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="section-number">05.</span>
            Get In Touch
          </h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Let's Build Something Amazing</h3>
              <p>I'm currently looking for new opportunities and would love to hear from you. Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out!</p>
              <div className="contact-details">
                <p><strong>Email:</strong> nickarsenault18@gmail.com</p>
                <p><strong>Location:</strong> Detroit, MI</p>
                <p><strong>Open to:</strong> Full-time, Contract, Remote</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="section-number">06.</span>
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
                <h3>SecurePass</h3>
                <span className="project-badge">Python</span>
              </div>
              <p>A simple, easy to use password generator that saves each new password automatically. No online connection or
                issues with data leaks, and users can even change how secure the password is.</p>
              <div className="project-downloads">
                <a href="https://github.com/nickynault/Password-Generator/releases" 
                   className="btn btn-primary download-btn" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <span className="download-icon">🔒</span>
                  Download Windows Version
                </a>
                <a href="https://github.com/nickynault/Password-Generator/releases" 
                   className="btn btn-secondary download-btn" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <span className="download-icon">🍎</span>
                  Download macOS Version
                </a>
              </div>
              <div className="project-links">
                <a href="https://github.com/nickynault/Password-Generator" target="_blank" rel="noopener noreferrer" className="project-link">
                  <span>View Source Code</span>
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
            <span className="section-number">07.</span>
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
            <span className="section-number">08.</span>
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
          <div className="footer-bottom">
            <p>Designed & Built by Nicholas Arsenault</p>
          </div>
        </div>
      </footer>

      <PasswordGeneratorInstaller 
        isOpen={isInstallerOpen} 
        onClose={() => setIsInstallerOpen(false)} 
      />
    </div>
  );
}

export default App;
