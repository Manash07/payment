import React, { useEffect } from "react";
import optionslist from "@/data/optionslist";
import Link from "next/link";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { setForm } from "@/redux/reducerslice/kycSlice";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { phoneNumber } = useSelector((state) => state.nameManash);
  const [myDetails, setMyDetails] = useState({ data: { fullName: "Loading" } });
  const toast = useToast();
  const [imageSrc, setImageSrc] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKYC = async () => {
      try {
        //debugger;
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber: phoneNumber }),
        };
        const res = await fetch(
          "http://localhost:8080/details",
          requestOptions
        );
        const data = await res.json();
        setMyDetails(data);

        if (res.status == 200) {
        } else {
          toast({
            title: "Could not find one ",
            description: "Please try again later",
            status: "warning",
            duration: 3000,
            isClosable: true,
          });
        }
      } catch (err) {
        console.log(err);
        toast({
          title: "Could not find data",
          description: "Please try again",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };

    handleKYC();
  }, []);

  // useEffect(() => {
  //   console.log(myDetails.data);
  // }, [myDetails]);

  const fetchItem = async () => {

    try{

      const res = await fetch(`http://localhost:8080/image/${phoneNumber}`);
      const data = await res.blob();
      setImageSrc(data)

    }catch(err){
      console.log(err)
    }
   
  
  
  };

  useEffect(() => {

  fetchItem()
  
},[]);



  return (
    <>
      <section className="midsection home mt-3 mb-4">
        <div className="container-fluid main">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4">
                <ul className="list-group" style={{ width: "18rem" }}>
                  <li className="list-group-item mb-2" onClick={onOpen}>
                    <i
                      class="bi bi-arrow-right-circle-fill"
                      style={{ marginRight: "10px" }}
                    ></i>{" "}
                    My Profile
                  </li>

                  <Modal onClose={onClose} size="full" isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Your KYC Details </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <div className="d-flex justify-content-center mt-5">
                          <div className="card" style={{ width: "58rem" }}>
                            <div className="card-body ">
                              <div className="row mt-3">
                                <div className="col-md-4 col-lg-4 col-sm-12">
                                  <div className="text-center">
                                    <img
                                     src={imageSrc && URL.createObjectURL(imageSrc)}
                                      className="rounded"
                                      style={{ height: "10rem" }}
                                      alt="..."
                                    />
                                  </div>
                                </div>
                                <div className="col-md-8 col-lg-8 col-sm-12">
                                  <h5> Name </h5>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    disabled
                                    value={myDetails?.data?.fullName}
                                  />

                                  <h5 className="mt-4"> Phone Number </h5>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    disabled
                                    value={myDetails?.data?.phoneNumber}
                                  />
                                  <h5 className="mt-4"> Bank Name </h5>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    value={myDetails?.data?.bankName}
                                    disabled
                                  />

                                  <h5 className="mt-4"> Bank Location </h5>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    value={myDetails?.data?.bankLocation}
                                    disabled
                                  />

                                  <h5 className="mt-4"> Bank Branch </h5>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    value={myDetails?.data?.bankBranch}
                                    disabled
                                  />

                                  <h5 className="mt-4">
                                    {" "}
                                    Bank Account Number{" "}
                                  </h5>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    value={myDetails?.data?.bankAccount}
                                    disabled
                                  />

                                  <h5 className="mt-4">Document Type</h5>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    value={myDetails?.data?.documentType}
                                    disabled
                                  />

                                  <h5 className="mt-4">Gender</h5>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    value={myDetails?.data?.gender}
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ModalBody>
                    </ModalContent>
                  </Modal>

                  {optionslist.map((e) => {
                    return (
                      <Link href={`/${e.page}`}>
                        <li className="list-group-item mb-2">
                          <i
                            class="bi bi-arrow-right-circle-fill"
                            style={{ marginRight: "10px" }}
                          ></i>{" "}
                          {e.title}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
              <div
                className="col-sm-12 col-md-8 col-lg-8"
                style={{ height: "33vh" }}
              >
                <div className="container">
                  <img
                    src="/meroshare.png"
                    alt="..."
                    style={{ height: "30vh", width: "40vw" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
