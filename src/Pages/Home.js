import React from "react";
import Aboutus from "../Components/AboutUs";
import Count from "../Components/Count";
import Gallery from "../Components/Gallery";
import SlideShow from "../Components/SlideShow";
import Sponsors from "../Components/Sponsors";
import Teams from "../Components/Teams";
import ContactPage from "./Contact";
function Home() {
  return (
    <div>
      <SlideShow />
      <Aboutus />
      <Count />
      <Gallery />
      <Sponsors />
      <Teams />
      <ContactPage />
    </div>
  );
}

export default Home;
