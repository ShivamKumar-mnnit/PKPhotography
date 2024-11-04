'use client';
import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import SplitText from "./Split3.min";

import "./style.scss";

export default function Herotop() {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });
    
    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <section className="header-container" data-scroll-section>
      <h1 id="header-text">

        
      </h1>
    </section>
  );
}