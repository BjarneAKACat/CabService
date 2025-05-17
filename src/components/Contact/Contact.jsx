import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Reset form (optional)
    setFormData({ username: "", contact: "" });
  };

  return (
    <>
      <span id="contact"></span>
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
            <div className="sm:grid sm:place-items-center">
              <form
                onSubmit={handleSubmit}
                className="space-y-4 w-full max-w-xs bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <input
                  type="text"
                  name="username"
                  placeholder="Your Name"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
