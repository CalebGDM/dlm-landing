import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import InfoCard from "./components/InfoCard";

import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

import { SliderData } from "./data/SliderData";
import { InfoData } from "./data/InfoData";
import { ContactsData } from "./data/ContactsData";
import GlobalStyle from "./mainStyles";

import { PortfolioData } from "./data/PortfolioData";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Map from './components/Map';



function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }
  
  return (
    <>
      <GlobalStyle/>      
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoCard info={InfoData}/>

      <Portfolio work={PortfolioData}/>
      <Contact contactos={ContactsData}/>
      <Map/>
      <Footer/>
    </>
  );
}

export default App;
