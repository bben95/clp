import React, { useState } from 'react';


function Hero9() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
      <section
        class="hero-section pt-[220px] pb-5 lg:pb-[200px] lg:pt-[250px] overflow-hidden relative z-[2]"
      >
        <div class="absolute top-0 left-0 bottom-0 h-full w-full">
          <video autoplay muted loop playsinline class="w-full">
            <source src="img/premium/hero-video.mp4" type="video/mp4" />
          </video>
          <div class="absolute inset-0 bg-[#000000]/50"></div>
        </div>
        <div class="container relative">
          <div class="w-full text-center">
            <h1
              class="text-[40px] tracking-[-1px] lg:tracking-[-2px] lg:text-[72px] font-DM-Serif-Display font-normal leading-[1.16] text-white mb-2"
            >
              Embrace the Joy of Leisure
            </h1>
            <div
              class="text-white/70 max-w-[609px] mx-auto text-base26 lg:text-basenormal lg:leading-[1.6] relative"
            >
              Discover your adventure playground and explore, while finding your
              gateway to fun, relaxation, and adventure
              <div class="absolute top-0 right-[-10%] hidden lg:inline-block">
                <img src="img/premium/wire-arrow-light.svg" alt="" />
              </div>
            </div>
            <div
              class="flex items-center justify-center gap-[33px] lg:gap-[40px] my-3 lg:mt-3 lg:mb-4"
            >
              <div class="lg:max-w-[192px] max-w-[164px]">
                <a
                  href="#!"
                  class="button py-2 px-[40px] lg:px-[54px] rounded-[50px] w-full bg-white inline-block text-primary font-semibold text-16 leading-[1.5]"
                >
                  <div class="relative overflow-hidden">
                    <span class="button-content">Enroll Now</span>
                    <span class="button-content-hover">Enroll Now</span>
                  </div>
                </a>
              </div>
              <a href="#!" class="flex items-center gap-1">
                <img src="img/premium/play-icon.svg" alt="" />
                <div class="text-16 leading-none text-white font-semibold">
                  Watch Video
                </div>
              </a>
            </div>
            <div class="flex items-center justify-center text-white">
              <div class="flex flex-col">
                <div class="flex items-center lg:flex-row flex-col">
                  <div
                    class="text-32 leading-[1.25] font-bold lg:text-24 lg:leading-none lg:font-medium"
                  >
                    15k
                  </div>
                  <div
                    class="text-16 leading-[1.37] opacity-80 block lg:hidden mt-[12px] mb-[7px]"
                  >
                    Satisfied learners
                  </div>
                  <div class="stacked-avatars lg:ml-[10px]">
                    <div>
                      <img
                        class="w-[28px] h-[28px]"
                        src="img/premium/stack1-img.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        class="w-[28px] h-[28px]"
                        src="img/premium/stack2-img.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        class="w-[28px] h-[28px]"
                        src="img/premium/stack3-img.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        class="w-[28px] h-[28px]"
                        src="img/premium/stack4-img.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="text-16 leading-[1.37] opacity-80 mt-[10px] hidden lg:block"
                >
                  Satisfied learners
                </div>
              </div>
              <div
                class="h-[109px] lg:h-5 w-[1px] bg-white/[0.12] mx-[22px] lg:mx-[26px]"
              ></div>
              <div class="flex flex-col">
                <div class="flex lg:flex-row flex-col">
                  <div
                    class="text-32 leading-[1.25] font-bold lg:text-24 lg:leading-none lg:font-medium"
                  >
                    4.3
                  </div>
                  <div
                    class="text-16 leading-[1.37] opacity-80 mt-[12px] mb-[7px] block lg:hidden"
                  >
                    Average ratings
                  </div>
                  <div class="lg:ml-[10px]">
                    <img src="img/premium/4stars.svg" alt="" />
                  </div>
                </div>
                <div
                  class="text-16 leading-[1.37] opacity-80 mt-[10px] hidden lg:block"
                >
                  Average ratings
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero9;
