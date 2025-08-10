import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Lightbulb,
  Heart,
  Clock,
  Star,
  ShoppingCart,
  ExternalLink,
} from "lucide-react";
import { CulturalIngredient, Recipe } from "../types";

const IngredientDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data - in real app, fetch based on id
  const ingredient: CulturalIngredient = {
    id: "scotch-bonnet",
    name: "Scotch Bonnet Pepper",
    alternativeNames: ["Caribbean Hot Pepper", "Bonney Pepper", "Goat Pepper"],
    origin: ["Jamaica", "Trinidad", "Barbados", "Guyana"],
    description:
      "A variety of chili pepper found mainly in the Caribbean and Central America. It's one of the spiciest peppers in the world, with a distinctive sweet and fruity flavor underneath the intense heat.",
    culturalSignificance:
      "Essential to authentic Caribbean cuisine, particularly in jerk seasoning and pepper sauces. Often considered the soul of Caribbean cooking.",
    whereToFind: [
      "Caribbean markets",
      "Afro-Caribbean stores",
      "Online specialty retailers",
      "Some supermarkets in ethnic food aisles",
    ],
    alternatives: [
      {
        name: "Habanero pepper",
        conversionRatio: 1,
        notes: "Very similar heat level and fruity flavor",
      },
      {
        name: "Jalapeño (multiple)",
        conversionRatio: 3,
        notes: "Much milder, use 3-4 jalapeños for 1 scotch bonnet",
      },
      {
        name: "Cayenne pepper",
        conversionRatio: 0.5,
        notes: "More heat but less fruity flavor",
      },
    ],
    recipes: ["jerk-chicken", "curry-goat", "pepper-sauce", "callaloo"],
    tips: [
      "Always wear gloves when handling",
      "Remove seeds and membrane to reduce heat",
      "Store in refrigerator for up to 2 weeks",
      "Can be frozen whole for longer storage",
      "Start with small amounts - they're extremely hot!",
    ],
    image:
      "https://images.pexels.com/photos/4518839/pexels-photo-4518839.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Peppers & Spices",
    seasonal: false,
    ritualUse:
      "Used in some Caribbean spiritual practices for protection and cleansing",
    healthBenefits: [
      "High in Vitamin C",
      "Contains capsaicin with anti-inflammatory properties",
      "May boost metabolism",
      "Rich in antioxidants",
    ],
  };

  const recipesUsingIngredient: Recipe[] = [
    {
      id: "1",
      title: "Authentic Jerk Chicken",
      description:
        "Traditional Jamaican jerk chicken with scotch bonnet peppers",
      image:
        "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400",
      cookTime: 45,
      prepTime: 30,
      servings: 4,
      difficulty: "medium",
      cuisine: "Jamaican",
      origin: "Jamaica",
      tags: ["spicy", "grilled", "traditional"],
      ingredients: [],
      instructions: [],
      rating: 4.8,
      reviewCount: 234,
      dateCreated: new Date(),
    },
    {
      id: "2",
      title: "Caribbean Curry Goat",
      description: "Slow-cooked goat curry with scotch bonnet heat",
      image:
        "https://images.pexels.com/photos/6248697/pexels-photo-6248697.jpeg?auto=compress&cs=tinysrgb&w=400",
      cookTime: 120,
      prepTime: 20,
      servings: 6,
      difficulty: "medium",
      cuisine: "Caribbean",
      origin: "Trinidad",
      tags: ["spicy", "slow-cooked", "traditional"],
      ingredients: [],
      instructions: [],
      rating: 4.7,
      reviewCount: 189,
      dateCreated: new Date(),
    },
    {
      id: "3",
      title: "Scotch Bonnet Pepper Sauce",
      description: "Fiery homemade Caribbean pepper sauce",
      image:
        "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400",
      cookTime: 15,
      prepTime: 10,
      servings: 8,
      difficulty: "easy",
      cuisine: "Caribbean",
      origin: "Jamaica",
      tags: ["spicy", "condiment", "traditional"],
      ingredients: [],
      instructions: [],
      rating: 4.9,
      reviewCount: 156,
      dateCreated: new Date(),
    },
  ];

  const nearbyStores = [
    {
      name: "Caribbean Spice Market",
      distance: "0.8 miles",
      availability: "In Stock",
    },
    {
      name: "Island Foods",
      distance: "1.2 miles",
      availability: "Limited Stock",
    },
    {
      name: "Tropical Grocers",
      distance: "2.1 miles",
      availability: "In Stock",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link
              to="/ingredients"
              className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Ingredients
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="mb-4">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  {ingredient.category}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                {ingredient.name}
              </h1>
              {ingredient.alternativeNames.length > 0 && (
                <div className="mb-4">
                  <p className="text-gray-600">
                    Also known as: {ingredient.alternativeNames.join(", ")}
                  </p>
                </div>
              )}
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Origin: {ingredient.origin.join(", ")}</span>
                </div>
                {ingredient.seasonal && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                    Seasonal
                  </span>
                )}
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {ingredient.description}
              </p>
            </div>

            <div className="lg:pl-8">
              <img
                src={ingredient.image}
                alt={ingredient.name}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Cultural Significance */}
            {ingredient.culturalSignificance && (
              <section className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  Cultural Significance
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {ingredient.culturalSignificance}
                </p>
                {ingredient.ritualUse && (
                  <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                    <p className="text-orange-800 text-sm">
                      <strong>Traditional Use:</strong> {ingredient.ritualUse}
                    </p>
                  </div>
                )}
              </section>
            )}

            {/* Where to Find */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-medium text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-500" />
                Where to Find
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {ingredient.whereToFind.map((location, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{location}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="font-medium text-gray-900 mb-3">
                  Nearby Stores
                </h3>
                <div className="space-y-2">
                  {nearbyStores.map((store, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                    >
                      <div>
                        <div className="font-medium text-gray-900">
                          {store.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {store.distance} away
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            store.availability === "In Stock"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {store.availability}
                        </span>
                        <button className="text-orange-500 hover:text-orange-600">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Alternatives */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-medium text-gray-900 mb-4">
                Substitutes & Alternatives
              </h2>
              <div className="space-y-4">
                {ingredient.alternatives.map((alt, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{alt.name}</h3>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        Ratio: {alt.conversionRatio}:1
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{alt.notes}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Cooking Tips */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-medium text-gray-900 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                Cooking Tips
              </h2>
              <div className="grid gap-3">
                {ingredient.tips.map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Recipes Using This Ingredient */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-medium text-gray-900 mb-6">
                Recipes Using {ingredient.name}
              </h2>
              <div className="grid gap-6">
                {recipesUsingIngredient.map((recipe) => (
                  <Link
                    key={recipe.id}
                    to={`/recipe/${recipe.id}`}
                    className="group flex gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300"
                  >
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-24 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {recipe.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
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
                        <span className="capitalize text-orange-500 font-medium">
                          {recipe.difficulty}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-medium text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/store-finder"
                  className="flex items-center gap-3 w-full bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Find Stores
                </Link>
                <button className="flex items-center gap-3 w-full border border-gray-300 text-gray-700 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart className="w-5 h-5" />
                  Save Ingredient
                </button>
                <button className="flex items-center gap-3 w-full border border-gray-300 text-gray-700 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>

            {/* Health Benefits */}
            {ingredient.healthBenefits && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-4">
                  Health Benefits
                </h3>
                <div className="space-y-2">
                  {ingredient.healthBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Ingredients */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-medium text-gray-900 mb-4">
                Related Ingredients
              </h3>
              <div className="space-y-3">
                <Link
                  to="/ingredient/ackee"
                  className="block text-orange-600 hover:text-orange-700 text-sm"
                >
                  Ackee Fruit
                </Link>
                <Link
                  to="/ingredient/allspice"
                  className="block text-orange-600 hover:text-orange-700 text-sm"
                >
                  Allspice Berries
                </Link>
                <Link
                  to="/ingredient/thyme"
                  className="block text-orange-600 hover:text-orange-700 text-sm"
                >
                  Caribbean Thyme
                </Link>
                <Link
                  to="/ingredient/coconut-milk"
                  className="block text-orange-600 hover:text-orange-700 text-sm"
                >
                  Coconut Milk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetail;
