
import SpotlightButton from "@/components/spotbutton/SpotlightButton";

export const Do = () => {
  return (
    <section className="pt-8 pb-20 mt-6 md:pt-5 md:pb-10 bg-[#eae8e4] overflow-x-clip">
      <div className="flex">
    <div className="container mx-2">


    <div className="tag mt-3">What we do</div>

      <div className="md:flex items-center mt-5">
        <div className="md:w-[700px]">
          <h1 className="text-2xl md:text-4xl  tracking-tighter  bg-clip-text mt-6">
          We bridge creativity and expertise to make brands visible and engaging everywhere people connect.
          </h1>
          <br />
          <span className="text-1xl md:text-2xl  tracking-tighter  bg-clip-text mt-6">
          Based in Mumbai, PK Photography is your partner in creating impactful moments. From photography and videography to website design, branding, influencer marketing, and talent management, our expertise empowers brands to resonate deeply with audiences.
          </span>
           
         
         
        </div>
      </div>
        <SpotlightButton/>



    </div>
    <div className="flex text-center justify-center mx-5">
  
    



</div>



    </div>
    
  </section>
  );
};
