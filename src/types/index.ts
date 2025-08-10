// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  preferences?: UserPreferences;
  pantry?: PantryItem[];
  savedRecipes?: string[];
  cookingHistory?: CookingHistoryItem[];
  culturalBadges?: string[];
  location?: Location;
  isAuthenticated: boolean;
}

export interface UserPreferences {
  dietaryRestrictions: string[];
  cuisinePreferences: string[];
  skillLevel: "beginner" | "intermediate" | "advanced";
  allergies: string[];
  spiceLevel: "mild" | "medium" | "hot" | "very-hot";
  meatPreference: "omnivore" | "vegetarian" | "vegan" | "pescatarian";
  cookingGoals: string[];
  notifications: NotificationSettings;
  language: string;
}

export interface NotificationSettings {
  newRecipes: boolean;
  nearbyIngredients: boolean;
  expiringIngredients: boolean;
  recipeSuggestions: boolean;
}

export interface PantryItem {
  id: string;
  ingredientId: string;
  name: string;
  quantity: number;
  unit: string;
  expiryDate?: Date;
  dateAdded: Date;
  category: string;
}

export interface CookingHistoryItem {
  id: string;
  recipeId: string;
  recipeName: string;
  dateCook: Date;
  rating?: number;
  notes?: string;
  photo?: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
  city?: string;
  country?: string;
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
  origin: string;
  culturalStory?: string;
  tags: string[];
  ingredients: Ingredient[];
  instructions: Instruction[];
  nutrition?: NutritionInfo;
  rating: number;
  reviewCount: number;
  reviews?: Review[];
  createdBy?: string;
  dateCreated: Date;
  similarRecipes?: string[];
  festival?: string;
  season?: string[];
}

export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  notes?: string;
  category: string;
  cultural?: boolean;
  alternatives?: Alternative[];
  shopLinks?: ShopLink[];
}

export interface Alternative {
  name: string;
  conversionRatio: number;
  notes?: string;
}

export interface ShopLink {
  storeName: string;
  storeId: string;
  available: boolean;
  price?: number;
  url?: string;
}

export interface Instruction {
  id: string;
  step: number;
  description: string;
  image?: string;
  timer?: number;
  tips?: string[];
  temperature?: string;
  equipment?: string[];
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
  sodium: number;
  cholesterol: number;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  dateCreated: Date;
  helpful: number;
  photos?: string[];
}

// Store and Shopping types
export interface CulturalStore {
  id: string;
  name: string;
  type: "afro" | "indian" | "mexican" | "asian" | "middle-eastern" | "general";
  address: string;
  location: Location;
  phone?: string;
  hours: StoreHours;
  specialties: string[];
  rating: number;
  reviewCount: number;
  products: StoreProduct[];
  website?: string;
  delivery: boolean;
}

export interface StoreHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface StoreProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  image?: string;
}

export interface CulturalIngredient {
  id: string;
  name: string;
  alternativeNames: string[];
  origin: string[];
  description: string;
  culturalSignificance?: string;
  whereToFind: string[];
  alternatives: Alternative[];
  recipes: string[];
  tips: string[];
  image: string;
  category: string;
  seasonal?: boolean;
  ritualUse?: string;
  healthBenefits?: string[];
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
  culture?: string[];
  dishType?: string[];
  festival?: string[];
  season?: string[];
  spiceLevel?: string[];
  tags?: string[];
}

export interface SearchResult {
  recipes: Recipe[];
  totalCount: number;
  page: number;
  hasMore: boolean;
}

// Authentication types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SocialLoginProvider {
  id: "google" | "apple" | "facebook";
  name: string;
  icon: string;
}

// Onboarding types
export interface OnboardingData {
  name: string;
  email: string;
  preferences: UserPreferences;
  cultures: string[];
  pantry?: PantryItem[];
}

export interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

// Culture and Cuisine types
export interface Culture {
  id: string;
  name: string;
  flag: string;
  region: string;
  description: string;
  popularDishes: string[];
  keyIngredients: string[];
  festivals: Festival[];
  image: string;
}

export interface Festival {
  id: string;
  name: string;
  culture: string;
  description: string;
  traditionalDishes: string[];
  date?: string;
  season: string;
}

// Cook Mode types
export interface CookSession {
  id: string;
  recipeId: string;
  startTime: Date;
  currentStep: number;
  timers: Timer[];
  notes: string[];
  photos: string[];
  voiceEnabled: boolean;
  musicEnabled: boolean;
  gestureEnabled: boolean;
}

export interface Timer {
  id: string;
  name: string;
  duration: number;
  remaining: number;
  isActive: boolean;
  step: number;
}
