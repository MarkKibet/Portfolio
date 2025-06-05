import { CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    quote: "CinqueLabs delivered a robust Vue.js solution that scaled with our business. Highly recommended!",
    name: "Michael Johnson",
    role: "CTO, TechCorp",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "Their Vue team helped us modernize our legacy systems and improve performance.",
    name: "Sarah Williams",
    role: "Product Manager, RetailX",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "CinqueLabs' Vue developers integrated seamlessly with our team and delivered on time.",
    name: "David Chen",
    role: "Director of Engineering, FinTech Solutions",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const VueJSPage = () => {
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
      <section className="hero-section bg-dark text-white position-relative overflow-hidden py-5 py-lg-7">
        <div className="container position-relative z-10">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">
                Vue.js Development <span className="text-success">Services</span>
              </h1>
              <p className="fs-5 text-light mb-4">
                Build fast, modern, and maintainable web applications with CinqueLabs' Vue.js experts. We deliver scalable solutions for startups and enterprises.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-success btn-lg px-4 py-3 fw-semibold">
                  Get Started
                </button>
                <button className="btn btn-outline-light btn-lg px-4 py-3 fw-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-lg-6 position-relative">
              <img
                src="https://vuejs.org/images/logo.png"
                alt="Vue.js Development"
                className="w-100 rounded-3 shadow-lg img-fluid"
                style={{ background: "#fff", padding: "1rem", maxWidth: 320 }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-success opacity-10 rounded-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Vue Section */}
      <section className="py-6 py-lg-7 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="text-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                  alt="Vue Benefits"
                  className="img-fluid"
                  style={{ maxWidth: "200px" }}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <h2 className="display-5 fw-bold mb-4">Why Choose Vue.js for Your Project?</h2>
              <p className="fs-5 mb-4 text-muted">
                Vue.js is a progressive JavaScript framework for building user interfaces. Its simplicity, flexibility, and performance make it ideal for modern web apps.
              </p>
              <div className="row mt-5">
                {[
                  { title: "Reactive & Fast", desc: "Lightning-fast updates with Vue's reactivity system" },
                  { title: "Component-Based", desc: "Reusable, maintainable UI components" },
                  { title: "Easy Integration", desc: "Integrates seamlessly with existing projects" },
                  { title: "Strong Community", desc: "Vibrant ecosystem and active support" },
                ].map((item, i) => (
                  <div className="col-md-6 mb-4" key={i}>
                    <div className="d-flex">
                      <div className="me-4 text-success">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h5 className="fw-bold">{item.title}</h5>
                        <p className="mb-0 text-muted">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
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
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              End-to-end Vue.js solutions for web, mobile, and enterprise
            </p>
          </div>
          <div className="row g-4">
            {[
              { icon: "bi bi-code-slash", title: "Custom Vue Apps", desc: "Tailored Vue.js applications for your business." },
              { icon: "bi bi-phone", title: "Mobile & PWA", desc: "Progressive Web Apps and mobile solutions with Vue." },
              { icon: "bi bi-gear", title: "API Integration", desc: "RESTful and GraphQL API integration with Vue." },
              { icon: "bi bi-people", title: "Dedicated Teams", desc: "Hire our Vue.js experts as an extension of your team." },
            ].map((svc, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                  <div className="card-body p-4 text-center">
                    <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: "60px", height: "60px" }}>
                      <i className={svc.icon + " fs-4"}></i>
                    </div>
                    <h4 className="fw-bold mb-3">{svc.title}</h4>
                    <p className="text-muted">{svc.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-6 py-lg-7 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Vue.js Technology Stack</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              We use the best Vue.js frameworks and tools for every project
            </p>
          </div>
          <div className="row g-4">
            {[
              { icon: "bi bi-code-slash", title: "Core", items: ["Vue 3", "Vuex", "Vue Router", "Composition API"] },
              { icon: "bi bi-palette", title: "UI Libraries", items: ["Vuetify", "BootstrapVue", "Quasar", "Tailwind CSS"] },
              { icon: "bi bi-server", title: "Backend", items: ["Node.js", "Express", "Firebase", "GraphQL"] },
              { icon: "bi bi-tools", title: "DevOps & Testing", items: ["Jest", "Cypress", "Docker", "GitHub Actions"] },
            ].map((stack, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="bg-success bg-opacity-10 text-success rounded-3 d-inline-flex align-items-center justify-content-center mb-4" style={{ width: "80px", height: "80px" }}>
                      <i className={stack.icon + " fs-1"}></i>
                    </div>
                    <h4 className="fw-bold mb-3">{stack.title}</h4>
                    <ul className="list-unstyled text-muted">
                      {stack.items.map((item, j) => (
                        <li className="mb-2" key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
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
                alt="Hire Vue Developers"
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Hire Dedicated Vue.js Developers</h2>
              <p className="lead text-muted mb-5">
                Augment your team with our senior Vue.js developers for full-time or part-time projects.
              </p>
              <div className="row g-4">
                {[
                  { title: "Flexible Hiring Models", desc: "Hourly, monthly, or full-time contracts" },
                  { title: "Quick Onboarding", desc: "Developers ready to start in 48 hours" },
                  { title: "Dedicated Resources", desc: "Work exclusively on your project" },
                  { title: "Daily Reporting", desc: "Transparent progress updates" },
                ].map((item, i) => (
                  <div className="col-md-6" key={i}>
                    <div className="d-flex">
                      <div className="me-3 text-success"><CheckCircle2 size={24} /></div>
                      <div>
                        <h5 className="fw-bold">{item.title}</h5>
                        <p className="text-muted mb-0">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <button className="btn btn-success btn-lg px-4 me-3">Hire Developers</button>
                <button className="btn btn-outline-secondary btn-lg px-4">View Profiles</button>
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
            <p className="lead text-white-50 mx-auto" style={{ maxWidth: "700px" }}>
              A proven methodology that ensures quality and timely delivery
            </p>
          </div>
          <div className="row g-4">
            {[
              { step: "1", title: "Discovery", desc: "We analyze requirements, define scope, and plan the project roadmap." },
              { step: "2", title: "Design", desc: "We create wireframes, prototypes, and UI/UX designs for your approval." },
              { step: "3", title: "Development", desc: "Our developers build your application using Agile sprints with regular demos." },
              { step: "4", title: "Deployment", desc: "We deploy the application, provide training, and offer ongoing support." },
            ].map((proc, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card h-100 bg-dark border-secondary">
                  <div className="card-body text-center p-4">
                    <div className="bg-success bg-opacity-10 text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: "60px", height: "60px" }}>
                      <span className="fs-4 fw-bold">{proc.step}</span>
                    </div>
                    <h4 className="fw-bold mb-3 text-white">{proc.title}</h4>
                    <p className="text-white-50">{proc.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-6 py-lg-7 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">What Our Clients Say</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Trusted by startups and Fortune 500 companies worldwide
            </p>
          </div>
          <div className="row g-4">
            {testimonials.map((t, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex mb-3">
                      {[...Array(5)].map((_, j) => (
                        <i key={j} className="bi bi-star-fill text-warning me-1"></i>
                      ))}
                    </div>
                    <p className="mb-4">"{t.quote}"</p>
                    <div className="d-flex align-items-center">
                      <img src={t.image} className="rounded-circle me-3" width="50" height="50" alt={t.name} />
                      <div>
                        <h6 className="mb-0 fw-bold">{t.name}</h6>
                        <small className="text-muted">{t.role}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 py-lg-7 bg-success text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-4">Ready to Build with Vue.js?</h2>
              <p className="lead mb-5">
                Let's discuss how our Vue.js expertise can help you achieve your business goals.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button className="btn btn-light btn-lg px-5 text-success">Get a Free Quote</button>
                <button className="btn btn-outline-light btn-lg px-5">Schedule a Call</button>
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
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Answers to common questions about our Vue.js development services
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="accordion" id="faqAccordion">
                {[
                  {
                    q: "What types of Vue.js projects do you deliver?",
                    a: "We deliver SPAs, PWAs, dashboards, e-commerce, and enterprise apps using Vue.js and its ecosystem.",
                  },
                  {
                    q: "Can you migrate legacy apps to Vue.js?",
                    a: "Yes, we specialize in migrating legacy frontends to modern Vue.js architectures.",
                  },
                  {
                    q: "Do you provide ongoing support and maintenance?",
                    a: "Yes, we offer flexible support and maintenance packages for Vue.js applications.",
                  },
                  {
                    q: "How do you ensure code quality?",
                    a: "We follow best practices, code reviews, automated testing, and CI/CD pipelines for high-quality code.",
                  },
                  {
                    q: "Can I hire dedicated Vue.js developers?",
                    a: "Yes, you can hire our Vue.js experts on a dedicated, full-time, or part-time basis.",
                  },
                ].map((faq, i) => (
                  <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm" key={i}>
                    <h3 className="accordion-header">
                      <button className={`accordion-button fw-bold fs-5${i === 0 ? "" : " collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq${i}`}>
                        {faq.q}
                      </button>
                    </h3>
                    <div id={`faq${i}`} className={`accordion-collapse collapse${i === 0 ? " show" : ""}`} data-bs-parent="#faqAccordion">
                      <div className="accordion-body">{faq.a}</div>
                    </div>
                  </div>
                ))}
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
                  <button className="btn btn-success" type="submit">Subscribe</button>
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

export default VueJSPage;