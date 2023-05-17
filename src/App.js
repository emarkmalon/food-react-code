
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
      <Routes>
          <Routes path="/src/components/Home.js" element={<Home />} />
          <Route path="src/Components/About.js" element={<About />} />
       </Routes>
    </div>
  );
}

export default App;
