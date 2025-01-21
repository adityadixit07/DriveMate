import React from 'react';

interface StepDetail {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'blue' | 'green' | 'yellow' | 'red';
  details: string[];
  time: string;
}

interface ColorClasses {
  [key: string]: string;
}

const HowItWorks: React.FC = () => {
  const steps: StepDetail[] = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
        </svg>
      ),
      title: "Create Account",
      description: "Sign up in less than 2 minutes with our streamlined process",
      color: "blue",
      details: ["Secure verification", "Multiple login options", "Profile customization"],
      time: "2 min process"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      ),
      title: "Find Your Ride",
      description: "Browse available drivers and select your perfect match",
      color: "green",
      details: ["Filter by rating", "Compare prices", "View driver profiles"],
      time: "1 min search"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
        </svg>
      ),
      title: "Track Journey",
      description: "Follow your ride in real-time with live GPS tracking",
      color: "yellow",
      details: ["Live GPS tracking", "ETA updates", "Share your trip"],
      time: "Real-time updates"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
        </svg>
      ),
      title: "Complete & Review",
      description: "Rate your experience and complete secure payment",
      color: "red",
      details: ["Cashless payment", "Driver rating", "Trip summary"],
      time: "30 sec checkout"
    }
  ];

  const getColorClasses = (color: StepDetail['color']): string => {
    const colors: ColorClasses = {
      blue: "bg-blue-500 text-white hover:bg-blue-600",
      green: "bg-green-500 text-white hover:bg-green-600",
      yellow: "bg-yellow-500 text-white hover:bg-yellow-600",
      red: "bg-red-500 text-white hover:bg-red-600"
    };
    return colors[color];
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-24 px-4 md:px-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute right-0 top-3/4 w-32 h-32 bg-green-500/10 rounded-full blur-xl"></div>
        <div className="absolute left-1/2 top-1/2 w-40 h-40 bg-yellow-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple four-step process
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-200">
                  <div className={`h-full ${getColorClasses(step.color)} transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100`}></div>
                </div>
              )}
              
              {/* Step Content */}
              <div className="flex flex-col items-center">
                {/* Icon Container with Number */}
                <div className="relative">
                  {/* Step Number */}
                  <div 
                    className={`absolute -left-4 -top-4 w-8 h-8 rounded-full ${getColorClasses(step.color)} 
                    flex items-center justify-center text-sm font-bold shadow-lg
                    transform -translate-y-1/2 -translate-x-1/2 border-2 border-white z-10`}
                  >
                    {index + 1}
                  </div>
                  {/* Icon */}
                  <div className={`relative ${getColorClasses(step.color)} p-6 rounded-2xl shadow-lg mb-6 
                    transition-transform duration-300 transform group-hover:-translate-y-2`}>
                    <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {step.description}
                </p>

                {/* Details */}
                <div className="space-y-2 text-sm text-gray-500">
                  {step.details.map((detail, i) => (
                    <div key={i} className="flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {detail}
                    </div>
                  ))}
                </div>

                {/* Time Indicator */}
                <div className="mt-4 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">
                  {step.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;