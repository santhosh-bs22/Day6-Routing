import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./components/Home/home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { useTheme } from "./components/Context/ThemeContext.jsx";
import "./App.css";

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <BrowserRouter>
      <div className={`app ${theme}`}>
        <nav className="navbar">
          <h2 className="logo">Santhosh Portfolio</h2>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button
              type="button"
              className="toggle"
              onClick={toggleTheme}
            >
              {theme === "light" ? " Dark" : "Light"}
            </button>
          </div>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
