import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-secondary-500" />
              <span className="font-serif font-bold text-xl">Athena Academy</span>
            </div>
            <p className="text-neutral-300 mb-4">
              Empowering minds and shaping futures since 1995. Athena Academy provides world-class education with a focus on holistic development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-secondary-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-secondary-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/achievements" className="text-neutral-300 hover:text-secondary-500 transition-colors">Academic Achievements</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-secondary-500 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-300 hover:text-secondary-500 transition-colors">Showcase</Link>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-secondary-500 transition-colors">Admission</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-secondary-500 transition-colors">Academic Calendar</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-300 hover:text-secondary-500 transition-colors">Student Portal</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-secondary-500 transition-colors">Parent Portal</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-secondary-500 transition-colors">Faculty & Staff</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-secondary-500 transition-colors">Campus Life</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-secondary-500 transition-colors">Library</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-secondary-500 transition-colors">Research</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-secondary-500 transition-colors">Careers</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-neutral-300">123 Education Lane, Knowledge City, ST 12345</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-secondary-500 mr-3 flex-shrink-0" />
                <p className="text-neutral-300">(555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-secondary-500 mr-3 flex-shrink-0" />
                <p className="text-neutral-300">info@athenaacademy.edu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-neutral-700 py-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-lg font-bold mb-2 text-white">Subscribe to Our Newsletter</h4>
            <p className="text-neutral-300 mb-4">Stay updated with the latest news and events from Athena Academy.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-secondary-500 text-neutral-900"
              />
              <button type="submit" className="btn btn-secondary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Athena Academy. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-neutral-400">
              <a href="#" className="hover:text-secondary-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-secondary-500 transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-secondary-500 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;