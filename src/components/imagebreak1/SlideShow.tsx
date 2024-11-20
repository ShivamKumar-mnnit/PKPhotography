import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const Slideshow = () => {
  const images = [
    "images/Image1.jpg",
    "images/Image1.jpg",
    "images/Image1.jpg",
    "images/Image1.jpg",
    "images/Image1.jpg",
  ];

  const zoomInProperties = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: (
      <div className="ml-10 top-40 md:top-72">
        <ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="mr-10 top-40 md:top-72">
        <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
      </div>
    ),
  };

  return (
    <div className="w-full aspect-w-16 aspect-h-9 rounded-3xl border-4 border-white overflow-hidden">
  <Zoom {...zoomInProperties}>
    {images.map((each, index) => (
      <div
        key={index}
        className="flex justify-center items-center w-full h-full relative"
      >
        <img
          className="w-full h-full object-cover"
          src={each}
          alt={`Slide ${index + 1}`}
        />
        <h1 className="absolute top-1/4 inset-x-1/4 text-center z-10 md:text-6xl text-4xl font-bold text-white">
          Hello, PK
        </h1>
        <p className="absolute top-1/2 inset-x-1/4 text-center z-10 md:text-2xl text-xl font-bold text-white">
          &quot;Everything you can imagine is real.&quot;
        </p>
      </div>
    ))}
  </Zoom>
</div>

  );
};

export default Slideshow;
