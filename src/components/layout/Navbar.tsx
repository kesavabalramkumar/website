import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center space-x-2 text-primary-800"
            onClick={() => setIsMenuOpen(false)}
          >
            <GraduationCap className="h-8 w-8" />
            <span className="font-serif font-bold text-xl md:text-2xl">
              Athena Academy
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? 'text-primary-800 border-b-2 border-primary-800'
                    : 'text-neutral-700 hover:text-primary-800'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? 'text-primary-800 border-b-2 border-primary-800'
                    : 'text-neutral-700 hover:text-primary-800'
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/achievements"
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? 'text-primary-800 border-b-2 border-primary-800'
                    : 'text-neutral-700 hover:text-primary-800'
                }`
              }
            >
              Academic Achievements
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? 'text-primary-800 border-b-2 border-primary-800'
                    : 'text-neutral-700 hover:text-primary-800'
                }`
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? 'text-primary-800 border-b-2 border-primary-800'
                    : 'text-neutral-700 hover:text-primary-800'
                }`
              }
            >
              Showcase
            </NavLink>
          </div>

          {/* Apply Button */}
          <div className="hidden md:block">
            <button className="btn btn-primary">Apply Now</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-neutral-700 hover:text-primary-800 focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-screen opacity-100 py-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-4">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `py-2 font-medium ${
                  isActive
                    ? 'text-primary-800'
                    : 'text-neutral-700 hover:text-primary-800'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `py-2 font-medium ${
                  isActive
                    ? 'text-primary-800'
                    : 'text-neutral-700 hover:text-primary-800'
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/achievements"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `py-2 font-medium ${
                  isActive
                    ? 'text-primary-800'
                    : 'text-neutral-700 hover:text-primary-800'
                }`
              }
            >
              Academic Achievements
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `py-2 font-medium ${
                  isActive
                    ? 'text-primary-800'
                    : 'text-neutral-700 hover:text-primary-800'
                }`
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/gallery"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `py-2 font-medium ${
                  isActive
                    ? 'text-primary-800'
                    : 'text-neutral-700 hover:text-primary-800'
                }`
              }
            >
              Showcase
            </NavLink>
            <div>
              <button className="btn btn-primary w-full">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;