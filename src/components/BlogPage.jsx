import React from "react";
import { Calendar, User } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar"; // Import the navbar component

const blogData = {
  1: {
    title: "Digital Transformation: A Strategic Guide for Businesses in 2025",
    excerpt:
      "Explore how businesses can successfully navigate digital transformation initiatives with our comprehensive guide.",
    content: (
      <>
        <p className="mt-4">
          <strong>Digital transformation</strong> is no longer an option—it’s a survival strategy. In 2025, businesses face an evolving landscape shaped by rapid technological advancements, changing customer expectations, and increasing global competition.
        </p>
        <p>To thrive, companies must reimagine their operations, embrace innovation, and integrate technology as a core part of their strategy.</p>

        <h4 className="mt-4">🔍 What is Digital Transformation?</h4>
        <p>Digital transformation involves integrating digital technologies into all areas of a business, changing how it operates and delivers value to customers.</p>
        <p>More than just adopting new tools, it requires reshaping mindsets, improving customer experiences, and driving growth through innovation.</p>

        <h4 className="mt-4">📈 Key Drivers in 2025</h4>
        <ul className="list-group list-group-flush mb-4">
          <li className="list-group-item"><strong>AI and Automation:</strong> Revolutionizing decision-making and customer service.</li>
          <li className="list-group-item"><strong>Cloud Computing:</strong> Enabling scalable operations and cost reduction.</li>
          <li className="list-group-item"><strong>Data-Driven Decisions:</strong> Helping businesses react instantly with smarter insights.</li>
          <li className="list-group-item"><strong>Customer Expectations:</strong> Consumers demand seamless digital interactions.</li>
          <li className="list-group-item"><strong>Hybrid Work:</strong> Businesses must adapt to remote and flexible work models.</li>
        </ul>

        <h4 className="mt-4">🚀 Building a Digital Strategy</h4>
        <p>To succeed, businesses must follow a clear roadmap:</p>

        <h5 className="mt-3">1️⃣ Define a Clear Vision</h5>
        <p>Start by identifying goals—whether to improve efficiency, enhance customer experiences, or expand market reach.</p>

        <h5 className="mt-3">2️⃣ Assess Current Capabilities</h5>
        <p>Analyze existing technology and skills to identify gaps and opportunities for optimization.</p>

        <h5 className="mt-3">3️⃣ Invest in the Right Technologies</h5>
        <p>Adopt AI-powered analytics, cloud-based tools, cybersecurity solutions, and automation platforms.</p>

        <h5 className="mt-3">4️⃣ Empower Your Workforce</h5>
        <p>Provide training programs and cultivate a company culture that embraces innovation.</p>

        <h5 className="mt-3">5️⃣ Measure & Adapt</h5>
        <p>Monitor transformation progress, using clear KPIs to drive iterative improvements.</p>

        <h4 className="mt-4">⚠️ Avoid Common Pitfalls</h4>
        <p>Even well-planned transformations can fail due to these mistakes:</p>
        <ul className="list-group list-group-flush mb-4">
          <li className="list-group-item"><strong>Leadership resistance:</strong> Executive buy-in is crucial.</li>
          <li className="list-group-item"><strong>Ignoring company culture:</strong> Employees need to embrace change.</li>
          <li className="list-group-item"><strong>Overcomplicating solutions:</strong> Simplicity improves adoption.</li>
        </ul>

        <h4 className="mt-4">💡 Final Thoughts: The Future Is Digital</h4>
        <p>Digital transformation is reshaping every aspect of business. Companies that embrace innovation with clarity and adaptability will thrive in 2025 and beyond.</p>
        <p className="fw-bold">Are you ready to take the next step?</p>
      </>
    ),
    category: "Business",
    date: "May 20, 2025",
    author: "Mark Kibet",
    image: "/digital-transformation--a-strategic-guide-for-busi.jpg",
  },
  2: {
    title: "Top 10 AI Trends Reshaping Software Development",
    excerpt: "Discover the latest artificial intelligence innovations transforming how we build and deploy software solutions.",
    content:
      "AI-driven software development is revolutionizing the industry. From automated testing and bug detection to AI-assisted code generation, these advancements are shaping the future of development workflows.",
    category: "Development",
    date: "May 19, 2025",
    author: "Ian Chege",
    image: "/top-10-ai-trends-reshaping-software-development-di.jpg",
  },
  3: {
    title: "Cloud Security Best Practices for Enterprise Applications",
    excerpt: "Learn essential strategies to protect your enterprise applications in multi-cloud environments.",
    content:
      "With the rise of multi-cloud architectures, enterprises need robust security strategies. Implementing zero-trust frameworks, encryption, and proactive monitoring are essential practices for securing applications in the cloud.",
    category: "Cybersecurity",
    date: "May 18, 2025",
    author: "Tillen Otuoma",
    image: "/cloud-security-best-practices-for-enterprise-appli.jpg",
  },
};

function BlogPage() {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) {
    return <div className="text-center py-5"><h2>Blog Not Found</h2></div>;
  }

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section (Purplish-Black Background) */}
      <section className="py-5 text-center text-white" style={{ background: "linear-gradient(135deg, #2A0036, #3D005B)" }}>
        <div className="container">
          <h1 className="display-4 fw-bold">{blog.title}</h1>
          <p className="lead text-light">{blog.excerpt}</p>
        </div>
      </section>

      {/* Blog Content (White Background) */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <img src={blog.image} className="img-fluid rounded mb-4 shadow" alt={blog.title} />
              <div className="d-flex align-items-center text-muted mb-3">
                <Calendar size={14} className="me-2" /> {blog.date}
                <span className="mx-3">|</span>
                <User size={14} className="me-2" /> {blog.author}
              </div>
              <p className="lead">{blog.content}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPage;
