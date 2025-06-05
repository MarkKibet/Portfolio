import { CheckCircle2, Cpu, Database, Palette, Users, Cloud, ChevronDown, Star } from "lucide-react";

const stats = [
  { value: "100+", label: "AWS Projects Delivered" },
  { value: "30+", label: "Certified AWS Engineers" },
  { value: "5+", label: "Years of AWS Experience" },
  { value: "99.9%", label: "Uptime Guarantee" },
];

const technologies = [
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonaws.svg"
        alt="AWS"
        className="h-5"
        style={{ height: 32, width: 32, objectFit: "contain" }}
      />
    ),
    name: "AWS",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/docker.svg"
        alt="Docker"
        className="h-5"
        style={{ height: 32, width: 32, objectFit: "contain" }}
      />
    ),
    name: "Docker",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/kubernetes.svg"
        alt="Kubernetes"
        className="h-5"
        style={{ height: 32, width: 32, objectFit: "contain" }}
      />
    ),
    name: "Kubernetes",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/git.svg"
        alt="Git"
        className="h-5"
        style={{ height: 32, width: 32, objectFit: "contain" }}
      />
    ),
    name: "Git",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/terraform.svg"
        alt="Terraform"
        className="h-5"
        style={{ height: 32, width: 32, objectFit: "contain" }}
      />
    ),
    name: "Terraform",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gnubash.svg"
        alt="Bash"
        className="h-5"
        style={{ height: 32, width: 32, objectFit: "contain" }}
      />
    ),
    name: "Bash",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/python.svg"
        alt="Python"
        className="h-5"
        style={{ height: 32, width: 32, objectFit: "contain" }}
      />
    ),
    name: "Python",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazondynamodb.svg"
        alt="DynamoDB"
        className="h-5"
        style={{ height: 32, width: 32, objectFit: "contain" }}
      />
    ),
    name: "DynamoDB",
  },
];

