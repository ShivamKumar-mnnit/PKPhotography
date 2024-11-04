'use client';
import React, { useRef, useState, RefObject } from "react"; // Import RefObject
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

// Define the prop types for the Card component
interface CardProps {
  containerRef: RefObject<HTMLDivElement>; // Specify the type for containerRef
  src: string;
  alt: string;
  top: string; // Changed to string to accommodate percentages
  left: string; // Changed to string to accommodate percentages
  rotate: string; // Changed to string to accommodate rotation
  className?: string; // Optional className
}

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-white">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[120px]">
        PK<span className="text-indigo-500">Photography</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef<HTMLDivElement>(null); // Specify type for useRef

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1635373670332-43ea883bb081?q=80&w=2781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
      />
      {/* Other Card components go here */}
      {/* Repeat similar Card components as needed */}
    </div>
  );
};

const Card: React.FC<CardProps> = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};
