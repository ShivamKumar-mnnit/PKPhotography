import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import service1 from '@/assets/service1.webp';
import service2 from '@/assets/service2.webp';
import service3 from '@/assets/service3.webp';

const Service = () => {
  return (
    <div className="bg-white">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-3xl text-[#001E80]">
          OUR SERVICES
        </span>
      </div>
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[620px] w-[478px] overflow-hidden bg-neutral-200 rounded-3xl" // Increased height and added border-radius
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-lg" // Ensures image background respects the rounded corners
      ></div>
      <div className="absolute top-0 z-10 w-full text-center pt-8">
        <p className="bg-gradient-to-br from-white/40 to-white/10 px-6 py-2 text-4xl font-extrabold uppercase  text-[#1239d6] backdrop-blur-lg rounded-t-lg">
          {card.title}
        </p>
        <p className="px-4 py-1 mt-2 text-lg font-medium text-white">
          {card.subtitle}
        </p>
      </div>
    </div>
  );
};


//

export default Service;

const cards = [
  {
    url: service1.src,
    title: "Portfolio",
    subtitle: "crafting your visual stories.", // Add a subtitle
    id: 1,
  },
  {
    url: service2.src,
    title: "Portrait",
    subtitle: "Timeless Portraits that reflects you.",
    id: 2,
  },
  {
    url: service3.src,
    title: "Headshots",
    subtitle: "Professional headshots that speak success",
    id: 3,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    subtitle: "Additional text goes here",
    id: 4,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    subtitle: "Additional text goes here",
    id: 5,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    subtitle: "Additional text goes here",
    id: 6,
  },
  
];
