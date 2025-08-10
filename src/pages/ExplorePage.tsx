import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Clock,
  Star,
  Users,
  Flame,
  Sparkles,
  Globe,
  Calendar,
  Utensils,
} from "lucide-react";
import { Recipe, SearchFilters } from "../types";

const ExplorePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<SearchFilters>({});
  const [showFilters, setShowFilters] = useState(false);

  const cultures = [
    {
      id: "italian",
      name: "Italian",
      flag: "🇮🇹",
      color: "bg-green-100 text-green-800",
    },
    {
      id: "indian",
      name: "Indian",
      flag: "🇮🇳",
      color: "bg-orange-100 text-orange-800",
    },
    {
      id: "mexican",
      name: "Mexican",
      flag: "🇲🇽",
      color: "bg-red-100 text-red-800",
    },
    {
      id: "japanese",
      name: "Japanese",
      flag: "🇯🇵",
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: "thai",
      name: "Thai",
      flag: "🇹🇭",
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: "french",
      name: "French",
      flag: "🇫🇷",
      color: "bg-indigo-100 text-indigo-800",
    },
    {
      id: "chinese",
      name: "Chinese",
      flag: "🇨🇳",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      id: "moroccan",
      name: "Moroccan",
      flag: "🇲🇦",
      color: "bg-pink-100 text-pink-800",
    },
  ];

  const dishTypes = [
    { id: "street-food", name: "Street Food", icon: "🚚", count: 245 },
    { id: "desserts", name: "Desserts", icon: "🍰", count: 189 },
    { id: "comfort-food", name: "Comfort Food", icon: "🍲", count: 324 },
    { id: "festive", name: "Festive", icon: "🎉", count: 156 },
    { id: "breakfast", name: "Breakfast", icon: "🍳", count: 198 },
    { id: "seafood", name: "Seafood", icon: "🐟", count: 167 },
  ];

  const popularTags = [
    "Spicy",
    "Comfort food",
    "Vegetarian",
    "Quick & Easy",
    "Diaspora-friendly",
    "Traditional",
    "Fusion",
    "Healthy",
    "Family Recipe",
    "Weekend Special",
  ];

  const trendingRecipes: Recipe[] = [
    {
      id: "1",
      title: "Authentic Pad Thai",
      description: "Street-style Thai noodles with tamarind and fish sauce",
      image:
        "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400",
      cookTime: 20,
      prepTime: 15,
      servings: 4,
      difficulty: "medium",
      cuisine: "Thai",
      origin: "Thailand",
      tags: ["spicy", "street-food", "noodles"],
      ingredients: [],
      instructions: [],
      rating: 4.8,
      reviewCount: 234,
      dateCreated: new Date(),
    },
    {
      id: "2",
      title: "Moroccan Tagine",
      description: "Slow-cooked lamb with apricots and warm spices",
      image:
        "https://images.pexels.com/photos/8629149/pexels-photo-8629149.jpeg?auto=compress&cs=tinysrgb&w=400",
      cookTime: 120,
      prepTime: 30,
      servings: 6,
      difficulty: "easy",
      cuisine: "Moroccan",
      origin: "Morocco",
      tags: ["comfort-food", "traditional", "slow-cooked"],
      ingredients: [],
      instructions: [],
      rating: 4.9,
      reviewCount: 189,
      dateCreated: new Date(),
    },
    {
      id: "3",
      title: "Korean Kimchi Jjigae",
      description: "Spicy fermented cabbage stew with tofu",
      image:
        "https://images.pexels.com/photos/4518839/pexels-photo-4518839.jpeg?auto=compress&cs=tinysrgb&w=400",
      cookTime: 25,
      prepTime: 10,
      servings: 4,
      difficulty: "easy",
      cuisine: "Korean",
      origin: "South Korea",
      tags: ["spicy", "healthy", "fermented"],
      ingredients: [],
      instructions: [],
      rating: 4.7,
      reviewCount: 167,
      dateCreated: new Date(),
    },
  ];

  const editorsPicks: Recipe[] = [
    {
      id: "4",
      title: "Nigerian Jollof Rice",
      description: "The iconic West African one-pot rice dish",
      image:
        "https://images.pexels.com/photos/6248697/pexels-photo-6248697.jpeg?auto=compress&cs=tinysrgb&w=400",
      cookTime: 45,
      prepTime: 20,
      servings: 8,
      difficulty: "medium",
      cuisine: "Nigerian",
      origin: "Nigeria",
      tags: ["traditional", "one-pot", "family-recipe"],
      ingredients: [],
      instructions: [],
      rating: 4.9,
      reviewCount: 312,
      dateCreated: new Date(),
    },
    {
      id: "5",
      title: "Peruvian Ceviche",
      description: "Fresh fish cured in citrus with aji peppers",
      image:
        "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400",
      cookTime: 0,
      prepTime: 30,
      servings: 4,
      difficulty: "medium",
      cuisine: "Peruvian",
      origin: "Peru",
      tags: ["seafood", "healthy", "no-cook"],
      ingredients: [],
      instructions: [],
      rating: 4.8,
      reviewCount: 203,
      dateCreated: new Date(),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Search Section */}
      <section className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
              Explore Global Flavors
            </h1>
            <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto">
              Discover authentic recipes from every corner of the world, from
              street food to festive traditions
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search recipes, cuisines, ingredients..."
                className="block w-full pl-12 pr-16 py-4 text-gray-900 bg-white rounded-2xl shadow-lg focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600 text-lg placeholder-gray-500"
              />
              <button className="absolute inset-y-0 right-0 pr-4 flex items-center">
                <div className="bg-orange-600 text-white p-2 rounded-xl hover:bg-orange-700 transition-colors">
                  <Search className="h-5 w-5" />
                </div>
              </button>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              {popularTags.slice(0, 5).map((tag) => (
                <button
                  key={tag}
                  className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Culture Explorer */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900">
              Explore by Culture
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {cultures.map((culture) => (
              <Link
                key={culture.id}
                to={`/cuisine/${culture.id}`}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="text-4xl mb-3">{culture.flag}</div>
                <h3 className="font-medium text-gray-900 mb-2">
                  {culture.name}
                </h3>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${culture.color}`}
                >
                  Traditional
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Dish Types */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Utensils className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900">
              Browse by Type
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {dishTypes.map((type) => (
              <Link
                key={type.id}
                to={`/dishes/${type.id}`}
                className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="text-3xl mb-2">{type.icon}</div>
                <h3 className="font-medium text-gray-900 text-sm mb-1">
                  {type.name}
                </h3>
                <p className="text-xs text-gray-500">{type.count} recipes</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Trending Recipes */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Flame className="w-6 h-6 text-orange-500" />
                <h2 className="text-xl sm:text-2xl font-light text-gray-900">
                  Trending Now
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingRecipes.map((recipe) => (
                  <Link
                    key={recipe.id}
                    to={`/recipe/${recipe.id}`}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium">
                        {recipe.cuisine}
                      </div>
                      <div className="absolute top-3 right-3 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-medium flex items-center gap-1">
                        <Flame className="w-3 h-3" />
                        Hot
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 mb-2">
                        {recipe.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {recipe.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {recipe.cookTime}m
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            {recipe.rating}
                          </div>
                        </div>
                        <span className="text-orange-500 font-medium capitalize">
                          {recipe.difficulty}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Editor's Picks */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-orange-500" />
                <h2 className="text-xl sm:text-2xl font-light text-gray-900">
                  Editor's Picks
                </h2>
              </div>

              <div className="space-y-6">
                {editorsPicks.map((recipe) => (
                  <Link
                    key={recipe.id}
                    to={`/recipe/${recipe.id}`}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex"
                  >
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-48 h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 mb-2 text-lg">
                            {recipe.title}
                          </h3>
                          <p className="text-gray-600 mb-3">
                            {recipe.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {recipe.cookTime}m
                            </div>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 mr-1" />
                              {recipe.rating}
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {recipe.reviewCount}
                            </div>
                          </div>
                        </div>
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                          Editor's Choice
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Popular Tags */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-medium text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    className="bg-gray-100 hover:bg-orange-100 hover:text-orange-700 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Seasonal Recipes */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-orange-500" />
                <h3 className="font-medium text-gray-900">
                  Seasonal Favorites
                </h3>
              </div>
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium text-gray-900">
                    Summer Refreshers
                  </div>
                  <div className="text-gray-600">Cool soups & light salads</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-900">
                    Festival Specials
                  </div>
                  <div className="text-gray-600">
                    Traditional celebration dishes
                  </div>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-900">
                    Harvest Season
                  </div>
                  <div className="text-gray-600">
                    Fresh ingredient highlights
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Culture */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
              <h3 className="font-medium text-gray-900 mb-2">
                Culture Spotlight
              </h3>
              <div className="text-center">
                <div className="text-4xl mb-2">🇪🇹</div>
                <div className="font-medium text-gray-900">Ethiopian</div>
                <div className="text-sm text-gray-600 mb-3">
                  Discover the rich flavors of Ethiopia
                </div>
                <Link
                  to="/cuisine/ethiopian"
                  className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
