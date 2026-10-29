import { useState } from "react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  Sparkles,
  X,
} from "lucide-react";
import { projects, skills } from "./data";

const GITHUB = "https://github.com/tausifahamedsabab";
const LINKEDIN = "https://linkedin.com/in/tausif-ahamed-sabab";
const EMAIL = "taosifahmed042@gmail.com";

const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const links = [
    ["Home", "/#home"],
    ["About", "/#about"],
    ["Skills", "/#skills"],
    ["Projects", "/#projects"],
    ["Contact", "/#contact"],
  ];
  const jump = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#") && location.pathname !== "/")
      window.location.href = href;
    else if (href.startsWith("/#"))
      document
        .querySelector(href.slice(1))
        ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link to="/" className="brand" aria-label="Sabab home">
          <span className="brand-mark">
            S<span>.</span>
          </span>
          <span className="brand-name">
            SABAB<span>DEV</span>
          </span>
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "nav-links nav-open" : "nav-links"}>
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                jump(href);
              }}
            >
              {label}
            </a>
          ))}
          <a
            className="nav-cta"
            href={GMAIL_COMPOSE}
            onClick={() => setOpen(false)}
          >
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}

function SocialLinks() {
  return (
    <div className="social-links">
      <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub">
        <Github size={18} />
      </a>
      <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <Linkedin size={18} />
      </a>
      <a
        href={GMAIL_COMPOSE}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <Mail size={18} />
      </a>
    </div>
  );
}

