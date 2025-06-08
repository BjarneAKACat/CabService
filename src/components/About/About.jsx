import React, {useState} from "react";
import { Shield, Clock, Users, Award, CheckCircle } from "lucide-react";
import CountUp from "react-countup";
import CarPng from "../../assets/car1.png";
import VisibilitySensor from 'react-visibility-sensor';

const About = () => {
  const [visible, setVisible] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setVisible((v) => !v);
    }
  };

    const renderCountUp = (end, suffix) => (
    <CountUp
      start={0}
      end={end}
      duration={2}
      suffix={suffix || ''}
      redraw={true}
    >
      {({ countUpRef, start, reset }) => (
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible) {
              reset();
              start();
              onVisibilityChange(true);
            }
          }}
          delayedCall
          partialVisibility
        >
          <span ref={countUpRef} />
        </VisibilitySensor>
      )}
    </CountUp>
  );

  const features = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete coverage for peace of mind"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance"
    },
    {
      icon: Users,
      title: "Trusted Service",
      description: "Serving thousands of happy customers"
    },
    {
      icon: Award,
      title: "Premium Fleet",
      description: "Well-maintained, top-quality vehicles"
    }
  ];

  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] duration-300 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-12">
          
          {/* Car Image Section */}
          <div 
            data-aos="slide-right" 
            data-aos-duration="1500"
            className="relative group order-2 lg:order-1"
          >
            {/* Floating elements around car */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/20 rounded-full blur-md animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
            <div className="absolute -bottom-4 -right-8 w-12 h-12 bg-primary/15 rounded-full blur-md animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
            <div className="absolute top-1/3 -left-4 w-8 h-8 bg-primary/25 rounded-full blur-sm animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
            
            {/* Car container with enhanced styling */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 dark:from-white/5 dark:to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-xl group-hover:shadow-2xl transition-all duration-700">
              <img
                src={CarPng}
                alt="About Us Car"
                className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Quality badge */}
              <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                PREMIUM QUALITY
              </div>
              
              {/* Experience badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/90 px-3 py-2 rounded-full shadow-lg flex items-center gap-1 backdrop-blur-sm">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold">5+ Years</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8 sm:p-16 pb-6">
              
              {/* Trust badge */}
              <div 
                data-aos="fade-up"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
              >
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-bold tracking-wide uppercase">About Our Service</span>
              </div>

              {/* Main heading */}
              <h1
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                About us
              </h1>
              
              {/* Description paragraphs */}
              <div className="space-y-6">
                <p 
                  data-aos="fade-up" 
                  data-aos-delay="400"
                  className="leading-8 tracking-wide text-lg font-medium opacity-90"
                  style={{fontFamily: 'Inter, system-ui, sans-serif'}}
                >
                  At <strong className="text-primary">Car Rental</strong>, we believe in making travel simple, flexible, and accessible to everyone. 
                  Whether you're heading on a weekend getaway, a business trip, or just need a ride for the day — we've got the perfect car for you.
                </p>
                
                <p 
                  data-aos="fade-up" 
                  data-aos-delay="600"
                  className="leading-8 tracking-wide opacity-80 font-medium"
                  style={{fontFamily: 'Inter, system-ui, sans-serif'}}
                >
                  With a wide range of vehicles, transparent pricing, and a seamless booking experience, we take the hassle out of renting a car. 
                  Our mission is to get you on the road with comfort and confidence, backed by 24/7 customer support and well-maintained vehicles.
                </p>
              </div>

              {/* Features grid */}
              <div 
                data-aos="fade-up" 
                data-aos-delay="100"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6"
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                        {feature.title}
                      </h3>
                      <p className="text-xs opacity-70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

             {/* Stats */}
             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-t border-primary/20">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-black text-primary" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {renderCountUp(15, 'K+')}
                  </div>
                  <div className="text-xs opacity-70 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Happy Customers
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-black text-primary" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {renderCountUp(500, '+')}
                  </div>
                  <div className="text-xs opacity-70 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Premium Cars
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-black text-primary" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {renderCountUp(99, '%')}
                  </div>
                  <div className="text-xs opacity-70 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Satisfaction Rate
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-black text-primary" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <CountUp start={0} end={24} duration={2} redraw={true}>
                      {({ countUpRef, start, reset }) => (
                        <VisibilitySensor
                          onChange={(isVisible) => {
                            if (isVisible) {
                              reset();
                              start();
                              onVisibilityChange(true);
                            }
                          }}
                          delayedCall
                          partialVisibility
                        >
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    /
                    <CountUp start={0} end={7} duration={2} redraw={true}>
                      {({ countUpRef, start, reset }) => (
                        <VisibilitySensor
                          onChange={(isVisible) => {
                            if (isVisible) {
                              reset();
                              start();
                              onVisibilityChange(true);
                            }
                          }}
                          delayedCall
                          partialVisibility
                        >
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                  <div className="text-xs opacity-70 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Customer Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;