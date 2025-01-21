const Features = () => {
  const features = [
    {
      icon: () => (
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-blue-500/20 blur"></div>
          <div className="relative bg-white p-2 rounded-full">
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
        </div>
      ),
      title: "Trusted Drivers",
      description: "Thoroughly vetted, professional drivers with perfect safety records and years of experience.",
      stats: "4.9/5 average rating",
      badge: "Top Safety",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      icon: () => (
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-green-500/20 blur"></div>
          <div className="relative bg-white p-2 rounded-full">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
        </div>
      ),
      title: "Smart Booking",
      description: "Book instantly or schedule ahead with our intelligent booking system that learns your preferences.",
      stats: "Under 60 seconds",
      badge: "Lightning Fast",
      badgeColor: "bg-green-100 text-green-800"
    },
    {
      icon: () => (
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-yellow-500/20 blur"></div>
          <div className="relative bg-white p-2 rounded-full">
            <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
        </div>
      ),
      title: "Transparent Pricing",
      description: "Clear upfront pricing with no surge charges. Save with our loyalty program and package deals.",
      stats: "Up to 30% savings",
      badge: "Best Value",
      badgeColor: "bg-yellow-100 text-yellow-800"
    },
    {
      icon: () => (
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-red-500/20 blur"></div>
          <div className="relative bg-white p-2 rounded-full">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
        </div>
      ),
      title: "Live Tracking",
      description: "Track your ride in real-time with precise GPS location and estimated arrival updates.",
      stats: "99.9% accuracy",
      badge: "Premium GPS",
      badgeColor: "bg-red-100 text-red-800"
    },
    {
      icon: () => (
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-purple-500/20 blur"></div>
          <div className="relative bg-white p-2 rounded-full">
            <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9"></path>
            </svg>
          </div>
        </div>
      ),
      title: "24/7 Support",
      description: "Round-the-clock customer service with dedicated support teams and emergency assistance.",
      stats: "2min response time",
      badge: "Always Online",
      badgeColor: "bg-purple-100 text-purple-800"
    },
    {
      icon: () => (
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-pink-500/20 blur"></div>
          <div className="relative bg-white p-2 rounded-full">
            <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
        </div>
      ),
      title: "Loyalty Rewards",
      description: "Earn points on every ride and unlock exclusive perks, upgrades, and special offers.",
      stats: "5x points on rides",
      badge: "Members Only",
      badgeColor: "bg-pink-100 text-pink-800"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience the Difference
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of customers trust us for their transportation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {feature.icon()}
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${feature.badgeColor}`}>
                  {feature.badge}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
                <div className="pt-4 text-sm font-medium text-gray-500">
                  {feature.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;