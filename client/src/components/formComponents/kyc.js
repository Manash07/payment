import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { setForm } from "@/redux/reducerslice/kycSlice";
import { useDispatch, useSelector } from "react-redux";

const schema = Yup.object().shape({
  fullName: Yup.string()
    .min(5, "Full name must be more than 5 letters")
    .max(20, "Full name must not exceeds 25 letters")
    .required("Required"),
  phoneNumber: Yup.string()
    .min(10, "Phone number must be 10 numbers")
    .max(10, "Phone number cannot exceed 10 numbers")
    .required("Required"),
  bankName: Yup.string()
    .min(5, "Bank ame must be minimum 5 letters")
    .max(20, "Bank name must not exceeds 25 letters")
    .required("Required"),
  bankLocation: Yup.string()
    .min(5, "Bank Location must be minimum 5 letters")
    .max(20, "Bank name must not exceeds 25 letters")
    .required("Required"),
  bankBranch: Yup.string()
    .min(5, "Bank branch must be minimum 5 letters")
    .required("Required"),
  bankAccount: Yup.string()
    .min(14, "Bank account must be minimum 14 number")
    .max(14, "Bank account must not exceeds 14 number")
    .required("Required"),
  documentType: Yup.string()
    .min(3, "Document type must be minimum 3 letters")
    .max(20, "Document name must not exceeds 25 letters"),

  documentNumber: Yup.string()
    .min(3, "Document number must be valid.")
    .required("Required"),
  documentIssuedOffice: Yup.string().min(
    3,
    "Document issued office must be minimum 3 letters"
  ),
});

const KYC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const toast = useToast();

  const { status } = useSelector((state) => state.kycForm);

  const handleRegister = async (values, resetForm) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      };

      const res = await fetch("http://localhost:8080/kyc", requestOptions);

      const data = await res.json();

      if (res.status == 200 && data) {
        dispatch(setForm(data));
        resetForm();
        toast({
          title: "Successfully submitted",
          description: "Please wait.......",
          status: "success",
          duration: 2000,
          isClosable: true,
        });

        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else {
        toast({
          title: "Could not submit",
          description: "Phone number already exists or wrong phone number.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* <Stepper index="0" className="mb-3 mt-3">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper> */}

      <Formik
        autoComplete="off"
        validationSchema={schema}
        initialValues={{
          phoneNumber: "",
          name: "",
          documentType: "",
          bankLocation: "",
          bankBranch: "",
        }}
        onSubmit={(values, { resetForm }) => {
          handleRegister(values, resetForm);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          touched,
          errors,
          handleBlur,
        }) => (
          <section className="kyc-form mb-3 mt-3">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4 col-lg-4 col-sm-12">
                    <div className="mb-3 mt-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        <span style={{ color: "blue" }}>
                          {" "}
                          Registered Mobile Number (required) *{" "}
                        </span>
                      </label>
                      <input
                        type="number"
                        className="input-custom"
                        onChange={handleChange}
                        value={values.phoneNumber}
                        id="phoneNumber"
                        onBlur={handleBlur}
                      />

                      <p className="error" style={{ color: "red" }}>
                        {errors.phoneNumber &&
                          touched.phoneNumber &&
                          errors.phoneNumber}
                      </p>
                    </div>

                    <div className="mb-3 mt-3 fullName">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Name in your official document
                      </label>
                      <input
                        type="text"
                        className="input-custom"
                        onChange={handleChange}
                        value={values.fullName}
                        id="fullName"
                        onBlur={handleBlur}
                      />

                      <p className="error" style={{ color: "red" }}>
                        {errors.fullName && touched.fullName && errors.fullName}
                      </p>
                    </div>

                    <div className="mb-3 mt-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Document Number
                      </label>
                      <input
                        type="text"
                        className="input-custom"
                        onChange={handleChange}
                        value={values.documentNumber}
                        id="documentNumber"
                        onBlur={handleBlur}
                      />
                      <p className="error" style={{ color: "red" }}>
                        {errors.documentNumber &&
                          touched.documentNumber &&
                          errors.documentNumber}
                      </p>
                    </div>
                  </div>

                  <div className="mx-5 px-5 col-md-4 col-lg-4 col-sm-12">
                    <div classname="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Bank Name
                      </label>

                      <input
                        type="text"
                        className="input-custom"
                        onChange={handleChange}
                        value={values.bankName}
                        id="bankName"
                        onBlur={handleBlur}
                      />

                      <p className="error" style={{ color: "red" }}>
                        {errors.bankName && touched.bankName && errors.bankName}
                      </p>
                    </div>

                    <div classname="mb-3 mt-4" style={{ marginTop: "3vh" }}>
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Bank Location
                      </label>
                      <input
                        type="text"
                        className="input-custom"
                        onChange={handleChange}
                        value={values.bankLocation}
                        id="bankLocation"
                        onBlur={handleBlur}
                      />

                      <p className="error" style={{ color: "red" }}>
                        {errors.bankLocation &&
                          touched.bankLocation &&
                          errors.bankLocation}
                      </p>
                    </div>

                    <div classname="mb-3 mx-3" style={{ marginTop: "3vh" }}>
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Bank Branch
                      </label>
                      <input
                        type="text"
                        className="input-custom"
                        onChange={handleChange}
                        value={values.bankBranch}
                        id="bankBranch"
                        onBlur={handleBlur}
                      />

                      <p className="error" style={{ color: "red" }}>
                        {errors.bankBranch &&
                          touched.bankBranch &&
                          errors.bankBranch}
                      </p>
                    </div>

                    <div className="mb-3 mt-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Bank Account Number
                      </label>
                      <input
                        type="number"
                        className="input-custom"
                        onChange={handleChange}
                        value={values.bankAccount}
                        id="bankAccount"
                        onBlur={handleBlur}
                      />

                      <p className="error" style={{ color: "red" }}>
                        {errors.bankAccount &&
                          touched.bankAccount &&
                          errors.bankAccount}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-success mx-3 mb-3">
                Submit
              </button>
            </form>
          </section>
        )}
      </Formik>

      <h6 className="warning mx-3" style={{ color: "red" }}>
        {" "}
        * * Add valid details only else your form will not be accepted for next
        24 days once it is rejected * *{" "}
      </h6>
    </>
  );
};

export default KYC;
