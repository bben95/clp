import React, { useState } from 'react';
import sp from '../../asset/services-pattern.png';
import checked from '../../asset/checked.svg';
function More8() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
        <section class="mt-[52px]">
      <div class="container relative overflow-hidden">
        <img src={sp} class="absolute bottom-0"/>
        <div class="bg-karry lg:py-[68px] p-3 lg:px-[100px] rounded-[32px]">
          <h2 class="lg:text-[32px] text-24 font-newSpirit text-center font-normal mb-[40px]">
            What sets you apart ?
          </h2>
          <div class="header-grid">
            <div class="font-ibmPlexSans text-14 lg:text-16 font-medium">SERVICES</div>
            <div class="header-nested-grid">
              <div class="font-ibmPlexSans text-14 lg:text-16 font-medium">VELLO</div>
              <div class="font-ibmPlexSans text-14 lg:text-16 font-medium">TRANGLE</div>
              <div class="font-ibmPlexSans text-14 lg:text-16 font-bold text-secondary pl-1 break-all">
                TRAVELUENCER
              </div>
            </div>
          </div>
          <div class="border border-b-0 border-apricot mt-[12px] mb-3"></div>
          <div class="header-grid">
            <div class="font-ibmPlexSans">Video Lessons</div>
            <div class="header-nested-grid">
              <div class=""><img src={checked} alt="" /></div>
              <div class=""><img src={checked} alt="" /></div>
              <div class=""><img src={checked} alt="" /></div>
            </div>
          </div>
          <div class="border border-b-0 border-apricot/20 my-[18px]"></div>
          <div class="header-grid">
            <div class="font-ibmPlexSans">PDF Resources</div>
            <div class="header-nested-grid">
              <div class=""><img src={checked} alt="" /></div>
              <div class=""></div>
              <div class=""><img src={checked} alt="" /></div>
            </div>
          </div>
          <div class="border border-b-0 border-apricot/20 my-[18px]"></div>
          <div class="header-grid">
            <div class="font-ibmPlexSans">Lifetime Validity</div>
            <div class="header-nested-grid">
              <div class=""></div>
              <div class=""></div>
              <div class=""><img src={checked} alt="" /></div>
            </div>
          </div>
          <div class="border border-b-0 border-apricot/20 my-[18px]"></div>
          <div class="header-grid">
            <div class="font-ibmPlexSans">Live Classes</div>
            <div class="header-nested-grid">
              <div class=""><img src={checked} alt="" /></div>
              <div class=""><img src={checked} alt="" /></div>
              <div class=""><img src={checked} alt="" /></div>
            </div>
          </div>
          <div class="border border-b-0 border-apricot/20 my-[18px]"></div>
          <div class="header-grid">
            <div class="font-ibmPlexSans">Community</div>
            <div class="header-nested-grid">
              <div class=""></div>
              <div class=""><img src={checked} alt="" /></div>
              <div class=""><img src={checked} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}

export default More8;