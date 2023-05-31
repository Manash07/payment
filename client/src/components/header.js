import { useState } from "react";
const Header = () => {

  const [icolor, setColor] = useState("rgb(0, 176, 221)")

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand logo-text" href="#">
            <img
              src="/Cpaylogo.ico"
              alt="Logo"
              width={28}
              height={24}
              className="d-inline-block align-text-top mx-2"
            />
            Chitto <span className="pay-logo"> Pay </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <i class="bi bi-facebook mx-2" style={{color:icolor}}
  
                ></i>
              </li>
              <li className="nav-item">
                <i class="bi bi-messenger mx-2"></i>
              </li>
              <li className="nav-item">
                <i class="bi bi-instagram mx-2"></i>
              </li>
              <li className="nav-item">
                <i class="bi bi-twitter mx-2"></i>
              </li>
              <li className="nav-item">
                <i class="bi bi-linkedin mx-2"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
