import React, { useState} from 'react';
import a1 from '../../asset/avatar-1.webp';
import si from '../../asset/stars-icon.svg';
function Test5() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
     <section
        class="section-pad !pt-0 overflow-hidden testimonial-main"
        id="testimonials"
      >
        <div class="container">
          <div class="text-center">
            <div class="light-tag-white mb-4">
              <div>
                <img src={si} alt="" />
                Testimonials
              </div>
            </div>

            <h2 class="heading mb-5">
              See what our students tell about us

              <span class="inline-block ml-1">
                <svg width="39" height="35" viewBox="0 0 39 35" fill="none">
                  <path
                    d="M17.5 12.727a5.966 5.966 0 0 0-4.773 2.387 5.966 5.966 0 0 0-10.738 3.58c0 7.149 9.933 12.786 10.35 13.025.119.066.253.1.388.1a.755.755 0 0 0 .388-.1 31.25 31.25 0 0 0 5.12-3.739c3.471-3.122 5.231-6.244 5.231-9.287a5.966 5.966 0 0 0-5.966-5.966ZM34.205 1.591a2.983 2.983 0 0 0-2.387 1.193 2.983 2.983 0 0 0-5.37 1.79c0 3.575 4.967 6.393 5.176 6.513.06.033.126.05.194.05a.377.377 0 0 0 .194-.05 15.628 15.628 0 0 0 2.56-1.87c1.735-1.56 2.615-3.122 2.615-4.643a2.983 2.983 0 0 0-2.982-2.983Z"
                    fill="#FA5248"
                  />
                </svg>
              </span>
            </h2>
          </div>

          <div class="slider-overflow-visible center-controls">
            <div class="testimonial-slider">
              <div class="item">
                <div class="testimonial-single relative p-[40px] rounded-3xl">
                  <p class="mb-4">
                    This course provided a clear and step-by-step roadmap that
                    demystified the entire process. From crafting a compelling
                    product page to mastering marketing strategies, I gained
                    valuable insights that turbocharged my store's growth. The
                    hands-on approach, real-life examples, and expert guidance
                    made all the difference.
                  </p>

                  <div class="flex gap-2 items-center">
                    <div class="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src={a1}
                        alt=""
                        class="w-full h-full objec-cover"
                      />
                    </div>

                    <div>
                      <p class="font-semibold mb-0">Darlene Robertson</p>
                      <span class="opacity-70 text-14 font-medium">
                        Marketing Coordinator
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-single relative p-[40px] rounded-3xl">
                  <p class="mb-4">
                    This course provided a clear and step-by-step roadmap that
                    demystified the entire process. From crafting a compelling
                    product page to mastering marketing strategies, I gained
                    valuable insights that turbocharged my store's growth. The
                    hands-on approach, real-life examples, and expert guidance
                    made all the difference.
                  </p>

                  <div class="flex gap-2 items-center">
                    <div class="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src={a1}
                        alt=""
                        class="w-full h-full objec-cover"
                      />
                    </div>

                    <div>
                      <p class="font-semibold mb-0">Darlene Robertson</p>
                      <span class="opacity-70 text-14 font-medium">
                        Marketing Coordinator
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-single relative p-[40px] rounded-3xl">
                  <p class="mb-4">
                    This course provided a clear and step-by-step roadmap that
                    demystified the entire process. From crafting a compelling
                    product page to mastering marketing strategies, I gained
                    valuable insights that turbocharged my store's growth. The
                    hands-on approach, real-life examples, and expert guidance
                    made all the difference.
                  </p>

                  <div class="flex gap-2 items-center">
                    <div class="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src={a1}
                        alt=""
                        class="w-full h-full objec-cover"
                      />
                    </div>

                    <div>
                      <p class="font-semibold mb-0">Darlene Robertson</p>
                      <span class="opacity-70 text-14 font-medium">
                        Marketing Coordinator
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-single relative p-[40px] rounded-3xl">
                  <p class="mb-4">
                    This course provided a clear and step-by-step roadmap that
                    demystified the entire process. From crafting a compelling
                    product page to mastering marketing strategies, I gained
                    valuable insights that turbocharged my store's growth. The
                    hands-on approach, real-life examples, and expert guidance
                    made all the difference.
                  </p>

                  <div class="flex gap-2 items-center">
                    <div class="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src={a1}
                        alt=""
                        class="w-full h-full objec-cover"
                      />
                    </div>

                    <div>
                      <p class="font-semibold mb-0">Darlene Robertson</p>
                      <span class="opacity-70 text-14 font-medium">
                        Marketing Coordinator
                      </span>
                    </div>
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

export default Test5;
