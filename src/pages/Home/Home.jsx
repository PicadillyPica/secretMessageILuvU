import React from "react";
import First from '../../components/Home/First'
import About from  '../../components/About/About'
import MenuManager from "../../components/Menu/MenuManager/MenuManager";
import Nav from "../../components/Nav/Nav";
import { CardIntro } from "../../components/CardIntro/CardIntro";

const Index = () => {
  return (
    <MenuManager>
      <First />
      <About />
      <CardIntro />
      <Nav />
    </MenuManager>
  );
};
export default Index;
