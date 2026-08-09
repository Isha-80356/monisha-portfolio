import {
  Mail,
  Download,
  ExternalLink,
  ArrowUpRight,
  Code2,
  Database,
  Globe,
  GraduationCap,
  Award,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";
import "./App.css";

const skills = {
  Languages: ["C", "C++", "Java", "Python", "JavaScript"],
  Frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "React Router"],
  Backend: ["Node.js", "Express.js", "REST API", "JWT", "bcrypt"],
  Database: ["MySQL", "MongoDB", "Mongoose"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Docker"],
};

const projects = [
  {
    title: "Full Stack Blog Platform",
    description:
      "A complete blog application with authentication, CRUD operations, user management and database integration.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "#",
    demo: "#",
  },
  {
    title: "Fake News Detection",
    description:
      "An NLP-based project designed to classify news content and identify potentially misleading information.",
    tech: ["Python", "NLP", "TF-IDF", "Machine Learning"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Study Planner",
    description:
      "A smart study planning application that helps students organize subjects, tasks and learning progress.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Student Academic Dashboard",
    description:
      "A responsive academic dashboard for managing student information, courses, attendance and academic data.",
    tech: ["React", "JavaScript", "CSS"],
    github: "#",
    demo: "#",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="container nav-inner">

          <a href="#home" className="logo" onClick={closeMenu}>
            MONISHA<span>.</span>
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#research" onClick={closeMenu}>Research</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Let's Talk
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section id="home" className="hero section">

        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <div className="container hero-grid">

          <div className="hero-content">

          <p className="hero-eyebrow">Hi, I'm</p>

            <h1>
              Monisha
              <span>Debsharma</span>
            </h1>

            <h2>
              Software Engineer <span>|</span> Full Stack Developer
            </h2>

            <p className="hero-description">
              I build modern, responsive and user-focused web applications
              using React, JavaScript, Node.js and modern backend technologies.
              I am passionate about problem solving, software development and
              continuously improving my technical skills.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-button"
              >
                View My Work
                <ArrowUpRight size={18} />
              </a>

              <a 
  href={`${import.meta.env.BASE_URL}monisha-cv.pdf`} 
  download="monisha cv.pdf"
>
  Download CV
</a>

            </div>

            {/* SOCIAL LINKS */}

            <div className="social-links">

              <a
                href="https://github.com/Isha-80356"
                aria-label="GitHub"
                title="GitHub"
              >
                <span className="social-text">GH</span>
              </a>

              <a
                href="https://www.linkedin.com/in/monisha-rani-65b879357"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <span className="social-text">in</span>
              </a>

              <a
                href="mailto:monishadebsharma63@gmail.com"
                aria-label="Email"
                title="Email"
              >
                <Mail size={21} />
              </a>

            </div>

          </div>

          {/* HERO PROFILE */}

          <div className="hero-card-wrapper">

            <div className="profile-card">

  <div className="profile-circle">
    <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Monisha" />
  </div>

  <div className="floating-card card-one">
    <Code2 size={18} />
    <span>Full Stack</span>
  </div>

  
              <div className="floating-card card-one">
                <Code2 size={18} />
                <span>Full Stack</span>
              </div>

              <div className="floating-card card-two">
                <Database size={18} />
                <span>Backend</span>
              </div>

              <div className="floating-card card-three">
                <Globe size={18} />
                <span>Web Apps</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section">

        <div className="container">

          <div className="section-heading">

            <p className="eyebrow">
              ABOUT ME
            </p>

            <h2>
              Turning ideas into{" "}
              <span>digital solutions.</span>
            </h2>

          </div>

          <div className="about-grid">

            <div className="about-text">

              <p>
                I am a Computer Science and Engineering student with a strong
                interest in software development, full-stack web development
                and problem solving.
              </p>

              <p>
                My technical journey includes programming with C++, Java and
                Python, along with modern web technologies such as HTML, CSS,
                JavaScript, React, Node.js, Express and MongoDB.
              </p>

              <p>
                I enjoy creating practical projects that solve real-world
                problems and I am continuously improving my Data Structures &
                Algorithms and software engineering skills.
              </p>

            </div>

            <div className="about-stats">

              <div className="stat-card">
                <strong>01</strong>
                <span>CSE Student</span>
              </div>

              <div className="stat-card">
                <strong>02</strong>
                <span>Full Stack Focus</span>
              </div>

              <div className="stat-card">
                <strong>03</strong>
                <span>Research Project</span>
              </div>

              <div className="stat-card">
                <strong>04</strong>
                <span>DSA Learner</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section dark-section">

        <div className="container">

          <div className="section-heading center">

            <p className="eyebrow">
              TECHNICAL SKILLS
            </p>

            <h2>
              My <span>technology stack.</span>
            </h2>

          </div>

          <div className="skills-grid">

            {Object.entries(skills).map(([category, items]) => (

              <div
                className="skill-card"
                key={category}
              >

                <h3>
                  {category}
                </h3>

                <div className="skill-tags">

                  {items.map((skill) => (

                    <span key={skill}>
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section">

        <div className="container">

          <div className="section-heading">

            <p className="eyebrow">
              FEATURED WORK
            </p>

            <h2>
              Projects that{" "}
              <span>show what I build.</span>
            </h2>

          </div>

          <div className="projects-grid">

            {projects.map((project, index) => (

              <article
                className="project-card"
                key={project.title}
              >

                <div className="project-number">
                  0{index + 1}
                </div>

                <div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                </div>

                <div className="project-tech">

                  {project.tech.map((tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="project-links">

                  <a href={project.github}>
                    <span className="link-icon">GH</span>
                    GitHub
                  </a>

                  <a href={project.demo}>
                    <ExternalLink size={17} />
                    Live Demo
                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* ================= DSA ================= */}

      <section className="section dark-section">

        <div className="container">

          <div className="section-heading center">

            <p className="eyebrow">
              PROBLEM SOLVING
            </p>

            <h2>
              Building strong{" "}
              <span>DSA fundamentals.</span>
            </h2>

          </div>

          <div className="dsa-grid">

            <div className="dsa-card">

              <h3>
                Data Structures
              </h3>

              <div className="skill-tags">

                {[
                  "Array",
                  "Linked List",
                  "Stack",
                  "Queue",
                  "Tree",
                  "Heap",
                  "Graph",
                  "Hash Table",
                ].map((item) => (

                  <span key={item}>
                    {item}
                  </span>

                ))}

              </div>

            </div>

            <div className="dsa-card">

              <h3>
                Algorithms
              </h3>

              <div className="skill-tags">

                {[
                  "Binary Search",
                  "Sorting",
                  "BFS",
                  "DFS",
                  "Greedy",
                  "Dynamic Programming",
                  "Backtracking",
                ].map((item) => (

                  <span key={item}>
                    {item}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>
      <section className="coding-section section" id="coding">
  <div className="container">

    <div className="section-title">
      <span>Problem Solving</span>

      <h2>Competitive Programming</h2>

      <p>
        I regularly practice Data Structures, Algorithms
        and Problem Solving on competitive programming platforms.
      </p>
    </div>

    <div className="coding-stats">

      <div className="coding-stat">
        <h3>1000+</h3>
        <p>Problems Solved</p>
      </div>

      <div className="coding-stat">
        <h3>DSA</h3>
        <p>Data Structures & Algorithms</p>
      </div>

      <div className="coding-stat">
        <h3>CP</h3>
        <p>Competitive Programming</p>
      </div>

    </div>

    <div className="coding-profiles">

      {/* LEETCODE */}

      <div className="coding-card">

        <div className="coding-icon">
          <Code2 size={26} />
        </div>

        <div>
          <h3>LeetCode</h3>

          <p>
            Solving Data Structures, Algorithms and
            interview-oriented programming problems.
          </p>
        </div>

        <a
          href="https://leetcode.com/u/monisha_j10/"
          target="_blank"
          rel="noreferrer"
          className="profile-link"
        >
          View Profile
          <ExternalLink size={16} />
        </a>

      </div>


      {/* HACKERRANK */}

      <div className="coding-card">

        <div className="coding-icon">
          <Code2 size={26} />
        </div>

        <div>
          <h3>HackerRank</h3>

          <p>
            Practicing problem solving, C++, Java, SQL
            and other technical skills.
          </p>
        </div>

        <a
          href="https://www.hackerrank.com/profile/24bcs80356K"
          target="_blank"
          rel="noreferrer"
          className="profile-link"
        >
          View Profile
          <ExternalLink size={16} />
        </a>

      </div>

    </div>

  </div>
</section>



      {/* ================= EDUCATION ================= */}

      <section id="education" className="section">

        <div className="container">

          <div className="section-heading">

            <p className="eyebrow">
              EDUCATION
            </p>

            <h2>
              My academic <span>journey.</span>
            </h2>

          </div>

          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-icon">
                <GraduationCap size={22} />
              </div>

              <div className="timeline-content">

                <span>
                  2023 — Present
                </span>

                <h3>
                  Bachelor of Technology — Computer Science & Engineering
                </h3>

                <h4>
                  Chandigarh University
                </h4>

                <p>
                  Coursework includes Data Structures & Algorithms, DBMS,
                  Operating Systems, Java, Software Engineering, Full Stack
                  Development and Design & Analysis of Algorithms.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= RESEARCH ================= */}

      <section
        id="research"
        className="section dark-section"
      >

        <div className="container">

          <div className="research-card">

            <div>

              <p className="eyebrow">
                RESEARCH
              </p>

              <h2>
                Fake News Detection Using NLP
              </h2>

              <p>
                A research-oriented project focused on detecting misleading
                news using Natural Language Processing and machine learning
                techniques.
              </p>

              <div className="skill-tags">

                <span>NLP</span>
                <span>TF-IDF</span>
                <span>BERT</span>
                <span>CNN</span>
                <span>LSTM</span>

              </div>

            </div>

            <Award
              size={90}
              strokeWidth={1}
            />

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="section contact-section"
      >

        <div className="container contact-container">

          <div className="section-heading center">

            <p className="eyebrow">
              CONTACT
            </p>

            <h2>
              Let's build something{" "}
              <span>great together.</span>
            </h2>

            <p>
              Have a project idea, internship opportunity or collaboration in
              mind? Feel free to reach out.
            </p>

          </div>

          <div className="contact-buttons">

            <a
              href="mailto:your-email@example.com"
              className="primary-button"
            >
              <Mail size={18} />
              Email Me
            </a>

            <a
              href="#"
              className="secondary-button"
            >
              <span className="social-text">in</span>
              LinkedIn
            </a>

            <a
              href="#"
              className="secondary-button"
            >
              <span className="social-text">GH</span>
              GitHub
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer>

        <div className="container footer-inner">

          <div>

            <strong>
              MONISHA<span>.</span>
            </strong>

            <p>
              Software Engineer | Full Stack Developer
            </p>

          </div>

          <p>
            © 2026 Monisha Debsharma. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;