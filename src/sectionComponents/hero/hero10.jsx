import React, { useState } from 'react';


function Hero10() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main class="overflow-hidden">
    <section class="lg:py-[90px] pt-[64px] pb-[40px] relative" id="home">
      <img src="img/hero-star-pattern.png" class="absolute top-4 h-[253px] w-[253px] lg:w-[280px] lg:h-[357px] left-[-24%] lg:left-0" alt="" />
      <div class="container flex lg:flex-row flex-col">
        <div class="lg:w-[75%]">
          <h1 class="relative">
            <span>Dominate the&nbsp;</span>
            <br />
            <span> Cricket World with my </span><img src="img/fantasy.svg" alt=""
              class="inline-block lg:h-[112px] h-[80px] lg:mt-[-36px] top-[7%] lg:absolute left-[48%]" /> <span>experience.</span>
          </h1>
        </div>
        <div class="lg:w-[25%] flex lg:flex-col flex-row justify-between mt-[80px] lg:mt-0">
          <div class="flex flex-col lg:items-end w-1/2 lg:w-full">
            <div class="flex lg:gap-[20px] sm:gap-[14px] gap-[5px]">
              <img src="img/learners.svg" alt="" class="sm:w-[76px] w-[45px]" />
              <h2 class="lg:text-5 text-[40px]">15K</h2>
            </div>
            <p class="mt-[14px] lg:text-end text-16">
              Students have taken this course and had an amazing experience.
            </p>
          </div>
          <div class="flex flex-col lg:items-end w-1/2 lg:w-full pl-[36px]">
            <div class="flex sm:gap-[20px] gap-[5px]">
              <img src="img/star.svg" alt="" class="w-[25px]"/>
              <h2 class="lg:text-5 text-[40px]">4.8</h2>
            </div>
            <p class="mt-[14px] font-clashDisplay font-semibold text-black text-16">Average ratings</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container flex flex-col gap-4">
        <div class="border border-b-0 w-full"></div>
        <div class="border border-b-0 w-full"></div>
      </div>
    </section>
    </main>
  );
}

export default Hero10;
