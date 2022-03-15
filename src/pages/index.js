import React from "react";
import Layout from "../components/Layout";
import Scroll from "../components/Scroll";

import config from "../../config";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import Subscribe from "../components/Subscribe";
import Header from "../components/Header";

import ipad from "../assets/images/ipad.png";
import demoImage1 from "../assets/images/demo-image-01.jpg";
import demoImage2 from "../assets/images/demo-image-02.jpg";
import bgMaster from "../assets/images/bg-masthead.jpg";
import djmaxx2 from "../assets/images/maxxbw2.png";
import djmaxx3 from "../assets/images//maxxbw1.png";
import logo2 from "../assets/images/headphonesbw.png";
import djnight from "../assets/images/maxxbw3.png";
import djmaxx4 from "../assets/images/animation_500_l0riblid.gif";
import djmaxx5 from "../assets/images/animation_500_l0rivgek.gif";

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">
              "The noblest art is that of making others happy."
            </h2>
            <p className="text-white-50">- P.T. Barnum</p>
          </div>
        </div>
        <img
          src={logo2}
          className="img-fluid"
          style={{ width: 500, height: "auto", padding: 40, borderRadius: 50 }}
          alt=""
        />
      </div>
    </section>

    <section id="about" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img
              className="img-fluid mb-3 mb-lg-0 image-shadow"
              src={djmaxx3}
              alt=""
            />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Who is DJ Maxx?</h4>
              <img
                className="img-fluid mb-3 mb-lg-0"
                src={djmaxx5}
                alt=""
                style={{
                  width: 100,
                  height: "auto",
                }}
              />
              <p className="text-black-50 mb-0">
                A Dj and music enthusiast with an eclectic taste, Dj Maxx will
                tailor your experience specific to your event. Dj Maxx has years
                of experience (est. 1988) Dj'ing private parties, clubs, special
                and corporate events. Maxx uses his own creativity and style
                with the music that moves those that seek to have an enjoyable
                experience. He provides professionalism and timely service. His
                guiding thought is, allow music to take participants on a
                memorable rhythmic journey that refresh the soul. <br /> “…Be
                refreshed and be well…” 1 Samuel 16:23
              </p>
            </div>
          </div>
        </div>

        <div
          className="row justify-content-center no-gutters mb-5 mb-lg-0"
          id="projects"
        >
          <div className="col-lg-6 image-shadow">
            <img className="img-fluid" src={djmaxx2} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Maxx Services:</h4>
                  <p className="mb-0 text-white-50">
                    - Private Party <br /> - Corporate Events <br /> - Church
                    Events <br /> - Mobile Events
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={djnight} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Maxx Mixxes:</h4>
                  <a href="https://m.mixcloud.com/MaxxDC/">
                    <img
                      className="img-fluid mb-3 mb-lg-0"
                      src={djmaxx4}
                      alt=""
                      style={{
                        width: 100,
                        height: "auto",
                      }}
                    />
                  </a>
                  <p className="mb-0 text-white-50">
                    If you are trying to catch a vibe and check out what DJ Maxx
                    has to offer then check out my mixes on Mix Cloud! Click the
                    record player above.
                  </p>

                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Subscribe />

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
