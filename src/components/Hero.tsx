function Hero() {
  return (
    <div className="">
      <section className="relative bg-gray-50">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Build Stunning Experiences with{" "}
            <span className="text-indigo-400">React & Tailwind</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
            A modern starter hero section with responsive design and beautiful
            typography. Perfect for SaaS, startups, or personal websites.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 rounded-2xl bg-indigo-600 text-gray-500 font-medium shadow-md hover:bg-indigo-700 transition">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-2xl bg-white text-gray-800 font-medium shadow-md hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
