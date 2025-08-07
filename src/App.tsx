import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import FeaturedRecipes from './components/home/FeaturedRecipes';
import CuisineExplorer from './components/home/CuisineExplorer';
import RecipeDetail from './components/recipes/RecipeDetail';
import SearchResults from './components/search/SearchResults';
import Profile from './components/profile/Profile';
import CookMode from './components/cooking/CookMode';
import Onboarding from './components/onboarding/Onboarding';
import Footer from './components/layout/Footer';

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [user, setUser] = useState(null);

  if (showOnboarding) {
    return <Onboarding onComplete={(userData) => {
      setUser(userData);
      setShowOnboarding(false);
    }} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header user={user} />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <FeaturedRecipes />
                <CuisineExplorer />
              </>
            } />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/cook/:id" element={<CookMode />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;