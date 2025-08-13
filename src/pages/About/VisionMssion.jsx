import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const VisionMssion = () => {
  return (
    <Wrapper>
      <section
        className="refer refer-alter"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        <div className="container">
          <div className="row align-items-center rtl-header">
            <div className="col-12 col-lg-6 col-xl-6">
              <div
                className="refer__content"
                data-aos="fade-right"
                data-aos-duration="600"
              >
                <div className="section__content text-start">
                  <span className="fw-6 secondary-text text-xl">
                    <strong>Vision</strong> & Mission
                  </span>

                  {/* <p className="mt-16"></p> */}
                </div>

                <div className="refer__content-single mt-5">
                  <p className="text-xl fw-5">
                    <i
                      className="fa-solid fa-circle-arrow-right"
                      style={{ color: "#FFBA23" }}
                    ></i>{" "}
                    Our Vision:
                  </p>
                  <p
                    className="text-sm mt-8"
                    style={{
                      textAlign: "justify",
                    }}
                  >
                    To become Bangladesh’s most trusted and reliable indenting
                    partner, recognized for delivering exceptional sourcing
                    solutions and creating long-term value for our clients.
                  </p>
                </div>

                <div className="refer__content-single mt-5">
                  <p className="text-xl fw-5">
                    <i
                      className="fa-solid fa-circle-arrow-right"
                      style={{ color: "#FFBA23" }}
                    ></i>{" "}
                    Our Mission:
                  </p>
                  <p
                    className="text-sm mt-8"
                    style={{
                      textAlign: "justify",
                    }}
                  >
                    To provide businesses across Bangladesh with access to
                    high-quality products and services, helping them grow and
                    succeed by simplifying procurement processes and enhancing
                    operational efficiency.
                  </p>
                </div>

                <div className="mt-40">
                  <Link
                    to="#"
                    aria-label="join now"
                    title="join now"
                    className="btn--primary"
                  >
                    Join Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 col-xl-5 offset-xl-1 d-flex justify-content-center">
              <div
                className="thumb text-center"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <img
                  src="/assets/images/about/about mission.png"
                  alt="Imagee"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="left-thumb">
          <img src="/assets/images/faq/left-thumb.png" alt="Imagee" />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media only screen and (max-width: 768px) {
    .thumb {
      display: flex;
      justify-content: center;
    }
  }
`;

export default VisionMssion;
