import React, { useState, useEffect, useRef } from "react";

const GujaratCabServices = () => {
  const gujaratPlaces = [
    {
      id: 1,
      name: "Jamnagar",
      subtitle: "The Jewel of Kathiawar",
      image: "https://www.trawell.in/admin/images/upload/133167934Jamnagar_Lakhota_Lake_and_Museum_Main.jpg",
      distance: "320 km from Ahmedabad",
      duration: "5-6 hours",
      fare: "₹4,800",
      highlights: [
        "Lakhota Palace floating on Ranmal Lake",
        "World's largest oil refining complex",
        "Khijadia Bird Sanctuary with 200+ species",
        "Bala Hanuman Temple with continuous Ram Dhun"
      ],
    },
    {
      id: 2,
      name: "Rajkot",
      subtitle: "Gandhi's Birthland",
      image: "https://www.traveldealsfinder.com/wp-content/uploads/Tower-of-Rajkot.jpg",
      distance: "220 km from Ahmedabad",
      duration: "3-4 hours",
      fare: "₹3,200",
      highlights: [
        "Watson Museum with colonial artifacts",
        "Kaba Gandhi No Delo - Gandhi's childhood home",
        "Race Course Ground - Asia's largest circular ground",
        "Jubilee Garden with beautiful landscapes"
      ],
    },
    {
      id: 3,
      name: "Junagadh",
      subtitle: "City of Ancient Forts",
      image: "https://www.mysoultravels.com/wp-content/uploads/2020/05/junagardh-trip-9-1536x1515.jpg",
      distance: "290 km from Ahmedabad",
      duration: "4-5 hours",
      fare: "₹4,200",
      highlights: [
        "Uparkot Fort with 2300 years of history",
        "Girnar Hill with sacred Jain and Hindu temples",
        "Mahabat Maqbara - stunning Indo-Islamic architecture",
        "Gir National Park - last refuge of Asiatic lions"
      ],
    },
    {
      id: 4,
      name: "Kutch",
      subtitle: "White Desert Paradise",
      image: "https://thetravelshots.com/wp-content/uploads/2021/04/Rann-of-kutch.jpg",
      distance: "350 km from Ahmedabad",
      duration: "6-7 hours",
      fare: "₹5,500",
      highlights: [
        "Great Rann of Kutch - world's largest salt desert",
        "Rann Utsav - India's biggest cultural festival",
        "Traditional handicrafts and mirror work",
        "Wild Ass Sanctuary with unique wildlife"
      ],
    },
    {
      id: 5,
      name: "Dwarka",
      subtitle: "Krishna's Sacred City",
      image: "https://images.odishatv.in/uploadimage/library/16_9/16_9_5/IMAGE_1661694788.webp",
      distance: "450 km from Ahmedabad",
      duration: "7-8 hours",
      fare: "₹6,800",
      highlights: [
        "Dwarkadhish Temple - one of Char Dham",
        "Bet Dwarka island with ancient temples",
        "Beautiful coastal landscapes and beaches",
        "Rich mythology and spiritual significance"
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentPlace = gujaratPlaces[currentIndex];

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? gujaratPlaces.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === gujaratPlaces.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  // Get visible items for carousel display
  const getVisibleItems = () => {
    const items = [];
    const totalItems = gujaratPlaces.length;
    
    for (let i = currentIndex - 1; i <= currentIndex + 1; i++) {
      let index = i;
      if (index < 0) index = totalItems + index;
      if (index >= totalItems) index = index - totalItems;
      
      items.push({
        ...gujaratPlaces[index],
        originalIndex: index,
        position: i - currentIndex,
        isCenter: index === currentIndex
      });
    }
    
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-yellow-900/20 text-gray-900 dark:text-white">
      
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Header Content */}
        <div className="text-center mb-12 z-9">

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 bg-clip-text text-transparent">
              Explore Gujarat
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Premium cab services to Gujarat's most beautiful destinations. Comfortable, safe, and reliable.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="w-full max-w-5xl mx-auto relative">
          <div className="relative h-96 flex items-center justify-center">
            {visibleItems.map((item) => {
              const isCurrent = item.isCenter;
              const isLeft = item.position === -1;
              const isRight = item.position === 1;
              
              let transform = 'translateX(0px) scale(1)';
              let opacity = 1;
              let zIndex = 9;
              
              if (isLeft) {
                transform = 'translateX(-280px) scale(0.8)';
                opacity = 0.6;
                zIndex = 5;
              } else if (isRight) {
                transform = 'translateX(280px) scale(0.8)';
                opacity = 0.6;
                zIndex = 5;
              } else if (isCurrent) {
                zIndex = 9;
              }

              return (
                <div
                  key={`${item.originalIndex}-${currentIndex}`}
                  className="absolute transition-all duration-500 ease-out cursor-pointer"
                  style={{ 
                    transform,
                    opacity,
                    zIndex
                  }}
                  onClick={() => !isCurrent && goToSlide(item.originalIndex)}
                >
                  {/* Card */}
                  <div className="w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                    {/* Image */}
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-sm font-medium rounded-full">
                          Popular
                        </span>
                        <span className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                          {item.fare}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{item.subtitle}</p>
                      
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <span>📍</span>
                          <span>{item.distance}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>⏱️</span>
                          <span>{item.duration}</span>
                        </div>
                      </div>
                      
                      {isCurrent && (
                        <button className="w-full py-3 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                          Book This Trip
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-4 mt-8 translate-y-6">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-yellow-200 dark:border-yellow-800/30 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex items-center gap-2">
            {gujaratPlaces.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 h-3 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full"
                    : "w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-yellow-400 dark:hover:bg-yellow-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-yellow-200 dark:border-yellow-800/30 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Places to Travel at {gujaratPlaces[currentIndex].name}
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experience comfort, safety, and reliability with every journey
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPlace.highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-yellow-300 dark:hover:border-yellow-600 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>    
        </div>
      </div>
    </div>
  );
};

export default GujaratCabServices;