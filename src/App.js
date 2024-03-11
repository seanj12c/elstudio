import React from "react";
import Updates from "./components/Updates";
import Contacts from "./components/Contacts";
import Facilities from "./components/Facilities";
import Features from "./components/Features";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Updates />
      <Facilities />
      <Features />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
