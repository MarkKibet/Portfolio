
// }import React, { useState } from 'react';
// import { ChevronDown, Code, Cpu, Globe, Database, Phone, Users, Briefcase, Award, Star, Building, Heart } from 'lucide-react';

// // Main App Component
// export default function App() {
//   // Adding Bootstrap CSS directly in the component
//   React.useEffect(() => {
//     // Create a link element for Bootstrap CSS
//     const bootstrapLink = document.createElement('link');
//     bootstrapLink.rel = 'stylesheet';
//     bootstrapLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css';
//     document.head.appendChild(bootstrapLink);
    
//     // Create a script element for Bootstrap JS
//     const bootstrapScript = document.createElement('script');
//     bootstrapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js';
//     document.body.appendChild(bootstrapScript);
    
//     // Cleanup function
//     return () => {
//       document.head.removeChild(bootstrapLink);
//       document.body.removeChild(bootstrapScript);
//     };
//   }, []);
  
//   return (
//     <div className="app bg-light">
//       <Header />
//       <HeroBanner />
//       <Services />
//       <Technologies />
//       <Partners />
//       <Testimonials />
//       <AboutUs />
//       <ContactCTA />
//       <Footer />
//     </div>
//   );
// }

// // Header Component with Navbar
// function Header() {
//   const [isNavCollapsed, setIsNavCollapsed] = useState(true);

//   const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

//   return (
//     <nav className="navbar navbar-expand-lg sticky-top shadow-sm" style={{ backgroundColor: '#E6E6FA' }}>
//       <div className="container">
//         <a className="navbar-brand d-flex align-items-center" href="#">
//           <div className="me-2 rounded-circle d-flex align-items-center justify-content-center" 
//                style={{ width: '40px', height: '40px', backgroundColor: '#5D3FD3' }}>
//             <span className="text-white fw-bold">CL</span>
//           </div>
//           <span className="fw-bold" style={{ color: '#5D3FD3' }}>CinqueLabs</span>
//         </a>
        
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
//                 data-bs-target="#navbarContent" aria-controls="navbarContent" 
//                 aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation"
//                 onClick={handleNavCollapse}>
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="whatWeDoDropdown"
//                  role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                 What We Do <ChevronDown size={16} className="ms-1" />
//               </a>
//               <ul className="dropdown-menu" aria-labelledby="whatWeDoDropdown">
//                 <li><a className="dropdown-item" href="#services">Software Development</a></li>
//                 <li><a className="dropdown-item" href="#services">Mobile Applications</a></li>
//                 <li><a className="dropdown-item" href="#services">Web Development</a></li>
//                 <li><a className="dropdown-item" href="#services">Digital Transformation</a></li>
//                 <li><a className="dropdown-item" href="#services">Consulting Services</a></li>
//               </ul>
//             </li>
            
//             <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="technologyDropdown" 
//                  role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                 Technology <ChevronDown size={16} className="ms-1" />
//               </a>
//               <ul className="dropdown-menu" aria-labelledby="technologyDropdown">
//                 <li><a className="dropdown-item" href="#technologies">Frontend Development</a></li>
//                 <li><a className="dropdown-item" href="#technologies">Backend Systems</a></li>
//                 <li><a className="dropdown-item" href="#technologies">Cloud Services</a></li>
//                 <li><a className="dropdown-item" href="#technologies">Data Analytics</a></li>
//                 <li><a className="dropdown-item" href="#technologies">Artificial Intelligence</a></li>
//               </ul>
//             </li>
            
//             <li className="nav-item">
//               <a className="nav-link" href="#about">About Us</a>
//             </li>
            
//             <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="partnersDropdown" 
//                  role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                 Who We Work With <ChevronDown size={16} className="ms-1" />
//               </a>
//               <ul className="dropdown-menu" aria-labelledby="partnersDropdown">
//                 <li><a className="dropdown-item" href="#partners">Enterprise Clients</a></li>
//                 <li><a className="dropdown-item" href="#partners">Startups</a></li>
//                 <li><a className="dropdown-item" href="#partners">SMEs</a></li>
//                 <li><a className="dropdown-item" href="#partners">NGOs</a></li>
//                 <li><a className="dropdown-item" href="#partners">Government Agencies</a></li>
//               </ul>
//             </li>
            
