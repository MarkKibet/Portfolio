import { CheckCircle2, Cpu, Database, Palette, Users, Cloud, ChevronDown, Star } from "lucide-react";

const stats = [
  { value: "80+", label: "Azure Projects Delivered" },
  { value: "25+", label: "Certified Azure Engineers" },
  { value: "5+", label: "Years of Azure Experience" },
  { value: "99.9%", label: "Uptime Guarantee" },
];

const technologies = [
  { icon: <img src="https://azurecomcdn.azureedge.net/cvt-6e2e8def5a0e32766952f4fb1517972ed18e8b6e3e6e0e2b8949dcd51cb07c29/images/page/services/compute/azure.svg" alt="Azure" className="h-6" />, name: "Azure" },
  { icon: <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="Docker" className="h-6" />, name: "Docker" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt="Kubernetes" className="h-6" />, name: "Kubernetes" },
  { icon: <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" className="h-6" />, name: "Git" },
  { icon: <img src="https://www.terraform.io/assets/images/og-image-8b3e4f7d.png" alt="Terraform" className="h-6" />, name: "Terraform" },
  { icon: <img src="https://www.python.org/static/community_logos/python-logo.png" alt="Python" className="h-6" />, name: "Python" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg" alt="Bash" className="h-6" />, name: "Bash" },
];

const AzurePage = () => {
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
      <section className="hero-section bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 h-full w-1/2 bg-[url('https://techifysolutions.com/wp-content/uploads/2022/11/Azure.webp')] bg-cover bg-center"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Azure Cloud <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Elevate your business with our Azure cloud solutions. CinqueLabs offers expert consulting, migration, and management services to help you harness the full power of the cloud.
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
                src="https://techifysolutions.com/wp-content/uploads/2022/11/Azure-1.webp" 
                alt="Azure Cloud Services" 
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

      {/* Why Choose Azure Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 text-center">
              <img 
                src="https://techifysolutions.com/wp-content/uploads/2022/11/pic-2.png" 
                alt="Azure Benefits" 
                className="inline-block max-w-xs lg:max-w-md"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose <span className="text-primary">Azure</span> for Your Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Azure offers a flexible, scalable, and secure cloud platform that empowers businesses to innovate and grow. With a wide range of services and global reach, Azure is the ideal choice for any organization.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Scalability", description: "Easily scale your applications up or down based on demand" },
                  { title: "Flexibility", description: "Choose the tools and technologies that work best for you" },
                  { title: "Security", description: "Enterprise-grade security and compliance built-in" },
                  { title: "Cost-Effectiveness", description: "Pay only for what you use with no upfront costs" },
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
              Our <span className="text-primary">Azure</span> Cloud Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud solutions to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Cloud size={32} className="text-primary" />,
                title: "Azure Consulting",
                description: "Expert guidance to help you design and implement effective cloud strategies."
              },
              { 
                icon: <Cpu size={32} className="text-primary" />,
                title: "Cloud Migration",
                description: "Seamless migration of your applications and data to the Azure cloud."
              },
              { 
                icon: <Database size={32} className="text-primary" />,
                title: "Managed Azure Services",
                description: "Comprehensive management of your Azure resources for optimal performance."
              },
              { 
                icon: <Users size={32} className="text-primary" />,
                title: "Dedicated Azure Teams",
                description: "Hire our certified Azure experts to work as an extension of your team."
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
                Why Choose <span className="text-primary">CinqueLabs</span> for Azure Cloud?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We are committed to delivering Azure solutions that drive business success. Our team of certified experts leverage the full range of Azure services to build scalable, secure, and high-performance applications.
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
                    title: "Certified Azure Experts", 
                    content: "Our team consists of Azure-certified engineers with extensive experience in cloud solutions." 
                  },
                  { 
                    title: "Agile Development Process", 
                    content: "We follow Agile methodologies to ensure flexibility, transparency, and continuous delivery." 
                  },
                  { 
                    title: "Quality Assurance", 
                    content: "Thorough testing and validation to ensure your applications are reliable and performant." 
                  },
                  { 
                    title: "Ongoing Support", 
                    content: "Comprehensive support and maintenance to keep your Azure services running smoothly." 
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
              Our Azure <span className="text-primary">Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging the latest Azure technologies to build robust cloud solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Cloud size={32} className="text-primary" />,
                title: "Core Technologies",
                items: ["Azure App Service", "Azure Functions", "Cosmos DB", "Azure SQL Database"]
              },
              { 
                icon: <Palette size={32} className="text-primary" />,
                title: "UI Frameworks",
                items: ["Azure DevOps", "Kubernetes", "Docker", "Terraform"]
              },
              { 
                icon: <Database size={32} className="text-primary" />,
                title: "Data Services",
                items: ["Azure Blob Storage", "Azure Table Storage", "Azure Redis Cache", "Azure Data Lake"]
              },
              { 
                icon: <Cpu size={32} className="text-primary" />,
                title: "AI & Machine Learning",
                items: ["Azure Machine Learning", "Cognitive Services", "Bot Services", "Azure Databricks"]
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
          <h3 className="text-center text-xl text-gray-600 mb-8">Our Technology Partners</h3>
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
                alt="Hire Azure Developers" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Hire Dedicated <span className="text-primary">Azure Developers</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Strengthen your team with our experienced Azure developers available for hire.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: "Flexible Engagement Models", description: "Choose from full-time, part-time, or hourly contracts" },
                  { title: "Quick Onboarding", description: "Developers available to start within 48 hours" },
                  { title: "Dedicated Cloud Experts", description: "Resources focused exclusively on your projects" },
                  { title: "Transparent Reporting", description: "Regular updates and reports on development progress" },
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
                  Hire Azure Developers
                </button>
                <button className="btn-outline px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:bg-gray-100">
                  View Developer Profiles
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
              Our <span className="text-primary">Azure Development Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to ensure successful Azure implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                step: "1",
                title: "Consultation",
                description: "We discuss your requirements and evaluate your current infrastructure."
              },
              { 
                step: "2",
                title: "Planning",
                description: "We design a customized Azure solution architecture and migration plan."
              },
              { 
                step: "3",
                title: "Implementation",
                description: "Our team sets up and configures your Azure environment and services."
              },
              { 
                step: "4",
                title: "Support & Optimization",
                description: "We provide ongoing support and optimize your Azure resources for performance and cost."
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
              Our <span className="text-primary">Azure Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've enabled businesses to thrive with Azure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Migration",
                description: "Migrated a high-traffic e-commerce site to Azure, improving performance and scalability.",
                image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["Azure", "Migration", "E-commerce"]
              },
              {
                title: "Real-time Analytics Platform",
                description: "Developed a real-time analytics solution on Azure for a leading retail client.",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["Azure", "Data Analytics", "Retail"]
              },
              {
                title: "SaaS Application Development",
                description: "Built a multi-tenant SaaS application on Azure, leveraging Azure Kubernetes Service.",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["Azure", "Kubernetes", "SaaS"]
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
              Trusted by startups and enterprises for Azure solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "CinqueLabs transformed our cloud infrastructure with Azure. Their expertise and support have been invaluable.",
                name: "Emily Carter",
                role: "CTO, InnovateTech",
                image: "https://randomuser.me/api/portraits/women/32.jpg",
                rating: 5
              },
              {
                quote: "The Azure solution developed by CinqueLabs has significantly improved our operational efficiency and scalability.",
                name: "James Smith",
                role: "Operations Manager, RetailCo",
                image: "https://randomuser.me/api/portraits/men/44.jpg",
                rating: 5
              },
              {
                quote: "We partnered with CinqueLabs for our Azure migration, and it was a game-changer. Highly recommend their services.",
                name: "Linda Johnson",
                role: "VP of Engineering, FinServe",
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
              Ready to Elevate Your Business with <span className="text-secondary">Azure Cloud</span>?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your project requirements and get a free quote.
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
              Common queries about our Azure cloud services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "What is Azure?",
                  answer: "Azure is Microsoft's cloud computing platform, offering a wide range of services including those for computing, analytics, storage, and networking. Users can choose and configure these services to meet their specific needs."
                },
                {
                  question: "How can Azure benefit my business?",
                  answer: "Azure provides several benefits including cost savings, scalability, performance, and security. It allows businesses to only pay for the resources they use, scale their IT resources up or down as needed, and access a global network of Microsoft-managed data centers."
                },
                {
                  question: "Is Azure secure?",
                  answer: "Yes, Azure is designed with security in mind. It offers a range of security features and compliance certifications to help protect your data and applications. Microsoft invests over $1 billion annually on cybersecurity research and development."
                },
                {
                  question: "Can I migrate my existing applications to Azure?",
                  answer: "Yes, Azure provides various tools and services to help migrate your existing applications, data, and workloads to the cloud. Our team at CinqueLabs can assist you with a seamless migration process."
                },
                {
                  question: "What kind of support do you offer for Azure services?",
                  answer: "We offer comprehensive support for Azure services including setup, configuration, management, and optimization. Our team of Azure certified experts is available to assist you with any issues or questions you may have."
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
              <h3 className="text-2xl font-bold mb-2">Ready to start your Azure project?</h3>
              <p className="text-gray-300">Contact our Azure experts today</p>
            </div>
            <button className="btn-primary px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:bg-opacity-90">
              Contact Us Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer component */}
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

export default AzurePage;

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