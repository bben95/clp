import React, { useState } from 'react';
import riya from '../../asset/riya.png';
import sp  from '../../asset/step-pattern.png'
import heart from '../../asset/heart.svg'
import curved from '../../asset/curved-shar.svg'
function About8() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
     <section className="lg:py-[120px] pt-[92px] pb-6" id="about">
      <div className="container flex lg:flex-row flex-col items-end lg:gap-[20px] gap-[70px]">
        <div className="lg:w-1/2 relative sm:w-full">
          <img src={riya} alt="" className="sm:w-full" />
          <img src={sp} alt="" className="absolute bottom-[-20%] sm:bottom-[-12%] lg:bottom-[-20%] right-[-3%] h-[200px] w-[200px] sm:h-[275px] sm:w-[315px]" />
        </div>
        <div className="lg:w-1/2">
          <div className="bg-oyster rounded-[32px] lg:p-4 p-[20px]">
            <div className="flex items-center">
              <h4 className="lg:text-24 text-16 font-newSpirit mr-2 font-normal">About</h4>
              <div className="border border-b-apricot w-full"></div>
              <img src={heart} alt="" className="h-[30px] w-[30px] lg:w-[49px] lg:h-[49px]" />
            </div>
            <div className="flex lg:mt-[70px] mt-[62px] flex-col">
              <div className="flex items-center gap-2 mb-2">
                <img src={curved} alt="" className="h-2 w-2 lg:w-[26px] lg:h-[26px]" />
                <h2 className="lg:text-[36px] text-[28px] font-newSpirit font-normal">
                  Hey , I am Riya Khan!
                </h2>
              </div>
              <p className="text-apricot leading-6 text-16">
                Welcome to my corner of the internet! I'm a passionate
                globetrotter, adventurer, and storyteller on a mission to
                inspire wanderlust and encourage others to embrace the beauty
                of our diverse world.
              </p>
              <br />
              <p className="text-apricot leading-6 text-16">
                Join me as I navigate through uncharted territories, conquer
                new challenges, and share the lessons learned from my
                adventures. Through my blog posts, travel guides, and
                captivating visuals, I hope to spark your own journey of
                self-discovery and create a community of like-minded explorers
                who believe in the transformative power of travel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}

export default About8;
