import React, { useState} from 'react';
import cs from '../../asset/curved-shar.svg';
import star from '../../asset/star.svg';
import gs from '../../asset/green-star-sm.svg';
import kavya from '../../asset/kavya.svg';
function Test8() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
        <section class="lg:py-[120px] pt-[100px] pb-[120px] overflow-hidden">
      <div class="container testimonial">
        <div class="flex justify-center">
          <img src={gs} alt="" class="mt-[-120px]" />
          <h2 class="lg:text-[40px] text-[28px] font-newSpirit lg:mb-[60px] mb-[40px] text-center mx-2 font-medium">
            Testimonials
          </h2>
          <img src={cs} class="mt-[-30px] transform rotate-45" alt="" />
        </div>

        <div class="lg:pt-1 slider-overflow-visible">
          <div class="logo-slider !ease-linear mb-3">
            <div class="item">
              <div class="border border-apricot rounded-2xl p-[20px] max-w-[400px]">
                <p class="font-newSpirit font-medium leading-[25px]">
                  "I always turn to your blog for travel inspiration. Their
                  guides are comprehensive, informative, and sprinkled with
                  personal anecdotes that make the destinations come alive."
                </p>
                <div class="flex gap-[12px] mt-[65px]">
                  <img src={kavya} alt="" />
                  <div>
                    <p class="font-ibmPlexSans">Ashley Tisdale</p>
                    <div class="flex gap-[2px]">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="border border-apricot rounded-2xl p-[20px] max-w-[400px]">
                <p class="font-newSpirit font-medium leading-[25px]">
                  "I always turn to your blog for travel inspiration. Their
                  guides are comprehensive, informative, and sprinkled with
                  personal anecdotes that make the destinations come alive."
                </p>
                <div class="flex gap-[12px] mt-[65px]">
                  <img src={kavya} alt="" />
                  <div>
                    <p class="font-ibmPlexSans">Ashley Tisdale</p>
                    <div class="flex gap-[2px]">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="border border-apricot rounded-2xl p-[20px] max-w-[400px]">
                <p class="font-newSpirit font-medium leading-[25px]">
                  "I always turn to your blog for travel inspiration. Their
                  guides are comprehensive, informative, and sprinkled with
                  personal anecdotes that make the destinations come alive."
                </p>
                <div class="flex gap-[12px] mt-[65px]">
                  <img src={kavya} alt="" />
                  <div>
                    <p class="font-ibmPlexSans">Ashley Tisdale</p>
                    <div class="flex gap-[2px]">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="border border-apricot rounded-2xl p-[20px] max-w-[400px]">
                <p class="font-newSpirit font-medium leading-[25px]">
                  "I always turn to your blog for travel inspiration. Their
                  guides are comprehensive, informative, and sprinkled with
                  personal anecdotes that make the destinations come alive."
                </p>
                <div class="flex gap-[12px] mt-[65px]">
                  <img src={kavya} alt="" />
                  <div>
                    <p class="font-ibmPlexSans">Ashley Tisdale</p>
                    <div class="flex gap-[2px]">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="logo-slider-2 !ease-linear !hidden lg:!flex">
            <div class="item">
              <div class="border border-apricot rounded-2xl p-[20px] max-w-[400px]">
                <p class="font-newSpirit font-medium leading-[25px]">
                  "I always turn to your blog for travel inspiration. Their
                  guides are comprehensive, informative, and sprinkled with
                  personal anecdotes that make the destinations come alive."
                </p>
                <div class="flex gap-[12px] mt-[65px]">
                  <img src={kavya} alt="" />
                  <div>
                    <p class="font-ibmPlexSans">Ashley Tisdale</p>
                    <div class="flex gap-[2px]">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="border border-apricot rounded-2xl p-[20px] max-w-[400px]">
                <p class="font-newSpirit font-medium leading-[25px]">
                  "I always turn to your blog for travel inspiration. Their
                  guides are comprehensive, informative, and sprinkled with
                  personal anecdotes that make the destinations come alive."
                </p>
                <div class="flex gap-[12px] mt-[65px]">
                  <img src={kavya} alt="" />
                  <div>
                    <p class="font-ibmPlexSans">Ashley Tisdale</p>
                    <div class="flex gap-[2px]">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="border border-apricot rounded-2xl p-[20px] max-w-[400px]">
                <p class="font-newSpirit font-medium leading-[25px]">
                  "I always turn to your blog for travel inspiration. Their
                  guides are comprehensive, informative, and sprinkled with
                  personal anecdotes that make the destinations come alive."
                </p>
                <div class="flex gap-[12px] mt-[65px]">
                  <img src={kavya} alt="" />
                  <div>
                    <p class="font-ibmPlexSans">Ashley Tisdale</p>
                    <div class="flex gap-[2px]">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="border border-apricot rounded-2xl p-[20px] max-w-[400px]">
                <p class="font-newSpirit font-medium leading-[25px]">
                  "I always turn to your blog for travel inspiration. Their
                  guides are comprehensive, informative, and sprinkled with
                  personal anecdotes that make the destinations come alive."
                </p>
                <div class="flex gap-[12px] mt-[65px]">
                  <img src={kavya} alt="" />
                  <div>
                    <p class="font-ibmPlexSans">Ashley Tisdale</p>
                    <div class="flex gap-[2px]">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
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

export default Test8;
