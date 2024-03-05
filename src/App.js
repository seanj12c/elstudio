import React from "react";
import Admins from "./components/Admins";
import Contacts from "./components/Contacts";
import Facilities from "./components/Facilities";
import Features from "./components/Features";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Footer from "../src/components/Footer"

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Facilities/>
      <Admins/>
      <Features/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
