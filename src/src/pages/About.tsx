import { motion } from "framer-motion";
import { Users, HeartHandshake, Pizza } from "lucide-react";

function About() {
  return (
    <>
      <motion.section
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10 mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex items-center mb-6">
          <Users className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">
          Welcome to{" "}
          <span className="font-semibold text-blue-600">Pizza Planet</span> —
          where flavor meets passion! 🍕 We’re dedicated to crafting delicious,
          high-quality pizzas made from the freshest ingredients and baked to
          perfection. Our mission is to bring joy, one slice at a time, while
          maintaining the warmth of a local pizzeria and the efficiency of
          modern dining.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-6 bg-blue-50 rounded-xl"
          >
            <Pizza className="w-10 h-10 text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-800">Fresh Ingredients</h3>
            <p className="text-gray-500 text-sm text-center mt-1">
              Only the best and freshest produce make it to your pizza.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-6 bg-blue-50 rounded-xl"
          >
            <HeartHandshake className="w-10 h-10 text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-800">Customer First</h3>
            <p className="text-gray-500 text-sm text-center mt-1">
              We prioritize happiness — your satisfaction drives us.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-6 bg-blue-50 rounded-xl"
          >
            <Users className="w-10 h-10 text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-800">Passionate Team</h3>
            <p className="text-gray-500 text-sm text-center mt-1">
              A dedicated crew that loves what they do — making great pizza.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default About;
