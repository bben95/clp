import React, { useState } from 'react';


function Hero4() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
     <section class="bg-primary2 lg:pt-[80px] lg:pb-[128px] pt-4 pb-5 hero-section">
      <div class="container flex sm:flex-row flex-col sm:gap-[30px] lg:gap-0">
        <div class="lg:w-[60%] w-full lg:pr-[135px]">
          <h1 class="px-[12px] lg:px-0">
            Masterclass for Ambitious Individuals to Excel in Networking
          </h1>
          <h6 class="lg:mt-4 lg:mb-5 mt-2 mb-3 text-white/50 text-center sm:text-start lg:text-18 text-16 font-supreme">
            Unlock the potential to attract and retain a multitude of high-end
            clients who recognize the unique value you provide.
          </h6>
          <button
            class="bg-purple whitespace-nowrap lg:w-fit  justify-center w-full font-supreme font-bold flex gap-1 items-center text-white lg:mb-6 mb-4 lg:py-[20px] py-2 lg:px-[130px]  rounded-[60px] uppercase"
          >
            Join Waitlist
            <img src="img/arrow-right.svg" alt=""/>
          </button>
          <div class="flex  items-start">
            <div class="flex lg:flex-row flex-col">
              <img src="img/learners.png" alt="" class="mr-[12px]" />
              <div class="mt-1 lg:mt-0">
                <h6 class="text-white font-bold text-start text-18">45,000+</h6>
                <span class="text-white/30 font-supreme font-medium text-14 ">Students Worldwide</span>
              </div>
            </div>
            <div class="border border-white/10 border-r-0 lg:mx-[23px] mx-2 h-[100px] lg:h-[44px]"></div>
            <div class="flex  flex-col-reverse lg:flex-col">
              <h6 class="text-white font-bold text-18 grid lg:flex text-start mt-[18px] lg:mt-0">
                4.6+ <span class="text-white/30 font-supreme font-medium text-14 ml-[5px]">(12,421 ratings)</span>
              </h6>
              <div class="flex gap-[2px]">
                <img src="img/star.svg" alt="" />
                <img src="img/star.svg" alt="" />
                <img src="img/star.svg" alt="" />
                <img src="img/star.svg" alt="" />
                <img src="img/half-star.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-[40%] w-full z-10 mt-[40px] sm:mt-0 h-full">
          <img
            src="img/hero-banner.jpg"
            alt=""
            class="rounded-[24px] sm:h-full object-cover h-[293px] w-full"
          />
        </div>
      </div>
    </section>
       </main>
  );
}

export default Hero4;