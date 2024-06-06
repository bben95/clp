import React from 'react';
import course from '../../asset/course1.webp';
import ad from '../../asset/arrow-down.svg';

function More1() {
  return (
    <main>
      <section className="md:py-[60px] py-4">
        <div className="container">
          <div className="flex md:flex-row flex-col gap-3 md:gap-[56px]">
            <div className="w-full md:w-1/2 flex flex-col">
              <h2 className="mb-3 text-base3 text-secondary md:hidden" contentEditable="true">
                Why you should join this course
              </h2>
              <img
                src={course}
                width="610"
                height="370"
                loading="lazy"
                alt="course1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
              <h2
                className="mb-5 text-xl tracking-[-0.5px] text-secondary hidden md:block"
                contentEditable="true"
              >
                Why you should join this course
              </h2>
              <div className="accordion flex-1">
                <div className="accordion-item flex flex-col">
                  <div className="accordion-headers flex justify-between items-center">
                    <div
                      className="text-base2.5 md:text-base3 text-secondary max-w-[310px] md:max-w-full"
                      contentEditable="true"
                    >
                      Get mentored by TOP industry folks
                    </div>
                    <img
                      src={ad}
                      alt="arrow"
                      loading="lazy"
                      width="14"
                      height="8"
                      className="arrow rotate-180"
                    />
                  </div>
                  <p
                    className="text-sm22 md:text-base text-secondary/80 dropdown-accordion"
                    contentEditable="true"
                  >
                    Begin by understanding the fundamental principles of User
                    Interface (UI) and User Experience (UX) design. Learn about
                    user-centric design, visual hierarchy, color theory,
                    typography, and layout principles.
                  </p>
                </div>
                <div className="accordion-item flex flex-col pt-3 md:pt-[28px] border-t border-b border-primary/[0.30]">
                  <div className="accordion-headers flex justify-between items-center">
                    <div
                      className="text-base2.5 md:text-base3 text-secondary max-w-[310px] md:max-w-full"
                      contentEditable="true"
                    >
                      Life time access to premium community
                    </div>
                    <img
                      src={ad}
                      alt="arrow"
                      loading="lazy"
                      width="14"
                      height="8"
                      className="arrow"
                    />
                  </div>
                  <p className="text-sm22 md:text-base text-secondary/80" contentEditable="true">
                    Begin by understanding the fundamental principles of User
                    Interface (UI) and User Experience (UX) design. Learn about
                    user-centric design, visual hierarchy, color theory,
                    typography, and layout principles.
                  </p>
                </div>
                <div className="accordion-item flex flex-col pt-3 md:pt-[28px]">
                  <div className="accordion-headers !pb-0 flex justify-between items-center">
                    <div
                      className="text-base2.5 md:text-base3 text-secondary max-w-[310px] md:max-w-full"
                      contentEditable="true"
                    >
                      Find better opportunities for freelance and Jobs
                    </div>
                    <img
                      src={ad}
                      alt="arrow"
                      loading="lazy"
                      width="14"
                      height="8"
                      className="arrow"
                    />
                  </div>
                  <p className="!mb-0 text-sm22 md:text-base text-secondary/80" contentEditable="true">
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
