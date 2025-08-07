import React from "react";
import { Link } from "react-router-dom";
import { Star, Users, ChefHat, Award } from "lucide-react";

const ChefSpotlight: React.FC = () => {
  const featuredChef = {
    id: 1,
    name: "Chef Isabella Rodriguez",
    title: "Mediterranean Cuisine Expert",
    bio: "With over 15 years of experience in Mediterranean kitchens, Chef Isabella brings authentic flavors and modern techniques to home cooking.",
    image:
      "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.9,
    followers: "12.5K",
    recipes: 127,
    specialties: ["Mediterranean", "Healthy", "Vegetarian", "Seafood"],
    achievement: "James Beard Nominee 2023",
    featuredRecipe: {
      id: 101,
      title: "Authentic Greek Moussaka",
      image:
        "https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "A traditional Greek comfort dish with layers of eggplant, meat sauce, and creamy béchamel.",
    },
  };

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-r from-orange-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <ChefHat className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
            <span className="text-sm sm:text-base font-medium text-orange-500 uppercase tracking-wide">
              Chef Spotlight
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-3">
            Meet Our Featured Chef
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Learn from culinary masters who share their expertise and passion
          </p>
        </div>

        {/* Main Chef Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-8">
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Chef Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
              <div className="flex items-start space-x-6 mb-6 sm:mb-0">
                <img
                  src={featuredChef.image}
                  alt={featuredChef.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-lg"
                />
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-2">
                    {featuredChef.name}
                  </h3>
                  <p className="text-orange-500 font-medium mb-3 text-lg">
                    {featuredChef.title}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {featuredChef.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {featuredChef.followers}
                    </div>
                    <div className="flex items-center">
                      <ChefHat className="w-4 h-4 mr-1" />
                      {featuredChef.recipes} recipes
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="flex items-center bg-orange-50 rounded-lg p-4 sm:flex-shrink-0">
                <Award className="w-5 h-5 text-orange-500 mr-3" />
                <span className="text-sm font-medium text-gray-800">
                  {featuredChef.achievement}
                </span>
              </div>
            </div>

            {/* Bio & Specialties Row */}
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8">
              <div className="md:col-span-2">
                <h4 className="text-lg font-medium text-gray-900 mb-3">
                  About Chef Isabella
                </h4>
                <p className="text-gray-600 leading-relaxed text-base">
                  {featuredChef.bio}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">
                  Specialties
                </h4>
                <div className="flex flex-wrap gap-2">
                  {featuredChef.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-center">
              <Link
                to={`/chef/${featuredChef.id}`}
                className="bg-orange-500 text-white text-center py-3 px-8 rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                View Full Profile
              </Link>
              <Link
                to={`/chef/${featuredChef.id}/recipes`}
                className="border border-orange-500 text-orange-500 text-center py-3 px-8 rounded-lg font-medium hover:bg-orange-50 transition-colors"
              >
                Browse All Recipes
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Recipe Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0 md:h-64">
            <div className="md:col-span-2">
              <Link
                to={`/recipe/${featuredChef.featuredRecipe.id}`}
                className="group block h-full"
              >
                <img
                  src={featuredChef.featuredRecipe.image}
                  alt={featuredChef.featuredRecipe.title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
            </div>

            <div className="md:col-span-3 p-6 sm:p-8 flex flex-col justify-center h-64">
              <span className="text-sm uppercase tracking-wide text-orange-500 mb-3 block font-medium">
                Featured Recipe by Chef Isabella
              </span>
              <h4 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4">
                {featuredChef.featuredRecipe.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {featuredChef.featuredRecipe.description}
              </p>
              <Link
                to={`/recipe/${featuredChef.featuredRecipe.id}`}
                className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium text-lg group transition-colors"
              >
                Get the Recipe
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefSpotlight;
