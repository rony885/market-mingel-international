import React from "react";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <section
      className="contact"
      style={{
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-8">
            <div
              className="section__header text-center mb-55"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <span className="fw-6 secondary-text text-xl">
                <strong>Contact,</strong> Us With Support
              </span>
              <h2 className="title-animation fw-6 mt-25 text-capitalize">
                Let Us Help You
              </h2>
              <p className="mt-25 fs-5">
                Get in touch with us for questions, feedback, or support. We're
                here to assist with any service inquiries.
              </p>
            </div>
          </div>
        </div>
        <div className="row gutter-24">
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="contact__content">
              <div
                className="contact__content-single"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <div className="icon">
                  <i className="ti ti-map-pin"></i>
                </div>
                <div className="content">
                  <h6 className="fw-6 mb-5">Main Office</h6>
                  <div className="content-group">
                    <p>
                      <Link
                        style={{ textTransform: "capitalize" }}
                        to="https://maps.app.goo.gl/S2mWitN75TT53Sx68"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Paradise House (No-540/5), Road No-12, Baridhara DOHS,
                        Dhaka-1212, Bangladesh
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="contact__content-single mt-20"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <div className="icon">
                  <i className="ti ti-mail-opened"></i>
                </div>
                <div className="content">
                  <h6 className="fw-6 mb-5">Email Address</h6>
                  <div className="content-group">
                    <p>
                      <Link to="mailto:info@marketmingl.com ">
                        info@marketmingl.com{" "}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="contact__content-single mt-20"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <div className="icon">
                  <i className="ti ti-phone-call"></i>
                </div>
                <div className="content">
                  <h6 className="fw-6 mb-5">Phone Number</h6>
                  <div className="content-group">
                    <p>
                      <Link to="tel:+8801830452542 ">+8801830452542 </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-8">
            <div
              className="contact__form"
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div className="contact__form-intro">
                <h5 className="title-animation neutral-top fw-6 text-capitalize">
                  Get In Touch
                </h5>
              </div>
              <hr className="divider mt-30 mb-40" />
              <form>
                <div className="input-wrapper">
                  <label for="fullName"> Name</label>
                  <div className="input-single">
                    <input
                      type="text"
                      name="full-name"
                      id="fullName"
                      required
                    />
                    <i className="fa-solid fa-user"></i>
                  </div>
                </div>

                <div className="input-wrapper mt-30">
                  <label for="cEmail"> Email</label>
                  <div className="input-single">
                    <input type="email" name="c-email" id="cEmail" required />
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                </div>

                <div className="input-wrapper mt-30">
                  <label for="phoneNumber"> Number</label>
                  <div className="input-single">
                    <input
                      type="text"
                      name="phone-number"
                      id="phoneNumber"
                      required
                    />
                    <i className="fa-solid fa-phone"></i>
                  </div>
                </div>

                <div className="input-wrapper mt-30">
                  <label htmlFor="subject">Subject</label>
                  <div className="input-single">
                    <input type="text" name="subject" id="subject" required />
                    <i className="fa-solid fa-tag"></i>
                  </div>
                </div>

                <div className="input-wrapper mt-30">
                  <label for="contactMessage"> Message</label>
                  <div className="input-single alter-input">
                    <textarea
                      name="contact-message"
                      id="contactMessage"
                    ></textarea>
                    <i className="fa-solid fa-comments"></i>
                  </div>
                </div>

                <div className="form-cta mt-40">
                  <button
                    type="submit"
                    aria-label="submit message"
                    title="submit message"
                    className="btn--primary"
                  >
                    Submit Message <i className="ti ti-arrow-narrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
