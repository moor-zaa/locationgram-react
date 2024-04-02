import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

export const SideDrawer = (props) => {
  const nodeRef = useRef(null);

  const content = (
    <CSSTransition
      nodeRef={nodeRef}
      in={props.show}
      timeout={200}
      classNames={"slide-in-left"}
      mountOnEnter
      unmountOnExit
    >
      <aside ref={nodeRef} onClick={props.onClick} className="side-drawer">
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};
