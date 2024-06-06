import React from 'react';
import heroBg from '../../asset/group.png';
import hl from '../../asset/hero-left-image.png';
import hlm from '../../asset/hero-img-left-mobile.png';
import hr from '../../asset/hero-right-img.png';
import hrm from '../../asset/hero-img-right-mobile.png';
import ar from '../../asset/arrow-right.svg';
import travel from '../../asset/travel.jpg';
import vid from '../../asset/video-icon.svg';
import youtube from '../../asset/youtube.svg';
import instagram from '../../asset/instagram.svg';
import twitter from '../../asset/twitter.svg';
function Hero8() {

  return (
    <main className="overflow-x-hidden">
      <section className="lg:py-[100px] py-[47px] overflow-hidden hero-section">
        <div className="container relative">
          <img
              src={hl}
              alt="imag1"
              className="absolute top-[-3%] left-[4%]  md:block z-10"
            />
          <img src={hlm} className="absolute left-[-12%] top-[-5%] sm:left-[-4%] sm:top-[-12%] block md:hidden z-10" alt="image4"/>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-newSpirit lg:max-w-[809px] sm:max-w-[550px] text-center font-normal md:text-[64px] text-[36px]">
              Your Passport to
              <span className="text-secondary font-semibold">Unforgettable Journeys</span>
              <br />
              and Authentic Adventures
            </h1>
            <p className="text-center font-ibmPlexSans lg:max-w-[610px] mt-2 max-w-[287px]">
              Through vivid storytelling, breathtaking photography, and
              insightful travel tips, my platform is your window to the world.
            </p>
            <button
              className="bg-secondary lg:py-2 py-[12px] px-[37px] rounded-full text-white font-ibmPlexSans md:text-18 lg:mt-[46px] mt-[40px] flex">
              Lets get started
              <img src={ar} alt="image2" className="ml-[10px]" />
            </button>
            <div className="flex flex-col lg:flex-row gap-[25px] lg:gap-0 items-center mt-4">
              <div className="flex gap-[2px]">
                <img src={heroBg} alt="image101" />
                <div className="ml-[12px]">
                  <h6 className="text-18 font-bold">5M+</h6>
                  <span className="text-14 mt-1 whitespace-nowrap">Satisfied Customers
                  </span>
                </div>
              </div>
              <div className="border border-r-0 mx-3 lg:block hidden"></div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Hero8;

