import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-primary text-white py-5" style={{ marginTop: '76px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Transform Your Business with Innovative IT Solutions
              </h1>
              <p className="lead mb-4">
                We help businesses leverage cutting-edge technology to drive growth, 
                improve efficiency, and stay ahead of the competition.
              </p>
              <div className="d-flex gap-3">
                <Link to="/services" className="btn btn-light btn-lg">
                  Our Services
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="hero-image">
                <i className="bi bi-laptop display-1 text-light opacity-75"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">Our Services</h2>
              <p className="lead text-muted">
                Comprehensive IT solutions tailored to your business needs
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-code-slash text-primary fs-3"></i>
                  </div>
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text text-muted">
                    Custom websites and web applications built with modern technologies 
                    and responsive design principles.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-phone text-primary fs-3"></i>
                  </div>
                  <h5 className="card-title">Mobile Apps</h5>
                  <p className="card-text text-muted">
                    Native and cross-platform mobile applications for iOS and Android 
                    that deliver exceptional user experiences.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-cloud text-primary fs-3"></i>
                  </div>
                  <h5 className="card-title">Cloud Solutions</h5>
                  <p className="card-text text-muted">
                    Scalable cloud infrastructure and migration services to optimize 
                    your business operations and reduce costs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-gear text-primary fs-3"></i>
                  </div>
                  <h5 className="card-title">IT Consulting</h5>
                  <p className="card-text text-muted">
                    Strategic technology consulting to help you make informed decisions 
                    and optimize your IT infrastructure.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-shield-check text-primary fs-3"></i>
                  </div>
                  <h5 className="card-title">Cybersecurity</h5>
                  <p className="card-text text-muted">
                    Comprehensive security solutions to protect your business from 
                    cyber threats and ensure data compliance.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-graph-up text-primary fs-3"></i>
                  </div>
                  <h5 className="card-title">Digital Marketing</h5>
                  <p className="card-text text-muted">
                    SEO, social media marketing, and digital advertising strategies 
                    to boost your online presence and drive growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link to="/services" className="btn btn-primary btn-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Why Choose TechCorp Solutions?</h2>
              <p className="lead text-muted mb-4">
                With over 10 years of experience in the IT industry, we've helped 
                hundreds of businesses transform their digital presence and achieve 
                remarkable growth.
              </p>
              <div className="row g-3">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <span>Expert Team</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <span>24/7 Support</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <span>Custom Solutions</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <span>Affordable Pricing</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Link to="/about" className="btn btn-outline-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="stats-container">
                <div className="row g-4">
                  <div className="col-6">
                    <div className="bg-white p-4 rounded shadow-sm">
                      <h3 className="text-primary fw-bold">500+</h3>
                      <p className="text-muted mb-0">Projects Completed</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-white p-4 rounded shadow-sm">
                      <h3 className="text-primary fw-bold">50+</h3>
                      <p className="text-muted mb-0">Happy Clients</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-white p-4 rounded shadow-sm">
                      <h3 className="text-primary fw-bold">10+</h3>
                      <p className="text-muted mb-0">Years Experience</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-white p-4 rounded shadow-sm">
                      <h3 className="text-primary fw-bold">24/7</h3>
                      <p className="text-muted mb-0">Support Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="lead mb-4">
            Let's discuss how our IT solutions can help you achieve your goals and 
            stay ahead of the competition.
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <Link to="/contact" className="btn btn-light btn-lg">
              Get Free Consultation
            </Link>
            <Link to="/portfolio" className="btn btn-outline-light btn-lg">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
