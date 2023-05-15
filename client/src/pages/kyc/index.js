import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import Terms from "./terms/terms";
import Kycform from "./kycform/kyc";

const Kycpage = () => {
  const [name, setName] = useState(null);
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
            <a className="navbar-brand" href="#">
              Link 1
            </a>
            <a className="navbar-brand" href="#">
              Link 2
            </a>
            <a className="navbar-brand" href="#">
              Link 3
            </a>
            <a className="navbar-brand" href="#">
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
            <Kycform />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 main-card-kyc">
            <Terms />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Kycpage;
