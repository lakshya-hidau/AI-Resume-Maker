import React from 'react';
import { Link } from 'react-router';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaHeart
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-base-content">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">AI Resume Maker</h3>
            <p className="text-base-content/80 leading-relaxed">
              Empowering job seekers worldwide with AI-powered resume creation tools. 
              Build professional resumes that get results.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline btn-sm hover:btn-primary"
                aria-label="Follow us on Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline btn-sm hover:btn-secondary"
                aria-label="Follow us on Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline btn-sm hover:btn-accent"
                aria-label="Follow us on LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline btn-sm hover:btn-info"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="link link-hover">Home</Link>
              </li>
              <li>
                <Link to="/about" className="link link-hover">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="link link-hover">Services</Link>
              </li>
              <li>
                <Link to="/generate-resume" className="link link-hover">Create Resume</Link>
              </li>
              <li>
                <Link to="/blog" className="link link-hover">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="link link-hover">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="link link-hover">Resume Tips</Link>
              </li>
              <li>
                <Link to="/blog" className="link link-hover">Career Advice</Link>
              </li>
              <li>
                <Link to="/blog" className="link link-hover">Interview Guide</Link>
              </li>
              <li>
                <a href="#" className="link link-hover">Templates</a>
              </li>
              <li>
                <a href="#" className="link link-hover">Help Center</a>
              </li>
              <li>
                <a href="#" className="link link-hover">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-primary" />
                <span className="text-sm">123 Innovation Drive<br />Tech Valley, CA 94025</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-secondary" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-accent" />
                <span className="text-sm">hello@airesume.com</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="font-medium mb-2">Stay Updated</h5>
              <div className="join w-full">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="input input-bordered input-sm join-item flex-1"
                />
                <button className="btn btn-primary btn-sm join-item">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-300">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-base-content/70">
              © {currentYear} AI Resume Maker. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-base-content/70">
              <span>Made with</span>
              <FaHeart className="text-red-500 mx-1" />
              <span>for job seekers worldwide</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
              <Link to="/terms" className="link link-hover">Terms of Service</Link>
              <Link to="/cookies" className="link link-hover">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;