function SectionHeading({
  kicker,
  title,
  accent,
}: {
  kicker: string;
  title: string;
  accent?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        <span className="eyebrow-dot" />
        {kicker}
      </span>
      <h2>
        {title} {accent && <em>{accent}</em>}
      </h2>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="project-card">
      <Link
        to={`/projects/${project.slug}`}
        className="project-image-wrap"
        aria-label={`View ${project.name} details`}
      >
        <img
          src={project.image}
          alt={`${project.name} project preview`}
          loading="lazy"
        />
        <span className="project-number">{project.number}</span>
        <span className="image-arrow">
          <ArrowUpRight size={19} />
        </span>
      </Link>
      <div className="project-card-body">
        <span className="project-eyebrow">{project.eyebrow}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.stack.slice(0, 4).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <Link className="text-link" to={`/projects/${project.slug}`}>
          View project details <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

function Home() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = GMAIL_COMPOSE;
    }
  };
  return (
    <>
      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="availability">
                <span className="status-dot" /> OPEN TO INTERNSHIPS & JUNIOR
                ROLES
              </div>
              <p className="hero-intro">
                Hello, I'm <span>Tausif Ahamed Sabab</span>
              </p>
              <h1>
                I build digital
                <br />
                experiences that
                <br />
                <span className="gradient-text">feel right.</span>
              </h1>
              <p className="hero-description">
                Aspiring Full-Stack Developer turning ideas into clean,
                responsive and useful web experiences — one component at a time.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my work <ArrowRight size={17} />
                </a>
                <a
                  className="button button-secondary"
                  href="/resume.pdf"
                  download="Tausif-Ahamed-Sabab-Resume.pdf"
                >
                  <ArrowDownToLine size={17} /> Download résumé
                </a>
              </div>
              <div className="hero-social-row">
                <SocialLinks />
                <span className="hero-social-note">Find me around the web</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-glow" />
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="portrait-frame">
                <div className="portrait-top">
                  <span>PROFILE / 001</span>
                  <span className="portrait-live">
                    <i /> AVAILABLE
                  </span>
                </div>
                <div className="portrait-placeholder">
                  <img
                    src="/my-photo.png"
                    alt="Tausif Ahamed Sabab"
                    className="profile-photo"
                  />
                </div>
                <div className="portrait-bottom">
                  <div>
                    <span className="mini-label">CURRENT FOCUS</span>
                    <strong>Full-Stack Web Development</strong>
                  </div>
                  <Code2 size={24} />
                </div>
              </div>
              <div className="floating-chip chip-code">
                <span className="chip-icon">
                  <Code2 size={17} />
                </span>
                <div>
                  <strong>Clean code</strong>
                  <small>Built with purpose</small>
                </div>
              </div>
              <div className="floating-chip chip-stack">
                <span className="chip-icon">
                  <Sparkles size={17} />
                </span>
                <div>
                  <strong>Always learning</strong>
                  <small>Growing every day</small>
                </div>
              </div>
              <span className="visual-coordinate">23°48' N / 90°24' E</span>
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span className="scroll-line" /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="about-section section-shell section-pad" id="about">
          <div className="about-left">
            <SectionHeading
              kicker="A LITTLE ABOUT ME"
              title="Curiosity first."
              accent="Code second."
            />
            <div className="about-quote">
              “The best way to learn is to build something real.”
            </div>
          </div>
          <div className="about-content">
            <p className="lead-copy">
              I'm a Bangladesh-based aspiring Full-Stack Web Developer who
              enjoys turning ideas into interfaces people can actually use.
            </p>
            <p>
              My journey started with the fundamentals of the web — HTML, CSS
              and JavaScript — and grew into React, Next.js and TypeScript.
              Since then, I've been learning by building projects, solving bugs,
              exploring APIs and improving one detail at a time.
            </p>
            <p>
              I enjoy thoughtful UI, reusable components and the little
              problem-solving moments that make an application feel complete.
              Outside code, I like exploring new tech, learning continuously and
              finding inspiration in good design.
            </p>
            <div className="about-facts">
              <div>
                <span>01</span>
                <strong>Build</strong>
                <small>Learn by making</small>
              </div>
              <div>
                <span>02</span>
                <strong>Improve</strong>
                <small>Small steps, daily</small>
              </div>
              <div>
                <span>03</span>
                <strong>Collaborate</strong>
                <small>Share and grow</small>
              </div>
            </div>
          </div>
        </section>

        <section
          className="skills-section section-shell section-pad"
          id="skills"
        >
          <SectionHeading
            kicker="WHAT I WORK WITH"
            title="Tools of my"
            accent="trade."
          />
          <p className="section-description">
            A growing toolkit for building thoughtful, reliable web experiences.
            Skill levels are self-assessed and reflect my current learning
            journey.
          </p>
          <div className="skills-grid">
            {skills.map((group, idx) => (
              <article className="skill-panel" key={group.title}>
                <div className="skill-panel-head">
                  <span className="skill-index">0{idx + 1}</span>
                  <h3>{group.title}</h3>
                  <span className="panel-icon">
                    <Code2 size={18} />
                  </span>
                </div>
                {group.items.map(([name, score]) => (
                  <div className="skill-item" key={name as string}>
                    <div className="skill-label">
                      <span>{name}</span>
                      <span>{score}%</span>
                    </div>
                    <div className="skill-track">
                      <span style={{ width: `${score}%` }} />
                    </div>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section
          className="education-section section-shell section-pad"
          id="education"
        >
          <SectionHeading
            kicker="THE FOUNDATION"
            title="Learning is"
            accent="ongoing."
          />
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-meta">
                PROFESSIONAL LEARNING · IN PROGRESS
              </div>
              <h3>Full-Stack Web Development</h3>
              <p>
                Programming Hero course and independent practice covering modern
                frontend development, APIs, backend fundamentals and deployment
                workflows.
              </p>
              <span className="timeline-tag">Project-based learning</span>
            </div>
          </div>
        </section>

        <section
          className="experience-section section-shell section-pad"
          id="experience"
        >
          <div className="experience-card">
            <div className="experience-symbol">
              <Sparkles size={24} />
            </div>
            <div>
              <span className="eyebrow">
                <span className="eyebrow-dot" /> WHERE I AM TODAY
              </span>
              <h2>
                Early career.
                <br />
                <em>Serious about the craft.</em>
              </h2>
              <p>
                I'm currently looking for a developer internship or junior
                opportunity where I can contribute to real products, learn from
                experienced teammates and keep growing as an engineer.
              </p>
              <div className="experience-tags">
                <span>Internship-ready</span>
                <span>Portfolio-driven</span>
                <span>Open to feedback</span>
              </div>
            </div>
            <a
              className="round-link"
              href={GMAIL_COMPOSE}
              target="_blank"
              rel="noreferrer"
              aria-label="Contact me"
            >
              <ArrowUpRight />
            </a>
          </div>
        </section>

        <section
          className="projects-section section-shell section-pad"
          id="projects"
        >
          <div className="projects-heading-row">
            <SectionHeading
              kicker="SELECTED WORK"
              title="Made with"
              accent="intention."
            />
            <p className="section-description">
              A few projects from my journey — each one a chance to learn, solve
              a problem and build something better.
            </p>
          </div>
          <div className="projects-grid">
            {projects.slice(0, 3).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <div className="more-projects">
            <span>More experiments, more lessons.</span>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Explore GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section
          className="contact-section section-shell section-pad"
          id="contact"
        >
          <div className="contact-card">
            <div className="contact-orb orb-a" />
            <div className="contact-orb orb-b" />
            <div className="contact-content">
              <span className="eyebrow">
                <span className="eyebrow-dot" /> HAVE A PROJECT IN MIND?
              </span>
              <h2>
                Let's make
                <br />
                <em>something meaningful.</em>
              </h2>
              <p>
                Have an internship opportunity, an idea, or just want to talk
                about web development? My inbox is open.
              </p>
              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href={GMAIL_COMPOSE}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Say hello <ArrowUpRight size={17} />
                </a>
                <button className="button button-secondary" onClick={copyEmail}>
                  {copied ? <Check size={16} /> : <Mail size={16} />}
                  {copied ? "Email copied" : "Copy email"}
                </button>
              </div>
            </div>
            <div className="contact-email">
              <span>EMAIL ME DIRECTLY</span>
              <a href={GMAIL_COMPOSE} target="_blank" rel="noopener noreferrer">
                {EMAIL}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project)
    return (
      <main className="not-found section-shell">
        <span className="eyebrow">404 · PROJECT NOT FOUND</span>
        <h1>Wrong turn.</h1>
        <Link className="button button-primary" to="/">
          Back home <ArrowRight size={16} />
        </Link>
      </main>
    );
  return (
    <>
      <main className="detail-page section-shell">
        <Link to="/#projects" className="back-link">
          <ArrowLeft size={16} /> Back to projects
        </Link>
        <div className="detail-hero">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> CASE STUDY / {project.number}
            </span>
            <h1>
              {project.name}
              <span>.</span>
            </h1>
            <p>{project.description}</p>
            <div className="detail-actions">
              <a
                className="button button-primary"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                View project <ArrowUpRight size={16} />
              </a>
              <a
                className="button button-secondary"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} /> Client repository
              </a>
            </div>
          </div>
          <div className="detail-number">{project.number}</div>
        </div>
        <div className="detail-cover">
          <img src={project.image} alt={`${project.name} visual`} />
          <span>{project.eyebrow}</span>
        </div>
        <div className="detail-layout">
          <article className="detail-main">
            <span className="eyebrow">01 / OVERVIEW</span>
            <h2>About the project</h2>
            <p>{project.fullDescription}</p>
            <div className="detail-block">
              <span className="eyebrow">02 / THE CHALLENGE</span>
              <h2>What I worked through</h2>
              <p>{project.challenge}</p>
            </div>
            <div className="detail-block">
              <span className="eyebrow">03 / WHAT'S NEXT</span>
              <h2>Future improvements</h2>
              <ul className="improvement-list">
                {project.improvements.map((item) => (
                  <li key={item}>
                    <span>
                      <Check size={15} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
          <aside className="detail-sidebar">
            <div className="sidebar-panel">
              <span className="eyebrow">TECH STACK</span>
              <h3>Built with</h3>
              <div className="stack-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="sidebar-panel">
              <span className="eyebrow">PROJECT LINKS</span>
              <h3>Explore it</h3>
              <a
                className="sidebar-link"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Live / project link <MoveUpRight size={16} />
              </a>
              <a
                className="sidebar-link"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
              >
                GitHub repository <Github size={16} />
              </a>
              <p className="sidebar-note">
                If a live deployment is not available yet, the project link
                opens the repository.
              </p>
            </div>
          </aside>
        </div>
        <div className="next-project">
          <div>
            <span className="eyebrow">KEEP EXPLORING</span>
            <h2>More work, more learning.</h2>
          </div>
          <Link
            to={`/projects/${projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length].slug}`}
            className="button button-secondary"
          >
            Next project <ArrowRight size={16} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-shell">
        <Link to="/" className="brand">
          <span className="brand-mark">
            S<span>.</span>
          </span>
          <span className="brand-name">
            SABAB<span>DEV</span>
          </span>
        </Link>
        <p>Building, learning, and getting a little better every day.</p>
        <SocialLinks />
        <span className="footer-top">
          © {new Date().getFullYear()} Tausif Ahamed Sabab
        </span>
      </div>
    </footer>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route
          path="*"
          element={
            <main className="not-found section-shell">
              <span className="eyebrow">404 · PAGE NOT FOUND</span>
              <h1>Not all who wander...</h1>
              <Link className="button button-primary" to="/">
                Back home <ArrowRight size={16} />
              </Link>
            </main>
          }
        />
      </Routes>
      {location.pathname !== "/" && <div className="detail-bottom-space" />}
    </>
  );
}
