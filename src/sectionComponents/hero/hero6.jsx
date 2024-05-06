import React from 'react';
import hero from '../../asset/hero-6.webp';
import av1 from '../../asset/avatar-1.webp';
import av2 from '../../asset/avatar-2.webp';
import av3 from '../../asset/avatar-3.webp';
import av4 from '../../asset/avatar-4.webp';
import star from '../../asset/star-4-6.svg';
function Hero6() {

  return (
    <main>
    <section
      className="hero-section bg-secondary pb-4 pt-[132px] lg:pb-[86px] lg:pt-[120px] overflow-hidden"
    >
      <div className="container">
        <div className="flex md:flex-row flex-col gap-5 lg:gap-2 items-center">
          <div className="w-full lg:w-[55%] hero-content relative z-30 text-left">
            <h1
              className="text-[40px] lg:text-[64px] md:max-w-[670px] font-melodrama font-semibold leading-[110%] tracking-[-1px] text-white md:mb-3 mb-2"
            >
              Turn Your Knowledge Into A Super-
              <span className="text-primary">Profitable Business</span>
            </h1>
            <p
              className="text-white/70 mb-[40px] lg:max-w-[600px] text-16 leading-[1.6]"
            >
              Join the community that has already created more than 200+
              six-figure earners in a knowledge business. Get started today!
            </p>

            <div className="flex gap-2 md:flex-row flex-col">
              <a
                href="#!"
                className="button chevron button-green md:max-w-[210px] w-full"
              >
                Buy Course
              </a>
              <a
                href="#!"
                className="button chevron-light !bg-white/[0.18] md:max-w-[210px] w-full"
              >
                Book a Call
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[45%] hero-image-area relative">
            <div className="absolute top-[20%] right-[40px] z-0">
              <img src="img/premium/herobg-pattern.svg" alt="" />
            </div>
            <div className="relative z-10">
              <img
                src={hero}
                className="rounded-xl w-full"
                alt=""
              />
            </div>
            <div
              className="flex absolute bottom-0 z-10 bg-gradient-to-b from-[#B9DC2F] to-[#577D09] rounded-[200px] py-[20px] px-[19px] lg:px-[40px] max-w-fit mx-auto"
            >
              <div className="flex gap-[12px] items-center">
                <div className="flex gap-1">
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
                <div className="flex flex-col items-center justify-center">
                  <h4 className="text-white text-14 lg:text-[18px] font-bold">
                    45,000+
                  </h4>
                  <p className="text-white/50 mb-0 text-12 lg:text-14">
                    Happy&nbsp;Students
                  </p>
                </div>
              </div>

              <div className="my-1 mx-[15px]">
                <div className="h-full w-[1px] bg-white/20"></div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex gap-[6px] items-center">
                  <h4 className="text-white text-14 lg:text-[18px] font-bold">
                    4.6+
                  </h4>
                  <p className="text-white/50 mb-0 text-12 lg:text-14">Reviews</p>
                </div>
                <div className="w-[76px] lg:w-fit">
                  <img src={star} alt="4.6 Ratings" />
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
