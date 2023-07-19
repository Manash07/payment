import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import AdminHeader from "@/components/adminHeader";
import { Badge } from "@chakra-ui/react";
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

const Admin = () => {
  const { name, role } = useSelector((state) => state.nameManash);
  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();
  const [userData, setUserData] = useState([]);
  const [clickedPhone, setClickedPhone] = useState(0);
  const [myDetails, setMyDetails] = useState({ data: { fullName: "Loading" } });
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        };
        const res = await fetch(
          "http://localhost:8080/userdata",
          requestOptions
        );
        const data = await res.json();
        const { users, ...others } = data;
        setUserData(users);
        console.log(userData);

        if (res.status === 200) {
          toast({
            title: "Loading data",
            description: "Please wait.......",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Could not load data",
            description: "Please try again later",
            status: "warning",
            duration: 3000,
            isClosable: true,
          });
        }
      } catch (err) {
        console.log(err);
        toast({
          title: "Connection Problem",
          description: "Please try again",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };

    if (role !== "superadmin") {
      setTimeout(() => {
        toast({
          title: "Connection Problem",
          description: "Please try again",
          status: "error",
          duration: 1000,
          isClosable: true,
        });

        router.push("../login");
      }, 500);
    } else {
      fetchData();
    }
  }, [role]);

  // const kycDetails = (phclicked) => {
  //   console.log(phclicked);
  //   setClickedPhone(phclicked);
  // };

  useEffect(() => {
    const showKYC = async () => {
      try {
        //debugger;
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber: clickedPhone }),
        };
        const res = await fetch(
          "http://localhost:8080/details",
          requestOptions
        );
        const data = await res.json();
        setMyDetails(data);

        if (res.status == 200) {
        } else {

          setMyDetails({ data: { fullName: "Not found", phoneNumber:"Not found",

          bankName:"Not found", bankLocation:"Not found", bankBranch:"Not found",
          bankAccount:"Not found", documentType:"Not found", documentNumber:"Not found",


        
        
        } })
          toast({
            title: "Could not find one. ",
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

    showKYC();
  }, [clickedPhone]);

  return (
    <>
      <AdminHeader />

      <section className="userlist mt-4">
        <h5
          className="mx-3 g-4 mb-4 px-2 py-2 mt-4"
          style={{ background: "pink", width: "29rem" }}
        >
       
          List of registered users with their respective details
        </h5>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Full Name </th>
              <th scope="col">Phone Number</th>
              <th scope="col">Password</th>
              <th scope="col">Email</th>
              <th scope="col"> Take Action</th>
            </tr>
          </thead>

          <Modal onClose={onClose} size="full" isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader> KYC detail of user </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div className="d-flex justify-content-center mt-5">
                  <div className="card" style={{ width: "58rem" }}>
                    <div className="card-body ">
                      <div className="row mt-3">
                        <div className="col-md-4 col-lg-4 col-sm-12">
                          <div className="text-center">
                            <img
                              src="/Avatar.png"
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
                            className="form-control mt-4"
                            placeholder=""
                            value={myDetails?.data?.bankBranch}
                            disabled
                          />

                          <h5 className="mt-4"> Bank Account Number </h5>
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

                          <h5 className="mt-4">Document Number</h5>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            value={myDetails?.data?.documentNumber}
                            disabled
                          />

                          <h5 className="mt-4">Document Issued Office</h5>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            value={myDetails?.data?.documentIssuedOffice}
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
          <tbody>
            {userData.map((e) => {
              return (
                <>
                  <tr>
                    <td>#</td>
                    <td>
                      {e.name}
                      {e.role == "superadmin" ? (
                        <Badge
                          variant="solid"
                          colorScheme="purple"
                          className="mx-2 py-1 px-2"
                        >
                          Admin
                        </Badge>
                      ) : null}
                    </td>
                    <td>{e.phoneNumber}</td>
              
                    <td>************</td>
                    <td>{e.email}</td>
                    <td>
                      <i
                        onClick={() => {

                          setClickedPhone(e.phoneNumber)
                          
                          
                          onOpen()
                        
                        }}
                        class="bi bi-file-text-fill"
                        style={{ color: "gray" }}
                      ></i>

                      <i
                        class="bi bi-pencil-fill mx-3"
                        style={{ color: "black" }}
                        
          
                      ></i>
                      <i
                        class="bi bi-trash-fill mx-1"
                        style={{ color: "red" }}
                      ></i>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </section>

      {/* <section>
        {userData.slice(0,1).map((e) => {
          return <Input
            type="text"
            name="id"
            value={e.name}
            style={{border:"2px solid black", padding:"5px", margin:"5px"}}
            contentEditable
            
          />;
         
        })}
      </section> */}
    </>
  );
};

export default Admin;
