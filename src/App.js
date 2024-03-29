import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Footer from "./Components/Footer/Footer";
import { useData } from "./contexts/contexts";

function App() {
  const {appBackground} = useData();

  return (
    <div className="app" style={{background: appBackground}}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="singleProduct/:id" element={<SingleProduct />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
