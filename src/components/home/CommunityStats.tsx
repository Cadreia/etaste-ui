import React from "react";
import { Users, BookOpen, Heart, Award } from "lucide-react";

const CommunityStats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Active Cooks",
      description: "Food enthusiasts sharing recipes daily",
    },
    {
      icon: BookOpen,
      value: "12K+",
      label: "Recipes",
      description: "Curated dishes from around the world",
    },
    {
      icon: Heart,
      value: "2M+",
      label: "Recipe Saves",
      description: "Favorite recipes bookmarked by users",
    },
    {
      icon: Award,
      value: "500+",
      label: "Expert Chefs",
      description: "Professional chefs sharing their expertise",
    },
  ];

  const testimonials = [
    {
      text: "eTaste has transformed how I cook. The recipes are clear, and the community is amazing!",
      author: "Sarah M.",
      location: "New York",
      avatar:
        "https://images.pexels.com/photos/3825540/pexels-photo-3825540.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      text: "As a professional chef, I love sharing my recipes here. The feedback is incredible.",
      author: "Chef Marco",
      location: "Italy",
      avatar:
        "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      text: "Finally found authentic family recipes from my grandmother's era. Pure nostalgia!",
      author: "Priya K.",
      location: "Mumbai",
      avatar:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-3 sm:mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Thousands of food lovers sharing, cooking, and connecting through
            recipes
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-medium text-gray-800 mb-1">
                {stat.label}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 max-w-32 sm:max-w-none mx-auto">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12">
          <h3 className="text-xl sm:text-2xl font-light text-gray-900 text-center mb-8 sm:mb-12">
            What Our Community Says
          </h3>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 sm:mb-6">
                  <p className="text-sm sm:text-base text-gray-600 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="text-sm sm:text-base font-medium text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4">
              Ready to Start Your Culinary Journey?
            </h3>
            <p className="text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of food enthusiasts, discover new recipes, and
              share your own culinary creations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button className="bg-white text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex-1">
                Sign Up Free
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors flex-1">
                Browse Recipes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
