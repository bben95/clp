import React, { useState } from 'react';
import lig from '../../asset/like-icon-gradient.svg';
import ssg from '../../asset/smile-star-gradient.svg';
function More5() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
     <section class="py-6">
        <div class="container">
          <div class="grid md:grid-cols-2 gap-3">
            <div class="rounded-2xl p-4 border-card relative overflow-hidden">
              <div class="absolute -bottom-3 -left-2">
                <img src={lig} alt="" />
              </div>
              <h3 class="bg-line relative text-center mb-[40px]">
                <span class="px-2 bg-[#FFFDF9] inline-block relative z-10">
                  Why should you take this course
                </span>
              </h3>

              <ul class="star-list list-check">
                <li>
                  Beginner friendly - Even an absolute beginner can learn from
                  it
                </li>
                <li>
                  Start your online business and start making money with it.
                </li>
                <li>
                  Shopify is used by big brands, You can start working in those
                  companies.
                </li>
              </ul>
            </div>
            <div class="rounded-2xl p-4 border-card relative overflow-hidden">
              <div class="absolute -bottom-3 -left-2">
                <img src={ssg} alt="" />
              </div>
              <h3 class="bg-line relative text-center mb-[40px]">
                <span class="px-2 bg-[#FFFDF9] inline-block relative z-10">
                  See course benefits
                </span>
              </h3>

              <ul class="star-list list-check">
                <li>
                  Beginner friendly - Even an absolute beginner can learn from
                  it
                </li>
                <li>
                  Start your online business and start making money with it.
                </li>
                <li>
                  Shopify is used by big brands, You can start working in those
                  companies.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default More5;