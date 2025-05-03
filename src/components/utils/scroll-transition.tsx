"use client";

import { useEffect, useRef } from "react";

export const useScrollTransition = () => {
  const sections = useRef<NodeListOf<Element> | null>(null);
  const heroSection = useRef<Element | null>(null);

  useEffect(() => {
    // Get all sections and hero section
    sections.current = document.querySelectorAll("section");
    heroSection.current = document.querySelector(".hero-section");

    const handleScroll = () => {
      // Handle hero section transition
      if (heroSection.current) {
        const heroRect = heroSection.current.getBoundingClientRect();
        if (heroRect.top < 0) {
          heroSection.current.classList.add("scrolling");
        } else {
          heroSection.current.classList.remove("scrolling");
        }
      }

      // Handle section transitions
      sections.current?.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          section.classList.add("visible");
        }
      });
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export const ScrollTransitionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useScrollTransition();
  return <>{children}</>;
}; 