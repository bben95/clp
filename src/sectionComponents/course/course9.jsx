import React, { useState } from 'react';
import tb from '../../asset/timersection-bg.svg';
import whatsapp from '../../asset/whatsapp.png';
import s1 from '../../asset/stack1.png';
import s2 from '../../asset/stack2.png';
import pt from '../../asset/price-tag.svg';
import star1 from '../../asset/star1.svg';
import meditation from '../../asset/meditation.png';
import mbr from '../../asset/meditation-bgpattern-right.svg';
import mbl from '../../asset/meditation-bgpattern-left.svg';
function Course9() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
    <section
        class="py-5 lg:py-[100px] bg-brightgray relative overflow-hidden"
        id="courses"
      >
        <div class="absolute top-0 right-[-270px]">
          <img src={mbr} alt="" />
        </div>
        <div class="absolute top-0 left-[-270px]">
          <img src={mbl} alt="" />
        </div>
        <div class="container relative">
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-3 lg:gap-[105px]">
            <img class="w-full" src={meditation} alt="" />
            <div class="text-secondary self-center">
              <div
                class="text-medium24 lg:text-48 font-normal lg:leading-none font-DM-Serif-Display tracking-[-0.5px]"
              >
                Meditations for Deep Rest
              </div>
              <div
                class="mt-2 mb-[40px] lg:mb-4 opacity-70 text-base max-w-[541px]"
              >
                You’ll learn how to relax into your body, let go of unnecessary
                tension, and restore yourself to a state of balance.
              </div>
              <div
                class="text-16 lg:text-20 leading-none font-semibold mb-[21px] lg:mb-2"
              >
                What’s included
              </div>
              <ul class="list-check">
                <li>Award-winning content library of 400+ videos</li>
                <li>
                  Inclusive programs covering fitness, nutrition, mental health,
                  sleep, and financial wellbeing
                </li>
                <li>
                  Understanding the various financial markets and instruments
                </li>
                <li>
                  Utilizing spreadsheet software to build financial models
                </li>
              </ul>
              <div class="flex items-center mt-3 lg:mt-[28px]">
                <div class="lg:max-w-[295px]">
                  <a
                    href="#!"
                    class="button rounded-[47px] py-[18px] lg:py-2 px-[28px] md:px-[40px] lg:px-[54px] bg-primary9 w-full inline-block text-white text-16 leading-[1.5]"
                  >
                    <div class="relative overflow-hidden">
                      <span class="button-content">Enroll Now</span>
                      <span class="button-content-hover">Enroll Now</span>
                    </div>
                  </a>
                </div>
                <div class="stacked-avatars ml-2 lg:ml-3 mr-[10px]">
                  <div>
                    <img
                      class="w-[37px] lg:w-[43px] h-[37px] lg:h-[43px]"
                      src={s1}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="w-[37px] lg:w-[43px] h-[37px] lg:h-[43px]"
                      src={s2}
                      alt=""
                    />
                  </div>
                </div>
                <div class="flex flex-col">
                  <div
                    class="flex items-center gap-[3px] text-18 font-bold leading-none"
                  >
                    4.8 <img src={star1} alt="" />
                  </div>
                  <div
                    class="mt-1 text-12 lg:text-14 leading-[1.3] font-semibold"
                  >
                    Average ratings
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex lg:flex-row flex-col gap-[20px] mt-5 lg:mt-[100px]">
            <div class="w-full lg:w-7/12">
              <div
                class="border border-black/10 rounded-3xl bg-black/[0.03] py-3 lg:py-4 px-2 lg:px-3"
              >
                <div
                  class="text-20 lg:text-24 leading-none font-semibold tracking-[-0.5px] mb-4"
                >
                  What you will learn
                </div>
                <div class="mt-0 meditation" data-accordion-container2>
                  <div class="accordion-block">
                    <div class="single-accordion">
                      <button class="accordion-header flex gap-2 ">
                        <span class="arrow">
                          -
                        </span>
                        Lesson 1: Introduction to Meditation and Sprituality
                      </button>
                      <div class="accordion-ans dropdown-accordion">
                        <div class="answer-wrapper">
                          <ul>
                            <li>
                              Setting intentions and goals for the course.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="single-accordion">
                      <button class="accordion-header flex gap-2">
                        <span class="arrow">
                          +
                          
                        </span>
                        Lesson 2: Mindfulness Meditation
                      </button>
                      <div class="accordion-ans ">
                        <div class="answer-wrapper">
                          <ul>
                            <li>
                              Setting intentions and goals for the course.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                   
                    <div class="single-accordion">
                      <button class="accordion-header flex gap-2">
                        <span class="arrow">
                          +
                          
                        </span>
                        Lesson 3: Guided Relaxation Techniques
                      </button>
                      <div class="accordion-ans ">
                        <div class="answer-wrapper">
                          <ul>
                            <li>
                              Setting intentions and goals for the course.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="single-accordion">
                      <button class="accordion-header flex gap-2">
                        <span class="arrow">
                          +
                          
                        </span>
                        Lesson 4: Breathwork and Pranayama
                      </button>
                      <div class="accordion-ans ">
                        <div class="answer-wrapper">
                          <ul>
                            <li>
                              Setting intentions and goals for the course.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="single-accordion">
                      <button class="accordion-header flex gap-2">
                        <span class="arrow">
                          +
                          
                        </span>
                        Lesson 5: Visualization and Imagery
                      </button>
                      <div class="accordion-ans ">
                        <div class="answer-wrapper">
                          <ul>
                            <li>
                              Setting intentions and goals for the course.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="single-accordion">
                      <button class="accordion-header flex gap-2">
                        <span class="arrow">
                          +
                          
                        </span>
                        Lesson 6: Integrating Deep Rest into Daily Life
                      </button>
                      <div class="accordion-ans ">
                        <div class="answer-wrapper">
                          <ul>
                            <li>
                              Setting intentions and goals for the course.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-5/12">
              <div
                class="bg-primary9 rounded-3xl py-3 px-[25px] lg:pt-[40px] lg:pb-5 lg:px-[43px] relative overflow-hidden"
              >
                <div class="absolute top-0 left-0 bottom-0">
                  <img src={tb} alt="" />
                </div>
                <div class="flex flex-col justify-center items-center">
                  <div
                    class="py-1 lg:py-[14px] px-2 rounded-lg bg-brightgray/10 flex gap-1 lg:gap-[10px] items-center uppercase text-white text-12 lg:text-14 leading-none tracking-[1px] max-w-fit"
                  >
                    <img src={pt} alt="" />
                    Special price of this course
                  </div>
                  <div
                    class="text-18 lg:text-[22px] leading-none tracking-[-0.5px] font-semibold my-3 text-white"
                  >
                    Registration Closes On 14th Sep
                  </div>
                  <div
                    class="flex items-center justify-center gap-[12px] lg:gap-[20px]"
                  >
                    <div class="flex flex-col items-center">
                      <div
                        class="text-[28px] lg:text-[40px] lg:tracking-[-0.5px] rounded-[3px] lg:rounded-[7px] py-[10px] lg:py-[18px] px-[12px] lg:px-2 text-primary9 bg-brightgray leading-none font-semibold mb-[6.5px] lg:mb-[11px] days-container"
                      >
                        00
                      </div>
                      <div
                        class="text-12 lg:text-16 leading-[1.3] lg:leading-[1.28] tracking-[-0.35px] lg:tracking-[-0.5px] text-white font-semibold"
                      >
                        Days
                      </div>
                    </div>

                    <div class="flex flex-col items-center">
                      <div
                        class="text-[28px] lg:text-[40px] lg:tracking-[-0.5px] rounded-[3px] lg:rounded-[7px] py-[10px] lg:py-[18px] px-[12px] lg:px-2 text-primary9 bg-brightgray leading-none font-semibold mb-[6.5px] lg:mb-[11px] hours-container"
                      >
                        00
                      </div>
                      <div
                        class="text-12 lg:text-16 leading-[1.3] lg:leading-[1.28] tracking-[-0.35px] lg:tracking-[-0.5px] text-white font-semibold"
                      >
                        Hours
                      </div>
                    </div>

                    <div class="flex flex-col items-center">
                      <div
                        class="text-[28px] lg:text-[40px] lg:tracking-[-0.5px] rounded-[3px] lg:rounded-[7px] py-[10px] lg:py-[18px] px-[12px] lg:px-2 text-primary9 bg-brightgray leading-none font-semibold mb-[6.5px] lg:mb-[11px] minutes-container"
                      >
                        00
                      </div>
                      <div
                        class="text-12 lg:text-16 leading-[1.3] lg:leading-[1.28] tracking-[-0.35px] lg:tracking-[-0.5px] text-white font-semibold"
                      >
                        Mins
                      </div>
                    </div>

                    <div class="flex flex-col items-center">
                      <div
                        class="text-[28px] lg:text-[40px] lg:tracking-[-0.5px] rounded-[3px] lg:rounded-[7px] py-[10px] lg:py-[18px] px-[12px] lg:px-2 text-primary9 bg-brightgray leading-none font-semibold mb-[6.5px] lg:mb-[11px] seconds-container"
                      >
                        00
                      </div>
                      <div
                        class="text-12 lg:text-16 leading-[1.3] lg:leading-[1.28] tracking-[-0.35px] lg:tracking-[-0.5px] text-white font-semibold"
                      >
                        Secs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="text-18 leading-none font-semibold tracking-[-0.5px] text-primary9 my-3 text-center"
              >
                Got any questions before enrolling?
              </div>
              <div class="lg:max-w-[457px] max-w-full mx-auto">
                <a
                  href="#!"
                  class="button rounded-[47px] py-2 px-4 md:px-[54px] bg-secondary w-full inline-block text-white text-16 leading-[1.5]"
                >
                  <div class="relative overflow-hidden">
                    <span class="button-content flex items-center"
                      ><img
                        class="mr-[9px] inline-block"
                        src={whatsapp}
                        alt=""
                      />Contact us 914-532-7432</span
                    >
                    <span class="button-content-hover flex items-center"
                      ><img
                        class="mr-[9px] inline-block"
                        src={whatsapp}
                        alt=""
                      />Contact us 914-532-7432</span
                    >
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Course9;
