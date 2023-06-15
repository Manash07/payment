import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import KYC from "./kyc";
import Personal from "./personal";
import { Button } from "@chakra-ui/react";

const Cards = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <section className="cardsection">
        <div className="container card-container" >

        <div className="row">
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://thumbs.dreamstime.com/b/form-icon-vector-male-person-profile-avatar-document-symbol-business-glyph-pictogram-illustration-166893497.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  <Personal />
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://thumbs.dreamstime.com/b/personal-icon-vector-male-user-person-profile-avatar-symbol-identity-card-flat-color-glyph-pictogram-illustration-136149403.jpg"
                alt="..."
              />

              <div className="card-body">
                <p className="card-text">
                  <KYC />
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://previews.123rf.com/images/tuktukdesign/tuktukdesign1710/tuktukdesign171000114/87811490-bank-icon-vector-with-person-profile-male-avatar-symbol-for-banking-and-finance-in-glyph-pictogram.jpg"
                alt="..."
              />

              <div className="card-body">
                <p className="card-text">
                  <Button colorScheme="teal" className="mx-5">
                    BANK DETAILS <i class="bi bi-bank mx-2"></i>
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </div>

        </div>
      
      </section>
    </>
  );
};

export default Cards;
