import React from 'react';
import { Search, TrendingUp, Globe, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-500 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-red-500 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-500 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-orange-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">AI-Powered Cultural Cuisine</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Global Flavors
              </span>
              That Feel Like Home
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Explore authentic recipes from around the world, adapted to your local ingredients and taste preferences. 
              From your grandmother's comfort food to exotic fusion creations.
            </p>

            {/* Search Bar */}
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search by cuisine, ingredient, or dish name..."
                className="w-full max-w-md pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-lg transition-all duration-200"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm">
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-gray-600">10,000+ Recipes</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 text-blue-500 mr-2" />
                <span className="text-gray-600">50+ Cuisines</span>
              </div>
              <div className="flex items-center">
                <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                <span className="text-gray-600">AI-Powered</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Delicious cultural cuisine"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Recipe Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Recipe"
                className="w-16 h-16 rounded-xl object-cover mb-2"
              />
              <p className="text-xs font-medium text-gray-800">Thai Pad Thai</p>
              <p className="text-xs text-gray-500">⭐ 4.8 • 25 min</p>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Recipe"
                className="w-16 h-16 rounded-xl object-cover mb-2"
              />
              <p className="text-xs font-medium text-gray-800">Italian Pasta</p>
              <p className="text-xs text-gray-500">⭐ 4.9 • 30 min</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;