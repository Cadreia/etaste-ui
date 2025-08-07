import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock, CheckCircle, Circle, ArrowLeft, Pause, Play } from 'lucide-react';

const CookMode: React.FC = () => {
  const { id } = useParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // Mock recipe data
  const recipe = {
    title: "Korean Bibimbap Bowl",
    steps: [
      {
        title: "Prepare the rice",
        description: "Cook 2 cups of short-grain rice according to package instructions. Keep warm in the rice cooker or cover with a lid.",
        time: 20,
        image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: "For best results, wash the rice 3-4 times until water runs clear before cooking."
      },
      {
        title: "Prepare vegetables",
        description: "Blanch spinach in boiling water for 30 seconds, then shock in ice water. Julienne carrots and zucchini into thin strips.",
        time: 15,
        image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: "Keep vegetables crisp by not overcooking. Each should retain its vibrant color."
      },
      {
        title: "Season vegetables",
        description: "Season each vegetable separately with sesame oil, soy sauce, minced garlic, and a pinch of salt. Let marinate for 10 minutes.",
        time: 10,
        image: "https://images.pexels.com/photos/1435163/pexels-photo-1435163.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: "Don't mix vegetables together yet - each should maintain its distinct flavor."
      },
      {
        title: "Cook protein",
        description: "If using beef, slice thin and marinate in soy sauce, sesame oil, and ginger. Cook in a hot pan for 2-3 minutes.",
        time: 10,
        image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: "For vegetarian option, use marinated tofu or just skip this step."
      },
      {
        title: "Fry eggs",
        description: "Heat a non-stick pan and fry eggs sunny-side up. The yolk should be slightly runny for authentic bibimbap.",
        time: 5,
        image: "https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: "Use medium heat to avoid burning the bottom while keeping yolk runny."
      },
      {
        title: "Assemble and serve",
        description: "Place warm rice in bowls, arrange vegetables and protein in sections on top, add fried egg in center, and serve with gochujang.",
        time: 5,
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: "Arrange ingredients by color for the most beautiful presentation!"
      }
    ]
  };

  const currentStepData = recipe.steps[currentStep];
  const totalSteps = recipe.steps.length;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const startTimer = (minutes: number) => {
    setTimer(minutes * 60);
    setIsTimerRunning(true);
  };

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const markStepComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to={`/recipe/${id}`}
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Exit Cook Mode
            </Link>
            
            <div className="text-center">
              <h1 className="text-lg font-semibold">{recipe.title}</h1>
              <p className="text-sm text-gray-400">
                Step {currentStep + 1} of {totalSteps}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              {timer > 0 && (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={toggleTimer}
                    className="p-2 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
                  >
                    {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <span className="text-xl font-mono">{formatTime(timer)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Progress</span>
            <span className="text-sm text-gray-400">
              {Math.round(((currentStep + 1) / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Current Step */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-xl font-bold">
                  {currentStep + 1}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{currentStepData.title}</h2>
                  <p className="text-gray-400">Estimated time: {currentStepData.time} minutes</p>
                </div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {currentStepData.description}
              </p>

              <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-blue-300 mb-2">💡 Chef's Tip</h4>
                <p className="text-blue-200 text-sm">{currentStepData.tips}</p>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => startTimer(currentStepData.time)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Start Timer ({currentStepData.time} min)
                </button>
                
                <button
                  onClick={markStepComplete}
                  className={`flex items-center px-6 py-2 rounded-lg font-semibold transition-colors ${
                    completedSteps.includes(currentStep)
                      ? 'bg-green-600 text-white'
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                  }`}
                >
                  {completedSteps.includes(currentStep) ? (
                    <CheckCircle className="w-4 h-4 mr-2" />
                  ) : (
                    <Circle className="w-4 h-4 mr-2" />
                  )}
                  {completedSteps.includes(currentStep) ? 'Completed' : 'Mark Complete'}
                </button>
              </div>
            </div>

            <div>
              <img
                src={currentStepData.image}
                alt={currentStepData.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
              currentStep === 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous Step
          </button>

          <div className="flex space-x-2">
            {recipe.steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentStep
                    ? 'bg-orange-500'
                    : completedSteps.includes(index)
                    ? 'bg-green-500'
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentStep(Math.min(totalSteps - 1, currentStep + 1))}
            disabled={currentStep === totalSteps - 1}
            className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
              currentStep === totalSteps - 1
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-orange-500 text-white hover:bg-orange-600'
            }`}
          >
            Next Step
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* Completion Message */}
        {completedSteps.length === totalSteps && (
          <div className="mt-8 text-center bg-green-900/30 border border-green-500/30 rounded-2xl p-8">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-green-300 mb-2">Congratulations!</h2>
            <p className="text-green-200 mb-6">You've successfully completed {recipe.title}!</p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Share Your Creation
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookMode;