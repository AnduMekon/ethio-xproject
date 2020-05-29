import React from "react";
import Info from "../components/AboutPage/Info";
import Hero from "../components/Hero";
import coffeetree1 from "../images/coffeetree1.jpg";
export default function AboutPage() {
  return (
    <>
      <Hero img={coffeetree1} />
      <Info />
    </>
  );
}
