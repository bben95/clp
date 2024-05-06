import React, { useState } from 'react';
import ys from '../../asset/yellow-red-stripe.svg';
import ysm from '../../asset/yellow-red-stripe-mobile.svg';
import c1 from '../../asset/creator-1.jpg';

function About12() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
        <section className="section-pad relative overflow-hidden" id="about">
        <div className="absolute top-0 left-0 w-full z-0  md:block">
          <img src={ys} className="w-full" alt="" />
        </div>
        <div className="absolute top-0 left-0 w-full z-0 block md:hidden">
          <img src={ysm} className="w-full" alt="" />
        </div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
            <div className="block md:hidden">
              <div
                className="font-heading stroke-text opacity-20 -mb-3 stroke-mask"
              >
                ABOUT ME
              </div>

              <h2 className="heading-medium mb-4 max-w-[550px]">
                Element of strategy and engagement to watching cricket matches.
              </h2>
            </div>
            <div>
              <div
                className="about-creator-img h-[440px] max-w-[346px] md:h-[480px] lg:h-[700px] md:max-w-[550px] relative"
              >
                <img
                  src={c1}
                  className="w-full h-full object-cover"
                  alt=""
                />

                <div className="absolute inset-0 flex justify-center items-center">
                  <svg
                    className="w-[90%] h-auto"
                    width="503"
                    height="653"
                    viewBox="0 0 503 653"
                    fill="none"
                  >
                    <path
                      d="M3.5 3.5H371.028L499.5 134.859V649.5H99.1276L3.5 543.164V3.5Z"
                      stroke="white"
                      strokeWidth="7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <div className="md:block">
                <div
                  className="font-heading stroke-text opacity-20 -mb-3 stroke-mask"
                >
                  ABOUT ME
                </div>

                <h2 className="heading-medium mb-4 max-w-[550px]">
                  Element of strategy and engagement to watching cricket
                  matches.
                </h2>
              </div>

              <p className="text-16">
                Amish Thakur is more than just a business coach – he's a
                visionary dedicated to unlocking your true potential. With over
                a decade of hands-on experience in the business world, Amish has
                honed his skills in various industries, from startups to
                established enterprises. His journey has equipped him with a
                deep understanding of the challenges entrepreneurs and business
                leaders face daily.
              </p>

              <p className="text-16">
                Amish's coaching philosophy is rooted in the belief that every
                obstacle is an opportunity waiting to be discovered. He doesn't
                offer cookie-cutter solutions; instead, he partners with you to
                craft personalized strategies that align with your unique goals
                and aspirations. Through his guidance, you'll learn how to
                navigate the ever-evolving business landscape while staying true
                to your vision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About12;
