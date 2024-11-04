'use client';
import React, { useEffect } from "react";
import gsap from "gsap";
import styles from "./Preloader.module.css";

const Preloader = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const percentRef = React.useRef<HTMLDivElement | null>(null);
  const barRef = React.useRef<HTMLDivElement | null>(null);
  const innerRef = React.useRef<HTMLDivElement | null>(null);
  const textRef = React.useRef<HTMLDivElement | null>(null);
  const headingRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ensure all refs are defined before using them
    if (!percentRef.current || !barRef.current || !innerRef.current || !textRef.current || !headingRef.current) {
      return;
    }

    const tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.fromTo(
      percentRef.current,
      { opacity: 1, zIndex: 1 },
      {
        opacity: 0,
        zIndex: -1,
      }
    )
      .to(barRef.current, {
        opacity: 0,
        zIndex: -1,
      })
      .to(innerRef.current, {
        width: "0%",
      })
      .from(
        headingRef.current,
        {
          y: "0%",
        },
        "-=0.5"
      )
      .to(textRef.current, {
        opacity: 1,
        boxShadow: "12px 20px rgba(0, 255, 255, 0.23)",
        skewY: 5,
        y: "10%",
        stagger: {
          amount: 0.4,
        },
      });

    const interval = setInterval(frame, 10);
    function frame() {
      if (percentRef.current.innerHTML === "100%") {
        clearInterval(interval);
      } else {
        percentRef.current.innerHTML = parseInt(percentRef.current.innerHTML) + 1 + "%";
        if (ref.current) {
          ref.current.style.width = percentRef.current.innerHTML; // Set width based on percent
        }
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.preloader}>
      <div ref={innerRef} className={styles.preloader__inner}>
        <div ref={percentRef} className={styles.percent}>
          1%
        </div>
        <div ref={barRef} className={styles.bar}>
          <div ref={ref} className={styles.bar__confirm}></div>
        </div>
      </div>
      <div ref={headingRef} className={styles.heading}>
        <h1 ref={textRef}>PKPhotography</h1>
      </div>
    </div>
  );
};

export default Preloader;
