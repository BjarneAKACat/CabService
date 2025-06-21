import React from "react";
import { Quote, Star } from "lucide-react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { LayoutDashboard, User } from 'lucide-react';

const testimonialData = [
  {
    name: "Dilshad",
    image: "",
    description: "Excellent service! The car was in perfect condition, the staff was friendly, and the booking process was super easy. Highly recommend this company for a smooth and hassle-free rental experience",
    aosDelay: "0",
  },
  {
    name: "Satya",
    image: "",
    description: "Best round trip in dwarka somnath sasan gir.  5-day round-trip best drive, Vijay Gadhvi. Thank you very much Dhyna Cab Line.",
    aosDelay: "150",
  },
  {
    name: "Sabir",
    image: "",
    description: "Best one-way service: Dhyana cab. Thank you very much. My Daughter was carefully picked up and dropped from Jamnagar to Ahmedabad airport. Thanks once again.",
    aosDelay: "300",
  },
];


const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24 relative overflow-hidden">
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="container">
          {/* Header Section */}
          <div className="space-y-6 pb-16 text-center">
            {/* Trust badge */}
            <div 
              data-aos="fade-up"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mx-auto"
            >
              <Star className="w-4 h-4 text-primary fill-current" />
              <span className="text-primary text-sm font-bold tracking-wide uppercase">Customer Reviews</span>
            </div>

            <div className="space-y-4">
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-center tracking-tight"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                What Our Clients Say About Us
              </p>
              
              <p 
                data-aos="fade-up" 
                data-aos-delay="400"
                className="text-center sm:px-44 text-lg opacity-90 leading-relaxed font-medium max-w-4xl mx-auto"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                We pride ourselves on delivering exceptional service, and our customers agree!  
                Here's what real users are saying about their experiences with our hassle-free car rental service.
              </p>
            </div>            
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonialData.map((testimonial, index) => (
              <div
                key={testimonial.name}
                data-aos="fade-up"
                data-aos-delay={testimonial.aosDelay}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 dark:from-white/5 dark:to-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-100 hover:scale-105 hover:border-primary/30 text-black dark:text-white h-full">
                  
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="space-y-6 text-center">

                    {/* Stars */}
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-primary fill-current" />
                      ))}
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                      <p className="text-base leading-relaxed font-medium opacity-90" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                        "{testimonial.description}"
                      </p>
                      
                      {/* Name and title */}
                      <div className="space-y-1">
                        <p className="font-bold text-lg" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                          {testimonial.name}
                        </p>
                        <p className="text-sm opacity-70 font-medium">
                          Actual Google Review
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;