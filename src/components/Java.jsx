import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const JavaPage = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]');
    if (emailInput.value) {
      alert('Thank you for subscribing to our newsletter!');
      emailInput.value = '';
    }
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="hero-section bg-dark text-white relative overflow-hidden py-16 lg:py-24">
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Java Development Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Build scalable, secure, and high-performance Java applications with CinqueLabs. Enterprise-grade solutions for web, mobile, and backend.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:bg-opacity-90">Get Started</Link>
                <Link to="/case-studies/java" className="btn-outline-white px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:bg-white hover:text-gray-900">Learn More</Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <img 
                src="https://cdn.worldvectorlogo.com/logos/java-4.svg" 
                alt="Java Development" 
                className="w-full rounded-xl shadow-2xl"
                style={{ background: "#fff", padding: "1rem" }}
              />
              <div className="absolute inset-0 bg-primary opacity-10 rounded-xl"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full w-1/2 hidden lg:block">
          <div className="h-full w-full bg-cover bg-center opacity-20" 
               style={{backgroundImage: "url('https://miro.medium.com/v2/resize:fit:1400/1*LrjUe1T9Q6kQzA6p8rQe6w.png')"}}>
          </div>
        </div>
      </section>

      {/* Why Choose Java Section */}
      <section className="py-6 py-lg-7 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="text-center">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/226/226777.png" 
                  alt="Java Benefits" 
                  className="img-fluid"
                  style={{maxWidth: '200px'}}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <h2 className="display-5 fw-bold mb-4">Why Choose Java for Your Project?</h2>
              <p className="fs-5 mb-4 text-muted">
                Java is a proven, robust, and versatile language for building enterprise applications, APIs, and mobile solutions.
              </p>
              <div className="row mt-5">
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="me-4 text-primary"><CheckCircle2 size={24} /></div>
                    <div>
                      <h5 className="fw-bold">Platform Independence</h5>
                      <p className="mb-0 text-muted">Write once, run anywhere with JVM compatibility</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="me-4 text-primary"><CheckCircle2 size={24} /></div>
                    <div>
                      <h5 className="fw-bold">Enterprise-Grade</h5>
                      <p className="mb-0 text-muted">Trusted by banks, governments, and Fortune 500s</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="me-4 text-primary"><CheckCircle2 size={24} /></div>
                    <div>
                      <h5 className="fw-bold">Scalable & Secure</h5>
                      <p className="mb-0 text-muted">Ideal for large, mission-critical systems</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="me-4 text-primary"><CheckCircle2 size={24} /></div>
                    <div>
                      <h5 className="fw-bold">Rich Ecosystem</h5>
                      <p className="mb-0 text-muted">Vast libraries, frameworks, and community support</p>
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
            <h2 className="display-5 fw-bold mb-3">Our Java Development Services</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              Comprehensive Java solutions for web, mobile, and enterprise
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-code-slash fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Enterprise Apps</h4>
                  <p className="text-muted">Robust, scalable Java applications for enterprise needs.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-phone fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Mobile Apps</h4>
                  <p className="text-muted">Android app development using Java and Kotlin.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-gear fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3">API Development</h4>
                  <p className="text-muted">RESTful and GraphQL APIs with Spring Boot and Jakarta EE.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-cloud fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Cloud & Microservices</h4>
                  <p className="text-muted">Cloud-native Java apps and microservices architecture.</p>
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
              <h2 className="display-5 fw-bold mb-4">Why CinqueLabs for Java Development?</h2>
              <p className="lead mb-5">
                Our Java engineers deliver secure, scalable, and innovative solutions for your business.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-primary btn-lg px-4">Get a Free Consultation</Link>
                <Link to="/case-studies/java" className="btn btn-outline-light btn-lg px-4">View Case Studies</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion" id="whyChooseUsAccordion">
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden">
                  <h3 className="accordion-header">
                    <button className="accordion-button bg-white text-dark fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      Certified Java Developers
                    </button>
                  </h3>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#whyChooseUsAccordion">
                    <div className="accordion-body bg-white">
                      Our team includes certified Java professionals with deep industry experience.
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
                      Agile methodologies for flexibility, transparency, and rapid delivery.
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
                      Secure coding, code reviews, and automated testing for robust solutions.
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
                      Maintenance and support to keep your Java applications running smoothly.
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
            <h2 className="display-5 fw-bold mb-3">Our Java Technology Stack</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              We use the best Java frameworks and tools for every project
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-code-slash fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Frameworks</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">Spring Boot</li>
                    <li className="mb-2">Jakarta EE</li>
                    <li className="mb-2">Hibernate</li>
                    <li className="mb-2">Micronaut</li>
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
                  <h4 className="fw-bold mb-3">Build Tools</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">Maven</li>
                    <li className="mb-2">Gradle</li>
                    <li className="mb-2">Ant</li>
                    <li className="mb-2">Jenkins</li>
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
                  <h4 className="fw-bold mb-3">Testing</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">JUnit</li>
                    <li className="mb-2">Mockito</li>
                    <li className="mb-2">Selenium</li>
                    <li className="mb-2">TestNG</li>
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
                  <h4 className="fw-bold mb-3">Cloud & DevOps</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">Docker</li>
                    <li className="mb-2">Kubernetes</li>
                    <li className="mb-2">AWS</li>
                    <li className="mb-2">Azure</li>
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
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                alt="Hire Java Developers" 
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Hire Dedicated Java Developers</h2>
              <p className="lead text-muted mb-5">
                Augment your team with our senior Java developers for full-time or part-time projects.
              </p>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-primary"><CheckCircle2 size={24} /></div>
                    <div>
                      <h5 className="fw-bold">Flexible Hiring Models</h5>
                      <p className="text-muted mb-0">Hourly, monthly, or full-time contracts</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-primary"><CheckCircle2 size={24} /></div>
                    <div>
                      <h5 className="fw-bold">Quick Onboarding</h5>
                      <p className="text-muted mb-0">Developers ready to start in 48 hours</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-primary"><CheckCircle2 size={24} /></div>
                    <div>
                      <h5 className="fw-bold">Dedicated Resources</h5>
                      <p className="text-muted mb-0">Work exclusively on your project</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-primary"><CheckCircle2 size={24} /></div>
                    <div>
                      <h5 className="fw-bold">Daily Reporting</h5>
                      <p className="text-muted mb-0">Transparent progress updates</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Link to="/hire/java" className="btn btn-primary btn-lg px-4 me-3">Hire Developers</Link>
                <Link to="/profiles/java" className="btn btn-outline-secondary btn-lg px-4">View Profiles</Link>
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
                  <p className="text-white-50">We analyze requirements, define scope, and plan the project roadmap.</p>
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
                  <p className="text-white-50">We create wireframes, prototypes, and UI/UX designs for your approval.</p>
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
                  <p className="text-white-50">Our developers build your application using Agile sprints with regular demos.</p>
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
                  <p className="text-white-50">We deploy the application, provide training, and offer ongoing support.</p>
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
                    "CinqueLabs delivered a robust Java solution that scaled with our business. Highly recommended!"
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
                    "Their Java team helped us modernize our legacy systems and improve performance."
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
                    "CinqueLabs' Java developers integrated seamlessly with our team and delivered on time."
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
              <h2 className="display-5 fw-bold mb-4">Ready to Build Your Java Solution?</h2>
              <p className="lead mb-5">
                Let's discuss how our Java expertise can help you achieve your business goals.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/quote/java" className="btn btn-light btn-lg px-5 text-primary">Get a Free Quote</Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg px-5">Schedule a Call</Link>
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
              Answers to common questions about our Java development services
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne">
                      What types of Java projects do you deliver?
                    </button>
                  </h3>
                  <div id="faqOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We deliver enterprise apps, APIs, Android apps, cloud-native solutions, and more using Java's best frameworks.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo">
                      Can you modernize legacy Java systems?
                    </button>
                  </h3>
                  <div id="faqTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, we specialize in upgrading, refactoring, and migrating legacy Java applications to modern architectures.
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
                      Yes, we offer flexible support and maintenance packages for Java applications.
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
                      We follow best practices, code reviews, automated testing, and CI/CD pipelines for high-quality code.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqFive">
                      Can I hire dedicated Java developers?
                    </button>
                  </h3>
                  <div id="faqFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, you can hire our Java experts on a dedicated, full-time, or part-time basis.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
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

export default JavaPage;
