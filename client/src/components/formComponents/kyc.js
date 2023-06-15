
import bankName from "@/data/banklist";
import { branches, district } from "@/data/banklist";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import Select from "react-select";

import {
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Collapse,
} from "@chakra-ui/react";

const KYC = () => {
  const [bank, setBank] = useState("");
  const [dist, setDist] = useState("");
  const [location, setLocation] = useState([]);
  const btnRef = React.useRef();

  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  useEffect(() => {
    const filteredPlace = branches.filter((place) => place.value === dist);
    setLocation(filteredPlace);
  }, [dist]);

  const handleChange = (e) => {
    setDist(e.value);
    console.log(dist);
  };

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen} className="mx-5">
        KYC FORM <i class="bi bi-pen mx-2"></i>
      </Button>

      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fill your KYC Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form autoComplete="off">
              <div classname="mb-4 mt-3">
                <Select
                  options={bankName}
                  placeholder="Choose your bank"
                  onChange={(e) => setBank(e)}
                  style={{ width: "9rem" }}
                />
              </div>

              <div classname="mb-3 mt-4" style={{ marginTop: "3vh" }}>
                {bank != "" ? (
                  <Select
                    options={district}
                    placeholder="Branch of your bank"
                    onChange={handleChange}
                  />
                ) : null}
              </div>

              <div classname="mb-3 mx-3 mt-4" style={{ marginTop: "3vh" }}>
                {dist != "" ? (
                  <Select
                    options={location}
                    placeholder="Choose your location"
                    style={{ width: "9rem" }}
                  />
                ) : null}
              </div>

              <div className="mb-3 mt-3 fullName">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name in your official document
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3 mt-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3 mt-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Bank Account Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3 mt-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Document Number
                </label>
                <input
                  type="string"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3 mt-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Upload Document
                </label>
                <Input
                  type="file"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  accept="image/x-png,image/gif,image/jpeg"
                />
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
              * * Only valid details accepted else your form will be rejected
              for next 24 days. * *{" "}
            </h6>
          </ModalBody>
          <ModalFooter style={{ background: "white" }}>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default KYC