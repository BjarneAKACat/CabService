// import React from "react";

// const testimonialData = [
//   {
//     name: "Dilshad",
//     image: "",
//     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//     aosDelay: "0",
//   },
//   {
//     name: "Satya",
//     image: "",
//     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//     aosDelay: "300",
//   },
//   {
//     name: "Sabir",
//     image: "",
//     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//     aosDelay: "1000",
//   },
// ];
// const Testimonial = () => {
//   return (
//     <>
//       <span id="about"></span>
//       <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
//         <div className="container">
//           {/* Header */}
//           <div className="space-y-4 pb-12">
//             <p
//               data-aos="fade-up"
//               className="text-3xl font-semibold text-center sm:text-4xl font-serif"
//             >
//               What Our Clients Say About Us
//             </p>
//             <p data-aos="fade-up" className="text-center sm:px-44">
//               We pride ourselves on delivering exceptional service, and our customers agree!  
//               Here's what real users are saying about their experiences with our hassle-free car rental service.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
//             {testimonialData.map((skill) => (
//               <div
//                 key={skill.name}
//                 data-aos="fade-up"
//                 data-aos-delay={skill.aosDelay}
//                 className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
//               >
//                 <div className="grid place-items-center ">
//                   <img
//                     src="https://picsum.photos/200"
//                     alt=""
//                     className="rounded-full w-20 h-20"
//                   />
//                 </div>
//                 <div className="text-2xl">⭐⭐⭐⭐⭐</div>
//                 <p>{skill.description}</p>
//                 <p className="text-center font-semibold">{skill.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Testimonial;
import React from "react";
import { Quote, Star } from "lucide-react";

const testimonialData = [
  {
    name: "Dilshad",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Satya",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "300",
  },
  {
    name: "Sabir",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
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

            {/* Stats */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="600"
              className="flex justify-center gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-black text-primary" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>4.9</div>
                <div className="text-sm opacity-70 font-medium">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-primary" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>2000+</div>
                <div className="text-sm opacity-70 font-medium">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-primary" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>99%</div>
                <div className="text-sm opacity-70 font-medium">Satisfaction</div>
              </div>
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
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 dark:from-white/5 dark:to-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-primary/30 text-black dark:text-white h-full">
                  
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="space-y-6 text-center">
                    
                    {/* Profile Image */}
                    <div className="relative mx-auto">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 p-1">
                        <img
                          src="https://picsum.photos/200"
                          alt={testimonial.name}
                          className="rounded-full w-full h-full object-cover"
                        />
                      </div>
                      {/* Online indicator */}
                      <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-black"></div>
                    </div>

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
                          Verified Customer
                        </p>
                      </div>
                    </div>

                    {/* Verified badge */}
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs font-semibold text-primary">VERIFIED</span>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="1200"
            className="text-center pt-16"
          >
            <div className="space-y-4">
              <p className="text-lg font-medium opacity-90" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                Ready to join thousands of satisfied customers?
              </p>
              <button className="rounded-xl bg-primary hover:bg-primary/90 transition-all duration-500 py-3 px-8 text-black font-bold shadow-lg hover:shadow-xl hover:scale-105" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;