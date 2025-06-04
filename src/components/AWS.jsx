import { CheckCircle2 } from "lucide-react";

const AWSPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 h-full w-1/2 bg-[url('https://techifysolutions.com/wp-content/uploads/2022/11/AWS-1.webp')] bg-cover bg-center"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AWS Cloud <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Leverage the power of AWS with CinqueLabs. Our expert AWS engineers deliver scalable, reliable, and secure cloud solutions tailored to your business needs.
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
                src="https://techifysolutions.com/wp-content/uploads/2022/11/AWS-2.webp" 
                alt="AWS Cloud Services" 
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

      {/* Why Choose AWS Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 text-center">
              <img 
                src="https://techifysolutions.com/wp-content/uploads/2022/11/pic-2.png" 
                alt="AWS Benefits" 
                className="inline-block max-w-xs lg:max-w-md"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose <span className="text-primary">AWS</span> for Your Cloud Solutions?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                AWS is the world's most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. With AWS, you can benefit from a scalable, reliable, and low-cost infrastructure platform in the cloud.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Scalability", description: "Easily scale your infrastructure up or down based on demand" },
                  { title: "Cost-Effective", description: "Pay only for what you use with no upfront expenses" },
                  { title: "Flexibility", description: "Choose the operating system, programming language, and software stack" },
                  { title: "Security", description: "Robust security measures to protect your data and applications" },
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
              Our <span className="text-primary">AWS</span> Cloud Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AWS solutions to accelerate your cloud journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                Why Choose <span className="text-primary">CinqueLabs</span> for AWS Cloud Services?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our deep expertise in AWS, combined with our commitment to your success, makes us the ideal partner for your cloud journey.
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
              Our AWS <span className="text-primary">Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging the latest AWS services and tools to deliver robust cloud solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                alt="Hire AWS Developers" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Hire Dedicated <span className="text-primary">AWS Developers</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Augment your team with our senior AWS developers available for full-time or part-time engagements.
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
              Our <span className="text-primary">AWS Development Process</span>
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
              Our <span className="text-primary">AWS Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses achieve their goals with AWS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              Trusted by startups and Fortune 500 companies worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              Ready to Elevate Your Business with <span className="text-secondary">AWS Cloud Solutions</span>?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's discuss how our AWS expertise can help you achieve your business objectives.
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
              Answers to common questions about our AWS cloud services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
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
              <p className="text-gray-300">Get in touch with our AWS experts today</p>
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

export default AWSPage;

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