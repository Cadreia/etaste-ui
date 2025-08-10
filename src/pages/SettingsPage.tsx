import React, { useState } from "react";
import {
  Bell,
  Globe,
  MapPin,
  User,
  Shield,
  Eye,
  Smartphone,
  Mail,
  Save,
  ChevronRight,
} from "lucide-react";
import {
  User as UserType,
  UserPreferences,
  NotificationSettings,
} from "../types";

interface SettingsPageProps {
  user?: UserType;
  onUpdateUser?: (user: UserType) => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ user, onUpdateUser }) => {
  const [activeSection, setActiveSection] = useState("profile");
  const [formData, setFormData] = useState<Partial<UserType>>(user || {});
  const [preferences, setPreferences] = useState<UserPreferences>(
    user?.preferences || {
      dietaryRestrictions: [],
      cuisinePreferences: [],
      skillLevel: "beginner",
      allergies: [],
      spiceLevel: "mild",
      meatPreference: "omnivore",
      cookingGoals: [],
      notifications: {
        newRecipes: true,
        nearbyIngredients: true,
        expiringIngredients: true,
        recipeSuggestions: true,
      },
      language: "en",
    }
  );

  const sections = [
    { id: "profile", name: "Profile", icon: User },
    { id: "preferences", name: "Food Preferences", icon: Globe },
    { id: "notifications", name: "Notifications", icon: Bell },
    { id: "privacy", name: "Privacy & Security", icon: Shield },
    { id: "location", name: "Location", icon: MapPin },
  ];

  const cuisines = [
    "Italian",
    "Indian",
    "Mexican",
    "Chinese",
    "Japanese",
    "Thai",
    "French",
    "Mediterranean",
    "Korean",
    "Vietnamese",
    "Caribbean",
    "African",
    "Middle Eastern",
    "Brazilian",
    "Peruvian",
  ];

  const dietaryOptions = [
    "Vegetarian",
    "Vegan",
    "Gluten-Free",
    "Dairy-Free",
    "Nut-Free",
    "Low-Carb",
    "Keto",
    "Halal",
    "Kosher",
  ];

  const allergens = [
    "Nuts",
    "Dairy",
    "Eggs",
    "Fish",
    "Shellfish",
    "Soy",
    "Wheat",
    "Sesame",
  ];

  const cookingGoals = [
    "Learn new techniques",
    "Eat healthier",
    "Save money",
    "Impress guests",
    "Cook faster meals",
    "Explore cultures",
    "Reduce food waste",
    "Master basics",
  ];

  const handleSave = () => {
    if (onUpdateUser && user) {
      const updatedUser: UserType = {
        ...user,
        ...formData,
        preferences,
      };
      onUpdateUser(updatedUser);
    }
  };

  const updateNotifications = (
    key: keyof NotificationSettings,
    value: boolean
  ) => {
    setPreferences((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: value,
      },
    }));
  };

  const toggleArrayItem = <T,>(array: T[], item: T): T[] => {
    return array.includes(item)
      ? array.filter((i) => i !== item)
      : [...array, item];
  };

  const renderProfileSection = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Profile Photo
        </label>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <User className="w-8 h-8 text-gray-400" />
            )}
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm">
            Change Photo
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={formData.name || ""}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={formData.email || ""}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Bio (Optional)
        </label>
        <textarea
          rows={3}
          placeholder="Tell us about your cooking journey..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        />
      </div>
    </div>
  );

  const renderPreferencesSection = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Cuisine Preferences
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {cuisines.map((cuisine) => (
            <button
              key={cuisine}
              onClick={() =>
                setPreferences((prev) => ({
                  ...prev,
                  cuisinePreferences: toggleArrayItem(
                    prev.cuisinePreferences,
                    cuisine
                  ),
                }))
              }
              className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                preferences.cuisinePreferences.includes(cuisine)
                  ? "bg-orange-100 border-orange-300 text-orange-700"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {cuisine}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Skill Level
          </label>
          <div className="space-y-2">
            {["beginner", "intermediate", "advanced"].map((level) => (
              <label key={level} className="flex items-center">
                <input
                  type="radio"
                  name="skillLevel"
                  value={level}
                  checked={preferences.skillLevel === level}
                  onChange={(e) =>
                    setPreferences((prev) => ({
                      ...prev,
                      skillLevel: e.target.value as any,
                    }))
                  }
                  className="mr-3 text-orange-600 focus:ring-orange-500"
                />
                <span className="capitalize">{level}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Spice Level
          </label>
          <div className="space-y-2">
            {["mild", "medium", "hot", "very-hot"].map((level) => (
              <label key={level} className="flex items-center">
                <input
                  type="radio"
                  name="spiceLevel"
                  value={level}
                  checked={preferences.spiceLevel === level}
                  onChange={(e) =>
                    setPreferences((prev) => ({
                      ...prev,
                      spiceLevel: e.target.value as any,
                    }))
                  }
                  className="mr-3 text-orange-600 focus:ring-orange-500"
                />
                <span className="capitalize">{level.replace("-", " ")}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Dietary Preferences
        </label>
        <div className="space-y-2">
          {["omnivore", "vegetarian", "vegan", "pescatarian"].map((pref) => (
            <label key={pref} className="flex items-center">
              <input
                type="radio"
                name="meatPreference"
                value={pref}
                checked={preferences.meatPreference === pref}
                onChange={(e) =>
                  setPreferences((prev) => ({
                    ...prev,
                    meatPreference: e.target.value as any,
                  }))
                }
                className="mr-3 text-orange-600 focus:ring-orange-500"
              />
              <span className="capitalize">{pref}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Dietary Restrictions
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {dietaryOptions.map((option) => (
            <button
              key={option}
              onClick={() =>
                setPreferences((prev) => ({
                  ...prev,
                  dietaryRestrictions: toggleArrayItem(
                    prev.dietaryRestrictions,
                    option
                  ),
                }))
              }
              className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                preferences.dietaryRestrictions.includes(option)
                  ? "bg-red-100 border-red-300 text-red-700"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Allergies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {allergens.map((allergen) => (
            <button
              key={allergen}
              onClick={() =>
                setPreferences((prev) => ({
                  ...prev,
                  allergies: toggleArrayItem(prev.allergies, allergen),
                }))
              }
              className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                preferences.allergies.includes(allergen)
                  ? "bg-red-100 border-red-300 text-red-700"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {allergen}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Cooking Goals
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cookingGoals.map((goal) => (
            <button
              key={goal}
              onClick={() =>
                setPreferences((prev) => ({
                  ...prev,
                  cookingGoals: toggleArrayItem(prev.cookingGoals, goal),
                }))
              }
              className={`p-3 rounded-lg border text-sm font-medium text-left transition-colors ${
                preferences.cookingGoals.includes(goal)
                  ? "bg-orange-100 border-orange-300 text-orange-700"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {goal}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderNotificationsSection = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800 text-sm">
          Control what notifications you receive to enhance your cooking
          experience.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div>
            <h4 className="font-medium text-gray-900">
              New Recipe Notifications
            </h4>
            <p className="text-sm text-gray-600">
              Get notified when new recipes match your preferences
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.notifications.newRecipes}
              onChange={(e) =>
                updateNotifications("newRecipes", e.target.checked)
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div>
            <h4 className="font-medium text-gray-900">Nearby Ingredients</h4>
            <p className="text-sm text-gray-600">
              Alerts when ingredients are available at nearby stores
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.notifications.nearbyIngredients}
              onChange={(e) =>
                updateNotifications("nearbyIngredients", e.target.checked)
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div>
            <h4 className="font-medium text-gray-900">Expiring Ingredients</h4>
            <p className="text-sm text-gray-600">
              Reminders when pantry items are about to expire
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.notifications.expiringIngredients}
              onChange={(e) =>
                updateNotifications("expiringIngredients", e.target.checked)
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between py-3">
          <div>
            <h4 className="font-medium text-gray-900">Recipe Suggestions</h4>
            <p className="text-sm text-gray-600">
              Personalized recipe recommendations based on your pantry
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.notifications.recipeSuggestions}
              onChange={(e) =>
                updateNotifications("recipeSuggestions", e.target.checked)
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
          </label>
        </div>
      </div>
    </div>
  );

  const renderPrivacySection = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Eye className="w-5 h-5 text-gray-400" />
            <div>
              <h4 className="font-medium text-gray-900">Profile Visibility</h4>
              <p className="text-sm text-gray-600">
                Who can see your profile and cooking activity
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Smartphone className="w-5 h-5 text-gray-400" />
            <div>
              <h4 className="font-medium text-gray-900">
                Two-Factor Authentication
              </h4>
              <p className="text-sm text-gray-600">
                Add an extra layer of security to your account
              </p>
            </div>
          </div>
          <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
            Setup
          </button>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <div>
              <h4 className="font-medium text-gray-900">Email Preferences</h4>
              <p className="text-sm text-gray-600">
                Manage your email subscription settings
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-gray-400" />
            <div>
              <h4 className="font-medium text-gray-900">Data & Privacy</h4>
              <p className="text-sm text-gray-600">
                Review and manage your data
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h4 className="font-medium text-red-800 mb-2">Danger Zone</h4>
        <p className="text-red-700 text-sm mb-3">
          Once you delete your account, there is no going back. Please be
          certain.
        </p>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
          Delete Account
        </button>
      </div>
    </div>
  );

  const renderLocationSection = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800 text-sm">
          Your location helps us find nearby stores and suggest regional
          recipes.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Current Location
        </label>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter your city or address"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors whitespace-nowrap">
            Update Location
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Language Preference
        </label>
        <select
          value={preferences.language}
          onChange={(e) =>
            setPreferences((prev) => ({ ...prev, language: e.target.value }))
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="it">Italiano</option>
          <option value="pt">Português</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
          <option value="zh">中文</option>
        </select>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return renderProfileSection();
      case "preferences":
        return renderPreferencesSection();
      case "notifications":
        return renderNotificationsSection();
      case "privacy":
        return renderPrivacySection();
      case "location":
        return renderLocationSection();
      default:
        return renderProfileSection();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl sm:text-3xl font-light text-gray-900">
            Settings
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your account preferences and privacy settings
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="space-y-1">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left ${
                      activeSection === section.id
                        ? "bg-orange-100 text-orange-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {section.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-medium text-gray-900">
                  {sections.find((s) => s.id === activeSection)?.name}
                </h2>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>

              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
