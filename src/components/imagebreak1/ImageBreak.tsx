import React from "react";
import BubbleText from "@/components/BubbleText/BubbleText";
import ImgBreak from "@/assets/imgbreak.jpg";

export const ImageBreak = () => {
  return (
    <div className="container mx-auto p-4 md:p-10 bg-[#eae8e4] flex flex-col items-center">
      {/* Text at the top */}
      <BubbleText />

      {/* Responsive Image below the text */}
      <div className="w-full mt-8 flex justify-center">
        <img 
          src={ImgBreak.src} 
          alt="Background Image"
          className="w-full max-w-screen-lg object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};
