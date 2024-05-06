import React from 'react';
import star from '../../asset/star.svg';
import hs from '../../asset/half-star.svg';
import ar from '../../asset/arrow-right.svg';
import m1 from '../../asset/masterclass-img1.jpg';
import m2 from '../../asset/masterclass-img2.png';
import wave from '../../asset/wave.svg';
function Course4() {

  return (
    <main>
    <section className="overflow-x-hidden">
        <div className="relative">
          <div className="bg-primary4 lg:pt-[120px] lg:pb-[254px] pt-5 pb-[134px]">
            <div className="container flex lg:gap-[60px] gap-5 sm:gap-[20px] items-center sm:flex-row flex-col-reverse">
              <div className="lg:w-[50%] w-full flex flex-col items-start items-center">
                <p className="text-purple lg:mb-3 mb-2 font-supreme font-bold">MASTERclassName</p>
                <div className="t4 text-white lg:mb-4 mb-2 text-center sm:text-start">
                  Learn Networking From Basics To Advance Level
                </div>
                <div className="flex lg:gap-5 sm:gap-1 gap-[40px] lg:flex-row flex-col">
                  <div className="flex gap-2 items-center justify-center sm:text-start ">
                    <h2 className="text-white font-bold font-supreme text-[32px] lg:text-[48px]">₹4,999</h2>
                    <h4 className="text-white/50 line-through font-supreme font-bold">₹9,999</h4>
                  </div>
                  <div className="bg-green/10 py-[10px] px-3 rounded-[60px] m-auto">
                    <h5 className="text-green font-supreme font-bold whitespace-nowrap">
                      50% OFF ENDS IN <span className="text-mandy">20:35:23</span>
                    </h5>
                  </div>
                </div>
                <p className="text-white/50 mb-4 sm:mb-1 font-supreme font-medium text-center sm:text-start lg:mt-4 px-1 lg:px-0">
                  Enroll in our MasterclassName course and elevate your business
                  acumen with expert guidance, actionable techniques, and
                  real-world case studies.
                </p>
                <div className="flex gap-2">
                  <div className="flex gap-1">
                    <h5 className="text-yellow font-supreme font-bold">4.6</h5>
                    <div className="flex gap-[2px]">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={hs} alt="" />
                    </div>
                  </div>
                  <h5 className="text-white font-supreme font-bold">22,931+ students</h5>
                </div>
                <button
                  className="bg-purple mt-4 sm:mt-2 lg:mt-4 text-white justify-center lg:py-[20px] py-2 w-full lg:w-fit px-[76px] rounded-[60px] font-supreme font-bold flex items-center"
                >
                  ENROLL NOW
                  <img src={ar} alt="" className="ml-1"/>
                </button>
              </div>
              <div className="lg:w-[50%] w-full">
                <img
                  src={m1}
                  alt=""
                  className="rounded-2xl"
                />
                <h4 className="text-white mt-3 text-center font-supreme font-bold">74 videos · 8 hours</h4>
              </div>
            </div>
          </div>
          <img src={wave} className="absolute bottom-[-1px]" alt="" />
        </div>
        <div className="lg:mt-[-10%] sm:mt-[-12%] mt-[-22%] relative">
          <div className="container flex sm:flex-row flex-col lg:gap-[56px] sm:gap-[20px] justify-center items-center">
            <img src={m2} alt="" className="sm:w-[340px] w-full lg:w-full"/>
            <h4 className="font-supreme font-medium mt-3 lg:mt-0 text-20 leading-[30px] sm:text-16 sm:leading-6 lg:text-20 lg:leading-[30px]">
              “Through their mentorship, I've gained a deeper understanding of
              my target market and have refined my marketing strategies to
              connect with customers in more impactful ways.”
            </h4>
          </div>
        </div>
      </section>  
    </main>
  );
}

export default Course4;
