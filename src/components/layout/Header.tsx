import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, User, Heart, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  user: any;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">e</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Taste</span>
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search recipes, cuisines, ingredients..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </form>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">
              Discover
            </Link>
            <Link to="/cuisines" className="text-gray-700 hover:text-orange-500 transition-colors">
              Cuisines
            </Link>
            <Link to="/favorites" className="text-gray-700 hover:text-orange-500 transition-colors flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              Favorites
            </Link>
            <Link to="/pantry" className="text-gray-700 hover:text-orange-500 transition-colors flex items-center">
              <ShoppingCart className="w-4 h-4 mr-1" />
              Pantry
            </Link>
            <Link to="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors">
              <User className="w-4 h-4" />
              <span>Profile</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search recipes..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </form>
            <nav className="space-y-2">
              <Link to="/" className="block py-2 text-gray-700 hover:text-orange-500">
                Discover
              </Link>
              <Link to="/cuisines" className="block py-2 text-gray-700 hover:text-orange-500">
                Cuisines
              </Link>
              <Link to="/favorites" className="block py-2 text-gray-700 hover:text-orange-500">
                Favorites
              </Link>
              <Link to="/pantry" className="block py-2 text-gray-700 hover:text-orange-500">
                Pantry
              </Link>
              <Link to="/profile" className="block py-2 text-gray-700 hover:text-orange-500">
                Profile
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;