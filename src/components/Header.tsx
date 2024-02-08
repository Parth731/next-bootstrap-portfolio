import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "./Footer";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Navbarlogo } from "@/assets";
import Image from "next/image";

const Header = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder", "Full Stack Developer", "Frontend Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  const navbarDetail = [
    { url: "/", name: "Home" },
    { url: "/about", name: "About" },
    { url: "/resume", name: "Resume" },
    // { url: "/services", name: "Services" },
    { url: "/portfolio", name: "Portfolio" },
    { url: "/contact", name: "Contact" },
  ];
  const [isNavbarMobile, setNavbarMobile] = useState<boolean>(false);
  const router = useRouter();

  const handleToggleClick = () => {
    setNavbarMobile(!isNavbarMobile);
  };

  const [isSectionShow, setIsSectionShow] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setIsSectionShow(false);
    }, 350);
  });

  return (
    <>
      <header
        id="header"
        className={`${router.pathname !== "/" ? "header-top" : "header-home"} ${
          isSectionShow ? "section-show" : ""
        }`}
      >
        <div
          className={`${
            router.pathname === "/"
              ? "container"
              : "container-fluid d-flex justify-content-between align-items-center"
          }`}
        >
          <h1>
            {/* <Link href="/">{`<PARTH DANGROSHIYA/>`}</Link> */}
            <Image src={Navbarlogo} alt="logo" width={200} />
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <a href="index.html" className="mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> --> */}
          {router.pathname === "/" && (
            <h2>
              I&apos;m a passionate{" "}
              <span className="text-[#915EFF] ">{text}</span>{" "}
              {/* <Cursor
                cursorBlinking={false}
                cursorStyle="|"
                cursorColor="#ff014f"
              />
              from New York */}
            </h2>
          )}

          <nav
            id="navbar"
            className={`navbar ${isNavbarMobile ? "navbar-mobile" : ""} `}
          >
            <ul>
              {navbarDetail.map((item: any) => {
                return (
                  <li key={item?.url}>
                    <Link
                      className={`nav-link ${
                        router.pathname === item?.url ? "active" : ""
                      }`}
                      href={item?.url}
                    >
                      {item?.name}
                    </Link>
                  </li>
                );
              })}

              {/* <li>
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li> */}
            </ul>
            <i
              className={`bi mobile-nav-toggle ${
                isNavbarMobile ? "bi-x" : "bi-list"
              }`}
              onClick={handleToggleClick}
            ></i>
          </nav>

          {/* <!-- .navbar --> */}

          <div
            className="social-links"
            style={{ marginTop: router.pathname === "/" ? "40px" : "" }}
          >
            {/* <a href="#" className="twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook"></i>
            </a> */}
            {/* <Link
              href="#"
              className="instagram"
              data-toggle="tooltip"
              data-placement="top"
              title="instagram"
            >
              <i className="bi bi-instagram"></i>
            </Link> */}
            <Link
              href="#"
              className="linkedin badge badge-dark"
              data-toggle="tooltip"
              data-placement="bottom"
              title="linkedin"
            >
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link
              href="#"
              className="linkedin"
              data-toggle="tooltip"
              data-placement="top"
              title="github"
            >
              <i className="bi bi-github"></i>
            </Link>
            <Link
              href="#"
              className="linkedin"
              data-toggle="tooltip"
              data-placement="top"
              title="resume"
            >
              <i className="bi bi-file-earmark-person"></i>
            </Link>
          </div>
        </div>
      </header>
      {isSectionShow && <div id="preloader"></div>}
      {/* <Footer /> */}
    </>
    // <>
    //   <header id="header" className="fixed-top">
    //     <div className="container-fluid d-flex justify-content-between align-items-center">
    //       <h1 className="logo me-auto me-lg-0">
    //         <a href="index.html">Kelly</a>
    //       </h1>

    //       {/* <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

    //       <nav id="navbar" className="navbar order-last order-lg-0">
    //         <ul>
    //           <li>
    //             <a className="active" href="index.html">
    //               Home
    //             </a>
    //           </li>
    //           <li>
    //             <a href="about.html">About</a>
    //           </li>
    //           <li>
    //             <a href="resume.html">Resume</a>
    //           </li>
    //           <li>
    //             <a href="services.html">Services</a>
    //           </li>
    //           <li>
    //             <a href="portfolio.html">Portfolio</a>
    //           </li>
    //           <li>
    //             <a href="contact.html">Contact</a>
    //           </li>
    //         </ul>
    //         <i className="bi bi-list mobile-nav-toggle"></i>
    //       </nav>

    //       <div className="header-social-links">
    //         <a href="#" className="twitter">
    //           <i className="bi bi-twitter"></i>
    //         </a>
    //         <a href="#" className="facebook">
    //           <i className="bi bi-facebook"></i>
    //         </a>
    //         <a href="#" className="instagram">
    //           <i className="bi bi-instagram"></i>
    //         </a>
    //         <a href="#" className="linkedin">
    //           <i className="bi bi-linkedin"></i>
    //         </a>
    //       </div>
    //     </div>
    //   </header>
    // </>
  );
};

export default Header;
