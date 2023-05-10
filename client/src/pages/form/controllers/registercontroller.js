import React, { useState } from "react";

const Controlregister = () => {
  const [isVisible, changeIsVisible] = useState(true);

  return (
    <>
      <li className="nav-item">
        <a onClick={() => changeIsVisible(false)} className="nav-link" href="#">
          Register
        </a>
      </li>
    </>
  );
};

export default Controlregister;