//             <li className="nav-item ms-lg-3">
//               <a className="btn px-4 text-white" href="#contact" 
//                  style={{ backgroundColor: '#5D3FD3', borderRadius: '25px' }}>
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// // Hero Banner Component
// function HeroBanner() {
//   return (
//     <div className="position-relative overflow-hidden" style={{ backgroundColor: '#E6E6FA' }}>
//       <div className="container py-5">
//         <div className="row align-items-center">
//           <div className="col-lg-6 py-5">
//             <h1 className="display-4 fw-bold mb-4" style={{ color: '#5D3FD3' }}>
//               Empowering Your Digital Journey
//             </h1>
//             <p className="lead mb-4">
//               CinqueLabs delivers cutting-edge technological solutions that drive growth, 
//               enhance operational efficiency, and enable clients to seamlessly navigate 
//               the evolving digital landscape.
//             </p>
//             <div className="d-flex flex-wrap gap-2">
//               <a href="#contact" className="btn btn-lg px-4 text-white" 
//                  style={{ backgroundColor: '#5D3FD3', borderRadius: '25px' }}>
//                 Get Started
//               </a>
//               <a href="#services" className="btn btn-lg px-4 btn-outline-secondary" 
//                  style={{ borderRadius: '25px' }}>
//                 Our Services
//               </a>
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <div className="text-center">
//               <img src="/api/placeholder/600/500" alt="Digital innovation concept" 
//                    className="img-fluid rounded-4 shadow-lg" />
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="position-absolute bottom-0 w-100">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff">
//           <path d="M0,50 C400,100 1000,0 1440,50 L1440,100 L0,100 Z"></path>
//         </svg>
//       </div>
//     </div>
//   );
// }

// // Services Section Component
// function Services() {
//   const services = [
//     {
//       icon: <Code size={40} />,
//       title: "Software Development",
//       description: "Custom software solutions tailored to your business needs, from enterprise applications to specialized tools."
//     },
//     {
//       icon: <Phone size={40} />,
//       title: "Mobile Applications",
//       description: "Native and cross-platform mobile apps that provide seamless experiences across iOS and Android devices."
//     },
//     {
//       icon: <Globe size={40} />,
//       title: "Web Development",
//       description: "Responsive, user-friendly websites and web applications built with the latest technologies."
//     },
//     {
//       icon: <Database size={40} />,
//       title: "Digital Transformation",
//       description: "End-to-end digital transformation services to modernize your business operations and enhance efficiency."
//     },
//     {
//       icon: <Users size={40} />,
//       title: "Consulting Services",
//       description: "Expert technology consulting to help you navigate complex technical challenges and opportunities."
//     },
//     {
//       icon: <Cpu size={40} />,
//       title: "R&D Solutions",
//       description: "Cutting-edge research and development to keep your business at the forefront of technological innovation."
//     }
//   ];

//   return (
//     <section id="services" className="py-5 bg-white">
//       <div className="container py-5">
//         <div className="text-center mb-5">
//           <h6 className="text-uppercase fw-bold" style={{ color: '#5D3FD3' }}>What We Do</h6>
//           <h2 className="display-5 fw-bold">Our Services</h2>
//           <div className="mx-auto" style={{ width: '100px', height: '3px', backgroundColor: '#5D3FD3' }}></div>
//           <p className="lead mt-3">Comprehensive technology solutions to drive your business forward</p>
//         </div>

