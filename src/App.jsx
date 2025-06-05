import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./components/HomePage";
import BlogsPage from "./components/BlogsPage";
import BlogPage from "./components/BlogPage";
import "./App.css";
import ReactJS from "./components/ReactJS.jsx";
import Angular from "./components/Angular.jsx";
import Vue from "./components/Vue.jsx";
import Nodejs from "./components/Nodejs.jsx";
import Azure from "./components/Azure.jsx";
import Python from "./components/Python.jsx";
import Tensorflow from "./components/Tensorflow.jsx";
import AWS from "./components/AWS.jsx";
import GoogleCloud from "./components/GoogleCloud.jsx";
import Java from "./components/Java.jsx";
import PyTorch from "./components/PyTorch.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Router basename="/">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/ReactJS" element={<ReactJS />} />
        <Route path="/Angular" element={<Angular />} />
        <Route path="/Vue" element={<Vue />} />
        <Route path="/Node" element={<Nodejs />} />
        <Route path="/Azure" element={<Azure />} />
        <Route path="/Python" element={<Python />} />
        <Route path="/Tensorflow" element={<Tensorflow />} />
        <Route path="/AWS" element={<AWS />} />
        <Route path="/GoogleCloud" element={<GoogleCloud />} />
        <Route path="/Java" element={<Java />} />
        <Route path="/PyTorch" element={<PyTorch />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
