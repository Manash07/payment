import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Box,
} from "@chakra-ui/react";

import React from "react";

import { useRouter } from "next/navigation";
import { setForm } from "@/redux/reducerslice/kycSlice";
import { useDispatch } from "react-redux";

const schema = Yup.object().shape({
  fullName: Yup.string().min(5, "Name must be minimum 5 letters"),
  bankName: Yup.string().min(3, "Bank ame must be minimum 5 letters"),
  bankLocation: Yup.string().min(3, "Bank Location must be minimum 5 letters"),
  bankBranch: Yup.string().min(3, "Bank branch must be minimum 5 letters"),
  bankAccount: Yup.number().min(14, "Bank account must be minimum 14 number"),
  documentType: Yup.string().min(3, "Document type must be minimum 3 letters"),
  documentNumber: Yup.string().min(3, "Document number must be valid."),
  documentIssuedOffice: Yup.string().min(
    3,
    "Document issued office must be minimum 3 letters"
  ),
});

const KYC = () => {

  const router = useRouter();
  const dispatch = useDispatch();

  const steps = [
    { title: "Personal Info" },
    { title: "Bank Info" },
    { title: "Upload documents" },
  ];

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
        console.log(data);
        dispatch(setForm(data))
        router.push('/')
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Stepper index="0" className="mb-3 mt-3">
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
      </Stepper>

      <Formik
        autoComplete="off"
        validationSchema={schema}
        initialValues={{ name: "", password: "", email: "", phoneNumber: "" }}
        onSubmit={(values, { resetForm }) => {
          handleRegister(values, resetForm);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <section className="kyc-form">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="mb-3 mt-3 fullName">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name in your official document
                </label>
                <input
                  type="text"
                  className="form-control name"
                  aria-describedby="emailHelp"
                  onChange={handleChange}
                  value={values.fullName}
                  id="fullName"
                />
              </div>

              <div className="mb-3 mt-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Document Number
                </label>
                <input
                  type="string"
                  className="form-control "
                  aria-describedby="emailHelp"
                  onChange={handleChange}
                  value={values.documentNumber}
                  id="documentNumber"
                />
              </div>

              <div classname="mb-4 mt-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Bank Name
                </label>

                <input
                  type="string"
                  className="form-control "
                  aria-describedby="emailHelp"
                  onChange={handleChange}
                  value={values.bankName}
                  id="bankName"
                />
              </div>

              <div classname="mb-3 mt-4" style={{ marginTop: "3vh" }}>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Bank Location
                </label>
                <input
                  type="string"
                  className="form-control "
                  aria-describedby="emailHelp"
                  onChange={handleChange}
                  placeholder="For example Kathmandu, Lalitpur, Bhaktapur, Biratnagar"
                  value={values.bankLocation}
                  id="bankLocation"
                />
              </div>

              <div classname="mb-3 mx-3 mt-4" style={{ marginTop: "3vh" }}>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Bank Branch
                </label>
                <input
                  type="string"
                  className="form-control "
                  aria-describedby="emailHelp"
                  onChange={handleChange}
                  placeholder="For example Baneshwor, Koteshwor, Thapathali, Kumaripati"
                  value={values.bankBranch}
                  id="bankBranch"
                />
              </div>

              <div className="mb-3 mt-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Bank Account Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  aria-describedby="emailHelp"
                  onChange={handleChange}
                  value={values.bankAccount}
                  id="bankAccount"
                />
              </div>

              <button type="submit" className="btn btn-warning mx-1 mb-3">
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
