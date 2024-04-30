import React, { useState } from 'react';
import heroBg from '../../asset/group.png';
import heroB2 from '../../asset/4star-rating.svg';
import heroB3 from '../../asset/hero-influencer-mweb.webp';
import heroB4 from '../../asset/hero-influencer.webp';

function Hero1() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
    <section
      className="py-[60px] md:py-[64px] rigi-hero relative overflow-hidden"
    >
      <div className="container">
        <div className="w-full text-center">
          <h1
            className="text-secondary text-[40px] md:text-64 leading-[1.1] tracking-[-2px] font-semibold max-w-[720px] mx-auto"
          >
            Tech Dreams Come True: Your Job Awaits
          </h1>
          <p
            className="max-w-[641px] mx-auto text-sm22 md:text-16 md:leading-[1.5] text-secondary/80 mt-2 mb-4"
          >
            Job seekers can create compelling profiles, showcasing their
            skills, experience, and aspirations, while exploring an extensive
            database of tech job openings from top-tier tech companies to
            exciting startups.
          </p>
          <div className="max-w-[404px] mx-auto">
            <button
              type="button"
              className="button py-[16px] md:py-[20px] px-[10px] bg-primary w-full inline-block text-white text-16 leading-none"
            >
              <div className="relative overflow-hidden">
                <span className="button-content">Book your seat</span>
                <span className="button-content-hover">Book your seat</span>
              </div>
            </button>
          </div>
          <div className="flex md:flex-col flex-col-reverse">
            <div className="flex justify-center mt-4">
              <div className="pr-[26px] md:border-r md:border-secondary/[0.12]">
                <div className="text-center block md:flex">
                  <div
                    className="mr-[10px] text-secondary text-32 md:text-[24px] leading-[1.25] md:leading-none font-bold md:font-semibold"
                  >
                    15k
                  </div>
                  <img
                    src={heroBg}
                    alt="group"
                    width="90"
                    height="26"
                    loading="lazy"
                  />
                </div>
                <p
                  className="mb-[7px] md:mb-0 mt-[12px] md:mt-[10px] text-base2 text-secondary/80"
                >
                  Satisfied learners
                </p>
                <img
                  src={heroBg}
                  alt="group"
                  width="90"
                  height="26"
                  loading="lazy"
                  className="hidden md:block"
                />
              </div>
              <div className="pl-[26px]">
                <div className="text-center block md:flex">
                  <div
                    className="mr-[10px] text-secondary text-32 md:text-[24px] leading-[1.25] md:leading-none font-bold md:font-semibold"
                  >
                    4.3
                  </div>
                  <img
                    src={heroB2}
                    alt="4star-rating"
                    width="90"
                    height="26"
                    loading="lazy"
                    className="hidden md:block"
                  />
                </div>
                <p
                  className="mb-[7px] md:mb-0 mt-[12px] md:mt-[10px] text-base2 text-secondary/80"
                >
                  Average ratings
                </p>
                <img
                  src={heroB2}
                  alt="4star-rating"
                  width="90"
                  height="26"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-3 md:mt-[100px] max-w-[1030px] mx-auto">
              <picture>
                <source
                  media="(min-width:768px)"
                  srcset={heroB3}
                  width="1030"
                  height="526"
                />
                <img
                  src={heroB4}
                  width="343"
                  height="255"
                  className="mx-auto"
                  alt="hero-influencer"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}

export default Hero1;
