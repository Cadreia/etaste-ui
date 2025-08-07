import React from "react";
import { Link } from "react-router-dom";
import { Clock, Star, Users } from "lucide-react";

const FeaturedRecipes: React.FC = () => {
  const featuredRecipes = [
    {
      id: 1,
      title: "Spicy Korean Ramen",
      image:
        "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=500",
      chef: "Chef Kim",
      prepTime: 30,
      servings: 2,
      difficulty: "Medium",
      rating: 4.9,
      description: "Authentic Korean ramen with perfect spice balance",
    },
    {
      id: 2,
      title: "Mediterranean Quinoa Bowl",
      image:
        "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=500",
      chef: "Chef Maria",
      prepTime: 20,
      servings: 4,
      difficulty: "Easy",
      rating: 4.7,
      description: "Fresh, healthy Mediterranean flavors in a bowl",
    },
    {
      id: 3,
      title: "Classic Beef Burger",
      image:
        "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500",
      chef: "Chef Mike",
      prepTime: 25,
      servings: 4,
      difficulty: "Easy",
      rating: 4.8,
      description: "Juicy beef burger with all the classic fixings",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-orange-50 to-orange-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-3 sm:mb-4">
            Featured Recipes
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked recipes from our community of expert chefs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredRecipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-gray-800">
                  {recipe.difficulty}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {recipe.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {recipe.prepTime}m
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {recipe.servings}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-1" />
                      {recipe.rating}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-gray-500">
                    by {recipe.chef}
                  </span>
                  <span className="text-xs sm:text-sm text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
                    View Recipe →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;
