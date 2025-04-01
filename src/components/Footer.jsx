import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Branding Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">EduVerse</h2>
          <p className="text-gray-400 mt-2">
            Learn, Grow, and Succeed with our top courses and expert instructors.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 quick-links">
            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="/course" className="text-gray-400 hover:text-white">Courses</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={20} /></a>
          </div>

          {/* Newsletter */}
          <h3 className="text-lg font-semibold mt-4">Subscribe</h3>
          <div className="flex mt-2">
            <input type="email" placeholder="Your Email" className="p-2 text-white rounded-l-md outline-none" />
            <button className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600">Join</button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} EduVerse. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
