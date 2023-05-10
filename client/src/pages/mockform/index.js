import React, { useState } from "react";
export default function Mockhome() {
  const [isVisible, changeIsVisible] = useState(true);
  return (
    <>
      <section className="user-portal">
        <div className="my-4 h-100 d-flex justify-content-center">
          <div
            className="card main-card-login"
            style={{ width: "50rem", height: "38rem" }}
          >
            <h5 className="my-4 mx-3">User Portal</h5>

            <div className="card-body">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    onClick={() => changeIsVisible(true)}
                    className="nav-link"
                    aria-current="page"
                    href="#"
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={() => changeIsVisible(false)}
                    className="nav-link"
                    href="#"
                  >
                    Register
                  </a>
                </li>
              </ul>
              <div
                className="loginForm my-4"
                style={{ display: isVisible ? "block" : "none" }}
              >
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Username <span style={{ color: "darkgreen" }}> * </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password <span style={{ color: "red" }}> * </span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Phone Number <span style={{ color: "red" }}> * </span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <button type="submit" className="btn btn-success">
                    Login
                  </button>
                  <div className="form-text my-3">
                    <span style={{ color: "darkgreen" }}>*</span> means the
                    field is optional.
                  </div>
                  <div className="form-text">
                    <span style={{ color: "red" }}>*</span> means the field is
                    compulsory
                  </div>
                </form>
              </div>
              <div
                className="register-form my-4"
                style={{ display: !isVisible ? "block" : "none" }}
              >
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email Address <span style={{ color: "red" }}> * </span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password <span style={{ color: "red" }}> * </span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Confirm Password <span style={{ color: "red" }}> * </span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Phone Number <span style={{ color: "red" }}> * </span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <button type="submit" className="btn btn-success">
                    Register
                  </button>
                  <div className="form-text my-4">
                    <span style={{ color: "red" }}>*</span> means the field is
                    compulsory.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
