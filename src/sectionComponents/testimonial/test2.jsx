import React, { useState} from 'react';
import checked from '../../asset/checked.svg';
import quotes from '../../asset/quotes.svg';
import sanchita from '../../asset/sanchita.svg';
import star from '../../asset/star.svg';
function Test2() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
    <section class="" id="testimonials">
      <div class="container flex lg:flex-row flex-col lg:gap-[24px] gap-2  testimonials-container">
        <div class="lg:w-[30%] w-full">
          <div class="bg-olive/20 w-fit rounded-lg lg:mb-2 mb-1">
            <p class="text-olive pt-1 pb-[4px] px-3">Testimonials</p>
          </div>
          <div class="t22">What our customers say ?</div>
          <div class="t62 text-secondary/70 lg:mt-3 mt-2 pr-[36px] lg:pr-0 font-normal">See what ours customers have say
            about our services</div>
        </div>
        <div class="slider flex  sm:gap-[20px] lg:w-[67%] w-full mt-[60px] lg:mt-0">
          <div class="lg:w-1/3 !w-full ">
            <div class="bg-lightOlive p-3 rounded-xl">
              <img src={quotes} class="mb-[12px]" />
              <p class="text-secondary/60 lg:text-16 text-14">
                I can't speak highly enough about the Finance Course I recently
                completed.
              </p>
              <br/>
              <p class="text-secondary/60 lg:text-16 text-14">It has been an incredibly enriching and eye-opening
                journey that has transformed my understanding of finance and how
                to manage my money effectively.From the outset, the course
                structure was well-organized, and the content was presented in a
                clear manner .</p>
              <div class="border border-b-0 mt-4 mb-2 border-[#54808833]"></div>
              <div class="flex justify-between">
                <div class="flex">
                  <img src={sanchita} alt="" class="mr-[12px]"/>
                  <div>
                    <p class="text-secondary/70 font-bold text-16 ">Sanchita Gupta</p>
                    <span class="text-14 text-secondary/70 font-normal">Bcom Student</span>
                  </div>
                </div>
                <div class="flex gap-1">
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 !w-full ">
            <div class="bg-lightOlive p-3 rounded-xl">
              <img src={quotes} class="mb-[12px]" />
              <p class="text-secondary/60 lg:text-16 text-14">
                I can't speak highly enough about the Finance Course I recently
                completed.
              </p>
              <br/>
              <p class="text-secondary/60 lg:text-16 text-14">It has been an incredibly enriching and eye-opening
                journey that has transformed my understanding of finance and how
                to manage my money effectively.From the outset, the course
                structure was well-organized, and the content was presented in a
                clear manner .</p>
              <div class="border border-b-0 mt-4 mb-2 border-[#54808833]"></div>
              <div class="flex justify-between">
                <div class="flex">
                  <img src={sanchita} alt="" class="mr-[12px]"/>
                  <div>
                    <p class="text-secondary/70 font-bold text-16 ">Sanchita Gupta</p>
                    <span class="text-14 text-secondary/70 font-normal">Bcom Student</span>
                  </div>
                </div>
                <div class="flex gap-1">
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 !w-full ">
            <div class="bg-lightOlive p-3 rounded-xl">
              <img src={quotes} class="mb-[12px]" />
              <p class="text-secondary/60 lg:text-16 text-14">
                I can't speak highly enough about the Finance Course I recently
                completed.
              </p>
              <br/>
              <p class="text-secondary/60 lg:text-16 text-14">It has been an incredibly enriching and eye-opening
                journey that has transformed my understanding of finance and how
                to manage my money effectively.From the outset, the course
                structure was well-organized, and the content was presented in a
                clear manner .</p>
              <div class="border border-b-0 mt-4 mb-2 border-[#54808833]"></div>
              <div class="flex justify-between">
                <div class="flex">
                  <img src={sanchita} alt="" class="mr-[12px]"/>
                  <div>
                    <p class="text-secondary/70 font-bold text-16 ">Sanchita Gupta</p>
                    <span class="text-14 text-secondary/70 font-normal">Bcom Student</span>
                  </div>
                </div>
                <div class="flex gap-1">
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
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

export default Test2;
