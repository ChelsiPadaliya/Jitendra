import Script from "next/script";
import Link from "next/link";
import Navbar from "./Navbar";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jitendra - Personal Portfolio",
  description: "Jitendra - Creative Portfolio Showcase Template",
  keywords:
    "personal, portfolio, nextjs, bootstrap, design, creative, clean, modern",
  authors: [{ name: "Themesvila" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function Home() {
  return (
    <div className={poppins.className}>
      <Navbar />

      {/* START ABOUT DESIGN AREA */}
      <section id="about" className="about-area">
        <div className="container">
          <div className="row">
            {/* START ABOUT IMAGE DESIGN AREA */}
            <div className="col-lg-4">
              <div className="about-image-part wow fadeInUp delay-0-3s">
                <div className="about-image-part2">
                  <img src="/images/image1.jpg" alt="About Me" />
                </div>
                <h2>Jitendra Dadhaniya</h2>
                <p>
                  Founder | Technology Leader | WORK24 (Cross-Border Teams) |
                  HostingBLUE (Cloud) | HANA (RAD) | Co-Founder & CTO COCOTEL
                  (Hotel Management) | Founder DATAANANT (Marketing Cloud) | CMD
                  Raidlayer Internet PL
                </p>
                <div className="about-social text-center">
                  <ul>
                    <li>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ri-facebook-circle-fill" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ri-twitter-x-line" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/raidlayer/?profileId=ACoAAAMt3PsB3Y5WY6sGLWDLCKCwgNZGbqYRZOQ"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ri-linkedin-fill" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ri-github-line" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* / END ABOUT IMAGE DESIGN AREA */}
            {/* START ABOUT TEXT DESIGN AREA */}
            <div className="col-lg-8">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <p>Hello There!</p>
                <h2>
                  I’m <span>Jitendra Dadhaniya</span>, <br />
                  IT drives my passion. I've coded from the{" "}
                  <span>Z80-powered ZX Spectrum</span> to modern Xeon servers,
                  mastering devices across generations.
                </h2>
                <div className="adress-field">
                  <ul>
                    <li>
                      <i className="ri-circle-fill" />
                      Available for Freelancing
                    </li>
                  </ul>
                </div>
                <div className="hero-btns">
                  <Link href="/contact" className="theme-btn">
                    Download CV <i className="ri-download-line" />
                  </Link>
                </div>
              </div>
              <div className="about-content-part-bottom wow fadeInUp delay-0-2s">
                <div className="company-list">
                  <div
                    className="scroller"
                    data-direction="left"
                    data-speed="slow"
                  >
                    <div className="scroller__inner">
                      <h4>Bank lotpat kora amr main kaj.</h4>
                      <h4>Manusher taka ami mere khai</h4>
                      <h4>Ami khuni hasinar lok</h4>
                      <h4>Ami desh chere palaite chaichilam</h4>
                      <h4>Kinto pari nai</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* / END ABOUT TEXT DESIGN AREA */}
          </div>
        </div>
      </section>
      {/* / END ABOUT DESIGN AREA */}

      {/* START SERVICE DESIGN AREA */}
      <section id="service" className="services-area innerpage-single-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <p>Services</p>
                  <h2>Quality Services</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="service-item wow fadeInUp delay-0-2s">
                  <i className="ri-global-fill" />
                  <h4>Brand Identity Design</h4>
                  <p>
                    Dorbesh gives you the blocks &amp; kits you need to create a
                    true website within minutes.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item wow fadeInUp delay-0-4s">
                  <i className="ri-quill-pen-line" />
                  <h4>Website Design</h4>
                  <p>
                    Dorbesh gives you the blocks &amp; kits you need to create a
                    true website within minutes.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item wow fadeInUp delay-0-6s">
                  <i className="ri-pantone-fill" />
                  <h4>Application Design</h4>
                  <p>
                    Dorbesh gives you the blocks &amp; kits you need to create a
                    true website within minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / END SERVICE DESIGN AREA */}

      {/* START RESUME EXPERIENCE DESIGN AREA */}
      <section id="resume" className="resume-area">
        <div className="container">
          <div className="resume-items">
            <div className="row">
              <div className="col-xl-6 col-md-12">
                <div className="single-resume">
                  <h2>Experience</h2>
                  <div className="experience-list">
                    <div className="resume-item wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <img src="/images/hana.jpg" alt="HANA" />
                      </div>
                      <div className="content">
                        <span className="years">
                          Jan 2016 - Present . 9 yrs 10 mos
                        </span>
                        <h4>HANA</h4>
                        <span className="company">Founder, CEO</span>
                      </div>
                    </div>
                    <div className="resume-item wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <img src="/images/WORK24.png" alt="WORK24" />
                      </div>
                      <div className="content">
                        <span className="years">
                          Jul 2020 - Present . 5 yrs 4 mos
                        </span>
                        <h4>WORK24</h4>
                        <span className="company">Founder</span>
                      </div>
                    </div>
                    <div className="resume-item wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <img src="/images/raidlayer.jpg" alt="Raidlayer" />
                      </div>
                      <div className="content">
                        <span className="years">
                          Dec 2016 - Present . 8 yrs 11 mos
                        </span>
                        <h4>Raidlayer Internet P Limited</h4>
                        <span className="company">Managing Director</span>
                      </div>
                    </div>
                    <div className="resume-item wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <img src="/images/cocotel.jpg" alt="COCOTEL" />
                      </div>
                      <div className="content">
                        <span className="years">
                          Dec 2016 - Present . 8 yrs 11 mos
                        </span>
                        <h4>COCOTEL</h4>
                        <span className="company">Co-Founder CTO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12 mt-6">
                <div className="experience-list">
                  <div className="single-resume">
                    <h2>Education</h2>
                    <div className="resume-item wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="ri-book-line" />
                      </div>
                      <div className="content">
                        <span className="years">1988 - 1992</span>
                        <h4>
                          Bachelor of Commerce (B.Com.), <br />
                          Business Administration and Management, General
                        </h4>
                        <span className="company">
                          HA College of Commerce
                        </span>
                      </div>
                    </div>
                    <div className="resume-item wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="ri-book-line" />
                      </div>
                      <div className="content">
                        <span className="years">1988 - 1991</span>
                        <h4>
                          Bachelor's degree, <br />
                          Business Administration and Management, General
                        </h4>
                        <span className="company">Gujarat University</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / END RESUME EXPERIENCE DESIGN AREA */}

      {/* START SKILL DESIGN AREA */}
      <section id="skills" className="skill-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <p>Pro Skills</p>
                <h2>Let’s Explore My Skills</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="skill-items-wrap">
                <div className="row">
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div className="skill-item wow fadeInUp delay-0-2s">
                      <img src="/images/skills/skill1.png" alt="Skill" />
                      <h5>Figma</h5>
                      <span className="percent">99%</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div className="skill-item wow fadeInUp delay-0-3s">
                      <img src="/images/skills/skill2.png" alt="Skill" />
                      <h5>Tailwind</h5>
                      <span className="percent">93%</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div className="skill-item wow fadeInUp delay-0-4s">
                      <img src="/images/skills/skill3.png" alt="Skill" />
                      <h5>Photoshop</h5>
                      <span className="percent">53%</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div className="skill-item wow fadeInUp delay-0-5s">
                      <img src="/images/skills/skill4.png" alt="Skill" />
                      <h5>WordPress</h5>
                      <span className="percent">74%</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div className="skill-item wow fadeInUp delay-0-2s">
                      <img src="/images/skills/skill5.png" alt="Skill" />
                      <h5>Angular</h5>
                      <span className="percent">95%</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div className="skill-item wow fadeInUp delay-0-3s">
                      <img src="/images/skills/skill6.png" alt="Skill" />
                      <h5>Webflow</h5>
                      <span className="percent">96%</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div className="skill-item wow fadeInUp delay-0-4s">
                      <img src="/images/skills/skill7.png" alt="Skill" />
                      <h5>Python</h5>
                      <span className="percent">52%</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div className="skill-item wow fadeInUp delay-0-5s">
                      <img src="/images/skills/skill8.png" alt="Skill" />
                      <h5>Sketch</h5>
                      <span className="percent">84%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / END SKILL DESIGN AREA */}

      {/* START PORTFOLIO DESIGN AREA */}
      <section id="works" className="projects-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <h2>Works &amp; Projects</h2>
                  <p>
                    Check out some of my design projects, meticulously crafted
                    with love and dedication, each one reflecting the passion
                    and soul I poured into every detail.
                  </p>
                </div>
              </div>
            </div>
            <ul className="project-filter filter-btns-one justify-content-left pb-15 wow fadeInUp delay-0-2s">
              <li data-filter="*" className="current">
                Show All
              </li>
              <li data-filter=".design">Design</li>
              <li data-filter=".branding">Branding</li>
              <li data-filter=".marketing">Marketing</li>
              <li data-filter=".game">Game</li>
            </ul>
            <div className="row project-masonry-active">
              <div className="col-lg-4 col-md-6 item branding game">
                <div className="project-item style-two wow fadeInUp delay-0-3s">
                  <div className="project-image">
                    <img src="/images/projects/work1.jpg" alt="Project" />
                    <a
                      href="/images/projects/work1.jpg"
                      className="details-btn work-popup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="ri-arrow-right-up-line" />
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">Branding</span>
                    <h3>Mobile Application Design</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 item design marketing graphics">
                <div className="project-item style-two wow fadeInUp delay-0-4s">
                  <div className="project-image">
                    <img src="/images/projects/work2.jpg" alt="Project" />
                    <a
                      href="https://www.youtube.com/watch?v=qZEPs3vmYB4"
                      className="details-btn popup-youtube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="ri-arrow-right-up-line" />
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">Design</span>
                    <h3>Website Makeup Design</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 item game graphics">
                <div className="project-item style-two wow fadeInUp delay-0-5s">
                  <div className="project-image">
                    <img src="/images/projects/work3.jpg" alt="Project" />
                    <a
                      href="/images/projects/work3.jpg"
                      className="details-btn work-popup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="ri-arrow-right-up-line" />
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">Graphics</span>
                    <h3>Brand Identity and Motion Design</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 item design game">
                <div className="project-item style-two wow fadeInUp delay-0-6s">
                  <div className="project-image">
                    <img src="/images/projects/work4.jpg" alt="Project" />
                    <a
                      href="/images/projects/work4.jpg"
                      className="details-btn work-popup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="ri-arrow-right-up-line" />
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">Game</span>
                    <h3>Mobile Application Design</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 item branding game">
                <div className="project-item style-two wow fadeInUp delay-0-7s">
                  <div className="project-image">
                    <img src="/images/projects/work5.jpg" alt="Project" />
                    <a
                      href="/images/projects/work5.jpg"
                      className="details-btn work-popup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="ri-arrow-right-up-line" />
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">Branding</span>
                    <h3>Application Design</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 item design marketing graphics">
                <div className="project-item style-two wow fadeInUp delay-0-8s">
                  <div className="project-image">
                    <img src="/images/projects/work6.jpg" alt="Project" />
                    <a
                      href="https://www.youtube.com/watch?v=qZEPs3vmYB4"
                      className="details-btn popup-youtube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="ri-arrow-right-up-line" />
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">Design</span>
                    <h3>Website Development</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / END PORTFOLIO DESIGN AREA */}

      {/* START PRICING DESIGN AREA */}
      <section id="pricing" className="pricing-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <p>Pricing</p>
                  <h2>Flexible Pricing Plan</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="pricing-item wow fadeInUp delay-0-2s">
                  <div className="pricing-header">
                    <h4 className="title">Basic</h4>
                    <p className="save-percent">
                      Have design ready to build? <br />
                      or small budget
                    </p>
                    <span className="price">15</span>
                  </div>
                  <div className="pricing-details">
                    <ul>
                      <li>
                        <i className="ri-arrow-right-line" />
                        Need your wireframe
                      </li>
                      <li>
                        <i className="ri-arrow-right-line" />
                        Design with Figma, Framer
                      </li>
                      <li>
                        <i className="ri-arrow-right-line" />
                        Product Design
                      </li>
                      <li className="unable">
                        <i className="ri-arrow-right-line" />
                        Digital Marketing
                      </li>
                      <li className="unable">
                        <i className="ri-arrow-right-line" />
                        Custom Support
                      </li>
                    </ul>
                    <Link href="/order" className="theme-btn">
                      Order Now <i className="ri-shopping-basket-line" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="pricing-item wow fadeInUp delay-0-4s">
                  <div className="pricing-header">
                    <h4 className="title">Standard</h4>
                    <p className="save-percent">
                      Not have any design? <br />
                      Leave its for me
                    </p>
                    <span className="price">59</span>
                  </div>
                  <div className="pricing-details">
                    <ul>
                      <li>
                        <i className="ri-arrow-right-line" />
                        Website Design
                      </li>
                      <li>
                        <i className="ri-arrow-right-line" />
                        Mobile Apps Design
                      </li>
                      <li>
                        <i className="ri-arrow-right-line" />
                        Product Design
                      </li>
                      <li>
                        <i className="ri-arrow-right-line" />
                        Digital Marketing
                      </li>
                      <li className="unable">
                        <i className="ri-arrow-right-line" />
                        Custom Support
                      </li>
                    </ul>
                    <Link href="/order" className="theme-btn">
                      Order Now <i className="ri-shopping-basket-line" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="pricing-item wow fadeInUp delay-0-4s">
                  <div className="pricing-header">
                    <h4 className="title">Premium</h4>
                    <p className="save-percent">
                      Not have any design? <br />
                      Leave its for me
                    </p>
                    <span className="price">99</span>
                  </div>
                  <div className="pricing-details">
                    <ul>
                      <li>
                        <i className="ri-arrow-right-line" />
                        Website Design
                      </li>
                      <li>
                        <i className="ri-arrow-right-line" />
                        Mobile Apps Design
                      </li>
                      <li>
                        <i className="ri-arrow-right-line" />
                        Product Design
                      </li>
                      <li>
                        <i className="ri-arrow-right-line" />
                        Digital Marketing
                      </li>
                      <li>
                        <i className="ri-arrow-right-line" />
                        Custom Support
                      </li>
                    </ul>
                    <Link href="/order" className="theme-btn">
                      Order Now <i className="ri-shopping-basket-line" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / END PRICING DESIGN AREA */}

      {/* START TESTIMONIALS DESIGN AREA */}
      <section className="testimonials-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <p>Testimonials</p>
                  <h2>What clients say!</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="testimonials-wrap">
                  <div className="testimonial-item wow fadeInUp delay-0-3s">
                    <div className="author">
                      <img
                        src="/images/testimonials/author1.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      Financial planners help people to knowledge in about how
                      to invest and in save their moneye the most efficient way
                      ever plan ners help people tioniio know ledige in about
                      how.
                    </div>
                    <div className="testi-des">
                      <h5>Zonathon Doe</h5>
                      <span>CEO &amp; Founder X</span>
                    </div>
                  </div>
                  <div className="testimonial-item wow fadeInUp delay-0-4s">
                    <div className="author">
                      <img
                        src="/images/testimonials/author2.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      Financial planners help people to knowledge in about how
                      to invest and in save their moneye the most efficient way
                      ever plan ners help people tioniio know ledige in about
                      how.
                    </div>
                    <div className="testi-des">
                      <h5>Liana Marie</h5>
                      <span>Lead Designer Meta</span>
                    </div>
                  </div>
                  <div className="testimonial-item wow fadeInUp delay-0-2s">
                    <div className="author">
                      <img
                        src="/images/testimonials/author1.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      Financial planners help people to knowledge in about how
                      to invest and in save their moneye the most efficient way
                      ever plan ners help people tioniio know ledige in about
                      how.
                    </div>
                    <div className="testi-des">
                      <h5>Zonathon Doe</h5>
                      <span>CEO &amp; Founder X</span>
                    </div>
                  </div>
                  <div className="testimonial-item wow fadeInUp delay-0-4s">
                    <div className="author">
                      <img
                        src="/images/testimonials/author2.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      Financial planners help people to knowledge in about how
                      to invest and in save their moneye the most efficient way
                      ever plan ners help people tioniio know ledige in about
                      how.
                    </div>
                    <div className="testi-des">
                      <h5>Liana Marie</h5>
                      <span>Lead Designer Meta</span>
                    </div>
                  </div>
                </div>
                <div className="slider-arrows wow fadeInUp delay-0-6s text-center pt-40">
                  <button className="testimonial-prev">
                    <i className="ri-arrow-left-s-line" />
                  </button>
                  <button className="testimonial-next">
                    <i className="ri-arrow-right-s-line" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / END TESTIMONIALS DESIGN AREA */}

      {/* START BRAND DESIGN AREA */}
      <div className="client-logo-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="section-title text-center pt-5 mb-65 wow fadeInUp delay-0-2s">
                <p>Company I work</p>
                <h2>300+ Global Clients</h2>
              </div>
            </div>
          </div>
          <div className="client-logo-wrap">
            <Link href="#" className="client-logo-item wow fadeInUp delay-0-2s">
              <img src="/images/client-logos/partner1.png" alt="brand Logo" />
            </Link>
            <Link href="#" className="client-logo-item wow fadeInUp delay-0-3s">
              <img src="/images/client-logos/partner2.png" alt="brand Logo" />
            </Link>
            <Link href="#" className="client-logo-item wow fadeInUp delay-0-4s">
              <img src="/images/client-logos/partner3.png" alt="brand Logo" />
            </Link>
            <Link href="#" className="client-logo-item wow fadeInUp delay-0-5s">
              <img src="/images/client-logos/partner4.png" alt="brand Logo" />
            </Link>
            <Link href="#" className="client-logo-item wow fadeInUp delay-0-6s">
              <img src="/images/client-logos/partner1.png" alt="brand Logo" />
            </Link>
            <Link href="#" className="client-logo-item wow fadeInUp delay-0-2s">
              <img src="/images/client-logos/partner4.png" alt="brand Logo" />
            </Link>
            <Link href="#" className="client-logo-item wow fadeInUp delay-0-3s">
              <img src="/images/client-logos/partner4.png" alt="brand Logo" />
            </Link>
            <Link href="#" className="client-logo-item wow fadeInUp delay-0-4s">
              <img src="/images/client-logos/partner2.png" alt="brand Logo" />
            </Link>
            <Link href="#" className="client-logo-item wow fadeInUp delay-0-5s">
              <img src="/images/client-logos/partner3.png" alt="brand Logo" />
            </Link>
            <Link href="#" className="client-logo-item wow fadeInUp delay-0-6s">
              <img src="/images/client-logos/partner1.png" alt="brand Logo" />
            </Link>
          </div>
        </div>
      </div>
      {/* END BRAND DESIGN AREA */}

      {/* START VLOG DESIGN AREA */}
      <section id="blog" className="blog-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <p>Latest News</p>
                <h2>Stories</h2>
              </div>
            </div>
          </div>
          <div className="row blog-post-box align-items-center">
            <div className="col-lg-6">
              <div className="blog-post-img">
                <Link href="/single-project">
                  <img src="/images/blog/blog1.jpg" alt="" />
                </Link>
                <div className="blog-post-category">
                  <Link href="#">Help</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-post-caption">
                <h3>Posted on November 28</h3>
                <h2>
                  <Link className="link-decoration" href="/single-project">
                    Create a Landing Page That Performs Great
                  </Link>
                </h2>
                <Link className="theme-btn theme-btn-two" href="/single-project">
                  Read more <i className="ri-arrow-right-line" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row blog-post-box align-items-center">
            <div className="col-lg-6">
              <div className="blog-post-img">
                <Link href="/single-project">
                  <img src="/images/blog/blog2.jpg" alt="" />
                </Link>
                <div className="blog-post-category">
                  <Link href="#">Branding</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-post-caption">
                <h3>Posted on November 28</h3>
                <h2>
                  <Link className="link-decoration" href="/single-project">
                    Starting and Growing a Career in Web Design
                  </Link>
                </h2>
                <Link className="theme-btn theme-btn-two" href="/single-project">
                  Read more <i className="ri-arrow-right-line" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row blog-post-box align-items-center">
            <div className="col-lg-6">
              <div className="blog-post-img">
                <Link href="/single-project">
                  <img src="/images/blog/blog3.jpg" alt="" />
                </Link>
                <div className="blog-post-category">
                  <Link href="#">Design</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-post-caption">
                <h3>Posted on November 28</h3>
                <h2>
                  <Link className="link-decoration" href="/single-project">
                    How Can Designers Prepare for the Future?
                  </Link>
                </h2>
                <Link className="theme-btn theme-btn-two" href="/single-project">
                  Read more <i className="ri-arrow-right-line" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / END VLOG DESIGN AREA */}

      {/* START CONTACT DESIGN AREA */}
      <section id="contact" className="contact-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <p>Contact</p>
                  <h2>Get in Touch with Me!</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="contact-content-part wow fadeInUp delay-0-2s">
                  <div
                    className="single-contact wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="contact-icon">
                      <i className="ri-map-pin-line" />
                    </div>
                    <h2>Our Office:</h2>
                    <p>WORK24, Ahmedabad</p>
                  </div>
                  <div
                    className="single-contact wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="contact-icon">
                      <i className="ri-phone-line" />
                    </div>
                    <h2>Contact Number:</h2>
                    <p>+1234321321</p>
                  </div>
                  <div
                    className="single-contact wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="contact-icon">
                      <i className="ri-mail-line" />
                    </div>
                    <h2>Email Us:</h2>
                    <p>khunihashina@mail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                  <form
                    id="contactForm"
                    className="contactForm"
                    name="contactForm"
                    action="/api/contact"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            defaultValue=""
                            placeholder="Steve Milner"
                            required
                            data-error="Please enter your Name"
                          />
                          <label htmlFor="name" className="for-icon">
                            <i className="far fa-user" />
                          </label>
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            defaultValue=""
                            placeholder="hello@websitename.com"
                            required
                            data-error="Please enter your Email"
                          />
                          <label htmlFor="email" className="for-icon">
                            <i className="far fa-envelope" />
                          </label>
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="message">Your Message</label>
                          <textarea
                            name="message"
                            id="message"
                            className="form-control"
                            rows={4}
                            placeholder="Write Your message"
                            required
                            data-error="Please Write your Message"
                            defaultValue=""
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-0">
                          <button type="submit" className="theme-btn">
                            Send Me Message <i className="ri-mail-line" />
                          </button>
                          <div id="msgSubmit" className="hidden" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / END CONTACT DESIGN AREA */}

      {/* START CALL TO ACTION DESIGN AREA */}
      <section className="call-to-action-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-to-action-part wow fadeInUp delay-0-2s text-center">
                <h2>
                  Are You Ready to <span>kickstart</span> your{" "}
                  <span>project</span> with a touch of magic?
                </h2>
                <p>
                  Reach out and let's make it happen ✨. I'm also available for
                  full-time or Part-time opportunities to push the boundaries of
                  design and deliver exceptional work.
                </p>
                <div className="hero-btns">
                  <Link href="#contact" className="theme-btn">
                    Let's Talk <i className="ri-download-line" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / END CALL TO ACTION DESIGN AREA */}

      {/* START MAP */}
      <section className="map_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <h2 className="map_title">View My Live Map Location</h2>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8543267219334!2d72.54396837450994!3d23.02912031608529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85ddbbad1e97%3A0x611e70c371dd1414!2sWORK24!5e0!3m2!1sen!2sin!4v1759486121007!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                />
                <h2 className="close_btn">Hide Map</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END MAP */}

      {/* START FOOTER DESIGN AREA */}
      <footer className="main-footer">
        <div className="footer-bottom pt-50 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>
                    Copyright @2025, <Link href="/">Jitendra</Link> All Rights
                    Reserved.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="copyright-text extra-copyright">
                  <p>Crafted with ❤️ Themesvila</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* / END FOOTER DESIGN AREA */}

      {/* START SCROLL UP DESIGN AREA */}
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
      {/* / END SCROLL UP DESIGN AREA */}

      {/* Scripts */}
      <Script src="/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/js/slick.min.js" strategy="afterInteractive" />
      <Script src="/js/wow.min.js" strategy="afterInteractive" />
      <Script src="/js/gsap.min.js" strategy="afterInteractive" />
      <Script
        src="/js/jquery.magnific-popup.min.js"
        strategy="afterInteractive"
      />
      <Script src="/js/isotope.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.nice-select.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.ajaxchimp.min.js" strategy="afterInteractive" />
      <Script src="/js/smooth-scroll.js" strategy="afterInteractive" />
      <Script src="/js/form-validator.min.js" strategy="afterInteractive" />
      <Script src="/js/contact-form-script.js" strategy="afterInteractive" />
      <Script src="/js/script.js" strategy="afterInteractive" />
    </div>
  );
}