// import React from "react";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaLocationArrow,
//   FaMobileAlt,
// } from "react-icons/fa";
// import { 
//   MapPin, 
//   Phone, 
//   Mail, 
//   Clock, 
//   Facebook, 
//   Instagram, 
//   Twitter, 
//   Linkedin,
//   Car,
//   Shield,
//   Star,
//   Users,
//   ArrowUp,
//   MessageCircle
// } from 'lucide-react';

// const FooterLinks = [
//   {
//     title: "Home",
//     link: "/#",
//   },
//   {
//     title: "About",
//     link: "/#about",
//   },
//   {
//     title: "Contact",
//     link: "/#contact",
//   },
//   {
//     title: "Blog",
//     link: "/#blog",
//   },
// ];

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 mt-14 rounded-t-3xl overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full"></div>
//         <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-300 rounded-full"></div>
//         <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-500 rounded-full"></div>
//         <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400 rounded-full"></div>
//       </div>

//       <div className="relative z-10">
//         <section className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 py-12">
            
//             {/* Company Details */}
//             <div className="lg:col-span-2 space-y-6">
//               <div>
//                 <h1 className="text-3xl sm:text-4xl font-black text-white mb-4 flex items-center gap-3">
//                   <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center transform rotate-12">
//                     <Car className="w-6 h-6 text-black" />
//                   </div>
//                   <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
//                     Dhyana Cabline
//                   </span>
//                 </h1>
//               </div>

//               {/* Key Features */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="flex items-center gap-3 text-gray-300">
//                   <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center">
//                     <Shield className="w-4 h-4 text-yellow-400" />
//                   </div>
//                   <span className="text-sm font-medium">Safe & Secure</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-gray-300">
//                   <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center">
//                     <Clock className="w-4 h-4 text-yellow-400" />
//                   </div>
//                   <span className="text-sm font-medium">24/7 Available</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-gray-300">
//                   <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center">
//                     <Star className="w-4 h-4 text-yellow-400" />
//                   </div>
//                   <span className="text-sm font-medium">5-Star Rated</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-gray-300">
//                   <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center">
//                     <Users className="w-4 h-4 text-yellow-400" />
//                   </div>
//                   <span className="text-sm font-medium">Pro Drivers</span>
//                 </div>
//               </div>

//               {/* Contact Info */}
//               <div className="space-y-4">
//                 <div className="flex items-center gap-4 text-gray-300 hover:text-yellow-400 transition-colors duration-300 group">
//                   <div className="w-10 h-10 bg-yellow-400/10 group-hover:bg-yellow-400/20 rounded-xl flex items-center justify-center transition-colors duration-300">
//                     <MapPin className="w-5 h-5 text-yellow-400" />
//                   </div>
//                   <div>
//                     <p className="font-medium">Jamnagar, Gujarat</p>
//                     <p className="text-sm text-gray-400">Main Office Location</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4 text-gray-300 hover:text-yellow-400 transition-colors duration-300 group">
//                   <div className="w-10 h-10 bg-yellow-400/10 group-hover:bg-yellow-400/20 rounded-xl flex items-center justify-center transition-colors duration-300">
//                     <Phone className="w-5 h-5 text-yellow-400" />
//                   </div>
//                   <div>
//                     <p className="font-medium">+91 123456789</p>
//                     <p className="text-sm text-gray-400">24/7 Booking Hotline</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4 text-gray-300 hover:text-yellow-400 transition-colors duration-300 group">
//                   <div className="w-10 h-10 bg-yellow-400/10 group-hover:bg-yellow-400/20 rounded-xl flex items-center justify-center transition-colors duration-300">
//                     <Mail className="w-5 h-5 text-yellow-400" />
//                   </div>
//                   <div>
//                     <p className="font-medium">info@taxigo.com</p>
//                     <p className="text-sm text-gray-400">Customer Support</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Social Media & Newsletter */}
//           <div className="border-t border-gray-700 py-8">
//             <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              
//               {/* Social Media */}
//               <div className="flex flex-col sm:flex-row items-center gap-6">
//                 <h4 className="text-white font-semibold">Follow Us:</h4>
//                 <div className="flex items-center gap-4">
//                   {[
//                     { icon: Facebook, color: 'hover:text-blue-500', bg: 'hover:bg-blue-500/20' },
//                     { icon: Instagram, color: 'hover:text-pink-500', bg: 'hover:bg-pink-500/20' },
//                     { icon: Twitter, color: 'hover:text-blue-400', bg: 'hover:bg-blue-400/20' },
//                     { icon: Linkedin, color: 'hover:text-blue-600', bg: 'hover:bg-blue-600/20' }
//                   ].map(({ icon: Icon, color, bg }, index) => (
//                     <a
//                       key={index}
//                       href="#"
//                       className={`w-12 h-12 bg-gray-800 ${bg} rounded-xl flex items-center justify-center text-gray-400 ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
//                     >
//                       <Icon className="w-5 h-5" />
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Footer */}
//           <div className="border-t border-gray-700 py-6">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//               <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400 text-sm">
//                 <p>&copy; 2024 TaxiGo. All rights reserved.</p>
//                 <div className="flex gap-4">
//                   <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Privacy Policy</a>
//                   <span>•</span>
//                   <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Terms of Service</a>
//                   <span>•</span>
//                   <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Support</a>
//                 </div>
//               </div>
              
