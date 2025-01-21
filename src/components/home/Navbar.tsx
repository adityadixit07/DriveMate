import { useState } from "react";
import { Menu, X, Car } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <a className="flex items-center" href="/">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">RideMate</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              How it Works
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              For Drivers
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              For Vehicle Owners
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Safety
            </a>
            <Link to="/login" className="text-gray-600 hover:text-blue-600">
              Login
            </Link>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                How it Works
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                For Drivers
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                For Vehicle Owners
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Safety
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Login
              </a>
              <button className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
