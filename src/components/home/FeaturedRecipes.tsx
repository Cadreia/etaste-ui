import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, Heart } from 'lucide-react';

const FeaturedRecipes: React.FC = () => {
  const recipes = [
    {
      id: 1,
      title: "Authentic Korean Bibimbap",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      cuisine: "Korean",
      cookTime: 30,
      serves: 4,
      rating: 4.8,
      difficulty: "Medium",
      description: "A colorful and nutritious bowl with seasoned vegetables, rice, and your choice of protein.",
      tags: ["Healthy", "Vegetarian Option", "One Bowl"]
    },
    {
      id: 2,
      title: "Moroccan Chicken Tagine",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
      cuisine: "Moroccan",
      cookTime: 90,
      serves: 6,
      rating: 4.9,
      difficulty: "Hard",
      description: "Tender chicken with aromatic spices, dried fruits, and preserved lemons in a clay pot.",
      tags: ["Traditional", "Slow Cooked", "Aromatic"]
    },
    {
      id: 3,
      title: "Mexican Street Tacos",
      image: "https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=600",
      cuisine: "Mexican",
      cookTime: 20,
      serves: 3,
      rating: 4.7,
      difficulty: "Easy",
      description: "Authentic street-style tacos with corn tortillas, fresh cilantro, and lime.",
      tags: ["Quick", "Street Food", "Fresh"]
    },
    {
      id: 4,
      title: "Japanese Ramen Bowl",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600",
      cuisine: "Japanese",
      cookTime: 45,
      serves: 2,
      rating: 4.8,
      difficulty: "Medium",
      description: "Rich tonkotsu broth with fresh noodles, chashu pork, and traditional toppings.",
      tags: ["Comfort Food", "Noodles", "Warming"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Recipes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover handpicked recipes from around the world, carefully selected for their authentic flavors and cultural significance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {recipe.cuisine}
                  </span>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {recipe.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {recipe.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{recipe.cookTime} min</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>Serves {recipe.serves}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                    <span>{recipe.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/recipes"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore All Recipes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;