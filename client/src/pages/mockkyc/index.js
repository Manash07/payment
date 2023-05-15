import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";

const Mockkyc = () => {

  const [name, setName] = useState(null)
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
      ></link>
      <Header />
      <section className="header-two">
        <nav className="navbar navbar-expand-lg htwo">
          <div className="container">
            <a class="navbar-brand" href="#">
              Link 1
            </a>
            <a class="navbar-brand" href="#">
              Link 2
            </a>
            <a class="navbar-brand" href="#">
              Link 3
            </a>
            <a class="navbar-brand" href="#">
              Link 4
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Option 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Option 2
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Option 3
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Option 4</a>
                </li>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section className="kycform my-3">
        <div className="container-fluid row">
          <div className="col-sm-12 col-md-6 col-lg-6 main-card-kyc">
            <div className="card mx-2 my-2" style={{ width: "52rem" }}>
              <div className="card-body">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                  <div className="container-fluid">
                    <h5> Please fill your KYC form </h5>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <span style={{ color: "red", fontSize: "13px" }} className="">
                    All fields are mandatory *
                  </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>

                <div className="row">
                  <div className="col-md-6 col-lg-6 col-sm-12">
                    <img
                      src="/Icon.png"
                      className="img-thumbnail my-3"
                      alt="..."
                      style={{ width: "10rem", height: "10rem" }}
                    />
                    <div className="input-group flex-nowrap">
                      <input
                        type="text"
                        className="form-control my-3"
                        placeholder="Enter your name written in citizenship"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                    <div className="input-group flex-nowrap">
                      <input
                        type="number"
                        className="form-control my-3"
                        placeholder="Enter your personal mobile number"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                    <div className="input-group flex-nowrap">
                      <select
                        className="form-select my-3"
                        aria-label="Default select example"
                      >
                        <option selected>Choose your bank</option>
                        <option>Nepal Investment Mega Bank</option>
                        <option>Sunrise Bank</option>
                        <option>Nepal Bank Limited</option>
                      </select>
                    </div>
                    <div className="input-group flex-nowrap">
                      <input
                        type="number"
                        className="form-control my-3"
                        placeholder="Enter your account number"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-12">
                    <div className="input-group flex-nowrap">
                      <select
                        className="form-select my-3"
                        aria-label="Default select example"
                      >
                        <option selected>Choose your branch</option>
                        <option>Kumaripati, Lalitpur</option>
                        <option>Nakkhu, Lalitpur</option>
                        <option>Newroad, Kathmandu</option>
                      </select>
                    </div>

                    <div className="input-group flex-nowrap">
                      <select
                        className="form-select my-3"
                        aria-label="Default select example"
                      >
                        <option selected>Choose your document type</option>
                        <option>License</option>
                        <option>Citizenship</option>
                        <option>National Identity Card</option>
                      </select>
                    </div>

                    <div className="input-group flex-nowrap">
                      <select
                        className="form-select my-3"
                        aria-label="Default select example"
                      >
                        <option selected>Choose document issued office </option>
                        <option>Ekantakuna, Lalitpur</option>
                        <option>Sanobharyang, Kathmandu</option>
                        <option>Jagati, Bhaktapur</option>
                      </select>
                    </div>

                    <div className="input-group flex-nowrap">
                      <input
                        type="number"
                        className="form-control my-3"
                        placeholder="Enter your document number"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>

                    <div className="input-group flex-nowrap">
                      <input
                        type="text"
                        className="form-control my-3"
                        placeholder="Emergency contact person"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>

                    <div className="input-group flex-nowrap">
                      <input
                        type="text"
                        className="form-control my-3"
                        placeholder="Relation with emergency contact person"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>

                    <div className="input-group flex-nowrap">
                      <input
                        type="text"
                        className="form-control my-3"
                        placeholder="Emergency contact person's number"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 main-card-kyc">
            <div className="card mx-2 my-2" style={{ width: "52rem" }}>
              <div className="card-body">
                <h5 className="card-title my-3 mb-3">Terms and Condition</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Please read terms and condition before submitting
                </h6>
                <p className="card-text my-3">
                  <i class="bi bi-arrow-right-square-fill px-2"></i> Registered
                  Merchants are authorized to sell goods and services that are
                  stated in merchant agreement only.{" "}
                </p>
                <p className="card-text my-3">
                  <i class="bi bi-arrow-right-square-fill px-2"></i>Chhitopay
                  continuously endeavor to ensure that ‘Notices and Alerts’ are
                  communicated to users in accordance with your instructions in
                  this regard. However, Chhitopay shall not be held responsible
                  or liable for non-dispatch or delay in dispatch of the alerts
                  for any reason whatsoever.{" "}
                </p>

                <p className="card-text my-3">
                  <i class="bi bi-arrow-right-square-fill px-2"></i> Using Send
                  Money service for the purpose of buying/selling goods and
                  services, foreign currencies, gift cards, gaming
                  coins/cards/utilities, remittance and other deemed illegal by
                  prevailing laws of Nepal Government.{" "}
                </p>
                <p className="card-text my-3">
                  <i class="bi bi-arrow-right-square-fill px-2"></i>Please be
                  aware that your carrier’s normal rates and fees, such as text
                  messaging and data charges, may apply to some carrier and can
                  change from time to time.{" "}
                </p>

                <p className="card-text my-3">
                  <i class="bi bi-arrow-right-square-fill px-2"></i> Over and
                  above the present Terms and Service, Merchants shall agree and
                  qualify all the requirements, and provisions as specified
                  under Merchant Agreement.
                </p>
                <p className="card-text my-3">
                  <i class="bi bi-arrow-right-square-fill px-2"></i> In case of
                  a corporation, trust, association of persons or a firm, which
                  can enter into legally binding contracts under applicable law
                  and shall be authorized to agree to the Terms and Conditions
                  and to access, use and avail the Website and the Services.
                </p>
                <div className="mb-3 form-check d-flex flex-row-reverse">
                  <h6> I agree to terms and condition </h6>
                  <input
                    type="checkbox"
                    className="form-check-input mx-2"
                    id="exampleCheck1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Mockkyc;
