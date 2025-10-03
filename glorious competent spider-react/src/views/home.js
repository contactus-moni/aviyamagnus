import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Glorious Competent Spider</title>
        <meta property="og:title" content="Glorious Competent Spider" />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
        @keyframes fadeInUp {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container4">
        <div className="home-container5">
          <Script
            html={`<script defer data-name="homepage-interactions">
(function(){
  // Scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Animate cards on scroll
  const cards = document.querySelectorAll(
    ".track-card, .tutoring-card, .cert-card, .assessment-card, .mentor-card, .skill-card"
  )
  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    animateOnScroll.observe(card)
  })

  // Staggered animation for grids
  const grids = document.querySelectorAll(
    ".tracks-grid, .tutoring-grid, .certification-grid, .assessment-grid, .mentorship-grid"
  )
  grids.forEach((grid) => {
    const gridCards = grid.querySelectorAll(
      ".track-card, .tutoring-card, .cert-card, .assessment-card, .mentor-card"
    )
    gridCards.forEach((card, index) => {
      card.style.animationDelay = \`\${index * 0.1}s\`
    })
  })

  // Enhanced hover effects for track cards
  const trackCards = document.querySelectorAll(".track-card")
  trackCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.borderColor = "var(--color-primary)"
    })

    card.addEventListener("mouseleave", () => {
      if (!card.classList.contains("featured")) {
        card.style.borderColor = "var(--color-border)"
      }
    })
  })

  // Stats counter animation
  const statsNumbers = document.querySelectorAll(".stat-number")
  const animateStats = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target
        const finalNumber = target.textContent
        const isPercentage = finalNumber.includes("%")
        const numericValue = parseInt(finalNumber.replace(/\D/g, ""))

        let current = 0
        const increment = numericValue / 30
        const timer = setInterval(() => {
          current += increment
          if (current >= numericValue) {
            current = numericValue
            clearInterval(timer)
          }
          target.textContent = Math.floor(current) + (isPercentage ? "%" : "+")
        }, 50)

        observer.unobserve(target)
      }
    })
  }

  const statsObserver = new IntersectionObserver(animateStats, {
    threshold: 0.5,
  })
  statsNumbers.forEach((stat) => statsObserver.observe(stat))

  // Smooth reveal for section headers
  const sectionHeaders = document.querySelectorAll(".section-header")
  sectionHeaders.forEach((header) => {
    header.style.opacity = "0"
    header.style.transform = "translateY(20px)"
    header.style.transition = "opacity 0.8s ease, transform 0.8s ease"
    animateOnScroll.observe(header)
  })

  // Enhanced button interactions
  const buttons = document.querySelectorAll(".btn")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "translateY(-2px)"
    })

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(0)"
    })
  })

  // Parallax effect for hero video
  let lastScrollY = 0
  const heroVideo = document.querySelector(".hero-video")

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY
    const rate = scrollY * -0.5

    if (heroVideo && scrollY < window.innerHeight) {
      heroVideo.style.transform = \`translateY(\${rate}px)\`
    }

    lastScrollY = scrollY
  })

  // Progressive enhancement for reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const animatedElements = document.querySelectorAll(
      '[style*="transition"], [style*="animation"]'
    )
    animatedElements.forEach((el) => {
      el.style.transition = "none"
      el.style.animation = "none"
      el.style.opacity = "1"
      el.style.transform = "none"
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <section id="hero" className="hero-section">
        <div className="hero-background">
          <video
            autoPlay="true"
            muted="true"
            loop="true"
            playsInline="true"
            src="https://videos.pexels.com/video-files/1851768/1851768-hd_1920_1080_30fps.mp4"
            className="hero-video"
          ></video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {' '}
              Aviya Magnus — Precision Learning for Lifelong Success
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <p className="hero-subtitle">
              {' '}
              Personalized tutoring and curated learning paths for school and
              career advancement, delivered with proven pedagogy and measurable
              outcomes.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <ul className="hero-features">
              <li>
                <span>
                  {' '}
                  Customized study plans across CBSE, ICSE, State Boards, IB and
                  IGCSE
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </li>
              <li>
                <span>
                  {' '}
                  Foundation courses in Communication, Digital Basics and Study
                  Skills
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </li>
              <li>
                <span>
                  {' '}
                  Professional certification tracks for HR, Finance, Marketing
                  and Business Administration
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </li>
              <li>
                <span>
                  {' '}
                  Structured assessment, monthly performance reports and
                  dedicated mentorship
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </li>
            </ul>
            <div className="hero-actions">
              <button className="btn btn-primary btn-lg">
                Start Your Journey
              </button>
              <button className="btn btn-lg btn-outline">
                Book Free Trial
              </button>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">
                <span>98%</span>
              </div>
              <div className="stat-label">
                <span>Success Rate</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                <span>5000+</span>
              </div>
              <div className="stat-label">
                <span>Students Taught</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                <span>15+</span>
              </div>
              <div className="stat-label">
                <span>Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="learning-tracks" className="learning-tracks-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Tailored Learning Tracks</h2>
            <p className="section-subtitle">Clear paths, measurable outcomes</p>
          </div>
          <div className="tracks-grid">
            <div className="track-card featured">
              <div className="track-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                  ></path>
                </svg>
              </div>
              <h3 className="track-title">Academic Mastery Track</h3>
              <p className="track-description">
                {' '}
                Primary to higher-secondary students focused on concept mastery,
                board excellence, and exam strategy. Includes personalized
                tuition hours and mock series.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <ul className="track-features">
                <li>
                  <span>Goal Diagnostic Assessment</span>
                </li>
                <li>
                  <span>Curriculum Alignment (CBSE, ICSE, IB, IGCSE)</span>
                </li>
                <li>
                  <span>Progress Tracking &amp; Reviews</span>
                </li>
              </ul>
            </div>
            <div className="track-card">
              <div className="track-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                    <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                    <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                    <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                    <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                    <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                  </g>
                </svg>
              </div>
              <h3 className="track-title">Foundation Builder Track</h3>
              <p className="track-description">
                {' '}
                Core skill reinforcement: communication, digital literacy, study
                techniques and confidence-building exercises integrated into
                weekly lessons.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <ul className="track-features">
                <li>
                  <span>Communication Skills</span>
                </li>
                <li>
                  <span>Digital Literacy</span>
                </li>
                <li>
                  <span>Study Techniques</span>
                </li>
              </ul>
            </div>
            <div className="track-card">
              <div className="track-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </g>
                </svg>
              </div>
              <h3 className="track-title">Career Launch Track</h3>
              <p className="track-description">
                {' '}
                College students, job seekers and professionals aiming to
                upskill. Blends certifications with practical assessments and
                career coaching.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <ul className="track-features">
                <li>
                  <span>Professional Certifications</span>
                </li>
                <li>
                  <span>Career Coaching</span>
                </li>
                <li>
                  <span>Industry Projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="tutoring" className="tutoring-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Personalized Tutoring</h2>
            <p className="section-subtitle">
              Blended, Board-Aligned, Results-Driven
            </p>
          </div>
          <div className="tutoring-grid">
            <div className="tutoring-card">
              <div className="tutoring-image">
                <img
                  src="https://images.pexels.com/photos/5212663/pexels-photo-5212663.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Students learning in classroom"
                />
              </div>
              <div className="tutoring-content">
                <h3>What We Cover</h3>
                <ul>
                  <li>
                    <span>
                      {' '}
                      Curriculum-accurate lesson plans mapped to board
                      requirements
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <span>Concept-first teaching for long-term retention</span>
                  </li>
                  <li>
                    <span>
                      Targeted revision cycles and past-paper practice
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tutoring-card">
              <div className="tutoring-image">
                <img
                  src="https://images.pexels.com/photos/8423410/pexels-photo-8423410.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Students collaborating"
                />
              </div>
              <div className="tutoring-content">
                <h3>How It&apos;s Delivered</h3>
                <ul>
                  <li>
                    <span>
                      Hybrid classrooms: live online and offline clinics
                    </span>
                  </li>
                  <li>
                    <span>Adaptive lesson pacing with modular content</span>
                  </li>
                  <li>
                    <span>
                      Recorded lessons and board-specific question banks
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tutoring-card">
              <div className="tutoring-image">
                <img
                  src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Students with technology"
                />
              </div>
              <div className="tutoring-content">
                <h3>Assessment &amp; Readiness</h3>
                <ul>
                  <li>
                    <span>Regular formative checks and mock exams</span>
                  </li>
                  <li>
                    <span>Analytics-driven performance reports</span>
                  </li>
                  <li>
                    <span>Actionable feedback sessions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="foundation" className="foundation-section">
        <div className="section-container">
          <div className="foundation-content">
            <div className="foundation-main">
              <h2 className="section-title">Foundation &amp; Soft Skills</h2>
              <p className="section-subtitle">
                {' '}
                Build confidence, competence, career readiness
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <rect width="14" height="8" x="5" y="2" rx="2"></rect>
                        <rect width="20" height="8" x="2" y="14" rx="2"></rect>
                        <path d="M6 18h2m4 0h6"></path>
                      </g>
                    </svg>
                  </div>
                  <h3>Basics of Computer</h3>
                  <p>
                    {' '}
                    Essential digital literacy through hands-on labs and
                    project-based assessments that mirror workplace workflows.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
                      ></path>
                    </svg>
                  </div>
                  <h3>Spoken English &amp; Communication</h3>
                  <p>
                    {' '}
                    Professional communication skills with live practice
                    sessions and recorded feedback to accelerate fluency.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                        <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                        <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                        <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                        <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                        <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                      </g>
                    </svg>
                  </div>
                  <h3>Study Skills &amp; Soft Skills</h3>
                  <p>
                    {' '}
                    Transform learners into reliable performers through
                    strategic planning, critical thinking, and professional
                    development.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="foundation-cta">
              <div className="cta-card">
                <h3>Ready to Build Your Foundation?</h3>
                <p>
                  {' '}
                  Start with structured progression and measurable outcomes
                  designed for immediate impact.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button className="btn btn-primary">Enroll Now</button>
                <button className="btn btn-outline">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="certification" className="certification-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Professional Certification</h2>
            <p className="section-subtitle">
              Career-ready, Employer-recognized
            </p>
          </div>
          <div className="certification-grid">
            <div className="cert-card">
              <div className="cert-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </g>
                </svg>
              </div>
              <h3>HR Essentials</h3>
              <p>
                {' '}
                Talent acquisition, performance management, compliance, and HR
                analytics for operational and strategic roles.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="cert-features">
                <span className="feature-tag">6 Months</span>
                <span className="feature-tag">Industry Projects</span>
                <span className="feature-tag">Certification</span>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="m19 9l-5 5l-4-4l-3 3"></path>
                  </g>
                </svg>
              </div>
              <h3>Finance &amp; Accounting Pro</h3>
              <p>
                {' '}
                Financial statement mastery, budgeting, taxation basics, and
                managerial accounting for confident decision-making.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="cert-features">
                <span className="feature-tag">8 Months</span>
                <span className="feature-tag">Case Studies</span>
                <span className="feature-tag">Expert Mentors</span>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </g>
                </svg>
              </div>
              <h3>Marketing &amp; Strategy</h3>
              <p>
                {' '}
                Market research, brand strategy, digital campaign planning, and
                ROI-driven growth tactics.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="cert-features">
                <span className="feature-tag">7 Months</span>
                <span className="feature-tag">Live Projects</span>
                <span className="feature-tag">Portfolio</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="assessments" className="assessment-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Precision Assessment, Clear Progress
            </h2>
            <p className="section-subtitle">
              {' '}
              Quantify learning with purpose and transparency
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </g>
                </svg>
              </div>
              <h3>Personalized Dashboard</h3>
              <p>
                {' '}
                Individual tracking of competency across subjects with
                data-driven insights and actionable goals.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="assessment-card">
              <div className="assessment-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
                  ></path>
                </svg>
              </div>
              <h3>Focused Feedback</h3>
              <p>
                {' '}
                Structured feedback sessions that convert mistakes into
                understanding with prioritized practice plans.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="assessment-card">
              <div className="assessment-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="m19 9l-5 5l-4-4l-3 3"></path>
                  </g>
                </svg>
              </div>
              <h3>Monthly Reports</h3>
              <p>
                {' '}
                Professional summaries for parents and educators highlighting
                growth, attendance, and next steps.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="mentorship" className="mentorship-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Mentorship &amp; Support</h2>
            <p className="section-subtitle">
              {' '}
              Personalized guidance for measurable success
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="mentorship-grid">
            <div className="mentor-card">
              <div className="mentor-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                  ></path>
                </svg>
              </div>
              <h3>Personal Mentorship</h3>
              <p>
                {' '}
                Dedicated mentors create customized learning roadmaps with
                monthly one-on-one reviews and career insights.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="mentor-card">
              <div className="mentor-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </g>
                </svg>
              </div>
              <h3>Goal Setting</h3>
              <p>
                {' '}
                Convert ambition into achievement with clear milestones aligned
                to board requirements and future aspirations.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="mentor-card">
              <div className="mentor-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </g>
                </svg>
              </div>
              <h3>Parent Partnership</h3>
              <p>
                {' '}
                Regular progress reports and mentor-led review meetings keep
                parents informed and engaged in the learning journey.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="mentor-card">
              <div className="mentor-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path>
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                  </g>
                </svg>
              </div>
              <h3>Learning Camps</h3>
              <p>
                {' '}
                Intensive specialist camps for concentrated intervention with
                small cohorts and measurable outcomes.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="mentor-card">
              <div className="mentor-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="m19 9l-5 5l-4-4l-3 3"></path>
                  </g>
                </svg>
              </div>
              <h3>Continuous Support</h3>
              <p>
                {' '}
                Proactive support with timely feedback, performance analytics,
                and mentor check-ins to maintain steady growth.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="enroll" className="enroll-section">
        <div className="section-container">
          <div className="enroll-content">
            <div className="enroll-text">
              <h2 className="section-title">
                {' '}
                Ready to accelerate learning with clarity and confidence?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <p className="section-content">
                {' '}
                Start a tailored path to academic and career success with Aviya
                Magnus today.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="enroll-options">
                <div className="enroll-option">
                  <h3>Schedule a Free Trial</h3>
                  <p>
                    {' '}
                    Experience personalized sessions and see your custom
                    learning plan.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="enroll-option">
                  <h3>Request Guidance</h3>
                  <p>
                    Speak with an Academic Advisor to map your path to success.
                  </p>
                </div>
                <div className="enroll-option">
                  <h3>Flexible Enrollment</h3>
                  <p>
                    {' '}
                    Choose from single courses to full-year programs with
                    blended delivery.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="enroll-actions">
              <div className="action-card">
                <h3>Next Steps</h3>
                <p>
                  {' '}
                  Our team will follow up within one business day to confirm and
                  prepare your personalized plan.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="action-buttons">
                  <button className="btn btn-primary btn-lg">Book Trial</button>
                  <button className="btn btn-secondary">Talk to Advisor</button>
                  <button className="btn btn-outline">View Programs</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon82"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text79">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
