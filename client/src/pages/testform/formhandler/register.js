import React, { useState } from "react";

const Register = () => {
    const [isVisible, changeIsVisible] = useState(true);

    return(<>

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
    
    </>)
}

export default Register