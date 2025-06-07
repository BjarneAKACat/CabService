import React from "react";

const Cars = () => {
  const carData = [
    {
      type: "Sedan",
      models: "Etios",
      rate: "₹10/km",
      average: "300km average day",
      da: "₹300 DA",
      extra: "Extra toll + parking",
      image: "https://wallpapercave.com/wp/wp9332432.jpg",
      icon: "🚗",
      features: ["Economy", "Fuel Efficient", "City Travel"]
    },
    {
      type: "Sedan",
      models: "Swift Dzire",
      rate: "₹10/km",
      average: "300km average day",
      da: "₹300 DA",
      extra: "Extra toll + parking",
      image: "https://wallpapercave.com/wp/wp6205933.jpg",
      icon: "🚗",
      features: ["Comfort", "AC", "Spacious"]
    },
    {
      type: "SUV",
      models: "Ertiga",
      rate: "₹12/km",
      average: "300km average day",
      da: "₹300 DA",
      extra: "Extra toll + parking",
      image: "https://img.indianautosblog.com/2018/04/2018-Suzuki-Ertiga-2018-Maruti-Ertiga-front-three-quarters.jpg",
      icon: "🚙",
      features: ["7-Seater", "Family", "Luggage Space"]
    },
    {
      type: "MUV",
      models: "Innova",
      rate: "₹16/km",
      average: "300km average day",
      da: "₹300 DA",
      extra: "Extra toll + parking",
      image: "https://www.keralatourpackagesite.com/wp-content/uploads/2019/01/innova-SuperWhite2.png",
      icon: "🚐",
      features: ["8-Seater", "Premium", "Long Distance"]
    },
    {
      type: "MUV",
      models: "Crysta",
      rate: "₹18/km",
      average: "300km average day",
      da: "₹300 DA",
      extra: "Extra toll + parking",
      image: "https://www.livemint.com/lm-img/img/2023/08/02/1600x900/Toyota_Innova_Crysta_Petrol_1671612142263_1690967289659.webp",
      icon: "🚌",
      features: ["Luxury", "VIP", "Business Travel"]
    },
  ];

  const stats = [
    { value: "500+", label: "Happy Customers", icon: "😊" },
    { value: "24/7", label: "Available", icon: "⏰" },
    { value: "5⭐", label: "Rated Service", icon: "⭐" },
    { value: "100%", label: "Safe Rides", icon: "🛡️" }
  ];

  const services = [
    { name: "Airport Transfers", icon: "✈️", color: "from-yellow-400 to-amber-500" },
    { name: "City Tours", icon: "🏙️", color: "from-amber-400 to-orange-500" },
    { name: "Outstation Trips", icon: "🛣️", color: "from-orange-400 to-yellow-500" },
    { name: "Corporate Travel", icon: "💼", color: "from-yellow-500 to-amber-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      {/* Hero Section with Floating Elements */}
      <div className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300/20 dark:bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-amber-300/15 dark:bg-amber-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-300/10 dark:bg-orange-400/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-9 max-w-7xl mx-auto px-4 py-16">
          
          {/* Hero Content */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-6xl font-black bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text text-transparent mb-6 leading-tight">
              YOUR RIDE,<br />YOUR WAY
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience premium taxi services across Gujarat with our modern fleet, professional drivers, and unmatched reliability.
            </p>
          </div>

          {/* Services Carousel */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${service.color} p-10 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 text-center relative overflow-hidden h-44`}>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl"></div>
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-white font-bold text-xl">{service.name}</h3>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-white/10 rounded-full"></div>
                  <div className="absolute -top-5 -left-5 w-10 h-10 bg-white/10 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        
        {/* Car Fleet Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent mb-4">
            Our Premium Fleet
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Choose from our diverse collection of vehicles</p>
        </div>

        {/* Unique Hexagonal/Diamond Grid Layout */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-amber-500" 
                 style={{
                   backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.3) 0%, transparent 50%), 
                                    radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.3) 0%, transparent 50%)`
                 }}>
            </div>
          </div>

          {/* Cars Grid - Professional Layout */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-20 max-w-6xl mx-auto">
            {carData.map((car, index) => (
              <div key={index} 
                   className="transform transition-all duration-700 hover:scale-105 w-full max-w-sm"
                   style={{
                     animationDelay: `${index * 200}ms`
                   }}>
                
                {/* Hexagonal Card Design */}
                <div className="group relative">
                  {/* Hexagonal Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 transform rotate-6 rounded-3xl blur-xl group-hover:rotate-12 transition-transform duration-500"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-yellow-200/50 dark:border-yellow-400/30 overflow-hidden h-[520px]">
                    
                    {/* Top Accent Bar */}
                    <div className="h-2 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500"></div>
                    
                    {/* Card Content */}
                    <div className="p-6 h-full flex flex-col">
                      
                      {/* Header with Title */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-black bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent leading-tight mb-1">
                          {car.models}
                        </h3>
                        <p className="text-sm font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                          {car.type}
                        </p>
                      </div>
                      
                      {/* Car Image */}
                      <div className="relative mb-6 flex-1 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/50 to-amber-100/50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl"></div>
                        <img 
                          src={car.image} 
                          alt={car.models}
                          className="relative w-full h-32 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                        />
                      </div>
                      
                      {/* Pricing Info */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 p-4 rounded-xl text-center">
                          <p className="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase mb-1">Rate</p>
                          <p className="text-xl font-black text-amber-800 dark:text-amber-200">{car.rate}</p>
                        </div>
                        <div className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 p-4 rounded-xl text-center">
                          <p className="text-xs font-bold text-orange-700 dark:text-orange-300 uppercase mb-1">DA</p>
                          <p className="text-xl font-black text-orange-800 dark:text-orange-200">{car.da}</p>
                        </div>
                      </div>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {car.features.map((feature, idx) => (
                          <span key={idx} className="bg-gradient-to-r from-yellow-400 to-amber-400 text-white px-3 py-2 rounded-full text-sm font-semibold">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      {/* Additional Info */}
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-600/50 p-4 rounded-xl">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <span className="font-semibold">Average:</span> {car.average}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-semibold">Extra:</span> {car.extra}
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative Corner Elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full opacity-60"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-amber-500 rounded-full opacity-40"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section - Floating Cards */}
        <div className="mt-32">
          <h2 className="text-5xl font-black text-center bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent mb-16">
            Why Choose Our Service?
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-10 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 border border-yellow-200/30 dark:border-yellow-400/20 text-center relative overflow-hidden h-52">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
                  <div className="h-full flex flex-col justify-center">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <p className="text-4xl font-black bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent mb-3">
                      {stat.value}
                    </p>
                    <p className="text-xl font-bold text-gray-700 dark:text-gray-300">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;