import { CheckCircle2 } from "lucide-react";

const PythonPage = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]');
    if (emailInput.value) {
      alert('Thank you for subscribing to our newsletter!');
      emailInput.value = '';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-white position-relative overflow-hidden py-5 py-lg-7">
        <div className="container position-relative z-index-2">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">Python Development Services</h1>
              <p className="lead mb-5">
                Unlock the power of Python with CinqueLabs. We deliver robust, scalable, and high-performance Python solutions for web, data, and automation.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary btn-lg px-4 py-3">
                  Get Started
                </button>
                <button className="btn btn-outline-light btn-lg px-4 py-3">
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                {/* <img 
                  src="https://www.python.org/static/community_logos/python-logo.png" 
                  alt="Python Development" 
                  className="img-fluid rounded-3 shadow-lg"
                  style={{ background: "#fff", padding: "1rem" }}
                /> */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-10 rounded-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-0 end-0 h-150 w-50 d-none d-lg-block">
          <div className="h-100 w-100 bg-cover bg-center opacity-20" 
               style={{backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/5968/5968350.png')"}}>
          </div>
        </div>
      </section>

      {/* Why Choose Python Section */}
      <section className="py-6 py-lg-7 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="text-center">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" 
                  alt="Python Benefits" 
                  className="img-fluid"
                  style={{maxWidth: '200px'}}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <h2 className="display-5 fw-bold mb-4">Why Choose Python for Your Project?</h2>
              <p className="fs-5 mb-4 text-muted">
                Python is renowned for its simplicity, versatility, and powerful libraries. It's ideal for web development, data science, automation, and more.
              </p>
              <div className="row mt-5">
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="me-4 text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Rapid Development</h5>
                      <p className="mb-0 text-muted">Faster prototyping and delivery with clean, readable code</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="me-4 text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Rich Ecosystem</h5>
                      <p className="mb-0 text-muted">Thousands of libraries for web, data, AI, and automation</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="me-4 text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Scalability</h5>
                      <p className="mb-0 text-muted">Build solutions that grow with your business</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="me-4 text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Strong Community</h5>
                      <p className="mb-0 text-muted">Supported by millions of developers worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-6 py-lg-7 mb-6">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Python Development Services</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              End-to-end Python solutions for startups, enterprises, and everything in between
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-code-slash fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Web Development</h4>
                  <p className="text-muted">
                    Custom web applications using Django, Flask, and FastAPI.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-bar-chart-line fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Data Science & AI</h4>
                  <p className="text-muted">
                    Machine learning, analytics, and automation with Python's top libraries.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-gear fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Automation & Scripting</h4>
                  <p className="text-muted">
                    Automate workflows and business processes for efficiency and accuracy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-cloud fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Cloud & API Integration</h4>
                  <p className="text-muted">
                    Scalable APIs and cloud solutions with Python and leading platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-6 py-lg-7 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4">Why CinqueLabs for Python Development?</h2>
              <p className="lead mb-5">
                Our Python experts deliver innovative, scalable, and secure solutions tailored to your business needs.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary btn-lg px-4">
                  Get a Free Consultation
                </button>
                <button className="btn btn-outline-light btn-lg px-4">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion" id="whyChooseUsAccordion">
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden">
                  <h3 className="accordion-header">
                    <button className="accordion-button bg-white text-dark fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      Certified Python Developers
                    </button>
                  </h3>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#whyChooseUsAccordion">
                    <div className="accordion-body bg-white">
                      Our team includes certified Python professionals with years of experience across industries.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed bg-white text-dark fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      Agile & Transparent Process
                    </button>
                  </h3>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#whyChooseUsAccordion">
                    <div className="accordion-body bg-white">
                      We use Agile methodologies for flexibility, transparency, and rapid delivery.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed bg-white text-dark fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                      Quality & Security
                    </button>
                  </h3>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#whyChooseUsAccordion">
                    <div className="accordion-body bg-white">
                      Rigorous testing and best practices ensure secure, high-quality solutions.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 rounded overflow-hidden">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed bg-white text-dark fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                      Ongoing Support
                    </button>
                  </h3>
                  <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#whyChooseUsAccordion">
                    <div className="accordion-body bg-white">
                      We provide maintenance and support to keep your Python solutions running smoothly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-6 py-lg-7 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Python Technology Stack</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              We leverage the best Python frameworks and tools for every project
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-code-slash fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Web Frameworks</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">Django</li>
                    <li className="mb-2">Flask</li>
                    <li className="mb-2">FastAPI</li>
                    <li className="mb-2">Tornado</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-bar-chart-line fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Data & AI</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">Pandas</li>
                    <li className="mb-2">NumPy</li>
                    <li className="mb-2">TensorFlow</li>
                    <li className="mb-2">PyTorch</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-gear fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">DevOps & Automation</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">Celery</li>
                    <li className="mb-2">Ansible</li>
                    <li className="mb-2">Fabric</li>
                    <li className="mb-2">Selenium</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-cloud fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Cloud & APIs</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">AWS Lambda</li>
                    <li className="mb-2">Google Cloud Functions</li>
                    <li className="mb-2">REST APIs</li>
                    <li className="mb-2">GraphQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hire Developers Section */}
      <section className="py-6 py-lg-7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" 
                alt="Hire Python Developers" 
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Hire Dedicated Python Developers</h2>
              <p className="lead text-muted mb-5">
                Augment your team with our senior Python developers for full-time or part-time projects.
              </p>
              
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Flexible Hiring Models</h5>
                      <p className="text-muted mb-0">Hourly, monthly, or full-time contracts</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Quick Onboarding</h5>
                      <p className="text-muted mb-0">Developers ready to start in 48 hours</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Dedicated Resources</h5>
                      <p className="text-muted mb-0">Work exclusively on your project</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Daily Reporting</h5>
                      <p className="text-muted mb-0">Transparent progress updates</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-5">
                <button className="btn btn-primary btn-lg px-4 me-3">
                  Hire Developers
                </button>
                <button className="btn btn-outline-secondary btn-lg px-4">
                  View Profiles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-6 py-lg-7 bg-dark text-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Development Process</h2>
            <p className="lead text-white-50 mx-auto" style={{maxWidth: '700px'}}>
              A proven methodology that ensures quality and timely delivery
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 bg-dark border-secondary">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <span className="fs-4 fw-bold">1</span>
                  </div>
                  <h4 className="fw-bold mb-3 text-white">Discovery</h4>
                  <p className="text-white-50">
                    We analyze requirements, define scope, and plan the project roadmap.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 bg-dark border-secondary">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <span className="fs-4 fw-bold">2</span>
                  </div>
                  <h4 className="fw-bold mb-3 text-white">Design</h4>
                  <p className="text-white-50">
                    We create wireframes, prototypes, and UI/UX designs for your approval.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 bg-dark border-secondary">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <span className="fs-4 fw-bold">3</span>
                  </div>
                  <h4 className="fw-bold mb-3 text-white">Development</h4>
                  <p className="text-white-50">
                    Our developers build your application using Agile sprints with regular demos.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 bg-dark border-secondary">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <span className="fs-4 fw-bold">4</span>
                  </div>
                  <h4 className="fw-bold mb-3 text-white">Deployment</h4>
                  <p className="text-white-50">
                    We deploy the application, provide training, and offer ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-6 py-lg-7 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">What Our Clients Say</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              Trusted by startups and Fortune 500 companies worldwide
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning me-1"></i>
                    ))}
                  </div>
                  <p className="mb-4">
                    "CinqueLabs delivered a robust Python solution that streamlined our operations and improved efficiency. Highly recommended!"
                  </p>
                  <div className="d-flex align-items-center">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" className="rounded-circle me-3" width="50" height="50" alt="Client" />
                    <div>
                      <h6 className="mb-0 fw-bold">Michael Johnson</h6>
                      <small className="text-muted">CTO, TechCorp</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning me-1"></i>
                    ))}
                  </div>
                  <p className="mb-4">
                    "Their Python data science team helped us unlock valuable insights from our data. The results exceeded our expectations."
                  </p>
                  <div className="d-flex align-items-center">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" className="rounded-circle me-3" width="50" height="50" alt="Client" />
                    <div>
                      <h6 className="mb-0 fw-bold">Sarah Williams</h6>
                      <small className="text-muted">Product Manager, RetailX</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning me-1"></i>
                    ))}
                  </div>
                  <p className="mb-4">
                    "CinqueLabs' Python developers integrated seamlessly with our team and delivered on time, every time."
                  </p>
                  <div className="d-flex align-items-center">
                    <img src="https://randomuser.me/api/portraits/men/75.jpg" className="rounded-circle me-3" width="50" height="50" alt="Client" />
                    <div>
                      <h6 className="mb-0 fw-bold">David Chen</h6>
                      <small className="text-muted">Director of Engineering, FinTech Solutions</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 py-lg-7 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-4">Ready to Build Your Python Solution?</h2>
              <p className="lead mb-5">
                Let's discuss how our Python expertise can help you achieve your business goals.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button className="btn btn-light btn-lg px-5 text-primary">
                  Get a Free Quote
                </button>
                <button className="btn btn-outline-light btn-lg px-5">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 py-lg-7">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Frequently Asked Questions</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              Answers to common questions about our Python development services
            </p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne">
                      What types of Python projects do you deliver?
                    </button>
                  </h3>
                  <div id="faqOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We deliver web apps, APIs, data science solutions, automation scripts, and more using Python's best frameworks and libraries.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo">
                      Can you integrate Python with our existing systems?
                    </button>
                  </h3>
                  <div id="faqTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Absolutely. We have extensive experience integrating Python solutions with legacy systems, third-party APIs, and cloud platforms.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqThree">
                      Do you provide ongoing support and maintenance?
                    </button>
                  </h3>
                  <div id="faqThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, we offer flexible support and maintenance packages to keep your Python applications secure and up-to-date.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqFour">
                      How do you ensure code quality?
                    </button>
                  </h3>
                  <div id="faqFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We follow best practices, code reviews, automated testing, and CI/CD pipelines to ensure high-quality, maintainable code.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqFive">
                      Can I hire dedicated Python developers?
                    </button>
                  </h3>
                  <div id="faqFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, you can hire our Python experts on a dedicated, full-time, or part-time basis to work as an extension of your team.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <h5 className="fw-bold mb-4">CinqueLabs</h5>
              <p>Delivering cutting-edge software solutions with Node.js and modern web technologies since 2015.</p>
              <div className="social-icons mt-4">
                <a href="#" className="text-white me-3"><i className="fab fa-twitter fa-lg"></i></a>
                <a href="#" className="text-white me-3"><i className="fab fa-linkedin fa-lg"></i></a>
                <a href="#" className="text-white me-3"><i className="fab fa-github fa-lg"></i></a>
                <a href="#" className="text-white"><i className="fab fa-youtube fa-lg"></i></a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <h6 className="fw-bold mb-4">Company</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">About Us</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Careers</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Blog</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h6 className="fw-bold mb-4">Services</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Web Development</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Mobile Apps</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Cloud Solutions</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">DevOps</a></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h6 className="fw-bold mb-4">Newsletter</h6>
              <p className="text-white-50">Subscribe to our newsletter for the latest in Node.js and web development.</p>
              <form className="mt-3" onSubmit={handleNewsletterSubmit}>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Your email" required />
                  <button className="btn btn-primary" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <hr className="my-4 bg-secondary" />
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 text-white-50 small">© {new Date().getFullYear()} CinqueLabs. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a href="#" className="text-white-50 text-decoration-none small me-3">Privacy Policy</a>
              <a href="#" className="text-white-50 text-decoration-none small">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PythonPage;
