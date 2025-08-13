import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Wrapper>
      <section className="hero">
        <div className="video-wrapper">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/assets/videos/intro 1080.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .hero {
    padding-block: 0 !important;
    position: relative;
    overflow: hidden;
  }

  .video-wrapper {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .hero-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (max-width: 768px) {
    .video-wrapper {
      height: 75vh;
    }
  }

  @media only screen and (max-width: 480px) {
    .video-wrapper {
      height: 60vh;
    }
  }
`;

export default HeroSection;
