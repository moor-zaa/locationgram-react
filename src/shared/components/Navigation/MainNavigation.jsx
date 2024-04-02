import React, { useState } from "react";

import "./MainNavigation.css";
import { MainHeader } from "./MainHeader";
import { Link } from "react-router-dom";
import { Navlinks } from "./Navlinks";
import { SideDrawer } from "./SideDrawer";
import Backdrop from "../UIElement/Backdrop";

export const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => setDrawerIsOpen(true);
  const closeDrawer = () => setDrawerIsOpen(false);

  return (
    <>
      {drawerIsOpen && (
        <>
          <Backdrop onClick={closeDrawer} />
          <SideDrawer onClick={closeDrawer} show={drawerIsOpen}>
            <nav className="main-navigation__drawer-nav">
              <Navlinks />
            </nav>
          </SideDrawer>
        </>
      )}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to={"/"}>Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <Navlinks />
        </nav>
      </MainHeader>
    </>
  );
};
