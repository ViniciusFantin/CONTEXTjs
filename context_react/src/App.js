import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";

// Navbar
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
