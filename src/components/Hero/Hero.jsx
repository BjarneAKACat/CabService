import React, { useEffect } from "react";
import { Star, Shield, Zap } from "lucide-react";
import { Helmet } from 'react-helmet';
import Form from "../Form/Form";
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";
import bgVdo from "../../assets/bgVdo.mp4";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Hero = ({ theme }) => {
  useEffect(() => {}, []);

  return (
    <div className="dark:bg-black dark:text-white duration-300 relative overflow-hidden">

      <Helmet>
        <title>Dhyana Cabline</title>
        <meta name="description" content="Book reliable and affordable cab services in Jamnagar. 24/7 taxi service with professional drivers." />
        <meta name="keywords" content="Jamnagar Cab, Cab Service in Jamnagar, Taxi in Jamnagar, Outstation Taxi Jamnagar, Airport Cab Jamnagar" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="relative w-full overflow-hidden">
        <div className="block md:hidden">
          {/* Mobile view */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-contain"
          >
            <source src={bgVdo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="hidden md:block h-[600px] relative">
          {/* Desktop view */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none max-h-none -translate-x-1/2 -translate-y-1/2 object-cover"
          >
            <source src={bgVdo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>


      {/* Subtle background patterns (existing) */}
      <div className="absolute inset-0 opacity-5 z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content Section */}
      <section className="w-full bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container min-h-[620px] flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-12 py-12 w-full max-w-7xl">
            
            {/* Car Image Section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="false"
              className="order-1 sm:order-2 relative group max-w-full"
            >
              {/* Floating elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/20 rounded-full blur-md animate-bounce"></div>
              <div className="absolute -bottom-4 -right-12 w-12 h-12 bg-primary/15 rounded-full blur-md animate-bounce"></div>
              <div className="absolute top-1/2 -left-6 w-8 h-8 bg-primary/25 rounded-full blur-sm animate-bounce"></div>

              <div className="relative bg-gradient-to-br from-white/5 to-transparent rounded-3xl p-6 backdrop-blur-sm border border-white/10 group-hover:border-primary/30 transition-all duration-700 max-w-full overflow-hidden">
                <img
                  src={theme === "dark" ? carPng : yellowCar}
                  alt="Premium Car"
                  className="max-w-full h-auto object-contain"
                />
                <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                  PREMIUM
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/90 px-3 py-2 rounded-full shadow-lg flex items-center gap-1 backdrop-blur-sm">
                  <Star className="w-3 h-3 text-primary fill-current" />
                  <span className="text-xs font-semibold">4.9</span>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="order-2 sm:order-1 w-full max-w-md px-8 py-4 sm:px-10 sm:py-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg flex flex-col justify-center items-center border border-gray-200 dark:border-gray-700 min-h-[400px]">
              <h2 className="relative text-4xl sm:text-5xl lg:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 tracking-tight leading-tight drop-shadow-lg text-center w-full">
                Contact Us
              </h2>
              <div className="w-full sm:w-[90%] md:w-[95%] lg:w-full">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
          
          {/* TRUSTED & SECURE badge */}
          <div data-aos="fade-up" data-aos-delay="10" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold tracking-wide">TRUSTED & SECURE</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <p data-aos="fade-up" data-aos-delay="10"className="text-primary text-xl sm:text-2xl font-bold tracking-wider uppercase">Effortless</p>
            <h1 data-aos="fade-up" data-aos-delay="20" className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-gray-900 dark:text-white">
              Car Rental
            </h1>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p data-aos="fade-up" data-aos-delay="30" className="text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
              Drive Your Way — Easy, Affordable, Reliable.
            </p>
            <p data-aos="fade-up" data-aos-delay="40" className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Rent your dream car in just a few clicks. Flexible plans. Instant bookings. No hidden fees.
            </p>
          </div>

          {/* Features */}
          <div data-aos="fade-up" className="flex flex-wrap gap-6 py-4">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Instant Booking</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">5-Star Service</span>
            </div>
          </div>

          {/* Stats */}
          <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-primary/20">
          {/* Happy Clients */}
          <div className="text-center sm:text-left">
            <div className="text-2xl lg:text-3xl font-black text-primary">
              <CountUp end={15000} duration={2} separator=",">
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef}>0</span>
                  </VisibilitySensor>
                )}
              </CountUp>
              +
            </div>
            <div className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400 font-medium">Happy Clients</div>
          </div>

          {/* Premium Cars */}
          <div className="text-center sm:text-left">
            <div className="text-2xl lg:text-3xl font-black text-primary">
              <CountUp end={500} duration={2}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef}>0</span>
                  </VisibilitySensor>
                )}
              </CountUp>
              +
            </div>
            <div className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400 font-medium">Premium Cars</div>
          </div>

          {/* Support */}
          <div className="text-center sm:text-left">
            <div className="text-2xl lg:text-3xl font-black text-primary">
              <CountUp end={24} duration={2}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef}>0</span>
                  </VisibilitySensor>
                )}
              </CountUp>
              /7
            </div>
            <div className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400 font-medium">Support</div>
          </div>
        </div>
        </div>
      </section>

    </div>
  );
};

export default Hero;
