import React from 'react';
import him from '../../asset/hero-img-mweb.webp';
import ws from '../../asset/worldwide-students.png';
import star from '../../asset/4-6star.svg';
function Hero3() {

  return (
    <main>
    <section className="pb-0 pt-[110px] lg:pt-[200px] lg:pb-[120px] md:pb-[120px] onyx-hero relative overflow-hidden">
      <div className="container">
        <div className="w-full md:text-left text-center">
          <div className="h13 text-white text-34 md:text-64 leading-[1.1] tracking-[-2px] font-semibold max-w-[735px]">
            Complete course on Stock Market Investing
          </div>
          <p className="max-w-[600px] text-base2.5 font-medium md:font-semibold md:text-18 md:leading-[1.4] text-white/60 mt-2 mb-3">
            Uncover what’s happening during your product trials so go-to-market teams can turn insights into action.
          </p>
          <div className="flex gap-2 md:gap-[20px] md:flex-row flex-col">
            <div className="max-w-full md:max-w-[190px]">
              <button
                type="button"
                className="button rounded-[10px] py-[16px] md:py-[19px] px-[10px] md:px-[38px] bg-primary w-full inline-block text-white text-16 leading-none"
              >
                <div className="relative overflow-hidden">
                  <span className="button-content">Buy Course</span>
                  <span className="button-content-hover">Buy Course</span>
                </div>
              </button>
            </div>
            <div className="max-w-full md:max-w-[190px]">
              <button
                type="button"
                className="button rounded-[10px] py-[16px] md:py-[19px] px-[10px] md:px-[38px] bg-white/10 w-full inline-block text-white text-16 leading-none"
              >
                <div className="relative overflow-hidden">
                  <span className="button-content">Book a Call</span>
                  <span className="button-content-hover">Book a Call</span>
                </div>
              </button>
            </div>
          </div>
          <div className="flex md:flex-col flex-col-reverse">
            <div className="flex items-center md:flex-row flex-col gap-3 md:gap-0 mt-3 md:mt-[67px]">
              <div className="pr-[23px] md:border-r md:border-white/10">
                <div className="flex items-center">
                  <img
                    src={ws}
                    alt="worldwide-students"
                    width="120"
                    height="48"
                    loading="lazy"
                  />
                  <div className="flex flex-col ml-[12px]">
                    <div className="text-white font-semibold text-18 leading-none">
                      45,000+
                    </div>
                    <div className="text-white/[0.36] text-14 leading-none font-medium">
                      Students Worldwide
                    </div>
                  </div>
                </div>
              </div>
              <div className="pl-[23px]">
                <div className="flex flex-col">
                  <div className="text-white font-semibold text-18 leading-none">
                    4.6+<span className="text-white/[0.36] ml-[5px] text-14 leading-none font-medium">(12,421 ratings)</span>
                  </div>
                  <img
                    src={star}
                    alt="worldwide-students"
                    width="92"
                    height="20"
                    loading="lazy"
                    className="mt-[1px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden pt-4">
        <img
          src={him}
          alt="hero-img"
          loading="lazy"
          width="375"
          height="373"
          className="w-full"
        />
      </div>
    </section>
    </main>
  );
}

export default Hero3;
