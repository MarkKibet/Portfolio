import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { CheckCircle2 } from "lucide-react";

const ReactJSPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="hero-section bg-dark text-white position-relative overflow-hidden py-5 py-lg-7">
        <div className="container position-relative z-index-2">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">React JS Development Services</h1>
              <p className="lead mb-5">
                Bring your business ideas to life with CinqueLabs' expert React development. We create high-performance, dynamic, and scalable applications that drive results.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button className="btn btn-primary btn-lg px-4 py-3">
                  Get Started
                </Button>
                <Button className="btn btn-outline-light btn-lg px-4 py-3">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img 
                  src="https://techifysolutions.com/wp-content/uploads/2022/11/ReactJS-1.webp" 
                  alt="ReactJS Development" 
                  className="img-fluid rounded-3 shadow-lg"
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-10 rounded-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-0 end-0 h-100 w-50 d-none d-lg-block">
          <div className="h-100 w-100 bg-cover bg-center opacity-20" 
               style={{backgroundImage: "url('https://techifysolutions.com/wp-content/uploads/2022/11/ReactJS-2.webp')"}}>
          </div>
        </div>
      </section>

      {/* Why Choose React Section */}
      <section className="py-6 py-lg-7 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="text-center">
                <img 
                  src="https://techifysolutions.com/wp-content/uploads/2022/11/pic-2.png" 
                  alt="React Benefits" 
                  className="img-fluid"
                  style={{maxWidth: '200px'}}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <h2 className="display-5 fw-bold mb-4">Why Choose React JS for Your Project?</h2>
              <p className="fs-5 mb-4 text-muted">
                ReactJS is a powerful, efficient, and scalable JavaScript library that's perfect for businesses of any size. Its component-based architecture makes it easy to build and expand applications as your needs grow.
              </p>
              <div className="row mt-5">
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="me-4 text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Virtual DOM</h5>
                      <p className="mb-0 text-muted">Ensures optimal performance and fast rendering</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="me-4 text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Component Reusability</h5>
                      <p className="mb-0 text-muted">Save time with modular components</p>
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
                      <p className="mb-0 text-muted">Access to thousands of libraries and tools</p>
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
                      <p className="mb-0 text-muted">Backed by Facebook and millions of developers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-6 py-lg-7">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our React JS Development Services</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              We deliver comprehensive React solutions tailored to your business needs
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-layout-wtf fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Custom React Development</h4>
                  <p className="text-muted">
                    Tailored React applications built from scratch to meet your specific business requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-phone fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3">React Native Apps</h4>
                  <p className="text-muted">
                    Cross-platform mobile applications with native performance using React Native.
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
                  <h4 className="fw-bold mb-3">Migration Services</h4>
                  <p className="text-muted">
                    Seamless migration of your legacy applications to modern React architecture.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-people fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Dedicated Teams</h4>
                  <p className="text-muted">
                    Hire our React experts to work as an extension of your team.
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
              <h2 className="display-5 fw-bold mb-4">Why Choose CinqueLabs for React Development?</h2>
              <p className="lead mb-5">
                We combine technical expertise with business acumen to deliver React solutions that drive growth.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button className="btn btn-primary btn-lg px-4">
                  Get a Free Consultation
                </Button>
                <Button className="btn btn-outline-light btn-lg px-4">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion" id="whyChooseUsAccordion">
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden">
                  <h3 className="accordion-header">
                    <button className="accordion-button bg-white text-dark fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      Certified React Experts
                    </button>
                  </h3>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#whyChooseUsAccordion">
                    <div className="accordion-body bg-white">
                      Our team consists of React-certified developers with 5+ years of experience building complex applications across industries.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed bg-white text-dark fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      Agile Development Process
                    </button>
                  </h3>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#whyChooseUsAccordion">
                    <div className="accordion-body bg-white">
                      We follow Agile methodologies to ensure transparency, flexibility, and continuous delivery of value.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed bg-white text-dark fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                      Quality Assurance
                    </button>
                  </h3>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#whyChooseUsAccordion">
                    <div className="accordion-body bg-white">
                      Rigorous testing at every stage ensures bug-free, high-performance applications that meet your standards.
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
                      We provide comprehensive maintenance and support to keep your application running smoothly post-launch.
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
            <h2 className="display-5 fw-bold mb-3">Our React Technology Stack</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              We work with the latest technologies to build modern, scalable applications
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-filetype-jsx fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Core Technologies</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">React 18+</li>
                    <li className="mb-2">TypeScript</li>
                    <li className="mb-2">Next.js</li>
                    <li className="mb-2">Gatsby</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-palette fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">UI Libraries</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">Material UI</li>
                    <li className="mb-2">Tailwind CSS</li>
                    <li className="mb-2">Chakra UI</li>
                    <li className="mb-2">Styled Components</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-database fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Backend Integration</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">Node.js</li>
                    <li className="mb-2">GraphQL</li>
                    <li className="mb-2">REST APIs</li>
                    <li className="mb-2">Firebase</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-phone fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Mobile</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">React Native</li>
                    <li className="mb-2">Expo</li>
                    <li className="mb-2">Native Modules</li>
                    <li className="mb-2">PWA</li>
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
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Hire React Developers" 
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Hire Dedicated React Developers</h2>
              <p className="lead text-muted mb-5">
                Augment your team with our senior React developers available for full-time or part-time engagements.
              </p>
              
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Flexible Hiring Models</h5>
                      <p className="text-muted mb-0">Choose from hourly, monthly, or full-time contracts</p>
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
                <Button className="btn btn-primary btn-lg px-4 me-3">
                  Hire Developers
                </Button>
                <Button className="btn btn-outline-secondary btn-lg px-4">
                  View Profiles
                </Button>
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
                    "CinqueLabs delivered an exceptional React application that exceeded our expectations. Their team was professional, communicative, and delivered ahead of schedule."
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
                    "The React Native app developed by CinqueLabs has been instrumental in our mobile strategy. Performance is flawless and user feedback has been overwhelmingly positive."
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
                    "We hired CinqueLabs' React developers to augment our team. They integrated seamlessly and brought valuable expertise that accelerated our project timeline."
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
              <h2 className="display-5 fw-bold mb-4">Ready to Build Your React Application?</h2>
              <p className="lead mb-5">
                Let's discuss how we can help bring your vision to life with our React development expertise.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Button className="btn btn-light btn-lg px-5 text-primary">
                  Get a Free Quote
                </Button>
                <Button className="btn btn-outline-light btn-lg px-5">
                  Schedule a Call
                </Button>
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
              Answers to common questions about our React development services
            </p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne">
                      How long does it take to develop a React application?
                    </button>
                  </h3>
                  <div id="faqOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      The timeline depends on the complexity of your project. A basic React application can be developed in 4-6 weeks, while more complex projects may take 3-6 months. During our discovery phase, we'll provide a detailed timeline based on your specific requirements.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo">
                      What's the difference between React and React Native?
                    </button>
                  </h3>
                  <div id="faqTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      React is a JavaScript library for building web applications, while React Native is a framework for building native mobile applications for iOS and Android. Both share the same core principles and component-based architecture, allowing developers to use similar skills for both web and mobile development.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqThree">
                      Do you provide ongoing maintenance and support?
                    </button>
                  </h3>
                  <div id="faqThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, we offer comprehensive maintenance and support packages tailored to your needs. Our support services include bug fixes, performance optimization, security updates, feature enhancements, and more. We can also provide dedicated developers for ongoing work.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqFour">
                      Can you work with our existing development team?
                    </button>
                  </h3>
                  <div id="faqFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Absolutely. We frequently collaborate with in-house teams, providing additional expertise and resources as needed. Our developers can integrate with your existing workflows, tools, and processes to ensure seamless collaboration.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqFive">
                      What industries do you serve?
                    </button>
                  </h3>
                  <div id="faqFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We've delivered React solutions across various industries including healthcare, finance, e-commerce, education, logistics, and more. Our team has the expertise to understand your industry-specific requirements and build solutions that address your unique challenges.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReactJSPage;