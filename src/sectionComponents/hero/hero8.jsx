import React, { useState } from 'react';
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
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main class="overflow-x-hidden">
      <section class="lg:py-[100px] py-[47px] overflow-hidden hero-section">
        <div class="container relative">
          <img
              src={hl}
              alt=""
              class="absolute top-[-3%] left-[4%]  md:block z-10"
            />
          <img src={hlm} class="absolute left-[-12%] top-[-5%] sm:left-[-4%] sm:top-[-12%] block md:hidden z-10"/>
          <div class="flex flex-col justify-center items-center">
            <h1 class="font-newSpirit lg:max-w-[809px] sm:max-w-[550px] text-center font-normal md:text-[64px] text-[36px]">
              Your Passport to
              <span class="text-secondary font-semibold">Unforgettable Journeys</span>
              <br />
              and Authentic Adventures
            </h1>
            <p class="text-center font-ibmPlexSans lg:max-w-[610px] mt-2 max-w-[287px]">
              Through vivid storytelling, breathtaking photography, and
              insightful travel tips, my platform is your window to the world.
            </p>
            <button
              class="bg-secondary lg:py-2 py-[12px] px-[37px] rounded-full text-white font-ibmPlexSans md:text-18 lg:mt-[46px] mt-[40px] flex">
              Lets get started
              <img src={ar} alt="" class="ml-[10px]" />
            </button>
            <div class="flex flex-col lg:flex-row gap-[25px] lg:gap-0 items-center mt-4">
              <div class="flex gap-[2px]">
                <img src={heroBg} alt="" />
                <div class="ml-[12px]">
                  <h6 class="text-18 font-bold">5M+</h6>
                  <span class="text-14 mt-1 whitespace-nowrap">Satisfied Customers
                  </span>
                </div>
              </div>
              <div class="border border-r-0 mx-3 lg:block hidden"></div>
              <div class="flex flex-col items-center lg:text-start">
                <h6 class="text-18 font-bold">
                  4.6+ <span class="font-normal text-14">(12,421 ratings)</span>
                </h6>
                <div class="flex mt-[4px]">
                  <img src="img/star.svg" alt="" />
                  <img src="img/star.svg" alt="" />
                  <img src="img/star.svg" alt="" />
                  <img src="img/star.svg" alt="" />
                  <img src="img/half-star.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <img
              src={hr}
              alt=""
              class="absolute top-[-11%] right-[-4%] lg:block"
            />
          <img src={hrm} alt="" class="absolute top-[-4%] sm:top-[-10%] right-[-10%] sm:right-[-2%] block lg:hidden"/>
          <div class="relative lg:mt-[80px] mt-[40px]">
            <img src={travel} alt="" class="rounded-3xl h-[520px] lg:h-auto" />
            <img src={vid} class="absolute lg:top-[50%] lg:right-[25%] right-[50%] top-[20%] translate-x-[50%] transform lg:translate-y-[-50%] lg:w-[72px] lg:h-[72px] h-[40px] w-[40px]"/>
          </div>
          <div class="">
            <div
              class="bg-primary travel-dreams rounded-2xl max-w-[494px] lg:p-3 p-[20px] absolute bottom-1 lg:bottom-3 left-0  lg:ml-[40px] mx-3 border-t-[-340px]">
              <h3 class="lg:text-[34px] text-[28px] font-newSpirit font-medium">
                Transforming<br class="hidden lg:block" />
                Travel Dreams into Reality
              </h3>
              <p class="font-normal text-16 font-ibmPlexSans leading-6 max-w-[425px] mt-[12px]">
                Whether you're a curious explorer seeking off-the-beaten-path
                destinations or a luxury seeker craving exquisite getaways, I've
                got you covered.
              </p>
              <div class="flex lg:border lg:py-[18px] lg:px-[28px] px-[5px] mt-4">
                <div class="">
                  <div class="flex flex-col items-center">
                    <h4 class="font-bold font-newSpirit lg:text-24 text-20 leading-9">
                      2.01M
                    </h4>
                    <div class="flex gap-1">
                      <img src={youtube} alt="" />
                      <span class="lg:text-14 text-12 font-ibmPlexSans leading-[21px]">Subscribers</span>
                    </div>
                  </div>
                </div>
                <div class="border border-r-0 border-apricot/10 lg:mx-[28px] mx-2"></div>
                <div class="">
                  <div class="flex flex-col items-center">
                    <h4 class="font-bold font-newSpirit lg:text-24 text-20 leading-9">
                      3.01M
                    </h4>
                    <div class="flex gap-1">
                      <img src={instagram} alt="" />
                      <span class="lg:text-14 text-12 font-ibmPlexSans leading-[21px]">Followers
                      </span>
                    </div>
                  </div>
                </div>
                <div class="border border-r-0 border-apricot/10 lg:mx-[28px] mx-2"></div>
                <div class="">
                  <div class="flex flex-col items-center">
                    <h4 class="font-bold font-newSpirit lg:text-24 text-20 leading-9">
                      433K
                    </h4>
                    <div class="flex gap-1">
                      <img src={twitter} alt="" />
                      <span class="lg:text-14 text-12 font-ibmPlexSans leading-[21px]">Followers
                      </span>
                    </div>
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

export default Hero8;

