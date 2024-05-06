import React from 'react';
import heroBg from '../../asset/group.png';
import heroB2 from '../../asset/4star-rating.svg';
import heroB3 from '../../asset/arrow-right.svg';
import heroB4 from '../../asset/hero-banner.jpg';
function Hero4() {
  
  return (
    <main>
     <section className="bg-primary2 lg:pt-[80px] lg:pb-[128px] pt-4 pb-5 hero-section">
      <div className="container flex sm:flex-row flex-col sm:gap-[30px] lg:gap-0">
        <div className="lg:w-[60%] w-full lg:pr-[135px]">
          <h1 className="text-[40px] md:text-60 font-semibold px-[12px] lg:px-0">
            MasterclassName for Ambitious Individuals to Excel in Networking
          </h1>
          <h6 className="lg:mt-4 lg:mb-5 mt-2 mb-3 text-white/50 text-center sm:text-start lg:text-18 text-16 font-supreme">
            Unlock the potential to attract and retain a multitude of high-end
            clients who recognize the unique value you provide.
          </h6>
          <button
            className="bg-purple whitespace-nowrap lg:w-fit  justify-center w-full font-supreme font-bold flex gap-1 items-center text-white lg:mb-6 mb-4 lg:py-[20px] py-2 lg:px-[130px]  rounded-[60px] uppercase"
          >
            Join Waitlist
            <img src={heroB3} alt=""/>
          </button>
          <div className="flex  items-start">
            <div className="flex lg:flex-row flex-col">
              <img src={heroBg} alt="" className="mr-[12px]" />
              <div className="mt-1 lg:mt-0">
                <h6 className="text-white font-bold text-start text-18">45,000+</h6>
                <span className="text-white/30 font-supreme font-medium text-14 ">Students Worldwide</span>
              </div>
            </div>
            <div className="border border-white/10 border-r-0 lg:mx-[23px] mx-2 h-[100px] lg:h-[44px]"></div>
            <div className="flex  flex-col-reverse lg:flex-col">
              <h6 className="text-white font-bold text-18 grid lg:flex text-start mt-[18px] lg:mt-0">
                4.6+ <span className="text-white/30 font-supreme font-medium text-14 ml-[5px]">(12,421 ratings)</span>
              </h6>
              <div className="flex gap-[2px]">
                <img src={heroB2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] w-full z-10 mt-[40px] sm:mt-0 h-full">
          <img
            src={heroB4}
            alt=""
            className="rounded-[24px] sm:h-full object-cover h-[293px] w-full"
          />
        </div>
      </div>
    </section>
       </main>
  );
}

export default Hero4;
