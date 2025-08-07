import React from "react";
import { Link } from "react-router-dom";

const CuisineExplorer: React.FC = () => {
  const cuisines = [
    {
      name: "Italian",
      image:
        "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=500",
      recipes: 245,
      description: "Authentic pasta, pizza, and regional specialties",
    },
    {
      name: "Japanese",
      image:
        "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=500",
      recipes: 189,
      description: "Traditional techniques and seasonal ingredients",
    },
    {
      name: "Indian",
      image:
        "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=500",
      recipes: 203,
      description: "Aromatic spices and diverse regional styles",
    },
    {
      name: "French",
      image:
        "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=500",
      recipes: 134,
      description: "Classic techniques and refined flavors",
    },
    {
      name: "Thai",
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=500",
      recipes: 156,
      description: "Fresh herbs and perfect balance of flavors",
    },
    {
      name: "Mexican",
      image:
        "https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=500",
      recipes: 167,
      description: "Bold flavors and ancient cooking methods",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-3 sm:mb-4">
            Explore Cuisines
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Discover authentic flavors from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cuisines.map((cuisine) => (
            <Link
              key={cuisine.name}
              to={`/cuisine/${cuisine.name.toLowerCase()}`}
              className="group block"
            >
              <div className="relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={cuisine.image}
                    alt={cuisine.name}
                    className="w-full h-44 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-xl sm:text-2xl font-medium text-white text-center">
                      {cuisine.name}
                    </h3>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
                    {cuisine.description}
                  </p>
                  <span className="text-xs sm:text-sm text-orange-500 font-medium">
                    {cuisine.recipes} recipes
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

export default CuisineExplorer;
