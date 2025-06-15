// import React, {useState} from "react";
// import { Shield, Clock, Users, Award, CheckCircle } from "lucide-react";
// import CountUp from "react-countup";
// import CarPng from "../../assets/car1.png";
// import VisibilitySensor from 'react-visibility-sensor';

// const About = () => {
//   const [visible, setVisible] = useState(false);
//   const onVisibilityChange = (isVisible) => {
//     if (isVisible) {
//       setVisible((v) => !v);
//     }
//   };

//     const renderCountUp = (end, suffix) => (
//     <CountUp
//       start={0}
//       end={end}
//       duration={2}
//       suffix={suffix || ''}
//       redraw={true}
//     >
//       {({ countUpRef, start, reset }) => (
//         <VisibilitySensor
//           onChange={(isVisible) => {
//             if (isVisible) {
//               reset();
//               start();
//               onVisibilityChange(true);
//             }
//           }}
//           delayedCall
//           partialVisibility
//         >
//           <span ref={countUpRef} />
//         </VisibilitySensor>
//       )}
//     </CountUp>
//   );

//   const features = [
//     {
//       icon: Shield,
//       title: "Fully Insured",
//       description: "Complete coverage for peace of mind"
//     },
//     {
//       icon: Clock,
//       title: "24/7 Support",
//       description: "Round-the-clock customer assistance"
//     },
//     {
//       icon: Users,
//       title: "Trusted Service",
//       description: "Serving thousands of happy customers"
//     },
//     {
//       icon: Award,
//       title: "Premium Fleet",
//       description: "Well-maintained, top-quality vehicles"
//     }
//   ];

//   return (
//     <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] duration-300 relative overflow-hidden">
      
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
//       </div>

//       <div className="container py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-12">
          
//           {/* Car Image Section */}
//           <div 
//             data-aos="slide-right" 
//             data-aos-duration="1500"
//             className="relative group order-2 lg:order-1"
//           >
//             {/* Floating elements around car */}
//             <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/20 rounded-full blur-md animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
//             <div className="absolute -bottom-4 -right-8 w-12 h-12 bg-primary/15 rounded-full blur-md animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
//             <div className="absolute top-1/3 -left-4 w-8 h-8 bg-primary/25 rounded-full blur-sm animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
            
//             {/* Car container with enhanced styling */}
//             <div className="relative bg-gradient-to-br from-white/10 to-white/5 dark:from-white/5 dark:to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-xl group-hover:shadow-2xl transition-all duration-700">
//               <img
//                 src={CarPng}
//                 alt="About Us Car"
//                 className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] transform group-hover:scale-110 transition-transform duration-700"
//               />
              
//               {/* Quality badge */}
//               <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
//                 PREMIUM QUALITY
//               </div>
              
//               {/* Experience badge */}
//               <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/90 px-3 py-2 rounded-full shadow-lg flex items-center gap-1 backdrop-blur-sm">
//                 <Award className="w-4 h-4 text-primary" />
//                 <span className="text-xs font-semibold">5+ Years</span>
//               </div>
//             </div>
//           </div>

//           {/* Content Section */}
//           <div className="order-1 lg:order-2">
//             <div className="space-y-8 sm:p-16 pb-6">
              
//               {/* Trust badge */}
//               <div 
//                 data-aos="fade-up"
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
//               >
//                 <CheckCircle className="w-4 h-4 text-primary" />
//                 <span className="text-primary text-sm font-bold tracking-wide uppercase">About Our Service</span>
//               </div>

//               {/* Main heading */}
//               <h1
//                 data-aos="fade-up"
//                 data-aos-delay="200"
//                 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight"
//                 style={{fontFamily: 'Inter, system-ui, sans-serif'}}
//               >
//                 About us
//               </h1>
              
//               {/* Description paragraphs */}
//               <div className="space-y-6">
//                 <p 
//                   data-aos="fade-up" 
//                   data-aos-delay="400"
//                   className="leading-8 tracking-wide text-lg font-medium opacity-90"
//                   style={{fontFamily: 'Inter, system-ui, sans-serif'}}
//                 >
//                   At <strong className="text-primary">Car Rental</strong>, we believe in making travel simple, flexible, and accessible to everyone. 
//                   Whether you're heading on a weekend getaway, a business trip, or just need a ride for the day — we've got the perfect car for you.
//                 </p>
                
//                 <p 
//                   data-aos="fade-up" 
//                   data-aos-delay="600"
//                   className="leading-8 tracking-wide opacity-80 font-medium"
//                   style={{fontFamily: 'Inter, system-ui, sans-serif'}}
//                 >
//                   With a wide range of vehicles, transparent pricing, and a seamless booking experience, we take the hassle out of renting a car. 
//                   Our mission is to get you on the road with comfort and confidence, backed by 24/7 customer support and well-maintained vehicles.
//                 </p>
//               </div>

