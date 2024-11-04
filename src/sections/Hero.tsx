"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from '@/assets/noodle.png';
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import cameraImage from "@/assets/camera.webp";
// import Herotop from "@/components/Herotop/Herotop";
import { DragCards } from "@/components/Drag/Drag";
import BubbleText from '@/components/BubbleText/BubbleText';
import Rotating from "@/components/RotatingText/Rotating";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 mt-6 md:pt-5 md:pb-10 bg-white overflow-x-clip">
      <div className="container mx-auto">
      <h1 className="text-7xl md:text-9xl font-extrabold flex justify-center text-center tracking-tight text-black leading-[1.2] md:leading-[1.1] scale-y-125">
  {/* <Herotop/> */}
</h1>

        <div className="md:flex items-center mt-10">
          <div className="md:w-[700px]">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              We are a creative agency  <br /> { `{we do}`}
             <Rotating/>
            </h1>
           
          </div>
        </div>


      </div>
<div className='container text-center justify-center bg-white rounded-full'>
<DragCards/>
</div>

<div className="md:flex items-center mt-10 ">
          <div className="md:w-[700px]">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
             <BubbleText/>
            </h1>
         
          </div>
        </div>

    </section>
  );
};
