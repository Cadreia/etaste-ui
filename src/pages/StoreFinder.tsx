import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Navigation,
  Filter,
  Search,
  ExternalLink,
  ShoppingBag,
} from "lucide-react";
import { CulturalStore } from "../types";

const StoreFinder: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [showMap, setShowMap] = useState(false);

  const storeTypes = [
    {
      id: "all",
      name: "All Stores",
      icon: "🏪",
      color: "bg-gray-100 text-gray-800",
    },
    {
      id: "afro",
      name: "African",
      icon: "🌍",
      color: "bg-green-100 text-green-800",
    },
    {
      id: "indian",
      name: "Indian",
      icon: "🇮🇳",
      color: "bg-orange-100 text-orange-800",
    },
    {
      id: "mexican",
      name: "Mexican",
      icon: "🇲🇽",
      color: "bg-red-100 text-red-800",
    },
    {
      id: "asian",
      name: "Asian",
      icon: "🍜",
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: "middle-eastern",
      name: "Middle Eastern",
      icon: "🕌",
      color: "bg-purple-100 text-purple-800",
    },
  ];

  const stores: CulturalStore[] = [
    {
      id: "1",
      name: "Afro Spice Market",
      type: "afro",
      address: "123 Multicultural Blvd, Downtown",
      location: { latitude: 40.7128, longitude: -74.006 },
      phone: "(555) 123-4567",
      hours: {
        monday: "9:00 AM - 8:00 PM",
        tuesday: "9:00 AM - 8:00 PM",
        wednesday: "9:00 AM - 8:00 PM",
        thursday: "9:00 AM - 8:00 PM",
        friday: "9:00 AM - 9:00 PM",
        saturday: "8:00 AM - 9:00 PM",
        sunday: "10:00 AM - 7:00 PM",
      },
      specialties: [
        "Palm Oil",
        "Plantains",
        "Cassava",
        "Scotch Bonnet Peppers",
        "Jollof Rice Mix",
      ],
      rating: 4.8,
      reviewCount: 234,
      products: [],
      delivery: true,
    },
    {
      id: "2",
      name: "Mumbai Grocery & Spices",
      type: "indian",
      address: "456 Spice Route Ave, Little India",
      location: { latitude: 40.7589, longitude: -73.9851 },
      phone: "(555) 234-5678",
      hours: {
        monday: "10:00 AM - 9:00 PM",
        tuesday: "10:00 AM - 9:00 PM",
        wednesday: "10:00 AM - 9:00 PM",
        thursday: "10:00 AM - 9:00 PM",
        friday: "10:00 AM - 10:00 PM",
        saturday: "9:00 AM - 10:00 PM",
        sunday: "10:00 AM - 8:00 PM",
      },
      specialties: [
        "Basmati Rice",
        "Garam Masala",
        "Paneer",
        "Curry Leaves",
        "Tamarind",
      ],
      rating: 4.9,
      reviewCount: 189,
      products: [],
      delivery: true,
    },
    {
      id: "3",
      name: "Casa Latina Market",
      type: "mexican",
      address: "789 Fiesta Street, Mexican Quarter",
      location: { latitude: 40.7505, longitude: -73.9934 },
      phone: "(555) 345-6789",
      hours: {
        monday: "8:00 AM - 9:00 PM",
        tuesday: "8:00 AM - 9:00 PM",
        wednesday: "8:00 AM - 9:00 PM",
        thursday: "8:00 AM - 9:00 PM",
        friday: "8:00 AM - 10:00 PM",
        saturday: "7:00 AM - 10:00 PM",
        sunday: "9:00 AM - 8:00 PM",
      },
      specialties: [
        "Masa Harina",
        "Tomatillos",
        "Chipotle Peppers",
        "Epazote",
        "Mexican Cheeses",
      ],
      rating: 4.7,
      reviewCount: 156,
      products: [],
      delivery: false,
    },
    {
      id: "4",
      name: "Golden Dragon Asian Market",
      type: "asian",
      address: "321 Dragon Way, Chinatown",
      location: { latitude: 40.7155, longitude: -74.0023 },
      phone: "(555) 456-7890",
      hours: {
        monday: "9:00 AM - 8:00 PM",
        tuesday: "9:00 AM - 8:00 PM",
        wednesday: "9:00 AM - 8:00 PM",
        thursday: "9:00 AM - 8:00 PM",
        friday: "9:00 AM - 9:00 PM",
        saturday: "8:00 AM - 9:00 PM",
        sunday: "10:00 AM - 7:00 PM",
      },
      specialties: [
        "Soy Sauce",
        "Rice Noodles",
        "Miso Paste",
        "Sesame Oil",
        "Kimchi",
      ],
      rating: 4.6,
      reviewCount: 278,
      products: [],
      delivery: true,
    },
  ];

  const filteredStores = stores.filter((store) => {
    const matchesSearch =
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.specialties.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesType = selectedType === "all" || store.type === selectedType;
    return matchesSearch && matchesType;
  });

  const StoreCard: React.FC<{ store: CulturalStore }> = ({ store }) => (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-medium text-gray-900">
                {store.name}
              </h3>
              {store.delivery && (
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  Delivery
                </span>
              )}
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{store.address}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">{store.phone}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center mb-1">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span className="font-medium text-gray-900">{store.rating}</span>
            </div>
            <span className="text-xs text-gray-500">
              ({store.reviewCount} reviews)
            </span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">
            Specialties
          </h4>
          <div className="flex flex-wrap gap-1">
            {store.specialties.slice(0, 4).map((specialty, index) => (
              <span
                key={index}
                className="bg-orange-50 text-orange-700 px-2 py-1 rounded-full text-xs"
              >
                {specialty}
              </span>
            ))}
            {store.specialties.length > 4 && (
              <span className="text-xs text-gray-500">
                +{store.specialties.length - 4} more
              </span>
            )}
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center text-gray-600 mb-3">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">Today: {store.hours.monday}</span>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium flex items-center justify-center gap-2">
              <Navigation className="w-4 h-4" />
              Directions
            </button>
            <Link
              to={`/store/${store.id}`}
              className="flex-1 border border-orange-500 text-orange-500 py-2 px-4 rounded-lg hover:bg-orange-50 transition-colors text-sm font-medium text-center"
            >
              View Store
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
              Find Cultural Stores
            </h1>
            <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto">
              Discover authentic ingredients near you from specialty cultural
              markets and stores
            </p>
          </div>

          {/* Search & Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search stores or ingredients..."
                className="block w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-2xl shadow-lg focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600 text-lg placeholder-gray-500"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {storeTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedType === type.id
                      ? "bg-white text-orange-600"
                      : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                  }`}
                >
                  <span>{type.icon}</span>
                  {type.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* View Toggle */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-2">
              {filteredStores.length} stores found
            </h2>
            <p className="text-gray-600">
              Showing{" "}
              {selectedType === "all"
                ? "all"
                : storeTypes
                    .find((t) => t.id === selectedType)
                    ?.name.toLowerCase()}{" "}
              stores
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setShowMap(false)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                !showMap
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              <Filter className="w-4 h-4" />
              List View
            </button>
            <button
              onClick={() => setShowMap(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showMap
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              <MapPin className="w-4 h-4" />
              Map View
            </button>
          </div>
        </div>

        {showMap ? (
          /* Map View Placeholder */
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  Interactive map will be displayed here
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Map integration with Google Maps or Mapbox
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowMap(false)}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Back to List View
            </button>
          </div>
        ) : (
          /* Store Cards */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        )}

        {filteredStores.length === 0 && (
          <div className="text-center py-12">
            <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No stores found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or browse all store types
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedType("all");
              }}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Help us improve by suggesting new stores or ingredients you'd like
              to see in our directory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                <ExternalLink className="w-4 h-4" />
                Suggest a Store
              </button>
              <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors font-medium">
                Request Ingredient
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreFinder;
