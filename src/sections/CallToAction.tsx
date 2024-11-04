import ArrowRight from '@/assets/arrow-right.svg';
import starImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';
import Image from 'next/image';

export const CallToAction = () => {
  return(
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container p-0">
        <div className="section-heading relative">
        <h2 className="section-title">Sign up for free today</h2>
        <p className="section-description mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab, quas omnis vel, vitae ipsam, optio molestias exercitationem labore aliquid repudiandae. Ea, eaque. Cum nihil voluptas excepturi omnis doloribus id.</p>

<Image src={starImage} alt="star" width={360} className="absolute -left-[350px] -top-[137px] lg:-left-[300px]  lg:-top-[137px]" />
<Image src={springImage} alt="spring" width={360} className="absolute -right-[331px] -top-[19px] lg:-right-[251px] lg:-top-[19px]" />

        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text"><span>Learn more</span>
          <ArrowRight className="h-5 w-5 gap-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
