
import Login from "./formhandler/login";
import Register from "./formhandler/register";
import Controllogin from "./controllers/logincontroller";
import Controlregister from "./controllers/registercontroller";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";

export default function Home() {
  const [isVisible, changeIsVisible] = useState(true);
  return (
    <>
    <Header/>
    
      <section className="user-portal">
        <div className="my-4 h-100 d-flex justify-content-center">
          <div
            className="card main-card-login"
            style={{ width: "50rem", height: "44rem" }}
          >
            <h5 className="my-4 mx-3">User Portal</h5>

            <div className="card-body">
              <ul className="nav nav-tabs">
                <Controllogin 
                changeIsVisible = {changeIsVisible}
                />
                <Controlregister

                changeIsVisible = {changeIsVisible}
                
                
                />
              </ul>

              <Login 

              isVisible ={isVisible}

              
              />
              <Register 

              isVisible = {isVisible}
              
              
              />
            </div>
          </div>
        </div>
      </section>
    <Footer/>
    </>
  );
}
