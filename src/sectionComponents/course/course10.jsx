import React from 'react';
import ia from '../../asset/ipl-auction.png';
import ar from '../../asset/arrow-up-right.svg';
import cp from '../../asset/courses-pattern.png';
import star from '../../asset/stars.svg';
function Course10() {

  return (
    <main>
         <section className="lg:pt-[190px] pt-[80px] lg:pb-[150px] pb-[56px] relative" id="course">
      <div className="container">
        <div className="flex lg:flex-row flex-col">
          <div className="t9">Become an IPL fantasy team expert.</div>
          <span className="mt-[12px] text-primary10 ml-3 text-[24px]  font-bold "> //Courses
          </span>
        </div>
        <div className="border border-b-0 mt-3 lg:mb-[80px] mb-4"></div>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[30px] ">
          <div className="flex flex-col justify-end">
            <div>
              <h2 className="!font-sora font-semibold lg:text-[44px] text-20">
                Create your top playing 11 for this IPL season.
              </h2>
              <p className="lg:mt-4 font-sora text-16 mt-2">
                This course content outline covers the fundamental aspects of
                fantasy cricket, from its introduction to advanced strategies,
                responsible gaming practices, and certification.
              </p>
            </div>

          </div>
          <div className=" sm:row-span-2 mt-[28px] lg:mt-0">
            <img src={ia} alt="profile" width="794" height="944" className="z-10 relative"/>
          </div>
          <div className="mt-[30px] lg:mt-0">
            <div className="flex lg:mt-5 ">
              <div>
                <h5 className="lg:text-[28px] text-[22px] flex">
                  4.6 <img src={star} alt="img18" className="lg:h-[30px] h-3 w-3 ml-1" />
                </h5>
                <p>Ratings</p>
              </div>
              <div className="border border-r-0 lg:mx-[34px] mx-[28px]"></div>
              <div>
                <h5 className="lg:text-[28px] text-[22px]">22,931+</h5>
                <p>Students</p>
              </div>
              <div className="border border-r-0 lg:mx-[34px] mx-[28px]"></div>
              <div>
                <h5 className="lg:text-[28px] text-[22px]">60 hrs</h5>
                <p>Content</p>
              </div>
            </div>
            <button
              className="bg-primary10 whitespace-nowrap lg:w-fit w-full justify-between rounded-full flex items-center px-4 py-[12px] text-14 text-white mt-5 font-sora">
              BUY THIS COURSE
              <img src={ar} alt="img2" className="ml-4" />
            </button>
          </div>
        </div>
        
        
      </div>
      <img src={cp} alt="imag1" className="lg:block hidden absolute  top-[24%] right-0" />
    </section>
    </main>
  );
}

export default Course10;
