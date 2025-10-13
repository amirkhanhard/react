import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useParams } from "react-router-dom";

function User() {
  const {userId} = useParams();
  return (
    <>
      <motion.section
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <div className="flex items-center mb-6">
          <Mail className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-800">Contact Us ({userId})</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-5">
            <div className="flex items-center text-gray-700">
              <Phone className="w-5 h-5 text-blue-500 mr-2" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Mail className="w-5 h-5 text-blue-500 mr-2" />
              <span>hello@pizzaplanet.com</span>
            </div>
            <div className="flex items-center text-gray-700">
              <MapPin className="w-5 h-5 text-blue-500 mr-2" />
              <span>Sector 61, Noida, India</span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              rows={4}
              required
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.section>
    </>
  );
}

export default User;
