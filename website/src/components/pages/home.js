import "../../App.css";
import Herosection from "../Herosection";
import React from "react";
import Cards from "../Cards";
import Astronaut from "../Astronaut";
import Contact from "../Contact";

function Home() {
  return (
    <>
      <Herosection />
      <Astronaut />
      <Cards />
      <Contact />
    </>
  );
}

export default Home;
