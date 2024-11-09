"use client";
import Image from "next/image";
import Logo from "@/assets/logo.webp";
import Rotating from "@/components/RotatingText/Rotating";
import { Drop } from "@/components/Drop/Drop";

export const Hero = () => {
  return (
    <section className="relative h-screen bg-[#eae8e4] overflow-hidden">
      <div className="relative w-full h-full flex flex-col justify-center items-center space-y-6">
        
        {/* Circular Video Container with responsive sizing */}
        <div className="relative z-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-white shadow-lg">
          <video
            src="/gif.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>

        {/* Logo positioned on top-left with spacing for smaller screens */}
        <div className="absolute top-5 left-5 md:top-8 md:left-8">
          <Image src={Logo} alt="Saas Logo" height={80} width={80} className="md:h-[120px] md:w-[120px]" />
        </div>

        {/* Text content under the circular video */}
        <div className="w-full text-center px-4 md:px-10 pb-10 text-white">
          <div className="md:w-[700px] mx-auto">
            <h1 className="text-[14px] md:text-[30px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              We are a creative agency <br /> {`{we do}`}
              <Rotating />
            </h1>
            <Drop />
          </div>
        </div>
      </div>
    </section>
  );
};
