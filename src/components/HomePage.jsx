import { useEffect, useState } from "react";
import { ChevronDown, Code, Phone, Globe, Zap, Database, Cloud, LineChart, ShieldCheck, Layers } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import ""; // Ensure the correct path



// Custom CSS for futuristic design with improved text visibility
const GlobalStyles = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --primary: #6E44FF;
        --primary-dark: #5D3FD3;
        --secondary: #36EAEF;
        --accent: #FF3DDB;
        --dark: #13111C;
        --light: #F8F7FF;
        --text-on-dark: #FFFFFF;
        --text-muted-on-dark: rgba(255, 255, 255, 0.75);
        --gradient-primary: linear-gradient(135deg, #6E44FF 0%, #FF3DDB 100%);
        --gradient-blue: linear-gradient(135deg, #36EAEF 0%, #6E44FF 100%);
        --gradient-purple: linear-gradient(135deg, #6E44FF 0%, #B444FF 100%);
        --gradient-accent: linear-gradient(135deg, #FF3DDB 0%, #FF9F5B 100%);
      }
      
      body {
        background-color: var(--light);
        font-family: 'Inter', sans-serif;
        color: #333;
      }
      
      .bg-gradient-primary {
        background: var(--gradient-primary);
      }
      
      .bg-gradient-blue {
        background: var(--gradient-blue);
      }
      
      .bg-gradient-purple {
        background: var(--gradient-purple);
      }
      
      .bg-gradient-accent {
        background: var(--gradient-accent);
      }
      
      .text-gradient {
        background: var(--gradient-primary);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      
      .hover-lift {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .hover-lift:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 30px rgba(110, 68, 255, 0.15) !important;
      }
      
      .feature-card {
        border-radius: 16px;
        overflow: hidden;
        border: none;
        transition: all 0.3s ease;
      }
      
      .feature-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 30px rgba(110, 68, 255, 0.15);
      }
      
      .feature-card .icon-wrapper {
        width: 70px;
        height: 70px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--gradient-blue);
        color: white;
        font-size: 28px;
        margin-bottom: 20px;
      }
      
      .btn-glow {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
      }
      
      .btn-glow:before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: rgba(255,255,255,0.2);
        transform: rotate(45deg);
        animation: glow 5s linear infinite;
      }
      
      @keyframes glow {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
      }
      
      .glass-card {
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 16px;
      }
      
      .pulse {
        animation: pulse 2s infinite;
      }
      
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      .sparkle {
        position: relative;
      }
      
      .sparkle:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0L16.7442 13.2558L30 15L16.7442 16.7442L15 30L13.2558 16.7442L0 15L13.2558 13.2558L15 0Z' fill='white' fill-opacity='0.3'/%3E%3C/svg%3E");
        background-size: 30px 30px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      .sparkle:hover:after {
        opacity: 1;
        animation: sparkle 0.8s linear infinite;
      }
      
      @keyframes sparkle {
        0% { background-position: 0 0; }
        100% { background-position: 60px 60px; }
      }
      
      .navbar {
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.8) !important;
      }
      
      .tech-pill {
        transition: all 0.3s ease;
        border-radius: 30px;
        border: 1px solid rgba(110, 68, 255, 0.2);
      }
      
      .tech-pill:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(110, 68, 255, 0.15);
        background: var(--gradient-primary) !important;
        color: white !important;
      }
      
      .moving-border {
        position: relative;
        border-radius: 20px;
        overflow: hidden;
      }
      
      .moving-border:before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(45deg, var(--primary), var(--secondary), var(--accent), var(--primary));
        background-size: 400% 400%;
        z-index: -1;
        border-radius: 22px;
        animation: gradient 10s ease infinite;
      }
      
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      /* Fix text visibility on dark backgrounds */
      .bg-dark-section {
        color: var(--text-on-dark);
      }
      
      .text-muted-light {
        color: var(--text-muted-on-dark) !important;
      }
      
      /* Card on dark background fixes */
      .card-on-dark {
        color: var(--text-on-dark);
      }
      
      .card-on-dark .text-muted {
        color: var(--text-muted-on-dark) !important;
      }
    `;
    document.head.appendChild(style);
    
    // Load Google Fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(fontLink);
    
    return () => {
      document.head.removeChild(style);
      document.head.removeChild(fontLink);
    };
  }, []);
  
  return null;
};

// Main App Component
export default function App() {
  useEffect(() => {
    // Load Bootstrap CSS
    const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css';
    document.head.appendChild(bootstrapLink);
    
    // Load Bootstrap JS
    const bootstrapScript = document.createElement('script');
    bootstrapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js';
    document.body.appendChild(bootstrapScript);
 
    // Load Bootstrap Icons
    const iconsLink = document.createElement('link');
    iconsLink.rel = 'stylesheet';
    iconsLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css';
    document.head.appendChild(iconsLink);
    
    // Load AOS library for scroll animations
    const aosCSS = document.createElement('link');
    aosCSS.rel = 'stylesheet';
    aosCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
    document.head.appendChild(aosCSS);
    
    const aosJS = document.createElement('script');
    aosJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
    document.body.appendChild(aosJS);
    
    // Initialize AOS
    setTimeout(() => {
      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-out-cubic'
        });
      }
    }, 100);
    
    // Cleanup function
    return () => {
      document.head.removeChild(bootstrapLink);
      document.body.removeChild(bootstrapScript);
      document.head.removeChild(iconsLink);
      document.head.removeChild(aosCSS);
      document.body.removeChild(aosJS);
    };
  }, []);
  
  return (
    <div className="app min-vh-100 d-flex flex-column">
      <GlobalStyles />
      <Navbar />
      <main className="flex-grow-1">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

// Navbar Component
function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  <nav className={`navbar navbar-expand-lg sticky-top ${isScrolled ? 'shadow-sm' : ''}`} 
       style={{ transition: 'all 0.3s ease' }}>
    <div className="container">
      <a className="navbar-brand d-flex align-items-center" href="/">
        {/* Logo behind text */}
        <div className="me-2 rounded d-flex align-items-center justify-content-center moving-border" 
             style={{ width: '165px', height: '70px', background: 'var(--gradient-primary)' }}>
          <img src="/mylogo.png" alt="CinqueLabs Logo" className="img-fluid" 
               style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Enlarged & Stylish Text */}
   

  <span className="fw-bold text-gradient display-5 text-shadow">
    <span className="text-purple"> C</span>inque<span className="text-purple">L</span>abs</span>
    

      </a>
        
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarContent" aria-controls="navbarContent" 
                aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation"
                onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarContent">
  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    <li className="nav-item dropdown">
  <a className="nav-link fw-bold text-purple d-flex align-items-center" href="#" 
     id="dropdownMenu1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    What We Do <ChevronDown size={18} className="ms-2" />
  </a>
  <ul className="dropdown-menu bg-opacity rounded-3 shadow-lg w-500" aria-labelledby="dropdownMenu1">
   <div className="container-fluid">
    <div className="row">
     
      <div className="col-md-6">
        <li><a className="dropdown-item py-3 fw-bold text-light" href="#">Software Development</a></li>
        <li><a className="dropdown-item py-3 fw-bold text-light" href="#">Mobile Applications</a></li>
        <li><a className="dropdown-item py-3 fw-bold text-light" href="#">Web Development</a></li>
      </div>

      
      <div className="col-md-6">
        <li><a className="dropdown-item py-3 fw-bold text-light" href="#">Digital Transformation</a></li>
        <li><a className="dropdown-item py-3 fw-bold text-light" href="#">Consulting Services</a></li>
        <li><a className="dropdown-item py-3 fw-bold text-light" href="#">Cloud Solutions</a></li>
      </div>
    </div>
  </div>
   <div className="dropdown-image ms-4">
    <img src="/image.png" alt="Digital Solutions" className="img-fluid rounded shadow-sm" />
  </div>
</ul>
</li>

<li className="nav-item dropdown">
  <a className="nav-link fw-bold text-purple d-flex align-items-center" href="#" 
     id="dropdownMenu2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Technology <ChevronDown size={18} className="ms-2" />
  </a>
  <ul className="dropdown-menu bg-opacity rounded-3 shadow-lg w-500" aria-labelledby="dropdownMenu2">
    <div className="row">
       <div className="col-md-6"> 
       <li><a className="dropdown-item py-3 fw-bold text-light" href="#">Frontend Development</a></li>
    <li><a className="dropdown-item py-3 fw-bold text-light" href="#">Backend Systems</a></li>
    <li><a className="dropdown-item py-3 fw-bold text-light" href="#">Cloud Services</a></li>
     </div>
   <div className="col-md-6">
     <li><a className="dropdown-item py-3 fw-bold text-light" href="#">Data Analytics</a></li>
    <li><a className="dropdown-item py-3 fw-bold text-light" href="#">Artificial Intelligence</a></li>
    </div> 
       </div>
    
   
  </ul>
</li>

<li className="nav-item dropdown">
  <a className="nav-link fw-bold text-purple d-flex align-items-center" href="#" 
     id="dropdownMenu3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Who We Work With <ChevronDown size={18} className="ms-2" />
  </a>
  <ul className="dropdown-menu bg-opacity rounded-3 shadow-lg w-500" aria-labelledby="dropdownMenu3">
     <div className="row"> 
       <div className="col-md-6"> 
          <li><a className="dropdown-item py-3 fw-bold text-light" href="#">Enterprise Clients</a></li>
    <li><a className="dropdown-item py-3 fw-bold text-light" href="#">Startups</a></li>
    <li><a className="dropdown-item py-3 fw-bold text-light" href="#">SMEs</a></li>
        </div> 
     <div className="col-md-6"> 
         <li><a className="dropdown-item py-3 fw-bold text-light" href="#">NGOs</a></li>
    <li><a className="dropdown-item py-3 fw-bold text-light" href="#">Government Agencies</a></li>
    
     </div>
 
     </div>
   
  </ul>
</li>

      <li className="nav-item">
      <a className="nav-link fw-bold text-purple" href="#">About Us</a>
    </li>


    <li className="nav-item ms-lg-3">
      <a className="btn px-4 text-white btn-glow position-relative fw-bold" href="#" 
         style={{ background: 'var(--gradient-primary)', borderRadius: '30px' }}>
        Contact Us
      </a>
    </li>
  </ul>
</div>

      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturedServices />
      <CoreTechnologies />
      <ProjectShowcase />
      <TechProcess />
      <TestimonialSection />
      <StatsCounter />
      <BlogSection />
      <CtaSection />
    </>
  );
}

// HeroBanner Component
function HeroBanner() {
  return (
    <div className="position-relative overflow-hidden bg-dark-section" style={{ background: 'var(--dark)' }}>
      {/* Animated background particles */}
      <div className="position-absolute w-100 h-100" style={{ overflow: 'hidden', opacity: 0.3 }}>
        <div className="position-absolute" style={{ 
          width: '800px', 
          height: '800px', 
          borderRadius: '50%', 
          filter: 'blur(80px)',
          background: 'var(--gradient-primary)',
          animation: 'float 20s ease-in-out infinite',
          top: '-400px',
          right: '-200px'
        }}></div>
        <div className="position-absolute" style={{ 
          width: '600px', 
          height: '600px', 
          borderRadius: '50%', 
          filter: 'blur(80px)',
          background: 'var(--gradient-blue)',
          animation: 'float 15s ease-in-out infinite reverse',
          bottom: '-300px',
          left: '-100px'
        }}></div>
      </div>
      
      <div className="container py-5 position-relative">
        <div className="row align-items-center min-vh-75" style={{ minHeight: '75vh' }}>
          <div className="col-lg-6 py-5" data-aos="fade-right">
            
            
           <div className="badge bg-dark text-info mb-4 px-3 py-2 rounded-pill">
  <span className="me-2" style={{ color: 'var(--secondary)' }}>•</span> 
  Next Gen Solutions
</div>

<h1 className="display-3 fw-bold mb-4 text-gradient">
  Empowering Your Digital Journey
</h1>


<p className="lead mb-4 text-muted-light fw-bold mb-3" style={{ fontSize: '1.3rem' }}>

  <strong>
 At CinqueLabs, we craft innovative technological solutions designed to drive growth, 
  boost efficiency, and help businesses thrive in an evolving digital landscape. 
  </strong>
 
</p>



<p className="lead mb-4 text-muted-light fw-bold mb-3" style={{ fontSize: '1.3rem' }}>
  From concept to reality, we engineer digital experiences that maximize potential, 
  enhance interactivity, and unlock limitless opportunities.
</p>


<div className="ripple-container">
  <div className="ripple"></div>
</div>

<div className="d-flex flex-wrap gap-3 mt-5">
  <a href="#" className="btn btn-lg px-4 py-3 text-white fw-medium btn-glow" 
     style={{ background: 'var(--gradient-primary)', borderRadius: '50px', boxShadow: '0px 5px 15px rgba(0,0,0,0.2)' }}>
    <span className="d-flex align-items-center">
      Build Your Dream App With Us <Zap size={18} className="ms-2" />
    </span>
  </a>
  
  <a href="#" className="btn btn-lg px-4 py-3 fw-medium text-white" 
     style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50px', backdropFilter: 'blur(12px)', boxShadow: '0px 4px 10px rgba(0,0,0,0.15)' }}>
    Explore Solutions
  </a>
</div>


            <div className="d-flex align-items-center mt-5 pt-3">
              {/* <div className="d-flex">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="position-relative" style={{ marginLeft: i === 1 ? '0' : '-15px' }}>
                    <img src={`/api/placeholder/36/36`} alt={`Client ${i}`} 
                         className="rounded-circle border border-2 border-dark" 
                         style={{ width: '36px', height: '36px' }} />
                  </div>
                ))}
              </div> */}
              
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <div className="position-relative">
              {/* 3D-like floating elements */}
              <div className="position-absolute" style={{ 
                width: '0px', 
                height: '0px', 
                borderRadius: '24px', 
                background: 'var(--gradient-blue)',
                animation: 'float 6s ease-in-out infinite',
                top: '20%',
                left: '-15%',
                zIndex: 1,
                boxShadow: '0 30px 40px rgba(0,0,0,0.3)',
                transform: 'rotate(-15deg)'
              }}></div>
              <div className="position-absolute" style={{ 
                width: '0px', 
                height: '0px', 
                borderRadius: '16px', 
                background: 'var(--gradient-accent)',
                animation: 'float 8s ease-in-out infinite',
                bottom: '10%',
                right: '0%',
                zIndex: 1,
                boxShadow: '0 20px 30px rgba(0,0,0,0.2)',
                transform: 'rotate(10deg)'
              }}></div>
              <div className="position-relative">
  {/* React Icon */}
  <i className="fab fa-react position-absolute text-info fs-1"
     style={{ left: "10%", bottom: "5%", animation: "float 6s infinite" }}></i>

  
  <i className="fab fa-js position-absolute text-warning fs-1"
     style={{ right: "15%", bottom: "10%", animation: "float 9s infinite" }}></i> 

 
  <i className="fab fa-node-js position-absolute text-success fs-1"
     style={{ left: "100%", bottom: "30%", animation: "float 9s infinite" }}></i>

  
  <i className="fab fa-docker position-absolute text-primary fs-1"
     style={{ right: "100%", bottom: "2%", animation: "float 9s infinite" }}></i>
</div>
<div className="position-relative d-flex justify-content-center align-items-center">
  {/* Engine Core (Central Icon) */}
  <div className="position-absolute d-flex justify-content-center align-items-center bg-dark rounded-circle"
       style={{ width: '80px', height: '80px', zIndex: 3 }}>
    <i className="bi bi-cpu text-white fs-2"></i>
  </div>

  {/* Rotating Outer Rings */}
 {/* Rotating Outer Rings */}
<div className="spinner-border text-primary position-absolute"
     style={{ width: '120px', height: '120px', animationDuration: '2s', zIndex: 2 }} role="status"></div>

<div className="spinner-border text-purple position-absolute"
     style={{ width: '160px', height: '160px', animationDuration: '3s', zIndex: 1 }} role="status"></div>

  {/* Moving Parts (Inner Components) */}
  {/* <div className="position-absolute bg-green rounded-circle d-flex align-items-center justify-content-center"
       style={{ width: '40px', height: '40px', top: '15%', left: '30%', zIndex: 2 }}>
    <i className="bi bi-gear-fill text-dark fs-4"></i>
  </div> */}
  {/* <div className="position-absolute bg-purple rounded-circle d-flex align-items-center justify-content-center"
       style={{ width: '40px', height: '40px', bottom: '20%', right: '25%', zIndex: 2 }}>
    <i className="bi bi-wrench-adjustable text-dark fs-4"></i>
  </div> */}
</div>

              
              {/* Main hero image */}
              <div className="glass-card p-3 shadow-lg moving-border" 
                   style={{ borderRadius: '30px', overflow: 'hidden' }}>
                <img src="/tech.jpg" alt="Digital innovation concept" 
                     className="img-fluid rounded-4" style={{ objectFit: 'cover' }} />
              </div>
              
              {/* Floating stats card */}
              <div className="position-absolute glass-card p-3 shadow-lg card-on-dark" style={{ 
                borderRadius: '20px', 
                bottom: '-1%',
                left: '25%',
                zIndex: 2,
                minWidth: '220px',
                animation: 'float 10s ease-in-out infinite',
              }}>
                <div className="d-flex align-items-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3"
                       style={{ width: '50px', height: '50px', background: 'var(--gradient-blue)' }}>
                    <LineChart size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="mb-0 text-white" style={{ fontSize: '0.85rem' }}>Success Rate</p>
                    <h5 className="mb-0 text-white fw-bold">100%</h5>
                  </div>
                </div>
              </div>
              
              {/* Floating tech icons */}
              <div className="position-absolute glass-card d-flex align-items-center justify-content-center shadow-lg" style={{ 
                width: '70px',
                height: '70px',
                borderRadius: '16px', 
                top: '15%',
                right: '-11%',
                zIndex: 2,
                animation: 'float 7s ease-in-out infinite',
                background: 'rgba(0,0,0,0.3)'
              }}>
                <Database size={30} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="position-absolute bottom-0 w-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" fill="var(--light)">
          <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,69.3C960,75,1056,85,1152,90.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}
// FeaturedServices Component
function FeaturedServices() {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs with cutting-edge technologies."
    },
    {
      icon: <Phone size={40} />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver seamless user experiences across devices."
    },
    {
      icon: <Globe size={40} />,
      title: "Web Development",
      description: "Dynamic, responsive websites and progressive web applications built with modern frameworks."
    },
    {
      icon: <Database size={40} />,
      title: "Data Management",
      description: "Robust data architecture and analytics solutions to transform your business intelligence."
    },
    {
      icon: <Cloud size={40} />,
      title: "Cloud Services",
      description: "Scalable and secure cloud infrastructure design, migration, and management solutions."
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Cybersecurity",
      description: "Comprehensive security protocols and solutions to protect your digital assets."
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container py-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <h6 className="text-uppercase fw-bold" style={{ color: 'var(--primary)' }}>Our Expertise</h6>
          <h2 className="display-5 fw-bold">Featured Services</h2>
          <div className="mx-auto" style={{ width: '100px', height: '3px', background: 'var(--gradient-primary)' }}></div>
          <p className="lead mt-3">Leveraging technology to solve complex business challenges</p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card h-100 border-0 shadow-sm hover-lift feature-card">
                <div className="card-body p-4">
                  <div className="icon-wrapper mb-4">
                    {service.icon}
                  </div>
                  <h4 className="mb-3">{service.title}</h4>
                  <p className="text-muted mb-4">{service.description}</p>
                  <a href="#" className="btn px-4 py-2 text-white" 
                     style={{ background: 'var(--gradient-primary)', borderRadius: '30px' }}>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CoreTechnologies Component
function CoreTechnologies() {
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "Vue.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "Java", category: "Backend" },
    { name: "AWS", category: "Cloud" },
    { name: "Azure", category: "Cloud" },
    { name: "Google Cloud", category: "Cloud" },
    { name: "TensorFlow", category: "AI" },
    { name: "PyTorch", category: "AI" },
    { name: "Kubernetes", category: "DevOps" }
  ];

  return (
    <section className="py-5 position-relative overflow-hidden" style={{ background: 'var(--dark)' }}>
      {/* Background elements */}
      <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, overflow: 'hidden', opacity: 0.1 }}>
        <div className="position-absolute" style={{ 
          width: '600px', 
          height: '600px', 
          borderRadius: '50%', 
          filter: 'blur(60px)',
          background: 'var(--gradient-blue)',
          animation: 'float 15s ease-in-out infinite',
          top: '-300px',
          right: '-200px'
        }}></div>
        <div className="position-absolute" style={{ 
          width: '500px', 
          height: '500px', 
          borderRadius: '50%', 
          filter: 'blur(60px)',
          background: 'var(--gradient-accent)',
          animation: 'float 18s ease-in-out infinite reverse',
          bottom: '-250px',
          left: '-100px'
        }}></div>
      </div>
      
      <div className="container py-5 position-relative">
        <div className="text-center mb-5" data-aos="fade-up">
          <h6 className="text-uppercase fw-bold text-secondary">Tech Stack</h6>
          <h2 className="display-5 fw-bold text-white">Core Technologies</h2>
          <div className="mx-auto" style={{ width: '100px', height: '3px', background: 'var(--gradient-primary)' }}></div>
          <p className="lead mt-3 text-light opacity-75">Cutting-edge tools and frameworks powering our solutions</p>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5" data-aos="fade-up" data-aos-delay="100">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-pill px-4 py-3 mb-3 d-flex align-items-center" 
                 style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
              <span className="text-secondary me-2">•</span>
              <span className="text-white">{tech.name}</span>
              <span className="ms-2 badge rounded-pill" style={{ background: 'var(--primary)', fontSize: '0.65rem' }}>
                {tech.category}
              </span>
            </div>
          ))}
        </div>
        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
          <a href="#" className="btn px-4 py-2 text-white" 
             style={{ background: 'var(--gradient-primary)', borderRadius: '30px' }}>
            Explore Our Tech Stack
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectShowcase() {
  const projects = [
    {
      image: "/-custom-software-solutions-for-large-organizations.png",
      title: "Enterprise Solutions",
      description: "Custom software solutions for large organizations"
    },
    {
      image: "/mobile-experiences-mobile-experiences-native-and-c.png",
      title: "Mobile Experiences",
      description: "Native and cross-platform mobile applications"
    },
    {
      image: "/cloud-architecture-cloud-architecture-scalable-and.png",
      title: "Cloud Architecture",
      description: "Scalable and secure cloud infrastructure"
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h6 className="text-uppercase fw-bold" style={{ color: '#5D3FD3' }}>Our Work</h6>
          <h2 className="display-5 fw-bold">Featured Projects</h2>
          <div className="mx-auto" style={{ width: '100px', height: '3px', backgroundColor: '#5D3FD3' }}></div>
          <p className="lead mt-3">Explore some of our most impactful client solutions</p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                  <a href="#" className="btn px-4" 
                     style={{ backgroundColor: '#E6E6FA', color: '#5D3FD3', borderRadius: '25px' }}>
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const testimonial = {
    quote: "CinqueLabs transformed our business with their innovative solutions. Their team's technical expertise and commitment to excellence made all the difference.",
    author: "Sarah Johnson",
    position: "CTO, TechVision Inc."
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#F8F7FF' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h6 className="text-uppercase fw-bold" style={{ color: '#5D3FD3' }}>Testimonials</h6>
          <h2 className="display-5 fw-bold">What Our Clients Say</h2>
          <div className="mx-auto" style={{ width: '100px', height: '3px', backgroundColor: '#5D3FD3' }}></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-5 text-center">
                <div className="mb-4 fs-1" style={{ color: '#5D3FD3' }}>"</div>
                <p className="mb-4 fs-5 fst-italic">{testimonial.quote}</p>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="rounded-circle bg-secondary me-3" style={{ width: '50px', height: '50px' }}>
                    <img src="/Screenshot from 2025-05-15 11-15-14.png" alt={testimonial.author} 
                         className="img-fluid rounded-circle" />
                  </div>
                  <div className="text-start">
                    <h6 className="mb-0">{testimonial.author}</h6>
                    <small className="text-muted">{testimonial.position}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// BlogsSection Component
// BlogSection Component - Add this to your HomePage.jsx file
function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      image: "/digital-transformation--a-strategic-guide-for-busi.jpg",
      title: "Digital Transformation: A Strategic Guide for Businesses in 2025",
      category: "Digital Strategy",
      date: "May 15, 2025",
      excerpt: "Explore how businesses can successfully navigate digital transformation initiatives with our comprehensive guide."
    },
    {
      id: 2,
      image: "/top-10-ai-trends-reshaping-software-development-di.jpg",
      title: "Top 10 AI Trends Reshaping Software Development",
      category: "Artificial Intelligence",
      date: "May 8, 2025",
      excerpt: "Discover the latest artificial intelligence innovations transforming how we build and deploy software solutions."
    },
    {
      id: 3,
      image: "/cloud-security-best-practices-for-enterprise-appli.jpg",
      title: "Cloud Security Best Practices for Enterprise Applications",
      category: "Cloud & Security",
      date: "May 1, 2025",
      excerpt: "Learn essential strategies to protect your enterprise applications in multi-cloud environments."
    }
  ];

  return (
    <section className="py-5 position-relative overflow-hidden" style={{ backgroundColor: 'var(--light)' }}>
      {/* Background elements */}
      <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, overflow: 'hidden', opacity: 0.05 }}>
        <div className="position-absolute" style={{ 
          width: '500px', 
          height: '500px', 
          borderRadius: '50%', 
          filter: 'blur(50px)',
          background: 'var(--gradient-purple)',
          animation: 'float 15s ease-in-out infinite',
          top: '50%',
          right: '-100px'
        }}></div>
        <div className="position-absolute" style={{ 
          width: '400px', 
          height: '400px', 
          borderRadius: '50%', 
          filter: 'blur(50px)',
          background: 'var(--gradient-accent)',
          animation: 'float 12s ease-in-out infinite reverse',
          bottom: '10%',
          left: '10%'
        }}></div>
      </div>
      
      <div className="container py-5 position-relative">
        <div className="text-center mb-5" data-aos="fade-up">
          <h6 className="text-uppercase fw-bold" style={{ color: 'var(--primary)' }}>Knowledge Hub</h6>
          <h2 className="display-5 fw-bold">Our Latest Insights</h2>
          <div className="mx-auto" style={{ width: '100px', height: '3px', background: 'var(--gradient-primary)' }}></div>
          <p className="lead mt-3">Stay updated with industry trends, technologies, and expert insights</p>
        </div>

        <div className="row g-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-4" data-aos="fade-up" data-aos-delay={(post.id - 1) * 100}>
              <div className="card h-100 border-0 shadow-sm hover-lift" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <div className="position-relative">
                  <img 
                    src={post.image} 
                    className="card-img-top" 
                    alt={post.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 start-0 m-3">
                    <span className="badge" style={{ background: 'var(--gradient-blue)', borderRadius: '30px' }}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <small className="text-muted">
                      <i className="bi bi-calendar me-2"></i>
                      {post.date}
                    </small>
                  </div>
                  <h5 className="card-title fw-bold mb-3">{post.title}</h5>
                  <p className="card-text text-muted mb-4">{post.excerpt}</p>
                  <a href={`/blog/${post.id}`} className="btn px-4 py-2 text-white" 
                     style={{ background: 'var(--gradient-primary)', borderRadius: '30px' }}>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5" data-aos="fade-up">
          <a href="/blogs" className="btn btn-lg px-4 py-3 fw-medium" 
             style={{ border: '2px solid var(--primary)', color: 'var(--primary)', borderRadius: '50px' }}>
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-5" style={{ backgroundColor: '#5D3FD3' }}>
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="lead text-white mb-4">
              Get in touch with our team to discuss how CinqueLabs can help you achieve your digital goals.
            </p>
            <a href="#" className="btn btn-lg px-4" 
               style={{ backgroundColor: 'white', color: '#5D3FD3', borderRadius: '25px' }}>
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// TechProcess Component
function TechProcess() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We collaborate with you to understand your business needs, goals, and vision for the project.",
      icon: <Layers size={40} />
    },
    {
      number: "02",
      title: "Planning",
      description: "Our team creates a comprehensive roadmap with detailed technical specifications and timelines.",
      icon: <Code size={40} />
    },
    {
      number: "03",
      title: "Development",
      description: "We implement your solution using cutting-edge technologies and best practices in software development.",
      icon: <Database size={40} />
    },
    {
      number: "04",
      title: "Testing",
      description: "Rigorous quality assurance ensures your product is reliable, secure, and performs optimally.",
      icon: <ShieldCheck size={40} />
    },
    {
      number: "05",
      title: "Deployment",
      description: "Your solution is carefully deployed to production environments with minimal disruption.",
      icon: <Cloud size={40} />
    },
    {
      number: "06",
      title: "Maintenance",
      description: "Ongoing support and improvements keep your digital solution running smoothly and evolving with your needs.",
      icon: <LineChart size={40} />
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: 'var(--dark)' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h6 className="text-uppercase fw-bold text-secondary">Our Process</h6>
          <h2 className="display-5 fw-bold text-white">How We Work</h2>
          <div className="mx-auto" style={{ width: '100px', height: '3px', background: 'var(--gradient-primary)' }}></div>
          <p className="lead mt-3 text-light opacity-75">Our systematic approach to delivering exceptional technology solutions</p>
        </div>

        <div className="row g-4">
          {processSteps.map((step, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 hover-lift" style={{ 
                background: 'rgba(255, 255, 255, 0.05)', 
                backdropFilter: 'blur(10px)',
                borderRadius: '16px'
              }}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="rounded-circle d-flex align-items-center justify-content-center me-3"
                         style={{ 
                           width: '60px', 
                           height: '60px', 
                           background: 'var(--gradient-blue)',
                           flexShrink: 0
                         }}>
                      <div className="text-white">{step.icon}</div>
                    </div>
                    <div>
                      <div className="text-secondary fw-bold fs-5">{step.number}</div>
                      <h4 className="mb-0 text-white">{step.title}</h4>
                    </div>
                  </div>
                  <p className="text-light opacity-75">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// StatsCounter Component
function StatsCounter() {
  const stats = [
    {
      value: "100+",
      label: "Clients Worldwide",
      icon: <Globe size={36} />
    },
    {
      value: "200+",
      label: "Projects Delivered",
      icon: <Code size={36} />
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      icon: <ShieldCheck size={36} />
    },
    {
      value: "24/7",
      label: "Technical Support",
      icon: <Phone size={36} />
    }
  ];

  return (
    <section className="py-5 position-relative overflow-hidden" style={{ backgroundColor: 'var(--light)' }}>
      {/* Background elements */}
      <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, overflow: 'hidden', opacity: 0.05 }}>
        <div className="position-absolute" style={{ 
          width: '500px', 
          height: '500px', 
          borderRadius: '50%', 
          filter: 'blur(50px)',
          background: 'var(--gradient-purple)',
          animation: 'float 15s ease-in-out infinite',
          top: '-250px',
          right: '-100px'
        }}></div>
        <div className="position-absolute" style={{ 
          width: '400px', 
          height: '400px', 
          borderRadius: '50%', 
          filter: 'blur(50px)',
          background: 'var(--gradient-accent)',
          animation: 'float 12s ease-in-out infinite reverse',
          bottom: '-200px',
          left: '-150px'
        }}></div>
      </div>
      
      <div className="container py-5 position-relative">
        <div className="text-center mb-5">
          <h6 className="text-uppercase fw-bold" style={{ color: 'var(--primary)' }}>Our Impact</h6>
          <h2 className="display-5 fw-bold">By the Numbers</h2>
          <div className="mx-auto" style={{ width: '100px', height: '3px', background: 'var(--gradient-primary)' }}></div>
          <p className="lead mt-3">Key metrics showcasing our proven track record of success</p>
        </div>

        <div className="row g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-md-3">
              <div className="card h-100 border-0 shadow-sm hover-lift text-center" 
                   style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <div className="card-body p-4">
                  <div className="d-inline-flex align-items-center justify-content-center mb-3 rounded-circle"
                       style={{ 
                         width: '80px', 
                         height: '80px', 
                         background: 'var(--gradient-blue)',
                         color: 'white'
                       }}>
                    {stat.icon}
                  </div>
                  <h2 className="display-5 fw-bold mb-2 text-gradient">{stat.value}</h2>
                  <p className="mb-0 text-dark opacity-75">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5 pt-3">
          <a href="#" className="btn btn-lg px-4 py-3 text-white"
             style={{ background: 'var(--gradient-primary)', borderRadius: '50px' }}>
            View Our Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="d-flex align-items-center mb-3">
              <div className="me-2 rounded-circle d-flex align-items-center justify-content-center" 
                   style={{ width: '40px', height: '40px', backgroundColor: '#5D3FD3' }}>
                <span className="text-white fw-bold">CL</span>
              </div>
              <span className="fw-bold fs-4">CinqueLabs</span>
            </div>
            <p className="mb-4">
              Transforming businesses through innovative technology solutions.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-6">
            <h5 className="mb-3">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Software Development</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Mobile Applications</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Web Development</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Digital Transformation</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-6">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Our Team</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Careers</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-lg-4">
            <h5 className="mb-3">Contact Info</h5>
            <p className="mb-2">
              <i className="bi bi-geo-alt me-2"></i>
              Ngong Road, Nairobi, Kenya
            </p>
            <p className="mb-2">
              <i className="bi bi-envelope me-2"></i>
              info@cinquelabs.com
            </p>
            <p className="mb-4">
              <i className="bi bi-telephone me-2"></i>
              +254 723 456 789
            </p>
            <form>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter your email" 
                       style={{ borderRadius: '25px 0 0 25px' }} />
                <button className="btn text-white" type="submit" 
                        style={{ backgroundColor: '#5D3FD3', borderRadius: '0 25px 25px 0' }}>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-0">© 2025 CinqueLabs. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="text-white text-decoration-none me-3">Privacy Policy</a>
            <a href="#" className="text-white text-decoration-none">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