const AWSPage = () => {
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
      <section className="hero-section bg-dark text-white position-relative overflow-hidden py-5 py-lg-6">
        <div className="position-absolute top-0 end-0 h-100 w-50 opacity-20">
          <div className="position-absolute top-0 end-0 h-100 w-100 bg-cover bg-fit" style={{ backgroundImage: "url('/aws.jpeg')" }}></div>
        </div>
        
        <div className="container position-relative z-10">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">
                AWS Cloud <span className="text-primary">Services</span>
              </h1>
              <p className="fs-5 text-light mb-4">
                Leverage the power of AWS with CinqueLabs. Our expert AWS engineers deliver scalable, reliable, and secure cloud solutions tailored to your business needs.
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
                src="/aws.jpeg" 
                alt="AWS Cloud Services" 
                className="w-100 rounded-3 shadow-lg img-fluid"
              /> */}
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-10 rounded-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-3 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="p-4 bg-white rounded-3 shadow-sm hover-shadow">
                  <div className="fs-1 fw-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AWS Section */}
      <section className="py-5 py-lg-6 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 text-center">
              <img 
                src="/aws2.png"
                alt="AWS Benefits" 
                className="img-fluid max-w-xs-lg"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">
                Why Choose <span className="text-primary">AWS</span> for Your Cloud Solutions?
              </h2>
              <p className="fs-5 text-muted mb-4">
                AWS is the world's most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. With AWS, you can benefit from a scalable, reliable, and low-cost infrastructure platform in the cloud.
              </p>
              
              <div className="row g-3">
                {[
                  { title: "Scalability", description: "Easily scale your infrastructure up or down based on demand" },
                  { title: "Cost-Effective", description: "Pay only for what you use with no upfront expenses" },
                  { title: "Flexibility", description: "Choose the operating system, programming language, and software stack" },
                  { title: "Security", description: "Robust security measures to protect your data and applications" },
                ].map((feature, index) => (
                  <div key={index} className="col-md-6 d-flex">
                    <div className="me-3 mt-1 text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold fs-5 mb-1">{feature.title}</h5>
                      <p className="text-muted">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-5 py-lg-6 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              Our <span className="text-primary">AWS</span> Cloud Services
            </h2>
            <p className="fs-5 text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Comprehensive AWS solutions to accelerate your cloud journey
            </p>
          </div>
          
          <div className="row g-4">
            {[
              { 
                icon: <Cloud size={32} className="text-primary" />,
                title: "AWS Consulting",
                description: "Expert guidance to help you design and implement effective cloud strategies."
              },
              { 
                icon: <Cpu size={32} className="text-primary" />,
                title: "Serverless Solutions",
                description: "Build and run applications without thinking about servers with AWS Lambda."
              },
              { 
                icon: <Database size={32} className="text-primary" />,
                title: "Database Services",
                description: "Managed database services for MySQL, PostgreSQL, Oracle, and more."
              },
              { 
                icon: <Users size={32} className="text-primary" />,
                title: "Managed Services",
                description: "Comprehensive management of your AWS resources for optimal performance."
              },
            ].map((service, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="bg-white p-4 rounded-3 shadow-sm hover-shadow border border-light border-primary-hover h-100">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mb-4">
                    {service.icon}
                  </div>
                  <h4 className="fw-bold fs-4 mb-3">{service.title}</h4>
                  <p className="text-muted">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 py-lg-6 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
              <h2 className="display-5 fw-bold mb-4">
                Why Choose <span className="text-primary">CinqueLabs</span> for AWS Cloud Services?
              </h2>
              <p className="fs-5 text-light mb-4">
                Our deep expertise in AWS, combined with our commitment to your success, makes us the ideal partner for your cloud journey.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary px-4 py-3 fs-5 fw-semibold">
                  Get a Free Consultation
                </button>
                <button className="btn btn-outline-light px-4 py-3 fs-5 fw-semibold">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion" id="whyChooseUsAccordion">
                {[
                  { 
                    title: "Certified AWS Experts", 
                    content: "Our team consists of AWS-certified engineers with extensive experience in designing and managing cloud solutions." 
                  },
                  { 
                    title: "Proven Methodologies", 
                    content: "We use industry best practices and frameworks to ensure successful project delivery." 
                  },
                  { 
                    title: "Customer-Centric Approach", 
                    content: "We focus on understanding your business needs and aligning our solutions accordingly." 
                  },
                  { 
                    title: "End-to-End Services", 
                    content: "From consulting and migration to managed services, we offer a complete suite of AWS solutions." 
                  },
                ].map((item, index) => (
                  <div key={index} className="accordion-item bg-gray-800 mb-3 border-0 rounded-3 overflow-hidden">
                    <h3 className="accordion-header">
                      <button 
                        className="accordion-button bg-gray-800 text-white fw-bold fs-5" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#collapse${index}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`collapse${index}`}
                      >
                        {item.title}
                      </button>
                    </h3>
                    <div 
                      id={`collapse${index}`} 
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      data-bs-parent="#whyChooseUsAccordion"
                    >
                      <div className="accordion-body text-light">
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
      <section className="py-5 py-lg-6 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              Our AWS <span className="text-primary">Technology Stack</span>
            </h2>
            <p className="fs-5 text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Leveraging the latest AWS services and tools to deliver robust cloud solutions
            </p>
          </div>
          
          <div className="row g-4">
            {[
              { 
                icon: <Cloud size={32} className="text-primary" />,
                title: "Compute Services",
                items: ["EC2", "Lambda", "ECS", "Elastic Beanstalk"]
              },
              { 
                icon: <Database size={32} className="text-primary" />,
                title: "Storage Services",
                items: ["S3", "EBS", "Glacier", "Storage Gateway"]
              },
              { 
                icon: <Palette size={32} className="text-primary" />,
                title: "Networking Services",
                items: ["VPC", "CloudFront", "Route 53", "API Gateway"]
              },
              { 
                icon: <Users size={32} className="text-primary" />,
                title: "Security & Identity",
                items: ["IAM", "Cognito", "GuardDuty", "Inspector"]
              },
            ].map((stack, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="bg-light p-4 rounded-3 border border-light border-primary-hover h-100">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center mb-4">
                    {stack.icon}
                  </div>
                  <h4 className="fw-bold fs-4 mb-3">{stack.title}</h4>
                  <ul className="list-unstyled">
                    {stack.items.map((item, i) => (
                      <li key={i} className="d-flex align-items-center text-muted mb-2">
                        <CheckCircle2 size={16} className="me-2 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-4 bg-light">
        <div className="container">
          <h3 className="text-center text-muted mb-4">Our Technology Partners</h3>
          <div
            className="d-flex flex-wrap justify-content-center align-items-center gap-3"
            style={{ flexWrap: "nowrap", overflowX: "auto" }}
          >
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="d-flex align-items-center gap-2 text-dark px-2 py-1 rounded hover-shadow"
                style={{
                  minWidth: 90,
                  transition: "background 0.2s, box-shadow 0.2s",
                  cursor: "pointer",
                  background: "white",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  border: "1px solid #f0f0f0",
                  height: 44,
                }}
                title={tech.name}
              >
                {tech.icon}
                <span className="fw-medium" style={{ fontSize: 15 }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Developers Section */}
      <section className="py-5 py-lg-6">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
              <img 
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Hire AWS Developers" 
                className="w-100 rounded-3 shadow-lg img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">
                Hire Dedicated <span className="text-primary">AWS Developers</span>
              </h2>
              <p className="fs-5 text-muted mb-4">
                Augment your team with our senior AWS developers available for full-time or part-time engagements.
              </p>
              
              <div className="row g-3 mb-4">
                {[
                  { title: "Flexible Hiring Models", description: "Choose from hourly, monthly, or full-time contracts" },
                  { title: "Quick Onboarding", description: "Developers ready to start in 48 hours" },
                  { title: "Dedicated Resources", description: "Work exclusively on your project" },
                  { title: "Daily Reporting", description: "Transparent progress updates" },
                ].map((item, index) => (
                  <div key={index} className="col-md-6 d-flex">
                    <div className="me-3 mt-1 text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold fs-5 mb-1">{item.title}</h5>
                      <p className="text-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary px-4 py-3 fs-5 fw-semibold">
                  Hire Developers
                </button>
                <button className="btn btn-outline-primary px-4 py-3 fs-5 fw-semibold">
                  View Profiles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5 py-lg-6 bg-dark text-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              Our <span className="text-primary">AWS Development Process</span>
            </h2>
            <p className="fs-5 text-light mx-auto" style={{ maxWidth: "700px" }}>
              A proven methodology that ensures quality and timely delivery
            </p>
          </div>
          
          <div className="row g-4">
            {[
              { 
                step: "1",
                title: "Discovery",
                description: "We analyze requirements, define scope, and plan the project roadmap."
              },
              { 
                step: "2",
                title: "Design",
                description: "We create wireframes, prototypes, and UI/UX designs for your approval."
              },
              { 
                step: "3",
                title: "Development",
                description: "Our developers build your application using Agile sprints with regular demos."
              },
              { 
                step: "4",
                title: "Deployment",
                description: "We deploy the application, provide training, and offer ongoing support."
              },
            ].map((process, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="bg-gray-800 p-4 rounded-3 border border-gray-700 border-primary-hover h-100">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mb-4 text-primary fs-3 fw-bold">
                    {process.step}
                  </div>
                  <h4 className="fw-bold fs-4 mb-3 text-white">{process.title}</h4>
                  <p className="text-light">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-5 py-lg-6 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              Our <span className="text-primary">AWS Projects</span>
            </h2>
            <p className="fs-5 text-muted mx-auto" style={{ maxWidth: "700px" }}>
              See how we've helped businesses achieve their goals with AWS
            </p>
          </div>
          
          <div className="row g-4">
            {[
              {
                title: "E-commerce Migration",
                description: "Migrated a high-traffic e-commerce platform to AWS, improving scalability and reducing costs by 30%.",
                image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["AWS", "EC2", "RDS"]
              },
              {
                title: "Real-time Analytics",
                description: "Implemented a real-time analytics solution using AWS Lambda and DynamoDB, enabling instant data insights.",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["AWS", "Lambda", "DynamoDB"]
              },
              {
                title: "Serverless Web Application",
                description: "Developed a serverless web application using AWS Amplify, reducing infrastructure management overhead.",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["AWS", "Amplify", "S3"]
              }
            ].map((project, index) => (
              <div key={index} className="col-md-4">
                <div className="bg-white rounded-3 overflow-hidden shadow-sm hover-shadow h-100">
                  <img src={project.image} alt={project.title} className="w-100 h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="fw-bold fs-4 mb-2">{project.title}</h3>
                    <p className="text-muted mb-3">{project.description}</p>
                    <div className="d-flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="badge bg-light text-dark fs-6">
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
            <button className="btn btn-outline-primary px-4 py-3 fs-5 fw-semibold">
              View All Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 py-lg-6 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="fs-5 text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Trusted by startups and Fortune 500 companies worldwide
            </p>
          </div>
          
          <div className="row g-4">
            {[
              {
                quote: "CinqueLabs delivered an exceptional AWS solution that transformed our business. Their expertise and support were invaluable.",
                name: "Emily Carter",
                role: "CTO, InnovateTech",
                image: "https://randomuser.me/api/portraits/women/32.jpg",
                rating: 5
              },
              {
                quote: "The migration to AWS was seamless and the performance improvements were immediate. Highly recommend CinqueLabs!",
                name: "James Smith",
                role: "IT Director, RetailCorp",
                image: "https://randomuser.me/api/portraits/men/44.jpg",
                rating: 5
              },
              {
                quote: "CinqueLabs' AWS experts provided us with the guidance and support we needed to successfully scale our application.",
                name: "Maria Garcia",
                role: "Product Owner, FinServe",
                image: "https://randomuser.me/api/portraits/women/75.jpg",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="col-md-4">
                <div className="bg-light p-4 rounded-3 h-100">
                  <div className="d-flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-warning me-1" />
                    ))}
                  </div>
                  <p className="text-muted fst-italic mb-4">"{testimonial.quote}"</p>
                  <div className="d-flex align-items-center">
                    <img src={testimonial.image} alt={testimonial.name} className="rounded-circle me-3" width="48" height="48" />
                    <div>
                      <h5 className="fw-bold mb-0">{testimonial.name}</h5>
                      <p className="text-muted small">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 py-lg-6 bg-primary text-white">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: "900px" }}>
            <h2 className="display-5 fw-bold mb-4">
              Ready to Elevate Your Business with <span className="text-warning">AWS Cloud Solutions</span>?
            </h2>
            <p className="fs-5 mb-4">
              Let's discuss how our AWS expertise can help you achieve your business objectives.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <button className="btn btn-light px-4 py-3 fs-5 fw-semibold text-primary">
                Get a Free Quote
              </button>
              <button className="btn btn-outline-light px-4 py-3 fs-5 fw-semibold">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 py-lg-6 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="fs-5 text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Answers to common questions about our AWS cloud services
            </p>
          </div>
          
          <div className="mx-auto" style={{ maxWidth: "900px" }}>
            <div className="accordion" id="faqAccordion">
              {[
                {
                  question: "How can AWS benefit my business?",
                  answer: "AWS provides a flexible, scalable, and cost-effective cloud infrastructure that can help you reduce IT costs, improve performance, and accelerate innovation. With AWS, you only pay for what you use, and you can easily scale your resources up or down based on demand."
                },
                {
                  question: "What is the process for migrating to AWS?",
                  answer: "Our migration process involves assessing your current infrastructure, planning the migration strategy, executing the migration, and optimizing your AWS environment. We use AWS Migration Hub to track the progress of your migration and ensure a smooth transition."
                },
                {
                  question: "Do you offer managed AWS services?",
                  answer: "Yes, we offer comprehensive managed AWS services, including 24/7 monitoring, incident management, backup and recovery, and performance optimization. Our managed services are designed to ensure the availability, reliability, and security of your AWS environment."
                },
                {
                  question: "Can you help with AWS cost optimization?",
                  answer: "Absolutely. We provide AWS cost optimization services to help you reduce your cloud spending without compromising performance. Our experts will analyze your AWS usage and provide recommendations for cost savings."
                },
                {
                  question: "What industries do you serve?",
                  answer: "We provide AWS solutions to a wide range of industries, including healthcare, finance, e-commerce, education, and more. Our team has the expertise to understand your industry-specific requirements and build solutions that address your unique challenges."
                }
              ].map((faq, index) => (
                <div key={index} className="accordion-item mb-3 border rounded-3 overflow-hidden">
                  <h3 className="accordion-header">
                    <button 
                      className="accordion-button fw-bold fs-5" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target={`#faqCollapse${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`faqCollapse${index}`}
                    >
                      {faq.question}
                    </button>
                  </h3>
                  <div 
                    id={`faqCollapse${index}`} 
                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
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

      {/* Final CTA Section */}
      <section className="py-4 bg-dark text-white">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <div className="mb-3 mb-md-0">
              <h3 className="fs-3 fw-bold mb-2">Ready to start your cloud project?</h3>
              <p className="text-light mb-0">Get in touch with our AWS experts today</p>
            </div>
            <button className="btn btn-primary px-4 py-3 fs-5 fw-semibold">
              Contact Us Now
            </button>
          </div>
        </div>
      </section>

      <Footer handleNewsletterSubmit={handleNewsletterSubmit} />
    </div>
  );
};

// Footer component
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
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">About Us</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Careers</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Blog</a></li>
            <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6">
          <h6 className="fw-bold mb-4">Services</h6>
          <ul className="list-unstyled">
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Web Development</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Mobile Apps</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Cloud Solutions</a></li>
            <li><a href="#" className="text-light text-decoration-none">DevOps</a></li>
          </ul>
        </div>
        <div className="col-lg-4">
          <h6 className="fw-bold mb-4">Newsletter</h6>
          <p className="text-light">Subscribe to our newsletter for the latest in Node.js and web development.</p>
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
          <p className="mb-0 text-light small">© {new Date().getFullYear()} CinqueLabs. All rights reserved.</p>
        </div>
        <div className="col-md-6 text-center text-md-end">
          <a href="#" className="text-light text-decoration-none small me-3">Privacy Policy</a>
          <a href="#" className="text-light text-decoration-none small">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default AWSPage;