//               {/* Features grid */}
//               <div 
//                 data-aos="fade-up" 
//                 data-aos-delay="100"
//                 className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6"
//               >
//                 {features.map((feature, index) => (
//                   <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300">
//                     <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
//                       <feature.icon className="w-4 h-4 text-primary" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-sm mb-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
//                         {feature.title}
//                       </h3>
//                       <p className="text-xs opacity-70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
//                         {feature.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//              {/* Stats */}
//              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-t border-primary/20">
//                 <div className="text-center">
//                   <div className="text-xl sm:text-2xl font-black text-primary" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
//                     {renderCountUp(15, 'K+')}
//                   </div>
//                   <div className="text-xs opacity-70 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
//                     Happy Customers
//                   </div>
//                 </div>

//                 <div className="text-center">
//                   <div className="text-xl sm:text-2xl font-black text-primary" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
//                     {renderCountUp(500, '+')}
//                   </div>
//                   <div className="text-xs opacity-70 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
//                     Premium Cars
//                   </div>
//                 </div>

//                 <div className="text-center">
//                   <div className="text-xl sm:text-2xl font-black text-primary" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
//                     {renderCountUp(99, '%')}
//                   </div>
//                   <div className="text-xs opacity-70 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
//                     Satisfaction Rate
//                   </div>
//                 </div>

