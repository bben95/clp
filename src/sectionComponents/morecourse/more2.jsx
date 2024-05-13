import React from 'react';
import fm from '../../asset/financial-markets.svg';
import no from '../../asset/networking-opportunities.svg';
import fp from '../../asset/financial-planning.svg';
import fl from '../../asset/financial-literacy.svg';
function More2() {

  return (
    <main>
      <section className="lg:py-[150px] py-[60px]">
      <div className="container flex lg:flex-row flex-col ">
        <div className="lg:w-[50%] w-full join-course text-center lg:text-start px-1">
          <div className="t12">Why should you join this course?</div>
        </div>
        <div className="lg:w-[50%] w-full mt-[44px] lg:mt-0">
          <div className="flex gap-3 items-start lg:mb-7 mb-[56px]">
            <img src={fm} alt="img1" className="h-[42px] w-[42px]" />
            <div>
              <h4 className="">Understanding Financial Markets</h4>
              <h6 className="lg:mt-[18px] mt-2 font-normal text-secondary/70">
                If you're interested in the world of finance and investing, a
                finance course introduces you to financial markets,
                instruments, and how they function.
              </h6>
            </div>
          </div>
          <div className="flex gap-3 items-start lg:mb-7 mb-[56px]">
            <img src={no} alt="img2" className="h-[42px] w-[42px]" />
            <div>
              <h4 className="">Networking Opportunities</h4>
              <h6 className="lg:mt-[18px] mt-[16px] font-normal text-secondary/70">
                Finance courses often bring together like-minded individuals, creating networking opportunities with
                peers, instructors, & industry professionals.
              </h6>
            </div>
          </div>
          <div className="flex gap-3 items-start lg:mb-7 mb-[56px]">
            <img src={fp} alt="img3" className="h-[42px] w-[42px]" />
            <div>
              <h4 className="">Personal Financial Planning</h4>
              <h6 className="lg:mt-[18px] mt-[16px] font-normal text-secondary/70">
                Understanding personal finance is essential for achieving financial security. A finance course can guide
                you in creating a comprehensive financial plan, setting financial goals, and managing debt efficiently.
              </h6>
            </div>
          </div>
          <div className="flex gap-3 items-start ">
            <img src={fl} alt="img4" className="h-[42px] w-[42px]" />
            <div>
              <h4 className="">Enhance financial Literacy</h4>
              <h6 className="lg:mt-[18px] mt-[16px] font-normal text-secondary/70">
                Joining a finance course provides an opportunity to improve your understanding of financial concepts,
                helping you make better decisions about money management, investments, and personal finance.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}

export default More2;
