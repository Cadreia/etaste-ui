import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Clock, Heart, MessageCircle } from "lucide-react";

const TrendingRecipes: React.FC = () => {
  const trendingRecipes = [
    {
      id: 1,
      title: "Viral TikTok Pasta",
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400",
      chef: "Chef Sarah",
      prepTime: 15,
      likes: 2340,
      comments: 189,
      trending: "+45%",
      tag: "Viral",
    },
    {
      id: 2,
      title: "Cloud Bread",
      image:
        "https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=400",
      chef: "Chef Emma",
      prepTime: 45,
      likes: 1890,
      comments: 156,
      trending: "+38%",
      tag: "Healthy",
    },
    {
      id: 3,
      title: "Dalgona Coffee Cake",
      image:
        "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=400",
      chef: "Chef Mike",
      prepTime: 60,
      likes: 1567,
      comments: 98,
      trending: "+29%",
      tag: "Dessert",
    },
    {
      id: 4,
      title: "Air Fryer Chicken Wings",
      image:
        "https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=400",
      chef: "Chef Tony",
      prepTime: 25,
      likes: 2100,
      comments: 203,
      trending: "+52%",
      tag: "Quick",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              <span className="text-sm sm:text-base font-medium text-orange-500 uppercase tracking-wide">
                Trending Now
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900">
              What's Hot in the Kitchen
            </h2>
          </div>
          <Link
            to="/trending"
            className="hidden sm:flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
          >
            View All
            <TrendingUp className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trendingRecipes.map((recipe, index) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Trending Badge */}
              <div className="absolute top-2 left-2 z-10 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                {recipe.trending}
              </div>

              {/* Tag Badge */}
              <div className="absolute top-2 right-2 z-10 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                {recipe.tag}
              </div>

              <div className="relative aspect-square">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              <div className="p-3 sm:p-4">
                <h3 className="font-medium text-gray-900 mb-2 group-hover:text-orange-500 transition-colors text-sm sm:text-base line-clamp-2">
                  {recipe.title}
                </h3>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {recipe.prepTime}m
                  </div>
                  <span>by {recipe.chef}</span>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Heart className="w-3 h-3 mr-1 text-red-400" />
                      {recipe.likes}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      {recipe.comments}
                    </div>
                  </div>
                  <span className="text-orange-500 font-medium">
                    #{index + 1}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="sm:hidden mt-6 text-center">
          <Link
            to="/trending"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
          >
            View All Trending
            <TrendingUp className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingRecipes;
