import React, { useState } from 'react';
import ci from '../../asset/creator-image.png';
import cw from '../../asset/creator-wheel.png';
function About10() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
<section class="relative" id="about">
      <div class="container flex lg:gap-[120px] gap-[48px] items-center justify-center lg:flex-row flex-col">
        <div class="lg:w-[50%]">
          <img src={ci}/>
        </div>
        <div class="lg:w-[50%] z-10">
          <h2 class="font-bold text-48">More about the creator</h2>
          <hr class="lg:my-4 my-3" />
          <p class="text-16">
            Amish Thakur is more than just a business coach – he's a visionary
            dedicated to unlocking your true potential. With over a decade of
            hands-on experience in the business world, Amish has honed his
            skills in various industries, from startups to established
            enterprises. His journey has equipped him with a deep
            understanding of the challenges entrepreneurs and business leaders
            face daily.
          </p>
          <p class="mt-4 text-16">
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
      <img src={cw} alt="" class="absolute lg:top-[50%] top-[95%] w-[200px] lg:w-[350px] right-0" />
    </section>
    </main>
  );
}

export default About10;
