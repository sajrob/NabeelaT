import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import { HelmetProvider } from "react-helmet-async";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Biography = lazy(() => import("./pages/Biography"));
const Tourism = lazy(() => import("./pages/Tourism"));
const Impact = lazy(() => import("./pages/Impact"));
const Contact = lazy(() => import("./pages/Contact"));
const Foundation = lazy(() => import("./pages/Foundation"));
const News = lazy(() => import("./pages/News"));

/**
 * Loading fallback component
 */
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <span className="loading loading-spinner loading-lg text-primary"></span>
  </div>
);

/**
 * Wrapper for main content to handle conditional layout spacing.
 */
const MainContent: React.FC = () => {
  return (
    <main className="flex-grow pt-20 md:pt-28">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Suspense>
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

