import React, { useState } from 'react';
import { User, Settings, Heart, Clock, Award, MapPin, Edit3 } from 'lucide-react';

interface ProfileProps {
  user: any;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Recipes Tried', value: 47, icon: Clock, color: 'text-blue-500' },
    { label: 'Favorites', value: 23, icon: Heart, color: 'text-red-500' },
    { label: 'Achievements', value: 8, icon: Award, color: 'text-yellow-500' },
    { label: 'Countries Explored', value: 12, icon: MapPin, color: 'text-green-500' }
  ];

  const recentRecipes = [
    {
      id: 1,
      title: "Korean Bibimbap",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      date: "2 days ago"
    },
    {
      id: 2,
      title: "Thai Green Curry",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 4,
      date: "1 week ago"
    },
    {
      id: 3,
      title: "Italian Carbonara",
      image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      date: "2 weeks ago"
    }
  ];

  const achievements = [
    { title: "Cultural Explorer", description: "Tried recipes from 10+ countries", icon: "🌍" },
    { title: "Spice Master", description: "Completed 5 spicy recipes", icon: "🌶️" },
    { title: "Quick Cook", description: "Mastered 10 recipes under 30 minutes", icon: "⚡" },
    { title: "Vegetarian Specialist", description: "Tried 15 vegetarian recipes", icon: "🥬" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-32 bg-gradient-to-r from-orange-500 to-red-500">
            <div className="absolute bottom-0 left-6 transform translate-y-1/2">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Profile"
                className="w-20 h-20 rounded-full border-4 border-white object-cover"
              />
            </div>
          </div>
          
          <div className="pt-12 pb-6 px-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Sarah Johnson</h1>
                <p className="text-gray-600 mb-2">Food enthusiast from San Francisco, CA</p>
                <p className="text-sm text-gray-500">Member since March 2024</p>
              </div>
              <button className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                <Edit3 className="w-4 h-4 mr-2" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-t-2xl shadow-lg">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'recipes', label: 'My Recipes' },
                { id: 'achievements', label: 'Achievements' },
                { id: 'preferences', label: 'Preferences' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentRecipes.map((recipe) => (
                      <div key={recipe.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{recipe.title}</h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <span>Cooked {recipe.date}</span>
                            <span>•</span>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                              <span>Rated {recipe.rating}/5</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Your Achievements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Dietary Preferences</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Restrictions</label>
                    <div className="space-y-2">
                      {['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Nut-Free'].map((diet) => (
                        <label key={diet} className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                          <span className="ml-2 text-gray-700">{diet}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Spice Tolerance</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500">
                      <option>Mild</option>
                      <option>Medium</option>
                      <option>Hot</option>
                      <option>Extra Hot</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;