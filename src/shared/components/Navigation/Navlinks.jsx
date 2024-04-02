import React from "react";

import "./Navlinks.css";
import { NavLink } from "react-router-dom";

export const Navlinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to={"/"} exact>
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to={"/u1/places"}>My PLACES</NavLink>
      </li>
      <li>
        <NavLink to={"/places/new"}>ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink to={"/auth"}>AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};
