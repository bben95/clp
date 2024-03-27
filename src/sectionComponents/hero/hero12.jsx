import React, { useState } from 'react';
import heroBg from '../../asset/homepage-hero-bg.webp';
import stack1 from '../../asset/stack1-img.png';
import stack2 from '../../asset/stack2-img.png';
import stack3 from '../../asset/stack3-img.png';
import stack4 from '../../asset/stack4-img.png';
import heroB2 from '../../asset/4star-rating.svg';
import hs from '../../asset/hero-section.webp';

function Hero12() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
    <section style={{ backgroundImage: `url(${heroBg})` }} className="bg-cover bg-center pt-150px lg:pt-200px overflow-hidden">
      <div class="container">
        <div class="grid lg:grid-cols-2">
          <div class="pb-4">
            <div
              class="hero-content pl-3 border-l-4 border-l-lightyellow mb-7"
            >
              <p
                class="flex opacity-50 items-center gap-2 uppercase text-white"
              >
                Fantasy league

                <span class="flex-1 bg-white h-[1px]"></span>
              </p>

              <h1 class="text-48 md:text-72 text-lightyellow">
                Become a <span class="text-lightred">Sport analyst</span> and
                Fantasy Cricket expert
              </h1>
            </div>

            <a href="#!" class="button chevron">GET STARTED </a>

            <div class="pt-6 flex gap-3">
              <div class="flex flex-col items-center">
                <div class="flex gap-1 items-center flex-wrap justify-center">
                  <h4 class="text-lightyellow text-[36px] font-semibold">
                    15k
                  </h4>

                  <div class="flex stacked-avatars">
                    <div
                      class="border-2 border-primary rounded-full w-[28px] h-[28px] overflow-hidden"
                    >
                      <img
                        src={stack1}
                        class="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div
                      class="border-2 border-primary rounded-full w-[28px] h-[28px] overflow-hidden"
                    >
                      <img
                        src={stack2}
                        class="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div
                      class="border-2 border-primary rounded-full w-[28px] h-[28px] overflow-hidden"
                    >
                      <img
                        src={stack3}
                        class="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div
                      class="border-2 border-primary rounded-full w-[28px] h-[28px] overflow-hidden"
                    >
                      <img
                        src={stack4}
                        class="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <p class="opacity-80 text-lightyellow mb-0 mt-1">
                  Satisfied learners
                </p>
              </div>

              <div class="my-1">
                <div class="h-full w-[1px] bg-white/20"></div>
              </div>

              <div class="flex flex-col items-center">
                <div class="flex gap-1 items-center flex-wrap justify-center">
                  <h4 class="text-white text-[36px] font-semibold">4.3</h4>

                  <div class="lg:ml-[10px]">
                    <img src={heroB2} alt="" />
                  </div>
                </div>

                <p class="opacity-80 text-white mb-0 mt-1">Average ratings</p>
              </div>
            </div>
          </div>

          <div>
            <div class="lg:w-[700px] lg:-translate-x-7">
              <img src={hs} class="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}

export default Hero12;
