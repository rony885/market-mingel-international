import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import serviceDataArray from "../../emigrantServiceData.js";

const EmigrantServiceDetailsInfo = () => {
  const [emigrantServiceDetails, setEmigrantServiceDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setEmigrantServiceDetails(serviceDataArray);
  }, []);

  const findServiceDetails = emigrantServiceDetails.find(
    (serviceDetails) => serviceDetails.id === id // ✅ Match as string
  );

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
                <div className="thumb">
                  <img
                    src={findServiceDetails && findServiceDetails.image}
                    alt="Imagee"
                  />
                </div>
                <div className="content">
                  <h5 className="fw-6 title-animation text-capitalize">
                    {findServiceDetails && findServiceDetails.title} (&nbsp;
                    {findServiceDetails && findServiceDetails.category}&nbsp;)
                  </h5>
                </div>
              </div>
              <div className="details__content mt-40 mb-40">
                <hr className="divider" />
              </div>
              <div
                className="details__content"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                {/* <h6 class="title-animation neutral-top fw-6 text-capitalize mb-0">
                  Jod Conditions:
                </h6> */}
                <p className="mb-0">
                  Visa Type: {findServiceDetails && findServiceDetails.visaType}
                </p>
                <p className="mb-4">
                  Processing Time:&nbsp;
                  {findServiceDetails && findServiceDetails.processingTime}
                </p>

                <p className="mb-4">
                  {findServiceDetails && findServiceDetails.jodConditions}
                </p>

                <h6 class="title-animation neutral-top fw-6 text-capitalize">
                  Job Types:
                </h6>
                {findServiceDetails?.jobcCategory && (
                  <ul className="details__list mt-16 mb-25">
                    {findServiceDetails.jobcCategory.map((job, index) => (
                      <li key={index}>{job}</li>
                    ))}
                  </ul>
                )}

                <h6 class="title-animation neutral-top fw-6 text-capitalize">
                  Salary & Payment Terms:
                </h6>
                <p className="mt-0 mb-0">
                  Salary:&nbsp;
                  {findServiceDetails && findServiceDetails.basicSalary}
                </p>
                <p className="mb-0">
                  Working Hour:&nbsp;
                  {findServiceDetails && findServiceDetails.workingHour}
                </p>
                <p className="mb-0">
                  ***Age Limit:&nbsp;
                  {findServiceDetails && findServiceDetails.ageLimit}
                </p>
                <p className="mb-4">
                  ***Accommodations:&nbsp;
                  {findServiceDetails && findServiceDetails.accommodations}
                </p>

                <h6 class="title-animation neutral-top fw-6 text-capitalize">
                  Required Documents:
                </h6>
                {findServiceDetails?.requiredDocuments && (
                  <ul className="details__list mt-16 mb-25">
                    {findServiceDetails.requiredDocuments.map(
                      (documents, index) => (
                        <li key={index}>{documents}</li>
                      )
                    )}
                  </ul>
                )}

                <p className="mb-0">
                  Processing Time:&nbsp;
                  {findServiceDetails && findServiceDetails.processingTime}
                </p>
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

export default EmigrantServiceDetailsInfo;
