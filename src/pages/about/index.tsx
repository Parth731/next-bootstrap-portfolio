import React, { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Footer from "@/components/Footer";
import {
  logo,
  testimonials1,
  testimonials2,
  testimonials3,
  testimonials4,
  testimonials5,
} from "@/assets/index";
import Image from "next/image";
import { techs } from "@/constant/constant";
import { useTypewriter } from "react-simple-typewriter";

const About = () => {
  useEffect(() => {}, []);
  //   const [progress, setProgress] = useState<number>(0);
  const [progressHtml, setProgressHtml] = useState<any>();
  const [progressCss, setProgressCss] = useState<any>();
  const [progressJavaScript, setProgressJavaScript] = useState<any>();
  const [progressPHP, setProgressPHP] = useState<any>();
  const [progressWordPress, setProgressWordPress] = useState<any>();
  const [progressPhotoShop, setProgressPhotoShop] = useState<any>();
  const [isSectionShow, setIsSectionShow] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setIsSectionShow(true);
    }, 350);
  });
  const [text] = useTypewriter({
    words: ["Professional Coder", "Full Stack Developer", "Frontend Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <>
      <main id="main">
        <section
          id="about"
          className={`about ${isSectionShow ? "section-show" : ""}`}
        >
          <div className="about-me container">
            <div className="section-title">
              <h2>About</h2>
              <p>Learn more about me</p>
            </div>
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                {/* <img src="assets/img/me.jpg" className="img-fluid" alt="" /> */}
                <Image src={logo} className="img-fluid" alt="" />
              </div>
              <div
                className="col-lg-8 pt-4 pt-lg-0 content"
                data-aos="fade-left"
              >
                <h3>{text}</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Birthday:</strong> <span>1 May 1995</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Website:</strong> <span>www.example.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Degree:</strong> <span>Master</span>
                      </li>
                      {/* <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Phone:</strong> <span>+123 456 7890</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>City:</strong> <span>New York, USA</span>
                      </li> */}
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span>30</span>
                      </li>
                      {/* <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Degree:</strong> <span>Master</span>
                      </li> */}
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>PhEmailone:</strong>{" "}
                        <span>email@example.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Freelance:</strong> <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Officiis eligendi itaque labore et dolorum mollitia officiis
                  optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                  accusantium dolor incidunt officia tempore. Et eius omnis.
                  Cupiditate ut dicta maxime officiis quidem quia. Sed et
                  consectetur qui quia repellendus itaque neque. Aliquid amet
                  quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                  culpa magni laudantium dolores.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="counts container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-emoji-smile"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div className="count-box">
                  <i className="bi bi-journal-richtext"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="bi bi-headset"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1463"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Hours Of Support</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="bi bi-award"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="24"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Awards</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* <!-- ======= Skill ======= --> */}
          {/* <div className="skills container">
            <div className="section-title">
              <h2>Skills</h2>
            </div>

            <div className="row skills-content">
              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill">
                    HTML <i className="val">{progressHtml}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: `${progressHtml}%` }}
                    ></div>
                    <Waypoint onEnter={() => setProgressHtml(100)} />
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    CSS <i className="val">{progressCss}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: `${progressCss}%` }}
                    ></div>
                    <Waypoint onEnter={() => setProgressCss(90)} />
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    JavaScript <i className="val">{progressJavaScript}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: `${progressJavaScript}%` }}
                    ></div>
                    <Waypoint onEnter={() => setProgressJavaScript(75)} />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill">
                    PHP <i className="val">{progressPHP}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: `${progressPHP}%` }}
                    ></div>
                    <Waypoint onEnter={() => setProgressPHP(80)} />
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    WordPress/CMS <i className="val">{progressWordPress}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: `${progressWordPress}%` }}
                    ></div>
                    <Waypoint onEnter={() => setProgressWordPress(90)} />
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    Photoshop <i className="val">{progressPhotoShop}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: `${progressPhotoShop}%` }}
                    ></div>
                    <Waypoint onEnter={() => setProgressPhotoShop(55)} />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="skills container">
            <div className="section-title">
              <h2>Skills</h2>
            </div>
            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
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
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                }}

                //   navigation={true}
              >
                {/* <div className="w-full px-24 lg:px-0 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center py-8  sm:px-0"> */}
                <div className="swiper-wrapper">
                  {techs.map(({ src, title, style, link }: any, index: any) => (
                    <SwiperSlide key={index}>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          {/* <div
                            className={`shadow-md hover:scale-105 group  duration-500 py-2 rounded-lg ${style}`}
                          > */}
                          <a href={link} target="_blank" rel="noreferrer">
                            <Image
                              src={src}
                              alt="react"
                              className="w-32 mx-auto h-full"
                            />
                            <p className="mt-4 text-center ml-4 text-gray-200 group-hover:underline underline-offset-2 duration-500 uppercase">
                              {`<${title} />`}
                            </p>
                          </a>
                          {/* </div> */}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
                {/* </div> */}
              </Swiper>
            </div>
          </div>

          {/* <!-- ======= Interests ======= --> */}
          {/* <div className="interests container">
            <div className="section-title">
              <h2>Interests</h2>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="icon-box">
                  <i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
                  <h3>Lorem Ipsum</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i
                    className="ri-bar-chart-box-line"
                    style={{ color: "#5578ff" }}
                  ></i>
                  <h3>Dolor Sitema</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i
                    className="ri-calendar-todo-line"
                    style={{ color: "#e80368" }}
                  ></i>
                  <h3>Sed perspiciatis</h3>
                </div>
              </div>
            </div>
          </div> */}

          {/* <!-- ======= Testimonials ======= --> */}
          <div className="testimonials container">
            <div className="section-title">
              <h2>Testimonials</h2>
            </div>

            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
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
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                //   navigation={true}
              >
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <p>
                          <i className="bx bxs-quote-alt-left quote-icon-left" />
                          Proin iaculis purus consequat sem cure digni ssim
                          donec porttitora entum suscipit rhoncus. Accusantium
                          quam, ultricies eget id, aliquam eget nibh et. Maecen
                          aliquam, risus at semper.
                          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <Image
                          src={testimonials1}
                          className="testimonial-img"
                          alt=""
                          width={90}
                        />
                        <h3>Saul Goodman</h3>
                        <h4>Ceo &amp; Founder</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <p>
                          <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                          Export tempor illum tamen malis malis eram quae irure
                          esse labore quem cillum quid cillum eram malis quorum
                          velit fore eram velit sunt aliqua noster fugiat irure
                          amet legam anim culpa.
                          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <Image
                          src={testimonials2}
                          className="testimonial-img"
                          alt=""
                          width={90}
                        />
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <p>
                          <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                          Enim nisi quem export duis labore cillum quae magna
                          enim sint quorum nulla quem veniam duis minim tempor
                          labore quem eram duis noster aute amet eram fore quis
                          sint minim.
                          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <Image
                          src={testimonials3}
                          className="testimonial-img"
                          alt=""
                          width={90}
                        />
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <p>
                          <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                          Fugiat enim eram quae cillum dolore dolor amet nulla
                          culpa multos export minim fugiat minim velit minim
                          dolor enim duis veniam ipsum anim magna sunt elit fore
                          quem dolore labore illum veniam.
                          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <Image
                          src={testimonials4}
                          className="testimonial-img"
                          alt=""
                          width={90}
                        />
                        <h3>Matt Brandon</h3>
                        <h4>Freelancer</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <p>
                          <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                          Quis quorum aliqua sint quem legam fore sunt eram
                          irure aliqua veniam tempor noster veniam enim culpa
                          labore duis sunt culpa nulla illum cillum fugiat legam
                          esse veniam culpa fore nisi cillum quid.
                          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <Image
                          src={testimonials5}
                          className="testimonial-img"
                          alt=""
                          width={90}
                        />
                        <h3>John Larson</h3>
                        <h4>Entrepreneur</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
            {/* <div className="swiper-pagination"></div>

          <div className="owl-carousel testimonials-carousel"></div> */}
          </div>
        </section>
      </main>

      {!isSectionShow && <div id="preloader"></div>}
    </>
  );
};

export default About;
