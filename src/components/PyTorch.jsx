import { CheckCircle2, Cpu, Database, Palette, Users, ChevronDown, Star } from "lucide-react";

const stats = [
  { value: "50+", label: "AI Projects Delivered" },
  { value: "20+", label: "Expert PyTorch Developers" },
  { value: "4+", label: "Years of PyTorch Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const technologies = [
  { icon: <img src="https://pytorch.org/assets/images/pytorch-logo.png" alt="PyTorch" className="h-6" />, name: "PyTorch" },
  { icon: <img src="https://www.python.org/static/community_logos/python-logo.png" alt="Python" className="h-6" />, name: "Python" },
  { icon: <img src="https://numpy.org/images/logo.svg" alt="NumPy" className="h-6" />, name: "NumPy" },
  { icon: <img src="https://pandas.pydata.org/static/img/pandas_mark.svg" alt="Pandas" className="h-6" />, name: "Pandas" },
  { icon: <img src="https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png" alt="Scikit-learn" className="h-6" />, name: "Scikit-learn" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/TensorFlowLogo.svg" alt="TensorBoard" className="h-6" />, name: "TensorBoard" },
  { icon: <img src="https://matplotlib.org/_static/images/logo2.svg" alt="Matplotlib" className="h-6" />, name: "Matplotlib" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS SageMaker" className="h-6" />, name: "AWS SageMaker" },
  { icon: <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="Docker" className="h-6" />, name: "Docker" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt="Kubernetes" className="h-6" />, name: "Kubernetes" },
  { icon: <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" className="h-6" />, name: "Git" },
  { icon: <img src="https://jupyter.org/assets/homepage/main-logo.svg" alt="Jupyter" className="h-6" />, name: "Slack" },
  { icon: <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" alt="Slack" className="h-6" />, name: "Slack" },
  { icon: <img src="https://cdn.worldvectorlogo.com/logos/trello.svg" alt="Trello" className="h-6" />, name: "Trello" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg" alt="Zoom" className="h-6" />, name: "Zoom" },
];

const PyTorchPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 h-full w-1/2 bg-[url('https://techifysolutions.com/wp-content/uploads/2022/11/PyTorch.webp')] bg-cover bg-center"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                PyTorch AI/ML <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Accelerate your AI initiatives with CinqueLabs' expert PyTorch development. We build, train, and deploy high-performance machine learning models tailored to your business needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:bg-opacity-90">
                  Get Started
                </button>
                <button className="btn-outline-white px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:bg-white hover:text-gray-900">
                  Learn More
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <img 
                src="https://techifysolutions.com/wp-content/uploads/2022/11/PyTorch-1.webp" 
                alt="PyTorch Development" 
                className="w-full rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary opacity-10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PyTorch Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 text-center">
              <img 
                src="https://techifysolutions.com/wp-content/uploads/2022/11/pic-2.png" 
                alt="PyTorch Benefits" 
                className="inline-block max-w-xs lg:max-w-md"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose <span className="text-primary">PyTorch</span> for Your Project?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                PyTorch is an open-source machine learning library that provides a flexible and efficient platform for building deep learning models. Its dynamic computation graph and easy-to-use interface make it a favorite among researchers and developers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Dynamic Computation", description: "Modify your network architecture on the go" },
                  { title: "Easy Debugging", description: "Debugging is as easy as using Python's print()" },
                  { title: "Rich Ecosystem", description: "Tools and libraries for every AI task" },
                  { title: "Strong Community", description: "Vibrant community support and resources" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1 text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">{feature.title}</h5>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="text-primary">PyTorch</span> Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver end-to-end PyTorch solutions to power your AI projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-primary hover:border-opacity-30">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h4 className="font-bold text-xl mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20 bg-dark text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose <span className="text-primary">CinqueLabs</span> for PyTorch Development?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We blend AI expertise with industry knowledge to deliver PyTorch solutions that drive innovation and efficiency.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:bg-opacity-90">
                  Get a Free Consultation
                </button>
                <button className="btn-outline-white px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:bg-white hover:text-gray-900">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="space-y-4">
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
                  <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                    <button className="w-full px-6 py-4 text-left font-bold text-lg flex justify-between items-center">
                      {item.title}
                      <ChevronDown className="transition-transform duration-300" />
                    </button>
                    <div className="px-6 pb-4 pt-0">
                      <p className="text-gray-300">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our PyTorch <span className="text-primary">Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We utilize cutting-edge technologies to build robust, scalable AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-primary hover:border-opacity-50 transition-all">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                  {stack.icon}
                </div>
                <h4 className="font-bold text-xl mb-4">{stack.title}</h4>
                <ul className="space-y-2">
                  {stack.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle2 size={16} className="mr-2 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-12 bg-gray-100">
        <div className="container">
          <h3 className="text-center text-xl text-gray-600 mb-8">We partner with the best in AI/ML technology</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                {tech.icon}
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Developers Section */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <img 
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Hire PyTorch Developers" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Hire Dedicated <span className="text-primary">PyTorch Developers</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Strengthen your team with our senior PyTorch developers available for full-time or part-time engagements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: "Flexible Hiring Models", description: "Choose from hourly, monthly, or full-time contracts" },
                  { title: "Quick Onboarding", description: "Developers ready to start in 48 hours" },
                  { title: "Dedicated Resources", description: "Work exclusively on your project" },
                  { title: "Daily Reporting", description: "Transparent progress updates" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1 text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">{item.title}</h5>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:bg-opacity-90">
                  Hire Developers
                </button>
                <button className="btn-outline px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:bg-gray-100">
                  View Profiles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-20 bg-dark text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="text-primary">Development Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures quality and timely delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-primary hover:border-opacity-50 transition-all">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 text-primary text-2xl font-bold">
                  {process.step}
                </div>
                <h4 className="font-bold text-xl mb-3 text-white">{process.title}</h4>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="text-primary">PyTorch Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've empowered businesses with our PyTorch expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-outline px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:bg-gray-100">
              View All Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by startups and enterprises for our PyTorch expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400 mr-1" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h5 className="font-bold">{testimonial.name}</h5>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Elevate Your AI Project with <span className="text-secondary">PyTorch</span>?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our PyTorch development services can help you achieve your AI/ML goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-white px-8 py-3 rounded-lg text-lg font-semibold text-primary transition-all hover:bg-opacity-90">
                Get a Free Quote
              </button>
              <button className="btn-outline-white px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:bg-white hover:bg-opacity-10">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about our PyTorch development services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
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
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <button className="w-full flex justify-between items-center text-left font-bold text-lg">
                    <span>{faq.question}</span>
                    <ChevronDown className="transition-transform duration-300" />
                  </button>
                  <div className="mt-4 text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 bg-dark text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ready to start your AI project?</h3>
              <p className="text-gray-300">Get in touch with our PyTorch experts today</p>
            </div>
            <button className="btn-primary px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:bg-opacity-90">
              Contact Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PyTorchPage;

// Add these styles to your global CSS
// .btn-primary {
//   background-color: #3b82f6;
//   color: white;
// }
// .btn-outline {
//   border: 1px solid #3b82f6;
//   color: #3b82f6;
//   background: transparent;
// }
// .btn-outline-white {
//   border: 1px solid white;
//   color: white;
//   background: transparent;
// }
// .btn-white {
//   background-color: white;
//   color: #3b82f6;
// }
// .text-primary {
//   color: #3b82f6;
// }
// .bg-dark {
//   background-color: #1f2937;
// }
// .bg-primary {
//   background-color: #3b82f6;
// }