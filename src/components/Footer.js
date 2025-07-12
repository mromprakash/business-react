import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="mb-3">TechCorp Solutions</h5>
            <p className="text-muted">
              Leading IT solutions provider helping businesses transform through innovative technology.
              We deliver cutting-edge solutions that drive growth and efficiency.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-muted text-decoration-none">Home</Link></li>
              <li><Link to="/services" className="text-muted text-decoration-none">Services</Link></li>
              <li><Link to="/about" className="text-muted text-decoration-none">About Us</Link></li>
              <li><Link to="/portfolio" className="text-muted text-decoration-none">Portfolio</Link></li>
              <li><Link to="/contact" className="text-muted text-decoration-none">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="mb-3">Services</h6>
            <ul className="list-unstyled">
              <li><a href="/services" className="text-muted text-decoration-none">Web Development</a></li>
              <li><a href="/services" className="text-muted text-decoration-none">Mobile Apps</a></li>
              <li><a href="/services" className="text-muted text-decoration-none">Cloud Solutions</a></li>
              <li><a href="/services" className="text-muted text-decoration-none">IT Consulting</a></li>
              <li><a href="/services" className="text-muted text-decoration-none">Digital Marketing</a></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="mb-3">Contact Info</h6>
            <div className="text-muted">
              <p><i className="bi bi-geo-alt me-2"></i> 123 Tech Street, Digital City, DC 12345</p>
              <p><i className="bi bi-telephone me-2"></i> +1 (555) 123-4567</p>
              <p><i className="bi bi-envelope me-2"></i> info@techcorp.com</p>
              <p><i className="bi bi-clock me-2"></i> Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-muted">
              © 2024 TechCorp Solutions. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0 text-muted">
              <a href="#" className="text-muted text-decoration-none me-3">Privacy Policy</a>
              <a href="#" className="text-muted text-decoration-none">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 