import React from 'react';
import quotes from '../../asset/quotes.svg';
import sanchita from '../../asset/sanchita.svg';
import star from '../../asset/star.svg';
function Test2() {

  return (
    <main>
    <section className="" id="testimonials">
      <div className="container flex lg:flex-row flex-col lg:gap-[24px] gap-2  testimonials-container">
        <div className="lg:w-[30%] w-full">
          <div className="bg-olive/20 w-fit rounded-lg lg:mb-2 mb-1">
            <p className="text-olive pt-1 pb-[4px] px-3">Testimonials</p>
          </div>
          <div className="t22">What our customers say ?</div>
          <div className="t62 text-secondary/70 lg:mt-3 mt-2 pr-[36px] lg:pr-0 font-normal">See what ours customers have say
            about our services</div>
        </div>
        <div className="slider flex  sm:gap-[20px] lg:w-[67%] w-full mt-[60px] lg:mt-0">
          <div className="lg:w-1/3 !w-full ">
            <div className="bg-lightOlive p-3 rounded-xl">
              <img src={quotes} className="mb-[12px]" />
              <p className="text-secondary/60 lg:text-16 text-14">
                I can't speak highly enough about the Finance Course I recently
                completed.
              </p>
              <br/>
              <p className="text-secondary/60 lg:text-16 text-14">It has been an incredibly enriching and eye-opening
                journey that has transformed my understanding of finance and how
                to manage my money effectively.From the outset, the course
                structure was well-organized, and the content was presented in a
                clear manner .</p>
              <div className="border border-b-0 mt-4 mb-2 border-[#54808833]"></div>
              <div className="flex justify-between">
                <div className="flex">
                  <img src={sanchita} alt="" className="mr-[12px]"/>
                  <div>
                    <p className="text-secondary/70 font-bold text-16 ">Sanchita Gupta</p>
                    <span className="text-14 text-secondary/70 font-normal">Bcom Student</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 !w-full ">
            <div className="bg-lightOlive p-3 rounded-xl">
              <img src={quotes} className="mb-[12px]" />
              <p className="text-secondary/60 lg:text-16 text-14">
                I can't speak highly enough about the Finance Course I recently
                completed.
              </p>
              <br/>
              <p className="text-secondary/60 lg:text-16 text-14">It has been an incredibly enriching and eye-opening
                journey that has transformed my understanding of finance and how
                to manage my money effectively.From the outset, the course
                structure was well-organized, and the content was presented in a
                clear manner .</p>
              <div className="border border-b-0 mt-4 mb-2 border-[#54808833]"></div>
              <div className="flex justify-between">
                <div className="flex">
                  <img src={sanchita} alt="" className="mr-[12px]"/>
                  <div>
                    <p className="text-secondary/70 font-bold text-16 ">Sanchita Gupta</p>
                    <span className="text-14 text-secondary/70 font-normal">Bcom Student</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 !w-full ">
            <div className="bg-lightOlive p-3 rounded-xl">
              <img src={quotes} className="mb-[12px]" />
              <p className="text-secondary/60 lg:text-16 text-14">
                I can't speak highly enough about the Finance Course I recently
                completed.
              </p>
              <br/>
              <p className="text-secondary/60 lg:text-16 text-14">It has been an incredibly enriching and eye-opening
                journey that has transformed my understanding of finance and how
                to manage my money effectively.From the outset, the course
                structure was well-organized, and the content was presented in a
                clear manner .</p>
              <div className="border border-b-0 mt-4 mb-2 border-[#54808833]"></div>
              <div className="flex justify-between">
                <div className="flex">
                  <img src={sanchita} alt="" className="mr-[12px]"/>
                  <div>
                    <p className="text-secondary/70 font-bold text-16 ">Sanchita Gupta</p>
                    <span className="text-14 text-secondary/70 font-normal">Bcom Student</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
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

export default Test2;
