import { CheckCircle2, Cpu, Database, Palette, Users, Cloud, Star } from "lucide-react";

const stats = [
  { value: "70+", label: "GCP Projects Delivered" },
  { value: "20+", label: "Certified GCP Engineers" },
  { value: "5+", label: "Years of GCP Experience" },
  { value: "99.9%", label: "Uptime Guarantee" },
];

const technologies = [
  { icon: <img src="https://cloud.google.com/images/social-icon-google-cloud-1200-630.png" alt="Google Cloud" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "Google Cloud" },
  { icon: <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="Docker" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "Docker" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt="Kubernetes" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "Kubernetes" },
  { icon: <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "Git" },
  { icon: <img src="https://www.terraform.io/assets/images/og-image-8b3e4f7d.png" alt="Terraform" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "Terraform" },
  { icon: <img src="https://www.python.org/static/community_logos/python-logo.png" alt="Python" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "Python" },
];

const testimonials = [
  {
    quote: "CinqueLabs migrated our infrastructure to GCP seamlessly. Their expertise and support were invaluable.",
    name: "Emily Carter",
    role: "CTO, InnovateTech",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5
  },
  {
    quote: "The GCP solution delivered by CinqueLabs improved our scalability and reliability. Highly recommended.",
    name: "James Smith",
    role: "Operations Manager, RetailCo",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 5
  },
  {
    quote: "CinqueLabs' GCP engineers are top-notch. Our cloud costs dropped and performance soared.",
    name: "Linda Johnson",
    role: "VP of Engineering, FinServe",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    rating: 5
  }
];

