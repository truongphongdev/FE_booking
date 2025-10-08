import React from "react";
import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import About from "../../components/About/About.jsx";
import Services from "../../components/Services/Services.jsx";
import Team from "../../components/Team/Team.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function LayoutHome() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Footer />
    </>
  );
}
