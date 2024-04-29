import React, { useState} from 'react';
import star from '../../asset/star.svg';
import gs from '../../asset/green-star.svg';
import becky from '../../asset/becky.svg';
function Test4() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
    <section id="success-stories">
        <div class="container bg-blueGrey rounded-[40px] lg:!py-[80px] py-5 flex items-center sm:flex-row flex-col">
          <div class="lg:w-1/2 w-full">
            <div class="flex justify-center">
              <div class="flex flex-wrap lg:ml-[100px] lg:gap-[90px] gap-[50px] flex-row">
                <div class="w-[41%]">
                  <div class="t41 text-purple font-supreme font-medium">16+</div>
                  <div class=" t46 font-supreme font-medium text-center sm:text-start">detailed lessons included</div>
                </div>
                <div class="w-[41%]">
                  <div class="t41 text-purple font-supreme font-medium">45+</div>
                  <div class="t46 font-supreme font-medium text-center sm:text-start">hours of video lessons</div>
                </div>
                <div class="w-[41%]">
                  <div class="t41 text-purple font-supreme font-medium">21k+</div>
                  <div class="t46 font-supreme font-medium text-center sm:text-start">students enrolled</div>
                </div>
                <div class="w-[41%]">
                  <div class="t41 text-purple font-supreme font-medium">10</div>
                  <div class="t46 font-supreme font-medium text-center sm:text-start">coaching awards</div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 w-full lg:pl-[100px]">
            <div
              class="bg-primary4 lg:p-[56px] pt-[56px] justify-center lg:justify-start rounded-3xl flex gap-[10px] min-h-[260px] items-start mt-5 sm:mt-0"
            >
              <img src={gs} alt="" />
              <div>
                <div class="flex gap-[2px]">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src="img/half-star.svg" alt="" />
                </div>
                <p class="text-white mt-[5px] font-supreme font-medium">Rated 4.7/5 on Trustpilot</p>
              </div>
            </div>
            <div class="flex flex-col items-center">
              <div
                class="lg:w-[85%] w-[90%] bg-white lg:py-[40px] lg:px-4 py-4 px-2 lg:mt-[-22%] mt-[-36%] rounded-[18px]"
              >
                <h5 class="font-supreme font-medium sm:text-16 leading-[24px] lg:text-20 lg:leading-[32px]">
                  “Through their mentorship, I've gained a deeper understanding
                  of my target market and have refined my marketing strategies
                  to connect with customers in more impactful ways.”
                </h5>
              </div>
              <div class="flex gap-[12px] w-[85%] mt-3">
                <img
                  src={becky}
                  alt=""
                  class="h-[48px] w-[48px] rounded-full"
                />
                <div>
                  <h6 class="font-supreme font-bold">Becky Keen</h6>
                  <p class="text-primary/50 font-supreme font-medium">Co-Founder, Acme Industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Test4;
