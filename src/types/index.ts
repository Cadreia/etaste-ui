// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  preferences?: UserPreferences;
}

export interface UserPreferences {
  dietaryRestrictions: string[];
  cuisinePreferences: string[];
  skillLevel: "beginner" | "intermediate" | "advanced";
  allergies: string[];
}

// Recipe types
export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: number;
  prepTime: number;
  servings: number;
  difficulty: "easy" | "medium" | "hard";
  cuisine: string;
  tags: string[];
  ingredients: Ingredient[];
  instructions: Instruction[];
  nutrition?: NutritionInfo;
  rating: number;
  reviewCount: number;
}

export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  notes?: string;
}

export interface Instruction {
  id: string;
  step: number;
  description: string;
  image?: string;
  timer?: number;
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
}

// Search types
export interface SearchFilters {
  cuisine?: string[];
  difficulty?: string[];
  cookTime?: {
    min: number;
    max: number;
  };
  ingredients?: string[];
  dietaryRestrictions?: string[];
}

export interface SearchResult {
  recipes: Recipe[];
  totalCount: number;
  page: number;
  hasMore: boolean;
}

// Onboarding types
export interface OnboardingData {
  name: string;
  email: string;
  preferences: UserPreferences;
}
