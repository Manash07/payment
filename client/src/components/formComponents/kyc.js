import { useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import React from "react";
import { useToast, Select } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { setForm } from "@/redux/reducerslice/kycSlice";
import { useDispatch, useSelector } from "react-redux";
import bankList from "@/data/banklist";
import { district, branches } from "@/data/banklist";
import axios from "axios";

const schema = Yup.object().shape({
  fullName: Yup.string()
    .min(5, "Full name must be more than 5 letters")
    .max(20, "Full name must not exceeds 25 letters")
    .required("Required"),
  phoneNumber: Yup.string()
    .min(10, "Phone number must be 10 numbers")
    .max(10, "Phone number cannot exceed 10 numbers")
    .required("Required"),
  bankName: Yup.string().required("Required"),
  bankLocation: Yup.string().required("Required"),
  bankBranch: Yup.string()
    .min(5, "Bank branch must be minimum 5 letters")
    .required("Required"),
  bankAccount: Yup.string().required("Required"),
  documentType: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  userImage: Yup.string(),
});

const KYC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const toast = useToast();
  const [selectedBank, setBank] = useState("");
  const [selectedDist, setDist] = useState("");
  const filteredBranch = branches.filter((e) => e.value == selectedDist);
  const { status } = useSelector((state) => state.kycForm);
  const { phoneNumber } = useSelector((state) => state.nameManash);
  const [file, setFile] = useState(null);

  console.log(file);

  const handleRegister = async (values, resetForm) => {
    const form = new FormData();

    Object.entries(values).forEach((item) => {
      form.append(item[0], item[1]);
      console.log(item[1]);
    });
    form.append("userImage", file);

    try {
      const res = await axios.post("http://localhost:8080/kyc", form);

      const data = await res.data;

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
          description:
            "Phone number already exists.Try to edit your details instead.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (err) {
      toast({
        title: "Could not submit",
        description:
          "Phone number already exists.Try to edit your details instead.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Formik
        autoComplete="off"
        validationSchema={schema}
        initialValues={{
          phoneNumber: phoneNumber,
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
                          Registered Mobile Number
                        </span>
                      </label>
                      <input
                        type="number"
                        className="input-custom"
                        onChange={handleChange}
                        value={values.phoneNumber}
                        id="phoneNumber"
                        onBlur={handleBlur}
                        disabled
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
                        Upload your document
                      </label>
                      <input
                        type="file"
                        className=""
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                        }}
                        value={values.userImage}
                        id="userImage"
                        onBlur={handleBlur}
                      />

                      <p className="error" style={{ color: "red" }}>
                        {errors.userImage &&
                          touched.userImage &&
                          errors.userImage}
                      </p>
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label mt-3"
                        style={{ fontSize: "15px" }}
                      >
                        Gender
                      </label>

                      <div className="mb-4" id="my-radio-group"></div>
                      <div role="group" aria-labelledby="my-radio-group">
                        <label className="mx-0" style={{ fontSize: "15px" }}>
                          <Field
                            className="mx-1"
                            type="radio"
                            name="gender"
                            value="Male"
                            style={{ width: "20px", height: "20px" }}
                          />
                          Male
                        </label>
                        <label className="mx-0" style={{ fontSize: "15px" }}>
                          <Field
                            className="mx-2"
                            type="radio"
                            name="gender"
                            value="Female"
                            style={{ width: "20px", height: "20px" }}
                          />
                          Female
                        </label>
                        <label className="mx-0" style={{ fontSize: "15px" }}>
                          <Field
                            className="mx-2"
                            type="radio"
                            name="gender"
                            value="Other"
                            style={{ width: "20px", height: "20px" }}
                          />
                          Other
                        </label>
                      </div>

                      <p className="error" style={{ color: "red" }}>
                        {errors.gender && touched.gender && errors.gender}
                      </p>
                    </div>

                    <div className="mb-3 mt-3 ">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Document Type
                      </label>
                      <Select
                        placeholder="Choose your document type"
                        name="documentType"
                        style={{ margin: "0px" }}
                        onChange={handleChange}
                        value={values.documentType}
                        onBlur={handleBlur}
                      >
                        <option> Citizenship </option>
                        <option> License </option>
                        <option> National Identity Card </option>
                        <option> Government Officer ID </option>
                        <option> Election Voter Card </option>
                      </Select>

                      <p className="error" style={{ color: "red" }}>
                        {errors.documentType &&
                          touched.documentType &&
                          errors.documentType}
                      </p>
                    </div>
                  </div>

                  <div className="mx-5 px-5 col-md-5 col-lg-5 col-sm-12">
                    <div classname="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Bank Name
                      </label>
                      <Select
                        placeholder="Choose your Bank"
                        name="bankName"
                        style={{ margin: "0px" }}
                        onChange={handleChange}
                        value={values.bankName}
                        onBlur={handleBlur}
                      >
                        {bankList?.map((e) => {
                          setBank(values.bankName);
                          console.log(selectedBank);

                          return <option> {e.label} </option>;
                        })}
                      </Select>

                      <p className="error" style={{ color: "red" }}>
                        {errors.bankName && touched.bankName && errors.bankName}
                      </p>
                    </div>
                    {selectedBank?.length > 0 ? (
                      <>
                        <div classname="mb-3 mt-4" style={{ marginTop: "3vh" }}>
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Bank Location
                          </label>

                          <Select
                            placeholder="Choose your District"
                            name="bankLocation"
                            style={{ margin: "0px" }}
                            onChange={handleChange}
                            value={values.bankLocation}
                            onBlur={handleBlur}
                          >
                            {district?.map((e) => {
                              setDist(values.bankLocation);
                              return <option> {e.label} </option>;
                            })}
                          </Select>

                          <p className="error" style={{ color: "red" }}>
                            {errors.bankLocation &&
                              touched.bankLocation &&
                              errors.bankLocation}
                          </p>
                        </div>
                      </>
                    ) : null}

                    {selectedDist?.length > 0 ? (
                      <>
                        <div classname="mb-3 mt-4" style={{ marginTop: "3vh" }}>
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Bank Branch
                          </label>

                          <Select
                            placeholder="Choose your Branch"
                            name="bankBranch"
                            style={{ margin: "0px" }}
                            onChange={handleChange}
                            value={values.bankBranch}
                            onBlur={handleBlur}
                          >
                            {filteredBranch?.map((e) => {
                              return <option> {e.label} </option>;
                            })}
                          </Select>

                          <p className="error" style={{ color: "red" }}>
                            {errors.bankBranch &&
                              touched.bankBranch &&
                              errors.bankBranch}
                          </p>
                        </div>
                      </>
                    ) : null}

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
