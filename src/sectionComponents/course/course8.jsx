import React, { useState } from 'react';
import mh from '../../asset/must-have.svg';
import bs from '../../asset/big-star.png';
import gs from '../../asset/group-star.png';
import ss from '../../asset/small-star.png';
import placeholder from '../../asset/placeholder.svg';
function Course8() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
         <section>
      <div className="container">
        <h2 className="lg:text-[40px] text-[28px] font-newSpirit text-center lg:mb-[60px] mb-[36px] font-medium">
          Our Travel Course
        </h2>
        <div className="flex lg:flex-row flex-col-reverse gap-[20px] mb-[44px]">
          <div className="lg:w-[57%]">
            <div className="accordion border border-apricot lg:py-[40px] lg:px-4 py-[20px] px-2 rounded-[32px]">
              <h3 className="lg:text-[32px] text-24 lg:mb-[28px] mb-[20px] font-newSpirit font-medium">
                Beginner's Travel Course Series
              </h3>
              <div className="accordion-item border rounded-xl active">
                <div
                  className="accordion-button py-[18px] px-[20px] lg:text-20 text-18 font-newSpirit main-accordion-button text-apricot flex justify-between">
                  <div className="flex items-center lg:gap-[20px] gap-[12px]">
                    <img src={mh} alt="" />
                    <span>Travel Essentials for Beginner</span>
                  </div>
                  <div className="chevron"></div>
                </div>
                <div className="accordion-content">
                  <div className="answer-wrapper">
                    <div className="my-[32px]">
                      <div className="nested-accordion-item mx-[20px]">
                        <div className="accordion-button flex justify-between">
                          <div className="flex items-center justify-between w-full">
                            <span className="lg:text-20 text-16 pr-2 font-newSpirit text-apricot font-medium">Lesson 1 -
                              <span className="font-semibold">
                                Introduction to travel essentials
                              </span>
                            </span>
                            <div className="nested-chevron"></div>
                          </div>
                        </div>
                        <div className="nested-accordion-content">
                          <div className="answer-wrapper">
                            <ul className="mt-[20px] flex-col flex gap-1">
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="nested-accordion-item mx-[20px] mt-[32px]">
                        <div className="accordion-button flex justify-between">
                          <div className="flex items-center justify-between w-full">
                            <span className="lg:text-20 text-16 pr-2 font-newSpirit text-apricot font-medium">Lesson 1 -
                              <span className="font-semibold">
                                Introduction to travel essentials
                              </span>
                            </span>
                            <div className="nested-chevron"></div>
                          </div>
                        </div>
                        <div className="nested-accordion-content">
                          <div className="answer-wrapper">
                            <ul className="mt-[20px] flex-col flex gap-1">
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="nested-accordion-item mx-[20px] mt-[32px]">
                        <div className="accordion-button flex justify-between">
                          <div className="flex items-center justify-between w-full">
                            <span className="lg:text-20 text-16 pr-2 font-newSpirit text-apricot font-medium">Lesson 1 -
                              <span className="font-semibold">
                                Introduction to travel essentials
                              </span>
                            </span>
                            <div className="nested-chevron"></div>
                          </div>
                        </div>
                        <div className="nested-accordion-content">
                          <div className="answer-wrapper">
                            <ul className="mt-[20px] flex-col flex gap-1">
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded-xl mt-[20px]">
                <div
                  className="accordion-button py-[18px] px-[20px] lg:text-20 text-18 font-newSpirit main-accordion-button text-apricot flex justify-between">
                  <div className="flex items-center lg:gap-[20px] gap-[12px]">
                    <img src={mh} alt="" />
                    <span>Travel Essentials for Beginner</span>
                  </div>
                  <div className="chevron"></div>
                </div>
                <div className="accordion-content">
                  <div className="answer-wrapper">
                    <div className="my-[32px]">
                      <div className="nested-accordion-item mx-[20px]">
                        <div className="accordion-button flex justify-between">
                          <div className="flex items-center justify-between w-full">
                            <span className="lg:text-20 text-16 pr-2 font-newSpirit text-apricot font-medium">Lesson 1 -
                              <span className="font-semibold">
                                Introduction to travel essentials
                              </span>
                            </span>
                            <div className="nested-chevron"></div>
                          </div>
                        </div>
                        <div className="nested-accordion-content">
                          <div className="answer-wrapper">
                            <ul className="mt-[20px] flex-col flex gap-1">
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="nested-accordion-item mx-[20px] mt-[32px]">
                        <div className="accordion-button flex justify-between">
                          <div className="flex items-center justify-between w-full">
                            <span className="lg:text-20 text-16 pr-2 font-newSpirit text-apricot font-medium">Lesson 1 -
                              <span className="font-semibold">
                                Introduction to travel essentials
                              </span>
                            </span>
                            <div className="nested-chevron"></div>
                          </div>
                        </div>
                        <div className="nested-accordion-content">
                          <div className="answer-wrapper">
                            <ul className="mt-[20px] flex-col flex gap-1">
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="nested-accordion-item mx-[20px] mt-[32px]">
                        <div className="accordion-button flex justify-between">
                          <div className="flex items-center justify-between w-full">
                            <span className="lg:text-20 text-16 pr-2 font-newSpirit text-apricot font-medium">Lesson 1 -
                              <span className="font-semibold">
                                Introduction to travel essentials
                              </span>
                            </span>
                            <div className="nested-chevron"></div>
                          </div>
                        </div>
                        <div className="nested-accordion-content">
                          <div className="answer-wrapper">
                            <ul className="mt-[20px] flex-col flex gap-1">
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded-xl mt-[20px]">
                <div
                  className="accordion-button py-[18px] px-[20px] lg:text-20 text-18 font-newSpirit main-accordion-button text-apricot flex justify-between">
                  <div className="flex items-center lg:gap-[20px] gap-[12px]">
                    <img src={mh} alt="" />
                    <span>Travel Essentials for Beginner</span>
                  </div>
                  <div className="chevron"></div>
                </div>
                <div className="accordion-content">
                  <div className="answer-wrapper">
                    <div className="my-[32px]">
                      <div className="nested-accordion-item mx-[20px]">
                        <div className="accordion-button flex justify-between">
                          <div className="flex items-center justify-between w-full">
                            <span className="lg:text-20 text-16 pr-2 font-newSpirit text-apricot font-medium">Lesson 1 -
                              <span className="font-semibold">
                                Introduction to travel essentials
                              </span>
                            </span>
                            <div className="nested-chevron"></div>
                          </div>
                        </div>
                        <div className="nested-accordion-content">
                          <div className="answer-wrapper">
                            <ul className="mt-[20px] flex-col flex gap-1">
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="nested-accordion-item mx-[20px] mt-[32px]">
                        <div className="accordion-button flex justify-between">
                          <div className="flex items-center justify-between w-full">
                            <span className="lg:text-20 text-16 pr-2 font-newSpirit text-apricot font-medium">Lesson 1 -
                              <span className="font-semibold">
                                Introduction to travel essentials
                              </span>
                            </span>
                            <div className="nested-chevron"></div>
                          </div>
                        </div>
                        <div className="nested-accordion-content">
                          <div className="answer-wrapper">
                            <ul className="mt-[20px] flex-col flex gap-1">
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="nested-accordion-item mx-[20px] mt-[32px]">
                        <div className="accordion-button flex justify-between">
                          <div className="flex items-center justify-between w-full">
                            <span className="lg:text-20 text-16 pr-2 font-newSpirit text-apricot font-medium">Lesson 1 -
                              <span className="font-semibold">
                                Introduction to travel essentials
                              </span>
                            </span>
                            <div className="nested-chevron"></div>
                          </div>
                        </div>
                        <div className="nested-accordion-content">
                          <div className="answer-wrapper">
                            <ul className="mt-[20px] flex-col flex gap-1">
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[43%]">
            <div className="bg-oyster lg:px-[40px] px-3 lg:pt-[72px] pt-[60px] pb-[36px] rounded-[32px] relative">
              <img src={bs} alt="" className="absolute right-0 top-0" />
              <img src={gs} alt="" className="absolute top-[21%] left-[26%]" />
              <img src={ss} alt="" className="absolute top-[20%] left-[6%]" />
              <span className="lg:text-[26px] text-24 font-newSpirit block relative mb-2 font-medium">Travel Essentials for
                Beginners</span>
              <span className="lg:text-[56px] text-[48px] font-medium font-newSpirit relative">$99</span>

              <div className="border border-b-0 border-apricot/40 lg:mt-[28px] mt-[12px] lg:mb-[20px] mb-[30px]"></div>
              <h5 className="text-20 mb-3 font-newSpirit">Benefits</h5>
              <div className="flex flex-col gap-[20px]">
                <div className="flex gap-[12px]">
                  <img src={placeholder} alt="" />
                  <p className="font-ibmPlexSans text-16 font-medium">
                    Comprehensive introduction to travel planning
                  </p>
                </div>
                <div className="flex gap-[12px]">
                  <img src={placeholder} />
                  <p className="font-ibmPlexSans text-16 font-medium">
                    Comprehensive introduction to travel planning
                  </p>
                </div>
                <div className="flex gap-[12px]">
                  <img src={placeholder} alt="" />
                  <p className="font-ibmPlexSans text-16 font-medium">
                    Comprehensive introduction to travel planning
                  </p>
                </div>
                <div className="flex gap-[12px]">
                  <img src={placeholder} alt="" />
                  <p className="font-ibmPlexSans text-16 font-medium">
                    Comprehensive introduction to travel planning
                  </p>
                </div>
              </div>
              <button className="bg-secondary rounded-[60px] text-16 text-white py-2 w-full mt-5 font-ibmPlexSans">
                Buy this course now
              </button>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col-reverse gap-[20px] mb-[44px]">
          <div className="lg:w-[57%]">
            <div className="accordion border border-apricot lg:py-[40px] lg:px-4 py-[20px] px-2 rounded-[32px]">
              <h3 className="lg:text-[32px] text-24 lg:mb-[28px] mb-[20px] font-newSpirit font-medium">
                Beginner's Travel Course Series
              </h3>
              <div className="accordion-item2 border rounded-xl active">
                <div
                  className="accordion-button2 py-[18px] px-[20px] lg:text-20 text-18 font-newSpirit main-accordion-button text-apricot flex justify-between">
                  <div className="flex items-center lg:gap-[20px] gap-[12px]">
                    <img src={mh} alt="" />
                    <span>Travel Essentials for Beginner</span>
                  </div>
                  <div className="chevron"></div>
                </div>
                <div className="accordion-content">
                  <div className="answer-wrapper">
                    <div className="my-[32px]">
                      <div className="nested-accordion-item2 mx-[20px]">
                        <div className="accordion-button2 flex justify-between">
                          <div className="flex items-center justify-between w-full">
                            <span className="lg:text-20 text-16 pr-2 font-newSpirit text-apricot font-medium">Lesson 1 -
                              <span className="font-semibold">
                                Introduction to travel essentials
                              </span>
                            </span>
                            <div className="nested-chevron"></div>
                          </div>
                        </div>
                        <div className="nested-accordion-content">
                          <div className="answer-wrapper">
                            <ul className="mt-[20px] flex-col flex gap-1">
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="nested-accordion-item2 mx-[20px] mt-[32px]">
                        <div className="accordion-button2 flex justify-between">
                          <div className="flex items-center justify-between w-full">
                            <span className="lg:text-20 text-16 pr-2 font-newSpirit text-apricot font-medium">Lesson 1 -
                              <span className="font-semibold">
                                Introduction to travel essentials
                              </span>
                            </span>
                            <div className="nested-chevron"></div>
                          </div>
                        </div>
                        <div className="nested-accordion-content">
                          <div className="answer-wrapper">
                            <ul className="mt-[20px] flex-col flex gap-1">
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="nested-accordion-item2 mx-[20px] mt-[32px]">
                        <div className="accordion-button2 flex justify-between">
                          <div className="flex items-center justify-between w-full">
                            <span className="lg:text-20 text-16 pr-2 font-newSpirit text-apricot font-medium">Lesson 1 -
                              <span className="font-semibold">
                                Introduction to travel essentials
                              </span>
                            </span>
                            <div className="nested-chevron"></div>
                          </div>
                        </div>
                        <div className="nested-accordion-content">
                          <div className="answer-wrapper">
                            <ul className="mt-[20px] flex-col flex gap-1">
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item2 border rounded-xl mt-[20px]">
                <div
                  className="accordion-button2 py-[18px] px-[20px] lg:text-20 text-18 font-newSpirit main-accordion-button text-apricot flex justify-between">
                  <div className="flex items-center lg:gap-[20px] gap-[12px]">
                    <img src={mh} alt="" />
                    <span>Travel Essentials for Beginner</span>
                  </div>
                  <div className="chevron"></div>
                </div>
                <div className="accordion-content">
                  <div className="answer-wrapper">
                    <div className="my-[32px]">
                      <div className="nested-accordion-item2 mx-[20px]">
                        <div className="accordion-button2 flex justify-between">
                          <div className="flex items-center justify-between w-full">
                            <span className="lg:text-20 text-16 pr-2 font-newSpirit text-apricot font-medium">Lesson 1 -
                              <span className="font-semibold">
                                Introduction to travel essentials
                              </span>
                            </span>
                            <div className="nested-chevron"></div>
                          </div>
                        </div>
                        <div className="nested-accordion-content">
                          <div className="answer-wrapper">
                            <ul className="mt-[20px] flex-col flex gap-1">
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="nested-accordion-item2 mx-[20px] mt-[32px]">
                        <div className="accordion-button2 flex justify-between">
                          <div className="flex items-center justify-between w-full">
                            <span className="lg:text-20 text-16 pr-2 font-newSpirit text-apricot font-medium">Lesson 1 -
                              <span className="font-semibold">
                                Introduction to travel essentials
                              </span>
                            </span>
                            <div className="nested-chevron"></div>
                          </div>
                        </div>
                        <div className="nested-accordion-content">
                          <div className="answer-wrapper">
                            <ul className="mt-[20px] flex-col flex gap-1">
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="nested-accordion-item2 mx-[20px] mt-[32px]">
                        <div className="accordion-button2 flex justify-between">
                          <div className="flex items-center justify-between w-full">
                            <span className="lg:text-20 text-16 pr-2 font-newSpirit text-apricot font-medium">Lesson 1 -
                              <span className="font-semibold">
                                Introduction to travel essentials
                              </span>
                            </span>
                            <div className="nested-chevron"></div>
                          </div>
                        </div>
                        <div className="nested-accordion-content">
                          <div className="answer-wrapper">
                            <ul className="mt-[20px] flex-col flex gap-1">
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item2 border rounded-xl mt-[20px]">
                <div
                  className="accordion-button2 py-[18px] px-[20px] lg:text-20 text-18 font-newSpirit main-accordion-button text-apricot flex justify-between">
                  <div className="flex items-center lg:gap-[20px] gap-[12px]">
                    <img src={mh} alt="" />
                    <span>Travel Essentials for Beginner</span>
                  </div>
                  <div className="chevron"></div>
                </div>
                <div className="accordion-content">
                  <div className="answer-wrapper">
                    <div className="my-[32px]">
                      <div className="nested-accordion-item2 mx-[20px]">
                        <div className="accordion-button2 flex justify-between">
                          <div className="flex items-center justify-between w-full">
                            <span className="lg:text-20 text-16 pr-2 font-newSpirit text-apricot font-medium">Lesson 1 -
                              <span className="font-semibold">
                                Introduction to travel essentials
                              </span>
                            </span>
                            <div className="nested-chevron"></div>
                          </div>
                        </div>
                        <div className="nested-accordion-content">
                          <div className="answer-wrapper">
                            <ul className="mt-[20px] flex-col flex gap-1">
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="nested-accordion-item2 mx-[20px] mt-[32px]">
                        <div className="accordion-button2 flex justify-between">
                          <div className="flex items-center justify-between w-full">
                            <span className="lg:text-20 text-16 pr-2 font-newSpirit text-apricot font-medium">Lesson 1 -
                              <span className="font-semibold">
                                Introduction to travel essentials
                              </span>
                            </span>
                            <div className="nested-chevron"></div>
                          </div>
                        </div>
                        <div className="nested-accordion-content">
                          <div className="answer-wrapper">
                            <ul className="mt-[20px] flex-col flex gap-1">
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="nested-accordion-item2 mx-[20px] mt-[32px]">
                        <div className="accordion-button2 flex justify-between">
                          <div className="flex items-center justify-between w-full">
                            <span className="lg:text-20 text-16 pr-2 font-newSpirit text-apricot font-medium">Lesson 1 -
                              <span className="font-semibold">
                                Introduction to travel essentials
                              </span>
                            </span>
                            <div className="nested-chevron"></div>
                          </div>
                        </div>
                        <div className="nested-accordion-content">
                          <div className="answer-wrapper">
                            <ul className="mt-[20px] flex-col flex gap-1">
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                              <li>
                                <div className="flex justify-between">
                                  <p className="font-ibmPlexSans text-16">
                                    Understanding the importance of travel
                                    essentials
                                  </p>
                                  <span className="text-14 font-medium font-ibmPlexSans pl-2">03:20</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[43%]">
            <div className="bg-oyster lg:px-[40px] px-3 lg:pt-[72px] pt-[60px] pb-[36px] rounded-[32px] relative">
              <img src={bs} alt="" className="absolute right-0 top-0" />
              <img src={gs} alt="" className="absolute top-[21%] left-[26%]" />
              <img src={ss} alt="" className="absolute top-[20%] left-[6%]" />
              <span className="lg:text-[26px] text-24 font-newSpirit block relative mb-2 font-medium">Travel Essentials for
                Beginners</span>
              <span className="lg:text-[56px] text-[48px] font-medium font-newSpirit relative">$99</span>

              <div className="border border-b-0 border-apricot/40 lg:mt-[28px] mt-[12px] lg:mb-[20px] mb-[30px]"></div>
              <h5 className="text-20 mb-3 font-newSpirit">Benefits</h5>
              <div className="flex flex-col gap-[20px]">
                <div className="flex gap-[12px]">
                  <img src={placeholder} alt="" />
                  <p className="font-ibmPlexSans text-16 font-medium">
                    Comprehensive introduction to travel planning
                  </p>
                </div>
                <div className="flex gap-[12px]">
                  <img src={placeholder} alt="" />
                  <p className="font-ibmPlexSans text-16 font-medium">
                    Comprehensive introduction to travel planning
                  </p>
                </div>
                <div className="flex gap-[12px]">
                  <img src={placeholder} alt="" />
                  <p className="font-ibmPlexSans text-16 font-medium">
                    Comprehensive introduction to travel planning
                  </p>
                </div>
                <div className="flex gap-[12px]">
                  <img src={placeholder} alt="" />
                  <p className="font-ibmPlexSans text-16 font-medium">
                    Comprehensive introduction to travel planning
                  </p>
                </div>
              </div>
              <button className="bg-secondary rounded-[60px] text-16 text-white py-2 w-full mt-5 font-ibmPlexSans">
                Buy this course now
              </button>
            </div>
          </div>
        </div>
        </div>
    </section>
    </main>
  );
}

export default Course8;
