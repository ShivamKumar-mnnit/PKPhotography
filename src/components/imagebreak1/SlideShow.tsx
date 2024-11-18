import React from "react";
// These are third-party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const Slideshow = () => {
  // Array of Images
  const images = [
    "images/Image1.jpg",
    "images/Image1.jpg",
    "images/Image1.jpg",
    "images/Image1.jpg",
    "images/Image1.jpg",
  ];

  // These are custom properties for zoom effect while slide-show
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
    <div className="w-full h-screen border-4 border-white rounded-3xl overflow-hidden">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div
            key={index}
            className="flex justify-center md:items-center items-start w-screen h-screen relative rounded-3xl overflow-hidden"
          >
            <img
              className="w-screen rounded-3xl border-4 border-white"
              src={each}
              alt={`Slide ${index + 1}`}
            />
            <h1 className="absolute md:top-60 top-24 inset-x-1/4 text-center z-10 md:text-6xl text-4xl font-bold text-white">
              Hello, PK
            </h1>
            <p className="absolute md:top-80 top-40 inset-x-1/4 text-center z-10 md:text-2xl text-xl font-bold text-white">
  &quot;Everything you can imagine is real.&quot;
</p>

          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
