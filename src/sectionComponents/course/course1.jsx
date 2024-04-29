import React, { useState } from 'react';
import Best from '../../asset/best-course.webp';
function Course1() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
    <section
        class="py-[56px] md:pt-[120px] md:pb-[73px] scrollspy-section"
        id="course"
      >
        <div class="container">
          <div class="text-left md:text-center">
            <h2
              class="text-[28px] mb-[12px] md:mb-3 leading-[1.28] tracking-[-0.5px] font-semibold md:text-4.5xl"
            >
              Our best course are here
            </h2>
            <div
              class="bg-primary2/[0.26] h-[4px] md:w-[142px] w-[99px] md:mx-auto mr-auto"
            ></div>
          </div>
          <div
            class="flex md:flex-row justify-between flex-col md:mt-6 mt-[40px]"
          >
            <div class="mt-4 md:mt-0 w-full md:w-[677px] order-2 md:order-0">
              <div
                class="py-[10px] px-[26px] text-16 leading-none font-semibold text-primary2 border border-primary/[0.32] inline-block"
              >
                Live classes
              </div>
              <h2 class="text-xl md:text-3.6xl md:mt-2 mt-[24px]">
                Full stack development - Frontend and backend in 90 days
              </h2>
              <div class="mt-5">
                <p
                  class="text-18 leading-[1.44] md:text-20 md:leading-[1.40] font-semibold"
                >
                  Why should you take this course?
                </p>
                <div
                  class="mt-[14px] md:mt-3 mb-[15px] md:mb-4 py-3 px-[18px] md:px-[26px] bg-primary2/[0.12] border border-primary/20"
                >
                  <ul class="zap-list">
                    <li class="text-secondary/80">
                      Effective
                      <span class="font-bold text-secondary"
                        >problem-solving</span
                      >
                      techniques.
                    </li>
                    <li>
                      Write efficient and
                      <span class="font-bold text-secondary"
                        >optimized code</span
                      >
                      for scalable code
                    </li>
                    <li>
                      Having
                      <span class="font-bold text-secondary"
                        >solid understanding of DSA</span
                      >
                      will set you apart
                    </li>
                  </ul>
                </div>
                <div
                  class="md:pt-4 md:pb-3 md:px-[26px] py-3 px-3 bg-secondary special-discount relative overflow-hidden"
                >
                  <div class="flex md:flex-row flex-col relative z-[1]">
                    <div class="w-full md:w-3/5">
                      <div class="text-orange uppercase text-small">
                        Special Discount
                      </div>
                      <h3
                        class="text-xl-small leading-[1.30] md:text-xl-small text-white mt-[26px] md:mt-[29px] mb-[12px] md:mb-[6px]"
                      >
                        Get
                        <span class="font-bold text-purple">70% Off</span> on
                        this course
                      </h3>
                      <p class="mb-0 text-sm22 font-normal text-white/[0.51]">
                        Offer
                        <span class="text-white font-medium"
                          >valid till 26th July</span
                        >, and price will be increased
                      </p>
                    </div>
                    <div
                      class="w-full md:w-2/5 flex flex-row md:flex-col justify-between items-end"
                    >
                      <div
                        class="py-[6px] max-w-fit px-[10px] md:px-[16px] text-12 md:text-14 leading-[1.5] md:leading-[1.71] font-semibold text-white border border-purple inline-block"
                      >
                        Save upto ₹2,000
                      </div>
                      <div
                        class="flex md:flex-row flex-col items-end md:justify-end md:mt-[37px]"
                      >
                        <div
                          class="text-base md:mr-1 line-through text-white/50"
                        >
                          ₹4,999
                        </div>
                        <div
                          class="text-32 leading-[1.25] font-bold text-white"
                        >
                          ₹1,999
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="bg-primary2 py-[12px] md:py-2 px-[15px] md:px-2 mt-4 relative z-[1]"
                  >
                    <div
                      class="flex justify-between items-start md:items-center md:flex-row flex-col"
                    >
                      <div class="mb-[18px] md:mb-0">
                        <div
                          class="text-12 leading-[1.5] font-medium text-white/[0.49]"
                        >
                          Offer ends in:
                        </div>
                        <p class="text-base3.5 mb-0 text-white">
                          Limited seats available
                        </p>
                      </div>
                      <div class="flex gap-[6px] md:gap-[10px]">
                        <div
                          class="bg-white pt-[6px] pb-1 flex flex-col w-[62px] md:w-[76px] h-[57px] items-center"
                        >
                          <h3
                            class="text-secondary text-20 leading-[1.35] font-bold days-container"
                          >
                            00:
                          </h3>
                          <p
                            class="text-secondary/60 text-12 leading-none font-medium"
                          >
                            Days
                          </p>
                        </div>
                        <div
                          class="bg-white pt-[6px] pb-1 flex flex-col w-[62px] md:w-[76px] h-[57px] items-center"
                        >
                          <h3
                            class="text-secondary text-20 leading-[1.35] font-bold hours-container"
                          >
                            00:
                          </h3>
                          <p
                            class="text-secondary/60 text-12 leading-none font-medium"
                          >
                            Hours
                          </p>
                        </div>
                        <div
                          class="bg-white pt-[6px] pb-1 flex flex-col w-[62px] md:w-[76px] h-[57px] items-center"
                        >
                          <h3
                            class="text-secondary text-20 leading-[1.35] font-bold minutes-container"
                          >
                            00:
                          </h3>
                          <p
                            class="text-secondary/60 text-12 leading-none font-medium"
                          >
                            Mins
                          </p>
                        </div>
                        <div
                          class="bg-white pt-[6px] pb-1 flex flex-col w-[62px] md:w-[76px] h-[57px] items-center"
                        >
                          <h3
                            class="text-secondary text-20 leading-[1.35] font-bold seconds-container"
                          >
                            00
                          </h3>
                          <p
                            class="text-secondary/60 text-12 leading-none font-medium"
                          >
                            Secs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="w-full md:w-[505px] mt-[28px] md:mt-0 order-1 md:order-2"
            >
              <div class="md:border md:border-secondary/[0.24]">
                <div>
                  <img
                    src={Best}
                    alt="best-course"
                    loading="lazy"
                    width="505"
                    height="276"
                    class="w-full"
                  />
                </div>
                <div class="pt-[24px] md:py-4 md:px-4">
                  <div
                    class="text-secondary/50 text-sm22 font-medium tracking-[1.5px]"
                  >
                    LIVE CLASS
                  </div>
                  <h3 class="text-secondary text-base3 mt-1 mb-[16px] md:mb-3">
                    Full stack development - Frontend and backend in 90 days
                  </h3>
                  <div class="flex justify-between items-center">
                    <div class="flex items-center">
                      <div
                        class="text-32 leading-[1.18] font-bold md:text-4.8xl text-primary2 mr-[10px] md:mr-2"
                      >
                        ₹1,999
                      </div>
                      <div
                        class="text-18 leading-[1.20] md:text-xl font-medium text-secondary/50 line-through"
                      >
                        ₹4,999
                      </div>
                    </div>
                    <div
                      class="py-[10px] px-[23px] text-base3 md:text-xl font-bold bg-secondary text-white"
                    >
                      70% OFF
                    </div>
                  </div>
                  <div class="my-[40px] md:mt-3 md:mb-5">
                    <p
                      class="text-base font-medium text-secondary/50 md:mb-[20px] mb-2"
                    >
                      Bonus Includes:
                    </p>
                    <ul class="greentick-list">
                      <li class="mb-0">Placement preparation Roadmap</li>
                      <li class="mb-0">
                        400+ Coding questions for FAANG interview
                      </li>
                      <li class="mb-0">My Personal study material</li>
                    </ul>
                  </div>
                  <button
                    type="button2"
                    class="button2 py-[20px] px-[10px] bg-primary2 text-white w-full text-16 leading-none font-semibold"
                  >
                    <div class="relative overflow-hidden">
                      <span class="button-content2"
                        >Book your seat for ₹1,999</span
                      >
                      <span class="button-content-hover2"
                        >Book your seat for ₹1,999</span
                      >
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

export default Course1;
