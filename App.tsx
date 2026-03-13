import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Tourism from "./pages/Tourism";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";
import Foundation from "./pages/Foundation";
import News from "./pages/News";

import { HelmetProvider } from "react-helmet-async";

/**
 * Wrapper for main content to handle conditional layout spacing.
 */
const MainContent: React.FC = () => {
  return (
    <main className="flex-grow pt-20 md:pt-28">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </main>
  );
};

/**
 * App component serves as the shell for the entire website.
 */
const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-base-100 selection:bg-primary selection:text-white">
          <Navbar />
          <ScrollToTop />
          <MainContent />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
