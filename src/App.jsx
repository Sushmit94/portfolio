// app.jsx
import React, { useState, useEffect } from "react";
import CursorFollowerSpline from './CursorFollowerSpline';

const App = () => {
    const [isNightMode, setIsNightMode] = useState(false);
    const [typedText, setTypedText] = useState('');

    const toggleMode = () => setIsNightMode(!isNightMode);

    useEffect(() => {
        document.body.className = isNightMode ? "night-mode" : "day-mode";
    }, [isNightMode]);

    // Typing animation effect
    useEffect(() => {
        const professions = ['Web Developer', 'Programmer', 'Tech Enthusiast'];
        let i = 0;
        let j = 0;
        let currentPhrase = [];

        const typeLoop = () => {
            if (j < professions.length) {
                if (i < professions[j].length) {
                    currentPhrase.push(professions[j][i]);
                    setTypedText(currentPhrase.join(''));
                    i++;
                    setTimeout(typeLoop, 100);
                } else {
                    setTimeout(() => {
                        currentPhrase = [];
                        i = 0;
                        j = (j + 1) % professions.length;
                        typeLoop();
                    }, 1500);
                }
            }
        };
        typeLoop();
    }, []);

    const about = "Passionate about technology and eager to continue growing my skills in software development, I bring a solid foundation in Python, C, C++, HTML, CSS, JavaScript, and React. I love building innovative projects that push the boundaries of technology. My journey in coding has equipped me with a diverse skill set and a problem-solving mindset, which I am excited to apply in the realms of web and app development. I believe in learning by doing and enjoy working on real-world applications that bring ideas to life. Always exploring the latest in tech, I’m on a mission to create impactful solutions in the decentralized world. Let’s build the future together!";

    const projects = [
        {
            image: "https://images.pexels.com/photos/32355851/pexels-photo-32355851/free-photo-of-colorful-palette-of-paints-on-artistic-canvas.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Paint App",
            description: "A React-based app for drawing and sketching with multiple brush colors and sizes. Check it out on GitHub and the deployed link!",
            tech: "React, JavaScript, HTML5",
            github: "https://github.com/Sushmit94/Paint-App",
            deployed: "https://01paint.vercel.app/"
        },
        {
            image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Gaming Website",
            description: "A simple website built using HTML and CSS. Open to feedback and improvements!",
            tech: "HTML, CSS, JavaScript",
            github: "https://github.com/Sushmit94/Sushmit94.github.io",
            deployed: "https://sushmit94.github.io/"
        },
        {
            image: "https://images.pexels.com/photos/3616764/pexels-photo-3616764.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Mohito Website",
            description: "A modern frontend website design built using HTML, CSS, and JavaScript.",
            tech: "HTML, CSS, JavaScript",
            github: "https://github.com/Sushmit94/mohito",
            deployed: "https://mohito-plum.vercel.app"
        },
        {
            image: "https://images.pexels.com/photos/4523028/pexels-photo-4523028.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "World of Games",
            description: "A collection of fun games to play online, built using HTML, CSS, and JavaScript.",
            tech: "HTML, CSS, JavaScript",
            github: "https://github.com/Sushmit94/worldofgames",
            deployed: "https://worldofgames.vercel.app"
        },
        {
            image: "https://images.pexels.com/photos/59197/pexels-photo-59197.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Guess Number Game",
            description: "A number guessing game where players try to guess the correct number. Built with JavaScript.",
            tech: "JavaScript, HTML, CSS",
            github: "https://github.com/Sushmit94/guessnumbergame",
            deployed: "https://guessnumbergame-one.vercel.app"
        }
    ];

    return (
        <div className={`portfolio-container ${isNightMode ? "night-mode" : "day-mode"}`}>
            {/* Hero Section */}
            <header className="hero">
                <div className="mode-toggle">
                    <button onClick={toggleMode} className="toggle-btn">
                        {isNightMode ? '☀️' : '🌙'}
                    </button>
                </div>
                <div className="hero-content" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div>
                        <h1 className="name-heading">Sushmit Sharma</h1>
                        <p className="animated-profession">{typedText}</p>
                    </div>
                    <CursorFollowerSpline />
                </div>
            </header>

            {/* About Section */}
            <div className="about">
                <h1 className="about-heading">About Me</h1>
                <p className="about-text">{about}</p>
            </div>

            <br /><br /><br /><br />

            {/* Skills Section */}
            <div className="skills-section">
                <h1 className="skills-heading">Skills</h1>
                <div className="skills-grid">
                    <div className="skill-card">
                        <i className="fab fa-html5 skill-icon"></i>
                        <h3 className="skill-title">HTML</h3>
                        <p className="skill-description">Proficient in creating semantic and accessible web pages.</p>
                    </div>
                    <div className="skill-card">
                        <i className="fab fa-css3-alt skill-icon"></i>
                        <h3 className="skill-title">CSS</h3>
                        <p className="skill-description">Skilled in responsive design and modern CSS frameworks.</p>
                    </div>
                    <div className="skill-card">
                        <i className="fab fa-js-square skill-icon"></i>
                        <h3 className="skill-title">JavaScript</h3>
                        <p className="skill-description">Experienced in building interactive and dynamic web applications.</p>
                    </div>
                    <div className="skill-card">
                        <i className="fab fa-react skill-icon"></i>
                        <h3 className="skill-title">React</h3>
                        <p className="skill-description">Proficient in building reusable components and state management.</p>
                    </div>
                    <div className="skill-card">
                        <i className="fas fa-copyright skill-icon"></i>
                        <h3 className="skill-title">C</h3>
                        <p className="skill-description">Strong foundation in procedural programming and algorithms.</p>
                    </div>
                    <div className="skill-card">
                        <i className="fas fa-code skill-icon"></i>
                        <h3 className="skill-title">C++</h3>
                        <p className="skill-description">Experienced in object-oriented programming and data structures.</p>
                    </div>
                    <div className="skill-card">
                        <i className="fab fa-python skill-icon"></i>
                        <h3 className="skill-title">Python</h3>
                        <p className="skill-description">Skilled in scripting, automation, and backend development.</p>
                    </div>
                    <div className="skill-card">
                        <i className="fas fa-database skill-icon"></i>
                        <h3 className="skill-title">MySQL</h3>
                        <p className="skill-description">Proficient in database design, queries, and optimization.</p>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br />

            {/* Projects Section */}
            <section id="projects" className="section">
                <h2 className="section-title">Projects</h2>
                <div className="project-list">
                    {projects.map((project, index) => (
                        <div key={index} className="card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="card__content">
                                <h3 className="card__title">{project.title}</h3>
                                <p className="card__description">{project.description}</p>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                    <a href={project.deployed} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <br /><br /><br /><br />

            {/* Contact Section */}
            <section id="contact" className="section">
                <h2 className="section-title">Get in Touch</h2>
                <div className="contact-content">
                    <p className="contact-text">
                        Let's connect! Whether you have a project idea or just want to chat about tech,
                        feel free to reach out.
                    </p>
                    <p className="contact-text">Feel free to reach out to me</p>
                    <div className="social-links">
                        <a href="https://github.com/Sushmit94" className="social-btn">
                            <span>GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/sushmit-sharma-969aa8323" className="social-btn">
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://x.com/sushmit6973" className="social-btn">
                            <span>Twitter</span>
                        </a>
                        <a href="mailto:sushmitshrm@gmail.com" className="social-btn">
                            <span>Email</span>
                        </a>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Sushmit Sharma. Built with React</p>
            </footer>
        </div>
    );
};

export default App;
