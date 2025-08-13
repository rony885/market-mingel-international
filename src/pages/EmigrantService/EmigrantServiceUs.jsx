import React from "react";

const EmigrantServiceUs = () => {
  return (
    <section
      className="about about-alternate"
      style={{
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
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
                  <strong>Emigrant</strong> Expert
                </span>
                {/* <h2 className="title-animation fw-6 mt-25">
                  Join the Top-Rated Lottery, <span>Play Here</span>
                </h2> */}
                <p className="mt-25">
                  We are more than just a manpower agency — we are a complete
                  visa, procurement, and travel solution provider.
                </p>
                <p className="mt-25 mb-0">
                  At MarketMingl International, we offer a full spectrum of visa
                  services including:{" "}
                  <ul
                    className="mt-10"
                    style={{ listStyle: "none", paddingLeft: 0 }}
                  >
                    <li>✅ Work Permit Visas for Europe and the Middle East</li>
                    <li>✅ Tourist Visas for global destinations</li>
                    <li>
                      ✅ Business Visas for entrepreneurs and corporate
                      travelers
                    </li>
                    <li>✅ Student Visas for higher education abroad</li>
                  </ul>
                </p>
                <p className="mt-25">
                  We ensure end-to-end guidance — from document preparation and
                  embassy support to BMET fingerprinting, air ticketing, and
                  post-arrival orientation.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
            <div
              className="authentication__thumb text-center d-lg-block"
              style={{
                backgroundImage: `url(/assets/images/authentication/thumb-sm.png)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
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
                  src="/assets/images/emigrant-service/emiugrant service-1.png"
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

export default EmigrantServiceUs;
