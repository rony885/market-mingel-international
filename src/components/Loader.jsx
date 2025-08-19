import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <div className="rocket">🚀</div>
      <div className="flames"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #0e121d;

  .rocket {
    font-size: 5rem;
    animation: float 1.5s infinite ease-in-out;
  }

  .flames {
    width: 20px;
    height: 40px;
    background: radial-gradient(circle at top, #ff6b6b, #ffb347);
    border-radius: 50% 50% 50% 50%;
    animation: flame 0.4s infinite alternate;
    margin-top: -10px;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes flame {
    0% {
      transform: scaleY(0.8);
      opacity: 0.8;
    }
    100% {
      transform: scaleY(1.2);
      opacity: 1;
    }
  }
`;

export default Loader;
