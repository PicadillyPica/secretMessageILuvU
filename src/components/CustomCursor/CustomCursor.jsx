import React, { useContext } from "react";
import "./style.scss";
import CustomCursorContext from "./context/CustomCursorContext";
import { FiMousePointer } from "react-icons/fi";

const CustomCursor = () => {
  //The code below use to track mouse position
  //the mouse cursor is hidden in index.scss and will be replace with custom cursor
  const { type } = useContext(CustomCursorContext);
  const mainCursor = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      mainCursor.current.style.transform = `translate3d(${
        mouseX - mainCursor.current.clientWidth / 2
      }px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
    });

    return () => {};
  }, []);

  return (
    <div className={`cursor-wrapper ${type}`}>
      <div className="main-cursor " ref={mainCursor}>
        <FiMousePointer className="main-cursor-background" />
      </div>
    </div>
  );
};

export default CustomCursor;
