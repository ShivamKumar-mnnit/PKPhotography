"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from '@/assets/noodle.png';
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import cameraImage from "@/assets/camera.webp";
import { DragCards } from "@/components/Drag/Drag";
import BubbleText from '@/components/BubbleText/BubbleText';
import Rotating from "@/components/RotatingText/Rotating";

export const Hero = () => {
  return (
    <section className="relative pt-8 pb-20  md:pt-5 md:pb-10 bg-[#a2a2a2] overflow-x-clip">
      <div className="flex flex-col items-center justify-center">
        
        {/* Centered GIF video */}
        <div className="relative w-full h-[65vh] flex justify-center items-center">
          <video
            src="/gif.mp4" // use the path relative to public folder
            autoPlay
            loop
            muted
            className="w-auto h-full max-w-full max-h-full object-cover"
          />
        </div>

        {/* Centered Text content below the video */}
        <div className="mx-10 mt-10 flex flex-col items-center justify-center text-center">
          <div className="md:w-[700px]">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              We are a creative agency <br /> {`{we do}`}
              <Rotating />
            </h1>
          </div>

          {/* Additional content with DragCards and BubbleText */}
          <div className="container mt-10 text-center justify-center bg-white rounded-full">
            <DragCards />
          </div>

          <div className="md:w-[700px] mt-10">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              <BubbleText />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
