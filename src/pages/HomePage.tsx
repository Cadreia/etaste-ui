import React from "react";
import {
  Hero,
  PersonalizedRecommendations,
  FeaturedRecipes,
  CuisineExplorer,
} from "../components";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <PersonalizedRecommendations />
      <FeaturedRecipes />
      <CuisineExplorer />
    </>
  );
};

export default HomePage;
