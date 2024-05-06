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
      <div className="container">
        <div className="grid lg:grid-cols-2">
          <div className="pb-4">
            <div
              className="hero-content pl-3 border-l-4 border-l-lightyellow mb-7"
            >
              <p
                className="flex opacity-50 items-center gap-2 uppercase text-white"
              >
                Fantasy league

                <span className="flex-1 bg-white h-[1px]"></span>
              </p>

              <h1 className="text-48 md:text-72 text-lightyellow">
                Become a <span className="text-lightred">Sport analyst</span> and
                Fantasy Cricket expert
              </h1>
            </div>

            <a href="#!" className="button chevron">GET STARTED </a>

            <div className="pt-6 flex gap-3">
              <div className="flex flex-col items-center">
                <div className="flex gap-1 items-center flex-wrap justify-center">
                  <h4 className="text-lightyellow text-[36px] font-semibold">
                    15k
                  </h4>

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

                <p className="opacity-80 text-lightyellow mb-0 mt-1">
                  Satisfied learners
                </p>
              </div>

              <div className="my-1">
                <div className="h-full w-[1px] bg-white/20"></div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex gap-1 items-center flex-wrap justify-center">
                  <h4 className="text-white text-[36px] font-semibold">4.3</h4>

                  <div className="lg:ml-[10px]">
                    <img src={heroB2} alt="" />
                  </div>
                </div>

                <p className="opacity-80 text-white mb-0 mt-1">Average ratings</p>
              </div>
            </div>
          </div>

          <div>
            <div className="lg:w-[700px] lg:-translate-x-7">
              <img src={hs} className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}

export default Hero12;
