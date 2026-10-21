import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home/home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
