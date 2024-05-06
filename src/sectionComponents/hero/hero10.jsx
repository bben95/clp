import React from 'react';
import heroBg from '../../asset/group.png';
import heroB2 from '../../asset/4star-rating.svg';
import hsp from '../../asset/hero-star-pattern.png';
import fantasy from '../../asset/fantasy.svg';
function Hero10() {

  return (
    <main className="overflow-hidden">
    <section className="lg:py-[90px] pt-[64px] pb-[40px] relative" id="home">
      <img src={hsp} className="absolute top-4 h-[253px] w-[253px] lg:w-[280px] lg:h-[357px] left-[-24%] lg:left-0" alt="" />
      <div className="container flex lg:flex-row flex-col">
        <div className="lg:w-[75%]">
        <h1 className="relative">
            <span>Dominate the&nbsp;</span>
            <br />
            <span> Cricket World with my </span><img src={fantasy} alt=""
              className="inline-block lg:h-[112px] h-[80px] lg:mt-[-36px] top-[7%] lg:absolute left-[48%]" /> <span>experience.</span>
          </h1>
        </div>
        <div className="lg:w-[25%] flex lg:flex-col flex-row justify-between mt-[80px] lg:mt-0">
          <div className="flex flex-col lg:items-end w-1/2 lg:w-full">
            <div className="flex lg:gap-[20px] sm:gap-[14px] gap-[5px]">
              <img src={heroBg} alt="" className="sm:w-[76px] w-[45px]" />
              <h2 className="lg:text-5 text-[40px]">15K</h2>
            </div>
            <p className="mt-[14px] lg:text-end text-16">
              Students have taken this course and had an amazing experience.
            </p>
          </div>
          <div className="flex flex-col lg:items-end w-1/2 lg:w-full pl-[36px]">
            <div className="flex sm:gap-[20px] gap-[5px]">
              <img src={heroB2} alt="" className="w-[25px]"/>
              <h2 className="lg:text-5 text-[40px]">4.8</h2>
            </div>
            <p className="mt-[14px] font-clashDisplay font-semibold text-black text-16">Average ratings</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container flex flex-col gap-4">
        <div className="border border-b-0 w-full"></div>
        <div className="border border-b-0 w-full"></div>
      </div>
    </section>
    </main>
  );
}

export default Hero10;
