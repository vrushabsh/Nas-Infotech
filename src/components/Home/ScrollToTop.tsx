"use client";
 
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
 
const ScrollToUp = () => {
  const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 250);
    };
 
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
 
  return (
    <button
  onClick={scrollToTop}
  aria-label="Scroll to top"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 50,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "44px",
    height: "44px",
    borderRadius: "50%",

    backgroundColor: "#F4A940", // your brand color
    color: "#fff",

    border: "none",
    cursor: "pointer",

    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",

    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(16px)",
    pointerEvents: visible ? "auto" : "none",

    transition: "all 0.3s ease",
  }}
>
  <ArrowUp size={20} />
</button>
  );
};
 
export default ScrollToUp;
 