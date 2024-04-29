import React, { useState } from 'react';
import course from '../../asset/course1.webp';
import ad from '../../asset/arrow-down.svg';
function More1() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
      <section class="md:py-[60px] py-4">
        <div class="container">
          <div class="flex md:flex-row flex-col gap-3 md:gap-[56px]">
            <div class="w-full md:w-1/2">
              <h2 class="mb-3 text-base3 text-secondary md:hidden">
                Why you should join this course
              </h2>
              <img
                src={course}
                width="610"
                height="370"
                loading="lazy"
                alt="course1"
                class="w-full"
              />
            </div>
            <div class="w-full md:w-1/2">
              <h2
                class="mb-5 text-xl tracking-[-0.5px] text-secondary hidden md:block"
              >
                Why you should join this course
              </h2>
              <div class="accordion">
                <div class="accordion-item flex flex-col">
                  <div
                    class="accordion-headers flex justify-between items-center"
                  >
                    <div
                      class="text-base2.5 md:text-base3 text-secondary max-w-[310px] md:max-w-full"
                    >
                      Get mentored by TOP industry folks
                    </div>
                    <img
                      src={ad}
                      alt="arrow"
                      loading="lazy"
                      width="14"
                      height="8"
                      class="arrow rotate-180"
                    />
                  </div>
                  <p
                    class="text-sm22 md:text-base text-secondary/80 dropdown-accordion"
                  >
                    Begin by understanding the fundamental principles of User
                    Interface (UI) and User Experience (UX) design. Learn about
                    user-centric design, visual hierarchy, color theory,
                    typography, and layout principles.
                  </p>
                </div>
                <div
                  class="accordion-item flex flex-col pt-3 md:pt-[28px] border-t border-b border-primary/[0.30]"
                >
                  <div
                    class="accordion-headers flex justify-between items-center"
                  >
                    <div
                      class="text-base2.5 md:text-base3 text-secondary max-w-[310px] md:max-w-full"
                    >
                      Life time access to premium community
                    </div>
                    <img
                      src={ad}
                      alt="arrow"
                      loading="lazy"
                      width="14"
                      height="8"
                      class="arrow"
                    />
                  </div>
                  <p class="text-sm22 md:text-base text-secondary/80">
                    Begin by understanding the fundamental principles of User
                    Interface (UI) and User Experience (UX) design. Learn about
                    user-centric design, visual hierarchy, color theory,
                    typography, and layout principles.
                  </p>
                </div>
                <div class="accordion-item flex flex-col pt-3 md:pt-[28px]">
                  <div
                    class="accordion-headers !pb-0 flex justify-between items-center"
                  >
                    <div
                      class="text-base2.5 md:text-base3 text-secondary max-w-[310px] md:max-w-full"
                    >
                      Find better opportunities for freelance and Jobs
                    </div>
                    <img
                      src={ad}
                      alt="arrow"
                      loading="lazy"
                      width="14"
                      height="8"
                      class="arrow"
                    />
                  </div>
                  <p class="!mb-0 text-sm22 md:text-base text-secondary/80">
                    Begin by understanding the fundamental principles of User
                    Interface (UI) and User Experience (UX) design. Learn about
                    user-centric design, visual hierarchy, color theory,
                    typography, and layout principles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default More1;
