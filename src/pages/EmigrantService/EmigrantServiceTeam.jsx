import React from "react";
import styled from "styled-components";

const slideData = [
  {
    id: 1,
    image: "/assets/images/emigrant-service/portugal-man.jpeg",
    name: "Vitali Ferreira-Santos",
    post: "EU Recruiting Consultant",
  },
  {
    id: 2,
    image: "/assets/images/emigrant-service/diogo-man.jpeg",
    name: "Diogo Capella",
    post: "International immigration Lawyer and Attorney",
  },
];

const EmigrantServiceTeam = () => {
  return (
    <Wrapper>
      <section
        className="game"
        style={{
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-9">
              <div
                className="section__header text-center mb-55"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <span className="fw-6 secondary-text text-xl">
                  <strong>Meet</strong> Our International Visa Experts
                </span>
                <h2
                  className="title-animation fw-6 mt-25 text-capitalize"
                  style={{ fontSize: "40px", lineHeight: "45px" }}
                >
                  Our expertise lies in delivering premier visa consultation and
                  global immigration assistance.
                </h2>
              </div>
            </div>
          </div>

          {/* Two Card Layout */}
          <div className="row justify-content-center">
            <div className="team-card-wrapper d-flex flex-wrap justify-content-center gap-4">
              {slideData.map((slide) => (
                <div className="card-box text-center" key={slide.id}>
                  <div className="thumb">
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className="card-image"
                    />
                  </div>
                  <div className="content mt-3">
                    <h5 className="fw-6 mb-2">{slide.name}</h5>
                    <h6 className="fw-5 mb-1">{slide.post}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Images */}
        <div className="chart">
          <img src="/assets/images/vr.png" alt="Imagee" />
        </div>

        <div className="rocket">
          <img src="/assets/images/rocket.png" alt="Imagee" />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .team-card-wrapper {
    max-width: 1000px;
    margin: 0 auto;
  }

  .card-box {
    width: 100%;
    max-width: 400px;
    /* height: 500px; */
    background-color: var(--tertiary-color);
    border: 1px solid var(--septenary-color);
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .thumb {
    height: 300px; /* ✅ Fixed image height */
    border-radius: 12px;
    overflow: hidden;
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  .content {
    margin-top: auto; /* ✅ Push content to bottom */
    text-align: center;
  }

  .content h5 {
    font-size: 18px;
    margin-bottom: 6px;
  }

  .content h6 {
    font-size: 16px;
    color: #fff;
  }

  @media (max-width: 768px) {
    /* .card-box {
      max-width: 100%;
    } */
  }
`;

export default EmigrantServiceTeam;
