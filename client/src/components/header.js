
const Header = () => {

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
        </div>
      </nav>
    </>
  );
};

export default Header;
