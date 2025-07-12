import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: "bi bi-code-slash",
      description: "Custom websites and web applications built with modern technologies and responsive design principles.",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "Content Management Systems",
        "Progressive Web Apps",
        "API Development",
        "Website Maintenance"
      ],
      price: "Starting from $2,500"
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: "bi bi-phone",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-platform Apps",
        "App Store Optimization",
        "Push Notifications",
        "App Maintenance"
      ],
      price: "Starting from $5,000"
    },
    {
      id: 3,
      title: "Cloud Solutions",
      icon: "bi bi-cloud",
      description: "Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.",
      features: [
        "AWS/Azure/GCP Setup",
        "Cloud Migration",
        "Serverless Architecture",
        "Database Management",
        "Backup & Recovery",
        "Cost Optimization"
      ],
      price: "Starting from $1,500/month"
    },
    {
      id: 4,
      title: "IT Consulting",
      icon: "bi bi-gear",
      description: "Strategic technology consulting to help you make informed decisions and optimize your IT infrastructure.",
      features: [
        "Technology Assessment",
        "Digital Transformation",
        "IT Strategy Planning",
        "Vendor Selection",
        "Project Management",
        "Technology Training"
      ],
      price: "Starting from $150/hour"
    },
    {
      id: 5,
      title: "Cybersecurity",
      icon: "bi bi-shield-check",
      description: "Comprehensive security solutions to protect your business from cyber threats and ensure data compliance.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Data Encryption",
        "Compliance Management",
        "Incident Response",
        "Security Training"
      ],
      price: "Starting from $3,000"
    },
    {
      id: 6,
      title: "Digital Marketing",
      icon: "bi bi-graph-up",
      description: "SEO, social media marketing, and digital advertising strategies to boost your online presence and drive growth.",
      features: [
        "Search Engine Optimization",
        "Social Media Marketing",
        "Pay-Per-Click Advertising",
        "Content Marketing",
        "Email Marketing",
        "Analytics & Reporting"
      ],
      price: "Starting from $1,000/month"
    }
  ];

  return (
    <div style={{ marginTop: '76px' }}>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4">Our Services</h1>
          <p className="lead mb-0">
            Comprehensive IT solutions designed to transform your business and drive growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-lg-6 col-xl-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="text-center mb-4">
                      <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                        <i className={`${service.icon} text-primary fs-1`}></i>
                      </div>
                      <h4 className="card-title">{service.title}</h4>
                      <p className="text-muted">{service.description}</p>
                      <div className="badge bg-primary mb-3">{service.price}</div>
                    </div>
                    
                    <h6 className="fw-bold mb-3">What's Included:</h6>
                    <ul className="list-unstyled">
                      {service.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-center mt-4">
                      <Link to="/contact" className="btn btn-outline-primary">
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">Our Process</h2>
              <p className="lead text-muted">
                We follow a proven methodology to deliver exceptional results
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                  <span className="fw-bold">1</span>
                </div>
                <h5>Discovery</h5>
                <p className="text-muted">We analyze your requirements and understand your business goals</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                  <span className="fw-bold">2</span>
                </div>
                <h5>Planning</h5>
                <p className="text-muted">We create a detailed project plan and timeline</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                  <span className="fw-bold">3</span>
                </div>
                <h5>Development</h5>
                <p className="text-muted">Our expert team builds your solution with quality and precision</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                  <span className="fw-bold">4</span>
                </div>
                <h5>Launch & Support</h5>
                <p className="text-muted">We deploy your solution and provide ongoing support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">Technologies We Use</h2>
              <p className="lead text-muted">
                We leverage cutting-edge technologies to deliver robust and scalable solutions
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center">
                <div className="bg-light rounded p-3 mb-2">
                  <i className="bi bi-filetype-js text-warning fs-2"></i>
                </div>
                <small className="text-muted">JavaScript</small>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center">
                <div className="bg-light rounded p-3 mb-2">
                  <i className="bi bi-filetype-html text-danger fs-2"></i>
                </div>
                <small className="text-muted">HTML/CSS</small>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center">
                <div className="bg-light rounded p-3 mb-2">
                  <i className="bi bi-filetype-php text-primary fs-2"></i>
                </div>
                <small className="text-muted">PHP</small>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center">
                <div className="bg-light rounded p-3 mb-2">
                  <i className="bi bi-filetype-py text-info fs-2"></i>
                </div>
                <small className="text-muted">Python</small>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center">
                <div className="bg-light rounded p-3 mb-2">
                  <i className="bi bi-filetype-java text-warning fs-2"></i>
                </div>
                <small className="text-muted">Java</small>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center">
                <div className="bg-light rounded p-3 mb-2">
                  <i className="bi bi-cloud text-primary fs-2"></i>
                </div>
                <small className="text-muted">Cloud</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4">Ready to Get Started?</h2>
          <p className="lead mb-4">
            Let's discuss your project requirements and find the perfect solution for your business
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

export default Services; 