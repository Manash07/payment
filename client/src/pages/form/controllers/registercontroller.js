import React, { useState } from "react";

const Controlregister = (props) => {
  const [isVisible, changeIsVisible] = useState(true);

  return (
    <>
      <li className="nav-item">
        <a onClick={() => props.changeIsVisible(false)} className="nav-link" href="#">
          Register
        </a>
      </li>
    </>
  );
};

export default Controlregister;
