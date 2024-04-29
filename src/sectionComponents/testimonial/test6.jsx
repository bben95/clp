import React, { useState} from 'react';
import c1 from '../../asset/customer1.png';
import c2 from '../../asset/customer2.png';
import c3 from '../../asset/customer3.png';
import s5 from '../../asset/5star.svg';
function Test6() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
    <section class="section-pad bg-white" id="testimonials">
        <div class="container">
          <div class="mb-[56px]">
            <div
              class="text-center font-semibold font-melodrama text-32 lg:text-[56px] leading-[1.2] lg:leading-[1.1]"
            >
              What our customers
              <span class="text-primary6">say</span>
            </div>
            <div
              class="opacity-70 md:max-w-[765px] text-center mx-auto mt-2 text-16 leading-[1.6]"
            >
              "Thank you for your trust in us! We are grateful for your feedback
              and are committed to providing the best. Read what our clients
              have to say about their experience with us.
            </div>
          </div>
          <div
            class="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-[20px] text-secondary"
          >
            <div class="flex flex-col gap-4 lg:gap-[20px]">
              <div
                class="rounded-2xl bg-cultured py-[40px] px-3 lg:pt-5 lg:pb-[40px] lg:pl-4 lg:pr-[45px]"
              >
                <div class="text-16 leading-[1.5] opacity-70">
                  Sahil delivered the site with in the timeline as they
                  requested. Inthe end, the client found a 50% increase in
                  traffic with in days since its launch. They also had an
                  impressive ability to use technologies that the company hasn`t
                  used, which have also proved to be easy to use and reliable.
                </div>
                <div
                  class="flex mt-5 lg:mt-[117px] gap-2 lg:gap-[14px] items-center"
                >
                  <img
                    src={c1}
                    alt=""
                    class="w-5 lg:w-[56px] h-5 lg:h-[56px]"
                  />
                  <div class="flex flex-col">
                    <div class="text-20 tracking-[-0.5px] font-semibold">
                      Ashley Cooper
                    </div>
                    <img
                      src={s5}
               class="flex-shrink-0 mt-1 w-[85px] lg:mt-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                class="rounded-2xl bg-cultured py-[40px] px-3 lg:pt-5 lg:pb-[40px] lg:pl-4 lg:pr-[45px]"
              >
                <div class="text-16 leading-[1.5] opacity-70">
                  Sahil delivered the site with in the timeline as they
                  requested. Inthe end, the client found a 50% increase in
                  traffic with in days since its launch.
                </div>
                <div class="flex mt-5 lg:mt-[117px] gap-[14px] items-center">
                  <img
                    src={c2}
                    alt=""
                    class="w-5 lg:w-[56px] h-5 lg:h-[56px]"
                  />
                  <div class="flex flex-col">
                    <div class="text-20 tracking-[-0.5px] font-semibold">
                      Gabrile Jackson
                    </div>
                    <img
                      src={s5}
                      class="flex-shrink-0 mt-1 w-[85px] lg:mt-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-4 lg:gap-[20px]">
              <div
                class="rounded-2xl bg-cultured py-[40px] px-3 lg:pt-5 lg:pb-[40px] lg:pl-4 lg:pr-[45px]"
              >
                <div class="text-16 leading-[1.5] opacity-70">
                  Sahil delivered the site with in the timeline as they
                  requested. Inthe end, the client found a 50% increase in
                  traffic with in days since its launch.
                </div>
                <div class="flex mt-5 lg:mt-[117px] gap-[14px] items-center">
                  <img
                    src={c3}
                    alt=""
                    class="w-5 lg:w-[56px] h-5 lg:h-[56px]"
                  />
                  <div class="flex flex-col">
                    <div class="text-20 tracking-[-0.5px] font-semibold">
                      Noah Jack
                    </div>
                    <img
                      src={s5}
                      class="flex-shrink-0 mt-1 w-[85px] lg:mt-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                class="rounded-2xl bg-cultured py-[40px] px-3 lg:pt-5 lg:pb-[40px] lg:pl-4 lg:pr-[45px]"
              >
                <div class="text-16 leading-[1.5] opacity-70">
                  Sahil delivered the site with in the timeline as they
                  requested. Inthe end, the client found a 50% increase in
                  traffic with in days since its launch. They also had an
                  impressive ability to use technologies that the company hasn`t
                  used, which have also proved to be easy to use and reliable.
                </div>
                <div class="flex mt-5 lg:mt-[117px] gap-[14px] items-center">
                  <img
                    src={c1}
                    alt=""
                    class="w-5 lg:w-[56px] h-5 lg:h-[56px]"
                  />
                  <div class="flex flex-col">
                    <div class="text-20 tracking-[-0.5px] font-semibold">
                      Ashley Cooper
                    </div>
                    <img
                      src={s5}
                      class="flex-shrink-0 mt-1 w-[85px] lg:mt-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-4 lg:gap-[20px]">
              <div
                class="rounded-2xl bg-cultured py-[40px] px-3 lg:pt-5 lg:pb-[40px] lg:pl-4 lg:pr-[45px]"
              >
                <div class="text-16 leading-[1.5] opacity-70">
                  Sahil delivered the site with in the timeline as they
                  requested. Inthe end, the client found a 50% increase in
                  traffic with in days since its launch. They also had an
                  impressive ability to use technologies that the company hasn`t
                  used, which have also proved to be easy to use and reliable.
                </div>
                <div class="flex mt-5 lg:mt-[117px] gap-[14px] items-center">
                  <img
                    src={c1}
                    alt=""
                    class="w-5 lg:w-[56px] h-5 lg:h-[56px]"
                  />
                  <div class="flex flex-col">
                    <div class="text-20 tracking-[-0.5px] font-semibold">
                      Ashley Cooper
                    </div>
                    <img
                      src={s5}
                      class="flex-shrink-0 mt-1 w-[85px] lg:mt-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                class="rounded-2xl bg-cultured py-[40px] px-3 lg:pt-5 lg:pb-[40px] lg:pl-4 lg:pr-[45px]"
              >
                <div class="text-16 leading-[1.5] opacity-70">
                  Sahil delivered the site with in the timeline as they
                  requested. Inthe end, the client found a 50% increase in
                  traffic with in days since its launch.
                </div>
                <div class="flex mt-5 lg:mt-[117px] gap-[14px] items-center">
                  <img
                    src={c2}
                    alt=""
                    class="w-5 lg:w-[56px] h-5 lg:h-[56px]"
                  />
                  <div class="flex flex-col">
                    <div class="text-20 tracking-[-0.5px] font-semibold">
                      Gabrile Jackson
                    </div>
                    <img
                      src={s5}
                      class="flex-shrink-0 mt-1 w-[85px] lg:mt-0"
                      alt=""
                    />
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

export default Test6;