//         <div className="row g-4">
//           {services.map((service, index) => (
//             <div key={index} className="col-md-6 col-lg-4">
//               <div className="card h-100 border-0 shadow-sm hover-lift">
//                 <div className="card-body p-4">
//                   <div className="rounded-circle mb-3 d-inline-flex align-items-center justify-content-center" 
//                        style={{ width: '70px', height: '70px', backgroundColor: '#E6E6FA' }}>
//                     <div style={{ color: '#5D3FD3' }}>{service.icon}</div>
//                   </div>
//                   <h4 className="mb-3">{service.title}</h4>
//                   <p className="text-muted">{service.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // Technologies Section Component
// function Technologies() {
//   const technologies = [
//     {
//       category: "Frontend Development",
//       tech: ["React", "Angular", "Vue.js", "Next.js", "Tailwind CSS", "Bootstrap"]
//     },
//     {
//       category: "Backend Systems",
//       tech: ["Node.js", "Python", "Java", "Go", "PHP", ".NET Core"]
//     },
//     {
//       category: "Cloud Services",
//       tech: ["AWS", "Google Cloud", "Azure", "Digital Ocean", "Heroku"]
//     },
//     {
//       category: "Databases",
//       tech: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis", "Elasticsearch"]
//     },
//     {
//       category: "DevOps & Tools",
//       tech: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Ansible"]
//     }
//   ];

//   return (
//     <section id="technologies" className="py-5" style={{ backgroundColor: '#F8F7FF' }}>
//       <div className="container py-5">
//         <div className="text-center mb-5">
//           <h6 className="text-uppercase fw-bold" style={{ color: '#5D3FD3' }}>Our Stack</h6>
//           <h2 className="display-5 fw-bold">Technologies We Use</h2>
//           <div className="mx-auto" style={{ width: '100px', height: '3px', backgroundColor: '#5D3FD3' }}></div>
//           <p className="lead mt-3">Cutting-edge tools and frameworks powering our solutions</p>
//         </div>

//         <div className="row g-4">
//           {technologies.map((tech, index) => (
//             <div key={index} className="col-md-6 col-lg-4">
//               <div className="card h-100 border-0 shadow-sm">
//                 <div className="card-body p-4">
//                   <h4 className="mb-4 pb-2 border-bottom" style={{ color: '#5D3FD3' }}>{tech.category}</h4>
//                   <div className="d-flex flex-wrap gap-2">
//                     {tech.tech.map((item, idx) => (
//                       <span key={idx} className="badge rounded-pill px-3 py-2 mb-2"
//                             style={{ backgroundColor: '#E6E6FA', color: '#5D3FD3' }}>
//                         {item}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-5 text-center">
//           <img src="/api/placeholder/1000/300" alt="Technology stack visualization" 
//                className="img-fluid rounded-4 shadow" />
//         </div>
//       </div>
//     </section>
//   );
// }

// // Partners Section Component
// function Partners() {
//   const clientTypes = [
//     {
//       icon: <Building size={40} />,
//       type: "Enterprise Clients",
//       description: "We help large organizations modernize legacy systems and implement innovative solutions."
//     },
//     {
//       icon: <Star size={40} />,
//       type: "Startups",
//       description: "We partner with startups to build scalable products and accelerate growth."
//     },
//     {
//       icon: <Briefcase size={40} />,
//       type: "SMEs",
//       description: "We enable small and medium businesses to leverage technology for competitive advantage."
//     },
//     {
//       icon: <Heart size={40} />,
//       type: "NGOs",
//       description: "We support non-profits with digital tools to maximize their social impact."
//     }
//   ];

//   return (
//     <section id="partners" className="py-5 bg-white">
//       <div className="container py-5">
//         <div className="text-center mb-5">
//           <h6 className="text-uppercase fw-bold" style={{ color: '#5D3FD3' }}>Our Partners</h6>
//           <h2 className="display-5 fw-bold">Who We Work With</h2>
//           <div className="mx-auto" style={{ width: '100px', height: '3px', backgroundColor: '#5D3FD3' }}></div>
//           <p className="lead mt-3">Trusted by organizations of all sizes across industries</p>
//         </div>

