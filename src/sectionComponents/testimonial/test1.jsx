import React from 'react';
import ankit from '../../asset/ankit.png';
import s4 from '../../asset/4star-rating.svg';
import hearts from '../../asset/hearts.svg';
function Test1() {

  return (
    <main>
    <section
        className="md:py-[60px] pt-4 pb-5 overflow-hidden testimonial-container scrollspy-section"
        id="testimonials"
      >
        <div className="container">
          <div
            className="py-[10px] px-[26px] text-16 leading-none font-semibold text-primary border border-primary/[0.32] inline-block"
          >
            Testimonials
          </div>
          <div
            className="text-xl md:text-4xl mt-2 mb-3 md:mb-[40px] text-secondary"
          >
            See what our <br className="inline-block" />students tell
            about us
            <img
              src={hearts}
              alt="hearts"
              loading="lazy"
              width="38"
              height="35"
              className="inline-block ml-[2px] md:ml-[10px] w-[38px] h-[35px]"
            />
          </div>
          <div className="testimonial-slider">
            <div className="item">
              <div
                className="pt-[20px] pb-[45px] md:py-4 px-[20px] md:px-4 w-full rounded-lg shadow-xl"
              >
                <img
                  src={s4}
                  width="116"
                  height="26"
                  loading="lazy"
                  alt="4star-rating"
                />
                <div
                  className="text-16 mt-[25px] md:mt-[22px] leading-[1.62] font-normal text-secondary"
                >
                  It was a great experience having Harkirat sir as a mentor,
                  Thank you sir for
                  <span className="text-white font-medium bg-primary"
                    >teaching DSA concepts in graspable manner</span
                  >
                  and supporting us through the course.
                </div>
                <div className="flex items-center mt-[40px] md:mt-[86px]">
                  <img
                    src={ankit}
                    alt="ankit sharma"
                    loading="lazy"
                    width="56"
                    height="56"
                    className="mr-[19px]"
                  />
                  <div>
                    <div
                      className="text-base font-semibold text-secondary mb-[6px]"
                    >
                      Ankit Sharma
                    </div>
                    <div className="text-sm22 text-darkgrey/60">
                      3rd Year, IIT Delhi
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="py-4 px-4 w-full rounded-lg shadow-xl">
                <img
                  src={s4}
                  width="116"
                  height="26"
                  loading="lazy"
                  alt="4star-rating"
                />
                <div
                  className="text-16 mt-[22px] leading-[1.62] font-normal text-secondary"
                >
                  It was a great experience having Harkirat sir as a mentor,
                  Thank you sir for
                  <span className="text-white font-medium bg-primary"
                    >teaching DSA concepts in graspable manner</span
                  >
                  and supporting us through the course.
                </div>
                <div className="flex items-center mt-[40px] md:mt-[86px]">
                  <img
                    src={ankit}
                    alt="ankit sharma"
                    loading="lazy"
                    width="56"
                    height="56"
                    className="mr-[19px]"
                  />
                  <div>
                    <div
                      className="text-base font-semibold text-secondary mb-[6px]"
                    >
                      Ankit Sharma
                    </div>
                    <div className="text-sm22 text-darkgrey/60">
                      3rd Year, IIT Delhi
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="py-4 px-4 w-full rounded-lg shadow-xl">
                <img
                  src={s4}
                  width="116"
                  height="26"
                  loading="lazy"
                  alt="4star-rating"
                />
                <div
                  className="text-16 mt-[22px] leading-[1.62] font-normal text-secondary"
                >
                  It was a great experience having Harkirat sir as a mentor,
                  Thank you sir for
                  <span className="text-white font-medium bg-primary"
                    >teaching DSA concepts in graspable manner</span
                  >
                  and supporting us through the course.
                </div>
                <div className="flex items-center mt-[40px] md:mt-[86px]">
                  <img
                    src={ankit}
                    alt="ankit sharma"
                    loading="lazy"
                    width="56"
                    height="56"             
                    className="mr-[19px]"
                  />
                  <div>
                    <div
                      className="text-base font-semibold text-secondary mb-[6px]"
                    >
                      Ankit Sharma
                    </div>
                    <div className="text-sm22 text-darkgrey/60">
                      3rd Year, IIT Delhi
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

export default Test1;
