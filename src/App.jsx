import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import BlogsPage from "./components/BlogsPage";
import BlogPage from "./components/BlogPage";
import "./App.css"; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/blog/:id" element={<BlogPage />} />
            </Routes>
        </Router>
    );
}

export default App;
