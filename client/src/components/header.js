const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg header">
        <div className="container-fluid">
          <a className="navbar-brand logo-text" href="#">
            {/* <img
              src="/Cpaylogo.ico"
              alt="Logo"
              width={28}
              height={24}
              className="d-inline-block align-text-top mx-2"
            /> */}
            Chitto <span className="pay-logo"> Pay </span>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  Facebook
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  Discord
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  Instagram
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  Twitter
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
