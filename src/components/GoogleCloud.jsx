import { CheckCircle2, Cpu, Database, Palette, Users, Cloud, ChevronDown, Star } from "lucide-react";

// Add missing stats and technologies arrays
const stats = [
  { value: "70+", label: "GCP Projects Delivered" },
  { value: "20+", label: "Certified GCP Engineers" },
  { value: "5+", label: "Years of GCP Experience" },
  { value: "99.9%", label: "Uptime Guarantee" },
];

const technologies = [
  { icon: <img src="https://cloud.google.com/images/social-icon-google-cloud-1200-630.png" alt="Google Cloud" style={{height: 24}} />, name: "Google Cloud" },
  { icon: <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="Docker" style={{height: 24}} />, name: "Docker" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt="Kubernetes" style={{height: 24}} />, name: "Kubernetes" },
  { icon: <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" style={{height: 24}} />, name: "Git" },
  { icon: <img src="https://www.terraform.io/assets/images/og-image-8b3e4f7d.png" alt="Terraform" style={{height: 24}} />, name: "Terraform" },
  { icon: <img src="https://www.python.org/static/community_logos/python-logo.png" alt="Python" style={{height: 24}} />, name: "Python" },
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
      <section className="bg-dark text-white position-relative overflow-hidden py-5 py-lg-7">
        <div className="position-absolute top-0 end-0 h-100 w-50 d-none d-lg-block" style={{zIndex: 0, opacity: 0.2}}>
          <div className="h-100 w-100 bg-cover bg-center"
               style={{backgroundImage: "url('https://techifysolutions.com/wp-content/uploads/2022/11/ReactJS-2.webp')"}}></div>
        </div>
        <div className="container position-relative z-index-2">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">
                Google Cloud <span className="text-primary">Services</span>
              </h1>
              <p className="lead mb-5">
                Leverage the power of Google Cloud with CinqueLabs. Our expert team delivers scalable, secure, and high-performance cloud solutions tailored to your business needs.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary btn-lg px-4 py-3">
                  Get Started
                </button>
                <button className="btn btn-outline-light btn-lg px-4 py-3">
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img 
                  src="https://techifysolutions.com/wp-content/uploads/2022/11/ReactJS-1.webp" 
                  alt="Google Cloud Services" 
                  className="img-fluid rounded-3 shadow-lg"
                  style={{ background: "#fff", padding: "1rem" }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-10 rounded-3"></div>
              </div>
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

      {/* Why Choose Google Cloud Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 text-center">
              <img 
                src="https://techifysolutions.com/wp-content/uploads/2022/11/pic-2.png" 
                alt="Google Cloud Benefits" 
                className="inline-block max-w-xs lg:max-w-md"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose <span className="text-primary">Google Cloud</span> for Your Project?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Google Cloud offers a robust, secure, and scalable cloud platform that empowers businesses to innovate and grow. With its cutting-edge technology and global network, your applications will perform at their best.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Scalability", description: "Easily scale your applications up or down based on demand" },
                  { title: "Flexibility", description: "Choose the right tools and services for your specific needs" },
                  { title: "Security", description: "Benefit from Google's robust security infrastructure" },
                  { title: "Global Reach", description: "Serve your users with low-latency access from anywhere in the world" },
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
              Our <span className="text-primary">Google Cloud</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud solutions to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Cloud size={32} className="text-primary" />,
                title: "Cloud Consulting",
                description: "Expert guidance to help you design and implement effective cloud strategies."
              },
              { 
                icon: <Cpu size={32} className="text-primary" />,
                title: "Cloud Migration",
                description: "Seamless migration of your applications and data to Google Cloud."
              },
              { 
                icon: <Database size={32} className="text-primary" />,
                title: "Data Analytics",
                description: "Transform data into insights with our advanced analytics solutions."
              },
              { 
                icon: <Users size={32} className="text-primary" />,
                title: "Managed Services",
                description: "Comprehensive management of your cloud environment for optimal performance."
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
                Why Choose <span className="text-primary">CinqueLabs</span> for Google Cloud?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our deep expertise in Google Cloud enables us to deliver solutions that drive efficiency, innovation, and growth.
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
                    title: "Certified GCP Experts", 
                    content: "Our team includes Google Cloud certified professionals with extensive experience in cloud solutions." 
                  },
                  { 
                    title: "Agile Methodologies", 
                    content: "We use Agile practices to ensure flexibility, collaboration, and rapid delivery of value." 
                  },
                  { 
                    title: "End-to-End Solutions", 
                    content: "From consulting to migration to managed services, we provide comprehensive support at every stage." 
                  },
                  { 
                    title: "Customer-Centric Approach", 
                    content: "We focus on understanding your business goals and tailoring our solutions to meet your unique needs." 
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
              Our Google Cloud <span className="text-primary">Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging the latest Google Cloud technologies to build scalable and efficient solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Cloud size={32} className="text-primary" />,
                title: "Compute Services",
                items: ["Compute Engine", "App Engine", "Cloud Functions", "Cloud Run"]
              },
              { 
                icon: <Palette size={32} className="text-primary" />,
                title: "UI/UX Tools",
                items: ["Material Design", "Figma", "Adobe XD", "Sketch"]
              },
              { 
                icon: <Database size={32} className="text-primary" />,
                title: "Database Services",
                items: ["Cloud SQL", "Firestore", "BigQuery", "Cloud Spanner"]
              },
              { 
                icon: <Cpu size={32} className="text-primary" />,
                title: "DevOps Tools",
                items: ["Cloud Build", "Container Registry", "Cloud Monitoring", "Cloud Logging"]
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
          <h3 className="text-center text-xl text-gray-600 mb-8">Partners in Innovation</h3>
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
                alt="Hire Google Cloud Developers" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Hire Dedicated <span className="text-primary">Google Cloud Developers</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Strengthen your team with our experienced Google Cloud developers, available for flexible engagement models.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: "Flexible Engagements", description: "Hire developers on an hourly, part-time, or full-time basis" },
                  { title: "Quick Start", description: "Developers can be onboarded within 48 hours" },
                  { title: "Expertise on Demand", description: "Access to a pool of skilled Google Cloud professionals" },
                  { title: "Transparent Pricing", description: "No hidden costs, clear and predictable billing" },
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
              Our <span className="text-primary">Google Cloud Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to ensure successful cloud adoption and implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                step: "1",
                title: "Consultation",
                description: "Understanding your business needs and defining cloud strategy."
              },
              { 
                step: "2",
                title: "Planning",
                description: "Creating a detailed project plan, including timeline and resources."
              },
              { 
                step: "3",
                title: "Implementation",
                description: "Executing the migration and deployment of applications on Google Cloud."
              },
              { 
                step: "4",
                title: "Optimization",
                description: "Fine-tuning performance, security, and cost-efficiency of your cloud environment."
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
              Our <span className="text-primary">Google Cloud Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've enabled businesses to thrive with Google Cloud
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Migration",
                description: "Migrated a high-traffic e-commerce platform to Google Cloud, improving scalability and reducing costs.",
                image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["GCP", "Compute Engine", "Cloud SQL"]
              },
              {
                title: "Real-time Analytics Platform",
                description: "Developed a real-time data analytics platform using BigQuery and Data Studio, enabling instant insights.",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["GCP", "BigQuery", "Data Studio"]
              },
              {
                title: "Healthcare Application",
                description: "Built a secure, HIPAA-compliant healthcare application on Google Cloud, ensuring data privacy and security.",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["GCP", "App Engine", "Cloud Firestore"]
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
              Trusted by startups and enterprises for Google Cloud solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "CinqueLabs transformed our cloud infrastructure with their Google Cloud expertise. Our application performance has improved dramatically.",
                name: "Emily Carter",
                role: "CTO, InnovateTech",
                image: "https://randomuser.me/api/portraits/women/32.jpg",
                rating: 5
              },
              {
                quote: "The team at CinqueLabs is highly skilled and professional. They helped us migrate to Google Cloud with zero downtime.",
                name: "James Smith",
                role: "IT Director, RetailCorp",
                image: "https://randomuser.me/api/portraits/men/44.jpg",
                rating: 5
              },
              {
                quote: "We rely on CinqueLabs for our Google Cloud management. Their proactive approach and expertise give us peace of mind.",
                name: "Maria Garcia",
                role: "Operations Manager, HealthPlus",
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
              Ready to Elevate Your <span className="text-secondary">Google Cloud Journey</span>?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our Google Cloud services can benefit your business.
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
              Common queries about our Google Cloud services answered
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "What is Google Cloud Platform?",
                  answer: "Google Cloud Platform (GCP) is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search and YouTube. GCP provides a range of services including computing, data storage, data analytics, and machine learning."
                },
                {
                  question: "How can CinqueLabs help with Google Cloud?",
                  answer: "CinqueLabs offers end-to-end Google Cloud services including cloud consulting, migration, implementation, and managed services. Our team of GCP certified experts will work with you to design and implement cloud solutions that meet your business objectives."
                },
                {
                  question: "Is Google Cloud secure?",
                  answer: "Yes, Google Cloud is designed with a security-first approach, providing multiple layers of security to protect your data and applications. GCP is compliant with major security standards and regulations, and offers tools for identity and access management, data encryption, and threat detection."
                },
                {
                  question: "What industries do you serve?",
                  answer: "We provide Google Cloud solutions across various industries including healthcare, finance, retail, education, and more. Our expertise enables us to deliver tailored solutions that address the unique challenges and requirements of different industries."
                },
                {
                  question: "Can you assist with cloud cost management?",
                  answer: "Absolutely. We help businesses optimize their cloud spending by implementing cost-effective cloud architectures, utilizing committed use contracts, and providing ongoing monitoring and optimization of cloud resources."
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
              <h3 className="text-2xl font-bold mb-2">Ready to start your cloud project?</h3>
              <p className="text-gray-300">Contact our Google Cloud experts today</p>
            </div>
            <button className="btn-primary px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:bg-opacity-90">
              Contact Us Now
            </button>
          </div>
        </div>
      </section>

      <Footer handleNewsletterSubmit={handleNewsletterSubmit} />
    </div>
  );
};

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

export default GoogleCloudPage;

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