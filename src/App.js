import React from "react";
import Updates from "./components/Updates";
import Contacts from "./components/Contacts";
import Facilities from "./components/Facilities";
import Service from "./components/Service";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Footer from "../src/components/Footer";
import Video from "./components/Video";
import Partnership from "./components/Partnership";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Video />
      <Updates />
      <Facilities />
      <Service />
      <Partnership />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
