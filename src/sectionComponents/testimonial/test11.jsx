import React from 'react';
import tt from '../../asset/testimonial-thumb.jpg';

function Test11() {
  return (
    <main>
      <section className="section-pad overflow-hidden" id="testimonials">
        <div className="container">
          <div className="text-center mb-7">
            <div className="font-heading stroke-text opacity-20">Testimonials</div>
            <h2 className="heading bg-white relative max-w-[860px] mx-auto">
              See what our students tell about us
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="testimonial-item w-full md:w-1/2 lg:w-1/3 p-2">
              <div className="bg-lightyellow flex flex-col h-full">
                <div className="overflow-hidden h-[200px]">
                  <img
                    src={tt}
                    alt=""
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-4 relative flex-grow">
                  <div className="absolute -top-3 left-4 w-6 md:w-auto">
                    <svg
                      className="w-full h-auto"
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
                  <p className="mb-0 font-medium">
                    This course provided a clear and step-by-step roadmap that
                    demystified the entire process. From crafting a compelling
                    product page to mastering marketing strategies, I gained
                    valuable insights that turbocharged my store's growth. The
                    hands-on approach, real-life examples, and expert guidance
                    made all the difference.
                  </p>
                  <div className="pt-4">
                    <p className="font-semibold">
                      Darlene Robertson
                      <span className="font-normal block">Marketing Coordinator</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-item w-full md:w-1/2 lg:w-1/3 p-2">
              <div className="bg-lightyellow flex flex-col h-full">
                <div className="overflow-hidden h-[200px]">
                  <img
                    src={tt}
                    alt=""
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-4 relative flex-grow">
                  <div className="absolute -top-3 left-4 w-6 md:w-auto">
                    <svg
                      className="w-full h-auto"
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
                  <p className="mb-0 font-medium">
                    This course provided a clear and step-by-step roadmap that
                    demystified the entire process. From crafting a compelling
                    product page to mastering marketing strategies, I gained
                    valuable insights that turbocharged my store's growth. The
                    hands-on approach, real-life examples, and expert guidance
                    made all the difference.
                  </p>
                  <div className="pt-4">
                    <p className="font-semibold">
                      Darlene Robertson
                      <span className="font-normal block">Marketing Coordinator</span>
                    </p>
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
