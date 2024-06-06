import React from 'react';
import heroBg from '../../asset/hero-bg.webp';
import stack1 from '../../asset/stack1-img.png';
import stack2 from '../../asset/stack2-img.png';
import stack3 from '../../asset/stack3-img.png';
import stack4 from '../../asset/stack4-img.png';
import h2 from '../../asset/hero-2.webp';
function Hero11() {

  return (
    <main>
    <section className="hero-section pt-[150px] pb-5 lg:pb-[200px] lg:pt-[160px] overflow-hidden relative z-[2]">
      <div className="absolute top-0 left-0 bottom-0 h-full w-full">
      <img className="h-full" src={heroBg} alt="" />
      </div>
      <div className="container relative">
        <div className="flex lg:flex-row flex-col items-center">
          <div className="w-full lg:w-1/2">
            <h1
              className="max-w-[610px] text-[36px] lg:text-[60px] font-bold leading-[1.1] text-white mb-2 lg:mb-3"
            >
              Unlock Your Fantasy Sports Victory
            </h1>
            <div
              className="text-white/70 max-w-[505px] text-base lg:text-xl relative"
            >
              Are you ready to transform your fantasy sports experience? Look
              no further! Our exceptional teacher, renowned across India, is
              here to guide you to fantasy sports victory.
            </div>

            <div className="lg:max-w-[175px] w-full mt-4 mb-3 lg:mb-6">
              <a
                href="#!"
                className="button py-[18px] px-[40px] lg:px-[32px] rounded-[50px] w-full bg-white inline-block font-semibold text-14 leading-none"
              >
                <div className="relative overflow-hidden text-black">
                  <span className="button-content">Explore Courses</span>
                  <span className="button-content-hover">Explore Courses</span>
                </div>
              </a>
            </div>

            <div className="flex items-center text-white">
              <div className="flex items-center">
                <div className="flex stacked-avatars mr-1 lg:mr-[12px]">
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
                <div className="flex flex-col">
                  <div className="text-14 lg:text-18 font-bold font-manrope">
                    45,000+
                  </div>
                  <div
                    className="text-12 lg:text-14 font-medium opacity-80 font-manrope mt-[2px]"
                  >
                    Students Worldwide
                  </div>
                </div>
              </div>
              <div
                className="h-[24px] lg:h-[44px] w-[1px] bg-white/[0.12] mx-[18px] lg:mx-[23px]"
              ></div>
              <div className="flex lg:flex-col flex-col-reverse">
                <div className="flex flex-row items-center font-manrope">
                  <div className="text-14 lg:text-18 font-bold mr-[5px]">
                    4.6+
                  </div>
                  <div
                    className="text-12 lg:text-14 font-medium opacity-80 font-manrope"
                  >
                    (12,421 ratings)
                  </div>
                </div>
                <div className="">
                  <img src="img/exhibitionist/star-4-6.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="md:max-w-[520px] lg:ml-auto">
              <img
                className="w-full"
                src={h2}
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
