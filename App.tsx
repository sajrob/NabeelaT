import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Tourism from "./pages/Tourism";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";
import Foundation from "./pages/Foundation";

import { HelmetProvider } from "react-helmet-async";

/**
 * App component serves as the shell for the entire website.
 * It manages the layout structure and the routing logic.
 */
const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-base-100 selection:bg-primary selection:text-white">
          <Navbar />
          <ScrollToTop />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/tourism" element={<Tourism />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/foundation" element={<Foundation />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
