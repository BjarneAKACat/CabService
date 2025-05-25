// import React, { useEffect, useState } from "react";
// import carPng from "../../assets/car.png";
// import yellowCar from "../../assets/banner-car.png";
// import AOS from "aos";

// const Hero = ({ theme }) => {
//   useEffect(() => {
//     AOS.refresh();
//   });
//   return (
//     <div className="dark:bg-black dark:text-white duration-300 ">
//       <div className="container min-h-[620px] flex">
//         <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
//           <div
//             data-aos="zoom-in"
//             data-aos-duration="1500"
//             data-aos-once="false"
//             className="order-1 sm:order-2"
//           >
//             <img
//               src={theme === "dark" ? carPng : yellowCar}
//               alt=""
//               className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
//             />
//           </div>
//           <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
//             <p data-aos="fade-up" className="text-primary text-2xl font-serif">
//               Effortless
//             </p>
//             <h1
//               data-aos="fade-up"
//               data-aos-delay="600"
//               className="text-5xl lg:text-7xl font-semibold font-serif"
//             >
//               Car Rental
//             </h1>
//             <p data-aos="fade-up" data-aos-delay="1000">
//               Drive Your Way — Easy, Affordable, Reliable.
//               Rent your dream car in just a few clicks. Flexible plans. Instant bookings. No hidden fees.
//             </p>
//             <button
//               data-aos="fade-up"
//               data-aos-delay="1500"
//               onClick={() => {
//                 AOS.refreshHard();
//               }}
//               className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
//             >
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React, { useEffect, useState } from "react";
import { ArrowRight, Star, Shield, Zap } from "lucide-react";
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";

const Hero = ({ theme }) => {
  useEffect(() => {
    // AOS.refresh(); - Simulated for demo
  }, []);

  // Using placeholder images to represent your actual car images
  // const carPng = "/api/placeholder/600/400";
  // const yellowCar = "/api/placeholder/600/400";

  return (
    <div className="dark:bg-black dark:text-white duration-300 relative overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-12 py-12">
          
          {/* Car Image Section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2 relative group"
          >
            {/* Floating elements around car */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/20 rounded-full blur-md animate-bounce" style={{animationDelay: '0s', animationDuration: '1s'}}></div>
            <div className="absolute -bottom-4 -right-12 w-12 h-12 bg-primary/15 rounded-full blur-md animate-bounce" style={{animationDelay: '1s', animationDuration: '2s'}}></div>
            <div className="absolute top-1/2 -left-6 w-8 h-8 bg-primary/25 rounded-full blur-sm animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}></div>
            
            {/* Car image container with enhanced styling */}
            <div className="relative bg-gradient-to-br from-white/5 to-transparent rounded-3xl p-6 backdrop-blur-sm border border-white/10 group-hover:border-primary/30 transition-all duration-700">
              <img
                src={theme === "dark" ? carPng : yellowCar}
                alt="Premium Car"
                // className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Premium badge */}
              <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                PREMIUM
              </div>
              
              {/* Rating badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/90 px-3 py-2 rounded-full shadow-lg flex items-center gap-1 backdrop-blur-sm">
                <Star className="w-3 h-3 text-primary fill-current" />
                <span className="text-xs font-semibold">4.9</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 order-2 sm:order-1 sm:pr-32">
            
            {/* Trust badge */}
            <div 
              data-aos="fade-up"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
            >
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold tracking-wide">TRUSTED & SECURE</span>
            </div>

            {/* Main heading */}
            <div className="space-y-3">
              <p 
                data-aos="fade-up" 
                className="text-primary text-2xl font-bold tracking-wider uppercase"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                Effortless
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="600"
                className="text-5xl lg:text-7xl font-black tracking-tight leading-none"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                Car Rental
              </h1>
            </div>
            
            {/* Description */}
            <div className="space-y-4">
              <p 
                data-aos="fade-up" 
                data-aos-delay="1000"
                className="text-lg lg:text-xl leading-relaxed opacity-90 font-medium"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                Drive Your Way — Easy, Affordable, Reliable.
              </p>
              <p 
                data-aos="fade-up" 
                data-aos-delay="1200"
                className="text-base opacity-75 leading-relaxed"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                Rent your dream car in just a few clicks. Flexible plans. Instant bookings. No hidden fees.
              </p>
            </div>

            {/* Features list */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="1300"
              className="flex flex-wrap gap-6 py-4"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium opacity-90">Instant Booking</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium opacity-90">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium opacity-90">5-Star Service</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div 
              data-aos="fade-up"
              data-aos-delay="1500"
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => {
                  // AOS.refreshHard(); - Simulated for demo
                }}
                className="group rounded-xl bg-primary hover:bg-primary/90 transition-all duration-500 py-4 px-8 text-black font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="rounded-xl border-2 border-primary/40 hover:border-primary hover:bg-primary/5 transition-all duration-500 py-4 px-8 font-semibold text-lg backdrop-blur-sm"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                View Fleet
              </button>
            </div>

            {/* Stats */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="1700"
              className="grid grid-cols-3 gap-6 pt-8 border-t border-primary/20"
            >
              <div className="text-center sm:text-left">
                <div className="text-2xl lg:text-3xl font-black text-primary" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                  15K+
                </div>
                <div className="text-xs uppercase tracking-wider opacity-70 font-medium" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                  Happy Clients
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl lg:text-3xl font-black text-primary" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                  500+
                </div>
                <div className="text-xs uppercase tracking-wider opacity-70 font-medium" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                  Premium Cars
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl lg:text-3xl font-black text-primary" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                  24/7
                </div>
                <div className="text-xs uppercase tracking-wider opacity-70 font-medium" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                  Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;