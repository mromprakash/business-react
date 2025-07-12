import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image: "https://via.placeholder.com/150",
      bio: "10+ years of experience in IT consulting and business strategy."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      image: "https://via.placeholder.com/150",
      bio: "Expert in cloud architecture and emerging technologies."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Lead Developer",
      image: "https://via.placeholder.com/150",
      bio: "Full-stack developer with expertise in modern web technologies."
    },
    {
      id: 4,
      name: "David Kim",
      position: "UX/UI Designer",
      image: "https://via.placeholder.com/150",
      bio: "Creative designer focused on user-centered design solutions."
    }
  ];

  const values = [
    {
      icon: "bi bi-lightbulb",
      title: "Innovation",
      description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions."
    },
    {
      icon: "bi bi-shield-check",
      title: "Quality",
      description: "We maintain the highest standards of quality in every project we undertake."
    },
    {
      icon: "bi bi-people",
      title: "Collaboration",
      description: "We work closely with our clients to ensure their vision becomes reality."
    },
    {
      icon: "bi bi-clock",
      title: "Reliability",
      description: "We deliver projects on time and provide ongoing support to our clients."
    }
  ];

  return (
    <div style={{ marginTop: '76px' }}>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4">About TechCorp Solutions</h1>
          <p className="lead mb-0">
            Transforming businesses through innovative technology solutions since 2014
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Our Story</h2>
              <p className="lead text-muted mb-4">
                Founded in 2014, TechCorp Solutions began with a simple mission: to help businesses 
                leverage technology to achieve their goals and stay competitive in an ever-evolving 
                digital landscape.
              </p>
              <p className="text-muted">
                What started as a small team of passionate developers has grown into a comprehensive 
                IT solutions provider, serving clients across various industries. We've successfully 
                completed over 500 projects and helped more than 50 businesses transform their 
                digital presence.
              </p>
              <p className="text-muted">
                Today, we continue to innovate and adapt to emerging technologies, ensuring our 
                clients always have access to the latest and most effective solutions for their 
                business needs.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="bg-light p-4 rounded">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="text-center">
                      <h3 className="text-primary fw-bold">500+</h3>
                      <p className="text-muted mb-0">Projects Completed</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center">
                      <h3 className="text-primary fw-bold">50+</h3>
                      <p className="text-muted mb-0">Happy Clients</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center">
                      <h3 className="text-primary fw-bold">10+</h3>
                      <p className="text-muted mb-0">Years Experience</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center">
                      <h3 className="text-primary fw-bold">25+</h3>
                      <p className="text-muted mb-0">Team Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-bullseye text-primary fs-3"></i>
                  </div>
                  <h4 className="card-title">Our Mission</h4>
                  <p className="card-text text-muted">
                    To empower businesses with innovative technology solutions that drive growth, 
                    improve efficiency, and create lasting competitive advantages in the digital age.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-eye text-primary fs-3"></i>
                  </div>
                  <h4 className="card-title">Our Vision</h4>
                  <p className="card-text text-muted">
                    To be the leading technology partner for businesses seeking digital transformation, 
                    known for innovation, reliability, and exceptional client success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">Our Values</h2>
              <p className="lead text-muted">
                The principles that guide everything we do
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {values.map((value, index) => (
              <div key={index} className="col-lg-6 col-xl-3">
                <div className="text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <i className={`${value.icon} text-primary fs-2`}></i>
                  </div>
                  <h5 className="mb-3">{value.title}</h5>
                  <p className="text-muted">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">Meet Our Team</h2>
              <p className="lead text-muted">
                The talented professionals behind our success
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-lg-6 col-xl-3">
                <div className="card border-0 shadow-sm text-center">
                  <div className="card-body p-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="rounded-circle mb-3" 
                      width="100" 
                      height="100"
                    />
                    <h5 className="card-title mb-1">{member.name}</h5>
                    <p className="text-primary mb-3">{member.position}</p>
                    <p className="card-text text-muted small">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">Our Journey</h2>
              <p className="lead text-muted">
                Key milestones in our company's growth
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="timeline">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                            <small className="fw-bold">2014</small>
                          </div>
                          <h5 className="mb-0">Company Founded</h5>
                        </div>
                        <p className="text-muted mb-0">
                          TechCorp Solutions was established with a vision to transform businesses through technology.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                            <small className="fw-bold">2016</small>
                          </div>
                          <h5 className="mb-0">First 100 Projects</h5>
                        </div>
                        <p className="text-muted mb-0">
                          Reached our first milestone of 100 successful project completions.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                            <small className="fw-bold">2019</small>
                          </div>
                          <h5 className="mb-0">Cloud Services Launch</h5>
                        </div>
                        <p className="text-muted mb-0">
                          Expanded our services to include comprehensive cloud solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                            <small className="fw-bold">2024</small>
                          </div>
                          <h5 className="mb-0">500+ Projects</h5>
                        </div>
                        <p className="text-muted mb-0">
                          Celebrated our 500th project completion and continued growth.
                        </p>
                      </div>
                    </div>
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
          <h2 className="display-5 fw-bold mb-4">Ready to Work with Us?</h2>
          <p className="lead mb-4">
            Let's discuss how we can help transform your business with our innovative solutions
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <Link to="/contact" className="btn btn-light btn-lg">
              Get in Touch
            </Link>
            <Link to="/services" className="btn btn-outline-light btn-lg">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 