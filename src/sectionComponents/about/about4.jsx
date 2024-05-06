import React from 'react';
import am from '../../asset/archisman.jpg';
import dp from '../../asset/dot-pattern.png'
import wa from '../../asset/WhatsApp.svg'
function About4() {

  return (
    <main>
         <section className="lg:py-[160px]  pt-5 pb-[76px]" id="about">
        <div className="container flex justify-center flex-col-reverse sm:flex-row items-end gap-[20px] md:gap-0">
          <div className="lg:w-[40%] w-full relative mt-[68px] lg:mt-0">
            <img src={dp} alt="" className="absolute top-[-10%] w-[223px] left-[2%] lg:w-[313px]"/>
            <img
              src={am}
              className=" rounded-[10px] m-auto z-10 relative w-[285px] lg:w-[400px]" alt="image"
            />
            <div
              className="bg-purple lg:w-[400px] lg:h-[439px] h-[312px] w-[285px] rounded-[10px] absolute top-[7%] left-[15%]"
            ></div>
          </div>
          <div className="lg:w-[60%] w-full lg:pl-[150px] flex flex-col lg:gap-3 gap-2 items-center sm:items-start">
            <p className="text-purple font-supreme font-bold">BUILDING THE BEST OUT THERE</p>
            <h2 className="text-center sm:text-start">I’m Archisman, a business consultant coach</h2>
            <h6 className="text-primary/50 font-supreme font-medium sm:text-start text-center">
              A Certified Business Coach and dedicated Entrepreneur. With a
              passion for guiding individuals and businesses towards their full
              potential, I specialize in offering valuable insights, strategies,
              and support that drive success.
            </h6>
            <button className="bg-green lg:w-fit w-full  justify-center lg:py-[18px] py-[14px] px-[33px] rounded-[60px] text-white font-supreme font-medium flex  items-center">
              <img src={wa} alt="" className="mr-1"/>
              Text me! 914-532-7432
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About4;
