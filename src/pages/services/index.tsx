import Link from "next/link";
import React, { useEffect, useState } from "react";

const Services = () => {
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
          id="services"
          className={`services ${isSectionShow ? "section-show" : ""}`}
        >
          <div className="container">
            <div className="section-title">
              <h2>Services</h2>
              <p>My Services</p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bxl-dribbble"></i>
                  </div>
                  <h4>
                    <Link href="">Lorem Ipsum</Link>
                  </h4>
                  <p>
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <h4>
                    <Link href="">Sed ut perspiciatis</Link>
                  </h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <h4>
                    <Link href="">Magni Dolores</Link>
                  </h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-world"></i>
                  </div>
                  <h4>
                    <Link href="">Nemo Enim</Link>
                  </h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-slideshow"></i>
                  </div>
                  <h4>
                    <Link href="">Dele cardo</Link>
                  </h4>
                  <p>
                    Quis consequatur saepe eligendi voluptatem consequatur dolor
                    consequuntur
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-arch"></i>
                  </div>
                  <h4>
                    <Link href="">Divera don</Link>
                  </h4>
                  <p>
                    Modi nostrum vel laborum. Porro fugit error sit minus
                    sapiente sit aspernatur
                  </p>
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

export default Services;
