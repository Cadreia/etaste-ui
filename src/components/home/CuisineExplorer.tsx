import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, MapPin, Flame, Leaf } from 'lucide-react';

const CuisineExplorer: React.FC = () => {
  const cuisines = [
    {
      name: "Italian",
      image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400",
      recipes: 850,
      popular: "Pasta, Pizza, Risotto",
      color: "from-green-500 to-red-500"
    },
    {
      name: "Japanese",
      image: "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=400",
      recipes: 720,
      popular: "Sushi, Ramen, Tempura",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Indian",
      image: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=400",
      recipes: 950,
      popular: "Curry, Biryani, Naan",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "French",
      image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400",
      recipes: 680,
      popular: "Croissant, Coq au Vin, Soufflé",
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Thai",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400",
      recipes: 540,
      popular: "Pad Thai, Tom Yum, Green Curry",
      color: "from-green-400 to-teal-500"
    },
    {
      name: "Mexican",
      image: "https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=400",
      recipes: 780,
      popular: "Tacos, Guacamole, Enchiladas",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  const features = [
    {
      icon: ChefHat,
      title: "Authentic Recipes",
      description: "Traditional recipes from native cooks and grandmothers worldwide"
    },
    {
      icon: MapPin,
      title: "Local Ingredients",
      description: "Smart substitutions for ingredients available in your area"
    },
    {
      icon: Flame,
      title: "Difficulty Levels",
      description: "From quick weeknight meals to elaborate weekend projects"
    },
    {
      icon: Leaf,
      title: "Dietary Options",
      description: "Vegetarian, vegan, gluten-free, and other dietary adaptations"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore World Cuisines
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take your taste buds on a journey around the world. Each cuisine tells a story of culture, 
            tradition, and the love that goes into every dish.
          </p>
        </div>

        {/* Cuisine Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cuisines.map((cuisine, index) => (
            <Link
              key={cuisine.name}
              to={`/cuisine/${cuisine.name.toLowerCase()}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cuisine.image}
                  alt={cuisine.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${cuisine.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{cuisine.name}</h3>
                  <p className="text-sm opacity-90">{cuisine.recipes} recipes</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-3">Popular dishes:</p>
                <p className="text-gray-800 font-medium">{cuisine.popular}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuisineExplorer;