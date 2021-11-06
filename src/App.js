import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import InfoCard from "./components/InfoCard";

import Navbar from "./components/Navbar";
import { InfoData }  from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./mainStyles";


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
     
    </>
  );
}

export default App;