//         <div className="row g-4 mb-5">
//           {clientTypes.map((client, index) => (
//             <div key={index} className="col-md-6 col-lg-3">
//               <div className="card h-100 border-0 shadow-sm text-center">
//                 <div className="card-body p-4">
//                   <div className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" 
//                        style={{ width: '70px', height: '70px', backgroundColor: '#E6E6FA' }}>
//                     <div style={{ color: '#5D3FD3' }}>{client.icon}</div>
//                   </div>
//                   <h4 className="mb-3">{client.type}</h4>
//                   <p className="text-muted">{client.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-5">
//           <h4 className="text-center mb-4">Trusted By</h4>
//           <div className="row g-4 align-items-center justify-content-center">
//             {[1, 2, 3, 4, 5, 6].map((i) => (
//               <div key={i} className="col-6 col-md-4 col-lg-2">
//                 <div className="bg-light p-3 rounded text-center">
//                   <img src={`/api/placeholder/150/80`} alt={`Client logo ${i}`} className="img-fluid" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Testimonials Component
// function Testimonials() {
//   const testimonials = [
//     {
//       quote: "CinqueLabs transformed our business with their innovative solutions. Their team's technical expertise and commitment to excellence made all the difference.",
//       author: "Sarah Johnson",
//       position: "CTO, TechVision Inc."
//     },
//     {
//       quote: "Working with CinqueLabs was a game-changer for our startup. They delivered a scalable platform that helped us secure our Series A funding.",
//       author: "Michael Odhiambo",
//       position: "Founder, InnovateME"
//     },
//     {
//       quote: "The digital transformation journey with CinqueLabs has significantly improved our operational efficiency and customer satisfaction scores.",
//       author: "Elizabeth Njeri",
//       position: "Operations Director, Global Solutions"
//     }
//   ];

//   return (
//     <section className="py-5" style={{ backgroundColor: '#F8F7FF' }}>
//       <div className="container py-5">
//         <div className="text-center mb-5">
//           <h6 className="text-uppercase fw-bold" style={{ color: '#5D3FD3' }}>Testimonials</h6>
//           <h2 className="display-5 fw-bold">What Our Clients Say</h2>
//           <div className="mx-auto" style={{ width: '100px', height: '3px', backgroundColor: '#5D3FD3' }}></div>
//         </div>

//         <div className="row g-4">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="col-md-6 col-lg-4">
//               <div className="card h-100 border-0 shadow-sm">
//                 <div className="card-body p-4">
//                   <div className="mb-3 fs-1" style={{ color: '#5D3FD3' }}>"</div>
//                   <p className="mb-4 fst-italic">{testimonial.quote}</p>
//                   <div className="d-flex align-items-center">
//                     <div className="rounded-circle bg-secondary me-3" style={{ width: '50px', height: '50px' }}>
//                       <img src={`/api/placeholder/50/50`} alt={testimonial.author} 
//                            className="img-fluid rounded-circle" />
//                     </div>
//                     <div>
//                       <h6 className="mb-0">{testimonial.author}</h6>
//                       <small className="text-muted">{testimonial.position}</small>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // About Us Section
// function AboutUs() {
//   const founders = [
//     {
//       name: "Ian Chege",
//       position: "Co-Founder & CEO",
//       bio: "With over 15 years of experience in software development and business leadership, Ian leads CinqueLabs' vision and strategic direction."
//     },
//     {
//       name: "Tillen Otuoma",
//       position: "Co-Founder & CTO",
//       bio: "A brilliant technologist with expertise in cloud architecture and AI, Tillen oversees all technical aspects of CinqueLabs' operations."
//     },
//     {
//       name: "Ryan Alenga",
//       position: "Co-Founder & COO",
//       bio: "Ryan brings operational excellence and project management expertise to ensure smooth delivery of all CinqueLabs' solutions."
//     },
//     {
//       name: "Mark Kibet",
//       position: "Co-Founder & CFO",
//       bio: "With a background in finance and technology investments, Mark manages CinqueLabs' financial strategy and growth initiatives."
//     },
//     {
//       name: "Patty Kariuki",
//       position: "Co-Founder & CMO",
//       bio: "Patty leads CinqueLabs' marketing and brand strategy, leveraging her extensive experience in digital marketing and communications."
//     }
//   ];

