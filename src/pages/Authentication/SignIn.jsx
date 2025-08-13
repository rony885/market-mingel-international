import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="authentication">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 col-xl-6">
            <div
              className="authentication__inner"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <div className="authentication__intro">
                <Link
                  to="/"
                  aria-label="back to home"
                  title="back to home"
                  className="btn--primary"
                >
                  <i className="ti ti-arrow-narrow-left"></i>Back To Home
                </Link>
              </div>
              <div className="authentication__content mt-80">
                <h4 className="title-animation neutral-top fw-6 mb-10">
                  Let's Get Started!
                </h4>
                <p>Sign in to your account and join us</p>
              </div>
              <div className="authentication__form mt-55">
                <form action="#" method="post">
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
                  <div className="input-wrapper mt-30 password-group">
                    <label for="authPassword">Your Password</label>
                    <div className="input-single">
                      <input
                        type="password"
                        name="auth-password"
                        id="authPassword"
                        placeholder="Enter password"
                        required
                      />
                      <i className="ti ti-eye-off show-pass"></i>
                    </div>
                  </div>
                  <p className="text-end mt-16 forget-pass">
                    <Link to="/contact">Forget Password?</Link>
                  </p>
                  <p className="create-msg mt-20">
                    Don't have an account? <Link to="/sign-up">Sign Up</Link>
                  </p>
                  <div className="mt-40">
                    <button
                      type="submit"
                      aria-label="submit message"
                      title="submit message"
                      className="btn--primary"
                    >
                      Sign In<i className="ti ti-arrow-narrow-right"></i>
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

export default SignIn;
