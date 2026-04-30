import React, { useState, useRef, useEffect } from "react";
import Home from "./sections/Home";
import Research from "./sections/Research";
import Objectives from "./sections/Objectives";
import Methodology from "./sections/Methodology";
import Result from "./sections/Result";
import Impact from "./sections/Impact";
import Team from "./sections/Team";
import Logo from "./assets/logo2.png"; // Nav logo
import FooterLogo from "./assets/logo2.png"; // Footer logo
import "./App.css";

const sections = [
  { id: "home", label: "Home", Component: Home },
  { id: "research", label: "Research", Component: Research },
  { id: "objectives", label: "Objectives", Component: Objectives },
  { id: "methodology", label: "Methodology", Component: Methodology },
  { id: "result", label: "Result", Component: Result },
  { id: "impact", label: "Impact", Component: Impact },
  { id: "team", label: "Team", Component: Team },
];

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionRefs = useRef({});

  // Scroll to a section by id
  const scrollToSection = (id) => {
    const section = sectionRefs.current[id];
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: "smooth",
      });
      setMobileMenuOpen(false); // close menu on mobile after click
    }
  };

  // Update active tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 80;
      let current = activeTab;
      sections.forEach((section) => {
        const ref = sectionRefs.current[section.id];
        if (ref && ref.offsetTop <= scrollPos) {
          current = section.id;
        }
      });
      setActiveTab(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="nav-tabs-container">
        <div className="nav-left">
          <img src={Logo} alt="Logo" className="nav-logo" />
          <span className="nav-title">DengueGuard</span>
        </div>

        {/* Hamburger button for mobile */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "\u2715" /* Cross sign */ : "\u2630" /* Hamburger */}
        </button>

        {/* Nav Tabs */}
        <ul className={`nav-tabs ${mobileMenuOpen ? "show" : ""}`}>
          <hr className="mobile-divider" />
          {sections.map((tab) => (
            <li key={tab.id} className="nav-item">
              <button
                className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => scrollToSection(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      {sections.map(({ id, Component }) => (
        <section
          key={id}
          id={id}
          ref={(el) => (sectionRefs.current[id] = el)}
          className="section"
        >
          {/* Pass scrollToSection to Home component only */}
          {id === "home" ? <Component scrollToSection={scrollToSection} /> : <Component />}
        </section>
      ))}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <img src={FooterLogo} alt="Logo" className="footer-logo" />
          <span>DengueGuard</span>
        </div>
        <div className="footer-right">
          University of Sri Jayewardenepura - Faculty of Technology, Group 18
        </div>
      </footer>
    </>
  );
}

export default App;