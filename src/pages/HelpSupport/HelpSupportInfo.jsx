import React from "react";
import { Link } from "react-router-dom";

const HelpSupportInfo = () => {
  return (
    <section className="game-details pt-120 pb-120">
      <div className="container">
        <div className="row gutter-40">
          <div className="col-12 col-xl-12">
            <div className="blog__details-card lottery-details__card">
              <div
                className="details__content lottery__poster"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <div className="content">
                  {/* <h5 className="fw-6 title-animation text-capitalize">rr</h5> */}
                  <p className="mt-20">Help & Support: </p>
                  <p className="mt-20 mb-2">
                    Please do not hesitate to call this number directly if you
                    require any assistance: +8801830452542 (WhatsApp).{" "}
                  </p>
                  <p className="">
                    Please make an appointment to visit us in case of an
                    emergency; we would be pleased to speak with you in person.
                  </p>
                </div>
              </div>

              <div className="details__content mt-40 mb-40">
                <hr className="divider" />
              </div>

              <div className="details__content details__footer">
                <div className="details-tag">
                  <div className="tag-header">
                    <p>
                      Follow <i className="ti ti-arrow-move-right"></i>
                    </p>
                  </div>
                  <div className="social">
                    <Link
                      to="https://www.facebook.com/"
                      target="_blank"
                      aria-label="share us on facebook"
                      title="facebook"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link
                      to="https://instagram.com/"
                      target="_blank"
                      aria-label="share us on instagram"
                      title="instagram"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link
                      to="https://x.com/"
                      target="_blank"
                      aria-label="share us on twitter"
                      title="Twitter"
                    >
                      <i className="fab fa-x-twitter"></i>
                    </Link>

                    <Link
                      to="https://www.linkedin.com/"
                      target="_blank"
                      aria-label="share us on linkedin"
                      title="linkedin"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSupportInfo;
