import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Globe, Heart, ChefHat, MapPin } from 'lucide-react';

interface OnboardingProps {
  onComplete: (userData: any) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({
    name: '',
    location: '',
    cuisinePreferences: [] as string[],
    dietaryRestrictions: [] as string[],
    cookingLevel: '',
    spiceTolerance: 'medium'
  });

  const steps = [
    {
      title: "Welcome to eTaste!",
      subtitle: "Let's personalize your culinary journey",
      content: (
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <ChefHat className="w-12 h-12 text-white" />
          </div>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Discover authentic recipes from around the world, adapted to your taste and local ingredients.
          </p>
        </div>
      )
    },
    {
      title: "Tell us about yourself",
      subtitle: "Help us customize your experience",
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">What's your name?</label>
            <input
              type="text"
              value={userData.name}
              onChange={(e) => setUserData({...userData, name: e.target.value})}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Where are you located?</label>
            <input
              type="text"
              value={userData.location}
              onChange={(e) => setUserData({...userData, location: e.target.value})}
              placeholder="City, Country"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>
      )
    },
    {
      title: "What cuisines interest you?",
      subtitle: "Select all that appeal to you",
      content: (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: 'Italian', emoji: '🍝' },
            { name: 'Japanese', emoji: '🍣' },
            { name: 'Korean', emoji: '🍲' },
            { name: 'Mexican', emoji: '🌮' },
            { name: 'Thai', emoji: '🍛' },
            { name: 'Indian', emoji: '🍛' },
            { name: 'French', emoji: '🥖' },
            { name: 'Chinese', emoji: '🥟' },
            { name: 'Mediterranean', emoji: '🫒' }
          ].map((cuisine) => (
            <button
              key={cuisine.name}
              onClick={() => {
                const newPrefs = userData.cuisinePreferences.includes(cuisine.name)
                  ? userData.cuisinePreferences.filter(c => c !== cuisine.name)
                  : [...userData.cuisinePreferences, cuisine.name];
                setUserData({...userData, cuisinePreferences: newPrefs});
              }}
              className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                userData.cuisinePreferences.includes(cuisine.name)
                  ? 'border-orange-500 bg-orange-50 text-orange-700'
                  : 'border-gray-200 hover:border-orange-300 text-gray-700'
              }`}
            >
              <div className="text-3xl mb-2">{cuisine.emoji}</div>
              <div className="font-medium">{cuisine.name}</div>
            </button>
          ))}
        </div>
      )
    },
    {
      title: "Any dietary preferences?",
      subtitle: "We'll suggest suitable alternatives",
      content: (
        <div className="space-y-4">
          {[
            'Vegetarian',
            'Vegan',
            'Gluten-Free',
            'Dairy-Free',
            'Nut-Free',
            'Keto',
            'Low-Carb',
            'Halal'
          ].map((diet) => (
            <label key={diet} className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
              <input
                type="checkbox"
                checked={userData.dietaryRestrictions.includes(diet)}
                onChange={(e) => {
                  const newRestrictions = e.target.checked
                    ? [...userData.dietaryRestrictions, diet]
                    : userData.dietaryRestrictions.filter(d => d !== diet);
                  setUserData({...userData, dietaryRestrictions: newRestrictions});
                }}
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-500 mr-3"
              />
              <span className="font-medium text-gray-700">{diet}</span>
            </label>
          ))}
        </div>
      )
    },
    {
      title: "What's your cooking level?",
      subtitle: "We'll recommend recipes that match your skills",
      content: (
        <div className="space-y-4">
          {[
            { level: 'beginner', title: 'Beginner', description: 'New to cooking, prefer simple recipes' },
            { level: 'intermediate', title: 'Intermediate', description: 'Comfortable with basic techniques' },
            { level: 'advanced', title: 'Advanced', description: 'Experienced, enjoy complex recipes' },
            { level: 'expert', title: 'Expert', description: 'Professional or very experienced home cook' }
          ].map((option) => (
            <button
              key={option.level}
              onClick={() => setUserData({...userData, cookingLevel: option.level})}
              className={`w-full p-4 text-left border-2 rounded-xl transition-all duration-200 ${
                userData.cookingLevel === option.level
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200 hover:border-orange-300'
              }`}
            >
              <div className="font-semibold text-gray-900">{option.title}</div>
              <div className="text-sm text-gray-600">{option.description}</div>
            </button>
          ))}
        </div>
      )
    }
  ];

  const currentStepInfo = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const canProceed = currentStep === 0 || 
    (currentStep === 1 && userData.name && userData.location) ||
    (currentStep === 2 && userData.cuisinePreferences.length > 0) ||
    (currentStep === 3) ||
    (currentStep === 4 && userData.cookingLevel);

  const nextStep = () => {
    if (isLastStep) {
      onComplete(userData);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  index <= currentStep
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-400 border-2 border-gray-200'
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {currentStepInfo.title}
            </h1>
            <p className="text-lg text-gray-600">
              {currentStepInfo.subtitle}
            </p>
          </div>

          <div className="mb-8">
            {currentStepInfo.content}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-colors ${
              currentStep === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg'
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back
          </button>

          <button
            onClick={nextStep}
            disabled={!canProceed}
            className={`flex items-center px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
              canProceed
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg transform hover:-translate-y-1'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isLastStep ? 'Start Cooking!' : 'Continue'}
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;