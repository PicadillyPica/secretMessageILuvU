import React, { useContext } from "react";
import "./about.scss";
import CustomCursorContext from "../CustomCursor/context/CustomCursorContext";
import styled from 'styled-components'

const Sentence = styled.span`
    margin: 1rem;
    transition: all 0.4s ease-in-out;
    opacity: 0.6;
    &:hover{
      mix-blend-mode: darken;
      opacity:1;
    } 
`

const Container = styled.div`
    color: black;
    opacity: 1;
    transition: all 0.4s ease-in-out;
    &:hover{
      color: rgb(200,200,200) !important;
      opacity: 0.6;
    }
`

export default function About() {
  const { type, setType } = useContext(CustomCursorContext);

  return (
    
    <div className="about-container">
      <Container>
        <h3>
        <Sentence>
          Lorem ipsum dolor sit amet
        </Sentence>
        <Sentence>
          Lorem ipsum dolor sit amet 
        </Sentence>
        <Sentence>
          Lorem ipsum dolor sit amet 
        </Sentence>
        <Sentence>
          Lorem ipsum dolor sit amet 
        </Sentence>
        <Sentence>
          Lorem ipsum dolor sit amet 
        </Sentence>
        <Sentence>
          Lorem ipsum dolor sit amet 
        </Sentence>
        <Sentence>
          Lorem ipsum dolor sit amet 
        </Sentence>
        </h3>
        
        {/* <h3>
          <span
            className={`sentence firstSentence`}
            onMouseEnter={() => setType("text")}
            onMouseLeave={() => setType("default")}
          >
            Lorem ipsum dolor sit amet
          </span>
          ,
          <span
            className="sentence"
            onMouseEnter={() => setType("text")}
            onMouseLeave={() => setType("default")}
          >
            consectetur adipiscing elit
          </span>
          ,
          <span
            className="sentence"
            onMouseEnter={() => setType("text")}
            onMouseLeave={() => setType("default")}
          >
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
          .
          <span
            className="sentence"
            onMouseEnter={() => setType("text")}
            onMouseLeave={() => setType("default")}
          >
            Ut enim ad minim veniam
          </span>
          ,
          <span
            className="sentence"
            onMouseEnter={() => setType("text")}
            onMouseLeave={() => setType("default")}
          >
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat
          </span>
          .
        </h3> */}
      </Container>
    </div>
  );
}

