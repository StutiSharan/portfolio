import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namePattern = /^[A-Za-z\s]{2,}$/;

    if (!namePattern.test(name)) {
      alert("Please enter a valid name (only letters, min 2 characters).");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        "service_r2az4r5",
        "template_ohk0t0s",
        form,
        "p-5Wr3jJghLiaooZ_"
      )
      .then(() => {
        form.reset();
        setShowPopup(true);
      })
      .catch((error) => {
        alert("Failed to send. Please try again later.\n" + error.text);
      });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400 mb-6">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xl mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition px-6 py-3 rounded-xl text-white font-medium shadow-md"
          >
            Send Message
          </button>
        </form>

        {/* Success Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg relative max-w-xs w-full">
              <button
                className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
                onClick={() => setShowPopup(false)}
              >
                &times;
              </button>
              <h3 className="text-lg font-semibold mb-2">Message Sent ✅</h3>
              <p>Thank you! Your message has been sent successfully.</p>
            </div>
          </div>
        )}

        {/* Contact Links */}
        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <a
            href="mailto:stutisharan0@gmail.com"
            className="bg-gray-800 hover:bg-green-600 transition px-6 py-3 rounded-xl text-white font-medium shadow-lg"
          >
            📧 Email Me
          </a>
          <a
            href="tel:+918810772241"
            className="bg-gray-800 hover:bg-blue-600 transition px-6 py-3 rounded-xl text-white font-medium shadow-lg"
          >
            📞 Call Me
          </a>
          <a
            href="https://www.linkedin.com/in/stuti-sharan-1b0a82310/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-pink-600 transition px-6 py-3 rounded-xl text-white font-medium shadow-lg"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/StutiSharan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-purple-600 transition px-6 py-3 rounded-xl text-white font-medium shadow-lg"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
