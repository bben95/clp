import React, { useState } from 'react';
import kf from '../../asset/karansingh-front.jpg'
import ks from '../../asset/karansinghs-side.jpg'
import youtube from '../../asset/youtube.svg';
import twitter from '../../asset/twitter.svg';
import instagram from '../../asset/instagram.svg';
function About2() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
    <section class="lg:py-[150px] py-[60px]" id="about">
      <div class="container">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="">
            <div>
              <div class="bg-olive/20 w-fit rounded-lg lg:mb-2 mb-1">
                <p class="text-olive pt-1 pb-[4px] px-3 font-khula font-semibold">
                  Finance Influencer, Entrepreneur and Investor
                </p>
              </div>
              <h2 class="text-32 md:text-64 font-semibold mr-1 lg:mr-0">Empowering Your Financial Future</h2>
              <h6 class="font-normal mt-4">
                Karan Singh is a seasoned value investor and a YouTuber with
                over two million subscribers on his channel. His YouTube channel
                is the biggest in the financial education domain and aims at
                empowering investors and disseminating financial awareness.
              </h6>
            </div>
          </div>
          <div class=" sm:row-span-2">
            <div class="bg-beige max-w-[610px] lg:h-[512px] h-[275px] financial-future relative mt-2 lg:mt-0">
              <img src={kf}
                class="absolute top-[-10%] right-[12%] w-[175px] lg:w-[316px] rounded-xl" />
              <img src={ks}
                class="absolute bottom-[10%] left-[22%] w-[118px] lg:w-[210px] rounded-xl" />
            </div>
          </div>
          <div class="flex items-end">
            <div class="flex lg:gap-4 gap-3 items-center mt-[12px] lg:mt-0">
              <div class="flex flex-col items-center">
                <img loading="lazy" width="24" height="24" src={instagram} alt="instagram" />
                <h3 class="text-primary mt-1">1M</h3>
              </div>
              <div class="border border-r-0 h-[56px] border-customgrey/10"></div>
              <div class="flex flex-col items-center">
                <img loading="lazy" width="24" height="24" src={youtube} alt="YouTube" class="h-3" />
                <h3 class="text-primary mt-1">5M+</h3>
              </div>
              <div class="border border-r-0 h-[56px] border-customgrey/10"></div>
              <div class="flex flex-col items-center">
                <img loading="lazy" width="24" height="24" src={twitter} alt="twitter" />
                <h3 class="text-primary mt-1">3M+</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </main>
  );
}

export default About2;
