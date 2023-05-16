import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import Terms from "./terms/terms";
import Kycform from "./kycform/kyc";
import SecondaryHeader from "@/components/secondarynavbar";

const Kycpage = () => {
  const [name, setName] = useState(null);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
      ></link>
      <Header />
      <SecondaryHeader/>
      <section className="kycform my-3">
        <div className="container-fluid row">
          <div className="col-sm-12 col-md-6 col-lg-6 main-card-kyc">
            <Kycform />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 main-card-kyc">
            <Terms />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Kycpage;
