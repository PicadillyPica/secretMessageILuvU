import { createContext } from "react";

//below is the type that we want to use for this website
//Currently got 3 only
//This type will be included as classname in customCursor.jsx so navigate to style.scss to specific more style
export type CursorLookType =
  | "pointer"
  | "text"
  | "default";
export type CustomCursorType = {
  type: CursorLookType;
  setType: (type: CursorLookType) => void;
};

const CustomCursorContext = createContext<CustomCursorType>({
  type: "default",
  setType: () => {},
});

export default CustomCursorContext;