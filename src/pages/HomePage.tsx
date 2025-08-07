import React from "react";
import { Hero, FeaturedRecipes, CuisineExplorer } from "../components";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedRecipes />
      <CuisineExplorer />
    </>
  );
};

export default HomePage;
