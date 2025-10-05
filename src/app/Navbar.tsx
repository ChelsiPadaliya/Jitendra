"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992); // lg breakpoint (<992px → mobile)
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="main-header">
      <div className="header-upper">
        <div className="container">
          <div className="header-inner d-flex align-items-center">
            {/* Logo */}
            <div className="logo-outer">
              <div className="logo">
                <a href="/">
                  <img
                    src="/images/logo1.png"
                    alt="Logo"
                    title="Logo"
                    style={{ height: "40px", width: "160px" }}
                  />
                </a>
              </div>
            </div>

            {/* Navbar */}
            <div className="nav-outer clearfix mx-auto">
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <a href="/">
                      <h2 className="font-bold">Jitendra</h2>
                    </a>
                  </div>
                  {/* Toggle Button (only show in mobile) */}
                  {isMobile && (
                    <button
                      type="button"
                      className="navbar-toggle"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  )}
                </div>

                {/* Menu Items */}
                <div
                  className={`navbar-collapse ${
                    isMobile ? (isOpen ? "show" : "collapse") : "show"
                  }`}
                >
                  <ul className="navigation onepage clearfix">
                    <li>
                      <a className="nav-link-click" href="#about">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="nav-link-click" href="#service">
                        Services
                      </a>
                    </li>
                    <li>
                      <a className="nav-link-click" href="#works">
                        Works
                      </a>
                    </li>
                    <li>
                      <a className="nav-link-click" href="#pricing">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a className="nav-link-click" href="#blog">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="nav-link-click" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* Button */}
            <div className="menu-btns">
              <a href="#contact" className="theme-btn">
                Hire Me <i className="ri-shake-hands-line" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
