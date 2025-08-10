import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ChefHat,
  ArrowRight,
} from "lucide-react";
import { LoginCredentials, SignUpData } from "../types";

// Google Icon Component
const GoogleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#4285f4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34a853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#fbbc05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#ea4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

interface AuthPageProps {
  onLogin: (credentials: LoginCredentials) => void;
  onSignUp: (data: SignUpData) => void;
  onSocialLogin: (provider: string) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({
  onLogin,
  onSignUp,
  onSocialLogin,
}) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  const [signUpData, setSignUpData] = useState<SignUpData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        if (signUpData.password !== signUpData.confirmPassword) {
          alert("Passwords don't match!");
          return;
        }
        onSignUp(signUpData);
      } else {
        onLogin(loginData);
      }
    } catch (error) {
      console.error("Auth error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Side - Branding & Info */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-32 left-16 w-72 h-72 border border-white/10 rounded-full"></div>
            <div className="absolute bottom-32 right-16 w-96 h-96 border border-orange-500/20 rounded-full"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl"></div>
          </div>
          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center px-12 text-white">
          <div className="max-w-md text-left">
            <div className="mb-16">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-semibold mb-6 leading-tight">
                Master Global Cuisines
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Discover authentic recipes from cultures around the world and
                connect with passionate home cooks.
              </p>
            </div>

            <div className="flex justify-center space-x-12 text-sm">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">50k+</div>
                <div className="text-gray-400">Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">120+</div>
                <div className="text-gray-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">4.9★</div>
                <div className="text-gray-400">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* Mobile Header */}
          <div className="text-center lg:hidden mb-8">
            <Link to="/" className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                eTaste
              </span>
            </Link>
          </div>

          {/* Desktop Header */}
          <div className="text-center hidden lg:block">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="text-gray-600 mb-8">
              {isSignUp
                ? "Join our community of passionate home cooks"
                : "Sign in to continue your culinary journey"}
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white py-8 px-6 shadow-2xl rounded-3xl sm:px-8 border-0">
            {/* Social Login */}
            <div className="space-y-3 mb-8">
              <h3 className="text-center text-sm font-medium text-gray-700 mb-4">
                Quick sign {isSignUp ? "up" : "in"} with
              </h3>
              <div className="flex justify-center">
                <button
                  onClick={() => onSocialLogin("google")}
                  className="flex items-center justify-center px-6 py-2.5 border border-gray-200 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-200 font-medium group min-w-[200px]"
                >
                  <GoogleIcon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Continue with Google</span>
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-6 bg-white text-gray-500 font-medium">
                  or with email
                </span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp && (
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Full Name
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      required
                      value={signUpData.name}
                      onChange={(e) =>
                        setSignUpData({ ...signUpData, name: e.target.value })
                      }
                      className="block w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 bg-gray-50/50 focus:bg-white text-gray-900 placeholder-gray-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    required
                    value={isSignUp ? signUpData.email : loginData.email}
                    onChange={(e) =>
                      isSignUp
                        ? setSignUpData({
                            ...signUpData,
                            email: e.target.value,
                          })
                        : setLoginData({ ...loginData, email: e.target.value })
                    }
                    className="block w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 bg-gray-50/50 focus:bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={isSignUp ? signUpData.password : loginData.password}
                    onChange={(e) =>
                      isSignUp
                        ? setSignUpData({
                            ...signUpData,
                            password: e.target.value,
                          })
                        : setLoginData({
                            ...loginData,
                            password: e.target.value,
                          })
                    }
                    className="block w-full pl-12 pr-12 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 bg-gray-50/50 focus:bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center hover:bg-gray-100 rounded-r-xl transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {isSignUp && (
                <div className="space-y-2">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                    </div>
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      value={signUpData.confirmPassword}
                      onChange={(e) =>
                        setSignUpData({
                          ...signUpData,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="block w-full pl-12 pr-12 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 bg-gray-50/50 focus:bg-white text-gray-900 placeholder-gray-500"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute inset-y-0 right-0 pr-4 flex items-center hover:bg-gray-100 rounded-r-xl transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {!isSignUp && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded transition-colors"
                    />
                    <label
                      htmlFor="remember"
                      className="ml-3 block text-sm text-gray-700 font-medium"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-orange-600 hover:text-orange-500 font-semibold transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full group relative flex items-center justify-center px-6 py-4 border border-transparent rounded-xl shadow-lg text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    Processing...
                  </div>
                ) : (
                  <>
                    {isSignUp ? "Create Account" : "Sign In"}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Switch Form */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}{" "}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="font-semibold text-orange-600 hover:text-orange-500 transition-colors hover:underline"
                >
                  {isSignUp ? "Sign in" : "Sign up"}
                </button>
              </p>
            </div>

            {/* Terms */}
            {isSignUp && (
              <p className="mt-6 text-xs text-gray-500 text-center leading-relaxed">
                By creating an account, you agree to our{" "}
                <Link
                  to="/terms"
                  className="text-orange-600 hover:text-orange-500 font-medium underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="text-orange-600 hover:text-orange-500 font-medium underline"
                >
                  Privacy Policy
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
