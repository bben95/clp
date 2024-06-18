import React from 'react';
import ao from '../../asset/about-owner.png';
import cp from '../../asset/circle-pattern.svg';
import n1 from '../../asset/no-1-badge.svg';
import si1 from '../../asset/stars-icon(1).svg';

function About5() {
  return (
    <main>
      <section
        className="section-pad relative overflow-hidden lg:overflow-visible"
        id="about"
      >
        <div className="absolute bottom-5 md:bottom-auto md:-top-[140px] -left-8 z-0 w-[800px] md:w-auto">
          <img src={cp} alt="" />
        </div>
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1 md:mt-5">
              <div className="light-tag-white mb-4">
                <div className="flex items-center">
                  <img src={si1} alt="" className="mr-2" />
                  Improve your online presence
                </div>
              </div>
              <h2 className="heading mb-4">
                Navigate the ever-evolving business landscape to your vision.
              </h2>
              <div className="relative block md:hidden mb-8">
                <div className="absolute -bottom-5 left-0 right-0 mx-auto max-w-[130px]">
                  <img src={n1} alt="" />
                </div>
                <img className="w-full" src={ao} alt="" />
              </div>
              <div className="text-16">
                Amish Thakur is more than just a business coach – he's a visionary dedicated to unlocking your true potential. With over a decade of hands-on experience in the business world, Amish has honed his skills in various industries, from startups to established enterprises. His journey has equipped him with a deep understanding of the challenges entrepreneurs and business leaders face daily.
              </div>
              <div className="text-16">
                Amish's coaching philosophy is rooted in the belief that every obstacle is an opportunity waiting to be discovered. He doesn't offer cookie-cutter solutions; instead, he partners with you to craft personalized strategies that align with your unique goals and aspirations. Through his guidance, you'll learn how to navigate the ever-evolving business landscape while staying true to your vision.
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center md:ml-8"> {/* Add margin-left here */}
              <div className="relative w-full h-full">
                <div className="absolute -bottom-7 ml-4 left-0 right-0 mx-auto lg:right-auto lg:-left-[125px] lg:max-w-full max-w-[130px]">
                  <img src={n1} alt="" />
                </div>
                <img className="w-full h-full object-cover" src={ao} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About5;
