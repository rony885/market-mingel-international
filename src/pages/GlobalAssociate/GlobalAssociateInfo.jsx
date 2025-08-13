import React from "react";
import styled from "styled-components";

const lotteryData = [
  {
    id: 1,
    //   image: "/assets/images/lottery/two.png",
    image: "/assets/images/associates/1.jpg",
    title: "Hot Lotto",
    price: "$657.54",
  },
  {
    id: 2,
    image: "/assets/images/associates/2.jpg",
    title: "Bingo Jackpot",
    price: "$957.54",
  },
  {
    id: 3,
    image: "/assets/images/associates/3.jpg",
    title: "Euro Millions",
    price: "$698.54",
  },
  {
    id: 4,
    image: "/assets/images/associates/4.jpg",
    title: "OZ Lotto Star",
    price: "$1257.54",
  },

  {
    id: 5,
    image: "/assets/images/associates/5.jpg",
    title: "Hot Lotto",
    price: "$657.54",
  },
  {
    id: 6,
    image: "/assets/images/associates/6.jpg",
    title: "Hot Lotto",
    price: "$657.54",
  },
  {
    id: 7,
    image: "/assets/images/associates/7.jpg",
    title: "Hot Lotto",
    price: "$657.54",
  },
  {
    id: 8,
    image: "/assets/images/associates/8.jpg",
    title: "Hot Lotto",
    price: "$657.54",
  },
  {
    id: 9,
    image: "/assets/images/associates/9.jpg",
    title: "Hot Lotto",
    price: "$657.54",
  },

  {
    id: 10,
    image: "/assets/images/associates/11.jpg",
    title: "Hot Lotto",
    price: "$657.54",
  },
  {
    id: 11,
    image: "/assets/images/associates/12.jpg",
    title: "Hot Lotto",
    price: "$657.54",
  },
  {
    id: 12,
    image: "/assets/images/associates/13.jpg",
    title: "Hot Lotto",
    price: "$657.54",
  },
  {
    id: 13,
    image: "/assets/images/associates/14.jpg",
    title: "Hot Lotto",
    price: "$657.54",
  },
  {
    id: 14,
    image: "/assets/images/associates/15.jpg",
    title: "Hot Lotto",
    price: "$657.54",
  },
  {
    id: 15,
    image: "/assets/images/associates/16.jpg",
    title: "Hot Lotto",
    price: "$657.54",
  },
  {
    id: 16,
    image: "/assets/images/associates/17.jpg",
    title: "Hot Lotto",
    price: "$657.54",
  },
  {
    id: 17,
    image: "/assets/images/associates/18.jpg",
    title: "Hot Lotto",
    price: "$657.54",
  },
  {
    id: 18,
    image: "/assets/images/associates/19.jpg",
    title: "Hot Lotto",
    price: "$657.54",
  },
  {
    id: 19,
    image: "/assets/images/associates/20.jpg",
    title: "Hot Lotto",
    price: "$657.54",
  },
  {
    id: 20,
    image: "/assets/images/associates/21.jpg",
    title: "Hot Lotto",
    price: "$657.54",
  },
  {
    id: 21,
    image: "/assets/images/associates/22.jpg",
    title: "Hot Lotto",
    price: "$657.54",
  },
  {
    id: 22,
    image: "/assets/images/associates/10.jpg",
    title: "Hot Lotto",
    price: "$657.54",
  },
];

const GlobalAssociateInfo = () => {
  return (
    <Wrapper>
      <section
        className="lottery__section"
        style={{
          backgroundImage: `url("/assets/images/lottery/lottery-bg.png")`,
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
              <div className="section__header text-center mb-60">
                <h3 className="title-animation text-capitalize fw-7">
                  Global Associate
                </h3>
              </div>
            </div>
          </div>

          <div className="row">
            {lotteryData.map((lotto) => (
              <div key={lotto.id} className="col-6 col-md-4 col-lg-3 mb-4">
                <div className="lottery__type lt-type-two text-center d-flex flex-column align-items-center justify-content-center h-100">
                  <div className="thumb mb-3 w-100">
                    <img
                      src={lotto.image}
                      alt={`Associate ${lotto.id}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media screen and (max-width: 375px) {
    .lottery__section .row > div {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
`;

export default GlobalAssociateInfo;
