// import productImage from '@/assets/product-image.png';
import productImage from '@/assets/bts.webp';
import Image from "next/image";
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';

export const ProductShowcase = () => {
  return (
    <section className=" py-24 overflow-x-clip">
      <div className="container p-0">
        <div className="max-w-[1040px] mx-auto">
        <div className="flex justify-center">
        <div className="tag" >About Us</div>
        </div>
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">A more effective way to track progress</h2>
        <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">At PK Photography, Mumbai's premier studio, we blend photojournalism's raw authenticity with fine-art elegance. Our unique style, infused with fashion and creative lighting, produces stunning, standout images. Inspired by the interplay of light and color, we utilize techniques from black & white processing to vintage photography. Our work uniquely captures the personalities of those we photograph. Discover why PK Photography is Mumbai's top choice for professional photography & videography.</p>
        </div>
        <div className="relative">
        <Image src={productImage} alt="product" className="mt-10" />
        <Image src={pyramidImage} alt="pyramid" className=" hidden md:block absolute -right-36 -top-32" height={262} width={262} />
        <Image src={tubeImage} alt="tube" className="hidden md:block absolute bottom-24 -left-36" height={248} />
        </div>

      </div>
    </section>
  );
};
