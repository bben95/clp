import React, { useState } from 'react';
import av1 from '../../asset/avatar-1.webp';
import av2 from '../../asset/avatar-2.webp';
import av3 from '../../asset/avatar-3.webp';
import av4 from '../../asset/avatar-4.webp';
import heroB2 from '../../asset/4star-rating.svg';
import stars from '../../asset/stars-icon.svg';
import hero from '../../asset/hero-img.webp';
function Hero5() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
    <section
      className="hero-section bg-primary3 pb-4 pt-[120px] md:pb-7 md:pt-[180px] overflow-hidden"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-4 items-start">
          <div className="hero-content relative z-30 text-center md:text-left">
            <div className="light-tag mb-4">
              <img src={stars} alt="" />
              Improve your online presence
            </div>

            <h1
                className="text-[36px] lg:text-[60px] font-semibold leading-[110%] tracking-[-1px] text-white mb-3"
              >
               Drive Business Excellence with a
                <span className="text-lightyellow">Skilled Coach</span>
              </h1>
            <p className="text-white mb-5">
              Discover the power of expert guidance and strategic insights as
              our online business coach empowers you to elevate your
              entrepreneurial journey and achieve unprecedented success in the
              digital realm.
            </p>

            <a href="#!" className="button button-white max-w-[360px] w-full">
              Explore courses
            </a>

            <div className="pt-4 flex gap-3 md:justify-normal">
              <div className="flex flex-col items-left">
                <div className="flex">
                  <h4 className="text-white text-[26px] font-semibold">15k</h4>

                  <div className="flex stacked-avatars">
                    <div
                      className="border-2 border-primary rounded-full w-[28px] h-[28px] overflow-hidden"
                    >
                      <img
                        src={av1}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div
                      className="border-2 border-primary rounded-full w-[28px] h-[28px] overflow-hidden"
                    >
                      <img
                        src={av2}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div
                      className="border-2 border-primary rounded-full w-[28px] h-[28px] overflow-hidden"
                    >
                      <img
                        src={av3}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div
                      className="border-2 border-primary rounded-full w-[28px] h-[28px] overflow-hidden"
                    >
                      <img
                        src={av4}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <p className="opacity-80 text-white mb-0 mt-1">
                  Satisfied learners
                </p>
              </div>

              <div className="my-1">
                <div className="h-full w-[1px] bg-white/20"></div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex gap-1 items-center">
                  <h4 className="text-white text-[26px] font-semibold">4.3</h4>

                  <div className="flex gap-[2px]">
                  <img src={heroB2} alt="" />
                </div>
                </div>

                <p className="opacity-80 text-white mb-0 mt-1">Average ratings</p>
              </div>
            </div>
          </div>

          <div className="hero-image-area relative">
            <div className="absolute rotate-[-63deg] top-[-84px] -right-3 z-0">
              <img src="img/puzzle-piece-green.svg" alt="" />
            </div>
            <div
              className="absolute rotate-[-109deg] max-w-[140px] bottom-[-40px] left-[-90px] z-0"
            >
              <img src="img/puzzle-piece-green.svg" alt="" />
            </div>
            <div className="relative z-10">
              <img src={hero} className="rounded-xl w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}

export default Hero5;
