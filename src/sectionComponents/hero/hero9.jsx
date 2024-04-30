import React, { useState } from 'react';
import vid from '../../asset/hero-video.mp4';
import stack1 from '../../asset/stack1-img.png';
import stack2 from '../../asset/stack2-img.png';
import stack3 from '../../asset/stack3-img.png';
import stack4 from '../../asset/stack4-img.png';
import heroB2 from '../../asset/4star-rating.svg';
function Hero9() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
      <section
        className="hero-section pt-[220px] pb-5 lg:pb-[200px] lg:pt-[250px] overflow-hidden relative z-[2]"
      >
        <div className="absolute top-0 left-0 bottom-0 h-full w-full">
        <video autoplay muted loop playsinline>
        <source src={vid} type="video/mp4" />
        </video>
          <div className="absolute inset-0 bg-[#000000]/50"></div>
        </div>
        <div className="container relative">
          <div className="w-full text-center">
            <h1
              className="text-[40px] tracking-[-1px] lg:tracking-[-2px] lg:text-[72px] font-DM-Serif-Display font-normal leading-[1.16] text-white mb-2"
            >
              Embrace the Joy of Leisure
            </h1>
            <div
              className="text-white/70 max-w-[609px] mx-auto text-base26 lg:text-basenormal lg:leading-[1.6] relative"
            >
              Discover your adventure playground and explore, while finding your
              gateway to fun, relaxation, and adventure
              <div className="absolute top-0 right-[-10%] hidden lg:inline-block">
                <img src="img/premium/wire-arrow-light.svg" alt="" />
              </div>
            </div>
            <div
              className="flex items-center justify-center gap-[33px] lg:gap-[40px] my-3 lg:mt-3 lg:mb-4"
            >
              <div className="lg:max-w-[192px] max-w-[164px]">
                <a
                  href="#!"
                  className="button py-2 px-[40px] lg:px-[54px] rounded-[50px] w-full bg-white inline-block text-primary font-semibold text-16 leading-[1.5]"
                >
                  <div className="relative overflow-hidden">
                    <span className="button-content">Enroll Now</span>
                    <span className="button-content-hover">Enroll Now</span>
                  </div>
                </a>
              </div>
              <a href="#!" className="flex items-center gap-1">
                <img src="img/premium/play-icon.svg" alt="" />
                <div className="text-16 leading-none text-white font-semibold">
                  Watch Video
                </div>
              </a>
            </div>
            <div className="flex items-center justify-center text-white">
              <div className="flex flex-col">
                <div className="flex items-center lg:flex-row flex-col">
                  <div
                    className="text-32 leading-[1.25] font-bold lg:text-24 lg:leading-none lg:font-medium"
                  >
                    15k
                  </div>
                  <div
                    className="text-16 leading-[1.37] opacity-80 block lg:hidden mt-[12px] mb-[7px]"
                  >
                    Satisfied learners
                  </div>
                  <div className="flex stacked-avatars">
                    <div
                      className="border-2 border-primary rounded-full w-[28px] h-[28px] overflow-hidden"
                    >
                      <img
                        src={stack1}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div
                      className="border-2 border-primary rounded-full w-[28px] h-[28px] overflow-hidden"
                    >
                      <img
                        src={stack2}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div
                      className="border-2 border-primary rounded-full w-[28px] h-[28px] overflow-hidden"
                    >
                      <img
                        src={stack3}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div
                      className="border-2 border-primary rounded-full w-[28px] h-[28px] overflow-hidden"
                    >
                      <img
                        src={stack4}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="text-16 leading-[1.37] opacity-80 mt-[10px] hidden lg:block"
                >
                  Satisfied learners
                </div>
              </div>
              <div
                className="h-[109px] lg:h-5 w-[1px] bg-white/[0.12] mx-[22px] lg:mx-[26px]"
              ></div>
              <div className="flex flex-col">
                <div className="flex lg:flex-row flex-col">
                  <div
                    className="text-32 leading-[1.25] font-bold lg:text-24 lg:leading-none lg:font-medium"
                  >
                    4.3
                  </div>
                  <div
                    className="text-16 leading-[1.37] opacity-80 mt-[12px] mb-[7px] block lg:hidden"
                  >
                    Average ratings
                  </div>
                  <div className="lg:ml-[10px]">
                    <img src={heroB2} alt="" />
                  </div>
                </div>
                <div
                  className="text-16 leading-[1.37] opacity-80 mt-[10px] hidden lg:block"
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
