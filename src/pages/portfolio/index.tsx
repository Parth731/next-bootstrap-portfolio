import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
// import GLightbox from 'glightbox'
import { InvestasImg, PaymentGatewayImg, amazonImg } from "@/assets/index";
import Image from "next/image";
import { portfolioDetails } from "@/constant/constant";

const images = [
  { src: "assets/img/portfolio/portfolio-1.jpg" },
  { src: "assets/img/portfolio/portfolio-2.jpg" },
  { src: "assets/img/portfolio/portfolio-3.jpg" },
  { src: "assets/img/portfolio/portfolio-4.jpg" },
  { src: "assets/img/portfolio/portfolio-5.jpg" },
  { src: "assets/img/portfolio/portfolio-6.jpg" },
  { src: "assets/img/portfolio/portfolio-7.jpg" },
  { src: "assets/img/portfolio/portfolio-8.jpg" },
  { src: "assets/img/portfolio/portfolio-9.jpg" },
];

const Portfolio = () => {
  const router = useRouter();
  const [isSectionShow, setIsSectionShow] = useState(false);
  const [lightBoxInfo, setLightBoxInfo] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setIsSectionShow(true);
    }, 350);
  }, []);

  // useEffect(() => {
  //   const portfolioLightbox = GLightbox({
  //     selector: ".portfolio-lightbox",
  //   });
  // }, []);

  return (
    <>
      <main id="main">
        <section
          id="portfolio"
          className={`portfolio ${isSectionShow ? "section-show" : ""}`}
        >
          <div className="container">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>My Works</p>
            </div>

            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container">
              {portfolioDetails.map((item) => {
                return (
                  <div
                    className="col-lg-4 col-md-6 portfolio-item filter-app"
                    key={item?.id}
                  >
                    <div className="portfolio-wrap">
                      <Image
                        src={item?.src}
                        className="img-fluid"
                        alt=""
                        onClick={() => setLightBoxInfo(true)}
                      />
                      <div
                        className="portfolio-info "
                        // onClick={() =>
                        //   window.open(item?.source_code_link, "_blank")
                        // }
                      >
                        <h4 className="cursor-pointer">{item?.title}</h4>
                        {/* <p>{item?.decription}</p> */}
                        <div className="portfolio-links">
                          {/* <Link href={item?.src} title={item?.title}>
                            <i className="bx bx-plus"></i>
                          </Link> */}
                          <Link
                            href={`/portfolio/${item?.title}`}
                            title="Portfolio Details"
                          >
                            <i className="bx bx-link"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {lightBoxInfo && (
            <Lightbox
              open={lightBoxInfo}
              close={() => setLightBoxInfo(false)}
              // slides={[
              //   { src: "/image1.jpg" },
              //   { src: "/image2.jpg" },
              //   { src: "/image3.jpg" },
              // ]}
              slides={images}
            />
          )}
        </section>
      </main>
      {!isSectionShow && <div id="preloader"></div>}
    </>
  );
};

export default Portfolio;
