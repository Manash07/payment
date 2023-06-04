import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { setLogin } from "@/redux/reducerslice/userSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

// Creating yup schema

const schema = Yup.object().shape({
 
  phoneNumber: Yup.string()
    .min(10, "Phone number should not be less than 10 numbers")
    .max(10, "Phone number should not exceeds 10 numbers")
    .required("Required"),

  password: Yup.string()
    .required("Required")
});

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isVisible, changeIsVisible] = useState(true);

  const handleLogin = async (values, resetForm) => { 

    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      };
      const res = await fetch("http://localhost:8080/login", requestOptions);
      const data = await res.json();
      if (res.status == 200) {
        console.log(data);
        alert("Login successfully");
        dispatch(setLogin(data));
        // resetForm();
        res.json({

          msg:"Successful"
        })

       
      } else {
        console.log("Some problem with the data");
        res.json({

          msg:"Internal error"
        })
      }
    } catch (err) {
      console.log(err);
      alert("Problem while login")
    }
  };

  return (
    <>
      <Header />
      <Formik
        validationSchema={schema}
        initialValues={{
          password: '',
          phoneNumber: '',
        }}
        onSubmit={(values, { resetForm }) => {
          handleLogin(values, resetForm);
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
            <div className="my-4 h-100 d-flex justify-content-center">
              <div
                className="card main-card-login"
                style={{ width: "50rem", height: "38rem" }}
              >
                <h5 className="my-4 mx-3">User Portal </h5>

                <div className="card-body">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <Link
                        onClick={() => changeIsVisible(true)}
                        className="nav-link"
                        aria-current="page"
                        href="#"
                      >
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a
                        onClick={() => changeIsVisible(false)}
                        className="nav-link"
                        href="../register"
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                  <div
                    className="loginForm my-4"
                    style={{ display: !isVisible ? "block" : "none" }}
                  ></div>
                  <div
                    className="register-form my-4"
                    style={{ display: isVisible ? "block" : "none" }}
                  >
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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
                          value={values.phoneNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <p className="error" style={{ color: "red" }}>
                        {errors.phoneNumber &&
                          touched.phoneNumber &&
                          errors.phoneNumber}
                      </p>
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
                          onChange={handleChange}
                          value={values.password}
                          name="password"
                          onBlur={handleBlur}
                        />
                      </div>
                      <p className="error" style={{ color: "red" }}>
                        {errors.password && touched.password && errors.password}
                      </p>

                      <button type="submit" className="btn btn-success">
                        Login
                      </button>
                      <div className="form-text my-3">
                        <span style={{ color: "darkgreen" }}>*</span> means the
                        field is optional.
                      </div>
                      <div className="form-text">
                        <span style={{ color: "red" }}>*</span> means the field
                        is compulsory
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
