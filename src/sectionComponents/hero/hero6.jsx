import React, { useState } from 'react';


function Hero6() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
    <section
      class="hero-section bg-secondary pb-4 pt-[132px] lg:pb-[86px] lg:pt-[120px] overflow-hidden"
    >
      <div class="container">
        <div class="flex md:flex-row flex-col gap-5 lg:gap-2 items-center">
          <div class="w-full lg:w-[55%] hero-content relative z-30 text-left">
            <h1
              class="text-[40px] lg:text-[72px] md:max-w-[670px] font-melodrama font-semibold leading-[110%] tracking-[-1px] text-white md:mb-3 mb-2"
            >
              Turn Your Knowledge Into A Super-
              <span class="text-primary">Profitable Business</span>
            </h1>
            <p
              class="text-white/70 mb-[40px] lg:max-w-[600px] text-16 leading-[1.6]"
            >
              Join the community that has already created more than 200+
              six-figure earners in a knowledge business. Get started today!
            </p>

            <div class="flex gap-2 md:flex-row flex-col">
              <a
                href="#!"
                class="button chevron button-green md:max-w-[210px] w-full"
              >
                Buy Course
              </a>
              <a
                href="#!"
                class="button chevron-light !bg-white/[0.18] md:max-w-[210px] w-full"
              >
                Book a Call
              </a>
            </div>
          </div>

          <div class="w-full lg:w-[45%] hero-image-area relative">
            <div class="absolute top-[20%] right-[40px] z-0">
              <img src="img/premium/herobg-pattern.svg" alt="" />
            </div>
            <div class="relative z-10">
              <img
                src="img/premium/hero-img.webp"
                class="rounded-xl w-full"
                alt=""
              />
            </div>
            <div
              class="flex absolute bottom-0 z-10 bg-gradient-to-b from-[#B9DC2F] to-[#577D09] rounded-[200px] py-[20px] px-[19px] lg:px-[40px] max-w-fit mx-auto"
            >
              <div class="flex gap-[12px] items-center">
                <div class="flex gap-1">
                  <div class="flex stacked-avatars">
                    <div
                      class="border-2 border-primary rounded-full w-[40px] lg:w-[48px] h-[40px] lg:h-[48px] overflow-hidden"
                    >
                      <img
                        src="img/premium/avatar-1.webp"
                        class="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div
                      class="border-2 border-primary rounded-full w-[40px] lg:w-[48px] h-[40px] lg:h-[48px] overflow-hidden"
                    >
                      <img
                        src="img/premium/avatar-2.webp"
                        class="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div
                      class="border-2 border-primary rounded-full w-[40px] lg:w-[48px] h-[40px] lg:h-[48px] overflow-hidden"
                    >
                      <img
                        src="img/premium/avatar-3.webp"
                        class="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div
                      class="border-2 border-primary rounded-full w-[40px] lg:w-[48px] h-[40px] lg:h-[48px] overflow-hidden"
                    >
                      <img
                        src="img/premium/avatar-4.webp"
                        class="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="flex flex-col items-center justify-center">
                  <h4 class="text-white text-14 lg:text-[18px] font-bold">
                    45,000+
                  </h4>
                  <p class="text-white/50 mb-0 text-12 lg:text-14">
                    Happy&nbsp;Students
                  </p>
                </div>
              </div>

              <div class="my-1 mx-[15px]">
                <div class="h-full w-[1px] bg-white/20"></div>
              </div>

              <div class="flex flex-col items-center">
                <div class="flex gap-[6px] items-center">
                  <h4 class="text-white text-14 lg:text-[18px] font-bold">
                    4.6+
                  </h4>
                  <p class="text-white/50 mb-0 text-12 lg:text-14">Reviews</p>
                </div>
                <div class="w-[76px] lg:w-fit">
                  <img src="img/premium/star-4-6.svg" alt="4.6 Ratings" />
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

export default Hero6;
