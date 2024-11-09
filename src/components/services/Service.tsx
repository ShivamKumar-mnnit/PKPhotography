import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Btn from "../EncrptButton/Btn";
import '@fontsource/montserrat/700.css';  // Import Montserrat with 700 weight



import service1 from '@/assets/service1.webp';
import service2 from '@/assets/service2.webp';
import service3 from '@/assets/service3.webp';
import service4 from '@/assets/service4.webp';
import service5 from '@/assets/service5.webp';
import service6 from '@/assets/service6.webp';
import service7 from '@/assets/service7.webp';
import service8 from '@/assets/service8.webp';
import service9 from '@/assets/service9.webp';
import service10 from '@/assets/service10.webp';
import service11 from '@/assets/service11.webp';
import service12 from '@/assets/service12.webp';

interface CardProps {
  id: number;
  url: string;
  title: string;
  subtitle: string;
}

const cards: CardProps[] = [
  {
    url: service1.src,
    title: "Portfolio",
    subtitle: "Crafting your visual stories",
    id: 1,
  },
  {
    url: service2.src,
    title: "Portrait",
    subtitle: "Timeless portraits that reflect you",
    id: 2,
  },
  {
    url: service3.src,
    title: "Headshots",
    subtitle: "Professional headshots that speak success",
    id: 3,
  },
  {
    url: service4.src,
    title: "Editorial",
    subtitle: "Magazine-Worthy Shots for Every Story Headshots",
    id: 4,
  },
  {
    url: service5.src,
    title: "Celebrity",
    subtitle: "Reflect your stardom with every shot",
    id: 5,
  },
  {
    url: service6.src,
    title: "Ads",
    subtitle: "Highlights your products with flawless imagery",
    id: 6,
  },
  {
    url: service7.src,
    title: "Wedding",
    subtitle: "Your Big Day, perfectly captured",
    id: 7,
  },
  {
    url: service8.src,
    title: "Boudoir",
    subtitle: "Empower your confidence",
    id: 8,
  },
  {
    url: service9.src,
    title: "Food",
    subtitle: "Mouth watering images for culinary Delights",
    id: 9,
  },
  {
    url: service10.src,
    title: "E-Commerce",
    subtitle: "Boost your sales: crisp, e-commerce photos",
    id: 10,
  },
  {
    url: service11.src,
    title: "Real Estate",
    subtitle: "Highlighting the beauty of every property",
    id: 11,
  },
  {
    url: service12.src,
    title: "Design",
    subtitle: "Your vision, our expertise in design",
    id: 12,
  },
];

const Card: React.FC<{ card: CardProps }> = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[620px] md:w-[468px] md:h-[650px] sm:w-[404px] overflow-hidden bg-neutral-200 rounded-3xl"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-lg"
      ></div>

      {/* Vertical Line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-8 w-1 bg-[#2874a6]"></div>

      <div className="absolute top-0 z-10 w-full text-center pt-8">
        {/* Title without glassy effect */}
        <p
  className="px-6 py-2 text-4xl font-extrabold uppercase text-[#2874a6] rounded-t-lg"
  style={{ fontFamily: 'Montserrat', fontWeight: 700 }}
>
  {card.title}
</p>
        <p className="px-4 py-1 mt-2 text-lg font-medium  text-white">
          {card.subtitle}
        </p>
        <div className="mt-1 flex justify-center">
          <Btn />
        </div>
      </div>
    </div>
  );
};



const HorizontalScrollCarousel: React.FC<{ cards: CardProps[] }> = ({ cards }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-93%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Service: React.FC = () => {
  return (
    <div className="">
      <div className="flex h-30 mt-5 items-center justify-center">
      <h2 className="section-title">Our Services</h2>
      </div>
      <HorizontalScrollCarousel cards={cards} />
    </div>
  );
};

export default Service;
