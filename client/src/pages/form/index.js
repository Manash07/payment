
import Login from "./formhandler/login";
import Register from "./formhandler/register";
import Controllogin from "./controllers/logincontroller";
import Controlregister from "./controllers/registercontroller";

export default function Home() {
  return (
    <>
      <section className="user-portal">
        <div className="my-4 h-100 d-flex justify-content-center">
          <div
            className="card main-card-login"
            style={{ width: "50rem", height: "38rem" }}
          >
            <h5 className="my-4 mx-3">User Portal</h5>

            <div className="card-body">
              <ul className="nav nav-tabs">
                <Controllogin />
                <Controlregister/>
              </ul>

              <Login />
              <Register />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
