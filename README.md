# eTaste Recipe App 🍽️

A modern, responsive recipe discovery and cooking application built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🏠 **Home Dashboard**: Discover featured recipes and explore different cuisines
- 🔍 **Smart Search**: Find recipes based on ingredients, cuisine, or dietary preferences
- 📱 **Recipe Details**: Comprehensive recipe information with ingredients, instructions, and nutritional data
- 🍳 **Cook Mode**: Step-by-step guided cooking experience
- 👤 **User Profiles**: Personalized experience with saved recipes and preferences
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean, intuitive interface built with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd eTaste-Bolt
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Reusable UI components
│   ├── cooking/          # Cook mode components
│   ├── home/            # Home page components
│   ├── layout/          # Layout components (Header, Footer)
│   ├── onboarding/      # User onboarding flow
│   ├── profile/         # User profile components
│   ├── recipes/         # Recipe-related components
│   └── search/          # Search functionality
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
├── index.css           # Global styles
└── vite-env.d.ts       # Vite type definitions
```

## 🎯 Key Components

- **Onboarding**: Initial user setup and preference collection
- **Hero Section**: Eye-catching landing area with call-to-action
- **Featured Recipes**: Curated recipe recommendations
- **Cuisine Explorer**: Browse recipes by cuisine type
- **Recipe Detail**: Comprehensive recipe information and instructions
- **Cook Mode**: Interactive cooking experience with step-by-step guidance
- **Search Results**: Advanced recipe search and filtering

## 🔧 Configuration

The project uses several configuration files:

- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS customization
- `postcss.config.js` - PostCSS plugins setup
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules and settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icon library
- Vite for the lightning-fast build tool
