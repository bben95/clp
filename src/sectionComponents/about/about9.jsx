import React from 'react';
import i1 from '../../asset/icon1.svg';
import i2 from '../../asset/icon2.svg';
import i3 from '../../asset/icon3.svg';
import i4 from '../../asset/icon4.svg';
import i5 from '../../asset/icon5.svg';
import i6 from '../../asset/icon6.svg';
import wa from '../../asset/wire-arrow.svg'
function About8() {
  return (
    <main>
         <section
        className="py-5 lg:py-[100px] bg-white text-secondary relative"
        id="about"
      >
        <div className="absolute top-[120px] left-[0] hidden lg:inline-block">
          <img src={wa} alt="" />
        </div>
        <div className="container">
          <div
            className="font-bodoni text-[28px] leading-[1.14] text-secondary font-normal mt-[19px] lg:mt-[30px] mb-3 text-center"
          >
            Our Range of Offered Recreational Activities and Services
          </div>
          <div
            className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-[20px] text-center"
          >
            <div>
              <img
                className="mx-auto"
                loading="lazy"
                src={i1}
                alt="icon1"
              />
              <div
                className="mt-[12px] lg:mt-[28px] mb-[12px] lg:mb-1 text-medium24 lg:text-heading-small font-DM-Serif-Display font-normal"
              >
                Specialty Yoga Programs
              </div>
              <div className="text-base28 tracking-[-0.5px] opacity-50">
                Yoga can change the world and we wanted to create a way for you
                to give back just by practicing.
              </div>
            </div>
            <div>
              <img
                className="mx-auto"
                loading="lazy"
                src={i2}
                alt="icon2"
              />
              <div
                className="mt-[12px] lg:mt-[28px] mb-[12px] lg:mb-1 text-medium24 lg:text-heading-small font-DM-Serif-Display font-normal"
              >
                Free Courses
              </div>
              <div className="text-base28 tracking-[-0.5px] opacity-50">
                Yoga can change the world and we wanted to create a way for you
                to give back just by practicing.
              </div>
            </div>
            <div>
              <img
                className="mx-auto"
                loading="lazy"
                src={i3}
                alt="icon3"
              />
              <div
                className="mt-[12px] lg:mt-[28px] mb-[12px] lg:mb-1 text-medium24 lg:text-heading-small font-DM-Serif-Display font-normal"
              >
                Special Activities
              </div>
              <div className="text-base28 tracking-[-0.5px] opacity-50">
                Yoga can change the world and we wanted to create a way for you
                to give back just by practicing.
              </div>
            </div>
          </div>
          <div
            className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-[20px] text-center mt-3 lg:mt-[90px]"
          >
            <div>
              <img
                className="mx-auto"
                loading="lazy"
                src={i4}
                alt="icon4"
              />
              <div
                className="mt-[12px] lg:mt-[28px] mb-[12px] lg:mb-1 text-medium24 lg:text-heading-small font-DM-Serif-Display font-normal"
              >
                Specialty Yoga Programs
              </div>
              <div className="text-base28 tracking-[-0.5px] opacity-50">
                Yoga can change the world and we wanted to create a way for you
                to give back just by practicing.
              </div>
            </div>
            <div>
              <img
                className="mx-auto"
                loading="lazy"
                src={i5}
                alt="icon5"
              />
              <div
                className="mt-[12px] lg:mt-[28px] mb-[12px] lg:mb-1 text-medium24 lg:text-heading-small font-DM-Serif-Display font-normal"
              >
                Free Courses
              </div>
              <div className="text-base28 tracking-[-0.5px] opacity-50">
                Yoga can change the world and we wanted to create a way for you
                to give back just by practicing.
              </div>
            </div>
            <div>
              <img
                className="mx-auto"
                loading="lazy"
                src={i6}
                alt="icon6"
              />
              <div
                className="mt-[12px] lg:mt-[28px] mb-[12px] lg:mb-1 text-medium24 lg:text-heading-small font-DM-Serif-Display font-normal"
              >
                Special Activities
              </div>
              <div className="text-base28 tracking-[-0.5px] opacity-50">
                Yoga can change the world and we wanted to create a way for you
                to give back just by practicing.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About8;
