import KYC from "@/components/formComponents/kyc";
import { Formik } from "formik";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Kycform = () => {
  const router = useRouter();
  const { name } = useSelector((state) => state.nameManash);

  const sendBack = () => {
    router.push("/user");
  };
  return (
    <>
      <div className="card mx-2 my-2" style={{ width: "82rem" }}>
        <div className="card-body">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <h5> Respected sir/madam <span style={{color:"red"}}> {name}, </span>please fill your KYC form </h5>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Button
                      colorScheme="teal"
                      variant="outline"
                      onClick={sendBack}
                    >
                      Go Back
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="row">
            <KYC />
          </div>
        </div>
      </div>
    </>
  );
};

export default Kycform;
