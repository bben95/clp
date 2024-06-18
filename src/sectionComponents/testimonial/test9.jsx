import React from 'react';
import tm from '../../asset/testimonial-mobile.png';
import t1 from '../../asset/testimonial1.png';

function Test9() {

  return (
    <main>
       <section className="lg:py-[150px] pt-[80px] pb-[144px]" id="testimonials">
      <div className="container testimonials-container">
        <div className="flex lg:flex-row flex-col">
          <div className="t102">Why students love us so much</div>
          <h4 className="text-primary10 mt-[12px] lg:ml-4 text-24">// Testimonials</h4>
        </div>
        <div className="border border-b-0 mt-5 mb-[100px] lg:block hidden"></div>
        <div className="slider flex lg:gap-5 testimonials">
          <div
            className="bg-primary10 lg:gap-[30px] gap-[15px] mt-[180px] lg:mt-0 rounded-2xl rounded-br-[100px] py-[40px] px-[24px] !flex lg:flex-row flex-col">
            <div className="w-[45%] relative">
              <img src={t1} alt="" className="absolute bottom-[-40px] h-full lg:block hidden" />
              <img src={tm} alt="" className="m-auto mt-[-245px] h-full w-full lg:hidden block" />
            </div>
            <div className="lg:w-[55%] flex flex-col lg:gap-[58px] gap-3">
              <span className="text-20  leading-[21px] lg:leading-8 text-white font-sora font-semibold">This
                course provided a clear and
                step-by-step roadmap that
                demystified the entire process. From crafting a compelling
                product page to mastering marketing strategies.</span>
              <div>
                <p className="text-white font-semibold font-sora">
                  Darlene Robertson
                </p>
                <span className="text-white text-14 font-normal font-sora mt-1">Marketing Head</span>
              </div>
            </div>
          </div>
          <div
            className="bg-primary10 lg:gap-[30px] gap-[15px] mt-[180px] lg:mt-0 rounded-2xl rounded-br-[100px] py-[40px] px-[24px] !flex lg:flex-row flex-col">
            <div className="w-[45%] relative">
              <img src={t1} alt="" className="absolute bottom-[-40px] h-full lg:block hidden" />
              <img src={tm} alt="" className="m-auto mt-[-245px] h-full w-full lg:hidden block" />
            </div>
            <div className="lg:w-[55%] flex flex-col lg:gap-[58px] gap-3">
              <span className="text-20  leading-[21px] lg:leading-8 text-white font-sora font-semibold">This
                course provided a clear and
                step-by-step roadmap that
                demystified the entire process. From crafting a compelling
                product page to mastering marketing strategies.</span>
              <div>
                <p className="text-white font-semibold font-sora">
                  Darlene Robertson
                </p>
                <span className="text-white text-14 font-normal font-sora mt-1">Marketing Head</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}

export default Test9;
