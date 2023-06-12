import { Avatar, WrapItem, AvatarBadge, Badge } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import banklist from "@/data/banklist";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLogout } from "@/redux/reducerslice/userSlice";

const KYC = () => {
  const { name } = useSelector((state) => state.nameManash);
  const [bankId, setBankId] = useState();
  const dispatch = useDispatch();

  return (
    <>
      <section className="midsection mt-4 mx-4">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-12 col-lg-5 col-sm-12 infoForm"
              style={{ border: "" }}
            >
              <div className="card mt-4 my-4" style={{ width: "24rem" }}>
                <a className="mx-3 mt-4">
                  <WrapItem>
                    <Avatar
                      name={name}
                      size="sm"
                      bg="#11959D"
                      color="white"
                      borderColor="black"
                    >
                      <AvatarBadge boxSize="1em" bg="green.500" />
                    </Avatar>
                  </WrapItem>
                </a>

                <div className="card-body">
                  <h6 className="card-title mb-4">
                    Name: {""}{" "}
                    <span style={{ color: "blue", fontSize: "15px" }}>
                      {" "}
                      {name}{" "}
                    </span>
                  </h6>
                  <h6 className="card-title mb-4">
                    KYC Verification Status:
                    <Badge
                      className="mx-2"
                      variant="solid"
                      colorScheme="purple"
                    >
                      Pending
                    </Badge>
                  </h6>

                  <h6 className="card-title mb-4">
                    KYC Form Submitted:{" "}
                    <i
                      class="bi bi-check-circle-fill"
                      style={{ color: "green" }}
                    ></i>
                  </h6>

                  <a
                    style={{ fontSize: "15px", color: "red" }}
                    onClick={() => dispatch(setLogout())}
                  >
                    <i class="bi bi-skip-backward-btn-fill">
                      <span style={{ fontSize: "15px" }}> Logout </span>
                    </i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-md-12 col-lg-7 col-sm-12 kycForm"
              style={{ border: "" }}
            >
              <div className="card mt-4 my-4" style={{ width: "60rem" }}>
                <h6 className="mt-3 mx-3"> KYC FORM </h6>
                <form autoComplete="off">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-6 insideFormLeft">
                        <div classname="mb-3 mx-3 mt-3">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select document type</option>
                            <option value={1}>License</option>
                            <option value={2}>Citizenship</option>
                            <option value={3}>National Identity Card</option>
                          </select>
                        </div>

                        <div classname="mb-3 mx-3 mt-3">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Document Issued Office</option>
                            <option value={1}>Ekantakuna, Lalitpur</option>
                            <option value={2}>Sanodhunga, Kathmandu</option>
                            <option value={3}>Pidari Chowk, Janakpur</option>
                            <option value={4}>Radhe Radhe, Bhaktapur</option>
                          </select>
                        </div>

                        <div classname="mb-3 mx-3 mt-3">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Your Bank</option>
                            {banklist.map((e) => {
                              return <option>{e.name}</option>;
                            })}
                          </select>
                        </div>

                        <div classname="mb-3 mx-3 mt-3">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Bank Branch</option>
                            {banklist[bankId]?.branch.map((e) => {
                              return (
                                <option>
                                  {e.name}, {e.city}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>

                      <div className="col-sm-12 col-md-6 col-lg-6 insideFormRight">
                        <div className="mb-3 mx-3 mt-3 fullName">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Name in your official document
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>

                        <div className="mb-3 mx-3 mt-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Phone Number
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>

                        <div className="mb-3 mx-3 mt-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Bank Account Number
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>

                        <div className="mb-3 mx-3 mt-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Document Number
                          </label>
                          <input
                            type="string"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-success mx-3 mb-3">
                    Submit now
                  </button>

                  <button type="submit" className="btn btn-warning mx-1 mb-3">
                    Make changes
                  </button>
                </form>
                <h6 className="warning mx-3" style={{ color: "red" }}>
                  {" "}
                  * * Fill all the fields else your form will be directly
                  rejected * *{" "}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KYC;

// import banklist from "@/data/banklist";

// const getBranchesByName = (bankName) => {
//   const branches = banklist
//     .find((bank) => bank.name === bankName)
//     .branch.map((branch) => branch.name);

//   return branches;
// };

// // Example usage
// const branches = getBranchesByName("Nepal Investment Mega Bank");
// console.log(branches);
