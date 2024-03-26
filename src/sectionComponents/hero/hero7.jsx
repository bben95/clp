import React, { useState } from 'react';


function Hero7() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
<section
  class="hero-section pt-[142px] pb-[100px] lg:pb-[200px] lg:pt-[160px] overflow-hidden relative z-[2]"
>
  <div class="absolute top-0 left-0 bottom-0 h-full">
    <video autoplay muted loop playsinline>
      <source src="img/feminine/hero-video.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-[#000000]/50"></div>
  </div>
  <div class="container relative">
    <div class="flex lg:flex-row flex-col">
      <div class="w-full lg:w-3/5 text-center lg:text-left">
        <div
          class="py-1 px-[20px] rounded-[27px] border border-white/20 flex items-center max-w-fit mx-auto lg:mx-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_1670_2853)">
              <path
                d="M10.24 3.20889C10.9273 3.49566 11.5472 3.92277 12.06 4.46289C12.581 3.95065 13.1932 3.54027 13.865 3.25289C14.862 2.83989 16.005 2.76589 17 3.33989C17.994 3.91389 18.503 4.94189 18.644 6.01089C18.734 6.69889 18.682 7.43889 18.497 8.18089C19.2211 8.35397 19.901 8.67654 20.493 9.12789C21.373 9.81189 22 10.8159 22 11.9999C22 13.1779 21.38 14.1779 20.507 14.8599C19.9348 15.3006 19.2788 15.6201 18.579 15.7989C18.776 16.5199 18.829 17.2519 18.731 17.9369C18.575 19.0339 18.021 20.0709 17.001 20.6599C15.974 21.2529 14.791 21.2099 13.76 20.7909C13.073 20.5041 12.4534 20.077 11.941 19.5369C11.391 20.0669 10.776 20.4829 10.135 20.7469C9.138 21.1599 7.995 21.2339 7 20.6599C6.006 20.0859 5.498 19.0579 5.356 17.9889C5.26925 17.2627 5.31911 16.5267 5.503 15.8189C4.77899 15.6456 4.09914 15.3231 3.507 14.8719C2.627 14.1879 2 13.1839 2 11.9999C2 10.8219 2.62 9.82289 3.493 9.13989C4.06482 8.69894 4.72049 8.3791 5.42 8.19989C5.2247 7.50494 5.17298 6.77749 5.268 6.06189C5.425 4.96589 5.979 3.92889 7 3.33989C8.026 2.74789 9.209 2.78989 10.24 3.20889ZM12 7.99989C10.9391 7.99989 9.92172 8.42132 9.17157 9.17147C8.42143 9.92161 8 10.939 8 11.9999C8 13.0608 8.42143 14.0782 9.17157 14.8283C9.92172 15.5785 10.9391 15.9999 12 15.9999C13.0609 15.9999 14.0783 15.5785 14.8284 14.8283C15.5786 14.0782 16 13.0608 16 11.9999C16 10.939 15.5786 9.92161 14.8284 9.17147C14.0783 8.42132 13.0609 7.99989 12 7.99989ZM12 9.99989C12.5304 9.99989 13.0391 10.2106 13.4142 10.5857C13.7893 10.9608 14 11.4695 14 11.9999C14 12.5303 13.7893 13.039 13.4142 13.4141C13.0391 13.7892 12.5304 13.9999 12 13.9999C11.4696 13.9999 10.9609 13.7892 10.5858 13.4141C10.2107 13.039 10 12.5303 10 11.9999C10 11.4695 10.2107 10.9608 10.5858 10.5857C10.9609 10.2106 11.4696 9.99989 12 9.99989Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1670_2853">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div
            class="ml-[10px] text-14 leading-[1.5] font-semibold text-white"
          >
            Yoga lifestyle
          </div>
        </div>
        <h1
          class="text-[36px] tracking-[-1px] lg:tracking-normal lg:text-[72px] lg:max-w-[713px] font-bodoni font-normal leading-[1.16] lg:leading-none text-white mt-4 lg:mt-[36px] mb-3"
        >
          Learn Yoga at the comfort of your home and find peace within you
        </h1>
        <p
          class="text-white/70 lg:max-w-[600px] text-small lg:text-basenormal lg:leading-[1.6]"
        >
          Philosophy revolves around the belief that yoga is not just a
          physical practice but a holistic journey towards self-discovery
          and well-being.
        </p>
        <div
          class="mt-[40px] lg:mt-6 mb-[40px] lg:mb-4 max-w-[295px] mx-auto lg:mx-0"
        >
          <a
            href="#!"
            class="button py-[12px] px-[20px] rounded-[50px] w-full bg-primary min-w-[160px] inline-block text-white text-16 leading-[1.5]"
          >
            <div class="relative overflow-hidden">
              <span class="button-content">Start the Yoga Journey</span>
              <span class="button-content-hover"
                >Start the Yoga Journey</span
              >
            </div>
          </a>
        </div>
        <div
          class="flex items-center text-white mb-3 lg:justify-normal justify-center"
        >
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
                    src="img/feminine/stack1-img.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="w-[28px] h-[28px]"
                    src="img/feminine/stack2-img.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="w-[28px] h-[28px]"
                    src="img/feminine/stack3-img.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="w-[28px] h-[28px]"
                    src="img/feminine/stack4-img.png"
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
                <img src="img/feminine/4stars.svg" alt="" />
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
      <div class="w-full lg:w-2/5">
        <div class="relative flex items-center justify-center">
          <img
            class="w-full rounded-text"
            src="img/feminine/round-text.png"
            alt=""
          />
          <a href="#!" class="absolute">
            <div class="relative ripple-effect">
              <img
                class="relative z-[2]"
                src="img/feminine/hero-play.svg"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="relative bottom-[-101px] lg:bottom-[-201px] z-[2] w-full">
    <svg
      class="w-full h-auto"
      width="1440"
      height="143"
      viewBox="0 0 1440 143"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 142.493v-125a1350.384 1350.384 0 0 1 560.277 26.959l241.629 63.58C1018.12 164.924 1248.14 132.287 1440 17.493v125H0Z"
        fill="#F4ECE1"
      />
    </svg>
  </div>
</section>
    </main>
  );
}

export default Hero7;
