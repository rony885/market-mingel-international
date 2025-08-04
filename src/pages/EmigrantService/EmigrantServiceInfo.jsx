// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import serviceDataArray from "../../emigrantServiceData.js";

// const EmigrantServiceInfo = () => {
//   const [emigrantService, setEmigrantService] = useState([]);

//   useEffect(() => {
//     setEmigrantService(serviceDataArray);
//   }, []);

//   // Categories as you provided
//   const categories = [
//     { name: "All" },
//     { name: "Work Permits" },
//     { name: "Tourist & Visit" },
//     { name: "Student" },
//     { name: "Business" },
//   ];

//   // React state to keep track of selected category for filtering
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // Filtered gameData based on selected category
//   const filteredData =
//     selectedCategory === "All"
//       ? emigrantService
//       : emigrantService.filter((item) =>
//           item.category.includes(selectedCategory)
//         );

//   return (
//     <Wrapper>
//       <section
//         className="game-two game-two-alternate"
//         style={{
//           paddingTop: "60px",
//           paddingBottom: "60px",
//         }}
//       >
//         <div className="container">
//           <div
//             className="section__header text-center mb-55"
//             data-aos="fade-up"
//             data-aos-duration="600"
//           >
//             <span className="fw-6 secondary-text text-xl">
//               <strong>Our</strong> Visa Details
//             </span>
//             <h2
//               className="title-animation fw-6 mt-25 text-capitalize"
//               style={{ fontSize: "30px", lineHeight: "40px" }}
//             >
//               Whether you're dreaming of working abroad, studying overseas,
//               expanding your business, or traveling the world — MarketMingl
//               International is your trusted gateway.
//             </h2>
//           </div>
//           <div className="row gutter-24">
//             {/* Search sidebar */}
//             <div className="col-12 col-xl-4">
//               <div className="lottery-sidebar">
//                 <div className="lottery__result-form">
//                   <form
//                     onSubmit={(e) => {
//                       e.preventDefault();
//                       // You can add search handling here if you want
//                     }}
//                   >
//                     <div className="group-pst">
//                       <input
//                         type="text"
//                         name="search-product"
//                         id="searchProduct"
//                         placeholder="Search Here..."
//                         required
//                       />
//                       <button type="submit">
//                         <i className="fa-solid fa-magnifying-glass"></i>
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>

//             {/* Category buttons */}
//             <div className="col-12 col-xl-8">
//               <div
//                 className="result__tab-btns text-start text-xl-end"
//                 style={{ whiteSpace: "nowrap", overflowX: "auto" }}
//               >
//                 <ul className="uull row_horizon" role="tablist">
//                   {categories.map((cat) => (
//                     <li key={cat.name}>
//                       <button
//                         className={
//                           selectedCategory === cat.name ? "active" : ""
//                         }
//                         onClick={() => setSelectedCategory(cat.name)}
//                         data-filter={cat.filter}
//                       >
//                         {cat.name}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Filtered game cards */}
//           <div className="row gutter-24 mt-40 filter-wrapper">
//             {filteredData.map((emigrantServc, index) => (
//               <div
//                 key={emigrantServc.id}
//                 className="col-12 col-md-6 col-xl-4 col-xxl-3 filter-item "
//                 data-aos="fade-up"
//                 data-aos-duration="600"
//                 data-aos-delay={index * 100}
//               >
//                 <div className="lt-type__single text-center tilt">
//                   <div className="thumb">
//                     <img src={emigrantServc.image} alt={emigrantServc.title} />
//                   </div>
//                   {/* <span className="serial">Featured </span> */}
//                   <span className="price">
//                     <i className="fa-solid fa-star"></i> 5
//                   </span>

//                   <div className="content mt-25">
//                     <span className="text-uppercase fw-6 secondary-text">
//                       {emigrantServc.title}
//                     </span>
//                     <h6 className="fw-6 mt-8">
//                       <Link
//                         to={`/emigrant-division-details/${emigrantServc.id}`}
//                       >
//                         {emigrantServc.category}
//                       </Link>
//                     </h6>
//                   </div>
//                   <div className="cta mt-25">
//                     <Link
//                       to={`/emigrant-division-details/${emigrantServc.id}`}
//                       aria-label="view details"
//                       title="view details"
//                       className="btn--primary"
//                     >
//                       View Details <i className="ti ti-arrow-narrow-right"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="row">
//             <div className="col-12">
//               <div
//                 className="pagination-wrapper mt-40"
//                 data-aos="fade-up"
//                 data-aos-duration="600"
//                 data-aos-delay="100"
//               >
//                 <ul className="pagination">
//                   <li>
//                     <button>
//                       <i className="ti ti-chevron-left"></i>
//                     </button>
//                   </li>
//                   <li>
//                     <Link to="games-two.html">1</Link>
//                   </li>
//                   <li>
//                     <Link to="games-two.html" className="active">
//                       2
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="games-two.html">3</Link>
//                   </li>
//                   <li>
//                     <button>
//                       <i className="ti ti-chevron-right"></i>
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Decorative images */}
//         <div className="chart">
//           <img src="/assets/images/chart.png" alt="Chart" />
//         </div>

