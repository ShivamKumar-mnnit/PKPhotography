"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Logo from "@/assets/logo.webp";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from '@/assets/noodle.png';
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import cameraImage from "@/assets/camera.webp";
import { DragCards } from "@/components/Drag/Drag";
import BubbleText from '@/components/BubbleText/BubbleText';
import Rotating from "@/components/RotatingText/Rotating";
import { Drop } from "@/components/Drop/Drop";
import MenuIcon from '@/assets/menuicon1.png';

export const Hero = () => {
  return (
    <section className="relative h-screen bg-[#a2a2a2] overflow-hidden">
      {/* Video container */}
      <div className="relative w-full h-full flex justify-center items-center">
        {/* Full-height video */}
        <video
          src="/gif.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Logo positioned on top of the video */}
        <div className="absolute top-5 left-5 z-10">
          <Image src={Logo} alt="Saas Logo" height={120} width={120} />
        </div>

        {/* Text content at the bottom of the video */}
        <div className="absolute bottom-0 w-full text-center px-10 pb-10 text-white">
          <div className="md:w-[700px] mx-auto">
            <h1 className="text-[15px] md:text-[30px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              We are a creative agency <br /> {`{we do}`}
              <Rotating />
            </h1>
            <Drop/>
          </div>

          <div className="md:w-[700px] mt-10">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              {/* <BubbleText /> */}
            </h1>
          </div>
        </div>
      </div>

      {/* Menu Icon positioned at center-right with 80% height */}
      <div className="absolute right-0 top-[60%] transform -translate-y-1/2 h-[80%] flex items-center justify-center">
        <Image src={MenuIcon} alt="Menu Icon" height={800} width={800} />
      </div>
    </section>
  );
};