const GoogleCloudPage = () => {
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
        <div className="position-absolute top-0 end-0 h-100 w-50 opacity-20">
          <div className="position-absolute top-0 end-0 h-100 w-100 bg-cover bg-center" style={{ backgroundImage: "url('https://cloud.google.com/images/social-icon-google-cloud-1200-630.png')" }}></div>
        </div>
        <div className="container position-relative z-10">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">
                Google Cloud <span className="text-primary">Services</span>
              </h1>
              <p className="fs-5 text-light mb-4">
                Accelerate your digital transformation with CinqueLabs' Google Cloud Platform expertise. We deliver secure, scalable, and cost-effective cloud solutions for businesses of all sizes.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary btn-lg px-4 py-3 fw-semibold">
                  Get Started
                </button>
                <button className="btn btn-outline-light btn-lg px-4 py-3 fw-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-lg-6 position-relative">
              {/* <img
                src="https://cloud.google.com/images/social-icon-google-cloud-1200-630.png"
                alt="Google Cloud Services"
                className="w-100 rounded-3 shadow-lg img-fluid"
                style={{ background: "#fff", padding: "1rem", maxWidth: 320 }}
              /> */}
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-10 rounded-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row row-cols-2 row-cols-md-4 g-4 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="col">
                <div className="p-4 bg-white rounded shadow-sm h-100">
                  <div className="display-4 fw-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose GCP Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 text-center">
              <img
                src="https://cloud.google.com/images/social-icon-google-cloud-1200-630.png"
                alt="GCP Benefits"
                className="img-fluid"
                style={{ maxWidth: "200px" }}
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Why Choose Google Cloud Platform?</h2>
              <p className="fs-5 mb-4 text-muted">
                GCP offers world-class infrastructure, advanced analytics, and AI/ML services. Its global network, security, and cost-effectiveness make it a top choice for modern businesses.
              </p>
              <div className="row mt-5">
                {[
                  { title: "Global Network", desc: "Low-latency, high-availability infrastructure worldwide" },
                  { title: "AI & Analytics", desc: "Industry-leading AI, ML, and Big Data tools" },
                  { title: "Security & Compliance", desc: "Enterprise-grade security and compliance certifications" },
                  { title: "Cost Optimization", desc: "Flexible pricing and smart resource management" },
                ].map((item, i) => (
                  <div className="col-md-6 mb-4" key={i}>
                    <div className="d-flex">
                      <div className="me-4 text-primary">
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
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Google Cloud Services</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              End-to-end GCP solutions for migration, modernization, and innovation
            </p>
          </div>
          <div className="row g-4">
            {[
              { icon: <Cloud size={32} className="text-primary" />, title: "Cloud Consulting", desc: "Strategy, architecture, and roadmap for your GCP journey." },
              { icon: <Cpu size={32} className="text-primary" />, title: "Migration Services", desc: "Seamless migration of apps, data, and workloads to GCP." },
              { icon: <Database size={32} className="text-primary" />, title: "Managed GCP Services", desc: "Ongoing management, monitoring, and optimization." },
              { icon: <Users size={32} className="text-primary" />, title: "Dedicated GCP Teams", desc: "Hire certified GCP engineers for your projects." },
            ].map((svc, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: "60px", height: "60px" }}>
                      {svc.icon}
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

      {/* Why Choose Us Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4">Why CinqueLabs for GCP?</h2>
              <p className="lead mb-5">
                Our certified GCP engineers deliver secure, scalable, and innovative cloud solutions tailored to your business.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary btn-lg px-4">Get a Free Consultation</button>
                <button className="btn btn-outline-light btn-lg px-4">View Case Studies</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion" id="whyChooseUsAccordion">
                {[
                  { title: "Certified GCP Experts", content: "Our team consists of Google Cloud-certified engineers with deep industry experience." },
                  { title: "Agile & Transparent Process", content: "We follow Agile methodologies for flexibility, transparency, and rapid delivery." },
                  { title: "Quality & Security", content: "Secure coding, code reviews, and automated testing for robust solutions." },
                  { title: "Ongoing Support", content: "Maintenance and support to keep your GCP applications running smoothly." },
                ].map((item, idx) => (
                  <div className="accordion-item border-0 mb-3 rounded overflow-hidden" key={idx}>
                    <h3 className="accordion-header">
                      <button className={`accordion-button bg-white text-dark fw-bold fs-5${idx === 0 ? "" : " collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapseGCP${idx}`}>
                        {item.title}
                      </button>
                    </h3>
                    <div id={`collapseGCP${idx}`} className={`accordion-collapse collapse${idx === 0 ? " show" : ""}`} data-bs-parent="#whyChooseUsAccordion">
                      <div className="accordion-body bg-white">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our GCP Technology Stack</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Leveraging the latest Google Cloud technologies for robust solutions
            </p>
          </div>
          <div className="row g-4">
            {[
              { icon: <Cloud size={32} className="text-primary" />, title: "Core Services", items: ["Compute Engine", "App Engine", "Cloud Functions", "Cloud Run"] },
              { icon: <Palette size={32} className="text-primary" />, title: "DevOps & Tools", items: ["Cloud Build", "Kubernetes Engine", "Docker", "Terraform"] },
              { icon: <Database size={32} className="text-primary" />, title: "Data & AI", items: ["BigQuery", "Cloud SQL", "Firestore", "AI Platform"] },
              { icon: <Users size={32} className="text-primary" />, title: "Collaboration", items: ["Cloud IAM", "Cloud Monitoring", "Cloud Logging", "Cloud Storage"] },
            ].map((stack, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="bg-primary bg-opacity-10 text-primary rounded-3 d-inline-flex align-items-center justify-content-center mb-4" style={{ width: "80px", height: "80px" }}>
                      {stack.icon}
                    </div>
                    <h4 className="fw-bold mb-3">{stack.title}</h4>
                    <ul className="list-unstyled text-muted">
                      {stack.items.map((item, j) => (
                        <li className="mb-2" key={j}>
                          <CheckCircle2 size={16} className="me-2 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="text-center fs-5 text-muted mb-5">Our Technology Partners</h3>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 gap-md-5 flex-row">
            {technologies.map((tech, index) => (
              <div key={index} className="d-flex align-items-center gap-2 text-dark">
                {tech.icon}
                <span className="fw-medium" style={{fontSize: 16}}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Developers Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="Hire GCP Developers"
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Hire Dedicated GCP Developers</h2>
              <p className="lead text-muted mb-5">
                Augment your team with our certified Google Cloud engineers for full-time or part-time projects.
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
                      <div className="me-3 text-primary"><CheckCircle2 size={24} /></div>
                      <div>
                        <h5 className="fw-bold">{item.title}</h5>
                        <p className="text-muted mb-0">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <button className="btn btn-primary btn-lg px-4 me-3">Hire Developers</button>
                <button className="btn btn-outline-secondary btn-lg px-4">View Profiles</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our GCP Development Process</h2>
            <p className="lead text-white-50 mx-auto" style={{ maxWidth: "700px" }}>
              A proven methodology that ensures quality and timely delivery
            </p>
          </div>
          <div className="row g-4">
            {[
              { step: "1", title: "Discovery", desc: "We analyze requirements, define scope, and plan the project roadmap." },
              { step: "2", title: "Design", desc: "We create architecture diagrams, prototypes, and UI/UX designs for your approval." },
              { step: "3", title: "Development", desc: "Our engineers build your solution using Agile sprints with regular demos." },
              { step: "4", title: "Deployment", desc: "We deploy the application, provide training, and offer ongoing support." },
            ].map((proc, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card h-100 bg-dark border-secondary">
                  <div className="card-body text-center p-4">
                    <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: "60px", height: "60px" }}>
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

      {/* Case Studies Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our GCP Projects</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Discover how we've enabled businesses to thrive with Google Cloud
            </p>
          </div>
          <div className="row g-4">
            {[
              {
                title: "E-commerce Migration",
                description: "Migrated a high-traffic e-commerce site to GCP, improving performance and scalability.",
                image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["GCP", "Migration", "E-commerce"]
              },
              {
                title: "Real-time Analytics Platform",
                description: "Developed a real-time analytics solution on GCP for a leading retail client.",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["GCP", "Data Analytics", "Retail"]
              },
              {
                title: "SaaS Application Development",
                description: "Built a multi-tenant SaaS application on GCP, leveraging Kubernetes Engine.",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["GCP", "Kubernetes", "SaaS"]
              }
            ].map((project, index) => (
              <div key={index} className="col-md-4">
                <div className="bg-white rounded-3 overflow-hidden shadow-sm">
                  <img src={project.image} alt={project.title} className="w-100 h-50 object-cover" />
                  <div className="p-4">
                    <h3 className="fw-bold mb-2">{project.title}</h3>
                    <p className="text-muted mb-3">{project.description}</p>
                    <div className="d-flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="badge bg-secondary text-dark rounded-pill px-3 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <button className="btn btn-outline-primary btn-lg px-4 py-2 rounded-pill fw-semibold">
              View All Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">What Our Clients Say</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Trusted by startups and enterprises for Google Cloud solutions
            </p>
          </div>
          <div className="row g-4">
            {testimonials.map((t, i) => (
              <div key={i} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex mb-3">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} size={20} className="text-warning me-1" style={{fill: 'currentColor'}} />
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
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-5 fw-bold mb-4">
              Ready to Elevate Your Business with <span className="text-warning">Google Cloud</span>?
            </h2>
            <p className="lead mb-4">
              Contact us today to discuss your project requirements and get a free quote.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <button className="btn btn-light btn-lg px-4 py-2 rounded-pill fw-semibold text-primary">
                Get a Free Quote
              </button>
              <button className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill fw-semibold">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Frequently Asked Questions</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Common queries about our Google Cloud services
            </p>
          </div>
          <div className="col-lg-8 mx-auto">
            <div className="accordion" id="faqAccordion">
              {[
                {
                  question: "What is Google Cloud Platform?",
                  answer: "GCP is Google's suite of cloud computing services, offering compute, storage, AI, analytics, and more for businesses of all sizes."
                },
                {
                  question: "Can you migrate our existing infrastructure to GCP?",
                  answer: "Yes, we provide seamless migration services for applications, databases, and workloads to Google Cloud."
                },
                {
                  question: "Do you offer managed GCP services?",
                  answer: "Absolutely. We provide ongoing management, monitoring, optimization, and support for your GCP environment."
                },
                {
                  question: "How do you ensure security and compliance?",
                  answer: "We follow GCP best practices, implement IAM, encryption, and compliance controls to protect your data and workloads."
                },
                {
                  question: "Can I hire dedicated GCP engineers?",
                  answer: "Yes, you can hire our certified GCP experts on a dedicated, full-time, or part-time basis."
                }
              ].map((faq, index) => (
                <div key={index} className="accordion-item">
                  <h2 className="accordion-header" id={`faqHeading-${index}`}>
                    <button
                      className="accordion-button collapsed fw-bold fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faqCollapse-${index}`}
                      aria-expanded="false"
                      aria-controls={`faqCollapse-${index}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`faqCollapse-${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`faqHeading-${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-muted">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
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

export default GoogleCloudPage;