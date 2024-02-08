import React, { useEffect, useState } from "react";

const Resume = () => {
  const [isSectionShow, setIsSectionShow] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setIsSectionShow(true);
    }, 350);
  });
  return (
    <>
      <main id="main">
        <section
          id="resume"
          className={`resume ${isSectionShow ? "section-show" : ""}`}
        >
          <div className="container">
            <div className="section-title">
              <h2>Resume</h2>
              <p>Check My Resume</p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                {/* <h3 className="resume-title">Sumary</h3>
                <div className="resume-item pb-0">
                  <h4>Alice Barkley</h4>
                  <p>
                    <em>
                      Innovative and deadline-driven Graphic Designer with 3+
                      years of experience designing and developing user-centered
                      digital/print marketing material from initial concept to
                      final, polished deliverable.
                    </em>
                  </p>

                  <ul>
                    <li>Portland par 127,Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
                  </ul>
                </div> */}

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>
                    Diploma of Electronics &amp; Communication Engineering
                  </h4>
                  <h5>2011 - 2014</h5>
                  <p>
                    <em>
                      School of Diploma Studies, RK University, Rajkot, Gujrat
                    </em>
                  </p>
                  <p>School of Diploma</p>
                </div>
                <div className="resume-item">
                  <h4>B.Tech of Electronics &amp; Communication Engineering</h4>
                  <h5>2014 - 2017</h5>
                  <p>
                    <em>
                      Ganpat University - U. V. Patel College of Engineering,
                      Mahesana, Gujrat
                    </em>
                  </p>
                  <p>Under Graduation</p>
                </div>
                <div className="resume-item">
                  <h4>Embedded System</h4>
                  <h5>2018 - 2019</h5>
                  <p>
                    <em>vector institute, Bengaluru, Karnataka</em>
                  </p>
                  <p>
                    I trained as Embedded system (Embedded C programming, Linux/
                    Unix, OS concept, DS concept,8051 assemblies, and Embedded C
                    programming AVR controllers, basic of ARM, basic RTOS,
                    TCP-IP Network programming, Electronics hardware, and
                    software) as well as Lab Assistant at vector institute.
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Full Stack Developement</h4>
                  <h5>2020 - 2021</h5>
                  <p>
                    <em>Udemy</em>
                  </p>
                  <p>
                    learning of HTML, CSS, Javascript, Bootstrap, tailwidCSS,
                    ReactJS, MongoDB, ExpressJS and NodeJS.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4> Software Engineer</h4>
                  <h5>2021 - Present</h5>
                  <p>
                    <em>Green Apex Technolabs LLB, Ahmedabad, Gujrat</em>
                  </p>

                  <ul>
                    <li>
                      Developing and maintaining web applications using React.js
                      and other related technologies.
                    </li>
                    <li>
                      Collaborating with cross-functional teams including
                      designers, product managers, and other developers to
                      create high-quality products.
                    </li>
                    <li>
                      Implementing responsive design and ensuring cross-browser
                      compatibility.
                    </li>
                    <li>
                      Participating in code reviews and providing constructive
                      feedback to other developers.
                    </li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4> C++ Developer</h4>
                  <h5>2019 - 2020</h5>
                  <p>
                    <em>
                      Greeksoft Technologies Private Limited, Mumbai,
                      Maharashtra
                    </em>
                  </p>

                  <ul>
                    <li>
                      I&apos;ve crafted Trading Software, including Tool Bar,
                      Menu Bar, context Menu, and various controls.
                    </li>
                    <li>
                      Proficient in creating UI components like Property Sheet,
                      Combo Box, Edit Control, and more.
                    </li>
                    <li>
                      Applied validation and properties seamlessly in Dialog
                      Base, Multi-Document, and Single Document Applications.
                    </li>
                    <li>
                      Leveraged third-party software for efficient development,
                      incorporating controls like Grid, Tree, List, and Docking.
                    </li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Assembly Engineer</h4>
                  <h5>2017 - 2018</h5>
                  <p>
                    <em>Mantra softech pvt.Ltd, Ahmedabad, Gujrat</em>
                  </p>

                  <ul>
                    <li>
                      the undisputed leader in the Biometric & RFID industry in
                      India. Fingerprint scanner and IRIS sensors are the
                      primary product of Mantra softech Pvt Ltd.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {!isSectionShow && <div id="preloader"></div>}
    </>
  );
};

export default Resume;
