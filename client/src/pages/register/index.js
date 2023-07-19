import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Select,
} from "@chakra-ui/react";
// Creating yup schema

const schema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Full name must be more than 5 letters")
    .max(20, "Full name must not exceeds 25 letters")
    .required("Required"),

  email: Yup.string().email().required("Required"),

  phoneNumber: Yup.string()
    .min(10, "Phone number should not be less than 10 numbers")
    .max(10, "Phone number should not exceeds 10 numbers")
    .required("Required"),

  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),

  gender: Yup.string().required("Required"),
});

export default function Register() {
  const [isVisible, changeIsVisible] = useState(false);
  const [successfulDisplay, setSuccessfulDisplay] = useState("none");
  const [errorDisplay, setErrorDisplay] = useState("none");

  const handleRegister = async (values, resetForm) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      };
      const res = await fetch("http://localhost:8080/register", requestOptions);

      const data = await res.json();

      if (res.status == 200 && data) {
        console.log(data);
        setSuccessfulDisplay("flex");
        setErrorDisplay("none");
        resetForm();
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
      setErrorDisplay("flex");
      setSuccessfulDisplay("none");
    }
  };

  return (
    <>
      <Header />
      <Formik
        validationSchema={schema}
        initialValues={{
          name: "",
          password: "",
          email: "",
          phoneNumber: "",
        }}
        onSubmit={(values, { resetForm }) => {
          handleRegister(values, resetForm);
        }}
      >
        {({
          values,
          touched,
          handleChange,
          handleSubmit,
          errors,
          handleBlur,
        }) => (
          <section className="user-portal">
            <Alert status="success" style={{ display: successfulDisplay }}>
              <AlertIcon />
              <AlertTitle>Registration Successful</AlertTitle>
              <AlertDescription>
                You have been successfully registered.You can login by clicking
                Login button.
              </AlertDescription>
            </Alert>
            <Alert status="error" style={{ display: errorDisplay }}>
              <AlertIcon />
              <AlertTitle>OOPS</AlertTitle>
              <AlertDescription>
                Looks like you are already registered. Try to login by clicking
                Login button.
              </AlertDescription>
            </Alert>

            <div className="my-4 h-100 d-flex justify-content-center">
              <div
                className="card main-card-login"
                style={{ width: "50rem", height: "38rem" }}
              >
                <h5 className="my-4 mx-3">User Portal </h5>

                <div className="card-body">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a
                        onClick={() => changeIsVisible(true)}
                        className="nav-link"
                        aria-current="page"
                        href="../login"
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
                  ></div>
                  <div
                    className="register-form my-4"
                    style={{ display: !isVisible ? "block" : "none" }}
                  >
                    <form autoComplete="off" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email Address{" "}
                          <span style={{ color: "red" }}> * </span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          name="email"
                          onChange={handleChange}
                          value={values.email}
                          onBlur={handleBlur}
                        />
                        <p className="error mt-2" style={{ color: "red" }}>
                          {errors.email && touched.email && errors.email}
                        </p>
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
                          name="password"
                          onChange={handleChange}
                          value={values.password}
                          onBlur={handleBlur}
                        />
                        <p className="error" style={{ color: "red" }}>
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </p>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Full Name <span style={{ color: "red" }}> * </span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          name="name"
                          onChange={handleChange}
                          value={values.name}
                          onBlur={handleBlur}
                        />
                        <p className="error" style={{ color: "red" }}>
                          {errors.name && touched.name && errors.name}
                        </p>
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
                          name="phoneNumber"
                          onChange={handleChange}
                          value={values.phoneNumber}
                          onBlur={handleBlur}
                        />

                        <p className="error" style={{ color: "red" }}>
                          {errors.phoneNumber &&
                            touched.phoneNumber &&
                            errors.phoneNumber}
                        </p>
                      </div>

                      <div className="mb-5">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Gender <span style={{ color: "red" }}> * </span>
                        </label>

                        <Select
                          placeholder="Choose your Gender"
                          name="gender"
                          style={{margin: "0px"}}
                          onChange={handleChange}
                          value={values.gender}
                          onBlur={handleBlur}
                        >
                          <option> Male </option>
                          <option> Female </option>
                          <option> Other </option>
                        </Select>

                        <p className="error" style={{ color: "red" }}>
                          {errors.gender &&
                            touched.gender &&
                            errors.gender}
                        </p>
                      </div>

                      <button type="submit" className="btn btn-success">
                        Register
                      </button>
                      <div className="form-text my-4">
                        <span style={{ color: "red" }}>*</span> means the field
                        is compulsory.
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Formik>

      <Footer />
    </>
  );
}
