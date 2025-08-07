import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">e</span>
              </div>
              <span className="text-xl font-medium">eTaste</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Discover authentic recipes from around the world, carefully
              curated for modern kitchens.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-white mb-3">
                Stay Updated
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="bg-orange-500 text-white px-6 py-2 rounded-r-lg hover:bg-orange-600 transition-colors duration-200 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-medium text-white mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/recipes"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  to="/cuisines"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Cuisines
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-medium text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-white mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 eTaste. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
