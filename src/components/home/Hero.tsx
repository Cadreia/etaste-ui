import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const featuredDishes = [
    {
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Korean Bibimbap",
    },
    {
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Thai Green Curry",
    },
    {
      image:
        "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Italian Carbonara",
    },
    {
      image:
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Japanese Sushi",
    },
    {
      image:
        "https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Mexican Tacos",
    },
  ];

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % featuredDishes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredDishes.length]);

  const currentDish = featuredDishes[currentImageIndex];

  return (
    <section className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center min-h-screen py-8 sm:py-12 lg:py-16">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight">
                Discover
                <span className="block font-medium text-orange-500">
                  Global Flavors
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
                Authentic recipes from around the world, carefully curated for
                modern kitchens.
              </p>
            </div>

            {/* Search */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <input
                type="text"
                placeholder="Search recipes..."
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-base sm:text-lg border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            </div>

            <button className="bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 text-sm sm:text-base">
              Start Exploring
            </button>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-sm xl:max-w-md">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src={currentDish.image}
                  alt={currentDish.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Professional overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-3 sm:mt-4 lg:mt-6">
                {featuredDishes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-orange-500 w-4 sm:w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
