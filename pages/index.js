import Features from "@/components/templates/index/Features";
import Gallery from "@/components/templates/index/Gallery";
import Homes from "@/components/templates/index/Homes";
import Story from "@/components/templates/index/Story";
import React from "react";

function Home() {
  return (
    <>
      <Features />
      <Story />
      <Homes />
      <Gallery />
    </>
  );
}

export default Home;
