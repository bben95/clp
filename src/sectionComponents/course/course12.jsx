import React, { useState } from 'react';
import wol from '../../asset/white-ball-opacity.svg';
import pi from '../../asset/percent-icon.svg';
function Course12() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
         <section className="section-pad" id="course">
        <div className="container">
          <div className="text-center mb-5.5">
            <div className="font-heading stroke-text opacity-20">courses</div>

            <h2 className="heading bg-white relative">
              Become an IPL fantasy team expert.
            </h2>
          </div>

          <div className="p-2 md:p-4.5 bg-primary12 grid md:grid-cols-2 gap-4 mb-7">
            <div className="order-2 md:order-none">
              <h2 className="heading !text-lightyellow mb-3">
                Fantasy Cricket League Mastery
              </h2>
              <p className="text-lightyellow">
                This course content outline covers the fundamental aspects of
                fantasy cricket, from its introduction to advanced strategies,
                responsible gaming practices, and certification.
              </p>

              <div className="mt-5 md:mt-7 mb-3 md:mb-0">
                <p className="text-lightyellow">Discounted price of the course:</p>

                <div className="flex items-center gap-3 mb-5">
                  <h3 className="heading !text-lightyellow">₹1,999</h3>

                  <h3 className="text-24 text-white/40 line-through">₹4,999</h3>
                </div>

                <a href="#!" className="button12 yellow-shadow chevron">
                  BUY THIS COURSE
                </a>
              </div>
            </div>

            <div>
              <div
                className="h-full overflow-hidden bg-a bg-cover min-h-[400px]"
              ></div>
            </div>
          </div>

          <h2 className="heading-medium mb-4">Table of content</h2>

          <div className="accordion-block mb-7" data-accordion-container>
            <div className="single-accordion active">
              <button className="accordion-trigger">
                <div className="w-full md:flex-1">
                  Introduction to Fantasy Cricket League
                </div>

                <div className="flex w-full md:w-auto gap-2 items-center">
                  <span> 4 lecture </span>
                  <span>
                    <span
                      className="w-[4px] h-[4px] bg-black rounded-full block"
                    ></span>
                  </span>
                  <span> 19 Mins </span>
                  <span className="accordion-marker"></span>
                </div>
              </button>

              <div className="accordion-answer">
                <div className="answer-wrapper">
                  <p>
                    All medications prescribed by Juniper clinicians have been
                    approved for use in Australia, and are commonly prescribed
                    by GPs and local pharmacies for the treatment of weight
                    management.
                  </p>
                </div>
              </div>
            </div>
            <div className="single-accordion">
              <button className="accordion-trigger">
                <div className="w-full md:flex-1">
                  Introduction to Fantasy Cricket League
                </div>

                <div className="flex w-full md:w-auto gap-2 items-center">
                  <span> 4 lecture </span>
                  <span>
                    <span
                      className="w-[4px] h-[4px] bg-black rounded-full block"
                    ></span>
                  </span>
                  <span> 19 Mins </span>
                  <span className="accordion-marker"></span>
                </div>
              </button>

              <div className="accordion-answer">
                <div className="answer-wrapper">
                  <div className="flex justify-between mb-4 items-center">
                    <a href="#!" className="flex gap-2 items-center">
                      <div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-2 14.5v-9l6 4.5-6 4.5Z"
                            fill="#B51111"
                          />
                        </svg>
                      </div>

                      <div className="flex-1">
                        <p className="text-14 mb-0 font-semibold">
                          Navigating the Platform
                        </p>
                      </div>
                    </a>

                    <div>
                      <p className="text-14 mb-0 font-semibold">20:48 mins</p>
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 items-center">
                    <a href="#!" className="flex gap-2 items-center">
                      <div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-2 14.5v-9l6 4.5-6 4.5Z"
                            fill="#B51111"
                          />
                        </svg>
                      </div>

                      <div className="flex-1">
                        <p className="text-14 mb-0 font-semibold">
                          Joining Leagues
                        </p>
                      </div>
                    </a>

                    <div>
                      <p className="text-14 mb-0 font-semibold">20:48 mins</p>
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 items-center">
                    <a href="#!" className="flex gap-2 items-center">
                      <div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-2 14.5v-9l6 4.5-6 4.5Z"
                            fill="#B51111"
                          />
                        </svg>
                      </div>

                      <div className="flex-1">
                        <p className="text-14 mb-0 font-semibold">
                          Creating an Account
                        </p>
                      </div>
                    </a>

                    <div>
                      <p className="text-14 mb-0 font-semibold">20:48 mins</p>
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 items-center">
                    <a href="#!" className="flex gap-2 items-center">
                      <div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-2 14.5v-9l6 4.5-6 4.5Z"
                            fill="#B51111"
                          />
                        </svg>
                      </div>

                      <div className="flex-1">
                        <p className="text-14 mb-0 font-semibold">
                          Creating an Account
                        </p>
                      </div>
                    </a>

                    <div>
                      <p className="text-14 mb-0 font-semibold">20:48 mins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-accordion">
              <button className="accordion-trigger">
                <div className="w-full md:flex-1">
                  Introduction to Fantasy Cricket League
                </div>

                <div className="flex w-full md:w-auto gap-2 items-center">
                  <span> 4 lecture </span>
                  <span>
                    <span
                      className="w-[4px] h-[4px] bg-black rounded-full block"
                    ></span>
                  </span>
                  <span> 19 Mins </span>
                  <span className="accordion-marker"></span>
                </div>
              </button>

              <div className="accordion-answer">
                <div className="answer-wrapper">
                  <p>
                    All medications prescribed by Juniper clinicians have been
                    approved for use in Australia, and are commonly prescribed
                    by GPs and local pharmacies for the treatment of weight
                    management.
                  </p>
                </div>
              </div>
            </div>
            <div className="single-accordion">
              <button className="accordion-trigger">
                <div className="w-full md:flex-1">
                  Introduction to Fantasy Cricket League
                </div>

                <div className="flex w-full md:w-auto gap-2 items-center">
                  <span> 4 lecture </span>
                  <span>
                    <span
                      className="w-[4px] h-[4px] bg-black rounded-full block"
                    ></span>
                  </span>
                  <span> 19 Mins </span>
                  <span className="accordion-marker"></span>
                </div>
              </button>

              <div className="accordion-answer">
                <div className="answer-wrapper">
                  <p>
                    All medications prescribed by Juniper clinicians have been
                    approved for use in Australia, and are commonly prescribed
                    by GPs and local pharmacies for the treatment of weight
                    management.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary12 pt-4 pb-3 px-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 h-full">
              <img src={wol} className="h-full" alt="" />
            </div>
            <div className="absolute top-3 -right-5">
              <img src={pi} className="h-full" alt="" />
            </div>
            <div
              className="max-w-[870px] grid lg:grid-cols-2 gap-4 lg:gap-6 items-center mx-auto relative z-10"
            >
              <div className="flex gap-2 md:gap-[20px] justify-center">
                <div className="flex flex-col gap-[12px] items-center">
                  <div
                    className="bg-lightyellow p-[12px] md:py-[18px] md:px-2 md:min-w-[90px] text-center"
                  >
                    <h3
                      className="text-darkgreen text-[28px] md:text-[40px] font-semibold days-container"
                    >
                      47:
                    </h3>
                  </div>
                  <p className="text-white font-medium mb-0">Days</p>
                </div>
                <div className="flex flex-col gap-[12px] items-center">
                  <div
                    className="bg-lightyellow p-[12px] md:py-[18px] md:px-2 md:min-w-[90px] text-center"
                  >
                    <h3
                      className="text-darkgreen text-[28px] md:text-[40px] font-semibold hours-container"
                    >
                      0:
                    </h3>
                  </div>
                  <p className="text-white font-medium mb-0">Hours</p>
                </div>
                <div className="flex flex-col gap-[12px] items-center">
                  <div
                    className="bg-lightyellow p-[12px] md:py-[18px] md:px-2 md:min-w-[90px] text-center"
                  >
                    <h3
                      className="text-darkgreen text-[28px] md:text-[40px] font-semibold minutes-container"
                    >
                      30:
                    </h3>
                  </div>
                  <p className="text-white font-medium mb-0">Mins</p>
                </div>
                <div className="flex flex-col gap-[12px] items-center">
                  <div
                    className="bg-lightyellow p-[12px] md:py-[18px] md:px-2 md:min-w-[90px] text-center"
                  >
                    <h3
                      className="text-darkgreen text-[28px] md:text-[40px] font-semibold seconds-container"
                    >
                      38
                    </h3>
                  </div>
                  <p className="text-white font-medium mb-0">Secs</p>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <p
                  className="text-24 md:text-[28px] font-semibold text-lightyellow leading-[130%]"
                >
                  Discount offer closes soon, Grab this deal before its end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Course12;
