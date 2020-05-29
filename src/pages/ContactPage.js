import React from "react";
import Hero from "../components/Hero";
import coffeetree1 from "../images/coffeetree1.jpg";
import Contact from "../components/ContactPage/Contact";
export default function ContactPage() {
  return (
    <>
      <Hero img={coffeetree1} />
      <Contact />
    </>
  );
}
