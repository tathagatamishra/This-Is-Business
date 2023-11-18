import React, { useState } from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [thisPage, setThisPage] = useState();

  function page() {
    if (thisPage == true) {
      setThisPage(false);
    } else {
      setThisPage(true);
    }
  }

  return (
      <div className="Nav">
        {thisPage ? (
          <NavLink to="/" onClick={page}>
            <button>Home</button>
          </NavLink>
        ) : (
          <NavLink to="/chart" onClick={page}>
            <button>Chart</button>
          </NavLink>
        )}
      </div>
  );
}
