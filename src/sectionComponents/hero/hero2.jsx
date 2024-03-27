import React, { useState } from 'react';
import prof from '../../asset/hero-profile.jpg';
import heroBg from '../../asset/group.png';
import heroB2 from '../../asset/4star-rating.svg';

function Hero2() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
    <section>
      <div class="container py-[60px] lg:py-0">
        <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[30px] ">
          <div class="flex flex-col justify-end">
            <h1 class="text-[40px] md:text-64 mb-2 font-semibold lg:px-0  text-center sm:text-start">
              MASTERING <span class="text-primary">MONEY</span> MATTERS
            </h1>
            <h6 class="lg:mb-[44px] lg:pr-3 mb-3 text-center sm:text-start">
              This transformative learning experience goes beyond the basics,
              providing participants with essential financial knowledge and
              skills to make informed decisions about their money ed by renowned
              finance influencer Karan Singh
            </h6>
            <a href="#!"
              class="lg:w-fit w-full button lg:py-[16px] py-[14px] px-[105px] rounded-lg bg-secondary inline-block text-white text-16 leading-[1.5] lg:mb-5 mb-4">
              <div class="relative overflow-hidden">
                <span class="button-content">Enroll Now</span>
                <span class="button-content-hover">Enroll Now</span>
              </div>
            </a>

          </div>
          <div class=" sm:row-span-2">
            <img src={prof} alt="profile" width="794" height="944" />
          </div>
          <div class="mt-[30px] lg:mt-0">
            <div class="flex ">
              <div class="flex flex-col-reverse lg:flex-row">
                <img src={heroBg} alt="" />
                <div class="flex flex-col ml-2 mb-2 lg:mb-0">
                  <h6 class="font-bold text-[20px] lg:text-18">15K+</h6>
                  <span class="font-khula lg:text-14 text-16 mt-0 whitespace-nowrap">Satisfied learners</span>
                </div>
              </div>
              <div class="border-r-2 mx-3 border-customgrey/10"></div>
              <div class="flex flex-col">
                <div class="flex items-start">
                  <h6 class="mr-[14px] font-bold text-[20px] lg:text-18">4+<span
                      class="text-14 font-normal ml-[6px]">(12,323 ratings) </span></h6>

                </div>
                <div class="flex gap-[2px]">
                  <img src={heroB2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </main>
  );
}

export default Hero2;
