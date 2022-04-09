import React, { useState, useContext } from "react";
import { X } from "react-feather";
import { Maximize } from "react-feather";
import { Minimize } from "react-feather";
import { Minus } from "react-feather";
import "./first.scss";
import CustomCursorContext from "../CustomCursor/context/CustomCursorContext";

export default function Buttons() {
  const { setType } = useContext(CustomCursorContext);
  //   const [isMaximise, setMaximise] = useState[true];
  const isMaximise = true;

  return (
    <>
      <Minus
        className="button"
        onMouseEnter={() => setType("pointer")}
        onMouseLeave={() => setType("default")}
      />
      {isMaximise ? (
        <Minimize
          className="button"
          onMouseEnter={() => setType("pointer")}
          onMouseLeave={() => setType("default")}
        />
      ) : (
        <Maximize
          className="button"
          onMouseEnter={() => setType("pointer")}
          onMouseLeave={() => setType("default")}
        />
      )}
      <X
        className="button"
        onMouseEnter={() => setType("pointer")}
        onMouseLeave={() => setType("default")}
      />
    </>
  );
}
