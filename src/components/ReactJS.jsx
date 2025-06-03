import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { CheckCircle2 } from "lucide-react";

const ReactJSPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center py-16 px-4">
          <div className="md:w-1/2 flex flex-col items-start justify-center p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">REACT JS</h1>
            <h2 className="text-xl font-semibold mb-2">Unlock Limitless Opportunities with React JS Development</h2>
            <p className="mb-6 text-base md:text-lg">
              Bring your business ideas to life and elevate them with our expert front-end development support. As your trusted partner, we create high-quality, dynamic, responsive, and interactive front-end applications using React JS. Our skilled ReactJS developers ensure your web and mobile apps have a polished, high-performance design and user experience.
            </p>

           
          </div>
          <div className="md:w-1/2 flex justify-center items-center p-8">
            <div className="relative w-full max-w-md">
              <img
                src="https://techifysolutions.com/wp-content/uploads/2022/11/ReactJS-1.webp"
                alt="ReactJS Development Service"
                className="rounded shadow-lg w-full"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React Logo"
                className="absolute bottom-4 right-4 w-20 h-20 opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Choose ReactJS Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React Logo"
                className="w-32 h-32"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-lg text-orange-500 font-semibold mb-2 tracking-wide uppercase">
                Empower Your Business with the Right Technology
              </h3>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Choose ReactJS</h2>
              <p className="text-gray-700 mb-4">
                ReactJS is a powerful, efficient, and scalable JavaScript library ideal for businesses of any size. Its simplicity and responsiveness make it easy to build and expand applications as your user base grows. Thanks to its component-based architecture, developing complex user interfaces and scaling your app becomes seamless. Additionally, ReactJS is SEO-friendly, helping your web pages rank better in search engines. It also supports collaborative development, enabling multiple developers to work on different parts of a project simultaneously, speeding up the overall process.
              </p>
              Our goal in ReactJS app development is to deliver both speed and flexibility when building dynamic user interfaces. At CinqueLabs, our experienced ReactJS developers specialize in crafting modern web applications tailored to your unique needs. We pride ourselves on creating web solutions that are not only sleek and intuitive but also reliable, secure, and scalable.
              <p className="text-gray-700">
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ReactJS Development Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose CinqueLabs for ReactJS Development</h2>
          <p className="text-lg mb-10 text-center max-w-4xl mx-auto">
            CinqueLabs delivers exceptional ReactJS development services designed to help businesses build dynamic and high-performing web applications. Our skilled ReactJS developers create customized solutions that align perfectly with your unique business requirements.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Skilled ReactJS developers with extensive knowledge of the latest web technologies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                 <span>Bespoke ReactJS application development aligned with your business goals</span>
                 </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Responsive and mobile-first approach for all ReactJS applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Seamless intergration with backend systems and third-party APIs</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Performance optimization for fast-loading, efficient applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Rigorous testing and quality assurance to deliver reliable applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Continuous maintenance and support for your ReactJS applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Clear, consistent communication and transparent project management throughout the development process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Our Expertise in ReactJS Development Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Frontend Development</h3>
              <p className="text-gray-700">
                We create responsive, interactive user interfaces using ReactJS that provide exceptional user experiences across all devices and screen sizes.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Custom Web Application Development</h3>
              <p className="text-gray-700">
                Our team builds custom web applications with ReactJS that are tailored to your specific business requirements and objectives.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">ReactJS UI Development</h3>
              <p className="text-gray-700">
                We design and develop beautiful, intuitive user interfaces using ReactJS components that enhance user engagement and satisfaction.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">React Migration</h3>
              <p className="text-gray-700">
                We help businesses migrate their existing applications to ReactJS, improving performance, maintainability, and user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hire ReactJS Developers Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://picsum.photos/id/3/600/400" 
                alt="Hire ReactJS Developers" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Hire Top-Notch Talent to Help React JS Development Projects</h2>
              <p className="text-gray-700 mb-6">
                At CinqueLabs, we offer flexible engagement models to help you hire dedicated ReactJS developers who can work as an extension of your team. Our developers are skilled in the latest ReactJS technologies and best practices.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Experienced ReactJS developers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Flexible hiring models</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Transparent communication</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Dedicated project manager</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Agile development process</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Continuous support</span>
                </div>
              </div>
              
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Hire ReactJS Developers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ReactJS Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Why Should You Choose ReactJS?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Easy to Learn and Use</h3>
              <p className="text-gray-700 mb-6">
                ReactJS has a gentle learning curve, especially for developers who are already familiar with JavaScript. Its component-based architecture makes it intuitive to understand and use, allowing developers to build complex UIs from small, isolated pieces of code called components.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Reusable Components</h3>
              <p className="text-gray-700 mb-6">
                One of the main advantages of ReactJS is its component-based architecture. Developers can create reusable components that can be used across different parts of an application or even in different projects, saving development time and ensuring consistency.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Enhanced Performance</h3>
              <p className="text-gray-700 mb-6">
                ReactJS uses a virtual DOM (Document Object Model) which optimizes rendering performance. Instead of updating the entire DOM when changes occur, React only updates the parts that have actually changed, resulting in faster and more efficient applications.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Strong Community Support</h3>
              <p className="text-gray-700 mb-6">
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