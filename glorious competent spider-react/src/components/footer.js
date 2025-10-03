import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<script defer data-name="footer">
(function(){
  // Newsletter form submission
  const newsletterForm = document.querySelector(".footer__newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector(".footer__newsletter-input").value
      const button = this.querySelector(".footer__newsletter-btn")

      if (email) {
        const originalText = button.textContent
        button.textContent = "Subscribing..."
        button.disabled = true

        // Simulate subscription process
        setTimeout(() => {
          button.textContent = "Subscribed!"
          button.style.background = "var(--color-accent)"

          setTimeout(() => {
            button.textContent = originalText
            button.disabled = false
            button.style.background = ""
            this.querySelector(".footer__newsletter-input").value = ""
          }, 2000)
        }, 1000)
      }
    })
  }

  // Social links tracking
  const socialLinks = document.querySelectorAll(".footer__social-link")
  socialLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const platform = this.getAttribute("aria-label")
      console.log(\`Social link clicked: \${platform}\`)
    })
  })

  // Smooth hover animations for trust badges
  const trustBadges = document.querySelectorAll(".footer__badge")
  trustBadges.forEach((badge) => {
    badge.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(4px) scale(1.02)"
    })

    badge.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(4px)"
    })
  })

  // Contact item interaction enhancement
  const contactItems = document.querySelectorAll(".footer__contact-item")
  contactItems.forEach((item) => {
    item.addEventListener("click", function () {
      const text = this.querySelector("span").textContent
      if (text.includes("@")) {
        window.location.href = \`mailto:\${text}\`
      } else if (text.includes("+")) {
        window.location.href = \`tel:\${text.replace(/\s/g, "")}\`
      }
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <footer className="footer">
        <div className="footer__gradient-overlay"></div>
        <div className="footer__pattern-layer"></div>
        <div className="footer__container">
          <div className="footer__main">
            <div className="footer__brand">
              <div className="footer__logo-container">
                <div className="footer__logo-icon">
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
                <h2 className="footer__logo-text">Aviya Magnus</h2>
              </div>
              <p className="footer__brand-description">
                {' '}
                Empowering learners of all ages with personalized education that
                builds knowledge, skills, and confidence for academic and life
                success.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="footer__trust-badges">
                <div className="footer__badge">
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
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                  <span>Certified Platform</span>
                </div>
                <div className="footer__badge">
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
                  <span>Award Winning</span>
                </div>
                <div className="footer__badge">
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
                  <span>10,000+ Students</span>
                </div>
              </div>
            </div>
            <div className="footer__navigation">
              <div className="footer__nav-column">
                <h3 className="footer__nav-title">Education Programs</h3>
                <ul className="footer__nav-list">
                  <li>
                    <a href="/tutoring-programs">
                      <div className="footer__nav-link">
                        <span>
                          {' '}
                          Primary Education
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/tutoring-programs">
                      <div className="footer__nav-link">
                        <span>
                          {' '}
                          Secondary Education
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/tutoring-programs">
                      <div className="footer__nav-link">
                        <span>
                          {' '}
                          Higher Secondary
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/tutoring-programs">
                      <div className="footer__nav-link">
                        <span>
                          {' '}
                          CBSE &amp; ICSE
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/tutoring-programs">
                      <div className="footer__nav-link">
                        <span>
                          {' '}
                          IB &amp; IGCSE
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/tutoring-programs">
                      <div className="footer__nav-link">
                        <span>
                          {' '}
                          State Boards
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__nav-column">
                <h3 className="footer__nav-title">
                  Skills &amp; Certification
                </h3>
                <ul className="footer__nav-list">
                  <li>
                    <a href="/foundation-soft-skills">
                      <div className="footer__nav-link">
                        <span>
                          {' '}
                          Computer Basics
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/foundation-soft-skills">
                      <div className="footer__nav-link">
                        <span>
                          {' '}
                          Spoken English
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/foundation-soft-skills">
                      <div className="footer__nav-link">
                        <span>
                          {' '}
                          Communication Skills
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/foundation-soft-skills">
                      <div className="footer__nav-link">
                        <span>
                          {' '}
                          Study Skills
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/foundation-soft-skills">
                      <div className="footer__nav-link">
                        <span>
                          {' '}
                          HR Certification
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/foundation-soft-skills">
                      <div className="footer__nav-link">
                        <span>
                          {' '}
                          Finance &amp; Accounting
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__nav-column">
                <h3 className="footer__nav-title">Professional Courses</h3>
                <ul className="footer__nav-list">
                  <li>
                    <a href="/foundation-soft-skills">
                      <div className="footer__nav-link">
                        <span>
                          {' '}
                          Banking Services
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/foundation-soft-skills">
                      <div className="footer__nav-link">
                        <span>
                          {' '}
                          Marketing Strategy
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/foundation-soft-skills">
                      <div className="footer__nav-link">
                        <span>
                          {' '}
                          Business Communication
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/foundation-soft-skills">
                      <div className="footer__nav-link">
                        <span>
                          {' '}
                          Office Administration
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer__nav-link">
                        <span>Career Coaching</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer__nav-link">
                        <span>Skill Assessment</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__nav-column">
                <h3 className="footer__nav-title">Support &amp; Resources</h3>
                <ul className="footer__nav-list">
                  <li>
                    <a href="#">
                      <div className="footer__nav-link">
                        <span>Mock Tests</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer__nav-link">
                        <span>Performance Tracking</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer__nav-link">
                        <span>Progress Reviews</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer__nav-link">
                        <span>Personal Mentorship</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer__nav-link">
                        <span>Learning Camps</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer__nav-link">
                        <span>Academic Reports</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__contact">
              <h3 className="footer__contact-title">Get In Touch</h3>
              <div className="footer__contact-info">
                <div className="footer__contact-item">
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
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </g>
                  </svg>
                  <span>
                    123 Education Street, Learning District, City 12345
                  </span>
                </div>
                <div className="footer__contact-item">
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
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                    ></path>
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="footer__contact-item">
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
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    </g>
                  </svg>
                  <span>info@aviyamagnus.edu</span>
                </div>
              </div>
              <div className="footer__newsletter">
                <h4 className="footer__newsletter-title">Stay Updated</h4>
                <p className="footer__newsletter-desc">
                  {' '}
                  Get educational insights and course updates delivered to your
                  inbox.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <form className="footer__newsletter-form">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required="true"
                    className="footer__newsletter-input"
                  />
                  <button
                    type="submit"
                    className="footer__newsletter-btn btn btn-primary"
                  >
                    {' '}
                    Subscribe
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </form>
              </div>
              <div className="footer__social">
                <h4 className="footer__social-title">Follow Us</h4>
                <div className="footer__social-links">
                  <a href="#">
                    <div aria-label="Facebook" className="footer__social-link">
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
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Twitter" className="footer__social-link">
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
                          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="LinkedIn" className="footer__social-link">
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
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                          <circle cx="4" cy="4" r="2"></circle>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Instagram" className="footer__social-link">
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
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="YouTube" className="footer__social-link">
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
                          <path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                          <path d="m10 15l5-3l-5-3z"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom-content">
              <div className="footer__legal">
                <p className="footer__copyright">
                  {' '}
                  &amp;copy; 2025 Aviya Magnus. All rights reserved.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="footer__legal-links">
                  <a href="#">
                    <div className="footer__legal-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer__legal-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer__legal-link">
                      <span>Cookie Policy</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer__legal-link">
                      <span>Accessibility</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer__certifications">
                <span className="footer__cert-text">Accredited by:</span>
                <div className="footer__cert-badges">
                  <span className="footer__cert-badge">Education Board</span>
                  <span className="footer__cert-badge">ISO 9001:2015</span>
                  <span className="footer__cert-badge">Quality Assured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
