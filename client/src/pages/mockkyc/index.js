import Header from "@/components/header";
import Footer from "@/components/footer";

const Kycform = () => {
  return (
    <>
      <Header />
      <section className="header-two">
        <nav className="navbar navbar-expand-lg htwo">
          <div className="container">
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
        <div className="container">
          <h5> Please fill your KYC Form </h5>
          <div className="my-4 h-80 d-flex justify-content-start">
            <div className="card" style={{ width: "45rem" }}>
              <div className="card-body">
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
                  </div>
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

export default Kycform;
