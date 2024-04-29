import React, { useState } from 'react';
import e1 from '../../asset/explore-course1.webp';
import e2 from '../../asset/explore-course2.webp';
import clock from '../../asset/clock.svg';
import people from '../../asset/people.svg';
import f from '../../asset/4-6star.svg';

function Course3() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
    <section class="py-5 md:py-[120px]">
<div class="container">
  <div class="text-darkbluemagenta text-center mb-3 md:mb-[84px]">
    <h2 class="mb-2 text-xl md:text-4.8xl">Explore Courses</h2>
    <div class="opacity-60 max-w-[610px] mx-auto text-base2.5">
      Join our Masterclass Courses for Finance and Stocks and take a
      decisive step towards achieving your financial goals.
    </div>
  </div>
  <div class="grid md:grid-cols-2 gap-[20px] grid-cols-1">
    <div
      class="bg-[#F7F7FB] px-2 md:px-[20px] pt-2 md:pt-[20px] pb-3 md:pb-[32px] rounded-3xl"
    >
      <img
        src={e1}
        alt="explore-course1"
        width="570"
        height="350"
        class="rounded-3xl w-full"
      />
      <div class="md:px-[4px]">
        <div
          class="flex items-center gap-2 mt-2 md:mt-4 mb-1 md:mb-[20px]"
        >
          <div
            class="text-32 md:text-[40px] leading-[1.4] text-darkbluemagenta font-extrabold"
          >
            ₹499
          </div>
          <div
            class="line-through text-xl-small md:text-xl text-darkbluemagenta/50"
          >
            ₹1,999
          </div>
        </div>
        <div
          class="text-xl-small md:text-[28px] md:leading-[1.5] tracking-[-0.5px] font-bold mb-2"
        >
          Accelerate Your Instagram: 20-Day Growth Masterclass!
        </div>
        <div class="flex items-center gap-[6px] md:gap-[12px]">
          <img
            src={clock}
            alt="clock"
            width="21"
            height="21"
            class="w-[21px] h-[21px]"
          />
          <div
            class="text-darkbluemagenta/60 text-base2.5 md:text-base3"
          >
            1 hour
          </div>
        </div>
        <div
          class="flex items-center gap-[6px] md:gap-[12px] py-[12px] md:my-[20px]"
        >
          <img
            src={people}
            alt="people"
            width="23"
            height="15"
            class="w-[23px] h-[15px]"
          />
          <div class="text-darkbluemagenta/60 text-base3">
            Live lesson Included
          </div>
        </div>
        <div
          class="flex items-start md:items-center gap-[6px] md:gap-[10px]"
        >
          <img
            src={f}
            alt="4.3star"
            width="92"
            height="20"
            class="w-[92px] h-[20px]"
          />
          <div
            class="text-darkbluemagenta text-18 leading-none font-bold"
          >
            4.3 Average Rating | 823 Students
          </div>
        </div>
        <div class="mt-3 md:mt-[36px]">
          <button
            type="button"
            class="button rounded-[10px] py-[16px] md:py-[19px] px-[10px] md:px-[38px] bg-primary w-full inline-block text-white text-base2.5 font-extrabold"
          >
            <div class="relative overflow-hidden">
              <span class="button-content">Buy Course</span>
              <span class="button-content-hover">Buy Course</span>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div
      class="bg-[#F7F7FB] px-2 md:px-[20px] pt-2 md:pt-[20px] pb-3 md:pb-[32px] rounded-3xl"
    >
      <img
        src={e2}
        alt="explore-course2"
        width="570"
        height="350"
        class="rounded-3xl w-full"
      />
      <div class="md:px-[4px]">
        <div
          class="flex items-center gap-2 mt-2 md:mt-4 mb-1 md:mb-[20px]"
        >
          <div
            class="text-32 md:text-[40px] leading-[1.4] text-darkbluemagenta font-extrabold"
          >
            ₹499
          </div>
          <div
            class="line-through text-xl-small md:text-xl text-darkbluemagenta/50"
          >
            ₹1,999
          </div>
        </div>
        <div
          class="text-xl-small md:text-[28px] md:leading-[1.5] tracking-[-0.5px] font-bold mb-2"
        >
          Accelerate Your Instagram: 20-Day Growth Masterclass!
        </div>
        <div class="flex items-center gap-[6px] md:gap-[12px]">
          <img
            src={clock}
            alt="clock"
            width="21"
            height="21"
            class="w-[21px] h-[21px]"
          />
          <div
            class="text-darkbluemagenta/60 text-base2.5 md:text-base3"
          >
            1 hour
          </div>
        </div>
        <div
          class="flex items-center gap-[6px] md:gap-[12px] py-[12px] md:my-[20px]"
        >
          <img
            src={people}
            alt="people"
            width="23"
            height="15"
            class="w-[23px] h-[15px]"
          />
          <div class="text-darkbluemagenta/60 text-base3">
            Live lesson Included
          </div>
        </div>
        <div
          class="flex items-start md:items-center gap-[6px] md:gap-[10px]"
        >
          <img
            src={f}
            alt="4.3star"
            width="92"
            height="20"
            class="w-[92px] h-[20px]"
          />
          <div
            class="text-darkbluemagenta text-18 leading-none font-bold"
          >
            4.3 Average Rating | 823 Students
          </div>
        </div>
        <div class="mt-3 md:mt-[36px]">
          <button
            type="button"
            class="button rounded-[10px] py-[16px] md:py-[19px] px-[10px] md:px-[38px] bg-primary w-full inline-block text-white text-base2.5 font-extrabold"
          >
            <div class="relative overflow-hidden">
              <span class="button-content">Buy Course</span>
              <span class="button-content-hover">Buy Course</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</section>    
    </main>
  );
}

export default Course3;
