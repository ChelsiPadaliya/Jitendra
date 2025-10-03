"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function SingleProject() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992); // Bootstrap lg breakpoint
    };
    handleResize(); // run initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        {/* META */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Dorbesh - Creative Portfolio Showcase Template"
        />
        <title>Dorbesh - Personal Portfolio</title>

        {/* FAV ICON */}
        <link rel="shortcut icon" type="image/png" href="/images/favicon.png" />

        {/* GOOGLE FONTS */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* CSS FILES */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/fonts/remixicon.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/nice-select.min.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/slick.min.css" />
        <link rel="stylesheet" href="/css/spacing.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </Head>

      {/* START MENU DESIGN AREA */}
      <header className="main-header">
        <div className="header-upper">
          <div className="container">
            <div className="header-inner d-flex align-items-center">
              {/* Logo */}
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo.png" alt="Logo" title="Logo" />
                  </Link>
                </div>
              </div>

              {/* Navbar */}
              <div className="nav-outer clearfix mx-auto">
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    <div className="mobile-logo">
                      <Link href="/">
                        <img src="/images/logo.png" alt="Logo" title="Logo" />
                      </Link>
                    </div>
                    {/* Toggle Button */}
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
                        <a className="nav-link-click" href="/#about">
                          About
                        </a>
                      </li>
                      <li>
                        <a className="nav-link-click" href="/#service">
                          Services
                        </a>
                      </li>
                      <li>
                        <a className="nav-link-click" href="/#works">
                          Works
                        </a>
                      </li>
                      <li>
                        <a className="nav-link-click" href="/#pricing">
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a className="nav-link-click" href="/#blog">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a className="nav-link-click" href="/#contact">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* Button */}
              <div className="menu-btns">
                <a href="/#contact" className="theme-btn">
                  Hire Me <i className="ri-shake-hands-line" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* / END MENU DESIGN AREA */}

      {/* START SINGLE PAGE DETAILS DESIGN AREA */}
      <div className="single-project-page-design">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center pb-30">
              <p>BRANDING - BENTO STUDIO</p>
              <h1>Beautiful design for brand new Business</h1>
            </div>
          </div>
        </div>
        <div className="single-project-image">
          <img src="/images/projects/single-project.jpg" alt="image" />
        </div>
        <div className="container pt-30">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-project-page-left">
                <div className="single-info">
                  <p>Year</p>
                  <h3>2024</h3>
                </div>
                <div className="single-info">
                  <p>Client</p>
                  <h3>Bento Studio</h3>
                </div>
                <div className="single-info">
                  <p>Services</p>
                  <h3>Web Design</h3>
                </div>
                <div className="single-info">
                  <p>Project</p>
                  <h3>Creative</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="single-project-page-right">
                <h2>Description</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  aliquam purus sit amet luctus venenatis, lectus magna fringilla
                  urna, porttitor rhoncus dolor purus non enim praesent
                  elementum facilisis leo.
                </p>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC. Richard McClintock, a Latin professor, looked up
                  one of the more obscure Latin words, consectetur, and found
                  the undoubtable source.
                </p>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="row pt-30">
            <div className="col-lg-6">
              <div className="single-image">
                <img src="/images/projects/single-project1.jpg" alt="gallery" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-image">
                <img src="/images/projects/single-project2.jpg" alt="gallery" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-image">
                <img src="/images/projects/single-project3.jpg" alt="gallery" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-image">
                <img src="/images/projects/single-project4.jpg" alt="gallery" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* / END SINGLE PAGE DETAILS DESIGN AREA */}

      {/* CALL TO ACTION */}
      <section className="call-to-action-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>
                Are You Ready to kickstart your project with a touch of magic?
              </h2>
              <p>
                Reach out and let's make it happen ✨. I'm also available for
                full-time or part-time opportunities to push the boundaries of
                design and deliver exceptional work.
              </p>
              <div className="hero-btns">
                <a href="/contact" className="theme-btn">
                  Let's Talk <i className="ri-download-line" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="main-footer">
        <div className="footer-bottom pt-50 pb-40">
          <div className="container d-flex justify-content-between">
            <p>
              ©2024 <Link href="/">Dorbesh</Link> All Rights Reserved.
            </p>
            <p>Crafted with ❤️ Themesvila</p>
          </div>
        </div>
      </footer>

      {/* Scroll Up */}
      <div className="progress-wrap cursor-pointer">
        <i className="ri-arrow-up-double-line" />
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
}