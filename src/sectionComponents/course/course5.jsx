import React, { useState } from 'react';
import eb from '../../asset/expert-badge.svg';
import ni from '../../asset/network-icon.svg';
import ws from '../../asset/white-stars.svg';
import cp from '../../asset/circle-pattern.svg';
import pt from '../../asset/price-tag.svg';
import o2 from '../../asset/owner-2.webp';
import si from '../../asset/stars-icon.svg';
import u from '../../asset/users.svg';
function Course5() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
     <section class="section-pad overflow-hidden">
        <div class="container">
          <div class="text-center">
            <div class="light-tag-white mb-4">
              <div>
                <img src={si} alt="" />
                Premium Courses
              </div>
            </div>
            <h2 class="heading mb-3">To be the best, Learn from the best</h2>
            <p class="opacity-60 font-semibold">
              Some of the best courses we have and achieved to create an impact
              with the knowledge shared
            </p>
          </div>

          <div
            class="single-course-book rounded-3xl pt-4 px-3 md:px-5 md:pt-5 bg-primary relative mb-[170px]"
          >
            <div
              class="absolute -top-4 -right-3 md:-top-7 md:-right-4 z-20 max-w-[120px] lg:max-w-full"
            >
              <img src={eb} alt="" />
            </div>
            <div class="row relative z-10">
              <div class="px-2 w-full lg:w-2/5 order-2 lg:order-1">
                <div class="course-img overflow-hidden mb-[-110px] rounded-2xl">
                  <img
                    src={o2}
                    class="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>

              <div class="px-2 w-full lg:w-3/5 pb-5">
                <div class="light-tag mb-4">
                  <img src={si} alt="" />
                  Pre-recorded Course
                </div>

                <h3 class="text-[28px] font-semibold text-white mb-2">
                  Start selling products online & turn into a <br />
                  profitable business.
                </h3>
                <p class="text-white/60 text-14">
                  Shopify provides you with tools and information to handle
                  various aspects of your store, from products and orders to
                  customers and analytics. Shopify provides you with tools and
                  info.
                </p>

                <div class="md:pt-4 flex gap-4 flex-col-reverse md:flex-row">
                  <div class="flex flex-col gap-2 flex-1">
                    <div class="flex gap-2 items-center justify-center">
                      <h3
                        class="text-white font-bold text-[40px] md:text-[50px]"
                      >
                        ₹4,999
                      </h3>
                      <p
                        class="opacity-70 text-white text-24 mb-0 line-through"
                      >
                        ₹9,999
                      </p>
                    </div>

                    <a href="#!" class="button button-white button-big"
                      >Book Your Seat</a
                    >
                  </div>

                  <div
                    class="w-[2px] bg-white opacity-10  md:block"
                  ></div>

                  <div class="flex flex-col gap-1 flex-1">
                    <div
                      class="border border-white/25 bg-white/[4%] px-2 py-[10px] flex gap-[12px] rounded-lg items-center"
                    >
                      <img src={ni} alt="" />
                      <div class="flex-1">
                        <span class="text-14 font-medium text-white">
                          Beginner level
                        </span>
                      </div>
                    </div>
                    <div
                      class="border border-white/25 bg-white/[4%] px-2 py-[10px] flex gap-[12px] rounded-lg items-center"
                    >
                      <img src={u} alt="" />
                      <div class="flex-1">
                        <span class="text-14 font-medium text-white">
                          20k Students
                        </span>
                      </div>
                    </div>
                    <div
                      class="border border-white/25 bg-white/[4%] px-2 py-[10px] flex gap-[12px] rounded-lg items-center"
                    >
                      <img src={ws} alt="" />
                      <div class="flex-1">
                        <span class="text-14 font-medium text-white">
                          4.8 Ratings
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div
            class="bg-[#064132] rounded-2xl py-3 px-[20px] md:px-5 relative overflow-hidden"
          >
            <div
              class="absolute left-0 right-0 mx-auto max-w-[580px] translate-y-[-30%] top-0 z-0 opacity-10"
            >
              <img src={cp} alt="" />
            </div>
            <div
              class="flex items-center relative z-10 flex-wrap justify-center lg:justify-start gap-3"
            >
              <div class="w-full md:w-auto lg:flex-1 text-center lg:text-left">
                <div
                  class="inline-flex items-center p-2 bg-white/10 rounded-lg gap-1 mb-2"
                >
                  <img src={pt} alt="" />

                  <span
                    class="text-lightyellow md:text-14 tracking-[1px] uppercase font-medium"
                  >
                    Special price of this course
                  </span>
                </div>

                <p class="text-20 mb-0 font-semibold text-white">
                  This Offer is only for a limited time period
                </p>
              </div>

              <div>
                <div class="flex gap-[12px] md:gap-[20px]">
                  <div class="flex flex-col gap-[12px] items-center">
                    <div
                      class="bg-lightyellow rounded-lg p-[12px] md:py-[18px] md:px-2"
                    >
                      <h3
                        class="text-darkgreen text-[28px] md:text-[40px] font-semibold days-container"
                      >
                        0
                      </h3>
                    </div>
                    <p class="text-white font-medium mb-0">Days</p>
                  </div>
                  <div class="flex flex-col gap-[12px] items-center">
                    <div
                      class="bg-lightyellow rounded-lg p-[12px] md:py-[18px] md:px-2"
                    >
                      <h3
                        class="text-darkgreen text-[28px] md:text-[40px] font-semibold hours-container"
                      >
                        0
                      </h3>
                    </div>
                    <p class="text-white font-medium mb-0">Hours</p>
                  </div>
                  <div class="flex flex-col gap-[12px] items-center">
                    <div
                      class="bg-lightyellow rounded-lg p-[12px] md:py-[18px] md:px-2"
                    >
                      <h3
                        class="text-darkgreen text-[28px] md:text-[40px] font-semibold minutes-container"
                      >
                        0
                      </h3>
                    </div>
                    <p class="text-white font-medium mb-0">Mins</p>
                  </div>
                  <div class="flex flex-col gap-[12px] items-center">
                    <div
                      class="bg-lightyellow rounded-lg p-[12px] md:py-[18px] md:px-2"
                    >
                      <h3
                        class="text-darkgreen text-[28px] md:text-[40px] font-semibold seconds-container"
                      >
                        0
                      </h3>
                    </div>
                    <p class="text-white font-medium mb-0">Secs</p>
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

export default Course5;
