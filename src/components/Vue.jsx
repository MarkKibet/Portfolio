import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { CheckCircle2 } from "lucide-react";

const VueJSPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="hero-section bg-dark text-white position-relative overflow-hidden py-5 py-lg-7">
        <div className="container position-relative z-index-2">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">Vue.js Development Services</h1>
              <p className="lead mb-5">
                Craft progressive and incrementally adoptable web interfaces with CinqueLabs' expert Vue.js development. We build lightweight, high-performance, and versatile applications.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button className="btn btn-success btn-lg px-4 py-3">
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
                  src="https://vuejs.org/images/logo.png" 
                  alt="Vue.js Development" 
                  className="img-fluid rounded-3 shadow-lg"
                  style={{maxHeight: '350px', objectFit: 'contain'}}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-success opacity-10 rounded-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-0 end-0 h-100 w-50 d-none d-lg-block">
          <div className="h-100 w-100 bg-cover bg-center opacity-20" 
               style={{backgroundImage: "url('https://res.cloudinary.com/practicaldev/image/fetch/s--I4FWon9Y--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/s5ad2u0s3t8x704en90x.png')"}}>
          </div>
        </div>
      </section>

      {/* Why Choose Vue.js Section */}
      <section className="py-6 py-lg-7 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="text-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" 
                  alt="Vue.js Benefits" 
                  className="img-fluid"
                  style={{maxWidth: '180px'}}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <h2 className="display-5 fw-bold mb-4">Why Choose Vue.js for Your Project?</h2>
              <p className="fs-5 mb-4 text-muted">
                Vue.js is a progressive framework known for its simplicity, performance, and flexibility, making it an excellent choice for projects of all sizes.
              </p>
              <div className="row mt-5">
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="me-4 text-success">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Approachable Syntax</h5>
                      <p className="mb-0 text-muted">Easy to learn and integrate into existing projects</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="me-4 text-success">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">High Performance</h5>
                      <p className="mb-0 text-muted">Virtual DOM and optimized rendering for speed</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="me-4 text-success">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Versatile Ecosystem</h5>
                      <p className="mb-0 text-muted">Core library focus with adaptable official libraries</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="me-4 text-success">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Developer Friendly</h5>
                      <p className="mb-0 text-muted">Excellent documentation and tooling (Vue CLI, Vite)</p>
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
            <h2 className="display-5 fw-bold mb-3">Our Vue.js Development Services</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              We provide comprehensive Vue.js solutions to build modern and interactive web applications.
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-pencil-square fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Custom Vue.js Apps</h4>
                  <p className="text-muted">
                    Tailor-made Vue.js applications to fit your specific business needs and goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-layers fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Single Page Applications (SPAs)</h4>
                  <p className="text-muted">
                    Fast, responsive, and dynamic SPAs built with the Vue.js ecosystem.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-plug fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Vue.js Integration</h4>
                  <p className="text-muted">
                    Seamlessly integrate Vue.js into your existing projects or legacy systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4">
                  <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-people-fill fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Dedicated Vue.js Teams</h4>
                  <p className="text-muted">
                    Hire our skilled Vue.js developers to augment your development capacity.
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
              <h2 className="display-5 fw-bold mb-4">Why Partner with CinqueLabs for Vue.js?</h2>
              <p className="lead mb-5">
                We combine Vue.js expertise with a commitment to quality to deliver exceptional web solutions.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button className="btn btn-success btn-lg px-4">
                  Discuss Your Project
                </Button>
                <Button className="btn btn-outline-light btn-lg px-4">
                  See Our Portfolio
                </Button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion" id="whyChooseUsAccordionVue">
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden">
                  <h3 className="accordion-header">
                    <button className="accordion-button bg-white text-dark fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseVueOne">
                      Proficient Vue.js Developers
                    </button>
                  </h3>
                  <div id="collapseVueOne" className="accordion-collapse collapse show" data-bs-parent="#whyChooseUsAccordionVue">
                    <div className="accordion-body bg-white">
                      Our team has deep expertise in Vue.js, Vuex, Vue Router, Nuxt.js, and related technologies.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed bg-white text-dark fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseVueTwo">
                      Focus on User Experience
                    </button>
                  </h3>
                  <div id="collapseVueTwo" className="accordion-collapse collapse" data-bs-parent="#whyChooseUsAccordionVue">
                    <div className="accordion-body bg-white">
                      We build intuitive, engaging, and user-friendly interfaces that enhance user satisfaction.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed bg-white text-dark fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseVueThree">
                      Clean and Maintainable Code
                    </button>
                  </h3>
                  <div id="collapseVueThree" className="accordion-collapse collapse" data-bs-parent="#whyChooseUsAccordionVue">
                    <div className="accordion-body bg-white">
                      We write well-structured, documented, and testable code following Vue.js best practices.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 rounded overflow-hidden">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed bg-white text-dark fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseVueFour">
                      Timely Delivery & Support
                    </button>
                  </h3>
                  <div id="collapseVueFour" className="accordion-collapse collapse" data-bs-parent="#whyChooseUsAccordionVue">
                    <div className="accordion-body bg-white">
                      We ensure on-time project delivery and provide ongoing support and maintenance.
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
            <h2 className="display-5 fw-bold mb-3">Our Vue.js Technology Stack</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              Leveraging the best of the Vue.js ecosystem to build cutting-edge applications.
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-success bg-opacity-10 text-success rounded-3 d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-box-seam fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Core Vue.js</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">Vue 3+</li>
                    <li className="mb-2">Composition API</li>
                    <li className="mb-2">Vue Router</li>
                    <li className="mb-2">Pinia / Vuex</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-success bg-opacity-10 text-success rounded-3 d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-tools fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Build Tools & Frameworks</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">Vite</li>
                    <li className="mb-2">Nuxt.js</li>
                    <li className="mb-2">Vue CLI</li>
                    <li className="mb-2">TypeScript</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-success bg-opacity-10 text-success rounded-3 d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-palette2 fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">UI Libraries</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">Vuetify</li>
                    <li className="mb-2">Quasar Framework</li>
                    <li className="mb-2">Tailwind CSS</li>
                    <li className="mb-2">Element Plus</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-success bg-opacity-10 text-success rounded-3 d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-shield-check fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Testing & Deployment</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">Vitest / Jest</li>
                    <li className="mb-2">Cypress</li>
                    <li className="mb-2">Storybook</li>
                    <li className="mb-2">Netlify / Vercel</li>
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Hire Vue.js Developers" 
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Hire Dedicated Vue.js Developers</h2>
              <p className="lead text-muted mb-5">
                Scale your team with our experienced Vue.js developers, available for flexible engagements.
              </p>
              
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-success">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Skilled Vue.js Talent</h5>
                      <p className="text-muted mb-0">Access to pre-vetted Vue.js experts</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-success">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Seamless Integration</h5>
                      <p className="text-muted mb-0">Developers who adapt to your workflow</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-success">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Cost-Effective Solutions</h5>
                      <p className="text-muted mb-0">Flexible hiring models to suit your budget</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="me-3 text-success">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Full Transparency</h5>
                      <p className="text-muted mb-0">Regular communication and progress reports</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-5">
                <Button className="btn btn-success btn-lg px-4 me-3">
                  Hire Vue.js Devs
                </Button>
                <Button className="btn btn-outline-secondary btn-lg px-4">
                  View Developer Profiles
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
            <h2 className="display-5 fw-bold mb-3">Our Vue.js Development Workflow</h2>
            <p className="lead text-white-50 mx-auto" style={{maxWidth: '700px'}}>
              A streamlined process to deliver high-quality Vue.js applications efficiently.
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 bg-dark border-secondary">
                <div className="card-body text-center p-4">
                  <div className="bg-success bg-opacity-10 text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <span className="fs-4 fw-bold">1</span>
                  </div>
                  <h4 className="fw-bold mb-3 text-white">Discovery & Planning</h4>
                  <p className="text-white-50">
                    Understanding your vision, requirements, and project goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 bg-dark border-secondary">
                <div className="card-body text-center p-4">
                  <div className="bg-success bg-opacity-10 text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <span className="fs-4 fw-bold">2</span>
                  </div>
                  <h4 className="fw-bold mb-3 text-white">Design & Prototyping</h4>
                  <p className="text-white-50">
                    Creating wireframes, mockups, and interactive prototypes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 bg-dark border-secondary">
                <div className="card-body text-center p-4">
                  <div className="bg-success bg-opacity-10 text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <span className="fs-4 fw-bold">3</span>
                  </div>
                  <h4 className="fw-bold mb-3 text-white">Vue.js Development</h4>
                  <p className="text-white-50">
                    Building your application with clean code and agile practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 bg-dark border-secondary">
                <div className="card-body text-center p-4">
                  <div className="bg-success bg-opacity-10 text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                    <span className="fs-4 fw-bold">4</span>
                  </div>
                  <h4 className="fw-bold mb-3 text-white">QA & Launch</h4>
                  <p className="text-white-50">
                    Thorough testing, deployment, and post-launch support.
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
            <h2 className="display-5 fw-bold mb-3">Happy Clients, Successful Vue.js Projects</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              Discover how our Vue.js expertise has helped businesses achieve their goals.
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
                    "CinqueLabs developed a highly interactive SPA for us using Vue.js. Their team was skilled, responsive, and delivered a fantastic product."
                  </p>
                  <div className="d-flex align-items-center">
                    <img src="https://randomuser.me/api/portraits/women/35.jpg" className="rounded-circle me-3" width="50" height="50" alt="Client" />
                    <div>
                      <h6 className="mb-0 fw-bold">Alice Green</h6>
                      <small className="text-muted">Founder, StartupX</small>
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
                    "The Vue.js application built by CinqueLabs is incredibly fast and user-friendly. We've seen a significant improvement in user engagement."
                  </p>
                  <div className="d-flex align-items-center">
                    <img src="https://randomuser.me/api/portraits/men/47.jpg" className="rounded-circle me-3" width="50" height="50" alt="Client" />
                    <div>
                      <h6 className="mb-0 fw-bold">Mark Taylor</h6>
                      <small className="text-muted">Product Owner, Tech Solutions Inc.</small>
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
                    "We hired dedicated Vue.js developers from CinqueLabs, and they integrated perfectly with our team, contributing significantly to our project's success."
                  </p>
                  <div className="d-flex align-items-center">
                    <img src="https://randomuser.me/api/portraits/women/79.jpg" className="rounded-circle me-3" width="50" height="50" alt="Client" />
                    <div>
                      <h6 className="mb-0 fw-bold">Laura White</h6>
                      <small className="text-muted">Engineering Lead, Digital Ventures</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 py-lg-7 bg-success text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-4">Let's Build Your Next Vue.js Application</h2>
              <p className="lead mb-5">
                Contact us today to discuss your Vue.js project and how we can help you succeed.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Button className="btn btn-light btn-lg px-5 text-success">
                  Get Your Free Quote
                </Button>
                <Button className="btn btn-outline-light btn-lg px-5">
                  Talk to an Expert
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
            <h2 className="display-5 fw-bold mb-3">Vue.js Development FAQs</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              Common questions about our Vue.js development services.
            </p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="accordion" id="faqAccordionVuePage">
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqVueOnePage">
                      When should I choose Vue.js over other frameworks?
                    </button>
                  </h3>
                  <div id="faqVueOnePage" className="accordion-collapse collapse show" data-bs-parent="#faqAccordionVuePage">
                    <div className="accordion-body">
                      Vue.js is an excellent choice for projects requiring high performance, a gentle learning curve, and flexibility. It's great for SPAs, integrating into existing applications, or when you need a lightweight yet powerful solution.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqVueTwoPage">
                      Can Vue.js be used for large-scale applications?
                    </button>
                  </h3>
                  <div id="faqVueTwoPage" className="accordion-collapse collapse" data-bs-parent="#faqAccordionVuePage">
                    <div className="accordion-body">
                      Absolutely. With its component-based architecture, robust ecosystem (Vue Router, Pinia/Vuex), and tools like Nuxt.js for server-side rendering and static site generation, Vue.js is well-equipped for large and complex applications.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqVueThreePage">
                      What is the typical development timeline for a Vue.js project?
                    </button>
                  </h3>
                  <div id="faqVueThreePage" className="accordion-collapse collapse" data-bs-parent="#faqAccordionVuePage">
                    <div className="accordion-body">
                      The timeline varies depending on the project's scope and complexity. A simple Vue.js application might take a few weeks, while larger projects can take several months. We provide a detailed estimate after the discovery phase.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqVueFourPage">
                      Do you offer Vue.js migration services?
                    </button>
                  </h3>
                  <div id="faqVueFourPage" className="accordion-collapse collapse" data-bs-parent="#faqAccordionVuePage">
                    <div className="accordion-body">
                      Yes, we can help you migrate your existing application to Vue.js or upgrade your current Vue.js application to the latest version, ensuring a smooth transition and minimal disruption.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 rounded overflow-hidden shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqVueFivePage">
                      How do you handle state management in Vue.js applications?
                    </button>
                  </h3>
                  <div id="faqVueFivePage" className="accordion-collapse collapse" data-bs-parent="#faqAccordionVuePage">
                    <div className="accordion-body">
                      We use official state management libraries like Pinia (recommended for Vue 3) or Vuex for managing application state effectively, especially in larger applications. For simpler cases, Vue's built-in reactivity system or the Composition API can be sufficient.
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

export default VueJSPage;