import React from 'react';
import f1 from '../../asset/faang1-mweb.webp';
import f11 from '../../asset/faang1.webp';
import f3 from '../../asset/faang3.webp';
import f2 from '../../asset/faang2.webp';
import f4 from '../../asset/faang4.webp';
import youtube from '../../asset/youtube.svg';
import twitter from '../../asset/twitter.svg';
import instagram from '../../asset/instagram.svg';
function About1() {
  return (
    <main>
    <section className="pt-5 md:pt-[140px] pb-6 md:pb-[100px] scrollspy-section" id="about">
        <div className="container">
          <div className="flex justify-between md:flex-row flex-col-reverse">
            <div className="w-full md:w-2/5 mr-4">
              <picture>
                <source
                  media="(min-width:768px)"
                  srcSet={f11}
                  width="505"
                  height="800"
                />
                <img
                  src={f1}
                  width="343"
                  height="400"
                  className="mx-auto w-full"
                  alt="faang1mweb"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="w-full md:w-1/2">
              <div
                className="py-[10px] px-[26px] text-16 leading-none font-semibold text-primary border border-primary/[0.32] inline-block"
              >
                About the creator
              </div>
              <h2
                className="mt-2 md:mb-4 text-xl tracking-[-0.5px] md:text-4xl text-secondary"
              >
                Conquered Google's Summer of Code Twice and Thrived at FAANG
              </h2>
              <div className="md:block">
                <p className="text-base text-black">
                  Embark on a transformative journey into the world of
                  technology and career exploration alongside Rishabh, a
                  distinguished 2018 Computer Science graduate from the
                  prestigious IIT Roorkee.
                </p>
                <p className="text-base text-secondary/80">
                  With an impressive track record, Rishabh has not only been
                  part of Google's illustrious Summer of Code not once, but
                  twice, but has also honed his skills across the realms of
                  FAANG (Facebook, Apple, Amazon, Netflix, Google), Finance, and
                  the thriving Startup scene in the four years since his
                  graduation.
                </p>
                <div className="flex">
                  <div className="flex items-center mr-5 flex-shrink">
                    <img
                      className="w-4 md:w-[36px]"
                      loading="lazy"
                      width="36"
                      height="36"
                      src={youtube}
                      alt="youtube"
                    />
                    <p
                      className="mb-0 ml-[12px] text-24 md:text-32 leading-[1.3] md:leading-[1.5] font-bold"
                    >
                      234k
                    </p>
                  </div>
                  <div className="flex items-center mr-5 flex-shrink">
                    <img
                      className="w-4 md:w-[36px]"
                      loading="lazy"
                      width="36"
                      height="36"
                      src={instagram}
                      alt="instagram"
                    />
                    <p
                      className="mb-0 ml-[12px] text-24 md:text-32 leading-[1.3] md:leading-[1.5] font-bold"
                    >
                      234k
                    </p>
                  </div>
                  <div className="flex items-center flex-shrink-0">
                    <img
                      className="w-4 md:w-[36px]"
                      loading="lazy"
                      width="36"
                      height="36"
                      src={twitter}
                      alt="twitter"
                    />
                    <p
                      className="mb-0 ml-[12px] text-24 md:text-32 leading-[1.3] md:leading-[1.5] font-bold"
                    >
                      234k
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden block mt-4">
            <p className="text-base text-secondary/80">
              Embark on a transformative journey into the world of technology
              and career exploration alongside Rishabh, a distinguished 2018
              Computer Science graduate from the prestigious IIT Roorkee.
            </p>
            <p className="text-base text-secondary/80 mb-0">
              With an impressive track record, Rishabh has not only been part of
              Google's illustrious Summer of Code not once, but twice, but has
              also honed his skills across the realms of FAANG (Facebook, Apple,
              Amazon, Netflix, Google), Finance, and the thriving Startup scene
              in the four years since his graduation.
            </p>
            <div className="flex flex-wrap">
              <div className="flex items-center mr-[78px] mb-[28px] flex-shrink">
                <img
                  className="w-4 md:w-[36px]"
                  loading="lazy"
                  width="36"
                  height="36"
                  src={youtube}
                  alt="youtube"
                />
                <p
                  className="mb-0 ml-[12px] text-16 md:text-32 leading-[1.3] md:leading-[1.5] font-bold"
                >
                  234k
                </p>
              </div>
              <div className="flex items-center mb-[28px] sm:mr-[78px] flex-shrink">
                <img
                  className="w-4 md:w-[36px]"
                  loading="lazy"
                  width="36"
                  height="36"
                  src={instagram}
                  alt="instagram"
                />
                <p
                  className="mb-0 ml-[12px] text-16 md:text-32 leading-[1.3] md:leading-[1.5] font-bold"
                >
                  234k
                </p>
              </div>
              <div className="flex items-center mb-[28px] flex-shrink-0">
                <img
                  className="w-4 md:w-[36px]"
                  loading="lazy"
                  width="36"
                  height="36"
                  src={twitter}
                  alt="twitter"
                />
                <p
                  className="mb-0 ml-[12px] text-16 md:text-32 leading-[1.3] md:leading-[1.5] font-bold"
                >
                  234k
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-x-scroll md:overflow-hidden">
            <div
              className="flex flex-nowrap mt-5 md:mt-7 min-w-max gap-[12px] md:gap-[20px]"
            >
              <div className="w-[50%] flex-shrink">
                <img
                  className="w-[162px] md:w-[400px]"
                  src={f2}
                  alt="faang2"
                  width="400"
                  height="302"
                  loading="lazy"
                />
              </div>
              <div className="w-[50%] flex-shrink">
                <img
                  className="w-[162px] md:w-[400px]"
                  src={f3}
                  alt="faang3"
                  width="400"
                  height="302"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About1;
