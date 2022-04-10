import React from "react";
import First from '../../components/Home/First'
import About from  '../../components/About/About'
import MenuManager from "../../components/Menu/MenuManager/MenuManager";
import Nav from "../../components/Nav/Nav";
// import CardIntro from "../../components/CardIntro/CardIntro";
import Footer from "../../components/Footer/Footer";

const Index = () => {
  return (
    <MenuManager>
      <First />
      <About />
      {/* <CardIntro /> */}
      <Footer />
      <Nav />
    </MenuManager>
  );
};
export default Index;
