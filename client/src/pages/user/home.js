import React from "react";
import optionslist from "@/data/optionslist";
import Link from "next/link";

const Home = () => {
  
  return (
    <>
      {" "}
      <section className="midsection home mt-3 mb-4">
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
