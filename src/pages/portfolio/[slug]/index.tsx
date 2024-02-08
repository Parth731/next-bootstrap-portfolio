import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { useRouter } from "next/router";
import { portfolioDetails } from "@/constant/constant";
import Link from "next/link";

const PortfolioDetail = () => {
  const [isSectionShow, setIsSectionShow] = useState(false);
  const [portfolioData, setPortfolioData] = useState<any>([]);
  const router = useRouter();
  let title: any = router.query.slug;

  useEffect(() => {
    setTimeout(function () {
      setIsSectionShow(true);
    }, 350);
  }, []);

  useEffect(() => {
    if (portfolioDetails.length >= 0) {
      const filterData = portfolioDetails?.filter(
        (item) => item?.title === title
      );
      if (filterData.length !== 0) {
        setPortfolioData(filterData);
      }
      console.log(filterData);
    }
  }, [portfolioDetails, title]);

  return (
    <>
      {portfolioData?.length !== 0 ? (
        <main id="main">
          <section
            id="portfolio-details"
            className={`portfolio-details ${
              isSectionShow ? "section-show" : ""
            }`}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <h2 className="portfolio-title">{portfolioData[0]?.title}</h2>

                  {/* <div className="portfolio-details-slider swiper">
                  <Swiper
                    spaceBetween={30}
                    pagination={{
                      // type: "bullets",
                      clickable: true,
                      // el: ".swiper-pagination",
                    }}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                    slidesPerView={"auto"}
                    speed={600}
                    loop={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      1200: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                    }}
                    //   navigation={true}
                  >
                    <div className="swiper-wrapper align-items-center">
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <img
                            src="/assets/img/portfolio/portfolio-details-1.jpg"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <img
                            src="/assets/img/portfolio/portfolio-details-2.jpg"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <img
                            src="/assets/img/portfolio/portfolio-details-3.jpg"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>

                  <div className="swiper-pagination"></div>
                </div> */}
                  <Image src={portfolioData[0]?.src} alt="" />
                </div>

                <div className="col-lg-4 portfolio-info">
                  <h3>Project information</h3>
                  <ul>
                    <li>
                      <strong>Category</strong>: Web design
                    </li>
                    {/* <li>
                    <strong>Client</strong>: ASU Company
                  </li> */}
                    {/* <li>
                    <strong>Project date</strong>: 01 March, 2020
                  </li> */}

                    <li>
                      <strong>Source Code</strong>:{" "}
                      <Link
                        href={
                          portfolioData[0]?.sourcecode_link
                            ? portfolioData[0]?.sourcecode_link
                            : ""
                        }
                        target="_blank"
                      >
                        {portfolioData[0]?.sourcecode_link}
                      </Link>
                    </li>
                    <li>
                      <strong>Website URL</strong>:{" "}
                      <Link
                        href={
                          portfolioData[0]?.website_url
                            ? portfolioData[0]?.website_url
                            : ""
                        }
                        target="_blank"
                      >
                        {portfolioData[0]?.website_url}
                      </Link>
                    </li>
                  </ul>

                  <p>{portfolioData[0]?.description}</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <h1>No Details Data</h1>
      )}
      {!isSectionShow && <div id="preloader"></div>}
    </>
  );
};

export default PortfolioDetail;
