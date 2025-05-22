import React, { useState } from "react";
import { useForm } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [state, originalHandleSubmit] = useForm("mgvkdpjr");
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please verify that you are not a robot.");
      return;
    }
    const form = e.target;
    let existingInput = form.querySelector('input[name="g-recaptcha-response"]');
    if (!existingInput) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "g-recaptcha-response";
      form.appendChild(input);
      existingInput = input;
    }
    existingInput.value = captchaToken;

    originalHandleSubmit(e);
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
              {state.succeeded ? (
                <p className="text-green-400 text-center font-semibold">
                  Thanks! We'll be in touch soon.
                </p>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-xs flex flex-col items-center"
                >
                  {/* Form Fields Box */}
                  <div className="w-full space-y-4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      pattern="^[A-Za-z\s]+$"
                      className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none"
                      required
                    />
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Contact Number"
                      pattern="^\d{10}$"
                      className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none"
                      required
                    />
                  </div>

                  {/* reCAPTCHA and Button OUTSIDE the box */}
                  <div className="mt-4 flex flex-col items-center space-y-4">
                    <div className="recaptcha-container">
                      <ReCAPTCHA
                        sitekey="6Lf7Nj4rAAAAAAw8PR9ewLPVj45PTfs8MqgKClXX"
                        onChange={handleCaptchaChange}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting || !captchaToken}
                      className="w-full font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase rounded-md"
                    >
                      {state.submitting ? "Sending..." : "Submit"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
