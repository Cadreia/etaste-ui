import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">e</span>
              </div>
              <span className="text-xl font-bold">Taste</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Discover authentic recipes from around the world, adapted to your local ingredients and taste preferences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/recipes" className="text-gray-400 hover:text-orange-500 transition-colors">All Recipes</Link></li>
              <li><Link to="/cuisines" className="text-gray-400 hover:text-orange-500 transition-colors">World Cuisines</Link></li>
              <li><Link to="/ingredients" className="text-gray-400 hover:text-orange-500 transition-colors">Ingredient Guide</Link></li>
              <li><Link to="/collections" className="text-gray-400 hover:text-orange-500 transition-colors">Collections</Link></li>
              <li><Link to="/fusion" className="text-gray-400 hover:text-orange-500 transition-colors">Fusion Creator</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Features</h3>
            <ul className="space-y-3">
              <li><Link to="/pantry" className="text-gray-400 hover:text-orange-500 transition-colors">Smart Pantry</Link></li>
              <li><Link to="/meal-plan" className="text-gray-400 hover:text-orange-500 transition-colors">Meal Planning</Link></li>
              <li><Link to="/cooking-mode" className="text-gray-400 hover:text-orange-500 transition-colors">Cook Mode</Link></li>
              <li><Link to="/shopping" className="text-gray-400 hover:text-orange-500 transition-colors">Shopping Lists</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-orange-500 transition-colors">Community</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-gray-400">hello@etaste.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-gray-400">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 eTaste. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/support" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;