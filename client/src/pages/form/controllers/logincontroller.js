import React, { useState } from "react";

const Controllogin = () => {
  const [isVisible, changeIsVisible] = useState(true);

  return (
    <>
      <li className="nav-item">
        <a
          onClick={() => changeIsVisible(true)}
          className="nav-link"
          aria-current="page"
          href="#"
        >
          Login
        </a>
      </li>
    </>
  );
};

export default Controllogin;