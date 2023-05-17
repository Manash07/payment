import React, { useState } from "react";

const Login = () => {
  const [isVisible, changeIsVisible] = useState(true);
  return (
    <>
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
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password <span style={{ color: "red" }}> * </span>
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
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
            <span style={{ color: "darkgreen" }}>*</span> means the field is
            optional.
          </div>
          <div className="form-text">
            <span style={{ color: "red" }}>*</span> means the field is
            compulsory
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
