import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { CheckCircle2 } from "lucide-react";

const AngularPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="hero-section bg-dark text-white position-relative overflow-hidden py-5 py-lg-7">
        <div className="container position-relative z-index-2">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">Angular Development Services</h1>
              <p className="lead mb-5">
                Build robust, enterprise-grade web applications with CinqueLabs' expert Angular development. We create scalable, maintainable, and feature-rich solutions.
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
                  src="https://www.etatvasoft.com/blog/wp-content/uploads/2023/02/angular-development-services-1.jpg" 
                  alt="Angular Development" 
                  className="img-fluid rounded-3 shadow-lg"
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-danger opacity-10 rounded-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-0 end-0 h-100 w-50 d-none d-lg-block">
          <div className="h-100 w-100 bg-cover bg-center opacity-20" 
               style={{backgroundImage: "url('https://miro.medium.com/v2/resize:fit:1200/1*s_L2P4v22hL70GCbs2EWgA.png')"}}>
          </div>
        </div>
      </section>

      {/* Why Choose Angular Section */}
      <section className="py-6 py-lg-7 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="text-center">
                <img 
                  src="https://angular.io/assets/images/logos/angular/angular.svg" 
                  alt="Angular Benefits" 
                  className="img-fluid"
                  style={{maxWidth: '200px'}}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <h2 className="display-5 fw-bold mb-4">Why Choose Angular for Your Project?</h2>
              <p className="fs-5 mb-4 text-muted">
                Angular is a comprehensive platform for building complex web applications. Its powerful features and strong backing by Google make it ideal for enterprise-level projects.
              </p>
              <div className="row mt-5">
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="me-4 text-danger">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">TypeScript-based</h5>
                      <p className="mb-0 text-muted">Enhanced code quality and maintainability</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="me-4 text-danger">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Comprehensive Framework</h5>
                      <p className="mb-0 text-muted">Routing, forms, HTTP client, and more out-of-the-box</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="me-4 text-danger">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Powerful CLI</h5>
                      <p className="mb-0 text-muted">Streamline development, testing, and deployment</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="me-4 text-danger">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Google Supported</h5>
                      <p className="mb-0 text-muted">Long-term support and active development</p>
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
            <h2 className="display-5 fw-bold mb-3">Our Angular Development Services</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              We deliver end-to-end Angular solutions to meet your business objectives
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  <div className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-braces-asterisk fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Custom Angular Development</h4>
                  <p className="text-muted">
                    Bespoke Angular applications designed to solve your unique business challenges.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  <div className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-window-split fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Enterprise Applications</h4>
                  <p className="text-muted">
                    Scalable and secure enterprise-grade applications built with Angular.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  <div className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-arrow-repeat fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Angular Migration</h4>
                  <p className="text-muted">
                    Modernize your legacy systems by migrating to the latest Angular versions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  <div className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-people fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Dedicated Angular Teams</h4>
                  <p className="text-muted">
                    Extend your team with our skilled Angular developers.
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
              <h2 className="display-5 fw-bold mb-4">Why Choose CinqueLabs for Angular Development?</h2>
              <p className="lead mb-5">
                We leverage Angular's power to build high-quality applications that deliver business value.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button className="btn btn-danger btn-lg px-4">
                  Get a Free Consultation
                </Button>
                <Button className="btn btn-outline-light btn-lg px-4">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion" id="whyChooseUsAccordionAngular">
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden">
                  <h3 className="accordion-header">
                    <button className="accordion-button bg-white text-dark fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAngularOne">
                      Experienced Angular Developers
                    </button>
                  </h3>
                  <div id="collapseAngularOne" className="accordion-collapse collapse show" data-bs-parent="#whyChooseUsAccordionAngular">
                    <div className="accordion-body bg-white">
                      Our developers are proficient in Angular, TypeScript, and modern web technologies, delivering robust solutions.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed bg-white text-dark fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAngularTwo">
                      Best Practices Implementation
                    </button>
                  </h3>
                  <div id="collapseAngularTwo" className="accordion-collapse collapse" data-bs-parent="#whyChooseUsAccordionAngular">
                    <div className="accordion-body bg-white">
                      We adhere to Angular best practices for code structure, performance, and scalability.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed bg-white text-dark fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAngularThree">
                      End-to-End Testing
                    </button>
                  </h3>
                  <div id="collapseAngularThree" className="accordion-collapse collapse" data-bs-parent="#whyChooseUsAccordionAngular">
                    <div className="accordion-body bg-white">
                      Comprehensive testing strategies including unit, integration, and e2e tests ensure application reliability.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 rounded overflow-hidden">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed bg-white text-dark fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAngularFour">
                      Post-Launch Support
                    </button>
                  </h3>
                  <div id="collapseAngularFour" className="accordion-collapse collapse" data-bs-parent="#whyChooseUsAccordionAngular">
                    <div className="accordion-body bg-white">
                      We offer ongoing support and maintenance to ensure your Angular application runs smoothly.
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
            <h2 className="display-5 fw-bold mb-3">Our Angular Technology Stack</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              Utilizing the latest Angular ecosystem tools and technologies for optimal results.
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-danger bg-opacity-10 text-danger rounded-3 d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-code-slash fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Core Angular</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">Angular 16+</li>
                    <li className="mb-2">TypeScript</li>
                    <li className="mb-2">RxJS</li>
                    <li className="mb-2">Angular CLI</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-danger bg-opacity-10 text-danger rounded-3 d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-palette fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">UI Frameworks</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">Angular Material</li>
                    <li className="mb-2">Bootstrap</li>
                    <li className="mb-2">PrimeNG</li>
                    <li className="mb-2">Tailwind CSS</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-danger bg-opacity-10 text-danger rounded-3 d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-server fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">State Management</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">NgRx</li>
                    <li className="mb-2">NGXS</li>
                    <li className="mb-2">Akita</li>
                    <li className="mb-2">Services & Subjects</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-danger bg-opacity-10 text-danger rounded-3 d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-tools fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Testing & Tools</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">Jasmine & Karma</li>
                    <li className="mb-2">Protractor/Cypress</li>
                    <li className="mb-2">Storybook</li>
                    <li className="mb-2">Nx Workspaces</li>
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
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Hire Angular Developers" 
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Hire Dedicated Angular Developers</h2>
              <p className="lead text-muted mb-5">
                Strengthen your team with our expert Angular developers for your project needs.
              </p>
              
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-danger">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Flexible Engagement Models</h5>
                      <p className="text-muted mb-0">Hourly, monthly, or project-based contracts</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-danger">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Rapid Onboarding</h5>
                      <p className="text-muted mb-0">Get developers integrated quickly</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-danger">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Focused Resources</h5>
                      <p className="text-muted mb-0">Developers dedicated to your project's success</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-danger">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Transparent Communication</h5>
                      <p className="text-muted mb-0">Regular updates and progress tracking</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-5">
                <Button className="btn btn-danger btn-lg px-4 me-3">
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
            <h2 className="display-5 fw-bold mb-3">Our Angular Development Process</h2>
            <p className="lead text-white-50 mx-auto" style={{maxWidth: '700px'}}>
              A structured approach ensuring high-quality Angular applications delivered on time.
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 bg-dark border-secondary">
                <div className="card-body text-center p-4">
                  <div className="bg-danger bg-opacity-10 text-danger rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <span className="fs-4 fw-bold">1</span>
                  </div>
                  <h4 className="fw-bold mb-3 text-white">Requirement Analysis</h4>
                  <p className="text-white-50">
                    Understanding your needs, defining project scope, and creating a detailed plan.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 bg-dark border-secondary">
                <div className="card-body text-center p-4">
                  <div className="bg-danger bg-opacity-10 text-danger rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <span className="fs-4 fw-bold">2</span>
                  </div>
                  <h4 className="fw-bold mb-3 text-white">UI/UX Design</h4>
                  <p className="text-white-50">
                    Crafting intuitive and engaging user interfaces and experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 bg-dark border-secondary">
                <div className="card-body text-center p-4">
                  <div className="bg-danger bg-opacity-10 text-danger rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <span className="fs-4 fw-bold">3</span>
                  </div>
                  <h4 className="fw-bold mb-3 text-white">Agile Development</h4>
                  <p className="text-white-50">
                    Iterative development cycles with regular feedback and demos.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 bg-dark border-secondary">
                <div className="card-body text-center p-4">
                  <div className="bg-danger bg-opacity-10 text-danger rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <span className="fs-4 fw-bold">4</span>
                  </div>
                  <h4 className="fw-bold mb-3 text-white">Testing & Deployment</h4>
                  <p className="text-white-50">
                    Rigorous testing followed by smooth deployment and post-launch support.
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
            <h2 className="display-5 fw-bold mb-3">Client Success Stories with Angular</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              Hear from businesses that have thrived with our Angular solutions.
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
                    "CinqueLabs built a complex enterprise dashboard for us using Angular. The performance and scalability are outstanding. Highly recommended!"
                  </p>
                  <div className="d-flex align-items-center">
                    <img src="https://randomuser.me/api/portraits/men/34.jpg" className="rounded-circle me-3" width="50" height="50" alt="Client" />
                    <div>
                      <h6 className="mb-0 fw-bold">Johnathan Doe</h6>
                      <small className="text-muted">CEO, Enterprise Solutions Ltd.</small>
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
                    "The Angular PWA developed by CinqueLabs has significantly improved our user engagement. Their team's expertise in Angular is top-notch."
                  </p>
                  <div className="d-flex align-items-center">
                    <img src="https://randomuser.me/api/portraits/women/46.jpg" className="rounded-circle me-3" width="50" height="50" alt="Client" />
                    <div>
                      <h6 className="mb-0 fw-bold">Jane Smith</h6>
                      <small className="text-muted">Marketing Head, Innovatech</small>
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
                    "We partnered with CinqueLabs to migrate our old system to Angular. The process was smooth, and the new application is much more efficient."
                  </p>
                  <div className="d-flex align-items-center">
                    <img src="https://randomuser.me/api/portraits/men/78.jpg" className="rounded-circle me-3" width="50" height="50" alt="Client" />
                    <div>
                      <h6 className="mb-0 fw-bold">Robert Brown</h6>
                      <small className="text-muted">IT Manager, Global Corp</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 py-lg-7 bg-danger text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-4">Start Your Angular Project Today!</h2>
              <p className="lead mb-5">
                Discuss your project requirements with our Angular experts and get a tailored solution.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Button className="btn btn-light btn-lg px-5 text-danger">
                  Request a Quote
                </Button>
                <Button className="btn btn-outline-light btn-lg px-5">
                  Book a Consultation
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
            <h2 className="display-5 fw-bold mb-3">Angular Development FAQs</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              Find answers to your questions about our Angular services.
            </p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="accordion" id="faqAccordionAngularPage">
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqAngularOnePage">
                      What types of applications can be built with Angular?
                    </button>
                  </h3>
                  <div id="faqAngularOnePage" className="accordion-collapse collapse show" data-bs-parent="#faqAccordionAngularPage">
                    <div className="accordion-body">
                      Angular is versatile and can be used to build a wide range of applications, including Single Page Applications (SPAs), Progressive Web Apps (PWAs), enterprise web applications, dashboards, and complex data-driven platforms.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqAngularTwoPage">
                      How does Angular ensure application performance?
                    </button>
                  </h3>
                  <div id="faqAngularTwoPage" className="accordion-collapse collapse" data-bs-parent="#faqAccordionAngularPage">
                    <div className="accordion-body">
                      Angular employs several strategies for performance, including Ahead-of-Time (AOT) compilation, lazy loading of modules, efficient change detection, and server-side rendering (SSR) with Angular Universal. We also follow best practices for optimization.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqAngularThreePage">
                      Is Angular suitable for large-scale enterprise projects?
                    </button>
                  </h3>
                  <div id="faqAngularThreePage" className="accordion-collapse collapse" data-bs-parent="#faqAccordionAngularPage">
                    <div className="accordion-body">
                      Yes, Angular is exceptionally well-suited for large-scale enterprise applications due to its robust architecture, TypeScript integration for better code maintainability, modularity, comprehensive CLI, and strong support for testing and scalability.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqAngularFourPage">
                      What is the cost of developing an Angular application?
                    </button>
                  </h3>
                  <div id="faqAngularFourPage" className="accordion-collapse collapse" data-bs-parent="#faqAccordionAngularPage">
                    <div className="accordion-body">
                      The cost varies based on project complexity, features, design requirements, and development time. We provide a detailed estimate after understanding your specific needs during the initial consultation.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqAngularFivePage">
                      How do you ensure the quality of Angular code?
                    </button>
                  </h3>
                  <div id="faqAngularFivePage" className="accordion-collapse collapse" data-bs-parent="#faqAccordionAngularPage">
                    <div className="accordion-body">
                      We follow industry best practices, conduct regular code reviews, use linters and formatters, write comprehensive unit and end-to-end tests, and adhere to Angular's style guide to ensure high-quality, maintainable code.
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

export default AngularPage;
