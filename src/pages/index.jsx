import React from "react";
import Home from "./Home/Home";
import "../styles/index.scss";
import CustomCursor from "../components/CustomCursor/CustomCursor";
import CustomCursorManager from "../components/CustomCursor/context/Manager";

const Index = () => {
  return (
    <CustomCursorManager>
      <CustomCursor />
      <Home />
    </CustomCursorManager>
  );
};
export default Index;
