import React, { useState } from 'react';
import am from '../../asset/aboutme.webp';
import amm from '../../asset/aboutme-mweb.webp';
import lf from '../../asset/left-flowers.png'
import rf from '../../asset/right-flowers.png'
import youtube from '../../asset/youtube.svg';
import twitter from '../../asset/twitter.svg';
import instagram from '../../asset/instagram.svg';
function About3() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
         <section
        class="pt-5 md:pt-[40px] pb-6 md:pb-[80px] scrollspy-section"
        id="about"
      >
        <div class="container">
          <div class="flex justify-between items-center md:flex-row flex-col">
            <div class="w-full md:w-1/2">
              <div
                class="flex items-center md:flex-row flex-col-reverse gap-[12px] md:gap-[14px] md:hidden mb-3"
              >
                <div class="h-[2px] w-[92px] bg-primary"></div>
                <div
                  class="text-14 leading-none uppercase inline-block tracking-[3px] font-bold"
                >
                  About me
                </div>
              </div>
              <div class="relative">
                <picture class="">
                  <source
                    media="(min-width:768px)"
                    srcset={am}
                    width="610"
                    height="610"
                  />
                  <img
                    src={amm}
                    width="343"
                    height="343"
                    class="mx-auto"
                    alt="aboutme"
                    loading="lazy"
                  />
                </picture>
                <div
                  class="flex absolute bottom-0 left-0 justify-center w-full translate-y-[40%]"
                >
                  <div
                    class="bg-[#4E6DDF] py-[17px] px-[22px] flex flex-col text-white rounded-xl text-center"
                  >
                    <div
                      class="text-32 md:text-[46px] leading-none font-extrabold"
                    >
                      12+
                    </div>
                    <div class="text-sm26 md:text-base2.5 font-medium">
                      Years of experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 md:ml-[68px] text-center md:text-left">
              <div
                class="md:flex items-center md:flex-row flex-col-reverse gap-[12px] md:gap-[14px] hidden"
              >
                <div class="h-[2px] w-[92px] bg-primary"></div>
                <div
                  class="text-14 leading-none uppercase inline-block tracking-[3px] font-bold"
                >
                  About me
                </div>
              </div>
              <h2
                class="mt-[56px] mb-[40px] md:mt-[15px] md:mb-3 text-xl tracking-[-0.5px] md:text-4.8xl text-secondary"
              >
                Creating content and teaching for the past 12 years!
              </h2>
              <div class="md:mb-[40px]">
                <p class="text-base text-secondary/80">
                  I am glad that you have made it here to send a distress
                  signal, and inform the Senate that all on board were killed.
                  Dantooine. I'm not going to Alderaan. I really got to go. But
                  that to me. Send a distress signal, and inform the Senate that
                  all on board were killed. Dantooine.
                </p>
              </div>
              <div
                class="flex gap-4 md:gap-[36px] justify-center md:justify-normal"
              >
                <div class="flex items-center">
                  <img src={lf} alt="left-flowers" />
                  <div class="flex flex-col items-center text-secondary">
                    <div
                      class="text-12 md:text-14 leading-none uppercase font-semibold md:font-bold mb-[4px]"
                    >
                      Creator&nbsp;award
                    </div>
                    <div
                      class="opacity-50 text-[10px] md:text-12 leading-none font-semibold"
                    >
                      2022
                    </div>
                  </div>
                  <img src={rf} alt="right-flowers" />
                </div>
                <div class="flex items-center">
                  <img src={lf} alt="left-flowers" />
                  <div class="flex flex-col items-center text-secondary">
                    <div
                      class="text-12 md:text-14 leading-none uppercase font-semibold md:font-bold mb-[4px]"
                    >
                      Angel&nbsp;Investor
                    </div>
                    <div
                      class="opacity-50 text-[10px] md:text-12 leading-none font-semibold"
                    >
                      2022
                    </div>
                  </div>
                  <img src={rf} alt="right-flowers" />
                </div>
              </div>
            </div>
          </div>
          <div
            class="h-[1px] w-full bg-white mt-[120px] mb-[80px]  md:block"
          ></div>
          <div
            class="grid grid-cols-2 justify-items-center md:flex mt-[40px] md:mt-0 md:items-center md:justify-center gap-[20px] md:gap-0 text-center flex-wrap"
          >
            <div class="flex flex-col items-center max-w-[160px] md:max-w-max">
              <div class="text-[46px] text-secondary font-extrabold">60+</div>
              <div class="text-base2.5 text-secondary mt-[9px]">Modules</div>
            </div>
            <div
              class="bg-secondary/[0.13] w-[1px] h-[50px] mx-auto md:block"
            ></div>
            <div class="flex flex-col items-center max-w-[160px] md:max-w-max">
              <div class="text-[46px] text-secondary font-extrabold">340+</div>
              <div class="text-base2.5 text-secondary mt-[9px]">
                Hours of content
              </div>
            </div>
            <div
              class="bg-secondary/[0.13] w-[1px] h-[50px] mx-auto md:block"
            ></div>
            <div class="flex flex-col items-center max-w-[160px] md:max-w-max">
              <div class="text-[46px] text-secondary font-extrabold">500+</div>
              <div class="text-base2.5 text-secondary mt-[9px]">
                Positive Reviews
              </div>
            </div>
            <div
              class="bg-secondary/[0.13] w-[1px] h-[50px] mx-auto md:block"
            ></div>
            <div class="flex flex-col items-center max-w-[160px] md:max-w-max">
              <div class="text-[46px] text-secondary font-extrabold">600+</div>
              <div class="text-base2.5 text-secondary mt-[9px]">
                Total Course Graduates
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About3;
