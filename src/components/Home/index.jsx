import React from "react";
import HomeHero from "./HomeHero/HomeHero";
import HomeBrands from "./HomeBrands/HomeBrands";
import HomeText from './HomeText/HomeText';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeText/>
      <HomeBrands />
    </>
  );
}