//   return (
//     <section id="about" className="py-5 bg-white">
//       <div className="container py-5">
//         <div className="text-center mb-5">
//           <h6 className="text-uppercase fw-bold" style={{ color: '#5D3FD3' }}>About Us</h6>
//           <h2 className="display-5 fw-bold">Our Story</h2>
//           <div className="mx-auto" style={{ width: '100px', height: '3px', backgroundColor: '#5D3FD3' }}></div>
//         </div>

//         <div className="row align-items-center mb-5">
//           <div className="col-lg-6 mb-4 mb-lg-0">
//             <img src="/api/placeholder/600/400" alt="CinqueLabs team" className="img-fluid rounded-4 shadow" />
//           </div>
//           <div className="col-lg-6">
//             <h3 className="mb-4">Empowering businesses through innovative technology</h3>
//             <p className="mb-4">
//               Founded in 2025, CinqueLabs emerged from a shared vision to create transformative digital experiences 
//               that empower businesses and individuals alike. Our journey began when five tech enthusiasts with 
//               complementary skills decided to combine their expertise to solve complex business challenges.
//             </p>
//             <p>
//               Today, CinqueLabs is a growing technology company committed to delivering cutting-edge products 
//               and services that drive growth, enhance operational efficiency, and enable clients to seamlessly 
//               navigate the evolving digital landscape. Our mission is to improve lives and businesses globally 
//               through innovative technological solutions.
//             </p>
//           </div>
//         </div>

//         <div className="text-center my-5">
//           <h3 className="mb-4">Our Core Values</h3>
//           <div className="row g-4">
//             {['Innovation', 'Excellence', 'Integrity', 'Collaboration', 'Client Success'].map((value, index) => (
//               <div key={index} className="col-6 col-md-4 col-lg">
//                 <div className="card h-100 border-0 shadow-sm">
//                   <div className="card-body p-4">
//                     <div className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" 
//                          style={{ width: '60px', height: '60px', backgroundColor: '#E6E6FA' }}>
//                       <Award size={30} style={{ color: '#5D3FD3' }} />
//                     </div>
//                     <h5>{value}</h5>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-5">
//           <h3 className="text-center mb-4">Meet Our Founders</h3>
//           <div className="row g-4">
//             {founders.map((founder, index) => (
//               <div key={index} className="col-md-6 col-lg-4">
//                 <div className="card h-100 border-0 shadow-sm">
//                   <div className="text-center pt-4">
//                     <div className="rounded-circle mx-auto mb-3 overflow-hidden" style={{ width: '150px', height: '150px' }}>
//                       <img src={`/api/placeholder/150/150`} alt={founder.name} className="img-fluid" />
//                     </div>
//                   </div>
//                   <div className="card-body text-center">
//                     <h4>{founder.name}</h4>
//                     <p className="text-muted mb-3">{founder.position}</p>
//                     <p>{founder.bio}</p>
//                     <div className="d-flex justify-content-center gap-2 mt-3">
//                       {['LinkedIn', 'Twitter', 'GitHub'].map((social, idx) => (
//                         <a key={idx} href="#" className="btn btn-sm rounded-circle" 
//                            style={{ backgroundColor: '#E6E6FA', color: '#5D3FD3', width: '36px', height: '36px' }}>
//                           <i className={`bi bi-${social.toLowerCase()}`}></i>
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Contact CTA Component
// function ContactCTA() {
//   return (
//     <section id="contact" className="py-5" style={{ backgroundColor: '#5D3FD3' }}>
//       <div className="container py-5">
//         <div className="row justify-content-center text-center">
//           <div className="col-lg-8">
//             <h2 className="display-5 fw-bold text-white mb-4">Ready to Transform Your Business?</h2>
//             <p className="lead text-white mb-4">
//               Get in touch with our team to discuss how CinqueLabs can help you achieve your digital goals.
//             </p>
//             <a href="#" className="btn btn-lg px-4 text-purple" 
//                style={{ backgroundColor: 'white', color: '#5D3FD3', borderRadius: '25px' }}>
//               Contact Us Now
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Footer Component
// function Footer() {
//   return (
//     <footer className="bg-dark text-white pt-5 pb-3">
//       <div className="container">
//         <div className="row g-4">
//           <div className="col-lg-4">
//             <div className="mb-4">
//               <a className="d-flex align-items-center text-decoration-none mb-3" href="#">
//                 <div className="me-2 rounded-circle d-flex align-items-center justify-content-center" 
//                      style={{ width: '40px', height: '40px', backgroundColor: '#E6E6FA' }}>
//                   <span style={{ color: '#5D3FD3', fontWeight: 'bold' }}>CL</span>
//                 </div>
//                 <span className="text-white fw-bold fs-4">CinqueLabs</span>
//               </a>
//               <p className="text-muted">
//                 Empowering individuals and businesses through innovative technological solutions.
//               </p>
//             </div>
//           </div>
          
