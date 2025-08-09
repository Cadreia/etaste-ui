import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, ChefHat } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <ChefHat className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                eTaste
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Discover authentic recipes from around the world, carefully
              curated for modern kitchens and passionate home cooks.
            </p>

            {/* Compact Newsletter */}
            <div className="mb-6">
              <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" />
                Stay Updated
              </h4>
              <div className="flex max-w-sm">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-500 text-sm"
                />
                <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition-colors font-medium text-sm">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/recipes"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm hover:translate-x-1 inline-block duration-200"
                >
                  All Recipes
                </Link>
              </li>
              <li>
                <Link
                  to="/cuisines"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm hover:translate-x-1 inline-block duration-200"
                >
                  Cuisines
                </Link>
              </li>
              <li>
                <Link
                  to="/chefs"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm hover:translate-x-1 inline-block duration-200"
                >
                  Featured Chefs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm hover:translate-x-1 inline-block duration-200"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm hover:translate-x-1 inline-block duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm hover:translate-x-1 inline-block duration-200"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm hover:translate-x-1 inline-block duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm hover:translate-x-1 inline-block duration-200"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>

            {/* Social Media with Icons */}
            <div>
              <h4 className="text-white font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-200 group"
                >
                  <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-200 group"
                >
                  <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-200 group"
                >
                  <Twitter className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2025 eTaste. All rights reserved. Made with ❤️ for food lovers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
