import React, { useState } from 'react';


function Hero11() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
    <section class="hero-section pt-[150px] pb-5 lg:pb-[200px] lg:pt-[160px] overflow-hidden relative z-[2]">
      <div class="absolute top-0 left-0 bottom-0 h-full w-full">
        <img class="h-full" src="asset/11/hero-bg.webp" alt="" />
      </div>
      <div class="container relative">
        <div class="flex lg:flex-row flex-col items-center">
          <div class="w-full lg:w-1/2">
            <h1
              class="max-w-[610px] text-[36px] lg:text-[60px] font-bold leading-[1.1] text-white mb-2 lg:mb-3"
            >
              Unlock Your Fantasy Sports Victory
            </h1>
            <div
              class="text-white/70 max-w-[505px] text-base lg:text-xl relative"
            >
              Are you ready to transform your fantasy sports experience? Look
              no further! Our exceptional teacher, renowned across India, is
              here to guide you to fantasy sports victory.
            </div>

            <div class="lg:max-w-[175px] w-full mt-4 mb-3 lg:mb-6">
              <a
                href="#!"
                class="button py-[18px] px-[40px] lg:px-[32px] rounded-[50px] w-full bg-white inline-block text-black font-semibold text-14 leading-none"
              >
                <div class="relative overflow-hidden">
                  <span class="button-content">Explore Courses</span>
                  <span class="button-content-hover">Explore Courses</span>
                </div>
              </a>
            </div>

            <div class="flex items-center text-white">
              <div class="flex items-center">
                <div class="stacked-avatars mr-1 lg:mr-[12px]">
                  <div>
                    <img
                      class="w-[24px] h-[24px] lg:w-5 lg:h-5"
                      src="img/exhibitionist/stack1-img.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="w-[24px] h-[24px] lg:w-5 lg:h-5"
                      src="img/exhibitionist/stack2-img.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="w-[24px] h-[24px] lg:w-5 lg:h-5"
                      src="img/exhibitionist/stack3-img.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="w-[24px] h-[24px] lg:w-5 lg:h-5"
                      src="img/exhibitionist/stack4-img.png"
                      alt=""
                    />
                  </div>
                </div>
                <div class="flex flex-col">
                  <div class="text-14 lg:text-18 font-bold font-manrope">
                    45,000+
                  </div>
                  <div
                    class="text-12 lg:text-14 font-medium opacity-80 font-manrope mt-[2px]"
                  >
                    Students Worldwide
                  </div>
                </div>
              </div>
              <div
                class="h-[24px] lg:h-[44px] w-[1px] bg-white/[0.12] mx-[18px] lg:mx-[23px]"
              ></div>
              <div class="flex lg:flex-col flex-col-reverse">
                <div class="flex flex-row items-center font-manrope">
                  <div class="text-14 lg:text-18 font-bold mr-[5px]">
                    4.6+
                  </div>
                  <div
                    class="text-12 lg:text-14 font-medium opacity-80 font-manrope"
                  >
                    (12,421 ratings)
                  </div>
                </div>
                <div class="">
                  <img src="img/exhibitionist/star-4-6.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <div class="md:max-w-[520px] lg:ml-auto">
              <img
                class="w-full"
                src="img/exhibitionist/hero-img.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}

export default Hero11;
