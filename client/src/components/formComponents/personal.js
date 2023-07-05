"use client"



import { useEffect, useState } from "react";

const Personal = () => {

  const [formData, setData] = useState({})
  
console.log(formData)
useEffect(() => {
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          phoneNumber:"9828159259"
        };
        const res = await fetch("http://localhost:8080/details", requestOptions);
       const response = await res.json()
       setData(response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <div className="container mt-2">
        <h5 className="mb-3"> YOUR DETAILS </h5>
        <div className="row perdetail">
          <img
            src="/profilepic.png"
            className="img-thumbnail mb-3 mx-3"
            alt="..."
            style={{ height: "10rem", width: "10rem" }}
          />

          <div className="input-group flex-nowrap mb-2">
            <span
              className="input-group-text"
              id="addon-wrapping"
              style={{ background: "white" }}
            >
              Mobile Number
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value="982*******"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              disabled
              style={{ background: "white" }}
            />
          </div>
          <div className="input-group flex-nowrap mb-2">
            <span
              className="input-group-text"
              id="addon-wrapping"
              style={{ background: "white" }}
            >
              Full Name
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value="Manash Ghimire"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              disabled
              style={{ background: "white" }}
            />
          </div>
          <div className="input-group flex-nowrap mb-2">
            <span
              className="input-group-text"
              id="addon-wrapping"
              style={{ background: "white" }}
            >
              Document Name
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value="Citizenship"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              disabled
              style={{ background: "white" }}
            />
          </div>

          <div className="input-group flex-nowrap mb-2">
            <span
              className="input-group-text"
              id="addon-wrapping"
              style={{ background: "white" }}
            >
              Document Number
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value="***********"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              disabled
              style={{ background: "white" }}
            />
          </div>

          <div className="input-group flex-nowrap mb-2">
            <span
              className="input-group-text"
              id="addon-wrapping"
              style={{ background: "white" }}
            >
              Bank Name
            </span>
            <input
              type="text"
              className="form-control"
              value="Nabil Bank"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              disabled
              style={{ background: "white" }}
            />
          </div>

          <div className="input-group flex-nowrap mb-2">
            <span
              className="input-group-text"
              id="addon-wrapping"
              style={{ background: "white" }}
            >
              Bank Branch
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value="Biratnagar"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              disabled
              style={{ background: "white" }}
            />
          </div>

          <div className="input-group flex-nowrap mb-2">
            <span
              className="input-group-text"
              id="addon-wrapping"
              style={{ background: "white" }}
            >
              Bank Location
            </span>
            <input
              type="text"
              className="form-control"
              placeholder=""
              value="Main Road"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              disabled
              style={{ background: "white" }}
            />
          </div>

          <div className="input-group flex-nowrap mb-2">
            <span
              className="input-group-text"
              id="addon-wrapping"
              style={{ background: "white" }}
            >
              Bank Account Number
            </span>
            <input
              type="text"
              className="form-control"
              placeholder=""
              value="***************"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              disabled
              style={{ background: "white" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
