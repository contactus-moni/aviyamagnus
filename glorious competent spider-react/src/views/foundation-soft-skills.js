import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './foundation-soft-skills.css'

const FoundationSoftSkills = (props) => {
  return (
    <div className="foundation-soft-skills-container10">
      <Helmet>
        <title>Foundation-Soft-Skills - Glorious Competent Spider</title>
        <meta
          property="og:title"
          content="Foundation-Soft-Skills - Glorious Competent Spider"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="foundation-soft-skills-container11">
        <div className="foundation-soft-skills-container12">
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
      <div className="foundation-soft-skills-container13">
        <div className="foundation-soft-skills-container14">
          <Script
            html={`<script defer data-name="foundation-soft-skills">
(function(){
  // Smooth scroll animations for elements entering viewport
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation =
          "fadeInUp var(--animation-duration-standard) var(--animation-curve-primary) both"
      }
    })
  }, observerOptions)

  // Observe all major sections
  const sectionsToAnimate = document.querySelectorAll(
    ".learning-feature, .tracking-feature, .pathway-card, .skill-highlight, .benefit-item"
  )
  sectionsToAnimate.forEach((section) => {
    observer.observe(section)
  })

  // Form handling
  const enrollmentForm = document.querySelector(".enrollment-form")
  if (enrollmentForm) {
    enrollmentForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
      const formData = new FormData(enrollmentForm)
      const name = formData.get("name")
      const email = formData.get("email")
      const phone = formData.get("phone")
      const course = formData.get("course")

      // Basic validation
      if (!name || !email || !phone || !course) {
        alert("Please fill in all required fields.")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.")
        return
      }

      // Success message (in real implementation, this would submit to server)
      alert(
        \`Thank you, \${name}! We'll contact you soon at \${email} to schedule your free demo for \${course}.\`
      )
      enrollmentForm.reset()
    })
  }

  // Enhanced hover effects for skill cards
  const skillCards = document.querySelectorAll(".skill-card")
  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)"
      this.style.boxShadow = "var(--shadow-level-3)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
      this.style.boxShadow = "var(--shadow-level-2)"
    })
  })

  // Parallax effect for hero video
  let ticking = false

  function updateParallax() {
    const scrolled = window.pageYOffset
    const heroVideo = document.querySelector(".hero-background video")

    if (heroVideo) {
      const parallaxSpeed = 0.5
      const yPos = -(scrolled * parallaxSpeed)
      heroVideo.style.transform = \`translate3d(0, \${yPos}px, 0)\`
    }

    ticking = false
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax)
      ticking = true
    }
  }

  window.addEventListener("scroll", requestTick)

  // Course selection enhancement
  const courseSelect = document.getElementById("course-interest")
  if (courseSelect) {
    courseSelect.addEventListener("change", function () {
      const selectedOption = this.options[this.selectedIndex]
      if (selectedOption.value) {
        this.style.borderColor = "var(--color-primary)"
        this.style.backgroundColor =
          "color-mix(in srgb, var(--color-primary) 5%, var(--color-surface))"
      }
    })
  }

  // Loading states for buttons
  const ctaButtons = document.querySelectorAll(".btn-primary, .btn-outline")
  ctaButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.type !== "submit") {
        const originalText = this.textContent
        this.textContent = "Loading..."
        this.disabled = true

        setTimeout(() => {
          this.textContent = originalText
          this.disabled = false
        }, 2000)
      }
    })
  })

  // Progressive image loading
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })

    // Fade in effect
    img.style.opacity = "0"
    img.style.transition =
      "opacity var(--animation-duration-standard) var(--animation-curve-primary)"
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <section id="hero-section" className="foundation-hero">
        <div className="hero-background">
          <video
            autoPlay="true"
            muted="true"
            loop="true"
            src="https://videos.pexels.com/video-files/6985311/6985311-hd_1280_720_50fps.mp4"
          ></video>
          <div className="hero-overlay2"></div>
        </div>
        <div className="hero-content2">
          <div className="hero-text2">
            <h1 className="hero-title">
              <span>
                {' '}
                Build enduring confidence.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                {' '}
                Master essential skills.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h1>
            <p className="hero-subtitle">
              {' '}
              Aviya Magnus Foundation &amp; Soft Skills: concise, practical
              courses in Basics of Computer, Spoken English &amp; Communication,
              and Study &amp; Soft Skills—designed to strengthen core
              competencies for academic success and professional readiness.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="hero-grid">
            <div className="skill-card2">
              <div className="skill-icon2">
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
                Essential digital literacy for modern academic and professional
                environments
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="skill-card2">
              <div className="skill-icon2">
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
                Clear, confident expression for interviews, presentations, and
                workplace success
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="skill-card2">
              <div className="skill-icon2">
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
              <h3>Study Skills &amp; Soft Skills</h3>
              <p>
                {' '}
                Strategic learning frameworks and interpersonal skills for
                lifelong success
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="skill-card2 highlight-card">
              <div className="skill-icon2">
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
              <h3>Structured for measurable progress</h3>
              <p>
                {' '}
                Focused lessons, real-world practice, and mentor-led feedback
                that turn capability into confidence
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
      <section id="foundation-courses" className="foundation-courses">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {' '}
              Foundation Courses — Core competencies, professionally delivered
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="section-subtitle">
              {' '}
              Practical, structured modules that build digital fluency,
              confident communication and effective learning habits for learners
              at every stage.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="courses-layout">
            <div className="courses-content">
              <div className="course-block">
                <div className="course-image">
                  <img
                    src="https://images.pexels.com/photos/14382529/pexels-photo-14382529.jpeg"
                    alt="Hands-on computer skills training"
                  />
                </div>
                <div className="course-info">
                  <h3>Basics of Computer — Practical digital literacy</h3>
                  <p>
                    {' '}
                    Hands-on modules covering operating systems, file
                    management, productivity software (word processing,
                    spreadsheets, presentations), internet safety and
                    collaboration tools. Courses are outcome-focused, with
                    real-world exercises, graded assignments and a certificate
                    of completion aligned to workplace expectations.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="course-block">
                <div className="course-image">
                  <img
                    src="https://images.pexels.com/photos/9034219/pexels-photo-9034219.jpeg"
                    alt="Professional communication training"
                  />
                </div>
                <div className="course-info">
                  <h3>
                    {' '}
                    Spoken English &amp; Communication — Clear, confident
                    expression
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <p>
                    {' '}
                    A progressive curriculum that strengthens pronunciation,
                    vocabulary, grammar in context, presentation skills,
                    business correspondence and interpersonal communication.
                    Lessons include live practice sessions, recorded feedback,
                    role-plays and measurable fluency milestones designed for
                    academic, interview and workplace success.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="course-block">
                <div className="course-image">
                  <img
                    src="https://images.pexels.com/photos/6326067/pexels-photo-6326067.jpeg"
                    alt="Study skills and soft skills training"
                  />
                </div>
                <div className="course-info">
                  <h3>
                    {' '}
                    Study Skills &amp; Soft Skills — Strategic learning and
                    professional presence
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <p>
                    {' '}
                    Evidence-based techniques for note-taking, time management,
                    exam strategy, critical thinking and problem solving, plus
                    workplace-ready soft skills such as teamwork, emotional
                    intelligence, professional etiquette and resilience. Each
                    module combines micro-learning, applied projects and
                    mentor-led feedback to convert theory into dependable
                    performance.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="courses-sidebar">
              <div className="enrollment-card">
                <h4>What you&apos;ll gain</h4>
                <ul>
                  <li>
                    <span>
                      Measurable competencies and career-ready confidence
                    </span>
                  </li>
                  <li>
                    <span>
                      Clear learning objectives with monthly progress reports
                    </span>
                  </li>
                  <li>
                    <span>
                      Practical assessments and verifiable certificates
                    </span>
                  </li>
                  <li>
                    <span>Tailored individual starting points</span>
                  </li>
                </ul>
                <button className="btn btn-primary">Explore Courses</button>
              </div>
              <div className="target-audience">
                <h4>Who it&apos;s for</h4>
                <p>
                  {' '}
                  Students, early-career professionals and lifelong learners
                  seeking reliable, high-impact skill-building that translates
                  to better academic outcomes and workplace advantage.
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
      </section>
      <section id="blended-learning" className="blended-learning">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {' '}
              Blended Learning Approach — Precision, Flexibility, Results
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="section-subtitle">
              {' '}
              A premium hybrid model that combines the structure and
              accountability of in-person tuition with the convenience and
              personalization of online instruction.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="learning-grid">
            <div className="learning-feature">
              <div className="feature-icon">
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
              <h3>Personalized Learning Plan</h3>
              <p>
                {' '}
                We assess skill level and goals, then prescribe an optimal mix
                of offline and online hours, practice modules, and mentor
                check-ins.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="feature-image">
                <img
                  src="https://images.pexels.com/photos/6517084/pexels-photo-6517084.jpeg"
                  alt="Personalized learning approach"
                />
              </div>
            </div>
            <div className="learning-feature">
              <div className="feature-icon">
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
              <h3>Synchronous Mastery Sessions</h3>
              <p>
                {' '}
                Small-group or one-to-one live classes focus on concept clarity,
                active practice, and immediate feedback.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="feature-image">
                <img
                  src="https://images.pexels.com/photos/16385072/pexels-photo-16385072.jpeg"
                  alt="Live learning sessions"
                />
              </div>
            </div>
            <div className="learning-feature">
              <div className="feature-icon">
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
                    <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                    <circle cx="12" cy="8" r="6"></circle>
                  </g>
                </svg>
              </div>
              <h3>Built for accountability</h3>
              <p>
                {' '}
                Regular formative assessments, monthly performance reports, and
                mentor-led review sessions keep learners on track with
                measurable progress.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="feature-image">
                <img
                  src="https://images.pexels.com/photos/17501008/pexels-photo-17501008.jpeg"
                  alt="Accountability and progress tracking"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="soft-skills" className="soft-skills">
        <div className="container">
          <div className="skills-content">
            <div className="skills-text">
              <h2 className="section-title">
                {' '}
                Master the interpersonal and cognitive skills that distinguish
                top performers
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <p className="section-content">
                {' '}
                Our Soft Skills &amp; Study Skills program develops clear
                communication, strategic study planning, efficient time
                management, and confident test readiness—delivered with the same
                rigor and accountability as a professional development course.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="skills-benefits">
                <div className="benefit-item1">
                  <h4>What you&apos;ll gain</h4>
                  <p>
                    {' '}
                    Practical communication techniques for presentations and
                    interviews; structured study frameworks that convert
                    syllabus into achievable milestones; prioritization and
                    time-blocking methods to maximize focus.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="benefit-item1">
                  <h4>Instructional approach</h4>
                  <p>
                    {' '}
                    Short, skills-focused modules led by experienced educators
                    and industry mentors; real-world practice through graded
                    simulations and peer reviews; measurable outcomes tracked
                    with progress reports.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="benefit-item1">
                  <h4>Get started</h4>
                  <p>
                    {' '}
                    Select a modular pathway—Communication Mastery, Study
                    Strategy &amp; Time Management, or Exam Readiness—or combine
                    modules for a tailored program.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="skills-visual">
              <div className="skills-grid2">
                <div className="skill-highlight">
                  <img
                    src="https://images.pexels.com/photos/8761347/pexels-photo-8761347.jpeg"
                    alt="Professional communication skills"
                  />
                  <div className="skill-overlay1">
                    <h4>Communication Mastery</h4>
                    <p>
                      {' '}
                      Presentation skills, business correspondence,
                      interpersonal communication
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className="skill-highlight">
                  <img
                    src="https://images.pexels.com/photos/6340675/pexels-photo-6340675.jpeg"
                    alt="Strategic study planning"
                  />
                  <div className="skill-overlay1">
                    <h4>Study Strategy</h4>
                    <p>
                      {' '}
                      Time management, note-taking, exam strategy, critical
                      thinking
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className="skill-highlight">
                  <img
                    src="https://images.pexels.com/photos/1181397/pexels-photo-1181397.jpeg"
                    alt="Professional development"
                  />
                  <div className="skill-overlay1">
                    <h4>Professional Presence</h4>
                    <p>
                      {' '}
                      Workplace etiquette, emotional intelligence, teamwork,
                      resilience
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
          </div>
        </div>
      </section>
      <section id="progress-tracking" className="progress-tracking">
        <div className="container">
          <div className="tracking-header">
            <h2 className="section-title">
              Personal mentorship, measurable growth
            </h2>
            <p className="section-subtitle">
              {' '}
              Each learner is paired with a dedicated mentor who translates
              assessment data into a clear, actionable development plan—aligned
              to academic goals, board requirements, and career ambitions.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="tracking-grid">
            <div className="tracking-feature">
              <div className="feature-visual">
                <img
                  src="https://images.pexels.com/photos/9301156/pexels-photo-9301156.jpeg"
                  alt="Regular feedback sessions"
                />
                <div className="feature-icon">
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
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="feature-content">
                <h3>Regular, transparent feedback</h3>
                <p>
                  {' '}
                  Weekly progress briefs and monthly performance reports track
                  concept mastery, skill development, and exam readiness.
                  Reports include objective metrics, annotated strengths &amp;
                  gaps, and prioritized next steps.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="tracking-feature">
              <div className="feature-visual">
                <img
                  src="https://images.pexels.com/photos/8369692/pexels-photo-8369692.jpeg"
                  alt="Goal-driven review cycles"
                />
                <div className="feature-icon">
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
              </div>
              <div className="feature-content">
                <h3>Goal-driven review cycles</h3>
                <p>
                  {' '}
                  Mentors conduct structured review sessions to set S.M.A.R.T.
                  short- and long-term goals, adjust learning pathways, and
                  prescribe focused practice—ensuring steady, evidence-based
                  improvement.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="tracking-feature">
              <div className="feature-visual">
                <img
                  src="https://images.pexels.com/photos/9301152/pexels-photo-9301152.jpeg"
                  alt="Outcome-focused mentorship"
                />
                <div className="feature-icon">
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
                      <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="feature-content">
                <h3>Outcome-focused mentorship</h3>
                <p>
                  {' '}
                  Beyond academics, mentors coach study habits, communication
                  confidence, and workplace-ready soft skills—turning progress
                  data into tangible outcomes for school performance and career
                  readiness.
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
      </section>
      <section id="learning-pathways" className="learning-pathways">
        <div className="container">
          <div className="pathways-header">
            <h2 className="section-title">
              Clear, outcome-driven learning pathways
            </h2>
            <p className="section-subtitle">
              {' '}
              Sequenced courses that move learners from foundational competence
              to recognised professional certification, aligned with academic
              aims and career objectives.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="pathways-grid">
            <div className="pathway-card">
              <div className="pathway-header">
                <div className="pathway-icon">
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
                <h3>Academic Readiness</h3>
              </div>
              <div className="pathway-content">
                <p>
                  {' '}
                  Foundation skills + exam-focused study strategies for school
                  and college success
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <ul>
                  <li>
                    <span>Computer basics &amp; digital literacy</span>
                  </li>
                  <li>
                    <span>Communication skills for academic settings</span>
                  </li>
                  <li>
                    <span>Strategic study techniques</span>
                  </li>
                  <li>
                    <span>Exam preparation &amp; test-taking strategies</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pathway-card">
              <div className="pathway-header">
                <div className="pathway-icon">
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
                <h3>Career Launch</h3>
              </div>
              <div className="pathway-content">
                <p>
                  {' '}
                  Communication, digital basics, and entry-level business
                  certifications
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <ul>
                  <li>
                    <span>Professional communication skills</span>
                  </li>
                  <li>
                    <span>Business software proficiency</span>
                  </li>
                  <li>
                    <span>Workplace soft skills</span>
                  </li>
                  <li>
                    <span>Industry-ready certifications</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pathway-card">
              <div className="pathway-header">
                <div className="pathway-icon">
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
                      <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </g>
                  </svg>
                </div>
                <h3>Professional Advancement</h3>
              </div>
              <div className="pathway-content">
                <p>
                  {' '}
                  Specialised non-technical certifications in HR, Finance,
                  Marketing, Office Administration
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <ul>
                  <li>
                    <span>Advanced communication &amp; leadership</span>
                  </li>
                  <li>
                    <span>Specialized business skills</span>
                  </li>
                  <li>
                    <span>Professional certifications</span>
                  </li>
                  <li>
                    <span>Career advancement strategies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="certification-features">
            <div className="feature-highlight">
              <h4>Rigorous certification standards</h4>
              <p>
                {' '}
                Professional certificates combine instructor-led modules,
                capstone assessments, and performance-based evaluations.
                Certificates are awarded only after competency benchmarks are
                met—documented by mock-test results, mentor reviews, and a
                verified capstone project.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="feature-highlight">
              <h4>Industry-relevant capstones</h4>
              <p>
                {' '}
                Certification pathways culminate in applied projects—mock HR
                cases, financial analysis briefs, business strategy plans, or
                professional communication portfolios—crafted to demonstrate
                real-world competence.
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
      <section id="enrollment-cta" className="enrollment-cta">
        <div className="container">
          <div className="cta-content1">
            <div className="cta-text">
              <h2 className="section-title">
                {' '}
                Start building core competencies with confidence
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <p className="section-subtitle">
                {' '}
                Enroll now or book a free demo class to experience our
                Foundation &amp; Soft Skills training firsthand.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="cta-features">
                <div className="cta-feature">
                  <div className="feature-icon">
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
                        <path d="M8 2v4m8-4v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>Schedule a trial</h4>
                    <p>
                      {' '}
                      30-minute personalized demo to assess fit, pace, and
                      learning goals. Suitable for students, college learners,
                      and professionals.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className="cta-feature">
                  <div className="feature-icon">
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
                        d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
                      ></path>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>Enroll with assurance</h4>
                    <p>
                      {' '}
                      Flexible schedules, certified instructors, performance
                      tracking, and a clear learning plan tailored to your
                      objectives.
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
            <div className="cta-form">
              <div className="form-container">
                <h3>Get Started Today</h3>
                <form className="enrollment-form">
                  <div className="form-group">
                    <label htmlFor="student-name">Full Name</label>
                    <input
                      type="text"
                      id="student-name"
                      name="true"
                      required="true"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="student-email">Email Address</label>
                    <input
                      type="email"
                      id="student-email"
                      name="email"
                      required="true"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="student-phone">Phone Number</label>
                    <input
                      type="tel"
                      id="student-phone"
                      name="phone"
                      required="true"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="course-interest">Course Interest</label>
                    <select id="course-interest" name="course" required="true">
                      <option value="true">Select a course</option>
                      <option value="computer-basics">
                        Basics of Computer
                      </option>
                      <option value="english-communication">
                        {' '}
                        Spoken English &amp; Communication
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </option>
                      <option value="study-skills">
                        Study Skills &amp; Soft Skills
                      </option>
                      <option value="all-courses">
                        All Foundation Courses
                      </option>
                    </select>
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                      {' '}
                      Book Free Demo
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </button>
                    <button type="button" className="btn btn-outline">
                      Enroll Now
                    </button>
                  </div>
                </form>
                <div className="contact-note">
                  <p>
                    {' '}
                    Need guidance? Contact our enrollment team for course
                    selection support and a complimentary progress roadmap.
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
        </div>
      </section>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div
          aria-label="Sign up to TeleportHQ"
          className="foundation-soft-skills-container21"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="foundation-soft-skills-icon67"
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
          <span className="foundation-soft-skills-text89">
            Built in TeleportHQ
          </span>
        </div>
      </a>
    </div>
  )
}

export default FoundationSoftSkills
