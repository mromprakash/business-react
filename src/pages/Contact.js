import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: "bi bi-geo-alt",
      title: "Address",
      content: "123 Tech Street, Digital City, DC 12345"
    },
    {
      icon: "bi bi-telephone",
      title: "Phone",
      content: "+1 (555) 123-4567"
    },
    {
      icon: "bi bi-envelope",
      title: "Email",
      content: "info@techcorp.com"
    },
    {
      icon: "bi bi-clock",
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM"
    }
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "IT Consulting",
    "Cybersecurity",
    "Digital Marketing"
  ];

  return (
    <div style={{ marginTop: '76px' }}>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
          <p className="lead mb-0">
            Get in touch with us to discuss your project requirements
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  <h3 className="mb-4">Send us a Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Full Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email Address *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="company" className="form-label">Company</label>
                        <input
                          type="text"
                          className="form-control"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="service" className="form-label">Service Interest</label>
                        <select
                          className="form-select"
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">Message *</label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us about your project requirements..."
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-lg">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h4 className="mb-4">Get in Touch</h4>
                  
                  {contactInfo.map((info, index) => (
                    <div key={index} className="d-flex align-items-start mb-4">
                      <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                        <i className={`${info.icon} text-primary`}></i>
                      </div>
                      <div>
                        <h6 className="mb-1">{info.title}</h6>
                        <p className="text-muted mb-0">{info.content}</p>
                      </div>
                    </div>
                  ))}

                  <hr className="my-4" />

                  <h6 className="mb-3">Follow Us</h6>
                  <div className="d-flex gap-3">
                    <a href="#" className="text-primary">
                      <i className="bi bi-facebook fs-4"></i>
                    </a>
                    <a href="#" className="text-primary">
                      <i className="bi bi-twitter fs-4"></i>
                    </a>
                    <a href="#" className="text-primary">
                      <i className="bi bi-linkedin fs-4"></i>
                    </a>
                    <a href="#" className="text-primary">
                      <i className="bi bi-instagram fs-4"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">Our Offices</h2>
              <p className="lead text-muted">
                Visit us at our locations or schedule a virtual meeting
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-building text-primary fs-3"></i>
                  </div>
                  <h5 className="card-title">Headquarters</h5>
                  <p className="text-muted">
                    123 Tech Street<br />
                    Digital City, DC 12345<br />
                    United States
                  </p>
                  <a href="#" className="btn btn-outline-primary btn-sm">Get Directions</a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-building text-primary fs-3"></i>
                  </div>
                  <h5 className="card-title">West Coast Office</h5>
                  <p className="text-muted">
                    456 Innovation Drive<br />
                    Tech Valley, CA 90210<br />
                    United States
                  </p>
                  <a href="#" className="btn btn-outline-primary btn-sm">Get Directions</a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-camera-video text-primary fs-3"></i>
                  </div>
                  <h5 className="card-title">Virtual Meetings</h5>
                  <p className="text-muted">
                    Schedule a video call<br />
                    Available worldwide<br />
                    24/7 availability
                  </p>
                  <a href="#" className="btn btn-outline-primary btn-sm">Schedule Meeting</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">Frequently Asked Questions</h2>
              <p className="lead text-muted">
                Common questions about our services and process
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      How long does a typical project take?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      What is your pricing structure?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We offer flexible pricing options including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, complexity, and timeline. Contact us for a detailed quote.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Do you provide ongoing support?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, we offer comprehensive support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support. We also provide training for your team.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      Can you work with existing systems?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Absolutely! We specialize in integrating new solutions with existing systems. We'll assess your current infrastructure and ensure seamless integration while maintaining data integrity and system stability.
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
          <h2 className="display-5 fw-bold mb-4">Ready to Start Your Project?</h2>
          <p className="lead mb-4">
            Let's discuss how we can help bring your vision to life
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <a href="#contact-form" className="btn btn-light btn-lg">
              Get Started Today
            </a>
            <a href="/services" className="btn btn-outline-light btn-lg">
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 