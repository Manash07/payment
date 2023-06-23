import React from "react";
import optionslist from "@/data/optionslist";
import Link from "next/link";

const Home = () => {
  
  return (
    <>
      {" "}
      <section className="midsection home mt-3">
        <div className="container-fluid main">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4">
                <ul className="list-group" style={{ width: "18rem" }}>
                  {optionslist.map((e) => {
                    return (
                      <Link href={`/${e.page}`}>
                        <li className="list-group-item mb-2">
                          <i class="bi bi-arrow-right-circle-fill"></i>{" "}
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
                    src="https://connectips.com/knowmore/images/gov_large.png"
                    alt="..."
                    style={{ height: "30vh", width: "40vw" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="services">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mx-5">Nightingale College</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mx-5">United Academy</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mx-3">CCRC College</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mx-3">Kathmandu Model College</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
