import React from "react";
import Products from "../components/ProductsPage/Products";
import Hero from "../components/Hero";
import coffee4 from "../images/coffee4.jpg";

export default function ProductsPage() {
  return (
    <>
      <Hero img={coffee4} />
      <Products />
    </>
  );
}
