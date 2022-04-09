import React, { useRef, useContext } from "react";
import Background from "./Background";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { defaultTransition } from "../../utils/transition";
import Buttons from "./Buttons";
import './first.scss'
import CustomCursorContext from "../CustomCursor/context/CustomCursorContext";
import Nav from '../Nav/Nav'


export default function First() {
  const { setType } = useContext(CustomCursorContext);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xMotion = useSpring(x, { stiffness: 400, damping: 20 });
  const yMotion = useSpring(y, { stiffness: 400, damping: 20 });

  const xBackMotion = useSpring(x, { stiffness: 1000, damping: 100 });
  const yBackMotion = useSpring(y, { stiffness: 1000, damping: 100 });

  const handleGridParallax = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (gridRef.current) {
      const speed = -10;
      const { width, height } = gridRef.current.getBoundingClientRect();
      const offsetX = event.pageX - width * 0.5;
      const offsetY = event.pageY - height * 0.5;

      const newTransformX = (offsetX * speed) / 200;
      const newTransformY = (offsetY * speed) / 200;

      x.set(newTransformX);
      y.set(newTransformY);
    }
  };

  return (
    <div className="wrapper">
      <motion.div
        onMouseMove={handleGridParallax}
        ref={gridRef}
        transition={defaultTransition}
        style={{
          x: xBackMotion,
          y: yBackMotion,
        }}
      >
        <Background />
      </motion.div>
      
      <motion.div
        className="home-container"
        onMouseMove={handleGridParallax}
        ref={gridRef}
        transition={defaultTransition}
        style={{
          x: xMotion,
          y: yMotion,
        }}
      >
        
        <div className="title-container">
          <div className="button-container">
            <Buttons />
          </div>
          <div className="white-container">
            <h1 className="title-text">
              <span>u</span>
              <span>n</span>
              <span>n</span>
              <span>a</span>
              <span>m</span>
              <span>e</span>
              <span>d</span>
              <br />
              <span>h</span>
              <span>a</span>
              <span>c</span>
              <span>k</span>
              <span>a</span>
              <span>t</span>
              <span>h</span>
              <span>o</span>
              <span>n</span>
            </h1>
            <a href="#" className="btn btn-home-container"
            
            onMouseEnter={() => setType("pointer")}
            onMouseLeave={() => setType("default")}
            >
              fall in trap
            </a>
            
          </div>
        </div>
      </motion.div>
      
    </div>
  );
}
