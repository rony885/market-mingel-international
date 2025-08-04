import React from "react";

const AboutUs = () => {
  return (
    <section
      className="about about-alternate"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 col-xl-6">
            <div
              className="about__content"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <div className="section__content text-start">
                <span className="fw-6 secondary-text text-xl">
                  <strong>About</strong> Us
                </span>
                {/* <h2 className="title-animation fw-6 mt-25">
                  Join the Top-Rated Lottery, <span>Play Here</span>
                </h2> */}
                <p className="mt-25" style={{ textAlign: "justify" }}>
                  Market Mingl Int. is a leading partnership firm based in
                  Dhaka, Bangladesh, specializing in indenting services.
                </p>
                <p className="mt-25" style={{ textAlign: "justify" }}>
                  Established in 2024, Our company has developed a strong
                  reputation for providing efficient, reliable, and high-quality
                  sourcing and indenting solutions.
                </p>
                <p className="mt-25" style={{ textAlign: "justify" }}>
                  We serve a broad range of industries, including manpower,
                  manufacturing, textiles, chemicals, and more.
                </p>
                <p className="mt-25" style={{ textAlign: "justify" }}>
                  As one of the premier indenting companies in Bangladesh, we
                  connect businesses with top manufacturers and suppliers
                  worldwide, ensuring they have access to the best products at
                  competitive prices. Our goal is to streamline the procurement
                  process, reduce costs, and help our clients achieve timely
                  delivery of goods while maintaining the highest standards of
                  quality.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
            <div
              className="authentication__thumb text-center d-lg-block"
              style={{
                backgroundImage: `url(/assets/images/authentication/thumb-sm.png)`,
              }}
            >
              <div className="circle-img">
                <img
                  src="/assets/images/authentication/circle.png"
                  alt="Imagee"
                />
              </div>
              <div className="thumb">
                <img
                  // src="/assets/images/authentication/thumb.png"
                  src="/assets/images/about/1.svg"
                  alt="Imagee"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay="200"
                />
              </div>
              <div className="number-img">
                <img
                  src="/assets/images/authentication/numbers.png"
                  alt="Imagee"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="left-thumb">
        <img src="/assets/images/spring.png" alt="Imagee" />
      </div>
      <div className="rocket">
        <img src="/assets/images/rocket-sm.png" alt="Imagee" />
      </div>
    </section>
  );
};

export default AboutUs;
