"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SingleProject() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Favicon */}
      <link rel="shortcut icon" type="image/png" href="/images/favicon.png" />

      {/* START MENU DESIGN AREA */}
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
                        <Image
                          src="/images/logo1.png"
                          alt="Logo"
                          title="Logo"
                          width={160}
                          height={40}
                        />
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
          <Image
            src="/images/projects/single-project.jpg"
            alt="image"
            width={1200}
            height={600}
          />
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
                  aliquam purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elementum facilisis leo.
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
                <Image
                  src="/images/projects/single-project1.jpg"
                  alt="gallery"
                  width={600}
                  height={400}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-image">
                <Image
                  src="/images/projects/single-project2.jpg"
                  alt="gallery"
                  width={600}
                  height={400}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-image">
                <Image
                  src="/images/projects/single-project3.jpg"
                  alt="gallery"
                  width={600}
                  height={400}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-image">
                <Image
                  src="/images/projects/single-project4.jpg"
                  alt="gallery"
                  width={600}
                  height={400}
                />
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
                Reach out and let&apos;s make it happen ✨. I&apos;m also
                available for full-time or part-time opportunities to push the
                boundaries of design and deliver exceptional work.
              </p>
              <div className="hero-btns">
                <Link href="/contact" className="theme-btn">
                  Let&apos;s Talk <i className="ri-download-line" />
                </Link>
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
              ©2025 <Link href="/">Jitendra,</Link> All Rights Reserved.
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
