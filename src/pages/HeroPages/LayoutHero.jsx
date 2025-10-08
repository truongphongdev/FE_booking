import React from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import HeroDetail from "../../components/Hero/HeroDetail/HeroDetail.jsx"
export default function LayoutHero() {
  return (
    <>
      <Header />
        <HeroDetail />
      <Footer />
    </>
  );
}
