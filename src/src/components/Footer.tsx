export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-white">MyBrand</h2>
            <p className="mt-4 text-sm">
              Building modern web experiences with React & Tailwind CSS.  
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Status</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4 mt-4 flex-col">
              <a href="#" className="hover:text-white">
                <i className="fab fa-facebook-f"></i>Facebook
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-twitter"></i>Facebook
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-instagram"></i>Facebook
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-linkedin-in"></i>Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
          <p className="text-sm mt-4 md:mt-0">Made with ❤️ using React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}