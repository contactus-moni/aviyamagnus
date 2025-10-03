import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './tutoring-programs.css'

const TutoringPrograms = (props) => {
  return (
    <div className="tutoring-programs-container1">
      <Helmet>
        <title>Tutoring-Programs - Glorious Competent Spider</title>
        <meta
          property="og:title"
          content="Tutoring-Programs - Glorious Competent Spider"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="tutoring-programs-container2">
        <div className="tutoring-programs-container3">
          <Script
            html={`<style>
        @keyframes fadeInUp {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes fadeInRight {from {opacity: 0;
transform: translateX(30px);}
to {opacity: 1;
transform: translateX(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="tutoring-programs-container4">
        <div className="tutoring-programs-container5">
          <Script
            html={`<script defer data-name="tutoring-programs">
(function(){
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 0.8s ease-out forwards"
      }
    })
  }, observerOptions)

  // Observe all cards and sections for animation
  const animatedElements = document.querySelectorAll(
    ".program-card, .mode-card, .assessment-card, .skill-card, .mentorship-card, .track-item"
  )
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    observer.observe(el)
  })

  // Add smooth hover effects for interactive elements
  const interactiveCards = document.querySelectorAll(
    ".program-card, .mode-card, .assessment-card, .skill-card, .mentorship-card"
  )
  interactiveCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-6px) scale(1.02)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)"
    })
  })

  // Staggered animation for grid items
  const gridContainers = document.querySelectorAll(
    ".programs-grid, .modes-grid, .assessment-grid, .skills-grid, .mentorship-grid"
  )
  gridContainers.forEach((container) => {
    const items = container.querySelectorAll(
      ".program-card, .mode-card, .assessment-card, .skill-card, .mentorship-card"
    )
    items.forEach((item, index) => {
      item.style.animationDelay = \`\${index * 0.1}s\`
    })
  })

  // Enhance CTA button with ripple effect
  const ctaButton = document.querySelector(".mentorship-cta .btn-primary")
  if (ctaButton) {
    ctaButton.addEventListener("click", function (e) {
      const ripple = document.createElement("span")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.style.position = "absolute"
      ripple.style.borderRadius = "50%"
      ripple.style.background = "rgba(255, 255, 255, 0.3)"
      ripple.style.pointerEvents = "none"
      ripple.style.animation = "ripple 0.6s linear"

      this.style.position = "relative"
      this.style.overflow = "hidden"
      this.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })

    // Add ripple animation keyframes
    const style = document.createElement("style")
    style.textContent = \`
    @keyframes ripple {
      0% { transform: scale(0); opacity: 1; }
      100% { transform: scale(4); opacity: 0; }
    }
  \`
    document.head.appendChild(style)
  }

  // Add smooth scrolling behavior to any internal links
  const scrollLinks = document.querySelectorAll('a[href^="#"]')
  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Performance optimization: Lazy load images that are not immediately visible
  const lazyImages = document.querySelectorAll('img[loading="lazy"]')
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.src
        img.classList.add("loaded")
        imageObserver.unobserve(img)
      }
    })
  })

  lazyImages.forEach((img) => imageObserver.observe(img))

  // Add progressive enhancement for reduced motion preferences
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const style = document.createElement("style")
    style.textContent = \`
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  \`
    document.head.appendChild(style)
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <section className="hero-section1">
        <div className="hero-content1">
          <div className="hero-text1">
            <h1 className="hero-title">
              {' '}
              Personalized Tutoring for Every Stage — Primary to Higher
              Secondary
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <p className="hero-subtitle">
              {' '}
              Aviya Magnus delivers bespoke tutoring across CBSE, ICSE, State
              Boards, IB and IGCSE with flexible online and offline formats. Our
              curriculum-driven approach, expert faculty and individualized
              learning plans ensure concept mastery, exam readiness and
              measurable progress for every student.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <p className="hero-description">
              {' '}
              Trustworthy, results-focused support designed for families and
              education decision-makers: tailor-made lesson plans, performance
              tracking, regular parent reviews and targeted mock assessments to
              build confidence and academic resilience.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="hero-actions1">
              <button className="btn btn-primary btn-lg">
                Start Assessment
              </button>
              <button className="btn btn-lg btn-outline">View Programs</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <img
                src="https://images.pexels.com/photos/4260325/pexels-photo-4260325.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                alt="A mother helps her daughter with an online lesson"
                loading="lazy"
                className="hero-image"
              />
              <div className="hero-overlay1"></div>
            </div>
            <div className="floating-stats">
              <div className="stat-card1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
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
                <div>
                  <div className="stat-number1">
                    <span>98%</span>
                  </div>
                  <div className="stat-label1">
                    <span>Success Rate</span>
                  </div>
                </div>
              </div>
              <div className="stat-card1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
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
                <div>
                  <div className="stat-number1">
                    <span>5000+</span>
                  </div>
                  <div className="stat-label1">
                    <span>Students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="programs-overview">
        <div className="section-container1">
          <header className="section-header1">
            <h2 className="section-title">
              {' '}
              Programs Overview — Tailored Tutoring Across Boards and Levels
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="section-subtitle">
              {' '}
              Aviya Magnus delivers structured, board-specific tutoring designed
              to build deep conceptual mastery and consistent academic progress.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </header>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
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
              <h3 className="program-title">Board-Aligned Curriculum</h3>
              <p className="program-description">
                {' '}
                Lesson plans, assessment cycles and exam strategies mapped
                precisely to each board&apos;s scope and evaluation pattern
                across CBSE, ICSE, State Boards, IB and IGCSE.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <ul className="program-features">
                <li>
                  <span>Curriculum-specific content</span>
                </li>
                <li>
                  <span>Board examination patterns</span>
                </li>
                <li>
                  <span>Assessment alignment</span>
                </li>
              </ul>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
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
              <h3 className="program-title">Customizable Pacing</h3>
              <p className="program-description">
                {' '}
                Learning pathways calibrated to individual proficiency, learning
                speed and target outcomes — accelerated, standard or restorative
                tracks available.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <ul className="program-features">
                <li>
                  <span>Individual assessment</span>
                </li>
                <li>
                  <span>Adaptive learning paths</span>
                </li>
                <li>
                  <span>Flexible scheduling</span>
                </li>
              </ul>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
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
              <h3 className="program-title">Progress Calibration</h3>
              <p className="program-description">
                {' '}
                Monthly benchmarks and adaptive adjustments to pacing and
                content focus to ensure steady improvement and measurable
                outcomes.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <ul className="program-features">
                <li>
                  <span>Monthly assessments</span>
                </li>
                <li>
                  <span>Performance tracking</span>
                </li>
                <li>
                  <span>Outcome measurement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="learning-modes">
        <div className="section-container1">
          <header className="section-header1">
            <h2 className="section-title">
              Hybrid Learning, Precisely Delivered
            </h2>
            <p className="section-subtitle">
              {' '}
              Combining the best of in-person and online tutoring to create a
              flexible, high-performance learning experience.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </header>
          <div className="modes-grid">
            <div className="mode-card">
              <div className="mode-visual">
                <img
                  src="https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Young student engaged in online class"
                  loading="lazy"
                  className="mode-image"
                />
                <div className="mode-overlay"></div>
              </div>
              <div className="mode-content">
                <div className="mode-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
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
                <h3 className="mode-title">Online Learning</h3>
                <p className="mode-description">
                  {' '}
                  Live interactive classes, recorded lesson libraries, and
                  secure student portals with flexible scheduling options.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="mode-features">
                  <span className="mode-tag">24/7 Access</span>
                  <span className="mode-tag">Interactive Classes</span>
                </div>
              </div>
            </div>
            <div className="mode-card">
              <div className="mode-visual">
                <img
                  src="https://images.pexels.com/photos/6990569/pexels-photo-6990569.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="A teacher guides two children in a geography lesson"
                  loading="lazy"
                  className="mode-image"
                />
                <div className="mode-overlay"></div>
              </div>
              <div className="mode-content">
                <div className="mode-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M14 21v-3a2 2 0 0 0-4 0v3m8-16v16M4 6l7.106-3.79a2 2 0 0 1 1.788 0L20 6"></path>
                      <path d="m6 11l-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11M6 5v16"></path>
                      <circle cx="12" cy="9" r="2"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="mode-title">In-Person Sessions</h3>
                <p className="mode-description">
                  {' '}
                  Face-to-face focused concept-building with certified local
                  tutors and personalized attention.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="mode-features">
                  <span className="mode-tag">Personal Attention</span>
                  <span className="mode-tag">Hands-on Learning</span>
                </div>
              </div>
            </div>
            <div className="mode-card">
              <div className="mode-visual">
                <img
                  src="https://images.pexels.com/photos/5676666/pexels-photo-5676666.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Young adults collaborating over laptops and notes during a study session"
                  loading="lazy"
                  className="mode-image"
                />
                <div className="mode-overlay"></div>
              </div>
              <div className="mode-content">
                <div className="mode-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                      <rect width="14" height="12" x="2" y="6" rx="2"></rect>
                    </g>
                  </svg>
                </div>
                <h3 className="mode-title">Hybrid Approach</h3>
                <p className="mode-description">
                  {' '}
                  Curated combination of online and offline sessions that
                  alternates to reinforce learning and exam preparation.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="mode-features">
                  <span className="mode-tag">Flexible Schedule</span>
                  <span className="mode-tag">Best of Both</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="assessments-progress">
        <div className="section-container1">
          <header className="section-header1">
            <h2 className="section-title">
              Assessments &amp; Progress Tracking
            </h2>
            <p className="section-subtitle">
              {' '}
              Comprehensive evaluation and progress monitoring to ensure
              consistent academic advancement.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </header>
          <div className="assessment-grid1">
            <div className="assessment-card1">
              <div className="assessment-header">
                <div className="assessment-icon1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
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
                <h3 className="assessment-title">Precision Assessments</h3>
              </div>
              <p className="assessment-description">
                {' '}
                Regular, syllabus-aligned mock tests designed to mirror board
                and competitive exam conditions, giving students measurable
                benchmarks for readiness and resilience.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="assessment-metrics">
                <div className="metric">
                  <span className="metric-value">Weekly</span>
                  <span className="metric-label">Mock Tests</span>
                </div>
                <div className="metric">
                  <span className="metric-value">Board-Aligned</span>
                  <span className="metric-label">Question Patterns</span>
                </div>
              </div>
            </div>
            <div className="assessment-card1">
              <div className="assessment-header">
                <div className="assessment-icon1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
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
                <h3 className="assessment-title">Data-Driven Tracking</h3>
              </div>
              <p className="assessment-description">
                {' '}
                Individual learning dashboards display mastery maps,
                time-on-task analytics, and skill-gap indicators—empowering
                tutors, students and parents with clear, actionable insights.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="assessment-metrics">
                <div className="metric">
                  <span className="metric-value">Real-time</span>
                  <span className="metric-label">Analytics</span>
                </div>
                <div className="metric">
                  <span className="metric-value">Skill Mapping</span>
                  <span className="metric-label">Progress Views</span>
                </div>
              </div>
            </div>
            <div className="assessment-card1">
              <div className="assessment-header">
                <div className="assessment-icon1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
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
                <h3 className="assessment-title">Monthly Reports</h3>
              </div>
              <p className="assessment-description">
                {' '}
                Concise, professional reports summarizing test outcomes,
                conceptual strengths, areas for improvement, and recommended
                next steps—formatted for easy review by busy parents.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="assessment-metrics">
                <div className="metric">
                  <span className="metric-value">Detailed</span>
                  <span className="metric-label">Analysis</span>
                </div>
                <div className="metric">
                  <span className="metric-value">Action Plans</span>
                  <span className="metric-label">Next Steps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="foundation-skills">
        <div className="section-container1">
          <header className="section-header1">
            <h2 className="section-title">
              {' '}
              Foundation &amp; Soft Skills — Building Competence, Confidence,
              Career-Ready Minds
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="section-subtitle">
              {' '}
              Practical abilities that complement academic excellence and
              accelerate real-world success.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </header>
          <div className="skills-grid1">
            <div className="skill-card1">
              <div className="skill-visual">
                <img
                  src="https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="A child participating in an online class at home"
                  loading="lazy"
                  className="skill-image"
                />
                <div className="skill-overlay">
                  <div className="skill-icon1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
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
                </div>
              </div>
              <div className="skill-content">
                <h3 className="skill-title">Basics of Computer</h3>
                <p className="skill-description">
                  {' '}
                  Practical digital fluency from day one — operating systems,
                  productivity suites, secure online practices and project-based
                  application.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <ul className="skill-features">
                  <li>
                    <span>Digital literacy essentials</span>
                  </li>
                  <li>
                    <span>Productivity software mastery</span>
                  </li>
                  <li>
                    <span>Online safety &amp; security</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="skill-card1">
              <div className="skill-visual">
                <img
                  src="https://images.pexels.com/photos/5538357/pexels-photo-5538357.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Two students working together outside"
                  loading="lazy"
                  className="skill-image"
                />
                <div className="skill-overlay">
                  <div className="skill-icon1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
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
                </div>
              </div>
              <div className="skill-content">
                <h3 className="skill-title">Communication Skills</h3>
                <p className="skill-description">
                  {' '}
                  Structured modules in pronunciation, vocabulary, presentation,
                  interpersonal communication and professional writing.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <ul className="skill-features">
                  <li>
                    <span>Spoken English fluency</span>
                  </li>
                  <li>
                    <span>Presentation skills</span>
                  </li>
                  <li>
                    <span>Professional writing</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="skill-card1">
              <div className="skill-visual">
                <img
                  src="https://images.pexels.com/photos/5940719/pexels-photo-5940719.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Group of students discussing a project in a library setting"
                  loading="lazy"
                  className="skill-image"
                />
                <div className="skill-overlay">
                  <div className="skill-icon1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="skill-content">
                <h3 className="skill-title">Study &amp; Soft Skills</h3>
                <p className="skill-description">
                  {' '}
                  Evidence-based techniques for effective learning — time
                  management, note-taking, critical thinking, and leadership
                  development.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <ul className="skill-features">
                  <li>
                    <span>Learning strategies</span>
                  </li>
                  <li>
                    <span>Time management</span>
                  </li>
                  <li>
                    <span>Leadership development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="professional-certification">
        <div className="section-container1">
          <header className="section-header1">
            <h2 className="section-title">
              {' '}
              Professional Certification — Career-ready, Credible, Practical
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="section-subtitle">
              {' '}
              Industry-aligned, non-technical qualifications that translate
              directly into career advantage.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </header>
          <div className="certification-layout">
            <div className="certification-content">
              <div className="certification-overview">
                <h3 className="overview-title">Focused Career Tracks</h3>
                <div className="tracks-grid1">
                  <div className="track-item">
                    <div className="track-icon1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
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
                    <div className="track-content">
                      <h4 className="track-title1">
                        HR &amp; Talent Management
                      </h4>
                      <p className="track-description1">
                        {' '}
                        Comprehensive human resources fundamentals with
                        practical application.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="track-item">
                    <div className="track-icon1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
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
                    <div className="track-content">
                      <h4 className="track-title1">Finance &amp; Accounting</h4>
                      <p className="track-description1">
                        {' '}
                        Essential financial principles and accounting practices
                        for business.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="track-item">
                    <div className="track-icon1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
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
                    <div className="track-content">
                      <h4 className="track-title1">Marketing &amp; Strategy</h4>
                      <p className="track-description1">
                        {' '}
                        Strategic marketing concepts and business development
                        skills.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="track-item">
                    <div className="track-icon1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        >
                          <rect width="14" height="8" x="5" y="2" rx="2"></rect>
                          <rect
                            width="20"
                            height="8"
                            x="2"
                            y="14"
                            rx="2"
                          ></rect>
                          <path d="M6 18h2m4 0h6"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="track-content">
                      <h4 className="track-title1">Office Administration</h4>
                      <p className="track-description1">
                        {' '}
                        Professional business communication and administrative
                        excellence.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="certification-benefits">
                <h3 className="benefits-title">What You Gain</h3>
                <ul className="benefits-list">
                  <li className="benefit-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M12 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></path>
                        <path d="M13 17.5V22l2-1.5l2 1.5v-4.5"></path>
                        <path d="M10 19H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-1 1.73M6 9h12M6 12h3m-3 3h2"></path>
                      </g>
                    </svg>
                    <span>Industry-recognized digital certificates</span>
                  </li>
                  <li className="benefit-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
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
                    <span>Job-ready skillsets with practical applications</span>
                  </li>
                  <li className="benefit-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
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
                    <span>90-day post-completion mentorship support</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="certification-visual">
              <img
                src="https://images.pexels.com/photos/5940839/pexels-photo-5940839.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                alt="Diverse college students studying together in a library"
                loading="lazy"
                className="cert-image"
              />
              <div className="cert-overlay"></div>
              <div className="cert-stats">
                <div className="cert-stat">
                  <div className="stat-number1">
                    <span>95%</span>
                  </div>
                  <div className="stat-label1">
                    <span>Job Placement Rate</span>
                  </div>
                </div>
                <div className="cert-stat">
                  <div className="stat-number1">
                    <span>6 Months</span>
                  </div>
                  <div className="stat-label1">
                    <span>Average Program Duration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mentorship-support">
        <div className="section-container1">
          <header className="section-header1">
            <h2 className="section-title">
              {' '}
              Mentorship &amp; Support — Dedicated Guidance for Every Student
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="section-subtitle">
              {' '}
              Personalized mentorship with structured goal setting and
              continuous support throughout your learning journey.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </header>
          <div className="mentorship-grid1">
            <div className="mentorship-card">
              <div className="mentor-visual">
                <img
                  src="https://images.pexels.com/photos/4143800/pexels-photo-4143800.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="A young girl smiling while studying online at home"
                  loading="lazy"
                  className="mentor-image"
                />
                <div className="mentor-overlay"></div>
                <div className="mentor-icon1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
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
              </div>
              <div className="mentor-content">
                <h3 className="mentor-title">Personal Mentors</h3>
                <p className="mentor-description">
                  {' '}
                  Every learner is paired with a seasoned mentor who builds a
                  tailored learning roadmap and adapts teaching strategies as
                  progress evolves.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="mentor-features">
                  <div className="feature-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
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
                    <span>Customized learning plans</span>
                  </div>
                  <div className="feature-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M8 2v4m8-4v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </g>
                    </svg>
                    <span>Regular progress reviews</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mentorship-card">
              <div className="mentor-visual">
                <img
                  src="https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Brother and sister studying together at home"
                  loading="lazy"
                  className="mentor-image"
                />
                <div className="mentor-overlay"></div>
                <div className="mentor-icon1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
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
              </div>
              <div className="mentor-content">
                <h3 className="mentor-title">Goal Setting</h3>
                <p className="mentor-description">
                  {' '}
                  Collaborative diagnostic and goal-setting sessions that define
                  short-, mid- and long-term milestones with clear action steps
                  and timelines.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="mentor-features">
                  <div className="feature-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
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
                    <span>Measurable milestones</span>
                  </div>
                  <div className="feature-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      ></path>
                      <span>Success tracking</span>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mentorship-card">
              <div className="mentor-visual">
                <img
                  src="https://images.pexels.com/photos/4144096/pexels-photo-4144096.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Teenage boy engaged in online learning using a tablet"
                  loading="lazy"
                  className="mentor-image"
                />
                <div className="mentor-overlay"></div>
                <div className="mentor-icon1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
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
              </div>
              <div className="mentor-content">
                <h3 className="mentor-title">Continuous Support</h3>
                <p className="mentor-description">
                  {' '}
                  Regular touchpoints with weekly check-ins, instant query
                  resolution, and scheduled parent-mentor consultations for
                  transparent communication.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="mentor-features">
                  <div className="feature-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M8 2v4m8-4v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </g>
                    </svg>
                    <span>24/7 query support</span>
                  </div>
                  <div className="feature-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
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
                    <span>Parent consultations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mentorship-cta">
            <div className="cta-content">
              <h3 className="cta-title">
                Ready to Start Your Learning Journey?
              </h3>
              <p className="cta-description">
                {' '}
                Join thousands of students who have achieved academic excellence
                with Aviya Magnus.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <button className="btn btn-primary btn-lg">
                Book Free Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div
          aria-label="Sign up to TeleportHQ"
          className="tutoring-programs-container8"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="tutoring-programs-icon214"
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
          <span className="tutoring-programs-text45">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default TutoringPrograms
