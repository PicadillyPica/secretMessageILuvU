import React, { useContext } from "react";
import Menu from "../Menu/Menu";
import "./nav.scss";
import { User } from "react-feather";
import CustomCursorContext from '../CustomCursor/context/CustomCursorContext'

export default function Nav() {
  const { setType } = useContext(CustomCursorContext);

  return (
    <>
      <Menu
        className="menu-icon"
        onMouseEnter={() => setType("pointer")}
        onMouseLeave={() => setType("default")}
      />
      <User
        className="user-icon"
        onMouseEnter={() => setType("pointer")}
        onMouseLeave={() => setType("default")}
      />
    </>
  );
}
