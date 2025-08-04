import React from "react";
import { Link } from "react-router-dom";

const TermsConditionsInfo = () => {
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
                  <p className="mt-20">Terms & Conditions: </p>
                  <p className="mt-20 mb-2">
                    *** MARKETMINGL INTERNATIONALS is capable of professionally
                    representing any reputed company's goods and services in
                    Bangladesh.
                  </p>
                  <p className="mb-2">
                    *** Any venture will be Governed by and comply with the laws
                    of Bangladesh & the representation county.
                  </p>
                  <p className="mb-2">
                    *** Every business dealings must be acknowledged by both
                    parties.
                  </p>

                  <p className="mt-20">
                    Particular Duties & Responsibilities:{" "}
                  </p>
                  <p className="mt-20 mb-2">
                    1. Obtain all required license, permission, certification,
                    complete all or necessary legal documentations,
                    environmental policy, regulations, safety & hazard practices
                    for import/export of products or services in Bangladesh.
                  </p>
                  <p className="mb-2">
                    2. Entails overseeing duties such as scheduling, logistical
                    coordination, paperwork management, and facilitating
                    communication amongst various operational units while
                    operating business.
                  </p>
                  <p className="mb-2">
                    3. Obtain, arrange or collect from Bangladesh
                    governmentprivate all business serviceswork order, purchase
                    orders, selling orders, documentation etc.
                  </p>
                  <p className="mb-2">
                    4. In charge of managing and arranging a variety of
                    operational tasks to guarantee seamless and effective
                    operations.
                  </p>
                  <p className="mb-2">
                    5. In charge of directing and supervising all related
                    marketing initiatives.
                  </p>
                  <p className="mb-2">
                    6.In charge of creating and carrying out marketing plans and
                    making sure they complement the overarching objectives.
                  </p>
                  <p className="mb-2">
                    7. Exercise opportunities where appropriate and necessary to
                    forge joint venture with Bangladeshi companies.
                  </p>
                  <p className="">
                    8. First hand cooperation with partner in all issues.
                    Accepted and maximize efforts to getting best quality for
                    customers.
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

export default TermsConditionsInfo;
