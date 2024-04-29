import React, { useState } from 'react';
import ia from '../../asset/ipl-auction.png';
import ar from '../../asset/arrow-up-right.svg';
import cp from '../../asset/courses-pattern.png';
import star from '../../asset/star.svg';
function Course10() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
         <section class="lg:pt-[190px] pt-[80px] lg:pb-[150px] pb-[56px] relative" id="course">
      <div class="container">
        <div class="flex lg:flex-row flex-col">
          <div class="t9">Become an IPL fantasy team expert.</div>
          <span class="mt-[12px] text-primary lg:ml-3 lg:text-[24px] text-16 font-bold ">// Courses
          </span>
        </div>
        <div class="border border-b-0 mt-3 lg:mb-[80px] mb-4"></div>
       
        <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[30px] ">
          <div class="flex flex-col justify-end">
            <div>
              <h2 class="!font-sora font-semibold lg:text-[44px] text-20">
                Create your top playing 11 for this IPL season.
              </h2>
              <p class="lg:mt-4 font-sora text-16 mt-2">
                This course content outline covers the fundamental aspects of
                fantasy cricket, from its introduction to advanced strategies,
                responsible gaming practices, and certification.
              </p>
            </div>

          </div>
          <div class=" sm:row-span-2 mt-[28px] lg:mt-0">
            <img src={ia} alt="profile" width="794" height="944" class="z-10 relative"/>
          </div>
          <div class="mt-[30px] lg:mt-0">
            <div class="flex lg:mt-5 ">
              <div>
                <h5 class="lg:text-[28px] text-[22px] flex">
                  4.6 <img src={star} class="lg:h-[30px] h-3 w-3 ml-1" />
                </h5>
                <p>Ratings</p>
              </div>
              <div class="border border-r-0 lg:mx-[34px] mx-[28px]"></div>
              <div>
                <h5 class="lg:text-[28px] text-[22px]">22,931+</h5>
                <p>Students</p>
              </div>
              <div class="border border-r-0 lg:mx-[34px] mx-[28px]"></div>
              <div>
                <h5 class="lg:text-[28px] text-[22px]">60 hrs</h5>
                <p>Content</p>
              </div>
            </div>
            <button
              class="bg-primary whitespace-nowrap lg:w-fit w-full justify-between rounded-full flex items-center px-4 py-[12px] text-14 text-white mt-5 font-sora">
              BUY THIS COURSE
              <img src={ar} class="ml-4" />
            </button>
          </div>
        </div>
        
        
      </div>
      <img src={cp} alt="" class="lg:block hidden absolute  top-[24%] right-0" />
    </section>
    </main>
  );
}

export default Course10;
