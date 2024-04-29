import React, { useState } from 'react';
import ll from '../../asset/leaves-l.png';
import lr from '../../asset/leaves-r.png'
import o from '../../asset/owner.webp'
function About6() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
    <section class="section-pad overflow-hidden mt-8">
        <div class="container">
          <div class="flex md:flex-row flex-col items-center md:gap-[86px]">
            <div class="w-full md:w-1/2">
              <div
                class="text-secondary font-semibold font-melodrama text-32 lg:text-[56px] leading-[1.1] md:max-w-[544px]"
              >
                Creating content and teaching for the past
                <span class="text-primary">12&nbsp;years!</span>
              </div>
              <div
                class="mt-2 lg:mt-3 mb-[40px] text-secondary/70 text-16 leading-[1.6]"
              >
                I am glad that you have made it here to send a distress signal,
                and inform the Senate that all on board were killed. Dantooine.
                I’m not going to Alderaan. I really got to go.
              </div>
              <div class="flex gap-[40px]">
                <a
                  href="#!"
                  class="button chevron button-green w-full lg:w-[210px]"
                  >Buy Course</a
                >
                <div class="lg:flex items-center hidden">
                  <img src={ll} alt="" />
                  <div class="flex items-center flex-col">
                    <div
                      class="text-14 leading-[1.5] uppercase tracking-[-0.05] font-bold"
                    >
                      Creator award
                    </div>
                    <div
                      class="text-secondary/60 text-12 leading-[1.8] tracking-[-0.05] font-semibold"
                    >
                      2022
                    </div>
                  </div>
                  <img src={lr} alt="" />
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 mt-[40px] lg:mt-0">
              <img class="w-full" src={o} alt="" />
            </div>
          </div>
            </div>
      </section>
    </main>
  );
}

export default About6;
