import React from 'react';
import mi from '../../asset/masterclass-img.webp';
import ci from '../../asset/course-img.webp';
import c from '../../asset/cultured-pattern-light.svg';
import p from '../../asset/polygon.svg';


function Course6() {

  return (
    <main>
    <section className="section-pad !pt-0 lg:!pt-[80px]" id="course">
        <div className="container">
          <div
            className="pb-[140px] lg:pb-[104px] pt-[56px] lg:pt-[72px] bg-secondary6 rounded-none mx-[-16px] lg:mx-auto lg:rounded-3xl relative"
          >
            <img
              src={c}
              alt=""
              className="absolute top-0 left-0"
            />
            <img
              src={p}
              alt=""
              className="absolute top-0 right-0"
            />
            <div
              className="text-white text-center font-semibold font-melodrama text-32 lg:text-[56px] leading-[1.1]"
            >
              <span className="mr-1">
              Start your
              </span>
              <span className="text-primary6">Journey!</span>
            </div>
            <div
              className="md:max-w-[563px] text-center mx-auto mt-2 text-16 leading-[1.6]"
            >
              <span className="text-white">Start your journey towards Creating Content and Building
              Businesses now.</span>
            </div>
          </div>
          <div className="max-w-[1030px] mx-auto relative">
            <div
              className="bg-primary6 mt-[-80px] lg:mt-[-40px] rounded-tr-3xl rounded-tl-3xl overflow-hidden px-2 lg:pl-[40px] lg:pr-[85px] pt-2 lg:pt-[40px] pb-[40px] lg:pb-[56px] flex items-center lg:flex-row flex-col gap-[30px] lg:gap-5"
            >
              <div className="lg:w-2/5 w-full bg-white rounded-[20px]">
                <img
                  className="w-full"
                  src={mi}
                  alt=""
                />
                <div className="pt-[20px] pb-3 px-2 lg:px-3">
                  <div
                    className="text-secondary/70 text-12 lg:text-14 leading-[1.71]"
                  >
                    Full course Price
                  </div>
                  <div className="flex items-center mt-[4px] mb-2 lg:mb-3">
                    <div
                      className="text-24 lg:text-32 leading-[1.25] font-bold text-secondary"
                    >
                      $12,000
                    </div>
                    <div
                      className="text-14 lg:text-16 text-secondary/40 line-through mx-[12px] lg:mx-2"
                    >
                      $14,000
                    </div>
                    <div
                      className="bg-orange rounded-[29px] py-[2px] ml-auto px-[12px] text-12 lg:text-14 leading-[1.7] font-bold text-white"
                    >
                      20% off
                    </div>
                  </div>
                  <ul className="list-check-dark">
                    <li className="mb-1">
                      1 month Trial at <span className="text-primary6">$1000</span>
                    </li>
                    <li className="mb-0">No cost EMI available from $200/mo</li>
                  </ul>
                  <a
                    href="#!"
                    className="button chevron-light button-darkgreen w-full mt-3 lg:mt-4"
                    >Buy Masterclass</a
                  >
                </div>
              </div>
              <div className="lg:w-3/5 w-full text-secondary">
                <div
                  className="opacity-70 text-14 lg:text-16 leading-[1.6] tracking-[2px] font-bold"
                >
                  MASTERCLASS
                </div>
                <div
                  className="mt-1 lg:mt-[20px] mb-2 lg:mb-[18px] font-extrabold text-20 lg:text-32 leading-[1.5] lg:leading-[1.25] tracking-[-0.08px] lg:tracking-[-0.128px]"
                >
                  Learn the Fundamentals of Leadership and Business in 2 Hours
                </div>
                <div className="opacity-70 text-14 lg:text-16 leading-[1.5]">
                  Learning about leadership and business can be boring. We solve
                  that by making funny comics to help you learn how to save, how
                  business works, ways to grow, financial tips, and everything
                  else you need.
                </div>
                <div
                  className="text-16 leading-[1.5] font-bold tracking-[-0.064px] mt-[40px] lg:mt-5 mb-3"
                >
                  Get access to 50+ courses to help you with:
                </div>
                <div className="grid grid-cols-2">
                  <ul className="list-check-dark">
                    <li className="mb-[20px]">Unlimited Access</li>
                    <li className="mb-0">Video, Audio Available</li>
                  </ul>
                  <ul className="list-check-dark">
                    <li className="mb-[20px]">Learn at your own pace</li>
                    <li className="mb-0">Available in English, Hindi</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-1 bg-cultured"></div>
            <div
              className="py-[44px] px-[40px] bg-secondary6 text-white rounded-br-3xl rounded-bl-3xl"
            >
              <div
                className="flex items-center justify-between lg:flex-row flex-col"
              >
                <div className="flex items-center lg:flex-row flex-col">
                  <div className="text-16 leading-[1.62] font-bold lg:mr-2">
                  <span className="text-white"> Get </span><span className="text-orange">20% Off</span> <span className="text-white">on this course</span>
                  </div>
                  <div
                    className="bg-orange text-14 leading-[1.7] font-bold py-[2px] px-[12px] rounded-[29px] mt-[6px] lg:mt-0 mb-[20px] lg:mb-0"
                  >
                    LIMITED TIME OFFER
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center font-melodrama">
                    <div className="flex flex-col items-center">
                      <div
                        className="text-24 md:text-32 leading-none font-bold mb-[2px] md:mb-[1px] days-container"
                      >
                        00
                      </div>
                      <div className="text-14 opacity-60 font-medium">Days</div>
                    </div>
                    <svg
                      className="mx-[22px] lg:mx-[20px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                    >
                      <circle cx="2.66699" cy="3" r="2.5" fill="#FB7C28" />
                    </svg>
                    <div className="flex flex-col items-center">
                      <div
                        className="text-24 md:text-32 leading-none font-bold mb-[2px] md:mb-[1px] hours-container"
                      >
                        00
                      </div>
                      <div className="text-14 opacity-60 font-medium">Hours</div>
                    </div>
                    <svg
                      className="mx-[22px] lg:mx-[20px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                    >
                      <circle cx="2.66699" cy="3" r="2.5" fill="#FB7C28" />
                    </svg>
                    <div className="flex flex-col items-center">
                      <div
                        className="text-24 md:text-32 leading-none font-bold mb-[2px] md:mb-[1px] minutes-container"
                      >
                        00
                      </div>
                      <div className="text-14 opacity-60 font-medium">Mins</div>
                    </div>
                    <svg
                      className="mx-[22px] lg:mx-[20px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                    >
                      <circle cx="2.66699" cy="3" r="2.5" fill="#FB7C28" />
                    </svg>
                    <div className="flex flex-col items-center">
                      <div
                        className="text-24 md:text-32 leading-none font-bold mb-[2px] md:mb-[1px] seconds-container"
                      >
                        00
                      </div>
                      <div className="text-14 opacity-60 font-medium">Secs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mt-4 bg-secondary6 rounded-3xl overflow-hidden px-2 lg:pr-[40px] lg:pl-[64px] pt-2 lg:pt-[40px] pb-[40px] lg:pb-[56px] flex items-center lg:flex-row flex-col-reverse gap-[30px] lg:gap-5"
            >
              <div className="lg:w-3/5 w-full text-white">
                <div
                  className="opacity-70 text-14 lg:text-16 leading-[1.6] tracking-[2px] font-bold"
                >
                  COURSE
                </div>
                <div
                  className="mt-1 lg:mt-[20px] mb-2 lg:mb-[18px] font-extrabold text-20 lg:text-32 leading-[1.25] tracking-[-0.128px]"
                >
                  Hack your Wealth Journey with Business 101
                </div>
                <div className="opacity-70 text-14 lg:text-16 leading-[1.5]">
                  Learning about leadership and business can be boring. We solve
                  that by making funny comics to help you learn how to save, how
                  business works, ways to grow, financial tips, and everything
                  else you need.
                </div>
                <div
                  className="text-16 leading-[1.5] font-bold mt-[40px] lg:mt-5 mb-3"
                >
                  <span className="text-white">
                  Get access to 50+ courses to help you with:
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <ul className="list-check-light">
                    <li className="mb-[20px]">Unlimited Access</li>
                    <li className="mb-0">Video, Audio Available</li>
                  </ul>
                  <ul className="list-check-light">
                    <li className="mb-[20px]">Learn at your own pace</li>
                    <li className="mb-0">Available in English, Hindi</li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-2/5 w-full bg-white rounded-[20px]">
                <img className="w-full" src={ci} alt="" />
                <div className="pt-[20px] pb-3 px-2 lg:px-3">
                  <div
                    className="text-secondary/70 text-12 lg:text-14 leading-[1.71]"
                  >
                    Full course Price
                  </div>
                  <div className="flex items-center mt-[4px] mb-2 lg:mb-3">
                    <div
                      className="text-24 lg:text-32 leading-[1.66] lg:leading-[1.25] font-bold text-secondary"
                    >
                      $2,000
                    </div>
                    <div
                      className="text-14 lg:text-16 text-secondary/40 line-through mx-[12px] lg:mx-2"
                    >
                      $10,000
                    </div>
                    <div
                      className="bg-orange ml-auto lg:ml-0 rounded-[29px] py-[2px] px-[12px] text-14 leading-[1.7] font-bold text-white"
                    >
                      80% off
                    </div>
                  </div>
                  <ul className="list-check-dark">
                    <li className="mb-1">
                      1 month Trial at <span className="text-primary6">$1000</span>
                    </li>
                    <li className="mb-0">No cost EMI available from $200/mo</li>
                  </ul>
                  <a
                    href="#!"
                    className="button chevron-light button-darkgreen w-full mt-4"
                    >Buy Course</a
                  >
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[20px] mt-4">
              <div
                className="px-2 lg:px-4 py-4 lg:pb-3 lg:pt-5 bg-cultured rounded-3xl text-secondary relative"
              >
                <div className="absolute bottom-[30%] right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="104"
                    height="75"
                    viewBox="0 0 104 75"
                    fill="none"
                  >
                    <rect
                      x="35"
                      width="22.3102"
                      height="22.3102"
                      fill="#002E33"
                      fillOpacity="0.25"
                    />
                    <rect
                      x="57.3125"
                      y="22.3105"
                      width="30.3798"
                      height="30.3798"
                      fill="#002E33"
                      fillOpacity="0.15"
                    />
                    <rect
                      x="87.6875"
                      y="6.38086"
                      width="15.93"
                      height="15.93"
                      fill="#002E33"
                      fillOpacity="0.15"
                    />
                    <rect
                      y="46"
                      width="18.5127"
                      height="18.5127"
                      fill="#002E33"
                      fillOpacity="0.15"
                    />
                    <rect
                      x="18.5117"
                      y="63.0879"
                      width="10.9177"
                      height="10.9177"
                      fill="#002E33"
                      fillOpacity="0.45"
                    />
                  </svg>
                </div>
                <div
                  className="text-20 lg:text-24 leading-[1.33] tracking-[-0.096px] font-bold"
                >
                  Accelerate Your Business with Instagram
                </div>
                <div
                  className="mt-2 lg:mt-1 mb-[40px] lg:mb-5 opacity-70 text-14 lg:text-16 leading-[1.5]"
                >
                  Learning about leadership and business can be boring. We solve
                  that by making funny comics.
                </div>
                <div className="flex items-center gap-[12px] lg:gap-2">
                  <div
                    className="text-orange text-24 lg:text-32 leading-[1.6] lg:leading-[1.25] font-bold"
                  >
                    $2,000
                  </div>
                  <div className="opacity-40 text-14 lg:text-16 line-through">
                    $3,000
                  </div>
                </div>
                <div className="text-12 lg:text-14 leading-[1.7] mt-[4px]">
                  EMI starts from $100/mo
                </div>
                <a
                  href="#!"
                  className="button chevron button-green w-full mt-4 lg:mt-[40px]"
                  >Buy Course</a
                >
              </div>
              <div
                className="px-2 lg:px-4 py-4 lg:pb-3 lg:pt-5 bg-cultured rounded-3xl text-secondary relative"
              >
                <div className="absolute bottom-[30%] right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="104"
                    height="75"
                    viewBox="0 0 104 75"
                    fill="none"
                  >
                    <rect
                      x="35"
                      width="22.3102"
                      height="22.3102"
                      fill="#002E33"
                      fillOpacity="0.25"
                    />
                    <rect
                      x="57.3125"
                      y="22.3105"
                      width="30.3798"
                      height="30.3798"
                      fill="#002E33"
                      fillOpacity="0.15"
                    />
                    <rect
                      x="87.6875"
                      y="6.38086"
                      width="15.93"
                      height="15.93"
                      fill="#002E33"
                      fillOpacity="0.15"
                    />
                    <rect
                      y="46"
                      width="18.5127"
                      height="18.5127"
                      fill="#002E33"
                      fillOpacity="0.15"
                    />
                    <rect
                      x="18.5117"
                      y="63.0879"
                      width="10.9177"
                      height="10.9177"
                      fill="#002E33"
                      fillOpacity="0.45"
                    />
                  </svg>
                </div>
                <div
                  className="text-20 lg:text-24 leading-[1.33] tracking-[-0.096px] font-bold"
                >
                  Accelerate Your Business with Instagram
                </div>
                <div
                  className="mt-2 lg:mt-1 mb-[40px] lg:mb-5 opacity-70 text-14 lg:text-16 leading-[1.5]"
                >
                  Learning about leadership and business can be boring. We solve
                  that by making funny comics.
                </div>
                <div className="flex items-center gap-[12px] lg:gap-2">
                  <div
                    className="text-orange text-24 lg:text-32 leading-[1.6] lg:leading-[1.25] font-bold"
                  >
                    $1,000
                  </div>
                  <div className="opacity-40 text-14 lg:text-16 line-through">
                    $2,000
                  </div>
                </div>
                <div className="text-12 lg:text-14 leading-[1.7] mt-[4px]">
                  EMI starts from $50/mo
                </div>
                <a
                  href="#!"
                  className="button chevron button-green w-full mt-4 lg:mt-[40px]"
                  >Buy Course</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Course6;