//         <div className="rocket">
//           <img src="/assets/images/rocket.png" alt="Rocket" />
//         </div>
//         <div className="left-thumb">
//           <img src="/assets/images/left-th.png" alt="Left Thumb" />
//         </div>
//       </section>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .row_horizon {
//     overflow-x: auto !important;
//     flex-wrap: nowrap !important;
//     -webkit-overflow-scrolling: touch; /* optional for smoother scrolling on touch devices */
//   }

//   .uull li {
//     margin-bottom: 0px !important;
//   }

//   .row_horizon::-webkit-scrollbar {
//     height: 0px !important;
//   }

//   .row_horizon::-webkit-scrollbar-track {
//     background: #f1f1f1;
//   }

//   .row_horizon::-webkit-scrollbar-thumb {
//     background: #888;
//     border-radius: 4px;
//   }

//   .row_horizon::-webkit-scrollbar-thumb:hover {
//     background: #555;
//   }
// `;

// export default EmigrantServiceInfo;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import serviceDataArray from "../../emigrantServiceData.js";

const EmigrantServiceInfo = () => {
  const [emigrantService, setEmigrantService] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8; // Adjust as needed

  useEffect(() => {
    setEmigrantService(serviceDataArray);
  }, []);

  const categories = [
    { name: "All" },
    { name: "Work Permits" },
    { name: "Tourist & Visit" },
    { name: "Student" },
    { name: "Business" },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // reset to page 1 on search
  };

  // Filtering by category and search term
  const filteredData = emigrantService.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category.includes(selectedCategory);
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <Wrapper>
      <section
        className="game-two game-two-alternate"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        <div className="container">
          <div
            className="section__header text-center mb-55"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <span className="fw-6 secondary-text text-xl">
              <strong>Our</strong> Visa Details
            </span>
            <h2
              className="title-animation fw-6 mt-25 text-capitalize"
              style={{ fontSize: "30px", lineHeight: "40px" }}
            >
              Whether you're dreaming of working abroad, studying overseas,
              expanding your business, or traveling the world — MarketMingl
              International is your trusted gateway.
            </h2>
          </div>

          <div className="row gutter-24">
            {/* Search sidebar */}
            <div className="col-12 col-xl-4">
              <div className="lottery-sidebar">
                <div className="lottery__result-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="group-pst">
                      <input
                        type="text"
                        placeholder="Search Here..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                      <button type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Category buttons */}
            <div className="col-12 col-xl-8">
              <div
                className="result__tab-btns text-start text-xl-end"
                style={{ whiteSpace: "nowrap", overflowX: "auto" }}
              >
                <ul className="uull row_horizon mb-3" role="tablist">
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <button
                        className={
                          selectedCategory === cat.name ? "active" : ""
                        }
                        onClick={() => {
                          setSelectedCategory(cat.name);
                          setCurrentPage(1); // reset to page 1
                        }}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Filtered game cards */}
          <div className="row gutter-24 mt-40 filter-wrapper">
            {paginatedData.length > 0 ? (
              paginatedData.map((emigrantServc, index) => (
                <div
                  key={emigrantServc.id}
                  className="col-12 col-md-6 col-xl-4 col-xxl-3 filter-item"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={index * 100}
                >
                  <div className="lt-type__single text-center tilt">
                    <div className="thumb">
                      <img
                        src={emigrantServc.image}
                        alt={emigrantServc.title}
                      />
                    </div>
                    <span className="price">
                      <i className="fa-solid fa-star"></i> 5
                    </span>
                    <div className="content mt-25">
                      <span className="text-uppercase fw-6 secondary-text">
                        {emigrantServc.title}
                      </span>
                      <h6 className="fw-6 mt-8">
                        <Link
                          to={`/emigrant-division-details/${emigrantServc.id}`}
                        >
                          {emigrantServc.category}
                        </Link>
                      </h6>
                    </div>
                    <div className="cta mt-25">
                      <Link
                        to={`/emigrant-division-details/${emigrantServc.id}`}
                        className="btn--primary"
                      >
                        View Details{" "}
                        <i className="ti ti-arrow-narrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center mt-4">
                <p>No services found for your search.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="row">
              <div className="col-12">
                <div
                  className="pagination-wrapper mt-40 text-center"
                  data-aos="fade-up"
                >
                  <ul className="pagination">
                    <li>
                      <button
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                      >
                        <i className="ti ti-chevron-left"></i>
                      </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, i) => (
                      <li key={i}>
                        <button
                          className={currentPage === i + 1 ? "active" : ""}
                          onClick={() => setCurrentPage(i + 1)}
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages)
                          )
                        }
                        disabled={currentPage === totalPages}
                      >
                        <i className="ti ti-chevron-right"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Decorative images */}
          <div className="chart">
            <img src="/assets/images/chart.png" alt="Chart" />
          </div>
          <div className="rocket">
            <img src="/assets/images/rocket.png" alt="Rocket" />
          </div>
          <div className="left-thumb">
            <img src="/assets/images/left-th.png" alt="Left Thumb" />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .row_horizon {
    overflow-x: auto !important;
    flex-wrap: nowrap !important;
    -webkit-overflow-scrolling: touch;
  }

  .uull li {
    margin-bottom: 0px !important;
  }

  .row_horizon::-webkit-scrollbar {
    height: 0px !important;
  }

  .pagination button.active {
    background-color: #9cecfe;
    color: #000;
  }

  .row_horizon::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
`;

export default EmigrantServiceInfo;
