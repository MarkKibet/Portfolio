import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { CheckCircle2 } from "lucide-react";

const ReactJSPage = () => {
  return (
    <div className="flex flex-col font-['Roboto'] bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] text-[var(--text-dark)]">
      {/* Hero Section */}
      <section className="bg-[var(--secondary-color)] text-white shadow-lg rounded-lg mx-6 md:mx-12 my-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center py-16 px-6 md:px-12">
          <div className="md:w-1/2 flex flex-col items-start justify-center p-8">
            <h1 className="text-5xl font-extrabold mb-4 text-[var(--highlight)] drop-shadow-lg glow-pulse">
              REACT JS
            </h1>
            <h2 className="text-2xl font-semibold mb-4 text-[var(--accent-color)] glow-pulse">
              Unlock Limitless Opportunities with React JS Development
            </h2>
            <p className="mb-6 text-lg leading-relaxed max-w-lg">
              Bring your business ideas to life and elevate them with our expert front-end development support. As your trusted partner, we create high-quality, dynamic, responsive, and interactive front-end applications using React JS. Our skilled ReactJS developers ensure your web and mobile apps have a polished, high-performance design and user experience.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center p-8 relative">
            <div className="relative w-full max-w-md ">
              <img
                src="https://techifysolutions.com/wp-content/uploads/2022/11/ReactJS-1.webp"
                alt="ReactJS Development Service"
                className="rounded-lg shadow-2xl w-full border-4 border-[var(--accent-color)]"
              />
              {/* <img
                src="/react.png"
                alt="React Logo"
                className="absolute bottom-6 right-6 w-10 h-10 opacity-90 animate-float"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Choose ReactJS Section */}
      <section className="bg-[var(--background-light)] py-12 shadow-inner rounded-lg mx-6 md:mx-12 my-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
              {/* <img
                src="/react.png"
                alt="React Logo"
                className="w-20 h-20 drop-shadow-lg"
              /> */}
            </div>
            <div className="md:w-2/3 md:pl-10">
              <h3 className="text-lg text-[var(--accent-color)] font-semibold mb-2 tracking-wide uppercase glow-pulse">
                Empower Your Business with the Right Technology
              </h3>
              <h2 className="text-3xl font-extrabold mb-6 text-[var(--primary-color)] drop-shadow-md">
                Choose ReactJS
              </h2>
              <p className="text-[var(--text-dark)] mb-6 leading-relaxed max-w-3xl">
                ReactJS is a powerful, efficient, and scalable JavaScript library ideal for businesses of any size. Its simplicity and responsiveness make it easy to build and expand applications as your user base grows. Thanks to its component-based architecture, developing complex user interfaces and scaling your app becomes seamless. Additionally, ReactJS is SEO-friendly, helping your web pages rank better in search engines. It also supports collaborative development, enabling multiple developers to work on different parts of a project simultaneously, speeding up the overall process.
              </p>
              <p className="text-[var(--text-dark)] max-w-3xl">
                Our goal in ReactJS app development is to deliver both speed and flexibility when building dynamic user interfaces. At CinqueLabs, our experienced ReactJS developers specialize in crafting modern web applications tailored to your unique needs. We pride ourselves on creating web solutions that are not only sleek and intuitive but also reliable, secure, and scalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ReactJS Development Section */}
      <section className="py-16 bg-[var(--secondary-color)] text-white shadow-inner rounded-lg mx-6 md:mx-12 my-8">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-extrabold mb-10 text-center text-[var(--highlight)] drop-shadow-lg glow-pulse">
            Why Choose CinqueLabs for ReactJS Development
          </h2>
          <p className="text-lg mb-10 text-center max-w-4xl mx-auto text-[var(--background-light)]">
            CinqueLabs delivers exceptional ReactJS development services designed to help businesses build dynamic and high-performing web applications. Our skilled ReactJS developers create customized solutions that align perfectly with your unique business requirements.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[var(--accent-color)] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Skilled ReactJS developers with extensive knowledge of the latest web technologies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[var(--accent-color)] mr-2 flex-shrink-0 mt-0.5" />
                 <span>Bespoke ReactJS application development aligned with your business goals</span>
                 </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[var(--accent-color)] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Responsive and mobile-first approach for all ReactJS applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[var(--accent-color)] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Seamless intergration with backend systems and third-party APIs</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[var(--accent-color)] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Performance optimization for fast-loading, efficient applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[var(--accent-color)] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Rigorous testing and quality assurance to deliver reliable applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[var(--accent-color)] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Continuous maintenance and support for your ReactJS applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[var(--accent-color)] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Clear, consistent communication and transparent project management throughout the development process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16 bg-[var(--background-light)] shadow-inner rounded-lg mx-6 md:mx-12 my-8">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-extrabold mb-10 text-center text-[var(--primary-color)] drop-shadow-lg glow-pulse">
            Our Expertise in ReactJS Development Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg shadow-lg hover:shadow-[0_0_15px_var(--accent-color)] transition-shadow duration-300 font-['Roboto'] hover:scale-[1.03] hover:glow-pulse bg-[var(--background-light)]">
              <h3 className="text-xl font-semibold mb-4 text-[var(--secondary-color)]">
                Frontend Development
              </h3>
              <p className="text-[var(--text-dark)]">
                We create responsive, interactive user interfaces using ReactJS that provide exceptional user experiences across all devices and screen sizes.
              </p>
            </div>
            
            <div className="p-6 rounded-lg shadow-lg hover:shadow-[0_0_15px_var(--accent-color)] transition-shadow duration-300 font-['Roboto'] hover:scale-[1.03] hover:glow-pulse bg-[var(--background-light)]">
              <h3 className="text-xl font-semibold mb-4 text-[var(--secondary-color)]">
                Custom Web Application Development
              </h3>
              <p className="text-[var(--text-dark)]">
                Our team builds custom web applications with ReactJS that are tailored to your specific business requirements and objectives.
              </p>
            </div>
            
            <div className="p-6 rounded-lg shadow-lg hover:shadow-[0_0_15px_var(--accent-color)] transition-shadow duration-300 font-['Roboto'] hover:scale-[1.03] hover:glow-pulse bg-[var(--background-light)]">
              <h3 className="text-xl font-semibold mb-4 text-[var(--secondary-color)]">
                ReactJS UI Development
              </h3>
              <p className="text-[var(--text-dark)]">
                We design and develop beautiful, intuitive user interfaces using ReactJS components that enhance user engagement and satisfaction.
              </p>
            </div>
            
            <div className="p-6 rounded-lg shadow-lg hover:shadow-[0_0_15px_var(--accent-color)] transition-shadow duration-300 font-['Roboto'] hover:scale-[1.03] hover:glow-pulse bg-[var(--background-light)]">
              <h3 className="text-xl font-semibold mb-4 text-[var(--secondary-color)]">
                React Migration
              </h3>
              <p className="text-[var(--text-dark)]">
                We help businesses migrate their existing applications to ReactJS, improving performance, maintainability, and user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hire ReactJS Developers Section */}
      <section className="py-16 bg-[var(--background-light)] shadow-inner rounded-lg mx-6 md:mx-12 my-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://picsum.photos/id/3/600/400" 
                alt="Hire ReactJS Developers" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />

            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-extrabold mb-6 text-[var(--primary-color)] drop-shadow-md">
                Hire Top-Notch Talent to Help React JS Development Projects
              </h2>
              <p className="text-[var(--text-dark)] mb-6 leading-relaxed">
                At CinqueLabs, we offer flexible engagement models to help you hire dedicated ReactJS developers who can work as an extension of your team. Our developers are skilled in the latest ReactJS technologies and best practices.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--accent-color)] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-dark)] text-sm">Experienced ReactJS developers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--accent-color)] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-dark)] text-sm">Flexible hiring models</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--accent-color)] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-dark)] text-sm">Transparent communication</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--accent-color)] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-dark)] text-sm">Dedicated project manager</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--accent-color)] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-dark)] text-sm">Agile development process</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[var(--accent-color)] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-dark)] text-sm">Continuous support</span>
                </div>
              </div>
              
              <Button className="btn-glow">
                Hire ReactJS Developers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ReactJS Section */}
      <section className="py-16 bg-[var(--background-light)] shadow-inner rounded-lg mx-6 md:mx-12 my-8">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-extrabold mb-10 text-center text-[var(--primary-color)] drop-shadow-md">
            Why Should You Choose ReactJS?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[var(--secondary-color)]">
                Easy to Learn and Use
              </h3>
              <p className="text-[var(--text-dark)] mb-6 leading-relaxed max-w-lg">
                ReactJS has a gentle learning curve, especially for developers who are already familiar with JavaScript. Its component-based architecture makes it intuitive to understand and use, allowing developers to build complex UIs from small, isolated pieces of code called components.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-[var(--secondary-color)]">
                Reusable Components
              </h3>
              <p className="text-[var(--text-dark)] mb-6 leading-relaxed max-w-lg">
                One of the main advantages of ReactJS is its component-based architecture. Developers can create reusable components that can be used across different parts of an application or even in different projects, saving development time and ensuring consistency.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[var(--secondary-color)]">
                Enhanced Performance
              </h3>
              <p className="text-[var(--text-dark)] mb-6 leading-relaxed max-w-lg">
                ReactJS uses a virtual DOM (Document Object Model) which optimizes rendering performance. Instead of updating the entire DOM when changes occur, React only updates the parts that have actually changed, resulting in faster and more efficient applications.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-[var(--secondary-color)]">
                Strong Community Support
              </h3>
              <p className="text-[var(--text-dark)] mb-6 leading-relaxed max-w-lg">
                ReactJS has a large and active community of developers who contribute to its ecosystem. This means there are plenty of resources, libraries, and tools available to help developers build better applications more efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ReactJSPage;
