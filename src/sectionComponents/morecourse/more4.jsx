import React, { useState } from 'react';


function More4() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
        <section class="lg:pt-[120px] pt-5">
        <div class="container bg-blueGrey rounded-[40px] lg:!py-[80px] py-5">
          <div class=" t14 text-center">Things I can help you with</div>
          <div class="flex lg:justify-center items-center lg:mt-[64px] mt-[32px]">
            <div class="flex flex-wrap lg:gap-[72px] gap-[32px] lg:w-[75%] w-full">
              <div class="sm:w-[45%] w-full flex flex-col items-center">
                <h3 class="lg:text-[28px] text-20 text-purple font-supreme font-bold">📈Growth Strategy</h3>
                <p class="text-center mt-[12px] text-primary/50 font-supreme font-medium">
                  Eager to experience the impact of a committed Head of Growth?
                  The opportunity is here. Allow me to handle all the intricate
                  aspects of growth strategy.
                </p>
              </div>
              <div class="sm:w-[45%] w-full flex flex-col items-center">
                <h3 class="lg:text-[28px] text-20 text-purple font-supreme font-bold">📲Launching your Product</h3>
                <p class="text-center mt-[12px] text-primary/50 font-supreme font-medium">
                  Eager to experience the impact of a committed Head of Growth?
                  The opportunity is here. Allow me to handle all the intricate
                  aspects of growth strategy.
                </p>
              </div>
              <div class="sm:w-[45%] w-full flex flex-col items-center">
                <h3 class="lg:text-[28px] text-20 text-purple font-supreme font-bold">📧Email Marketing</h3>
                <p class="text-center mt-[12px] text-primary/50 font-supreme font-medium">
                  Eager to experience the impact of a committed Head of Growth?
                  The opportunity is here. Allow me to handle all the intricate
                  aspects of growth strategy.
                </p>
              </div>
              <div class="sm:w-[45%] w-full flex flex-col items-center">
                <h3 class="lg:text-[28px] text-20 text-purple font-supreme font-bold">🚨Viral Campaigns</h3>
                <p class="text-center mt-[12px] text-primary/50 font-supreme font-medium">
                  Eager to experience the impact of a committed Head of Growth?
                  The opportunity is here. Allow me to handle all the intricate
                  aspects of growth strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default More4;

    