//               {/* Back to Top */}
//               <button
//                 onClick={scrollToTop}
//                 className="w-12 h-12 bg-yellow-400 hover:bg-yellow-500 rounded-xl flex items-center justify-center text-black transition-all duration-300 hover:scale-110 group"
//                 aria-label="Back to top"
//               >
//                 <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
//               </button>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Car,
  Shield,
  Star,
  Users,
  ArrowUp,
  MessageCircle
} from 'lucide-react';

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 mt-14 rounded-t-3xl overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-28 right-16 w-12 h-12 bg-yellow-300 rounded-full"></div>
        <div className="absolute bottom-16 left-1/4 w-10 h-10 bg-yellow-500 rounded-full"></div>
        <div className="absolute bottom-8 right-10 w-20 h-20 bg-yellow-400 rounded-full"></div>
      </div>

      <div className="relative z-10">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-8">
            
            {/* Company Details */}
            <div className="lg:col-span-2 space-y-6 w-full">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-white mb-3 flex items-center gap-2">
                  <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center transform rotate-12">
                    <Car className="w-5 h-5 text-black" />
                  </div>
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                    Dhyana Cabline
                  </span>
                </h1>
              </div>

              {/* Key Features */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-gray-300 w-full">
                <div className="flex items-center gap-2 text-sm min-w-[120px]">
                  <div className="w-6 h-6 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-3.5 h-3.5 text-yellow-400" />
                  </div>
                  <span className="font-medium">Safe & Secure</span>
                </div>
                <div className="flex items-center gap-2 text-sm min-w-[120px]">
                  <div className="w-6 h-6 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-3.5 h-3.5 text-yellow-400" />
                  </div>
                  <span className="font-medium">24/7 Available</span>
                </div>
                <div className="flex items-center gap-2 text-sm min-w-[120px]">
                  <div className="w-6 h-6 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                    <Star className="w-3.5 h-3.5 text-yellow-400" />
                  </div>
                  <span className="font-medium">5-Star Rated</span>
                </div>
                <div className="flex items-center gap-2 text-sm min-w-[120px]">
                  <div className="w-6 h-6 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                    <Users className="w-3.5 h-3.5 text-yellow-400" />
                  </div>
                  <span className="font-medium">Pro Drivers</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-gray-300 w-full">
                <div className="flex items-center gap-3 min-w-[150px] hover:text-yellow-400 transition-colors duration-300 group">
                  <div className="w-8 h-8 bg-yellow-400/10 group-hover:bg-yellow-400/20 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium leading-none">Jamnagar, Gujarat</p>
                    <p className="text-xs text-gray-400">Main Office Location</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 min-w-[150px] hover:text-yellow-400 transition-colors duration-300 group">
                  <div className="w-8 h-8 bg-yellow-400/10 group-hover:bg-yellow-400/20 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <Phone className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium leading-none">+91 123456789</p>
                    <p className="text-xs text-gray-400">24/7 Booking Hotline</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 min-w-[150px] hover:text-yellow-400 transition-colors duration-300 group">
                  <div className="w-8 h-8 bg-yellow-400/10 group-hover:bg-yellow-400/20 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <Mail className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium leading-none">info@taxigo.com</p>
                    <p className="text-xs text-gray-400">Customer Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Other grid columns, e.g. Footer Links, Socials (if any) can go here */}

          </div>

          {/* Social Media & Newsletter */}
          <div className="border-t border-gray-700 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              {/* Social Media */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <h4 className="text-white font-semibold text-sm">Follow Us:</h4>
                <div className="flex items-center gap-3">
                  {[  
                    { icon: Facebook, color: 'hover:text-blue-500', bg: 'hover:bg-blue-500/20' },
                    { icon: Instagram, color: 'hover:text-pink-500', bg: 'hover:bg-pink-500/20' },
                    { icon: Twitter, color: 'hover:text-blue-400', bg: 'hover:bg-blue-400/20' },
                    { icon: Linkedin, color: 'hover:text-blue-600', bg: 'hover:bg-blue-600/20' }
                  ].map(({ icon: Icon, color, bg }, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-10 h-10 bg-gray-800 ${bg} rounded-xl flex items-center justify-center text-gray-400 ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
              <div className="flex flex-col sm:flex-row items-center gap-3 text-gray-400 text-xs">
                <p>&copy; 2025 Dhyana Cabline. All rights reserved.</p>
              </div>
              
              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-xl flex items-center justify-center text-black transition-all duration-300 hover:scale-110 group"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
