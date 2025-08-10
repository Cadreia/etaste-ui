import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { User } from "../../types";

interface HeaderProps {
  user?: User | null;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-base sm:text-lg">
                e
              </span>
            </div>
            <span className="text-lg sm:text-xl font-medium text-gray-900">
              eTaste
            </span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/explore"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Explore
            </Link>
            <Link
              to="/recipes"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Recipes
            </Link>
            <Link
              to="/store-finder"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Stores
            </Link>
            <Link
              to="/pantry"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              My Pantry
            </Link>
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-200 rounded-md px-2 py-1.5 text-xs xl:text-sm text-gray-700 hover:border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200">
                <option value="en">🇺🇸 EN</option>
                <option value="es">🇪🇸 ES</option>
                <option value="fr">🇫🇷 FR</option>
                <option value="it">🇮🇹 IT</option>
                <option value="ja">🇯🇵 JP</option>
              </select>
            </div>
            {user ? (
              <div className="flex items-center gap-2">
                <Link
                  to="/profile"
                  className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
                >
                  Settings
                </Link>
                <button className="bg-gray-200 text-gray-700 px-3 py-1.5 xl:px-4 xl:py-2 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors duration-200">
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-orange-500 text-white px-3 py-1.5 xl:px-4 xl:py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors duration-200"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-3 sm:py-4">
            <nav className="space-y-2 sm:space-y-3">
              <Link
                to="/"
                className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
              >
                Home
              </Link>
              <Link
                to="/explore"
                className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
              >
                Explore
              </Link>
              <Link
                to="/recipes"
                className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
              >
                Recipes
              </Link>
              <Link
                to="/store-finder"
                className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
              >
                Stores
              </Link>
              <Link
                to="/pantry"
                className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
              >
                My Pantry
              </Link>
              <div className="pt-3 border-t border-gray-100">
                {user ? (
                  <div className="space-y-2">
                    <Link
                      to="/profile"
                      className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
                    >
                      Settings
                    </Link>
                    <button className="block w-full text-center bg-gray-200 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200">
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/auth"
                    className="block w-full text-center bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