//           <div className="col-md-4 col-lg-2">
//             <h5 className="mb-4">Services</h5>
//             <ul className="list-unstyled">
//               <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Software Development</a></li>
//               <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Mobile Applications</a></li>
//               <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Web Development</a></li>
//               <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Digital Transformation</a></li>
//               <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Consulting Services</a></li>
//             </ul>
//           </div>
          
//           <div className="col-md-4 col-lg-2">
//             <h5 className="mb-4">Company</h5>
//             <ul className="list-unstyled">
//               <li className="mb-2"><a href="#about" className="text-muted text-decoration-none">About Us</a></li>
//               <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Careers</a></li>
//               <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Blog</a></li>
//               <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Press</a></li>
//               <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Contact</a></li>
//             </ul>
//           </div>
          
//           <div className="col-md-4 col-lg-4">
//             <h5 className="mb-4">Contact Us</h5>
//             <ul className="list-unstyled">
//               <li className="mb-2 text-muted">
//                 <i className="bi bi-geo-alt me-2"></i> Nairobi, Kenya
//               </li>
//               <li className="mb-2 text-muted">
//                 <i className="bi bi-envelope me-2"></i> info@cinquelabs.com
//               </li>
//               <li className="mb-2 text-muted">
//                 <i className="bi bi-telephone me-2"></i> +254 123 456 789
//               </li>
//             </ul>
//             <div className="d-flex gap-3 mt-4">
//               {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social, index) => (
//                 <a key={index} href="#" className="text-decoration-none">
//                   <div className="rounded-circle d-flex align-items-center justify-content-center" 
//                        style={{ width: '36px', height: '36px', backgroundColor: '#E6E6FA' }}>
//                     <i className={`bi bi-${social.toLowerCase()}`} style={{ color: '#5D3FD3' }}></i>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
        
//         <div className="border-top border-secondary mt-5 pt-4">
//           <div className="row">
//             <div className="col-md-6 text-center text-md-start">
//               <p className="text-muted small mb-0">
//                 &copy; {new Date().getFullYear()} CinqueLabs. All rights reserved.
//               </p>
//             </div>
//             <div className="col-md-6 text-center text-md-end">
//               <ul className="list-inline mb-0">
//                 <li className="list-inline-item">
//                   <a href="#" className="text-muted small text-decoration-none">Privacy Policy</a>
//                 </li>
//                 <li className="list-inline-item ms-3">
//                   <a href="#" className="text-muted small text-decoration-none">Terms of Service</a>
//                 </li>
//                 <li className="list-inline-item ms-3">
//                   <a href="#" className="text-muted small text-decoration-none">Cookies Policy</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }