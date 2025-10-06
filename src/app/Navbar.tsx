"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992); // lg breakpoint (<992px → mobile)
    };

    handleResize(); // Run on mount
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
                <Link href="/">
                  <Image
                    src="/images/logo1.png"
                    alt="Logo"
                    title="Logo"
                    width={160}
                    height={40}
                  />
                </Link>
              </div>
            </div>

            {/* Navbar */}
            <div className="nav-outer clearfix mx-auto">
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <Link href="/">
                      <h2 className="font-bold">Jitendra</h2>
                    </Link>
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
                      <Link className="nav-link-click" href="/#about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link-click" href="/#service">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link-click" href="/#works">
                        Works
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link-click" href="/#pricing">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link-click" href="/#blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link-click" href="/#contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* Button */}
            <div className="menu-btns">
              <Link href="/#contact" className="theme-btn">
                Hire Me <i className="ri-shake-hands-line" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;