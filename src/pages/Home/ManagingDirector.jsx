import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ManagingDirector = () => {
  return (
    <Wrapper>
      <section
        className="testimonial"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 col-xl-5 mb-4 mb-lg-0">
              <div className="testimonial__thumb">
                <div className="right-thumb text-start">
                  <div className="right__thumb__inner">
                    <img
                      src="/assets/images/about/1.jpeg"
                      alt="Imagee"
                      data-aos="zoom-in"
                      data-aos-duration="600"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 col-xl-6 offset-xl-1">
              <div className="testimonial__content">
                <div className="section__content text-start mb-40">
                  <span className="fw-6 secondary-text text-xl">
                    <strong>What</strong> You need tell us
                  </span>
                  <h2 className="title-animation fw-6 mt-25 text-capitalize">
                    I'm Salman Mahmood, at your service! ready to help with
                    sincere advice
                  </h2>
                </div>

                <div className="content">
                  <p className="text-xl fw-6">
                    Email me:{" "}
                    <Link
                      to="mailto:info@marketmingl.com"
                      style={{
                        textTransform: "lowercase",
                        color: "#FFBA23",
                      }}
                    >
                      info@marketmingl.com
                    </Link>
                  </p>
                </div>

                <div className="content" style={{ marginTop: "15px" }}>
                  <p
                    className="text-xl fw-6 text-capitalize fs-3"
                    style={{ marginBottom: "10px" }}
                  >
                    managing director
                  </p>
                  <p className="text-capitalize fs-3">
                    marketmingl international
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="left-bottom"
          data-aos="fade-right"
          data-aos-duration="600"
        >
          <img src="/assets/images/art.png" alt="Imagee" />
        </div>
        <div
          className="right-bottom"
          data-aos="fade-left"
          data-aos-duration="600"
          data-aos-delay="300"
        >
          <img src="/assets/images/square.png" alt="Imagee" />
        </div>

        <div className="left-thumb-th">
          <img src="/assets/images/left-th.png" alt="Imagee" />
        </div>
        <div className="chart-thumb">
          <img src="/assets/images/chart.png" alt="Imagee" />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media only screen and (max-width: 768px) {
    .testimonial__thumb {
      display: flex;
      justify-content: center;
    }

    .right-thumb {
      text-align: center;
    }

    .right__thumb__inner img {
      max-width: 100%;
      height: auto !important;
    }
  }
`;

export default ManagingDirector;
