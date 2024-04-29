import React, { useState } from 'react';
import mf from '../../asset/manage-finance.svg';
import investments from '../../asset/investments.svg';
import et from '../../asset/effective-tools.svg';
import aa from '../../asset/asset-allocation.svg';
import di from '../../asset/debt-investing.svg';
import tpt from '../../asset/tax-planning-tool.svg';

function More3() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
    <section
        class="bg-secondary py-5 md:py-[120px] scrollspy-section"
        id="masterclass"
      >
        <div class="container text-white">
          <h2
            class="text-xl font-bold md:text-4.8xl text-center text-white mb-2"
          >
            I can help you with
          </h2>
          <div
            class="text-base2.5 text-center text-white/60 max-w-[610px] mx-auto"
          >
            Join our Masterclass Courses for Finance and Stocks and take a
            decisive step towards achieving your financial goals.
          </div>
          <div
            class="grid mt-4 md:mt-6 grid-cols-2 md:grid-cols-3 gap-2 md:gap-[20px]"
          >
            <div
              class="py-3 md:py-[40px] bg-[#B0ABF9]/10 text-center rounded-2xl"
            >
              <img
                src={mf}
                alt="manage-finance"
                loading="lazy"
                width="88"
                height="88"
                class="md:w-[88px] w-6 h-6 md:h-[88px] mb-[12px] md:mb-3 mx-auto"
              />
              <p
                class="text-14 md:text-24 leading-none mb-0 font-medium tracking-[-0.5px] text-white"
              >
                Managing Finance
              </p>
            </div>
            <div
              class="py-3 md:py-[40px] bg-[#B0ABF9]/10 text-center rounded-2xl"
            >
              <img
                src={investments}
                alt="investments"
                loading="lazy"
                width="96"
                height="88"
                class="md:w-[88px] w-6 h-6 md:h-[88px] mb-[12px] md:mb-3 mx-auto"
              />
              <p
                class="text-14 md:text-24 leading-none mb-0 font-medium tracking-[-0.5px] text-white"
              >
                Investments
              </p>
            </div>
            <div
              class="py-3 md:py-[40px] bg-[#B0ABF9]/10 text-center rounded-2xl"
            >
              <img
                src={et}
                alt="effective-tools"
                loading="lazy"
                width="96"
                height="88"
                class="md:w-[88px] w-6 h-6 md:h-[88px] mb-[12px] md:mb-3 mx-auto"
              />
              <p
                class="text-14 md:text-24 leading-none mb-0 font-medium tracking-[-0.5px] text-white"
              >
                Effective Tools
              </p>
            </div>
            <div
              class="py-3 md:py-[40px] bg-[#B0ABF9]/10 text-center rounded-2xl"
            >
              <img
                src={aa}
                alt="asset-allocation"
                loading="lazy"
                width="96"
                height="88"
                class="md:w-[88px] w-6 h-6 md:h-[88px] mb-[12px] md:mb-3 mx-auto"
              />
              <p
                class="text-14 md:text-24 leading-none mb-0 font-medium tracking-[-0.5px] text-white"
              >
                Asset Allocation
              </p>
            </div>
            <div
              class="py-3 md:py-[40px] bg-[#B0ABF9]/10 text-center rounded-2xl"
            >
              <img
                src={di}
                alt="debt-investing"
                loading="lazy"
                width="96"
                height="88"
                class="md:w-[88px] w-6 h-6 md:h-[88px] mb-[12px] md:mb-3 mx-auto"
              />
              <p
                class="text-14 md:text-24 leading-none mb-0 font-medium tracking-[-0.5px] text-white"
              >
                Investing in Debt
              </p>
            </div>
            <div
              class="py-3 md:py-[40px] bg-[#B0ABF9]/10 text-center rounded-2xl"
            >
              <img
                src={tpt}
                alt="tax-planning-tool"
                loading="lazy"
                width="96"
                height="88"
                class="md:w-[88px] w-6 h-6 md:h-[88px] mb-[12px] md:mb-3 mx-auto"
              />
              <p
                class="text-14 md:text-24 leading-none mb-0 font-medium tracking-[-0.5px] text-white"
              >
                Tax Planning Tool
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default More3;

    