//                 <div className="text-center">
//                   <div className="text-xl sm:text-2xl font-black text-primary" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
//                     <CountUp start={0} end={24} duration={2} redraw={true}>
//                       {({ countUpRef, start, reset }) => (
//                         <VisibilitySensor
//                           onChange={(isVisible) => {
//                             if (isVisible) {
//                               reset();
//                               start();
//                               onVisibilityChange(true);
//                             }
//                           }}
//                           delayedCall
//                           partialVisibility
//                         >
//                           <span ref={countUpRef} />
//                         </VisibilitySensor>
//                       )}
//                     </CountUp>
//                     /
//                     <CountUp start={0} end={7} duration={2} redraw={true}>
//                       {({ countUpRef, start, reset }) => (
//                         <VisibilitySensor
//                           onChange={(isVisible) => {
//                             if (isVisible) {
//                               reset();
//                               start();
//                               onVisibilityChange(true);
//                             }
//                           }}
//                           delayedCall
//                           partialVisibility
//                         >
//                           <span ref={countUpRef} />
//                         </VisibilitySensor>
//                       )}
//                     </CountUp>
//                   </div>
//                   <div className="text-xs opacity-70 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
//                     Customer Support
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";
import { Shield, Clock, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="dark:bg-gray-900 bg-yellow-50 duration-300 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* ABOUT US Heading */}
        <h1
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-12"
          style={{fontFamily: 'Inter, system-ui, sans-serif'}}
        >
          <span className="bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 bg-clip-text text-transparent">
              About Us
            </span>
        </h1>

        {/* Mobile Layout: Stack everything vertically */}
        <div className="lg:hidden space-y-8">
          {/* First Image */}
          <div className="w-full h-64 flex items-center justify-center group relative overflow-hidden">
            <img
              src="https://images.pexels.com/photos/4606338/pexels-photo-4606338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Our Vision Image"
              className="w-full h-full object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:w-[40%] transform origin-left"></div>
            <div className="absolute top-0 left-0 h-0 w-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:h-[40%] transform origin-top"></div>
            <div className="absolute bottom-0 right-0 w-0 h-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:w-[40%] transform origin-right"></div>
            <div className="absolute bottom-0 right-0 h-0 w-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:h-[40%] transform origin-bottom"></div>
          </div>

          {/* First set of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 min-h-[280px]">
              <Shield className="w-10 h-10 text-yellow-600 dark:text-yellow-400 mb-4" />
              <h3
                className="text-lg font-semibold text-gray-900 dark:text-white mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}
              >
                Jab chahiye, tab ready
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Urgent travel ke time pe cab nahi milti? Humari cabs hamesha time pe aur ready milengi – no wait, no stress.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 min-h-[280px]">
              <Clock className="w-10 h-10 text-yellow-600 dark:text-yellow-400 mb-4" />
              <h3
                className="text-lg font-semibold text-gray-900 dark:text-white mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}
              >
                Family ya solo, sab special
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Solo travel ho ya family ke saath, humare liye har ride special hai. Best service dena humara promise hai, har baar.</p>
            </div>
          </div>

          {/* Second Image */}
          <div className="w-full h-64 flex items-center justify-center group relative overflow-hidden">
            <img
              src="https://www.citypng.com/public/uploads/preview/hd-london-cab-taxi-real-car-png-11663630033rv9zgmbcqx.png"
              alt="Our Mission Image"
              className="w-full h-full object-contain rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:w-[40%] transform origin-left"></div>
            <div className="absolute top-0 left-0 h-0 w-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:h-[40%] transform origin-top"></div>
            <div className="absolute bottom-0 right-0 w-0 h-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:w-[40%] transform origin-right"></div>
            <div className="absolute bottom-0 right-0 h-0 w-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:h-[40%] transform origin-bottom"></div>
          </div>

          {/* Second set of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 3 */}
            <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 min-h-[280px]">
              <Users className="w-10 h-10 text-yellow-600 dark:text-yellow-400 mb-4" />
              <h3
                className="text-lg font-semibold text-gray-900 dark:text-white mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}
              >
                Safe aur reliable rides
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '800' }}>Cabs mein travel karte waqt safety ki tension hoti hai? Humare drivers trustworthy, helpful aur friendly hain – jaise apne hi family ke saath travel kar rahe ho.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 min-h-[280px]">
              <Award className="w-10 h-10 text-yellow-600 dark:text-yellow-400 mb-4" />
              <h3
                className="text-lg font-semibold text-gray-900 dark:text-white mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}
              >
                City tour or shopping
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>Naye sheher mein travel karte waqt prices ko lekar tension hoti hai? Hum aapko bilkul fair aur reasonable rates pe service denge, jo aapke budget mein fit ho. Koi hidden charges nahi.</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Two-column layout */}
        <div className="hidden lg:block space-y-16">
          {/* First Section: Image on left, Cards on right */}
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-5 h-96 flex items-center justify-center group relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4606338/pexels-photo-4606338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our Vision Image"
                className="w-full h-full object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:w-[40%] transform origin-left"></div>
              <div className="absolute top-0 left-0 h-0 w-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:h-[40%] transform origin-top"></div>
              <div className="absolute bottom-0 right-0 w-0 h-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:w-[40%] transform origin-right"></div>
              <div className="absolute bottom-0 right-0 h-0 w-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:h-[40%] transform origin-bottom"></div>
            </div>

            <div className="col-span-7 grid grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 h-96">
                <Shield className="w-12 h-12 text-yellow-600 dark:text-yellow-400 mb-6" />
                <h3
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-4"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}
                >
                  Jab chahiye, tab ready
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '800' }}>Urgent travel ke time pe cab nahi milti? Humari cabs hamesha time pe aur ready milengi – no wait, no stress.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 h-96">
                <Clock className="w-12 h-12 text-yellow-600 dark:text-yellow-400 mb-6" />
                <h3
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-4"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}
                >
                  Family ya solo, sab special
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed" style={{ fontFamily: 'Montserrat' }}>Solo travel ho ya family ke saath, humare liye har ride special hai. Best service dena humara promise hai, har baar.</p>
              </div>
            </div>
          </div>

          {/* Second Section: Cards on left, Image on right */}
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-7 grid grid-cols-2 gap-8">
              {/* Card 3 */}
              <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 h-96">
                <Users className="w-12 h-12 text-yellow-600 dark:text-yellow-400 mb-6" />
                <h3
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-4"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '800' }}
                >
                  Safe aur reliable rides
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '800' }}>Cabs mein travel karte waqt safety ki tension hoti hai? Humare drivers trustworthy, helpful aur friendly hain – jaise apne hi family ke saath travel kar rahe ho.</p>
              </div>

              {/* Card 4 */}
              <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 h-96">
                <Award className="w-12 h-12 text-yellow-600 dark:text-yellow-400 mb-6" />
                <h3
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-4"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}
                >
                  City tour or shopping
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'normal' }}>Naye sheher mein travel karte waqt prices ko lekar tension hoti hai? Hum aapko bilkul fair aur reasonable rates pe service denge, jo aapke budget mein fit ho. Koi hidden charges nahi.</p>
              </div>
            </div>

            <div className="col-span-5 h-96 flex items-center justify-center group relative overflow-hidden ml-5">
              <img
                src="https://www.citypng.com/public/uploads/preview/hd-london-cab-taxi-real-car-png-11663630033rv9zgmbcqx.png"
                alt="Our Mission Image"
                className="w-full h-full object-contain rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:w-[40%] transform origin-left"></div>
              <div className="absolute top-0 left-0 h-0 w-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:h-[40%] transform origin-top"></div>
              <div className="absolute bottom-0 right-0 w-0 h-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:w-[40%] transform origin-right"></div>
              <div className="absolute bottom-0 right-0 h-0 w-[3px] bg-yellow-400 transition-all duration-500 ease-out group-hover:h-[40%] transform origin-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;