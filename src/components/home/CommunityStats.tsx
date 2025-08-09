import React from "react";
import { Users, BookOpen, Heart, Award, Sparkles } from "lucide-react";

const CommunityStats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Active Cooks",
    },
    {
      icon: BookOpen,
      value: "12K+",
      label: "Recipes",
    },
    {
      icon: Heart,
      value: "2M+",
      label: "Recipe Saves",
    },
    {
      icon: Award,
      value: "500+",
      label: "Expert Chefs",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-100 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-medium text-orange-500 uppercase tracking-wide">
              Community
            </span>
          </div> */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-3">
            Join Our Growing
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-medium">
              Culinary Community
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with food lovers and discover amazing recipes
          </p>
        </div>

        {/* Simplified Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-medium text-gray-800">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Simplified Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-medium mb-3">
              Ready to Start Cooking?
            </h3>
            <p className="text-orange-100 mb-6 max-w-xl mx-auto">
              Join our community and discover thousands of amazing recipes
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex-1">
                Join Free
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors flex-1">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
