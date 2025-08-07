import React from "react";
import {
  Hero,
  PersonalizedRecommendations,
  TrendingRecipes,
  FeaturedRecipes,
  ChefSpotlight,
  CuisineExplorer,
  CommunityStats,
} from "../components";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <PersonalizedRecommendations />
      <TrendingRecipes />
      <FeaturedRecipes />
      <ChefSpotlight />
      <CuisineExplorer />
      <CommunityStats />
    </>
  );
};

export default HomePage;
