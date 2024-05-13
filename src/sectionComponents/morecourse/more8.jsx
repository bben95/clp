import React from 'react';
import sp from '../../asset/services-pattern.png';
import checked from '../../asset/checked.svg';
function More8() {

  return (
    <main>
        <section className="mt-[52px]">
      <div className="container relative overflow-hidden">
        <img src={sp} className="absolute bottom-0"/>
        <div className="bg-karry lg:py-[68px] p-3 lg:px-[100px] rounded-[32px]">
          <h2 className="lg:text-[32px] text-24 font-newSpirit text-center font-normal mb-[40px]">
            What sets you apart ?
          </h2>
          <div className="header-grid">
            <div className="font-ibmPlexSans text-14 lg:text-16 font-medium">SERVICES</div>
            <div className="header-nested-grid">
              <div className="font-ibmPlexSans text-14 lg:text-16 font-medium">VELLO</div>
              <div className="font-ibmPlexSans text-14 lg:text-16 font-medium">TRANGLE</div>
              <div className="font-ibmPlexSans text-14 lg:text-16 font-bold text-secondary pl-1 break-all">
                TRAVELUENCER
              </div>
            </div>
          </div>
          <div className="border border-b-0 border-apricot mt-[12px] mb-3"></div>
          <div className="header-grid">
            <div className="font-ibmPlexSans">Video Lessons</div>
            <div className="header-nested-grid">
              <div className=""><img src={checked} alt="" /></div>
              <div className=""><img src={checked} alt="" /></div>
              <div className=""><img src={checked} alt="" /></div>
            </div>
          </div>
          <div className="border border-b-0 border-apricot/20 my-[18px]"></div>
          <div className="header-grid">
            <div className="font-ibmPlexSans">PDF Resources</div>
            <div className="header-nested-grid">
              <div className=""><img src={checked} alt="" /></div>
              <div className=""></div>
              <div className=""><img src={checked} alt="" /></div>
            </div>
          </div>
          <div className="border border-b-0 border-apricot/20 my-[18px]"></div>
          <div className="header-grid">
            <div className="font-ibmPlexSans">Lifetime Validity</div>
            <div className="header-nested-grid">
              <div className=""></div>
              <div className=""></div>
              <div className=""><img src={checked} alt="" /></div>
            </div>
          </div>
          <div className="border border-b-0 border-apricot/20 my-[18px]"></div>
          <div className="header-grid">
            <div className="font-ibmPlexSans">Live classNamees</div>
            <div className="header-nested-grid">
              <div className=""><img src={checked} alt="" /></div>
              <div className=""><img src={checked} alt="" /></div>
              <div className=""><img src={checked} alt="" /></div>
            </div>
          </div>
          <div className="border border-b-0 border-apricot/20 my-[18px]"></div>
          <div className="header-grid">
            <div className="font-ibmPlexSans">Community</div>
            <div className="header-nested-grid">
              <div className=""></div>
              <div className=""><img src={checked} alt="" /></div>
              <div className=""><img src={checked} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}

export default More8;