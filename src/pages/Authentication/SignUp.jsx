import React from "react";

const SignUp = () => {
  return (
    <section className="authentication pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 col-xl-6">
            <div
              className="authentication__inner"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <div className="authentication__content mt-80">
                <h4 className="title-animation neutral-top fw-6 mb-10">
                  Let's Do it together!
                </h4>
                <p>Share Your Business Proposal.</p>
              </div>
              <div className="authentication__form mt-55">
                <form>
                  <div className="input-group-wrapper">
                    <div className="input-wrapper">
                      <label for="authFirstName">First Name</label>
                      <div className="input-single">
                        <input
                          type="text"
                          name="auth-first-name"
                          id="authFirstName"
                          placeholder="Devon"
                          required
                        />
                        <i className="fa-solid fa-user"></i>
                      </div>
                    </div>
                    <div className="input-wrapper">
                      <label for="authLastName">Last Name</label>
                      <div className="input-single">
                        <input
                          type="text"
                          name="auth-last-name"
                          id="authLastName"
                          placeholder="Lana"
                          required
                        />
                        <i className="fa-solid fa-user"></i>
                      </div>
                    </div>
                  </div>
                  <div className="input-wrapper mt-30">
                    <label for="authEmail">Your Email</label>
                    <div className="input-single">
                      <input
                        type="email"
                        name="auth-email"
                        id="authEmail"
                        placeholder="Enter Email"
                        required
                      />
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                  </div>

                  <div className="input-wrapper mt-30 attachment-group">
                    <label htmlFor="authAttachment">Upload Document</label>
                    <div className="input-single">
                      <input
                        type="file"
                        name="auth-attachment"
                        id="authAttachment"
                        required
                      />
                      <i className="ti ti-paperclip attachment-icon"></i>
                    </div>
                  </div>

                  <div className="mt-40">
                    <button
                      type="submit"
                      aria-label="submit message"
                      title="submit message"
                      className="btn--primary"
                    >
                      Send<i className="ti ti-arrow-narrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
            <div
              className="authentication__thumb text-center d-lg-block"
              style={{
                backgroundImage: `url("/assets/images/authentication/thumb-sm.png")`,
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
                  src="/assets/images/authentication/24.png"
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
    </section>
  );
};

export default SignUp;
