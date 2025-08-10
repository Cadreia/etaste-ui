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
  AuthPage,
  ExplorePage,
  StoreFinder,
  IngredientDetail,
  MyPantry,
  SettingsPage,
} from "./pages";
import { User, OnboardingData, LoginCredentials, SignUpData } from "./types";

function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (credentials: LoginCredentials) => {
    // In a real app, this would make an API call
    console.log("Login:", credentials);
    // Mock successful login
    const mockUser: User = {
      id: "1",
      name: "John Doe",
      email: credentials.email,
      isAuthenticated: true,
      preferences: {
        dietaryRestrictions: [],
        cuisinePreferences: ["Italian", "Mexican"],
        skillLevel: "intermediate",
        allergies: [],
        spiceLevel: "medium",
        meatPreference: "omnivore",
        cookingGoals: ["Learn new techniques"],
        notifications: {
          newRecipes: true,
          nearbyIngredients: true,
          expiringIngredients: true,
          recipeSuggestions: true,
        },
        language: "en",
      },
    };
    setUser(mockUser);
  };

  const handleSignUp = (signUpData: SignUpData) => {
    // In a real app, this would make an API call
    console.log("Sign up:", signUpData);
    setShowOnboarding(true);
  };

  const handleSocialLogin = (provider: string) => {
    console.log("Social login:", provider);
    // Handle social login
  };

  const handleOnboardingComplete = (userData: OnboardingData) => {
    const newUser: User = {
      id: "1",
      name: userData.name,
      email: userData.email,
      preferences: userData.preferences,
      isAuthenticated: true,
    };
    setUser(newUser);
    setShowOnboarding(false);
  };

  if (showOnboarding) {
    return <OnboardingPage onComplete={handleOnboardingComplete} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header user={user} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/auth"
              element={
                <AuthPage
                  onLogin={handleLogin}
                  onSignUp={handleSignUp}
                  onSocialLogin={handleSocialLogin}
                />
              }
            />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/recipe/:id" element={<RecipeDetailPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="/cook/:id" element={<CookModePage />} />
            <Route path="/store-finder" element={<StoreFinder />} />
            <Route path="/ingredient/:id" element={<IngredientDetail />} />
            <Route path="/pantry" element={<MyPantry />} />
            <Route
              path="/settings"
              element={
                <SettingsPage user={user || undefined} onUpdateUser={setUser} />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
