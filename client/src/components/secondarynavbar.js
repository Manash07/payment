import navlist from "@/data/secnavlist";
import { useSelector } from "react-redux";
import "bootstrap-icons/font/bootstrap-icons.css";


const SecondaryHeader = () => {
  const { name } = useSelector((state) => state.nameManash);

  return (
    <>
      <section className="header-two">
        <nav className="navbar navbar-expand-lg htwo">
          <div className="container-fluid">
            {navlist.map((e, id) => (
              <a className="navbar-brand" href="/" style={{ fontSize: "15px" }}>
                {e.link}
              </a>
            ))}

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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <form className="d-flex mx-2" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>

                

                
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default SecondaryHeader;
