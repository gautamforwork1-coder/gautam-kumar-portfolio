import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2,
  Download, Github, Linkedin, Mail, Menu, Server, X, BriefcaseBusiness, Network, Hotel, Dumbbell,
} from 'lucide-react'

const projectUrl = 'https://github.com/gautamforwork1-coder/employee-leave-management-api'
const liveUrl = 'https://employee-leave-api-ndz6.onrender.com'

const skills = [
  { group: 'Backend', items: ['Java', 'Spring Boot', 'Spring Web', 'Spring Security', 'REST APIs'] },
  { group: 'Data & messaging', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Neo4j', 'Kafka', 'Redis', 'Spring Data JPA', 'Hibernate'] },
  { group: 'Tools & quality', items: ['Maven', 'Git & GitHub', 'Docker', 'Jenkins', 'JUnit', 'Mockito', 'AWS', 'CI/CD'] },
  { group: 'Frontend & other', items: ['JavaScript', 'React.js', 'Node.js', 'Express', 'Python', 'FastAPI', 'GraphQL', 'SQL'] },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  const copyEmail = async () => {
    await navigator.clipboard.writeText('gautamforwork1@gmail.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell min-h-screen bg-ink text-paper font-sans">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a href="#home" className="brand" aria-label="Gautam Kumar home"><span className="brand-mark">G<span>.</span></span><span>GAUTAM KUMAR</span></a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#work" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> ASSOCIATE SOFTWARE ENGINEER · JAVA BACKEND</div>
            <h1>Building the<br /><span className="outlined">logic</span> behind<br />better products<span className="lime-dot">.</span></h1>
            <p className="hero-sub">I’m Gautam — an Associate Software Engineer building Java backend services, REST APIs, and event-driven workflows.</p>
            <div className="hero-actions">
              <a className="button button-lime" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <button className="text-link" onClick={copyEmail}>{copied ? <><Check size={16} /> Email copied</> : <><Mail size={16} /> Get in touch</>}</button>
              <a className="text-link resume-download" href="/resume.pdf" download="Gautam-Kumar-Resume.pdf"><Download size={16} /> Download resume</a>
            </div>
            <div className="hero-foot"><span>BASED IN BENGALURU, INDIA</span><span>JAVA · SPRING BOOT · REST</span></div>
          </div>
          <div className="hero-art" aria-label="Decorative Java backend code card">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="hero-glow" />
            <div className="code-card">
              <div className="code-top"><div className="window-dots"><i /><i /><i /></div><span>LeaveRequestService.java</span><span className="code-live"><b /> LIVE</span></div>
              <div className="code-body">
                <div><span className="line-no">01</span><span className="syntax-purple">@Transactional</span></div>
                <div><span className="line-no">02</span><span className="syntax-purple">public</span> <span className="syntax-blue">LeaveRequest</span> approve(</div>
                <div><span className="line-no">03</span>  <span className="syntax-blue">UUID</span> requestId, <span className="syntax-blue">UUID</span> managerId) {'{'}</div>
                <div><span className="line-no">04</span>  <span className="syntax-purple">var</span> request = repository</div>
                <div><span className="line-no">05</span>    .findByIdForUpdate(requestId);</div>
                <div><span className="line-no">06</span>  request.approve(managerId);</div>
                <div><span className="line-no">07</span>  <span className="syntax-green">return</span> repository.save(request);</div>
                <div><span className="line-no">08</span>{'}'}</div>
              </div>
              <div className="code-bottom"><span><span className="pulse-dot" /> Java 17</span><span>Spring Boot <b>↗</b></span></div>
            </div>
            <div className="float-chip chip-api"><span className="chip-icon"><Server size={15} /></span><span><b>REST API</b><small>Deployed & running</small></span><span className="chip-check"><Check size={12} /></span></div>
            <div className="float-chip chip-db"><span className="db-symbol">◉</span><span><b>PostgreSQL</b><small>Persistence layer</small></span></div>
            <div className="art-caption"><span>01 / BACKEND SYSTEMS</span><span>SCROLL TO EXPLORE ↓</span></div>
          </div>
          <a className="scroll-indicator" href="#about"><span>SCROLL</span><ArrowDown size={14} /></a>
        </section>

        <div className="ticker" aria-label="Technologies"><div className="ticker-track">{Array.from({ length: 2 }, (_, copy) => <div className="ticker-row" key={copy}><span>JAVA</span><i>✳</i><span>SPRING BOOT</span><i>✳</i><span>REST APIS</span><i>✳</i><span>POSTGRESQL</span><i>✳</i><span>DOCKER</span><i>✳</i><span>JAVA</span><i>✳</i><span>SPRING BOOT</span><i>✳</i><span>REST APIS</span><i>✳</i><span>POSTGRESQL</span><i>✳</i><span>DOCKER</span><i>✳</i></div>)}</div></div>

        <section className="about section-wrap section-pad" id="about">
          <div className="section-label reveal"><span>01 — ABOUT</span><span>ENGINEERING AT THE INTERSECTION OF SYSTEMS & PEOPLE</span></div>
          <div className="about-grid">
            <h2 className="reveal">Building backend systems that are <span>reliable</span> and useful.</h2>
            <div className="about-copy reveal"><p>I’m a software engineer with experience developing Java and Spring Boot services, REST APIs, and asynchronous workflows. At CGI, I work on employee time, leave, and training capabilities.</p><p>I care about clear business rules, dependable integrations, and testing changes before they reach production. My project work also spans OCR and full-stack applications.</p><a className="inline-link" href="#experience">Explore my experience <ArrowRight size={16} /></a></div>
          </div>
          <div className="about-facts reveal"><div><strong>2024</strong><small>CGI · ASSOCIATE SOFTWARE ENGINEER</small></div><div><strong>85<span>%+</span></strong><small>TEST COVERAGE IN TEAM PROJECT</small></div><div><strong>2023</strong><small>B.TECH · SRM INSTITUTE</small></div><div className="fact-note">Thoughtful code.<br />Useful outcomes.<span>↗</span></div></div>
        </section>

        <section className="experience section-wrap section-pad" id="experience">
          <div className="section-label reveal"><span>02 — EXPERIENCE</span><span>PROFESSIONAL JOURNEY</span></div>
          <div className="experience-list">
            <article className="experience-item reveal"><div className="experience-date">JUN 2024 — PRESENT<br /><span>BENGALURU, INDIA</span></div><div className="experience-marker"><BriefcaseBusiness size={16} /></div><div className="experience-detail"><h3>Associate Software Engineer <span>· CGI</span></h3><ul><li>Develop REST APIs for the Worktime Bank module covering employee hours, leave, and compensation.</li><li>Build training workflows for course creation, enrollment, cancellations, and classroom capacity validation.</li><li>Implement automated waitlist handling and publish training events with Apache Kafka for asynchronous notifications.</li><li>Write JUnit and Mockito tests, reaching 85%+ coverage and helping reduce post-release defects by 20%.</li></ul></div></article>
            <article className="experience-item reveal"><div className="experience-date">SEP 2023 — MAR 2024<br /><span>INDIA</span></div><div className="experience-marker"><Code2 size={16} /></div><div className="experience-detail"><h3>Software Development Engineer Intern <span>· OpenText</span></h3><ul><li>Built a PaddleOCR pipeline to digitize handwritten forms, achieving 87.3% accuracy while reducing processing time.</li><li>Integrated a Phi-3 language model to extract and correct critical data, reducing manual errors.</li><li>Developed a React and FastAPI application for real-time OCR processing and model integration.</li></ul></div></article>
          </div>
        </section>

        <section className="work section-wrap section-pad" id="work">
          <div className="section-label reveal"><span>03 — SELECTED WORK</span><span>PROJECTS & ENGINEERING</span></div>
          <div className="work-heading reveal"><h2>Systems built<br /><span>to solve problems.</span></h2><p>Professional and personal work across Java microservices, booking workflows, OCR, and operations tools.</p></div>
          <article className="project-card reveal">
            <div className="project-top"><span className="project-index">FEATURED PROJECT / 001</span><span className="project-state"><i /> LIVE ON RENDER</span></div>
            <div className="project-main"><div className="project-info"><div className="project-icon"><Code2 size={22} /></div><h3>Employee Leave<br />Management API</h3><p>A REST API for submitting leave requests, tracking balances, and handling manager approvals — with business rules enforced in the service layer.</p><div className="tag-list"><span>JAVA 17</span><span>SPRING BOOT</span><span>POSTGRESQL</span><span>FLYWAY</span><span>DOCKER</span></div><div className="project-links"><a className="button button-lime" href={projectUrl} target="_blank" rel="noreferrer">View source <Github size={16} /></a><a className="project-live-link" href={`${liveUrl}/swagger-ui.html`} target="_blank" rel="noreferrer">Try the API <ArrowUpRight size={16} /></a></div></div>
              <div className="project-visual"><div className="api-window"><div className="api-head"><div className="window-dots"><i /><i /><i /></div><span>API WORKFLOW</span><span className="api-method">POST</span></div><div className="api-route">/api/v1/leave-requests/<b>{'{id}'}</b>/approve</div><div className="api-separator"/><div className="flow-row"><span className="flow-num">01</span><span className="flow-icon">↗</span><span><b>Authenticate</b><small>Manager role required</small></span><Check className="flow-check" size={15} /></div><div className="flow-line"/><div className="flow-row"><span className="flow-num">02</span><span className="flow-icon">⌕</span><span><b>Lock request</b><small>Prevent conflicting decisions</small></span><Check className="flow-check" size={15} /></div><div className="flow-line"/><div className="flow-row"><span className="flow-num">03</span><span className="flow-icon">✓</span><span><b>Apply business rules</b><small>Approve & update balance</small></span><Check className="flow-check" size={15} /></div><div className="api-foot"><span><i /> RESPONSE</span><b>200 OK</b></div></div><div className="visual-orbit" /></div>
            </div>
            <div className="project-bottom"><span>MY FIRST END-TO-END JAVA BACKEND BUILD</span><span>SPRING · DATA · SECURITY · DEPLOYMENT</span></div>
          </article>
          <div className="resume-project-grid">
            <article className="resume-project reveal"><div className="resume-project-icon"><Network size={20} /></div><span className="resume-project-kicker">MICROSERVICES · JAVA</span><h3>LinkSphere</h3><p>A networking platform for profiles, posts, connections, and notifications. Uses Eureka discovery, API Gateway, Feign, Kafka, PostgreSQL, and Neo4j.</p><div className="tag-list"><span>SPRING BOOT</span><span>KAFKA</span><span>NEO4J</span><span>RESILIENCE4J</span></div></article>
            <article className="resume-project reveal"><div className="resume-project-icon"><Hotel size={20} /></div><span className="resume-project-kicker">BOOKING WORKFLOWS · JAVA</span><h3>BookMyStay</h3><p>A hotel booking system covering search, room availability, reservations, payment integration, notifications, inventory updates, and booking status.</p><div className="tag-list"><span>SPRING BOOT</span><span>JPA</span><span>SPRING BATCH</span><span>JWT</span></div></article>
            <article className="resume-project reveal"><div className="resume-project-icon"><Dumbbell size={20} /></div><span className="resume-project-kicker">FULL-STACK · OPERATIONS</span><h3>GymOps</h3><p>A gym management platform for memberships, automated billing, trainer schedules, and revenue analytics, with authentication and role-based access.</p><div className="tag-list"><span>REACT</span><span>NODE.JS</span><span>MONGODB</span><span>REDUX</span></div></article>
          </div>
          <p className="honesty-note reveal"><span>↗</span> Employee Leave Management API is a separate portfolio build. The projects above reflect the experience listed in my resume.</p>
        </section>

        <section className="skills section-wrap section-pad" id="skills">
          <div className="section-label reveal"><span>04 — TOOLKIT</span><span>LANGUAGES, FRAMEWORKS & PLATFORMS</span></div>
          <div className="skills-grid"><div className="skills-intro reveal"><h2>Tools I<br /><span>work with.</span></h2><p>Technologies across Java backend services, distributed systems, data stores, and full-stack applications.</p></div><div className="skill-groups">{skills.map((group, i) => <div className="skill-group reveal" key={group.group}><div className="skill-group-top"><span>0{i + 1}</span><h3>{group.group}</h3><ArrowUpRight size={16} /></div><div className="skill-pills">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></div>
        </section>

        <section className="contact section-wrap section-pad" id="contact"><div className="contact-card reveal"><div className="contact-orb"/><div className="section-label"><span>05 — CONTACT</span><span>HAVE A ROLE IN MIND?</span></div><h2>Let’s build<br />something <span>useful.</span></h2><p>Open to Java backend developer opportunities and conversations with teams building thoughtful products.</p><div className="contact-actions"><a className="button button-lime" href="mailto:gautamforwork1@gmail.com">Say hello <ArrowUpRight size={17} /></a><a className="social-link" href="https://www.linkedin.com/in/gautamkumar099" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a className="social-link" href="https://github.com/gautamforwork1-coder" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a></div><div className="contact-email">GAUTAMFORWORK1@GMAIL.COM <span>↗</span></div></div></section>
      </main>

      <footer className="footer section-wrap"><a href="#home" className="brand"><span className="brand-mark">G<span>.</span></span><span>GAUTAM KUMAR</span></a><span>DESIGNED & BUILT WITH REACT · 2026</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  )
}

export default App
