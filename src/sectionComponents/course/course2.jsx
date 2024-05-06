import React, { useState } from 'react';
import ar from '../../asset/arrow-right-circle.svg';
import al from '../../asset/arrow-left-circle.svg';
import cd from '../../asset/chevron-down.svg';
import os from '../../asset/online-statistics.jpg';
import s from '../../asset/stopwatch.svg';
import lm from '../../asset/learners-mobile.svg';
import star from '../../asset/star.svg';
import cm from '../../asset/checkmark.svg';
function Course2() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
      
     <section className="lg:pt-[150px] hidden lg:block">
      <div className="container">
        <div className="flex justify-between items-end">
            <div>
          <div className="t2">
            Our Top Rated Courses
            </div>
            <h6 className="max-w-[715px] font-normal lg:mt-3 mt-2 text-secondary/70">
              "Empowering learners with expert knowledge and practical skills, our
              top-performing courses deliver an immersive educational experience."
            </h6>
          </div>
          <div className="flex gap-[12px] ">
            <img src={al} className="cursor-pointer" id="prevButton" />
            <img src={ar} className="cursor-pointer" id="nextButton" />
          </div>
        </div>
        <div className="wrapper relative flex w-full mt-[44px] ">
          <div className="background-card bg-lightOlive w-[90%] z-40 rounded-xl h-full">
            <div className="  lg:p-4 p-2 flex lg:flex-row flex-col lg:gap-5 gap-[20px]  rounded-lg">
              <img src={os} />
              <div className="flex flex-col justify-center">
                <h5 className="mb-1 text-18 lg:text-[28px]">Financial Analysis and Strategies</h5>
                <p className="text-secondary/70 font-khula pr-2">
                  This finance course provides a comprehensive understanding of
                  financial analysis techniques and investment strategies.
                </p>
                <div className="border border-customgrey/10 border-b-0 mt-3 mb-[29px] w-[95%]"></div>
                <h5 className="text-20 mb-[20px]">You will learn</h5>
                <div className="flex mb-3">
                  <img src={cm} />
                  <p className="ml-1 font-normal font-khula">
                    What are the strategies to find a Multibagger stock?
                  </p>
                </div>
                <div className="flex mb-3">
                  <img src={cm} />
                  <p className="ml-1 font-normal font-khula">
                    What are the strategies to find a Multibagger stock?
                  </p>
                </div>
                <div className="flex mb-3">
                  <img src={cm} />
                  <p className="ml-1 font-normal font-khula">
                    What are the strategies to find a Multibagger stock?
                  </p>
                </div>
                <div className="flex mb-3">
                  <img src={cm} />
                  <p className="ml-1 font-normal font-khula">
                    What are the strategies to find a Multibagger stock?
                  </p>
                </div>
                <div className="flex mt-[49px]">
                  <a href="#!"
                    className="mr-[36px] button py-[16px] px-[105px] rounded-lg bg-secondary inline-block text-white text-16 leading-[1.5]">
                    <div className="relative overflow-hidden">
                      <span className="button-content whitespace-nowrap">Enroll Now</span>
                      <span className="button-content-hover whitespace-nowrap">Enroll Now</span>
                    </div>
                  </a>
                  <div>
                    <div className="flex items-start">
                      <h6 className="!mr-[6px] font-bold">25</h6>
                      <img src={s} />
                    </div>
                    <span className="font-khula text-14 font-semibold mt-[5px] whitespace-nowrap">Days Left</span>
                  </div>
                  <div className="border border-r-0 mx-2 border-customgrey/10"></div>
                  <div className="flex flex-col">
                    <div className="flex items-start">
                      <h6 className="mr-[14px] font-bold">4.3</h6>
                      <img src={star} alt="" />
                    </div>
                    <span className="font-khula font-semibold text-14 mt-[5px] whitespace-nowrap">Average ratings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background-card bg-tranquil z-30 w-[93.33%] h-full absolute rounded-xl">
            <div className="  lg:p-4 p-2 flex lg:flex-row flex-col lg:gap-5 gap-[20px]  rounded-lg">
              <img src={os} />
              <div className="flex flex-col justify-center">
                <h5 className="mb-1 text-18 lg:text-[28px]">Financial Analysis and Strategies</h5>
                <p className="text-secondary/70 font-khula pr-2">
                  This finance course provides a comprehensive understanding of
                  financial analysis techniques and investment strategies.
                </p>
                <div className="border border-b-0 mt-3 mb-[29px] w-[95%] border-customgrey/10"></div>
                <h5 className="text-20 mb-[20px]">You will learn</h5>
                <div className="flex mb-3">
                  <img src={cm} />
                  <p className="ml-1 font-normal font-khula">
                    What are the strategies to find a Multibagger stock?
                  </p>
                </div>
                <div className="flex mb-3">
                  <img src={cm} />
                  <p className="ml-1 font-normal font-khula">
                    What are the strategies to find a Multibagger stock?
                  </p>
                </div>
                <div className="flex mb-3">
                  <img src={cm} />
                  <p className="ml-1 font-normal font-khula">
                    What are the strategies to find a Multibagger stock?
                  </p>
                </div>
                <div className="flex mb-3">
                  <img src={cm} />
                  <p className="ml-1 font-normal font-khula">
                    What are the strategies to find a Multibagger stock?
                  </p>
                </div>
                <div className="flex mt-[49px]">
                  <a href="#!"
                    className="mr-[36px] button py-[16px] px-[105px] rounded-lg bg-secondary inline-block text-white text-16 leading-[1.5]">
                    <div className="relative overflow-hidden">
                      <span className="button-content whitespace-nowrap">Enroll Now</span>
                      <span className="button-content-hover whitespace-nowrap">Enroll Now</span>
                    </div>
                  </a>
                  <div>
                    <div className="flex items-start">
                      <h6 className="!mr-[6px] font-bold">25</h6>
                      <img src={s} />
                    </div>
                    <span className="font-khula text-14 font-semibold mt-[5px] whitespace-nowrap">Days Left</span>
                  </div>
                  <div className="border border-r-0 mx-2 border-customgrey/10"></div>
                  <div className="flex flex-col">
                    <div className="flex items-start">
                      <h6 className="mr-[14px] font-bold">4.3</h6>
                      <img src={star} alt="" />
                    </div>
                    <span className="font-khula font-semibold text-14 mt-[5px] whitespace-nowrap">Average ratings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background-card bg-cadbe z-20 w-[96.66%] h-full absolute rounded-xl">
            <div className="  lg:p-4 p-2 flex lg:flex-row flex-col lg:gap-5 gap-[20px]  rounded-lg">
              <img src={os} />
              <div className="flex flex-col justify-center">
                <h5 className="mb-1 text-18 lg:text-[28px]">Financial Analysis and Strategies</h5>
                <p className="text-secondary/70 font-khula pr-2">
                  This finance course provides a comprehensive understanding of
                  financial analysis techniques and investment strategies.
                </p>
                <div className="border border-b-0 mt-3 mb-[29px] w-[95%] border-customgrey/10"></div>
                <h5 className="text-20 mb-[20px]">You will learn</h5>
                <div className="flex mb-3">
                  <img src={cm} />
                  <p className="ml-1 font-normal font-khula">
                    What are the strategies to find a Multibagger stock?
                  </p>
                </div>
                <div className="flex mb-3">
                  <img src={cm} />
                  <p className="ml-1 font-normal font-khula">
                    What are the strategies to find a Multibagger stock?
                  </p>
                </div>
                <div className="flex mb-3">
                  <img src={cm} />
                  <p className="ml-1 font-normal font-khula">
                    What are the strategies to find a Multibagger stock?
                  </p>
                </div>
                <div className="flex mb-3">
                  <img src={cm} />
                  <p className="ml-1 font-normal font-khula">
                    What are the strategies to find a Multibagger stock?
                  </p>
                </div>
                <div className="flex mt-[49px]">
                  <a href="#!"
                    className="mr-[36px] button py-[16px] px-[105px] rounded-lg bg-secondary inline-block text-white text-16 leading-[1.5]">
                    <div className="relative overflow-hidden">
                      <span className="button-content whitespace-nowrap">Enroll Now</span>
                      <span className="button-content-hover whitespace-nowrap">Enroll Now</span>
                    </div>
                  </a>
                  <div>
                    <div className="flex items-start">
                      <h6 className="!mr-[6px] font-bold">25</h6>
                      <img src={s} />
                    </div>
                    <span className="font-khula text-14 font-semibold mt-[5px] whitespace-nowrap">Days Left</span>
                  </div>
                  <div className="border border-r-0 mx-2 border-customgrey/10"></div>
                  <div className="flex flex-col">
                    <div className="flex items-start">
                      <h6 className="mr-[14px] font-bold">4.3</h6>
                      <img src={star} alt="" />
                    </div>
                    <span className="font-khula font-semibold text-14 mt-[5px] whitespace-nowrap">Average ratings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background-card bg-darkOlive z-10 w-[100%] h-full absolute rounded-xl">
            <div className="  lg:p-4 p-2 flex lg:flex-row flex-col lg:gap-5 gap-[20px]  rounded-lg">
              <img src={os} />
              <div className="flex flex-col justify-center">
                <h5 className="mb-1 text-18 lg:text-[28px]">Financial Analysis and Strategies</h5>
                <p className="text-secondary/70 font-khula pr-2">
                  This finance course provides a comprehensive understanding of
                  financial analysis techniques and investment strategies.
                </p>
                <div className="border border-b-0 mt-3 mb-[29px] w-[95%] border-customgrey/10"></div>
                <h5 className="text-20 mb-[20px]">You will learn</h5>
                <div className="flex mb-3">
                  <img src={cm} />
                  <p className="ml-1 font-normal font-khula">
                    What are the strategies to find a Multibagger stock?
                  </p>
                </div>
                <div className="flex mb-3">
                  <img src={cm} />
                  <p className="ml-1 font-normal font-khula">
                    What are the strategies to find a Multibagger stock?
                  </p>
                </div>
                <div className="flex mb-3">
                  <img src={cm} />
                  <p className="ml-1 font-normal font-khula">
                    What are the strategies to find a Multibagger stock?
                  </p>
                </div>
                <div className="flex mb-3">
                  <img src={cm} />
                  <p className="ml-1 font-normal font-khula">
                    What are the strategies to find a Multibagger stock?
                  </p>
                </div>
                <div className="flex mt-[49px]">
                  <a href="#!"
                    className="mr-[36px] button py-[16px] px-[105px] rounded-lg bg-secondary inline-block text-white text-16 leading-[1.5]">
                    <div className="relative overflow-hidden">
                      <span className="button-content whitespace-nowrap">Enroll Now</span>
                      <span className="button-content-hover whitespace-nowrap">Enroll Now</span>
                    </div>
                  </a>
                  <div>
                    <div className="flex items-start">
                      <h6 className="!mr-[6px] font-bold">25</h6>
                      <img src={s} />
                    </div>
                    <span className="font-khula text-14 font-semibold mt-[5px] whitespace-nowrap">Days Left</span>
                  </div>
                  <div className="border border-r-0 mx-2 border-customgrey/10"></div>
                  <div className="flex flex-col">
                    <div className="flex items-start">
                      <h6 className="mr-[14px] font-bold">4.3</h6>
                      <img src={star} alt="" />
                    </div>
                    <span className="font-khula font-semibold text-14 mt-[5px] whitespace-nowrap">Average ratings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </div>
    </section>

    <section className="block lg:hidden pt-[60px] pb-[120px] top-rated relative">
      <div className="container">
        <div>
          <h2>Our Top Rated Courses</h2>
          <h6 className="max-w-[715px] font-normal lg:mt-3 mt-2 text-secondary/70">
            "Empowering learners with expert knowledge and practical skills, our
            top-performing courses deliver an immersive educational experience."
          </h6>
        </div>
        <div className="slider mt-[36px] gap-[20px]">
          <div className=" bg-tranquil  w-full h-full  rounded-lg">
            <div className=" p-2 flex flex-col  gap-[20px]  rounded-lg">
              <img src={os} />
              <div className="flex flex-col justify-center">
                <h5 className="mb-1 text-18 lg:text-[28px] mt-[20px]">Financial Analysis and Strategies</h5>
                <p className="text-secondary/70 font-khula pr-2">
                  This finance course provides a comprehensive understanding of
                  financial analysis techniques and investment strategies.
                </p>
                <div>
                  <div className="lg:hidden mt-[12px] flex gap-[12px] items-center toggle-button">
                    <span className="font-khula font-bold">View all details</span>
                    <img src={cd} className="toggle-icon" />
                  </div>
                  <div className="toggle-content">
                    <div className="mt-[12px]">
                      <div className="flex lg:mb-3 mb-2 items-start">
                        <img src={cm} className="lg:h-[18px] lg:w-[18px] h-[16px] w-[16px] mt-[2px]" />
                        <p className="ml-1 font-normal font-khula">
                          What are the strategies to find a Multibagger stock?
                        </p>
                      </div>
                      <div className="flex lg:mb-3 mb-2  items-start">
                        <img src={cm} className="lg:h-[18px] lg:w-[18px] h-[16px] w-[16px] mt-[2px]" />
                        <p className="ml-1 font-normal font-khula">
                          What are the strategies to find a Multibagger stock?
                        </p>
                      </div>
                      <div className="flex lg:mb-3 mb-2  items-start">
                        <img src={cm} className="lg:h-[18px] lg:w-[18px] h-[16px] w-[16px] mt-[2px]" />
                        <p className="ml-1 font-normal font-khula">
                          What are the strategies to find a Multibagger stock?
                        </p>
                      </div>
                      <div className="flex  items-start3">
                        <img src={cm} className="lg:h-[18px] lg:w-[18px] h-[16px] w-[16px] mt-[2px]" />
                        <p className="ml-1 font-normal font-khula">
                          What are the strategies to find a Multibagger stock?
                        </p>
                      </div>
                      <div className="flex lg:mt-[49px] mt-3 flex-col-reverse">
                        <a href="#!"
                          className="mr-[36px] w-full mt-[28px] lg:mt-0 button py-[16px] px-[105px] rounded-lg bg-secondary inline-block text-white text-16 leading-[1.5]">
                          <div className="relative overflow-hidden">
                            <span className="button-content whitespace-nowrap">Enroll Now</span>
                            <span className="button-content-hover whitespace-nowrap">Enroll Now</span>
                          </div>
                        </a>
                        <div className="flex gap-[10px]">
                          <div>
                            <img src={lm} />
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-start">
                              <h6 className="mr-[14px] font-bold">4.3</h6>
                              <img src={star} alt="" />
                            </div>
                            <span className="font-khula font-semibold text-14 mt-[5px] whitespace-nowrap">Average
                              ratings</span>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-tranquil  w-full h-full  rounded-lg">
            <div className=" p-2 flexflex-col  gap-[20px]  rounded-lg">
              <img src={os} />
              <div className="flex flex-col justify-center">
                <h5 className="mb-1 text-18 lg:text-[28px] mt-[20px]">Financial Analysis and Strategies</h5>
                <p className="text-secondary/70 font-khula pr-2">
                  This finance course provides a comprehensive understanding of
                  financial analysis techniques and investment strategies.
                </p>
                <div>
                  <div className="lg:hidden mt-[12px] flex gap-[12px] items-center toggle-button">
                    <span className="font-khula font-bold">View all details</span>
                    <img src={cd} className="toggle-icon" />
                  </div>
                  <div className="toggle-content">
                    <div className="mt-[12px]">
                      <div className="flex lg:mb-3 mb-2 items-start">
                        <img src={cm} className="lg:h-[18px] lg:w-[18px] h-[16px] w-[16px] mt-[2px]" />
                        <p className="ml-1 font-normal font-khula">
                          What are the strategies to find a Multibagger stock?
                        </p>
                      </div>
                      <div className="flex lg:mb-3 mb-2  items-start">
                        <img src={cm} className="lg:h-[18px] lg:w-[18px] h-[16px] w-[16px] mt-[2px]" />
                        <p className="ml-1 font-normal font-khula">
                          What are the strategies to find a Multibagger stock?
                        </p>
                      </div>
                      <div className="flex lg:mb-3 mb-2  items-start">
                        <img src={cm} className="lg:h-[18px] lg:w-[18px] h-[16px] w-[16px] mt-[2px]" />
                        <p className="ml-1 font-normal font-khula">
                          What are the strategies to find a Multibagger stock?
                        </p>
                      </div>
                      <div className="flex  items-start3">
                        <img src={cm} className="lg:h-[18px] lg:w-[18px] h-[16px] w-[16px] mt-[2px]" />
                        <p className="ml-1 font-normal font-khula">
                          What are the strategies to find a Multibagger stock?
                        </p>
                      </div>
                      <div className="flex lg:mt-[49px] mt-3 flex-col-reverse">
                        <a href="#!"
                          className="mr-[36px] w-full mt-[28px] lg:mt-0 button py-[16px] px-[105px] rounded-lg bg-secondary inline-block text-white text-16 leading-[1.5]">
                          <div className="relative overflow-hidden">
                            <span className="button-content whitespace-nowrap">Enroll Now</span>
                            <span className="button-content-hover whitespace-nowrap">Enroll Now</span>
                          </div>
                        </a>
                        <div className="flex gap-[10px]">
                          <div>
                            <img src={lm} />
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-start">
                              <h6 className="mr-[14px] font-bold">4.3</h6>
                              <img src={star} alt="" />
                            </div>
                            <span className="font-khula font-semibold text-14 mt-[5px] whitespace-nowrap">Average
                              ratings</span>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-tranquil  w-full h-full  rounded-lg">
            <div className=" p-2 flexflex-col  gap-[20px]  rounded-lg">
              <img src={os} />
              <div className="flex flex-col justify-center">
                <h5 className="mb-1 text-18 lg:text-[28px] mt-[20px]">Financial Analysis and Strategies</h5>
                <p className="text-secondary/70 font-khula pr-2">
                  This finance course provides a comprehensive understanding of
                  financial analysis techniques and investment strategies.
                </p>
                <div>
                  <div className="lg:hidden mt-[12px] flex gap-[12px] items-center toggle-button">
                    <span className="font-khula font-bold">View all details</span>
                    <img src={cd} className="toggle-icon" />
                  </div>
                  <div className="toggle-content">
                    <div className="mt-[12px]">
                      <div className="flex lg:mb-3 mb-2 items-start">
                        <img src={cm} className="lg:h-[18px] lg:w-[18px] h-[16px] w-[16px] mt-[2px]" />
                        <p className="ml-1 font-normal font-khula">
                          What are the strategies to find a Multibagger stock?
                        </p>
                      </div>
                      <div className="flex lg:mb-3 mb-2  items-start">
                        <img src={cm} className="lg:h-[18px] lg:w-[18px] h-[16px] w-[16px] mt-[2px]" />
                        <p className="ml-1 font-normal font-khula">
                          What are the strategies to find a Multibagger stock?
                        </p>
                      </div>
                      <div className="flex lg:mb-3 mb-2  items-start">
                        <img src={cm} className="lg:h-[18px] lg:w-[18px] h-[16px] w-[16px] mt-[2px]" />
                        <p className="ml-1 font-normal font-khula">
                          What are the strategies to find a Multibagger stock?
                        </p>
                      </div>
                      <div className="flex  items-start3">
                        <img src={cm} className="lg:h-[18px] lg:w-[18px] h-[16px] w-[16px] mt-[2px]" />
                        <p className="ml-1 font-normal font-khula">
                          What are the strategies to find a Multibagger stock?
                        </p>
                      </div>
                      <div className="flex lg:mt-[49px] mt-3 flex-col-reverse">
                        <a href="#!"
                          className="mr-[36px] w-full mt-[28px] lg:mt-0 button py-[16px] px-[105px] rounded-lg bg-secondary inline-block text-white text-16 leading-[1.5]">
                          <div className="relative overflow-hidden">
                            <span className="button-content whitespace-nowrap">Enroll Now</span>
                            <span className="button-content-hover whitespace-nowrap">Enroll Now</span>
                          </div>
                        </a>
                        <div className="flex gap-[10px]">
                          <div>
                            <img src={lm} />
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-start">
                              <h6 className="mr-[14px] font-bold">4.3</h6>
                              <img src={star} alt="" />
                            </div>
                            <span className="font-khula font-semibold text-14 mt-[5px] whitespace-nowrap">Average
                              ratings</span>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-tranquil  w-full h-full  rounded-lg">
            <div className=" p-2 flexflex-col  gap-[20px]  rounded-lg">
              <img src={os} />
              <div className="flex flex-col justify-center">
                <h5 className="mb-1 text-18 lg:text-[28px] mt-[20px]">Financial Analysis and Strategies</h5>
                <p className="text-secondary/70 font-khula pr-2">
                  This finance course provides a comprehensive understanding of
                  financial analysis techniques and investment strategies.
                </p>
                <div>
                  <div className="lg:hidden mt-[12px] flex gap-[12px] items-center toggle-button">
                    <span className="font-khula font-bold">View all details</span>
                    <img src={cd} className="toggle-icon" />
                  </div>
                  <div className="toggle-content">
                    <div className="mt-[12px]">
                      <div className="flex lg:mb-3 mb-2 items-start">
                        <img src={cm} className="lg:h-[18px] lg:w-[18px] h-[16px] w-[16px] mt-[2px]" />
                        <p className="ml-1 font-normal font-khula">
                          What are the strategies to find a Multibagger stock?
                        </p>
                      </div>
                      <div className="flex lg:mb-3 mb-2  items-start">
                        <img src={cm} className="lg:h-[18px] lg:w-[18px] h-[16px] w-[16px] mt-[2px]" />
                        <p className="ml-1 font-normal font-khula">
                          What are the strategies to find a Multibagger stock?
                        </p>
                      </div>
                      <div className="flex lg:mb-3 mb-2  items-start">
                        <img src={cm} className="lg:h-[18px] lg:w-[18px] h-[16px] w-[16px] mt-[2px]" />
                        <p className="ml-1 font-normal font-khula">
                          What are the strategies to find a Multibagger stock?
                        </p>
                      </div>
                      <div className="flex  items-start3">
                        <img src={cm} className="lg:h-[18px] lg:w-[18px] h-[16px] w-[16px] mt-[2px]" />
                        <p className="ml-1 font-normal font-khula">
                          What are the strategies to find a Multibagger stock?
                        </p>
                      </div>
                      <div className="flex lg:mt-[49px] mt-3 flex-col-reverse">
                        <a href="#!"
                          className="mr-[36px] w-full mt-[28px] lg:mt-0 button py-[16px] px-[105px] rounded-lg bg-secondary inline-block text-white text-16 leading-[1.5]">
                          <div className="relative overflow-hidden">
                            <span className="button-content whitespace-nowrap">Enroll Now</span>
                            <span className="button-content-hover whitespace-nowrap">Enroll Now</span>
                          </div>
                        </a>
                        <div className="flex gap-[10px]">
                          <div>
                            <img src={lm} />
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-start">
                              <h6 className="mr-[14px] font-bold">4.3</h6>
                              <img src={star} alt="" />
                            </div>
                            <span className="font-khula font-semibold text-14 mt-[5px] whitespace-nowrap">Average
                              ratings</span>
                          </div>

                        </div>
                      </div>

                    </div>
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

export default Course2;
