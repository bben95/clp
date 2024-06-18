import React from 'react';
import ll from '../../asset/leaves-l.png';
import lr from '../../asset/leaves-r.png'
import o from '../../asset/owner.webp'
function About6() {

  return (
    <main>
    <section className="section-pad overflow-hidden mt-8">
        <div className="container">
          <div className="flex md:flex-row flex-col items-center md:gap-[86px]">
            <div className="w-full md:w-1/2">
              <div
                className="text-secondary font-semibold font-melodrama text-32 lg:text-[56px] leading-[1.1] md:max-w-[544px]"
              >
                <span className="mr-1">
                Creating content and teaching for the past
                </span>
                <span className="text-primary">12&nbsp;years!</span>
              </div>
              <div
                className="mt-2 lg:mt-3 mb-[40px] text-secondary/70 text-16 leading-[1.6]"
              >
                I am glad that you have made it here to send a distress signal,
                and inform the Senate that all on board were killed. Dantooine.
                I’m not going to Alderaan. I really got to go.
              </div>
              <div className="flex gap-[40px]">
                <a
                  href="#!"
                  className="button chevron button-green w-full lg:w-[210px]"
                  >Buy Course</a
                >
                <div className="lg:flex items-center hidden">
                  <img src={ll} alt="" />
                  <div className="flex items-center flex-col">
                    <div
                      className="text-14 leading-[1.5] uppercase tracking-[-0.05] font-bold"
                    >
                      Creator award
                    </div>
                    <div
                      className="text-secondary/60 text-12 leading-[1.8] tracking-[-0.05] font-semibold"
                    >
                      2022
                    </div>
                  </div>
                  <img src={lr} alt="" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-[40px] lg:mt-0">
              <img className="w-full" src={o} alt="" />
            </div>
          </div>
            </div>
      </section>
    </main>
  );
}

export default About6;
