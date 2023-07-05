import Header from "@/components/header";

import { useState } from "react";

import Kycform from "./kycform/kyc";
import Personal from "@/components/formComponents/personal";

const Kycpage = () => {
  const [name, setName] = useState(null);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
      ></link>
      <Header />
      <section className="kycform my-3" style={{ background: "#F5F7FD" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 mt-5">
              <img src="https://connectips.com/images/banners/New_Refer_connectIPS-Website-1470-781.png" style={{height:"50vh", width:"150rem"}}/>
            </div>

           

            <div className="col-md-7">
              <div className="main-card-kyc mt-0">
                <Kycform />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kycpage;
