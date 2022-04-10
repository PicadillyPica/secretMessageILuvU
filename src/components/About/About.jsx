import React, { useContext } from "react";
import "./about.scss";
import CustomCursorContext from "../CustomCursor/context/CustomCursorContext";

export default function About() {
  const { setType } = useContext(CustomCursorContext);

  return (
    <div className="about-container">
      <div className="text-container">
        <h3>
          <p className="sentence"
          onMouseEnter={() => setType("text")}
          onMouseLeave={() => setType("default")}
          >
            Lorem ipsum dolor sit amet
          </p>
          <p className="sentence"
          onMouseEnter={() => setType("text")}
          onMouseLeave={() => setType("default")}
          >
            consectetur adipiscing elit 
          </p>
          <p className="sentence"
          onMouseEnter={() => setType("text")}
          onMouseLeave={() => setType("default")}
          >
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 
          </p>
          <p className="sentence"
          onMouseEnter={() => setType("text")}
          onMouseLeave={() => setType("default")}
          >
            Ut enim ad minim veniam 
          </p>
          <p className="sentence"
          onMouseEnter={() => setType("text")}
          onMouseLeave={() => setType("default")}
          >
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat
          </p>
        </h3>
      </div>
    </div>
  );
}

