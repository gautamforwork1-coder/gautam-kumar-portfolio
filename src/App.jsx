import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2,
  Download, Github, Linkedin, Mail, Menu, Server, X,
} from 'lucide-react'

const projectUrl = 'https://github.com/gautamforwork1-coder/employee-leave-management-api'
const liveUrl = 'https://employee-leave-api-ndz6.onrender.com'

const skills = [
  { group: 'Backend', items: ['Java', 'Spring Boot', 'Spring Web', 'Spring Security', 'REST APIs'] },
  { group: 'Data', items: ['PostgreSQL', 'Spring Data JPA', 'Hibernate', 'Flyway'] },
  { group: 'Tools & quality', items: ['Maven', 'Git & GitHub', 'Docker', 'JUnit', 'Mockito', 'GitHub Actions'] },
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
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO JAVA BACKEND OPPORTUNITIES</div>
            <h1>Building the<br /><span className="outlined">logic</span> behind<br />better products<span className="lime-dot">.</span></h1>
            <p className="hero-sub">I’m Gautam — a support engineer moving into backend development, learning by building real Java and Spring Boot applications.</p>
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
          <div className="section-label reveal"><span>01 — ABOUT</span><span>A LITTLE CONTEXT</span></div>
          <div className="about-grid">
            <h2 className="reveal">Good support starts with <span>understanding</span> the system.</h2>
            <div className="about-copy reveal"><p>My career began in support engineering, where I learned to investigate issues carefully, communicate clearly, and follow a problem all the way through. Now I’m building on that foundation with Java backend development.</p><p>I’m focused on writing maintainable APIs, modelling business rules, and understanding what happens from an HTTP request all the way to the database.</p><a className="inline-link" href="#work">See what I’m building <ArrowRight size={16} /></a></div>
          </div>
          <div className="about-facts reveal"><div><strong>2.3<span>+</span></strong><small>YEARS IN SUPPORT ENGINEERING</small></div><div><strong>01</strong><small>DEPLOYED JAVA PROJECT</small></div><div><strong>2023</strong><small>B.TECH · SRM INSTITUTE</small></div><div className="fact-note">Curiosity in.<br />Better systems out.<span>↗</span></div></div>
        </section>

        <section className="work section-wrap section-pad" id="work">
          <div className="section-label reveal"><span>02 — SELECTED WORK</span><span>BUILDING IN PUBLIC</span></div>
          <div className="work-heading reveal"><h2>One project.<br /><span>A real workflow.</span></h2><p>A portfolio project built from scratch to practise the decisions a backend engineer makes beyond simply returning JSON.</p></div>
          <article className="project-card reveal">
            <div className="project-top"><span className="project-index">FEATURED PROJECT / 001</span><span className="project-state"><i /> LIVE ON RENDER</span></div>
            <div className="project-main"><div className="project-info"><div className="project-icon"><Code2 size={22} /></div><h3>Employee Leave<br />Management API</h3><p>A REST API for submitting leave requests, tracking balances, and handling manager approvals — with business rules enforced in the service layer.</p><div className="tag-list"><span>JAVA 17</span><span>SPRING BOOT</span><span>POSTGRESQL</span><span>FLYWAY</span><span>DOCKER</span></div><div className="project-links"><a className="button button-lime" href={projectUrl} target="_blank" rel="noreferrer">View source <Github size={16} /></a><a className="project-live-link" href={`${liveUrl}/swagger-ui.html`} target="_blank" rel="noreferrer">Try the API <ArrowUpRight size={16} /></a></div></div>
              <div className="project-visual"><div className="api-window"><div className="api-head"><div className="window-dots"><i /><i /><i /></div><span>API WORKFLOW</span><span className="api-method">POST</span></div><div className="api-route">/api/v1/leave-requests/<b>{'{id}'}</b>/approve</div><div className="api-separator"/><div className="flow-row"><span className="flow-num">01</span><span className="flow-icon">↗</span><span><b>Authenticate</b><small>Manager role required</small></span><Check className="flow-check" size={15} /></div><div className="flow-line"/><div className="flow-row"><span className="flow-num">02</span><span className="flow-icon">⌕</span><span><b>Lock request</b><small>Prevent conflicting decisions</small></span><Check className="flow-check" size={15} /></div><div className="flow-line"/><div className="flow-row"><span className="flow-num">03</span><span className="flow-icon">✓</span><span><b>Apply business rules</b><small>Approve & update balance</small></span><Check className="flow-check" size={15} /></div><div className="api-foot"><span><i /> RESPONSE</span><b>200 OK</b></div></div><div className="visual-orbit" /></div>
            </div>
            <div className="project-bottom"><span>MY FIRST END-TO-END JAVA BACKEND BUILD</span><span>SPRING · DATA · SECURITY · DEPLOYMENT</span></div>
          </article>
          <p className="honesty-note reveal"><span>↗</span> Built as a learning portfolio project — not represented as prior professional Java experience.</p>
        </section>

        <section className="skills section-wrap section-pad" id="skills">
          <div className="section-label reveal"><span>03 — TOOLKIT</span><span>LEARNING BY BUILDING</span></div>
          <div className="skills-grid"><div className="skills-intro reveal"><h2>Tools I’m<br /><span>working with.</span></h2><p>My current learning is centred around the Java backend stack, from API design through persistence and deployment.</p></div><div className="skill-groups">{skills.map((group, i) => <div className="skill-group reveal" key={group.group}><div className="skill-group-top"><span>0{i + 1}</span><h3>{group.group}</h3><ArrowUpRight size={16} /></div><div className="skill-pills">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></div>
        </section>

        <section className="contact section-wrap section-pad" id="contact"><div className="contact-card reveal"><div className="contact-orb"/><div className="section-label"><span>04 — CONTACT</span><span>HAVE A ROLE IN MIND?</span></div><h2>Let’s build<br />something <span>useful.</span></h2><p>Open to Java backend developer opportunities and conversations with teams building thoughtful products.</p><div className="contact-actions"><a className="button button-lime" href="mailto:gautamforwork1@gmail.com">Say hello <ArrowUpRight size={17} /></a><a className="social-link" href="https://www.linkedin.com/in/gautamkumar099" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a className="social-link" href="https://github.com/gautamforwork1-coder" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a></div><div className="contact-email">GAUTAMFORWORK1@GMAIL.COM <span>↗</span></div></div></section>
      </main>

      <footer className="footer section-wrap"><a href="#home" className="brand"><span className="brand-mark">G<span>.</span></span><span>GAUTAM KUMAR</span></a><span>DESIGNED & BUILT WITH REACT · 2026</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  )
}

export default App
