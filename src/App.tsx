import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import {
  HomePage,
  RecipeDetailPage,
  SearchResultsPage,
  ProfilePage,
  CookModePage,
  OnboardingPage,
} from "./pages";
import { User, OnboardingData } from "./types";

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  if (showOnboarding) {
    return (
      <OnboardingPage
        onComplete={(userData: OnboardingData) => {
          const newUser: User = {
            id: "1",
            name: userData.name,
            email: userData.email,
            preferences: userData.preferences,
          };
          setUser(newUser);
          setShowOnboarding(false);
        }}
      />
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header user={user} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetailPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="/cook/:id" element={<CookModePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
