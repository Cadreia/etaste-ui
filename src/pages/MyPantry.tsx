import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Search,
  Filter,
  Calendar,
  AlertTriangle,
  ChefHat,
  Trash2,
  Edit3,
  Package,
} from "lucide-react";
import { PantryItem, Recipe } from "../types";

const MyPantry: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);

  const categories = [
    { id: "all", name: "All Items", count: 47 },
    { id: "spices", name: "Spices & Herbs", count: 15 },
    { id: "grains", name: "Grains & Rice", count: 8 },
    { id: "vegetables", name: "Vegetables", count: 12 },
    { id: "proteins", name: "Proteins", count: 6 },
    { id: "dairy", name: "Dairy", count: 4 },
    { id: "condiments", name: "Condiments", count: 2 },
  ];

  const pantryItems: PantryItem[] = [
    {
      id: "1",
      ingredientId: "basmati-rice",
      name: "Basmati Rice",
      quantity: 2,
      unit: "kg",
      expiryDate: new Date("2025-12-15"),
      dateAdded: new Date("2024-11-01"),
      category: "grains",
    },
    {
      id: "2",
      ingredientId: "garam-masala",
      name: "Garam Masala",
      quantity: 100,
      unit: "g",
      expiryDate: new Date("2025-06-20"),
      dateAdded: new Date("2024-10-15"),
      category: "spices",
    },
    {
      id: "3",
      ingredientId: "coconut-milk",
      name: "Coconut Milk",
      quantity: 3,
      unit: "cans",
      expiryDate: new Date("2025-08-30"),
      dateAdded: new Date("2024-12-01"),
      category: "condiments",
    },
    {
      id: "4",
      ingredientId: "scotch-bonnet",
      name: "Scotch Bonnet Peppers",
      quantity: 150,
      unit: "g",
      expiryDate: new Date("2025-08-15"),
      dateAdded: new Date("2024-08-05"),
      category: "vegetables",
    },
    {
      id: "5",
      ingredientId: "chicken-thighs",
      name: "Chicken Thighs",
      quantity: 1.2,
      unit: "kg",
      expiryDate: new Date("2025-08-12"),
      dateAdded: new Date("2024-08-08"),
      category: "proteins",
    },
  ];

  const suggestedRecipes: Recipe[] = [
    {
      id: "1",
      title: "Coconut Rice with Scotch Bonnet",
      description: "Fragrant rice cooked in coconut milk with a kick of heat",
      image:
        "https://images.pexels.com/photos/6248697/pexels-photo-6248697.jpeg?auto=compress&cs=tinysrgb&w=400",
      cookTime: 25,
      prepTime: 10,
      servings: 4,
      difficulty: "easy",
      cuisine: "Caribbean",
      origin: "Jamaica",
      tags: ["coconut", "spicy", "rice"],
      ingredients: [],
      instructions: [],
      rating: 4.7,
      reviewCount: 189,
      dateCreated: new Date(),
    },
    {
      id: "2",
      title: "Garam Masala Chicken Curry",
      description: "Rich and aromatic chicken curry with warming spices",
      image:
        "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400",
      cookTime: 45,
      prepTime: 20,
      servings: 4,
      difficulty: "medium",
      cuisine: "Indian",
      origin: "India",
      tags: ["curry", "spicy", "comfort-food"],
      ingredients: [],
      instructions: [],
      rating: 4.8,
      reviewCount: 234,
      dateCreated: new Date(),
    },
  ];

  const getExpiryStatus = (expiryDate: Date) => {
    const today = new Date();
    const daysUntilExpiry = Math.ceil(
      (expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysUntilExpiry < 0)
      return {
        status: "expired",
        color: "text-red-600",
        bgColor: "bg-red-100",
      };
    if (daysUntilExpiry <= 3)
      return {
        status: "expiring-soon",
        color: "text-orange-600",
        bgColor: "bg-orange-100",
      };
    if (daysUntilExpiry <= 7)
      return {
        status: "use-soon",
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
      };
    return {
      status: "fresh",
      color: "text-green-600",
      bgColor: "bg-green-100",
    };
  };

  const filteredItems = pantryItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const expiringItems = pantryItems.filter((item) => {
    const { status } = getExpiryStatus(item.expiryDate!);
    return status === "expiring-soon" || status === "expired";
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
                My Pantry
              </h1>
              <p className="text-lg sm:text-xl text-orange-100">
                Track your ingredients and discover what you can cook
              </p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="mt-6 sm:mt-0 flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-xl font-medium hover:bg-orange-50 transition-colors shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Add Ingredient
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-2xl font-bold text-gray-900">
              {pantryItems.length}
            </div>
            <div className="text-gray-600 text-sm">Total Items</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-2xl font-bold text-orange-600">
              {expiringItems.length}
            </div>
            <div className="text-gray-600 text-sm">Expiring Soon</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-2xl font-bold text-green-600">
              {suggestedRecipes.length}
            </div>
            <div className="text-gray-600 text-sm">Recipe Matches</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-2xl font-bold text-blue-600">7</div>
            <div className="text-gray-600 text-sm">Categories</div>
          </div>
        </div>

        {/* Expiring Items Alert */}
        {expiringItems.length > 0 && (
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-medium text-orange-900 mb-2">
                  {expiringItems.length} item
                  {expiringItems.length > 1 ? "s" : ""} expiring soon
                </h3>
                <div className="space-y-2">
                  {expiringItems.map((item) => {
                    const { status, color } = getExpiryStatus(item.expiryDate!);
                    return (
                      <div
                        key={item.id}
                        className="flex items-center justify-between"
                      >
                        <span className="text-orange-800">{item.name}</span>
                        <span className={`text-sm font-medium ${color}`}>
                          {status === "expired"
                            ? "Expired"
                            : `${Math.ceil(
                                (item.expiryDate!.getTime() -
                                  new Date().getTime()) /
                                  (1000 * 60 * 60 * 24)
                              )} days left`}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ingredients..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                      selectedCategory === category.id
                        ? "bg-orange-100 text-orange-700"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-sm text-gray-500">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-medium text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-colors">
                  <Package className="w-5 h-5" />
                  Scan Pantry
                </button>
                <button className="w-full flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-colors">
                  <Calendar className="w-5 h-5" />
                  Expiry Calendar
                </button>
                <Link
                  to="/shopping-list"
                  className="w-full flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Shopping List
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Suggested Recipes */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <ChefHat className="w-6 h-6 text-orange-500" />
                <h2 className="text-xl sm:text-2xl font-light text-gray-900">
                  Recipes You Can Make
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {suggestedRecipes.map((recipe) => (
                  <Link
                    key={recipe.id}
                    to={`/recipe/${recipe.id}`}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <h3 className="font-medium text-gray-900 mb-2">
                        {recipe.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {recipe.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-orange-500 font-medium">
                          {recipe.cuisine}
                        </span>
                        <span className="text-gray-500">
                          {recipe.cookTime}m
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Pantry Items */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-light text-gray-900">
                  Your Ingredients ({filteredItems.length})
                </h2>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    <Calendar className="w-4 h-4" />
                    Sort by Expiry
                  </button>
                </div>
              </div>

              <div className="grid gap-4">
                {filteredItems.map((item) => {
                  const expiryStatus = getExpiryStatus(item.expiryDate!);
                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-medium text-gray-900">
                              {item.name}
                            </h3>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${expiryStatus.bgColor} ${expiryStatus.color}`}
                            >
                              {expiryStatus.status === "expired"
                                ? "Expired"
                                : expiryStatus.status === "expiring-soon"
                                ? "Expiring Soon"
                                : expiryStatus.status === "use-soon"
                                ? "Use Soon"
                                : "Fresh"}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>
                              {item.quantity} {item.unit}
                            </span>
                            <span>•</span>
                            <span>
                              Expires: {item.expiryDate?.toLocaleDateString()}
                            </span>
                            <span>•</span>
                            <span className="capitalize">{item.category}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-gray-400 hover:text-orange-500 transition-colors">
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-12">
                  <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    No ingredients found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {searchQuery
                      ? "Try adjusting your search"
                      : "Start by adding some ingredients to your pantry"}
                  </p>
                  <button
                    onClick={() => setShowAddModal(true)}
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Add First Ingredient
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>

      {/* Add Modal (placeholder) */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Add Ingredient
            </h3>
            <p className="text-gray-600 mb-6">
              Add ingredient form would go here with fields for name, quantity,
              expiry date, etc.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPantry;
