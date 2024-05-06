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
    <section className="py-5 md:py-[120px]">
<div className="container">
  <div className="text-darkbluemagenta text-center mb-3 md:mb-[84px]">
    <h2 className="mb-2 text-xl md:text-4.8xl">Explore Courses</h2>
    <div className="opacity-60 max-w-[610px] mx-auto text-base2.5">
      Join our MasterclassName Courses for Finance and Stocks and take a
      decisive step towards achieving your financial goals.
    </div>
  </div>
  <div className="grid md:grid-cols-2 gap-[20px] grid-cols-1">
    <div
      className="bg-[#F7F7FB] px-2 md:px-[20px] pt-2 md:pt-[20px] pb-3 md:pb-[32px] rounded-3xl"
    >
      <img
        src={e1}
        alt="explore-course1"
        width="570"
        height="350"
        className="rounded-3xl w-full"
      />
      <div className="md:px-[4px]">
        <div
          className="flex items-center gap-2 mt-2 md:mt-4 mb-1 md:mb-[20px]"
        >
          <div
            className="text-32 md:text-[40px] leading-[1.4] text-darkbluemagenta font-extrabold"
          >
            ₹499
          </div>
          <div
            className="line-through text-xl-small md:text-xl text-darkbluemagenta/50"
          >
            ₹1,999
          </div>
        </div>
        <div
          className="text-xl-small md:text-[28px] md:leading-[1.5] tracking-[-0.5px] font-bold mb-2"
        >
          Accelerate Your Instagram: 20-Day Growth MasterclassName!
        </div>
        <div className="flex items-center gap-[6px] md:gap-[12px]">
          <img
            src={clock}
            alt="clock"
            width="21"
            height="21"
            className="w-[21px] h-[21px]"
          />
          <div
            className="text-darkbluemagenta/60 text-base2.5 md:text-base3"
          >
            1 hour
          </div>
        </div>
        <div
          className="flex items-center gap-[6px] md:gap-[12px] py-[12px] md:my-[20px]"
        >
          <img
            src={people}
            alt="people"
            width="23"
            height="15"
            className="w-[23px] h-[15px]"
          />
          <div className="text-darkbluemagenta/60 text-base3">
            Live lesson Included
          </div>
        </div>
        <div
          className="flex items-start md:items-center gap-[6px] md:gap-[10px]"
        >
          <img
            src={f}
            alt="4.3star"
            width="92"
            height="20"
            className="w-[92px] h-[20px]"
          />
          <div
            className="text-darkbluemagenta text-18 leading-none font-bold"
          >
            4.3 Average Rating | 823 Students
          </div>
        </div>
        <div className="mt-3 md:mt-[36px]">
          <button
            type="button"
            className="button rounded-[10px] py-[16px] md:py-[19px] px-[10px] md:px-[38px] bg-primary w-full inline-block text-white text-base2.5 font-extrabold"
          >
            <div className="relative overflow-hidden">
              <span className="button-content">Buy Course</span>
              <span className="button-content-hover">Buy Course</span>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div
      className="bg-[#F7F7FB] px-2 md:px-[20px] pt-2 md:pt-[20px] pb-3 md:pb-[32px] rounded-3xl"
    >
      <img
        src={e2}
        alt="explore-course2"
        width="570"
        height="350"
        className="rounded-3xl w-full"
      />
      <div className="md:px-[4px]">
        <div
          className="flex items-center gap-2 mt-2 md:mt-4 mb-1 md:mb-[20px]"
        >
          <div
            className="text-32 md:text-[40px] leading-[1.4] text-darkbluemagenta font-extrabold"
          >
            ₹499
          </div>
          <div
            className="line-through text-xl-small md:text-xl text-darkbluemagenta/50"
          >
            ₹1,999
          </div>
        </div>
        <div
          className="text-xl-small md:text-[28px] md:leading-[1.5] tracking-[-0.5px] font-bold mb-2"
        >
          Accelerate Your Instagram: 20-Day Growth MasterclassName!
        </div>
        <div className="flex items-center gap-[6px] md:gap-[12px]">
          <img
            src={clock}
            alt="clock"
            width="21"
            height="21"
            className="w-[21px] h-[21px]"
          />
          <div
            className="text-darkbluemagenta/60 text-base2.5 md:text-base3"
          >
            1 hour
          </div>
        </div>
        <div
          className="flex items-center gap-[6px] md:gap-[12px] py-[12px] md:my-[20px]"
        >
          <img
            src={people}
            alt="people"
            width="23"
            height="15"
            className="w-[23px] h-[15px]"
          />
          <div className="text-darkbluemagenta/60 text-base3">
            Live lesson Included
          </div>
        </div>
        <div
          className="flex items-start md:items-center gap-[6px] md:gap-[10px]"
        >
          <img
            src={f}
            alt="4.3star"
            width="92"
            height="20"
            className="w-[92px] h-[20px]"
          />
          <div
            className="text-darkbluemagenta text-18 leading-none font-bold"
          >
            4.3 Average Rating | 823 Students
          </div>
        </div>
        <div className="mt-3 md:mt-[36px]">
          <button
            type="button"
            className="button rounded-[10px] py-[16px] md:py-[19px] px-[10px] md:px-[38px] bg-primary w-full inline-block text-white text-base2.5 font-extrabold"
          >
            <div className="relative overflow-hidden">
              <span className="button-content">Buy Course</span>
              <span className="button-content-hover">Buy Course</span>
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
