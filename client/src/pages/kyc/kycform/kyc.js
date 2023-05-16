
const Kycform = () => {
  return (
    <>
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
                        <span
                          style={{ color: "red", fontSize: "13px" }}
                          className=""
                        >
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
                    src="/icon.png"
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
    </>
  );
};

export default Kycform
