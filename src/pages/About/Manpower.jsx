import React from "react";
import styled from "styled-components";

const Manpower = () => {
  return (
    <Wrapper>
      <section
        className="testimonial"
        style={{ paddingTop: "0px", paddingBottom: "40px", marginTop: "0px" }}
      >
        <div className="container">
          <div
            className="section__header text-center"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <span className="fw-6 secondary-text text-xl">
              <strong>Industries</strong> We Serve
            </span>
          </div>
          <br />

          <div className="row align-items-center">
            <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
              <div className="testimonial__content">
                <div className="section__content text-center mb-40 d-flex justify-content-center align-items-center flex-column gap-2">
                  <span className="fw-6 secondary-text text-xl">
                    <strong>Manpower</strong>
                  </span>
                  <span className="fw-6 secondary-text text-xl">
                    <strong> Manufacturing</strong>
                  </span>
                  <span className="fw-6 secondary-text text-xl">
                    <strong>Textiles & Garments</strong>
                  </span>
                  <span className="fw-6 secondary-text text-xl">
                    <strong>Chemicals & Pharmaceuticals</strong>
                  </span>
                  <span className="fw-6 secondary-text text-xl">
                    <strong>Construction & Infrastructure</strong>
                  </span>
                  <span className="fw-6 secondary-text text-xl">
                    <strong>Food & Beverages</strong>
                  </span>
                  {/* <p
                    className="text-xl fw-6 text-capitalize"
                    style={{
                      fontSize: "36px",
                      lineHeight: "40px",
                      marginTop: "20px",
                    }}
                  >
                    Industries we serve
                  </p> */}
                </div>

                <div className="testimonial__slider swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial__slider-single">
                        <div className="content"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5 col-xl-5 d-flex justify-content-center">
              <div className="testimonial__thumb d-lg-block">
                <div className="right-thumb text-end">
                  <div className="right__thumb__inner">
                    <img
                      src="/assets/images/about/manpower.png"
                      alt="Imagee"
                      data-aos="zoom-in"
                      data-aos-duration="600"
                    />
                  </div>
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
    .thumb {
      display: flex;
      justify-content: center;
    }
  }
`;

export default Manpower;
