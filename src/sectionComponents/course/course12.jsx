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
         <section class="section-pad" id="course">
        <div class="container">
          <div class="text-center mb-5.5">
            <div class="font-heading stroke-text opacity-20">courses</div>

            <h2 class="heading bg-white relative">
              Become an IPL fantasy team expert.
            </h2>
          </div>

          <div class="p-2 md:p-4.5 bg-primary12 grid md:grid-cols-2 gap-4 mb-7">
            <div class="order-2 md:order-none">
              <h2 class="heading !text-lightyellow mb-3">
                Fantasy Cricket League Mastery
              </h2>
              <p class="text-lightyellow">
                This course content outline covers the fundamental aspects of
                fantasy cricket, from its introduction to advanced strategies,
                responsible gaming practices, and certification.
              </p>

              <div class="mt-5 md:mt-7 mb-3 md:mb-0">
                <p class="text-lightyellow">Discounted price of the course:</p>

                <div class="flex items-center gap-3 mb-5">
                  <h3 class="heading !text-lightyellow">₹1,999</h3>

                  <h3 class="text-24 text-white/40 line-through">₹4,999</h3>
                </div>

                <a href="#!" class="button12 yellow-shadow chevron">
                  BUY THIS COURSE
                </a>
              </div>
            </div>

            <div>
              <div
                class="h-full overflow-hidden bg-a bg-cover min-h-[400px]"
              ></div>
            </div>
          </div>

          <h2 class="heading-medium mb-4">Table of content</h2>

          <div class="accordion-block mb-7" data-accordion-container>
            <div class="single-accordion active">
              <button class="accordion-trigger">
                <div class="w-full md:flex-1">
                  Introduction to Fantasy Cricket League
                </div>

                <div class="flex w-full md:w-auto gap-2 items-center">
                  <span> 4 lecture </span>
                  <span>
                    <span
                      class="w-[4px] h-[4px] bg-black rounded-full block"
                    ></span>
                  </span>
                  <span> 19 Mins </span>
                  <span class="accordion-marker"></span>
                </div>
              </button>

              <div class="accordion-answer">
                <div class="answer-wrapper">
                  <p>
                    All medications prescribed by Juniper clinicians have been
                    approved for use in Australia, and are commonly prescribed
                    by GPs and local pharmacies for the treatment of weight
                    management.
                  </p>
                </div>
              </div>
            </div>
            <div class="single-accordion">
              <button class="accordion-trigger">
                <div class="w-full md:flex-1">
                  Introduction to Fantasy Cricket League
                </div>

                <div class="flex w-full md:w-auto gap-2 items-center">
                  <span> 4 lecture </span>
                  <span>
                    <span
                      class="w-[4px] h-[4px] bg-black rounded-full block"
                    ></span>
                  </span>
                  <span> 19 Mins </span>
                  <span class="accordion-marker"></span>
                </div>
              </button>

              <div class="accordion-answer">
                <div class="answer-wrapper">
                  <div class="flex justify-between mb-4 items-center">
                    <a href="#!" class="flex gap-2 items-center">
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

                      <div class="flex-1">
                        <p class="text-14 mb-0 font-semibold">
                          Navigating the Platform
                        </p>
                      </div>
                    </a>

                    <div>
                      <p class="text-14 mb-0 font-semibold">20:48 mins</p>
                    </div>
                  </div>
                  <div class="flex justify-between mb-4 items-center">
                    <a href="#!" class="flex gap-2 items-center">
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

                      <div class="flex-1">
                        <p class="text-14 mb-0 font-semibold">
                          Joining Leagues
                        </p>
                      </div>
                    </a>

                    <div>
                      <p class="text-14 mb-0 font-semibold">20:48 mins</p>
                    </div>
                  </div>
                  <div class="flex justify-between mb-4 items-center">
                    <a href="#!" class="flex gap-2 items-center">
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

                      <div class="flex-1">
                        <p class="text-14 mb-0 font-semibold">
                          Creating an Account
                        </p>
                      </div>
                    </a>

                    <div>
                      <p class="text-14 mb-0 font-semibold">20:48 mins</p>
                    </div>
                  </div>
                  <div class="flex justify-between mb-4 items-center">
                    <a href="#!" class="flex gap-2 items-center">
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

                      <div class="flex-1">
                        <p class="text-14 mb-0 font-semibold">
                          Creating an Account
                        </p>
                      </div>
                    </a>

                    <div>
                      <p class="text-14 mb-0 font-semibold">20:48 mins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="single-accordion">
              <button class="accordion-trigger">
                <div class="w-full md:flex-1">
                  Introduction to Fantasy Cricket League
                </div>

                <div class="flex w-full md:w-auto gap-2 items-center">
                  <span> 4 lecture </span>
                  <span>
                    <span
                      class="w-[4px] h-[4px] bg-black rounded-full block"
                    ></span>
                  </span>
                  <span> 19 Mins </span>
                  <span class="accordion-marker"></span>
                </div>
              </button>

              <div class="accordion-answer">
                <div class="answer-wrapper">
                  <p>
                    All medications prescribed by Juniper clinicians have been
                    approved for use in Australia, and are commonly prescribed
                    by GPs and local pharmacies for the treatment of weight
                    management.
                  </p>
                </div>
              </div>
            </div>
            <div class="single-accordion">
              <button class="accordion-trigger">
                <div class="w-full md:flex-1">
                  Introduction to Fantasy Cricket League
                </div>

                <div class="flex w-full md:w-auto gap-2 items-center">
                  <span> 4 lecture </span>
                  <span>
                    <span
                      class="w-[4px] h-[4px] bg-black rounded-full block"
                    ></span>
                  </span>
                  <span> 19 Mins </span>
                  <span class="accordion-marker"></span>
                </div>
              </button>

              <div class="accordion-answer">
                <div class="answer-wrapper">
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

          <div class="bg-primary12 pt-4 pb-3 px-4 relative overflow-hidden">
            <div class="absolute top-0 left-0 bottom-0 h-full">
              <img src={wol} class="h-full" alt="" />
            </div>
            <div class="absolute top-3 -right-5">
              <img src={pi} class="h-full" alt="" />
            </div>
            <div
              class="max-w-[870px] grid lg:grid-cols-2 gap-4 lg:gap-6 items-center mx-auto relative z-10"
            >
              <div class="flex gap-2 md:gap-[20px] justify-center">
                <div class="flex flex-col gap-[12px] items-center">
                  <div
                    class="bg-lightyellow p-[12px] md:py-[18px] md:px-2 md:min-w-[90px] text-center"
                  >
                    <h3
                      class="text-darkgreen text-[28px] md:text-[40px] font-semibold days-container"
                    >
                      47:
                    </h3>
                  </div>
                  <p class="text-white font-medium mb-0">Days</p>
                </div>
                <div class="flex flex-col gap-[12px] items-center">
                  <div
                    class="bg-lightyellow p-[12px] md:py-[18px] md:px-2 md:min-w-[90px] text-center"
                  >
                    <h3
                      class="text-darkgreen text-[28px] md:text-[40px] font-semibold hours-container"
                    >
                      0:
                    </h3>
                  </div>
                  <p class="text-white font-medium mb-0">Hours</p>
                </div>
                <div class="flex flex-col gap-[12px] items-center">
                  <div
                    class="bg-lightyellow p-[12px] md:py-[18px] md:px-2 md:min-w-[90px] text-center"
                  >
                    <h3
                      class="text-darkgreen text-[28px] md:text-[40px] font-semibold minutes-container"
                    >
                      30:
                    </h3>
                  </div>
                  <p class="text-white font-medium mb-0">Mins</p>
                </div>
                <div class="flex flex-col gap-[12px] items-center">
                  <div
                    class="bg-lightyellow p-[12px] md:py-[18px] md:px-2 md:min-w-[90px] text-center"
                  >
                    <h3
                      class="text-darkgreen text-[28px] md:text-[40px] font-semibold seconds-container"
                    >
                      38
                    </h3>
                  </div>
                  <p class="text-white font-medium mb-0">Secs</p>
                </div>
              </div>

              <div class="text-center lg:text-left">
                <p
                  class="text-24 md:text-[28px] font-semibold text-lightyellow leading-[130%]"
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
