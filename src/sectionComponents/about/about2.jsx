import React from 'react';
import kf from '../../asset/karansingh-front.jpg'
import ks from '../../asset/karansinghs-side.jpg'
import youtube from '../../asset/youtube.svg';
import twitter from '../../asset/twitter.svg';
import instagram from '../../asset/instagram.svg';
function About2() {

  return (
    <main>
    <section className="lg:py-[150px] py-[60px]" id="about">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="">
            <div>
              <div className="bg-olive/20 w-fit rounded-lg lg:mb-2 mb-1">
                <p className="text-olive pt-1 pb-[4px] px-3 font-khula font-semibold">
                  Finance Influencer, Entrepreneur and Investor
                </p>
              </div>
              <h2 className="text-48 font-semibold mr-1 lg:mr-0">Empowering Your Financial Future</h2>
              <div className="text-24 font-normal mt-4">
                Karan Singh is a seasoned value investor and a YouTuber with
                over two million subscribers on his channel. His YouTube channel
                is the biggest in the financial education domain and aims at
                empowering investors and disseminating financial awareness.
              </div>
            </div>
          </div>
          <div className=" sm:row-span-2">
            <div className="bg-beige max-w-[610px] lg:h-[512px] h-[275px] financial-future relative mt-2 lg:mt-0">
              <img src={kf}
                className="absolute top-[-10%] right-[12%] w-[175px] lg:w-[316px] rounded-xl" alt="img16" />
              <img src={ks}
                className="absolute bottom-[10%] left-[22%] w-[118px] lg:w-[210px] rounded-xl" alt="img17" />
            </div>
          </div>
          <div className="flex items-end">
            <div className="flex lg:gap-4 gap-3 items-center lg:mt-0">
              <div className="flex flex-col items-center">
                <img loading="lazy" width="24" height="24" src={instagram} alt="instagram" />
                <h3 className="text-primary mt-1">1M</h3>
              </div>
              <div className="border border-r-0 h-[56px] border-customgrey/10"></div>
              <div className="flex flex-col items-center">
                <img loading="lazy" width="24" height="24" src={youtube} alt="YouTube" className="h-3" />
                <h3 className="text-primary mt-1">5M+</h3>
              </div>
              <div className="border border-r-0 h-[56px] border-customgrey/10"></div>
              <div className="flex flex-col items-center">
                <img loading="lazy" width="24" height="24" src={twitter} alt="twitter" />
                <h3 className="text-primary mt-1">3M+</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </main>
  );
}

export default About2;
