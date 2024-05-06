import React, { useState } from 'react';
import ts from '../../asset/timer-section-img.jpg';
import ft from '../../asset/flower-tick.svg';
import course1 from '../../asset/course1.jpg';
import course2 from '../../asset/course2.jpg';
import play from '../../asset/play.svg';
import star4 from '../../asset/star-4-6.svg';
function Course11() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
      <section
        className="bg-[#0E002D] py-5 lg:py-[90px] overflow-hidden relative"
        id="about"
      >
        <div className="absolute top-0 right-[-100%] lg:right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="799"
            height="552"
            viewBox="0 0 799 552"
            fill="none"
          >
            <g filter="url(#filter0_f_2125_17594)">
              <path
                d="M178.583 -53.0338C117.152 140.323 204.262 351.259 310.498 385.011C416.733 418.763 563.678 354.22 625.109 160.864C655.551 65.0465 711.11 -96.0643 694.375 -226.711C677.339 -359.706 422.841 -265.196 369.25 -282.222C263.014 -315.974 240.015 -246.39 178.583 -53.0338Z"
                fill="#4242d852"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2125_17594"
                x="0.618118"
                y="-456.612"
                width="854.411"
                height="1007.74"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="78.7886"
                  result="effect1_foregroundBlur_2125_17594"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="container relative z-[1]">
          <div className="text-center mb-[40px] lg:mb-6">
            <div
              className="max-w-[516px] mx-auto text-heading-small lg:text-heading text-white mb-2 lg:mb-3"
            >
              The Ultimate Cricket Fantasy Mastercourse
            </div>
            <div
              className="max-w-[505px] mx-auto text-small lg:text-xl text-white/80"
            >
              The modern labor market dictates its own terms. Today, to be a
              competitive specialist required
            </div>
          </div>
          <div className="max-w-[842px] mx-auto">
            <div className="flex lg:flex-row flex-col gap-3">
              <div className="w-full lg:w-[505px]">
                <div className="rounded-[20px] px-3 py-3 border border-white/20">
                  <a href="#!" className="relative">
                    <img
                      className="rounded-[20px] w-full"
                      src={ts}
                      alt=""
                    />
                    <button
                      className="absolute z-[20] sm:right-[15px] right-1 bottom-1 sm:bottom-[15px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.33316 2.02236C7.30655 0.703787 9.62663 0 12 0C13.5759 0 15.1363 0.310389 16.5922 0.913445C18.0481 1.5165 19.371 2.40041 20.4853 3.51472C21.5996 4.62902 22.4835 5.95189 23.0866 7.4078C23.6896 8.8637 24 10.4241 24 12C24 14.3734 23.2962 16.6934 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0865C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.807 0.693604 16.6688 0.230582 14.3411C-0.232441 12.0133 0.00519961 9.60051 0.913451 7.4078C1.8217 5.21508 3.35977 3.34094 5.33316 2.02236ZM9.6 6C9.28174 6 8.97652 6.12643 8.75147 6.35147C8.52643 6.57652 8.4 6.88174 8.4 7.2V16.8C8.4 17.1183 8.52643 17.4235 8.75147 17.6485C8.97652 17.8736 9.28174 18 9.6 18C9.91826 18 10.2235 17.8736 10.4485 17.6485C10.6736 17.4235 10.8 17.1183 10.8 16.8V7.2C10.8 6.88174 10.6736 6.57652 10.4485 6.35147C10.2235 6.12643 9.91826 6 9.6 6ZM14.4 6C14.0817 6 13.7765 6.12643 13.5515 6.35147C13.3264 6.57652 13.2 6.88174 13.2 7.2V16.8C13.2 17.1183 13.3264 17.4235 13.5515 17.6485C13.7765 17.8736 14.0817 18 14.4 18C14.7183 18 15.0235 17.8736 15.2485 17.6485C15.4736 17.4235 15.6 17.1183 15.6 16.8V7.2C15.6 6.88174 15.4736 6.57652 15.2485 6.35147C15.0235 6.12643 14.7183 6 14.4 6Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </a>
                  <div className="flex items-center text-white pt-3">
                    <div className="text-32 leading-[1.25] font-bold mr-[12px]">
                      ₹499
                    </div>
                    <div className="text-base font-normal line-through">₹2,999</div>
                    <div
                      className="py-1 px-[23px] rounded-[9px] bg-[#36CE58] ml-auto"
                    >
                      70% OFF
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[313px] text-white hidden lg:block">
                <div
                  className="pt-2 pb-[6px] pr-[25px] pl-[15px] border border-white/20 rounded-3xl mb-[27px] relative"
                >
                  <div className="flex items-end justify-between">
                    <div className="text-base26">Days</div>
                    <div className="text-superbold-heading days-container">:00</div>
                  </div>
                  <div className="absolute top-[-4px] left-[-10px]">
                    <div
                      className="py-1 px-1 bg-white text-[#232423] rounded-[2px] uppercase text-12 font-semibold relative z-[1]"
                    >
                      LIMITED PERIOD
                    </div>
                    <svg
                      className="mt-[-1.5px] z-0 absolute"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="15"
                      viewBox="0 0 10 15"
                      fill="none"
                    >
                      <path d="M10 0V15L1 2L0 0H10Z" fill="#E1E1E1" />
                    </svg>
                  </div>
                </div>
                <div
                  className="pt-2 pb-[6px] pr-[25px] pl-[15px] border border-white/20 rounded-3xl mb-[27px]"
                >
                  <div className="flex items-end justify-between">
                    <div className="text-base26">Hours</div>
                    <div className="text-superbold-heading hours-container">
                      :00
                    </div>
                  </div>
                </div>
                <div
                  className="pt-2 pb-[6px] pr-[25px] pl-[15px] border border-white/20 rounded-3xl mb-[27px]"
                >
                  <div className="flex items-end justify-between">
                    <div className="text-base26">Minutes</div>
                    <div className="text-superbold-heading minutes-container">
                      :00
                    </div>
                  </div>
                </div>
                <div
                  className="pt-2 pb-[6px] pr-[25px] pl-[15px] border border-white/20 rounded-3xl mb-[27px]"
                >
                  <div className="flex items-end justify-between">
                    <div className="text-base26">Seconds</div>
                    <div className="text-superbold-heading seconds-container">
                      :00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="py-1 lg:py-[28px] px-1 lg:pr-[28px] border border-white/20 rounded-full my-2 lg:my-0"
            >
              <div className="flex justify-between items-center">
                <div className="pr-[20px] lg:pr-[80px] w-[65%] lg:w-[80%]">
                  <div className="logo-slider !ease-linear">
                    <div className="item">
                      <div
                        className="flex justify-center items-center text-xl text-white"
                      >
                        <img
                          src={ft}
                          loading="lazy"
                          className="mr-1"
                          alt="flower-tick"
                        />
                        With&nbsp;Markets
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="flex justify-center items-center text-xl text-white"
                      >
                        <img
                          src={ft}
                          loading="lazy"
                          className="mr-1"
                          alt="flower-tick"
                        />
                        Best&nbsp;customer&nbsp;experience
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="flex justify-center items-center text-xl text-white"
                      >
                        <img
                          src={ft}
                          loading="lazy"
                          className="mr-1"
                          alt="flower-tick"
                        />
                        Money&nbsp;Refund&nbsp;Policy
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-w-[115px] lg:min-w-[160px]">
                  <a
                    href="#!"
                    className="button rounded-[32px] lg:rounded-[47px] py-[14px] px-[24px] bg-white w-full inline-block text-[#001F4F] text-12 lg:text-14 leading-[1.0] font-semibold"
                  >
                    <div className="relative overflow-hidden">
                      <span className="button-content">Buy Course</span>
                      <span className="button-content-hover">Buy Course</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="rounded-3xl pt-6 px-2 pb-3 border border-white/20 relative block lg:hidden"
            >
              <div className="absolute top-[-4px] left-[-10px]">
                <div
                  className="py-1 px-1 bg-white text-[#232423] rounded-[2px] uppercase text-12 font-semibold relative z-[1]"
                >
                  LIMITED PERIOD
                </div>
                <svg
                  className="mt-[-1.5px] z-0 absolute"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                >
                  <path d="M10 0V15L1 2L0 0H10Z" fill="#E1E1E1" />
                </svg>
              </div>
              <div className="flex text-white justify-center">
                <div className="flex flex-col items-center">
                  <div
                    className="text-24 leading-[1.25] font-extrabold days-container"
                  >
                    00
                  </div>
                  <div
                    className="mt-[9px] text-12 leading-[1.8] font-semibold opacity-80"
                  >
                    Days
                  </div>
                </div>
                <div className="text-24 leading-[1.25] font-extrabold mx-[20px]">
                  :
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className="text-24 leading-[1.25] font-extrabold hours-container"
                  >
                    00
                  </div>
                  <div
                    className="mt-[9px] text-12 leading-[1.8] font-semibold opacity-80"
                  >
                    Hours
                  </div>
                </div>
                <div className="text-24 leading-[1.25] font-extrabold mx-[20px]">
                  :
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className="text-24 leading-[1.25] font-extrabold minutes-container"
                  >
                    00
                  </div>
                  <div
                    className="mt-[9px] text-12 leading-[1.8] font-semibold opacity-80"
                  >
                    Minutes
                  </div>
                </div>
                <div className="text-24 leading-[1.25] font-extrabold mx-[20px]">
                  :
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className="text-24 leading-[1.25] font-extrabold seconds-container"
                  >
                    00
                  </div>
                  <div
                    className="mt-[9px] text-12 leading-[1.8] font-semibold opacity-80"
                  >
                    Seconds
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute top-[5%] scale-50 lg:scale-100 lg:top-[10%] left-[-100%] lg:left-0 z-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1110"
            height="984"
            viewBox="0 0 1110 984"
            fill="none"
          >
            <g filter="url(#filter0_f_2125_17557)">
              <path
                d="M636.359 825.472C376.241 902.79 96.3274 781.02 53.8467 638.104C11.3659 495.187 101.356 300.288 361.474 222.97C490.375 184.655 707.223 114.384 881.523 140.032C1058.95 166.141 926.199 504.126 947.628 576.22C990.109 719.136 896.477 748.154 636.359 825.472Z"
                fill="#4242d852"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2125_17557"
                x="-90.2202"
                y="0.53125"
                width="1199.57"
                height="982.973"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="67"
                  result="effect1_foregroundBlur_2125_17557"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div
          className="border border-dashed border-white/30 my-5 lg:my-[120px] scale-x-[3.5] relative"
          id="course"
        ></div>
        <div className="container relative">
          <div className="text-center mb-[40px] lg:mb-6">
            <div
              className="max-w-[605px] mx-auto text-heading-small lg:text-heading text-white mb-2 lg:mb-3"
            >
              Explore other courses and get proven results
            </div>
            <div
              className="max-w-[505px] mx-auto text-small lg:text-xl text-white/80"
            >
              Explore our diverse selection of expertly crafted courses that
              helped countless learners to achieve their goals.
            </div>
          </div>
          <div className="course-accordion">
            <div
              className="rounded-[20px] pt-[20px] pb-3 px-2 lg:px-3 bg-white/[0.05]"
            >
              <div className="flex items-center lg:flex-row flex-col">
                <img
                  className="rounded-lg w-full lg:w-auto"
                  src={course1}
                  alt=""
                />
                <div className="max-w-[493px] text-white lg:ml-3">
                  <div
                    className="text-20 lg:text-[28px] leading-[1.25] font-bold my-2 lg:my-0"
                  >
                    Unlock the secrets of fantasy cricket success
                  </div>
                  <div className="text-base opacity-80 mt-[12px] mb-4">
                    Join our Cricket Fantasy Ace and elevate your fantasy
                    cricket game to the next level. Learn from the best,
                    optimize your lineups, and achieve fantasy cricket success.
                    Enroll now and take advantage of our limited-time offer!
                  </div>
                  <div className="flex items-center">
                    <img src={star4} alt="" />
                    <div className="text-18 font-semibold ml-[12px] mr-[5px]">
                      4.6+
                    </div>
                    <div className="opacity-80 text-14 font-medium">
                      (12,421 ratings)
                    </div>
                  </div>
                </div>
                <div className="gradient-border hidden lg:inline-block"></div>
                <div className="hidden lg:block">
                  <div className="flex flex-col text-white items-center">
                    <div
                      className="py-1 px-[23px] text-small bg-[#238538] rounded-[9px] max-w-fit"
                    >
                      35% OFF
                    </div>
                    <div
                      className="flex items-center gap-[12px] mt-[12px] mb-[20px]"
                    >
                      <div className="text-heading-small">₹299</div>
                      <div
                        className="text-base font-normal line-through opacity-50"
                      >
                        ₹1,999
                      </div>
                    </div>
                    <div className="w-full lg:w-[234px]">
                      <a
                        href="#!"
                        className="button rounded-[32px] py-[14px] px-[24px] bg-white w-full inline-block text-[#0C0F12] text-14 leading-[1.0] font-semibold"
                      >
                        <div className="relative overflow-hidden">
                          <span className="button-content">Buy Course</span>
                          <span className="button-content-hover">Buy Course</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-accordion-container>
                <div className="accordion-block">
                  <div className="single-accordion active bg-white/[0.06]">
                    <button
                      className="accordion-trigger mt-[20px] py-[20px] px-[20px] flex lg:flex-row flex-col lg:items-center justify-between rounded-[20px] text-white"
                    >
                      <div className="text-base font-bold flex w-full lg:w-auto">
                        Course Content
                        <span
                          className="accordion-marker inline-block lg:hidden ml-auto"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div
                          className="text-verysmall lg:text-base opacity-80 lg:mr-2"
                        >
                          5 sections<span
                            className="inline-block w-[4px] lg:w-1 h-[4px] lg:h-1 rounded-[50%] bg-white/80 mx-[4px] lg:mx-1"
                          ></span
                          >16 lectures<span
                            className="inline-block w-[4px] lg:w-1 h-[4px] lg:h-1 rounded-[50%] bg-white/80 mx-[4px] lg:mx-1"
                          ></span
                          >3h 25m total length
                        </div>
                        <span className="accordion-marker hidden lg:inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </button>
                    <div className="accordion-answer">
                      <div className="answer-wrapper">
                        <div className="mt-0" data-accordion-container2>
                          <div className="accordion-block">
                            <div
                              className="single-accordion2 mb-2 active text-white"
                            >
                              <button
                                className="accordion-trigger2 flex items-center justify-between w-full"
                              >
                                <div className="flex items-start lg:items-center">
                                  <span className="accordion-marker">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M6 9L12 15L18 9"
                                        stroke="#ffffff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                  <div className="ml-[12px] text-left">
                                    Introduction to Fantasy Cricket League
                                  </div>
                                </div>
                                <div
                                  className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                >
                                  3 lectures<span
                                    className="inline-block w-1 h-1 rounded-[50%] bg-white/80 mx-1"
                                  ></span
                                  >54m total length
                                </div>
                              </button>
                              <div className="accordion-answer2">
                                <div className="answer-wrapper">
                                  <ul>
                                    <li>
                                      <a href="#!">
                                        <img
                                          className="mr-1"
                                          src={play}
                                          alt=""
                                        />Creating fantasy sports account
                                      </a>
                                      <div
                                        className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                      >
                                        32:24 mins
                                      </div>
                                    </li>
                                    <li>
                                      <a href="#!">
                                        <img
                                          className="mr-1"
                                          src={play}
                                          alt=""
                                        />Navigating the platform
                                      </a>
                                      <div
                                        className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                      >
                                        16:19 mins
                                      </div>
                                    </li>
                                    <li>
                                      <a href="#!">
                                        <img
                                          className="mr-1"
                                          src={play}
                                          alt=""
                                        />Identifying & Joining league
                                      </a>
                                      <div
                                        className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                      >
                                        08:13 mins
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="single-accordion2 mb-2 text-white">
                              <button
                                className="accordion-trigger2 flex items-center justify-between w-full"
                              >
                                <div className="flex items-start lg:items-center">
                                  <span className="accordion-marker">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M6 9L12 15L18 9"
                                        stroke="#ffffff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                  <div className="ml-[12px] text-left">
                                    Team Selection and Strategy
                                  </div>
                                </div>
                                <div
                                  className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                >
                                  1 lecture<span
                                    className="inline-block w-1 h-1 rounded-[50%] bg-white/80 mx-1"
                                  ></span
                                  >24m total length
                                </div>
                              </button>
                              <div className="accordion-answer2">
                                <div className="answer-wrapper">
                                  <ul>
                                    <li>
                                      <a href="#!">
                                        <img
                                          className="mr-1"
                                          src={play}
                                          alt=""
                                        />Creating fantasy sports account
                                      </a>
                                      <div
                                        className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                      >
                                        32:24 mins
                                      </div>
                                    </li>
                                    <li>
                                      <a href="#!">
                                        <img
                                          className="mr-1"
                                          src={play}
                                          alt=""
                                        />Navigating the platform
                                      </a>
                                      <div
                                        className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                      >
                                        16:19 mins
                                      </div>
                                    </li>
                                    <li>
                                      <a href="#!">
                                        <img
                                          className="mr-1"
                                          src={play}
                                          alt=""
                                        />Identifying & Joining league
                                      </a>
                                      <div
                                        className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                      >
                                        08:13 mins
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="single-accordion2 mb-2 text-white">
                              <button
                                className="accordion-trigger2 flex items-center justify-between w-full"
                              >
                                <div className="flex items-start lg:items-center">
                                  <span className="accordion-marker">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M6 9L12 15L18 9"
                                        stroke="#ffffff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                  <div className="ml-[12px] text-left">
                                    Scoring and Points System
                                  </div>
                                </div>
                                <div
                                  className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                >
                                  8 lectures<span
                                    className="inline-block w-1 h-1 rounded-[50%] bg-white/80 mx-1"
                                  ></span
                                  >1h 25m total length
                                </div>
                              </button>
                              <div className="accordion-answer2">
                                <div className="answer-wrapper">
                                  <ul>
                                    <li>
                                      <a href="#!">
                                        <img
                                          className="mr-1"
                                          src={play}
                                          alt=""
                                        />Creating fantasy sports account
                                      </a>
                                      <div
                                        className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                      >
                                        32:24 mins
                                      </div>
                                    </li>
                                    <li>
                                      <a href="#!">
                                        <img
                                          className="mr-1"
                                          src={play}
                                          alt=""
                                        />Navigating the platform
                                      </a>
                                      <div
                                        className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                      >
                                        16:19 mins
                                      </div>
                                    </li>
                                    <li>
                                      <a href="#!">
                                        <img
                                          className="mr-1"
                                          src={play}
                                          alt=""
                                        />Identifying & Joining league
                                      </a>
                                      <div
                                        className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                      >
                                        08:13 mins
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="single-accordion2 mb-2 text-white">
                              <button
                                className="accordion-trigger2 flex items-center justify-between w-full"
                              >
                                <div className="flex items-start lg:items-center">
                                  <span className="accordion-marker">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M6 9L12 15L18 9"
                                        stroke="#ffffff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                  <div className="ml-[12px] text-left">
                                    Winning Strategies
                                  </div>
                                </div>
                                <div
                                  className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                >
                                  2 lectures<span
                                    className="inline-block w-1 h-1 rounded-[50%] bg-white/80 mx-1"
                                  ></span
                                  >36m total length
                                </div>
                              </button>
                              <div className="accordion-answer2">
                                <div className="answer-wrapper">
                                  <ul>
                                    <li>
                                      <a href="#!">
                                        <img
                                          className="mr-1"
                                          src={play}
                                          alt=""
                                        />Creating fantasy sports account
                                      </a>
                                      <div
                                        className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                      >
                                        32:24 mins
                                      </div>
                                    </li>
                                    <li>
                                      <a href="#!">
                                        <img
                                          className="mr-1"
                                          src={play}
                                          alt=""
                                        />Navigating the platform
                                      </a>
                                      <div
                                        className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                      >
                                        16:19 mins
                                      </div>
                                    </li>
                                    <li>
                                      <a href="#!">
                                        <img
                                          className="mr-1"
                                          src={play}
                                          alt=""
                                        />Identifying & Joining league
                                      </a>
                                      <div
                                        className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                      >
                                        08:13 mins
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="single-accordion2 mb-2 text-white">
                              <button
                                className="accordion-trigger2 flex items-center justify-between w-full"
                              >
                                <div className="flex items-start lg:items-center">
                                  <span className="accordion-marker">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M6 9L12 15L18 9"
                                        stroke="#ffffff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                  <div className="ml-[12px] text-left">
                                    Conclusion
                                  </div>
                                </div>
                                <div
                                  className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                >
                                  2 lectures<span
                                    className="inline-block w-1 h-1 rounded-[50%] bg-white/80 mx-1"
                                  ></span
                                  >54m total length
                                </div>
                              </button>
                              <div className="accordion-answer2">
                                <div className="answer-wrapper">
                                  <ul>
                                    <li>
                                      <a href="#!">
                                        <img
                                          className="mr-1"
                                          src={play}
                                          alt=""
                                        />Creating fantasy sports account
                                      </a>
                                      <div
                                        className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                      >
                                        32:24 mins
                                      </div>
                                    </li>
                                    <li>
                                      <a href="#!">
                                        <img
                                          className="mr-1"
                                          src={play}
                                          alt=""
                                        />Navigating the platform
                                      </a>
                                      <div
                                        className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                      >
                                        16:19 mins
                                      </div>
                                    </li>
                                    <li>
                                      <a href="#!">
                                        <img
                                          className="mr-1"
                                          src={play}
                                          alt=""
                                        />Identifying & Joining league
                                      </a>
                                      <div
                                        className="text-base opacity-80 hidden lg:flex items-center ml-auto"
                                      >
                                        08:13 mins
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
              </div>
              <div className="gradient-border inline-block lg:hidden"></div>
              <div className="block lg:hidden">
                <div className="flex flex-col text-white items-center">
                  <div
                    className="flex items-center gap-[12px] mt-[12px] mb-[20px] justify-between w-full"
                  >
                    <div className="text-heading-small">₹299</div>
                    <div className="text-base font-normal line-through opacity-50">
                      ₹1,999
                    </div>
                    <div
                      className="ml-auto py-1 px-[23px] text-small bg-[#238538] rounded-[9px] max-w-fit"
                    >
                      35% OFF
                    </div>
                  </div>
                  <div className="w-full lg:w-[234px]">
                    <a
                      href="#!"
                      className="button rounded-[32px] py-[14px] px-[24px] bg-white w-full inline-block text-[#0C0F12] text-14 leading-[1.0] font-semibold"
                    >
                      <div className="relative overflow-hidden">
                        <span className="button-content">Buy Course</span>
                        <span className="button-content-hover">Buy Course</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-[20px] pt-[20px] pb-3 px-2 lg:px-3 bg-white/[0.05] mt-3 lg:mt-4"
            >
              <div className="flex items-center lg:flex-row flex-col">
                <img
                  className="rounded-lg w-full lg:w-auto"
                  src={course2}
                  alt=""
                />
                </div>
                </div>
                </div>
                </div>

    </section>
    </main>
  );
}

export default Course11;
