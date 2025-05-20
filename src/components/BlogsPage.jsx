import React, { useState } from "react";
import { Search, ChevronRight, Calendar, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function BlogsPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Business", "Technology", "Design", "Development", "AI", "Cybersecurity"];

  const blogs = [
    { id: 1, title: "Digital Transformation: A Strategic Guide for Businesses in 2025", excerpt: "Explore how businesses can successfully navigate digital transformation initiatives with our comprehensive guide.", category: "Business", date: "May 20, 2025", author: "Mark Kibet", image: "/digital-transformation--a-strategic-guide-for-busi.jpg" },
    { id: 2, title: "Top 10 AI Trends Reshaping Software Development", excerpt: "Discover the latest artificial intelligence innovations transforming how we build and deploy software solutions.", category: "Development", date: "May 19, 2025", author: "Ian Chege", image: "/top-10-ai-trends-reshaping-software-development-di.jpg" },
    { id: 3, title: "Cloud Security Best Practices for Enterprise Applications", excerpt: "Learn essential strategies to protect your enterprise applications in multi-cloud environments.", category: "Cybersecurity", date: "May 18, 2025", author: "Tillen Otuoma", image: "/cloud-security-best-practices-for-enterprise-appli.jpg" },
  ];

  const filteredBlogs = blogs.filter((blog) =>
    (blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (activeCategory === "All" || blog.category === activeCategory)
  );

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-light shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand text-dark fw-bold">CinqueLabs Blog</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-5 text-center text-white bg-dark position-relative">
        <div className="container">
          <h6 className="text-uppercase fw-bold text-secondary mb-3">Knowledge Hub</h6>
          <h1 className="display-3 fw-bold text-glow">CinqueLabs Blog</h1>
          <p className="lead text-light">Insights, trends, and thought leadership from our technology experts.</p>
        </div>
      </section>

      {/* Blog Filter & Search */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-8">
              <div className="input-group">
                <span className="input-group-text bg-dark text-white"><Search size={20} /></span>
                <input type="text" className="form-control" placeholder="Search articles..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              </div>
            </div>
            <div className="col-lg-4">
              <select className="form-select" value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}>
                {categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
              </select>
            </div>
          </div>

          {/* Blog Cards in Rows */}
          <div className="row g-4">
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <div className="card shadow-lg border-0 hover-glow">
                  <img src={blog.image} className="card-img-top" alt={blog.title} />
                  <div className="card-body">
                    <h5 className="fw-bold">{blog.title}</h5>
                    <p className="text-muted">{blog.excerpt}</p>
                    <small className="text-muted me-3"><Calendar size={14} className="me-1" /> {blog.date}</small>
                    <small className="text-muted"><User size={14} className="me-1" /> {blog.author}</small>
                    <div className="mt-3">
                      <button className="btn btn-glow" onClick={() => navigate(`/blog/${blog.id}`)}>Read More <ChevronRight size={16} /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogsPage;
