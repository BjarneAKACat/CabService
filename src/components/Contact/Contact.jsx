import React, { useState } from "react";
import Form from "../Form/Form";

const Contact = () => {
  return (
    <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6 rounded-lg">
          {/* Left Text */}
          <div className="col-span-2 space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Let's collaborate on your upcoming car rental venture
            </h1>
            <p className="text-gray-400">
              Reach out by filling the form — and we’ll get in touch with you shortly.
            </p>
          </div>

          {/* Form Section */}
          <Form/>

        </div>
      </div>
    </div>
  );
};

export default Contact;
