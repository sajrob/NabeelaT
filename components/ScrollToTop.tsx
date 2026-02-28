import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // If there's a hash (anchor) in the URL, scroll to that element after a small delay
    if (hash) {
      const id = hash.replace(/^#/, "");
      // Small timeout to allow DOM to settle
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }

    // For normal route changes, instantly jump to top before page renders
    // This prevents the "scrolling up" visual effect
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
