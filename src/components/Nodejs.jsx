import { useEffect } from 'react';
import { FaBolt, FaExpandArrowsAlt, FaCode, FaLayerGroup, FaMicrochip, FaShieldAlt, FaCheckCircle, FaArrowDown } from 'react-icons/fa';

const NodejsPage = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Animation for tech cards
    const techCards = document.querySelectorAll('.tech-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    techCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]');
    if (emailInput.value) {
      alert('Thank you for subscribing to our newsletter!');
      emailInput.value = '';
    }
  };

  return (
    <div className="nodejs-tech-stack">

      {/* Hero Section */}
      <header className="hero-section bg-primary text-white py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">CinqueLabs' Node.js Expertise</h1>
              <p className="lead mb-4">At CinqueLabs, we leverage the power of Node.js to build scalable, high-performance applications with cutting-edge JavaScript technologies, delivering robust solutions for your business.</p>
              <a href="#contact" className="btn btn-light btn-lg me-2">Talk to Our Experts</a>
              <a href="#stack" className="btn btn-outline-light btn-lg">Explore Our Stack</a>
            </div>
            <div className="col-lg-6">
              <img 
                src="/pexels-realtoughcandy-11035380.jpg" 
                alt="Node.js Technology Stack" 
                className="img-fluid rounded shadow" 
              />
            </div>
          </div>
        </div>
      </header>

      {/* Why Node.js Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why CinqueLabs Chooses Node.js</h2>
            <p className="lead text-muted">Node.js is a cornerstone of our development strategy at CinqueLabs, enabling us to build efficient and modern web applications.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle mx-auto mb-4">
                    <FaBolt className="fa-2x" />
                  </div>
                  <h4 className="mb-3">High Performance</h4>
                  <p className="text-muted">Node.js's non-blocking I/O and event-driven architecture deliver exceptional performance for I/O-heavy applications.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle mx-auto mb-4">
                    <FaExpandArrowsAlt className="fa-2x" />
                  </div>
                  <h4 className="mb-3">Scalability</h4>
                  <p className="text-muted">Easily scale your applications horizontally and vertically to meet growing user demands.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle mx-auto mb-4">
                    <FaCode className="fa-2x" />
                  </div>
                  <h4 className="mb-3">Fullstack JavaScript</h4>
                  <p className="text-muted">Use JavaScript on both client and server for more efficient development and code sharing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">CinqueLabs' Node.js Technology Stack</h2>
            <p className="lead text-muted">At CinqueLabs, we utilize a carefully selected suite of tools and frameworks to achieve optimal results with Node.js.</p>
          </div>
          
          <div className="row g-4 mb-5">
            <TechCard 
              imgSrc="/nodejs.jpeg" 
              title="Node.js" 
              description="JavaScript runtime built on Chrome's V8 engine for server-side development."
              badgeText="Core Technology"
              badgeColor="primary"
            />
            <TechCard 
              imgSrc="/expressjs.png" 
              title="Express.js" 
              description="Minimal and flexible Node.js web application framework."
              badgeText="Backend"
              badgeColor="success"
            />
            <TechCard 
              imgSrc="/mongoDB.png" 
              title="MongoDB" 
              description="NoSQL database with flexible schema design and horizontal scaling."
              badgeText="Database"
              badgeColor="info"
            />
            <TechCard 
              imgSrc="/react.png" 
              title="React" 
              description="JavaScript library for building interactive user interfaces."
              badgeText="Frontend"
              badgeColor="warning"
            />
          </div>
          
          <div className="row g-4">
            <TechCard 
              imgSrc="/typescript.png" 
              title="TypeScript" 
              description="Typed superset of JavaScript that compiles to plain JavaScript."
              badgeText="Language"
              badgeColor="primary"
            />
            <TechCard 
              imgSrc="/nest.png" 
              title="NestJS" 
              description="Progressive Node.js framework for building efficient, reliable applications."
              badgeText="Backend"
              badgeColor="success"
            />
            <TechCard 
              imgSrc="/postgreSQL.jpeg" 
              title="PostgreSQL" 
              description="Powerful, open source object-relational database system."
              badgeText="Database"
              badgeColor="info"
            />
            <TechCard 
              imgSrc="/docker.png" 
              title="Docker" 
              description="Containerization platform for packaging and deploying applications."
              badgeText="DevOps"
              badgeColor="dark"
            />
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">CinqueLabs' Approach to Modern, Scalable Node.js Architecture</h2>
              <p className="lead mb-4">CinqueLabs implements industry best practices in application architecture. We design Node.js solutions that are not only powerful today but are also built to scale seamlessly with your evolving business needs.</p>
              
              <FeatureItem 
                icon={<FaLayerGroup />}
                title="Layered Architecture"
                description="Separation of concerns with clear boundaries between presentation, business logic, and data access layers."
              />
              
              <FeatureItem 
                icon={<FaMicrochip />}
                title="Microservices Ready"
                description="Design that allows easy transition to microservices when your application needs to scale."
              />
              
              <FeatureItem 
                icon={<FaShieldAlt />}
                title="Security First"
                description="Built-in security measures at every layer of the application."
              />
            </div>
            <div className="col-lg-6">
              <div className="architecture-diagram p-4 bg-white rounded shadow-sm">
                <div className="text-center mb-4">
                  <h5 className="fw-bold">CinqueLabs' Typical Node.js Application Architecture</h5>
                </div>
                <div className="diagram-container">
                  <div className="diagram-layer client-layer text-center p-2 mb-2 rounded">
                    <h6 className="m-0">Client Layer</h6>
                    <small>React, Angular, Vue.js</small>
                  </div>
                  <div className="text-center my-2">
                    <FaArrowDown />
                  </div>
                  <div className="diagram-layer api-layer text-center p-2 mb-2 rounded">
                    <h6 className="m-0">API Layer</h6>
                    <small>Express.js, REST/GraphQL</small>
                  </div>
                  <div className="text-center my-2">
                    <FaArrowDown />
                  </div>
                  <div className="diagram-layer service-layer text-center p-2 mb-2 rounded">
                    <h6 className="m-0">Service Layer</h6>
                    <small>Business Logic, Domain Services</small>
                  </div>
                  <div className="text-center my-2">
                    <FaArrowDown />
                  </div>
                  <div className="diagram-layer data-layer text-center p-2 rounded">
                    <h6 className="m-0">Data Access Layer</h6>
                    <small>MongoDB, PostgreSQL, Redis</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">CinqueLabs' Node.js Success Stories</h2>
            <p className="lead text-muted">Discover how CinqueLabs has empowered businesses by delivering impactful Node.js solutions.</p>
          </div>
          
          <div className="row g-4">
            <CaseStudyCard 
              imgSrc="https://via.placeholder.com/600x400?text=E-commerce"
              category="Retail"
              categoryColor="primary"
              title="E-commerce Platform"
              description="Scaled a retail platform to handle 10,000+ concurrent users during peak seasons using Node.js microservices."
              features={[
                "300% performance improvement",
                "99.99% uptime",
                "Reduced server costs by 40%"
              ]}
            />
            <CaseStudyCard 
              imgSrc="https://via.placeholder.com/600x400?text=FinTech"
              category="Finance"
              categoryColor="success"
              title="FinTech Application"
              description="Built a real-time trading platform processing 5,000+ transactions per second with Node.js and WebSockets."
              features={[
                "2ms average response time",
                "PCI-DSS compliant",
                "24/7 monitoring"
              ]}
            />
            <CaseStudyCard 
              imgSrc="https://via.placeholder.com/600x400?text=Social+Network"
              category="Social Media"
              categoryColor="info"
              title="Social Network"
              description="Developed a social networking app supporting 1M+ monthly active users with Node.js and React."
              features={[
                "Real-time notifications",
                "Personalized feeds",
                "Content moderation"
              ]}
            />
          </div>
          
          <div className="text-center mt-5">
            <a href="/case-studies" className="btn btn-outline-primary btn-lg">View All Case Studies</a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-4">Ready to Build Your Next Node.js Application with CinqueLabs?</h2>
              <p className="lead mb-5">The CinqueLabs team of Node.js experts is ready to partner with you to design, develop, and deploy your next high-performance application.</p>
              <a href="/contact" className="btn btn-light btn-lg me-3">Get a Free Consultation</a>
              <a href="/case-studies" className="btn btn-outline-light btn-lg">See Our Work</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer handleNewsletterSubmit={handleNewsletterSubmit} />
    </div>
  );
};

// Reusable Components
const TechCard = ({ imgSrc, title, description, badgeText, badgeColor }) => (
  <div className="col-md-6 col-lg-3">
    <div className="card tech-card h-100">
      <div className="card-body text-center p-4">
        <img src={imgSrc} alt={title} className="img-fluid mb-3" width="80" />
        <h4>{title}</h4>
        <p className="text-muted">{description}</p>
        <div className={`badge bg-${badgeColor} bg-opacity-10 text-${badgeColor}`}>{badgeText}</div>
      </div>
    </div>
  </div>
);

const FeatureItem = ({ icon, title, description }) => (
  <div className="d-flex mb-3">
    <div className="me-4">
      <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle mb-2">
        {icon}
      </div>
    </div>
    <div>
      <h4 className="mb-2">{title}</h4>
      <p className="text-muted mb-0">{description}</p>
    </div>
  </div>
);

const CaseStudyCard = ({ imgSrc, category, categoryColor, title, description, features }) => (
  <div className="col-md-4">
    <div className="card h-100 border-0 shadow-sm overflow-hidden">
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <div className={`badge bg-${categoryColor} mb-2`}>{category}</div>
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <ul className="list-unstyled">
          {features.map((feature, index) => (
            <li key={index} className="mb-1">
              <FaCheckCircle className="text-primary me-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Footer = ({ handleNewsletterSubmit }) => (
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
);

export default NodejsPage;