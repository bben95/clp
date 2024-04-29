import React, { useState} from 'react';
import si from '../../asset/student-img.webp';
function Test3() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
         <section class="py-5 md:py-[120px] bg-palelavender/40">
        <div class="container">
          <div class="text-darkbluemagenta text-center mb-6 md:mb-[84px]">
            <h2 class="mb-2 text-xl md:text-4.8xl">Hear from my students</h2>
            <div class="opacity-60 max-w-[610px] mx-auto text-base2.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sit amet sem blandit, suscipit lectus ac, molestie
              magna.
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-[34px] md:gap-[20px] grid-cols-1">
            <div
              class="bg-white student-testimonial px-[16px] md:px-[40px] pt-[46px] md:pt-[83px] pb-3 md:pb-5 rounded-3xl"
            >
              <div
                class="text-darkbluemagenta text-base2.5 md:text-[22px] md:leading-[1.72] font-semibold"
              >
                I can't express enough how invaluable the insights provided by
                the fintech content creator have been for my investment journey.
                Their expertise in the financial technology sector is truly
                remarkable.
              </div>
              <div class="mt-3 md:mt-[40px] flex items-center gap-3">
                <img src={si} alt="student-img" />
                <div class="flex flex-col text-darkbluemagenta">
                  <div
                    class="mb-0 md:mb-[5px] text-16 md:text-20 leading-none tracking-[-0.5px] font-semibold"
                  >
                    Samantha Alexander
                  </div>
                  <div
                    class="opacity-60 text-14 md:text-16 font-semibold leading-none"
                  >
                    Full time student
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-white student-testimonial px-[16px] md:px-[40px] pt-[46px] md:pt-[83px] pb-3 md:pb-5 rounded-3xl"
            >
              <div
                class="text-darkbluemagenta text-base2.5 md:text-[22px] md:leading-[1.72] font-semibold"
              >
                I can't express enough how invaluable the insights provided by
                the fintech content creator have been for my investment journey.
                Their expertise in the financial technology sector is truly
                remarkable.
              </div>
              <div class="mt-3 md:mt-[40px] flex items-center gap-3">
                <img src={si} alt="student-img" />
                <div class="flex flex-col text-darkbluemagenta">
                  <div
                    class="mb-0 md:mb-[5px] text-16 md:text-20 leading-none tracking-[-0.5px] font-semibold"
                  >
                    Samantha Alexander
                  </div>
                  <div
                    class="opacity-60 text-14 md:text-16 font-semibold leading-none"
                  >
                    Full time student
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

export default Test3;
