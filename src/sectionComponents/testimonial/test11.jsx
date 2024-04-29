import React, { useState} from 'react';
import tt from '../../asset/testimonial-thumb.jpg';

function Test11() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
     <section class="section-pad overflow-hidden" id="testimonials">
        <div class="container">
          <div class="text-center mb-7">
            <div class="font-heading stroke-text opacity-20">Testimonials</div>

            <h2 class="heading bg-white relative max-w-[860px] mx-auto">
              See what our students tell about us
            </h2>
          </div>

          <div class="slider-overflow-visible center-controls">
            <div class="testimonial-slider">
              <div class="item">
                <div class="bg-lightyellow flex md:h-full flex-wrap">
                  <div
                    class="w-full md:w-2/5 overflow-hidden h-[200px] md:h-auto"
                  >
                    <img
                      src={tt}
                      alt=""
                      class="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div
                    class="w-full md:w-3/5 pt-5 p-2 md:px-4 md:pt-6 md:pb-3 relative"
                  >
                    <div
                      class="absolute -top-3 md:-top-4 left-2 md:left-4 w-6 md:w-auto"
                    >
                      <svg
                        class="w-full h-auto"
                        width="75"
                        height="56"
                        viewBox="0 0 75 56"
                        fill="none"
                      >
                        <path
                          d="M23.55 9.6 28.2.4h-9.3C8.623.4.3 13.234.3 23.4v32.2h32.55V23.4h-18.6c0-13.8 9.3-13.8 9.3-13.8ZM56.1 23.4c0-13.8 9.3-13.8 9.3-13.8L70.05.4h-9.3c-10.277 0-18.6 12.834-18.6 23v32.2H74.7V23.4H56.1Z"
                          fill="#B51111"
                        />
                      </svg>
                    </div>

                    <p class="mb-0 font-medium">
                      This course provided a clear and step-by-step roadmap that
                      demystified the entire process. From crafting a compelling
                      product page to mastering marketing strategies, I gained
                      valuable insights that turbocharged my store's growth. The
                      hands-on approach, real-life examples, and expert guidance
                      made all the difference.
                    </p>

                    <div class="pt-4 md:pt-6">
                      <p class="font-semibold">
                        Darlene Robertson

                        <span class="font-normal block"
                          >Marketing Coordinator</span
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="bg-lightyellow flex md:h-full flex-wrap">
                  <div
                    class="w-full md:w-2/5 overflow-hidden h-[200px] md:h-auto"
                  >
                    <img
                      src={tt}
                      alt=""
                      class="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div
                    class="w-full md:w-3/5 pt-5 p-2 md:px-4 md:pt-6 md:pb-3 relative"
                  >
                    <div
                      class="absolute -top-3 md:-top-4 left-2 md:left-4 w-6 md:w-auto"
                    >
                      <svg
                        class="w-full h-auto"
                        width="75"
                        height="56"
                        viewBox="0 0 75 56"
                        fill="none"
                      >
                        <path
                          d="M23.55 9.6 28.2.4h-9.3C8.623.4.3 13.234.3 23.4v32.2h32.55V23.4h-18.6c0-13.8 9.3-13.8 9.3-13.8ZM56.1 23.4c0-13.8 9.3-13.8 9.3-13.8L70.05.4h-9.3c-10.277 0-18.6 12.834-18.6 23v32.2H74.7V23.4H56.1Z"
                          fill="#B51111"
                        />
                      </svg>
                    </div>

                    <p class="mb-0 font-medium">
                      This course provided a clear and step-by-step roadmap that
                      demystified the entire process. From crafting a compelling
                      product page to mastering marketing strategies, I gained
                      valuable insights that turbocharged my store's growth. The
                      hands-on approach, real-life examples, and expert guidance
                      made all the difference.
                    </p>

                    <div class="pt-4 md:pt-6">
                      <p class="font-semibold">
                        Darlene Robertson

                        <span class="font-normal block"
                          >Marketing Coordinator</span
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="bg-lightyellow flex md:h-full flex-wrap">
                  <div
                    class="w-full md:w-2/5 overflow-hidden h-[200px] md:h-auto"
                  >
                    <img
                      src={tt}
                      alt=""
                      class="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div
                    class="w-full md:w-3/5 pt-5 p-2 md:px-4 md:pt-6 md:pb-3 relative"
                  >
                    <div
                      class="absolute -top-3 md:-top-4 left-2 md:left-4 w-6 md:w-auto"
                    >
                      <svg
                        class="w-full h-auto"
                        width="75"
                        height="56"
                        viewBox="0 0 75 56"
                        fill="none"
                      >
                        <path
                          d="M23.55 9.6 28.2.4h-9.3C8.623.4.3 13.234.3 23.4v32.2h32.55V23.4h-18.6c0-13.8 9.3-13.8 9.3-13.8ZM56.1 23.4c0-13.8 9.3-13.8 9.3-13.8L70.05.4h-9.3c-10.277 0-18.6 12.834-18.6 23v32.2H74.7V23.4H56.1Z"
                          fill="#B51111"
                        />
                      </svg>
                    </div>

                    <p class="mb-0 font-medium">
                      This course provided a clear and step-by-step roadmap that
                      demystified the entire process. From crafting a compelling
                      product page to mastering marketing strategies, I gained
                      valuable insights that turbocharged my store's growth. The
                      hands-on approach, real-life examples, and expert guidance
                      made all the difference.
                    </p>

                    <div class="pt-4 md:pt-6">
                      <p class="font-semibold">
                        Darlene Robertson

                        <span class="font-normal block"
                          >Marketing Coordinator</span
                        >
                      </p>
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

export default Test11;