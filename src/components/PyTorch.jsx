import { CheckCircle2, Cpu, Database, Palette, Users, Star } from "lucide-react";

const stats = [
  { value: "50+", label: "AI Projects Delivered" },
  { value: "20+", label: "Expert PyTorch Developers" },
  { value: "4+", label: "Years of PyTorch Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const technologies = [
  { icon: <img src="https://pytorch.org/assets/images/pytorch-logo.png" alt="PyTorch" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "PyTorch" },
  { icon: <img src="https://www.python.org/static/community_logos/python-logo.png" alt="Python" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "Python" },
  { icon: <img src="https://numpy.org/images/logo.svg" alt="NumPy" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "NumPy" },
  { icon: <img src="https://pandas.pydata.org/static/img/pandas_mark.svg" alt="Pandas" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "Pandas" },
  { icon: <img src="https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png" alt="Scikit-learn" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "Scikit-learn" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/TensorFlowLogo.svg" alt="TensorBoard" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "TensorBoard" },
  { icon: <img src="https://matplotlib.org/_static/images/logo2.svg" alt="Matplotlib" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "Matplotlib" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS SageMaker" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "AWS SageMaker" },
  { icon: <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="Docker" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "Docker" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt="Kubernetes" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "Kubernetes" },
  { icon: <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "Git" },
  { icon: <img src="https://jupyter.org/assets/homepage/main-logo.svg" alt="Jupyter" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "Jupyter" },
  { icon: <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" alt="Slack" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "Slack" },
  { icon: <img src="https://cdn.worldvectorlogo.com/logos/trello.svg" alt="Trello" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "Trello" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg" alt="Zoom" style={{height: 28, width: 28, objectFit: "contain"}} />, name: "Zoom" },
];

const PyTorchPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-white py-5 position-relative overflow-hidden">
        <div className="position-absolute top-0 end-0 h-100 w-50 opacity-25" style={{backgroundImage: "url('https://pytorch.org/assets/images/pytorch-logo.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-3">
                PyTorch AI/ML <span className="text-primary">Services</span>
              </h1>
              <p className="lead text-light mb-4">
                Accelerate your AI initiatives with CinqueLabs' expert PyTorch development. We build, train, and deploy high-performance machine learning models tailored to your business needs.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary btn-lg">
                  Get Started
                </button>
                <button className="btn btn-outline-light btn-lg">
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-lg-6 position-relative">
              {/* <img
                src="https://techifysolutions.com/wp-content/uploads/2022/11/PyTorch-1.webp"
                alt="PyTorch Development"
                className="img-fluid rounded shadow-lg"
              /> */}
              <div className="position-absolute top-0 start-0 bottom-0 end-0 bg-primary opacity-10 rounded"></div>
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

      {/* Why Choose PyTorch Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 text-center">
              <img
                src="https://pytorch.org/assets/images/pytorch-logo.png"
                alt="PyTorch Benefits"
                className="img-fluid mw-100"
                style={{maxWidth: '450px'}}
              />
            </div>
            <div className="col-lg-6">
              <h2 className="h2 fw-bold mb-4">
                Why Choose <span className="text-primary">PyTorch</span> for Your Project?
              </h2>
              <p className="fs-5 text-muted mb-4">
                PyTorch is an open-source machine learning library that provides a flexible and efficient platform for building deep learning models. Its dynamic computation graph and easy-to-use interface make it a favorite among researchers and developers.
              </p>
              
              <div className="row row-cols-1 row-cols-md-2 g-4">
                {[
                  { title: "Dynamic Computation", description: "Modify your network architecture on the go" },
                  { title: "Easy Debugging", description: "Debugging is as easy as using Python's print()" },
                  { title: "Rich Ecosystem", description: "Tools and libraries for every AI task" },
                  { title: "Strong Community", description: "Vibrant community support and resources" },
                ].map((feature, index) => (
                  <div key={index} className="col">
                    <div className="d-flex align-items-start">
                      <div className="me-3 mt-1 text-primary">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h5 className="fw-bold fs-5 mb-1">{feature.title}</h5>
                        <p className="text-muted">{feature.description}</p>
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
            <h2 className="h2 fw-bold mb-3">
              Our <span className="text-primary">PyTorch</span> Development Services
            </h2>
            <p className="fs-5 text-muted col-md-8 mx-auto">
              We deliver end-to-end PyTorch solutions to power your AI projects
            </p>
          </div>
          
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {[
              {
                icon: <Cpu size={32} className="text-primary" />,
                title: "Custom Model Development",
                description: "Bespoke deep learning models tailored to your specific data and objectives."
              },
              {
                icon: <Database size={32} className="text-primary" />,
                title: "Data Engineering",
                description: "Robust data pipelines and preprocessing for optimal model training."
              },
              {
                icon: <Palette size={32} className="text-primary" />,
                title: "Model Optimization",
                description: "Techniques like quantization and pruning to optimize model performance."
              },
              {
                icon: <Users size={32} className="text-primary" />,
                title: "Consulting & Strategy",
                description: "Expert guidance on AI strategy, model selection, and deployment."
              },
            ].map((service, index) => (
              <div key={index} className="col">
                <div className="bg-white p-4 rounded shadow-sm h-100 border">
                  <div style={{width: '4rem', height: '4rem'}} className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mb-4">
                    {service.icon}
                  </div>
                  <h4 className="fw-bold h5 mb-3">{service.title}</h4>
                  <p className="text-muted">{service.description}</p>
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
            <div className="col-lg-6 mb-4 mb-lg-0 pe-lg-5">
              <h2 className="h2 fw-bold mb-4">
                Why Choose <span className="text-primary">CinqueLabs</span> for PyTorch Development?
              </h2>
              <p className="fs-5 text-light opacity-75 mb-4">
                We blend AI expertise with industry knowledge to deliver PyTorch solutions that drive innovation and efficiency.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary btn-lg px-4 py-2 rounded-pill fw-semibold">
                  Get a Free Consultation
                </button>
                <button className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill fw-semibold">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion accordion-flush" id="whyChooseUsAccordion">
                {[
                  {
                    title: "Certified PyTorch Experts",
                    content: "Our team consists of PyTorch-certified developers with 4+ years of experience in AI/ML."
                  },
                  {
                    title: "Agile Development Process",
                    content: "We follow Agile methodologies to ensure flexibility, transparency, and continuous delivery of value."
                  },
                  {
                    title: "Quality Assurance",
                    content: "Thorough testing and validation to ensure your models are accurate and reliable."
                  },
                  {
                    title: "Ongoing Support",
                    content: "Comprehensive maintenance and support to keep your AI solutions performing at their best."
                  },
                ].map((item, index) => (
                  <div key={index} className="accordion-item bg-transparent border-light border-opacity-25">
                    <h2 className="accordion-header" id={`whyUsHeading-${index}`}>
                      <button
                        className="accordion-button collapsed bg-transparent text-white fw-bold fs-5"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#whyUsCollapse-${index}`}
                        aria-expanded="false"
                        aria-controls={`whyUsCollapse-${index}`}
                      >
                        {item.title}
                      </button>
                    </h2>
                    <div
                      id={`whyUsCollapse-${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`whyUsHeading-${index}`}
                      data-bs-parent="#whyChooseUsAccordion"
                    >
                      <div className="accordion-body text-light opacity-75">
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
            <h2 className="h2 fw-bold mb-3">
              Our PyTorch <span className="text-primary">Technology Stack</span>
            </h2>
            <p className="fs-5 text-muted col-md-8 mx-auto">
              We utilize cutting-edge technologies to build robust, scalable AI solutions
            </p>
          </div>
          
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {[
              {
                icon: <Cpu size={32} className="text-primary" />,
                title: "Core Technologies",
                items: ["PyTorch", "Python", "NumPy", "Pandas"]
              },
              {
                icon: <Palette size={32} className="text-primary" />,
                title: "AI/ML Libraries",
                items: ["TorchVision", "Scikit-learn", "TensorBoard", "Matplotlib"]
              },
              {
                icon: <Database size={32} className="text-primary" />,
                title: "Cloud & DevOps",
                items: ["AWS SageMaker", "Docker", "Kubernetes", "Git"]
              },
              {
                icon: <Users size={32} className="text-primary" />,
                title: "Collaboration Tools",
                items: ["Jupyter", "Slack", "Trello", "Zoom"]
              },
            ].map((stack, index) => (
              <div key={index} className="col">
                <div className="bg-light p-4 rounded border h-100">
                  <div style={{width: '4rem', height: '4rem'}} className="bg-primary bg-opacity-10 rounded d-flex align-items-center justify-content-center mb-4">
                    {stack.icon}
                  </div>
                  <h4 className="fw-bold h5 mb-3">{stack.title}</h4>
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
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="text-center fs-5 text-muted mb-5">We partner with the best in AI/ML technology</h3>
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
            <div className="col-lg-6 mb-4 mb-lg-0 pe-lg-5">
              <img
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Hire PyTorch Developers"
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="h2 fw-bold mb-4">
                Hire Dedicated <span className="text-primary">PyTorch Developers</span>
              </h2>
              <p className="fs-5 text-muted mb-4">
                Strengthen your team with our senior PyTorch developers available for full-time or part-time engagements.
              </p>
              
              <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
                {[
                  { title: "Flexible Hiring Models", description: "Choose from hourly, monthly, or full-time contracts" },
                  { title: "Quick Onboarding", description: "Developers ready to start in 48 hours" },
                  { title: "Dedicated Resources", description: "Work exclusively on your project" },
                  { title: "Daily Reporting", description: "Transparent progress updates" },
                ].map((item, index) => (
                  <div key={index} className="col">
                    <div className="d-flex align-items-start">
                      <div className="me-3 mt-1 text-primary">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h5 className="fw-bold fs-5 mb-1">{item.title}</h5>
                        <p className="text-muted">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary btn-lg px-4 py-2 rounded-pill fw-semibold">
                  Hire Developers
                </button>
                <button className="btn btn-outline-primary btn-lg px-4 py-2 rounded-pill fw-semibold">
                  View Profiles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h2 fw-bold mb-3">
              Our <span className="text-primary">Development Process</span>
            </h2>
            <p className="fs-5 text-light opacity-75 col-md-8 mx-auto">
              A proven methodology that ensures quality and timely delivery
            </p>
          </div>
          
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
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
              <div key={index} className="col">
                <div className="bg-secondary bg-opacity-25 p-4 rounded border border-secondary h-100">
                  <div style={{width: '4rem', height: '4rem'}} className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mb-4 text-primary fs-3 fw-bold">
                    {process.step}
                  </div>
                  <h4 className="fw-bold h5 mb-3 text-white">{process.title}</h4>
                  <p className="text-light opacity-75">{process.description}</p>
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
            <h2 className="h2 fw-bold mb-3">
              Our <span className="text-primary">PyTorch Projects</span>
            </h2>
            <p className="fs-5 text-muted col-md-8 mx-auto">
              Discover how we've empowered businesses with our PyTorch expertise
            </p>
          </div>
          
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {[
              {
                title: "Image Classification App",
                description: "Developed a PyTorch image classification app achieving 95% accuracy on the test set.",
                image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["PyTorch", "TorchVision", "Flask"]
              },
              {
                title: "Real-time Object Detection",
                description: "Implemented a real-time object detection system using PyTorch and OpenCV.",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["PyTorch", "OpenCV", "TensorBoard"]
              },
              {
                title: "Sentiment Analysis Tool",
                description: "Created a sentiment analysis tool for social media monitoring using PyTorch and NLP techniques.",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["PyTorch", "NLTK", "Flask"]
              }
            ].map((project, index) => (
              <div key={index} className="col">
                <div className="card h-100 shadow-sm">
                  <img src={project.image} alt={project.title} className="card-img-top" style={{height: '12rem', objectFit: 'cover'}} />
                  <div className="card-body">
                    <h3 className="card-title h5 fw-bold mb-2">{project.title}</h3>
                    <p className="card-text text-muted mb-3">{project.description}</p>
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
            <h2 className="h2 fw-bold mb-3">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="fs-5 text-muted col-md-8 mx-auto">
              Trusted by startups and enterprises for our PyTorch expertise
            </p>
          </div>
          
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {[
              {
                quote: "CinqueLabs transformed our AI capabilities with their PyTorch expertise. The team is knowledgeable, responsive, and dedicated to our success.",
                name: "Emily Carter",
                role: "CTO, AI Innovations",
                image: "https://randomuser.me/api/portraits/women/32.jpg",
                rating: 5
              },
              {
                quote: "The PyTorch model developed by CinqueLabs exceeded our performance expectations. Their attention to detail and commitment to quality is impressive.",
                name: "James Smith",
                role: "Data Scientist, FinTech Corp",
                image: "https://randomuser.me/api/portraits/men/44.jpg",
                rating: 5
              },
              {
                quote: "We partnered with CinqueLabs for our machine learning project and couldn't be happier. Their team's expertise in PyTorch is top-notch.",
                name: "Linda Johnson",
                role: "Product Owner, HealthTech",
                image: "https://randomuser.me/api/portraits/women/75.jpg",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="col">
                <div className="bg-light p-4 rounded h-100">
                  <div className="d-flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-warning me-1" style={{fill: 'currentColor'}} />
                    ))}
                  </div>
                  <p className="text-dark fst-italic mb-4">"{testimonial.quote}"</p>
                  <div className="d-flex align-items-center">
                    <img src={testimonial.image} alt={testimonial.name} className="rounded-circle me-3" style={{width: '48px', height: '48px'}} />
                    <div>
                      <h5 className="fw-bold mb-0">{testimonial.name}</h5>
                      <p className="text-muted small mb-0">{testimonial.role}</p>
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
            <h2 className="h2 fw-bold mb-4">
              Ready to Elevate Your AI Project with <span className="text-warning">PyTorch</span>?
            </h2>
            <p className="fs-5 mb-4 col-md-10 mx-auto">
              Contact us today to discuss how our PyTorch development services can help you achieve your AI/ML goals.
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
            <h2 className="h2 fw-bold mb-3">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="fs-5 text-muted col-md-8 mx-auto">
              Answers to common questions about our PyTorch development services
            </p>
          </div>
          
          <div className="col-lg-8 mx-auto">
            <div className="accordion" id="faqAccordion">
              {[
                {
                  question: "How long does it take to develop a PyTorch model?",
                  answer: "The timeline depends on the complexity of your project. A basic model can be developed in 2-4 weeks, while more complex projects may take 2-3 months. We'll provide a detailed timeline after the initial consultation."
                },
                {
                  question: "What industries do you serve?",
                  answer: "We have experience delivering PyTorch solutions across various industries including healthcare, finance, e-commerce, and more. Our team understands industry-specific challenges and regulations."
                },
                {
                  question: "Do you provide model training and optimization?",
                  answer: "Yes, we offer comprehensive model training and optimization services to ensure your models perform at their best. This includes hyperparameter tuning, model pruning, and quantization."
                },
                {
                  question: "Can you integrate PyTorch models with existing systems?",
                  answer: "Absolutely. We can integrate PyTorch models with your existing applications, databases, and cloud services. Our team ensures seamless integration and deployment."
                },
                {
                  question: "What kind of support do you offer after deployment?",
                  answer: "We provide ongoing support and maintenance services including model monitoring, performance tuning, and updates. We also offer dedicated support for any urgent issues."
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
                      aria-controls={`#faqCollapse-${index}`}
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

      {/* Final CTA Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="mb-3 mb-md-0 text-center text-md-start">
              <h3 className="h3 fw-bold mb-2">Ready to start your AI project?</h3>
              <p className="text-light opacity-75">Get in touch with our PyTorch experts today</p>
            </div>
            <button className="btn btn-primary btn-lg px-4 py-2 rounded-pill fw-semibold">
              Contact Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PyTorchPage;