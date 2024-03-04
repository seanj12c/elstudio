import React from "react";
import Contacts from "./components/Contacts";
import Facilities from "./components/Facilities";
import Features from "./components/Features";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Facilities/>
      <Features/>
      <Contacts/>
    </div>
  );
}

export default App;
