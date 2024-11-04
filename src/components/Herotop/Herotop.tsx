'use client';
import React, { useEffect } from "react";
import gsap from "gsap";
import SplitText from "./Split3.min";
import "./style.scss";

export default function Herotop() {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    // Hide lines initially
    gsap.set(split.lines, { y: 50, opacity: 0 });

    // Animate lines
    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });

    // Cleanup function (optional)
    return () => {
      split.revert(); // Revert changes made by SplitText when component unmounts
    };
  }, []);

  return (
    <section className="header-container" data-scroll-section>
      <h1 id="header-text">
        Welcome to PK Photography
      </h1>
    </section>
  );
}
