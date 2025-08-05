import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400 mb-6">
          Contact Me
        </h2>

        {/* 📬 Contact Form (FormSubmit) */}
        <form
          action="https://formsubmit.co/stutisharan0@gmail.com"
          method="POST"
          className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xl mx-auto"
        >
          {/* Optional hidden settings for FormSubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input type="text" name="_honey" style={{ display: "none" }} />
          {/* Optional redirect (you can change this) */}
          {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

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

        {/* 🔗 Links */}
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
