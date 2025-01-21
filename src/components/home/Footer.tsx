import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">RideMate</h2>
            <p className="text-gray-400">
              Your trusted partner for safe and reliable rides.
            </p>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#our-story" className="hover:text-white transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition">
                  Team
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#press" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#help" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <Mail size={16} />
                support@ridemate.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} />
                1-800-RIDEMATE
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                123 Drive Street, City
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} RideMate. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#facebook" className="hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#twitter" className="hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="#instagram" className="hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#linkedin" className="hover:text-white transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
