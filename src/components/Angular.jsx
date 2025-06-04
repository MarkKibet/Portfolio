import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";

const AngularPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-10 sm:pt-24 sm:pb-10 lg:pt-32 lg:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight text-red-700 sm:text-6xl">
                ANGULAR
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Empower your business with robust, scalable, and maintainable web
                applications built using Angular by CinqueLabs' expert front-end
                engineers.
              </p>
            </div>
            <div className="mt-12">
              <div className="grid gap-4 sm:mt-10 lg:grid-cols-3 lg:grid-rows-2">
                <div className="relative lg:row-span-2">
                  <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                    <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                        Mobile friendly
                      </p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Angular enables responsive, mobile-first applications that
                        work seamlessly across all devices.
                      </p>
                    </div>
                    <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                      <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-red-700 bg-gray-900 shadow-2xl">
                        <img
                          className="size-full object-cover object-top"
                          src="https://angular.io/assets/images/logos/angular/angular.png"
                          alt="Angular Mobile"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-4xl"></div>
                </div>
                <div className="relative max-lg:row-start-1">
                  <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                        Performance
                      </p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Angular's change detection and Ahead-of-Time compilation
                        deliver fast, high-performance apps.
                      </p>
                    </div>
                    <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                      <img
                        className="w-full max-lg:max-w-xs"
                        src="https://angular.io/generated/images/marketing/concept-icons/performance.png"
                        alt="Angular Performance"
                      />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-4xl"></div>
                </div>
                <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                  <div className="absolute inset-px rounded-lg bg-white"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                        Security
                      </p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Angular provides built-in security features like XSS
                        protection and strict typing for safer apps.
                      </p>
                    </div>
                    <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                      <img
                        className="h-[min(152px,40cqw)] object-cover"
                        src="https://angular.io/generated/images/marketing/concept-icons/security.png"
                        alt="Angular Security"
                      />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
                </div>
                <div className="relative lg:row-span-2">
                  <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                    <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                        Powerful APIs
                      </p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Angular's HTTP client and RxJS integration make API
                        communication robust and flexible.
                      </p>
                    </div>
                    <div className="relative min-h-120 w-full grow">
                      <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl flex items-center justify-center">
                        <img
                          className="h-32 object-contain"
                          src="https://angular.io/generated/images/marketing/concept-icons/http.png"
                          alt="Angular API"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                </div>
              </div>
              <div className="mt-12 flex justify-center">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg rounded-md">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Angular Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <img
                src="https://angular.io/assets/images/logos/angular/angular.png"
                alt="Angular Logo"
                className="w-36 h-36 bg-white rounded-full p-4"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Why Choose Angular?
              </h2>
              <p className="text-gray-700 mb-4">
                Angular is a powerful, open-source front-end framework maintained
                by Google. It enables the development of dynamic, enterprise-grade
                web applications with high performance, modularity, and
                maintainability.
              </p>
              <p className="text-gray-700 mb-4">
                With features like two-way data binding, dependency injection, and
                a comprehensive CLI, Angular accelerates development and ensures
                code quality. Its component-based architecture makes it easy to
                scale and maintain large applications.
              </p>
              <p className="text-red-500 font-medium">
                <a
                  href="https://angular.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Learn more about Angular →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why CinqueLabs for Angular Section */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Why Choose CinqueLabs for Angular Development?
          </h2>
          <p className="text-lg mb-10 text-center max-w-4xl mx-auto">
            CinqueLabs delivers high-quality Angular development services to help
            businesses build robust, scalable, and maintainable web applications.
            Our experienced Angular developers create tailored solutions that
            align with your business goals.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-red-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Expert Angular developers with deep knowledge of the latest web
                    technologies
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-red-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Custom Angular application development tailored to your business
                    needs
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-red-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Responsive, mobile-first approach for all Angular applications
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-red-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Seamless integration with backend systems and APIs
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-red-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Performance optimization for fast, efficient applications
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-red-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive testing and quality assurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-red-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Ongoing maintenance and support for your Angular apps
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-red-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Transparent communication and project management
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Angular Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
            Our Expertise in Angular Development
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-red-500 text-white text-lg font-semibold text-center rounded-tl-lg">
                    Area
                  </th>
                  <th className="px-6 py-3 bg-red-500 text-white text-lg font-semibold text-center">
                    Expertise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium text-gray-800 text-center align-top">
                    Frontend
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        Angular
                      </span>
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        RxJS
                      </span>
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        NgRx
                      </span>
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        TypeScript
                      </span>
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        SCSS/SASS
                      </span>
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        Angular Material
                      </span>
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        Bootstrap
                      </span>
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        PrimeNG
                      </span>
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        Jasmine/Karma
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium text-gray-800 text-center align-top">
                    Backend
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        Node.js
                      </span>
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        Express
                      </span>
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        .NET Core
                      </span>
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        Java Spring Boot
                      </span>
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        Python Django
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-800 text-center align-top">
                    Cloud & DevOps
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        AWS
                      </span>
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        Azure
                      </span>
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        Google Cloud
                      </span>
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        Docker
                      </span>
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        Kubernetes
                      </span>
                      <span className="bg-red-50 border border-red-200 rounded px-3 py-1 text-sm">
                        CI/CD
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full border border-red-100 hover:shadow-xl transition-shadow duration-200">
              <h3 className="font-semibold text-lg text-red-500 mb-3">
                What is Angular best used for?
              </h3>
              <p className="text-gray-700">
                Angular is ideal for building large-scale, enterprise-grade web
                applications, dashboards, portals, and single-page applications
                that require maintainability and scalability.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full border border-red-100 hover:shadow-xl transition-shadow duration-200">
              <h3 className="font-semibold text-lg text-red-500 mb-3">
                How does Angular improve development productivity?
              </h3>
              <p className="text-gray-700">
                Angular's CLI, modular structure, and built-in tooling for
                testing, routing, and state management accelerate development and
                ensure code consistency and quality.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full border border-red-100 hover:shadow-xl transition-shadow duration-200">
              <h3 className="font-semibold text-lg text-red-500 mb-3">
                Is Angular suitable for mobile apps?
              </h3>
              <p className="text-gray-700">
                Yes, Angular can be used with frameworks like Ionic or
                NativeScript to build cross-platform mobile applications using a
                single codebase.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full border border-red-100 hover:shadow-xl transition-shadow duration-200">
              <h3 className="font-semibold text-lg text-red-500 mb-3">
                Can Angular integrate with REST APIs and other backends?
              </h3>
              <p className="text-gray-700">
                Absolutely. Angular provides powerful HTTP and state management
                tools to seamlessly integrate with REST APIs, GraphQL, and various
                backend technologies.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full border border-red-100 hover:shadow-xl transition-shadow duration-200 md:col-span-2">
              <h3 className="font-semibold text-lg text-red-500 mb-3">
                Why partner with CinqueLabs for Angular development?
              </h3>
              <p className="text-gray-700">
                CinqueLabs offers deep Angular expertise, proven delivery, and a
                collaborative approach. We ensure your Angular project is robust,
                scalable, and tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AngularPage;
