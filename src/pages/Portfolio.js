import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      image: "https://via.placeholder.com/400x300",
      description: "A comprehensive e-commerce solution with advanced features including payment processing, inventory management, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      client: "Fashion Retailer",
      duration: "3 months"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      image: "https://via.placeholder.com/400x300",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and investment tracking.",
      technologies: ["React Native", "Firebase", "AWS", "Biometric API"],
      client: "Digital Bank",
      duration: "6 months"
    },
    {
      id: 3,
      title: "Cloud Migration",
      category: "cloud",
      image: "https://via.placeholder.com/400x300",
      description: "Complete cloud infrastructure migration for a manufacturing company, reducing costs by 40% and improving performance.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      client: "Manufacturing Corp",
      duration: "4 months"
    },
    {
      id: 4,
      title: "Healthcare Management System",
      category: "web",
      image: "https://via.placeholder.com/400x300",
      description: "Comprehensive healthcare management system with patient records, appointment scheduling, and billing integration.",
      technologies: ["Angular", "Java", "PostgreSQL", "HIPAA"],
      client: "Medical Center",
      duration: "8 months"
    },
    {
      id: 5,
      title: "Food Delivery App",
      category: "mobile",
      image: "https://via.placeholder.com/400x300",
      description: "Food delivery application with real-time tracking, payment processing, and restaurant management system.",
      technologies: ["Flutter", "Firebase", "Google Maps", "PayPal"],
      client: "Food Chain",
      duration: "5 months"
    },
    {
      id: 6,
      title: "Cybersecurity Implementation",
      category: "security",
      image: "https://via.placeholder.com/400x300",
      description: "Comprehensive cybersecurity solution including threat detection, data encryption, and compliance management.",
      technologies: ["SIEM", "Firewall", "Encryption", "Compliance"],
      client: "Financial Services",
      duration: "3 months"
    },
    {
      id: 7,
      title: "Real Estate Platform",
      category: "web",
      image: "https://via.placeholder.com/400x300",
      description: "Real estate platform with property listings, virtual tours, and mortgage calculator.",
      technologies: ["Vue.js", "Python", "MySQL", "3D Tours"],
      client: "Real Estate Agency",
      duration: "4 months"
    },
    {
      id: 8,
      title: "Fitness Tracking App",
      category: "mobile",
      image: "https://via.placeholder.com/400x300",
      description: "Fitness tracking application with workout plans, progress monitoring, and social features.",
      technologies: ["Swift", "Kotlin", "HealthKit", "Social API"],
      client: "Fitness Brand",
      duration: "6 months"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'security', name: 'Cybersecurity' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div style={{ marginTop: '76px' }}>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4">Our Portfolio</h1>
          <p className="lead mb-0">
            Showcasing our best work and successful client projects
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="d-flex justify-content-center flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`btn ${activeFilter === category.id ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {filteredProjects.map((project) => (
              <div key={project.id} className="col-lg-6 col-xl-4">
                <div className="card border-0 shadow-sm h-100">
                  <img 
                    src={project.image} 
                    className="card-img-top" 
                    alt={project.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body p-4">
                    <h5 className="card-title mb-2">{project.title}</h5>
                    <p className="text-muted small mb-3">
                      <strong>Client:</strong> {project.client} | <strong>Duration:</strong> {project.duration}
                    </p>
                    <p className="card-text text-muted mb-3">
                      {project.description}
                    </p>
                    
                    <div className="mb-3">
                      <small className="text-muted">Technologies:</small>
                      <div className="d-flex flex-wrap gap-1 mt-1">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="badge bg-light text-dark">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button 
                      className="btn btn-outline-primary btn-sm"
                      data-bs-toggle="modal" 
                      data-bs-target={`#projectModal${project.id}`}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modals */}
      {projects.map((project) => (
        <div key={project.id} className="modal fade" id={`projectModal${project.id}`} tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{project.title}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <img 
                  src={project.image} 
                  className="img-fluid rounded mb-3" 
                  alt={project.title}
                />
                <h6>Project Overview</h6>
                <p className="text-muted">{project.description}</p>
                
                <div className="row">
                  <div className="col-md-6">
                    <h6>Client</h6>
                    <p className="text-muted">{project.client}</p>
                  </div>
                  <div className="col-md-6">
                    <h6>Duration</h6>
                    <p className="text-muted">{project.duration}</p>
                  </div>
                </div>
                
                <h6>Technologies Used</h6>
                <div className="d-flex flex-wrap gap-1 mb-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="badge bg-primary">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h6>Key Features</h6>
                <ul className="text-muted">
                  <li>Responsive design and cross-platform compatibility</li>
                  <li>Advanced security and data protection</li>
                  <li>Scalable architecture for future growth</li>
                  <li>Comprehensive testing and quality assurance</li>
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Request Similar Project</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Statistics */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="text-primary fw-bold">500+</h3>
                <p className="text-muted mb-0">Projects Completed</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="text-primary fw-bold">50+</h3>
                <p className="text-muted mb-0">Happy Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="text-primary fw-bold">98%</h3>
                <p className="text-muted mb-0">Client Satisfaction</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="text-primary fw-bold">24/7</h3>
                <p className="text-muted mb-0">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">What Our Clients Say</h2>
              <p className="lead text-muted">
                Testimonials from satisfied clients
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                      <i className="bi bi-quote text-primary"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">John Smith</h6>
                      <small className="text-muted">CEO, TechStart Inc.</small>
                    </div>
                  </div>
                  <p className="text-muted">
                    "TechCorp Solutions delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and commitment to quality is outstanding."
                  </p>
                  <div className="text-warning">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                      <i className="bi bi-quote text-primary"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">Sarah Johnson</h6>
                      <small className="text-muted">Marketing Director, RetailCorp</small>
                    </div>
                  </div>
                  <p className="text-muted">
                    "The mobile app they developed for us has significantly improved our customer engagement. The team was professional and delivered on time."
                  </p>
                  <div className="text-warning">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                      <i className="bi bi-quote text-primary"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">Mike Chen</h6>
                      <small className="text-muted">CTO, FinancePro</small>
                    </div>
                  </div>
                  <p className="text-muted">
                    "Their cloud migration expertise helped us reduce costs by 40% while improving performance. Highly recommended for enterprise solutions."
                  </p>
                  <div className="text-warning">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4">Ready to Start Your Project?</h2>
          <p className="lead mb-4">
            Let's create something amazing together
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <a href="/contact" className="btn btn-light btn-lg">
              Get Started
            </a>
            <a href="/services" className="btn btn-outline-light btn-lg">
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 