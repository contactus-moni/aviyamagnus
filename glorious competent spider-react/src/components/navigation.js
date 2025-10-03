import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
        @keyframes logoFloat {0%,100% {transform: translateY(0px) rotate(0deg);}
50% {transform: translateY(-2px) rotate(5deg);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation">
(function(){
  const navigationToggle = document.getElementById("navigationToggle")
  const navigationMobileMenu = document.getElementById("navigationMobileMenu")
  const navigation = document.querySelector(".navigation")

  // Mobile menu toggle functionality
  if (navigationToggle && navigationMobileMenu) {
    navigationToggle.addEventListener("click", function () {
      const isExpanded =
        navigationToggle.getAttribute("aria-expanded") === "true"

      navigationToggle.setAttribute("aria-expanded", !isExpanded)
      navigationMobileMenu.classList.toggle("navigation-mobile-menu-open")

      // Prevent body scroll when menu is open
      document.body.style.overflow = !isExpanded ? "hidden" : ""
    })

    // Close mobile menu when clicking on links
    const mobileLinks = navigationMobileMenu.querySelectorAll(
      ".navigation-mobile-link"
    )
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navigationToggle.setAttribute("aria-expanded", "false")
        navigationMobileMenu.classList.remove("navigation-mobile-menu-open")
        document.body.style.overflow = ""
      })
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !navigation.contains(event.target) &&
        navigationMobileMenu.classList.contains("navigation-mobile-menu-open")
      ) {
        navigationToggle.setAttribute("aria-expanded", "false")
        navigationMobileMenu.classList.remove("navigation-mobile-menu-open")
        document.body.style.overflow = ""
      }
    })
  }

  // Scroll effect for navigation
  let lastScrollY = window.scrollY

  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY

    if (currentScrollY > 50) {
      navigation.classList.add("navigation-scrolled")
    } else {
      navigation.classList.remove("navigation-scrolled")
    }

    lastScrollY = currentScrollY
  })

  // Handle escape key to close mobile menu
  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      navigationMobileMenu.classList.contains("navigation-mobile-menu-open")
    ) {
      navigationToggle.setAttribute("aria-expanded", "false")
      navigationMobileMenu.classList.remove("navigation-mobile-menu-open")
      document.body.style.overflow = ""
      navigationToggle.focus()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <nav className="navigation">
        <div className="navigation-container">
          <a href="/">
            <div
              aria-label="Aviya Magnus - Educational Platform"
              className="navigation-logo"
            >
              <div className="navigation-logo-icon">
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
              <span className="navigation-logo-text">Aviya Magnus</span>
            </div>
          </a>
          <div className="navigation-links">
            <a href="/tutoring-programs">
              <div className="navigation-link">
                <span>Tutoring Programs</span>
              </div>
            </a>
            <a href="/foundation-soft-skills">
              <div className="navigation-link">
                <span>
                  {' '}
                  Foundation &amp; Soft Skills
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </a>
          </div>
          <div className="navigation-cta">
            <button className="btn btn-primary">Get Started</button>
          </div>
          <button
            id="navigationToggle"
            aria-label="Toggle mobile menu"
            aria-expanded="false"
            className="navigation-mobile-toggle"
          >
            <span className="navigation-navigation-toggle-icon1 navigation-toggle-menu">
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
                  d="M4 5h16M4 12h16M4 19h16"
                ></path>
              </svg>
            </span>
            <span className="navigation-navigation-toggle-icon2">
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
                  d="M18 6L6 18M6 6l12 12"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div id="navigationMobileMenu" className="navigation-mobile-menu">
          <div className="navigation-mobile-links">
            <a href="/tutoring-programs">
              <div className="navigation-mobile-link">
                <span>
                  {' '}
                  Tutoring Programs
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </a>
            <a href="/foundation-soft-skills">
              <div className="navigation-mobile-link">
                <span>
                  {' '}
                  Foundation &amp; Soft Skills
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </a>
          </div>
          <div className="navigation-mobile-cta">
            <button className="btn btn-primary btn-lg">Get Started</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
