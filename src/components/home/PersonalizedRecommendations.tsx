import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Clock, Star, ChevronLeft, ChevronRight } from "lucide-react";

const PersonalizedRecommendations: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const recommendations = [
    {
      id: 1,
      title: "Pad Thai",
      image:
        "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400",
      cuisine: "Thai",
      flag: "🇹🇭",
      prepTime: 25,
      difficulty: "Easy",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Margherita Pizza",
      image:
        "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400",
      cuisine: "Italian",
      flag: "🇮🇹",
      prepTime: 45,
      difficulty: "Medium",
      rating: 4.9,
    },
    {
      id: 3,
      title: "Chicken Tikka",
      image:
        "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400",
      cuisine: "Indian",
      flag: "🇮🇳",
      prepTime: 35,
      difficulty: "Medium",
      rating: 4.7,
    },
    {
      id: 4,
      title: "Beef Teriyaki",
      image:
        "https://images.pexels.com/photos/4518839/pexels-photo-4518839.jpeg?auto=compress&cs=tinysrgb&w=400",
      cuisine: "Japanese",
      flag: "🇯🇵",
      prepTime: 20,
      difficulty: "Easy",
      rating: 4.6,
    },
    {
      id: 5,
      title: "Coq au Vin",
      image:
        "https://images.pexels.com/photos/6248697/pexels-photo-6248697.jpeg?auto=compress&cs=tinysrgb&w=400",
      cuisine: "French",
      flag: "🇫🇷",
      prepTime: 90,
      difficulty: "Hard",
      rating: 4.8,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-2">
            Recommended for You
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Personalized recipes based on your preferences
          </p>
        </div>

        {/* Horizontal Scrollable Cards with Navigation */}
        <div className="relative group">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Carousel Container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide -mx-4 sm:mx-0"
          >
            <div className="flex space-x-4 sm:space-x-6 pb-4 px-4 sm:px-0 min-w-max">
              {recommendations.map((recipe) => (
                <Link
                  key={recipe.id}
                  to={`/recipe/${recipe.id}`}
                  className="group flex-shrink-0 w-56 sm:w-64"
                >
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                    <div className="relative">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium flex items-center">
                        <span className="mr-1">{recipe.flag}</span>
                        {recipe.cuisine}
                      </div>
                    </div>

                    <div className="p-3 sm:p-4">
                      <h3 className="font-medium text-gray-900 mb-2 sm:mb-3 transition-colors text-sm sm:text-base">
                        {recipe.title}
                      </h3>

                      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            {recipe.prepTime}m
                          </div>
                          <div className="flex items-center">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-1" />
                            {recipe.rating}
                          </div>
                        </div>
                        <span className="text-orange-500 font-medium text-xs">
                          {recipe.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedRecommendations;
