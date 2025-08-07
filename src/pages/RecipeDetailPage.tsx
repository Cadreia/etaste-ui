import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Clock,
  Users,
  Star,
  Heart,
  Share2,
  ChefHat,
  ArrowLeft,
  Play,
} from "lucide-react";

const RecipeDetailPage: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("ingredients");
  const [isFavorited, setIsFavorited] = useState(false);

  // Mock recipe data - in real app, this would come from API
  const recipe = {
    id: 1,
    title: "Authentic Korean Bibimbap",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    cuisine: "Korean",
    cookTime: 30,
    prepTime: 20,
    serves: 4,
    rating: 4.8,
    reviews: 124,
    difficulty: "Medium",
    description:
      "Bibimbap is a signature Korean dish that brings together a rainbow of seasoned vegetables, perfectly cooked rice, and your choice of protein in one beautiful bowl. This dish represents the Korean philosophy of balance in both nutrition and flavor.",
    culturalNote:
      "Bibimbap literally means 'mixed rice' in Korean. Traditionally served in a stone bowl (dolsot), the dish represents harmony and balance - core values in Korean culture.",
    chef: {
      name: "Chef Min-jun Park",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
      location: "Seoul, South Korea",
      specialties: ["Korean Traditional", "Asian Fusion"],
    },
    nutrition: {
      calories: 450,
      protein: 18,
      carbs: 65,
      fat: 12,
      fiber: 8,
    },
    ingredients: [
      { name: "Short-grain white rice", amount: "2 cups", essential: true },
      { name: "Beef bulgogi or tofu", amount: "200g", essential: true },
      { name: "Spinach", amount: "200g", essential: true },
      { name: "Bean sprouts", amount: "150g", essential: true },
      { name: "Carrots", amount: "1 large", essential: true },
      { name: "Shiitake mushrooms", amount: "100g", essential: false },
      { name: "Zucchini", amount: "1 medium", essential: true },
      { name: "Sesame oil", amount: "3 tbsp", essential: true },
      { name: "Soy sauce", amount: "4 tbsp", essential: true },
      { name: "Garlic", amount: "4 cloves", essential: true },
      {
        name: "Gochujang (Korean chili paste)",
        amount: "2 tbsp",
        essential: true,
      },
      { name: "Eggs", amount: "4", essential: true },
      { name: "Sesame seeds", amount: "2 tbsp", essential: false },
    ],
    instructions: [
      {
        step: 1,
        title: "Prepare the rice",
        description:
          "Cook 2 cups of short-grain rice according to package instructions. Keep warm.",
        time: 20,
        image:
          "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        step: 2,
        title: "Prepare vegetables",
        description:
          "Blanch spinach and bean sprouts separately. Julienne carrots and zucchini. Slice mushrooms.",
        time: 15,
        image:
          "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        step: 3,
        title: "Season vegetables",
        description:
          "Season each vegetable separately with sesame oil, soy sauce, and garlic. Let marinate for 10 minutes.",
        time: 10,
        image:
          "https://images.pexels.com/photos/1435163/pexels-photo-1435163.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        step: 4,
        title: "Cook protein",
        description:
          "If using beef, marinate and cook bulgogi-style. If using tofu, pan-fry until golden.",
        time: 10,
        image:
          "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        step: 5,
        title: "Fry eggs",
        description:
          "Fry eggs sunny-side up with slightly runny yolks for the perfect bibimbap experience.",
        time: 5,
        image:
          "https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        step: 6,
        title: "Assemble and serve",
        description:
          "Place rice in bowls, arrange vegetables and protein on top, add fried egg, and serve with gochujang.",
        time: 5,
        image:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
    ],
    tags: ["Healthy", "Vegetarian Option", "One Bowl", "Balanced", "Colorful"],
  };

  const tabs = [
    { id: "ingredients", label: "Ingredients" },
    { id: "instructions", label: "Instructions" },
    { id: "nutrition", label: "Nutrition" },
    { id: "culture", label: "Cultural Story" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Recipes
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Recipe Hero */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="relative">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                    {recipe.cuisine} Cuisine
                  </span>
                </div>

                <div className="absolute top-6 right-6 flex space-x-2">
                  <button
                    onClick={() => setIsFavorited(!isFavorited)}
                    className={`p-3 rounded-full backdrop-blur-sm transition-colors ${
                      isFavorited
                        ? "bg-red-500 text-white"
                        : "bg-white/90 text-gray-600 hover:text-red-500"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`}
                    />
                  </button>
                  <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:text-orange-500 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">
                    {recipe.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span>
                        {recipe.rating} ({recipe.reviews} reviews)
                      </span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-lg text-xs font-medium ${
                        recipe.difficulty === "Easy"
                          ? "bg-green-100 text-green-800"
                          : recipe.difficulty === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {recipe.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {recipe.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-50 text-orange-600 text-sm rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{recipe.cookTime + recipe.prepTime} min total</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>Serves {recipe.serves}</span>
                    </div>
                  </div>

                  <Link
                    to={`/cook/${recipe.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg transform hover:-translate-y-1"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start Cooking
                  </Link>
                </div>
              </div>
            </div>

            {/* Recipe Content Tabs */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Tab Navigation */}
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? "border-orange-500 text-orange-600"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === "ingredients" && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Ingredients
                    </h3>
                    <div className="grid gap-3">
                      {recipe.ingredients.map((ingredient, index) => (
                        <div
                          key={index}
                          className={`flex items-center justify-between p-3 rounded-lg border ${
                            ingredient.essential
                              ? "border-orange-200 bg-orange-50"
                              : "border-gray-200 bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center">
                            <span className="text-gray-800 font-medium">
                              {ingredient.name}
                            </span>
                            {!ingredient.essential && (
                              <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                                Optional
                              </span>
                            )}
                          </div>
                          <span className="text-gray-600 font-medium">
                            {ingredient.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "instructions" && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Cooking Instructions
                    </h3>
                    {recipe.instructions.map((instruction, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                            {instruction.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-900">
                              {instruction.title}
                            </h4>
                            <span className="text-sm text-gray-500">
                              {instruction.time} min
                            </span>
                          </div>
                          <p className="text-gray-700 mb-3">
                            {instruction.description}
                          </p>
                          <img
                            src={instruction.image}
                            alt={instruction.title}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "nutrition" && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Nutritional Information
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">
                          {recipe.nutrition.calories}
                        </div>
                        <div className="text-sm text-gray-600">Calories</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">
                          {recipe.nutrition.protein}g
                        </div>
                        <div className="text-sm text-gray-600">Protein</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          {recipe.nutrition.carbs}g
                        </div>
                        <div className="text-sm text-gray-600">Carbs</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          {recipe.nutrition.fat}g
                        </div>
                        <div className="text-sm text-gray-600">Fat</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">
                          {recipe.nutrition.fiber}g
                        </div>
                        <div className="text-sm text-gray-600">Fiber</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "culture" && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Cultural Story
                    </h3>
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">
                        {recipe.culturalNote}
                      </p>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        About the Chef
                      </h4>
                      <div className="flex items-center space-x-4">
                        <img
                          src={recipe.chef.image}
                          alt={recipe.chef.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h5 className="font-semibold text-gray-900">
                            {recipe.chef.name}
                          </h5>
                          <p className="text-gray-600">
                            {recipe.chef.location}
                          </p>
                          <div className="flex space-x-2 mt-1">
                            {recipe.chef.specialties.map((specialty, index) => (
                              <span
                                key={index}
                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Prep Time</span>
                  <span className="font-medium">{recipe.prepTime} min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Cook Time</span>
                  <span className="font-medium">{recipe.cookTime} min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Time</span>
                  <span className="font-medium">
                    {recipe.prepTime + recipe.cookTime} min
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Serves</span>
                  <span className="font-medium">{recipe.serves} people</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Difficulty</span>
                  <span
                    className={`font-medium ${
                      recipe.difficulty === "Easy"
                        ? "text-green-600"
                        : recipe.difficulty === "Medium"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {recipe.difficulty}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                to={`/cook/${recipe.id}`}
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg transform hover:-translate-y-1"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Cooking Mode
              </Link>

              <button className="w-full flex items-center justify-center px-6 py-4 bg-white border-2 border-orange-500 text-orange-500 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-200">
                <ChefHat className="w-5 h-5 mr-2" />
                Add to Meal Plan
              </button>
            </div>

            {/* Related Recipes */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Similar Recipes
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Link
                    key={i}
                    to={`/recipe/${i + 1}`}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <img
                      src={`https://images.pexels.com/photos/164077${i}/pexels-photo-164077${i}.jpeg?auto=compress&cs=tinysrgb&w=100`}
                      alt="Recipe"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">
                        Korean Kimchi Fried Rice
                      </h4>
                      <p className="text-xs text-gray-500">25 min • ⭐ 4.7</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
