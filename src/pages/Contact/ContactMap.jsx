import React from "react";

const ContactMap = () => {
  return (
    <div className="contact-map">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div
              className="map-inner lh-0"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <iframe
                title="Paradise DOHS Baridhara Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.2426957510097!2d90.40975937602423!3d23.80996738648569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a07dc4686d%3A0x14aed41a22e2279d!2sParadise%20(House-540%2F5%2C%20Road-12%2C%20DOHS%20Baridhara)!5e0!3m2!1sen!2sbd!4v1753095369690!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
