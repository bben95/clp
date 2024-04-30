import React, { useState} from 'react';
import t1 from '../../asset/testimonial1.png';
import tm from '../../asset/testimonial-mobile.png';

function Test9() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
        <section
        className="py-5 lg:py-[120px] bg-white testimonial-section overflow-hidden"
        id="testimonials"
      >
        <div className="container">
          <div className="text-center">
            <div className="text-heading-small lg:text-heading">
              Customer experiences, real voices
            </div>
            <div
              className="max-w-[610px] mx-auto text-small lg:text-xl text-[#888888] mt-2 lg:mt-3"
            >
              Read what our satisfied clients have to say about their experience
              with our fantasy sport services.
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="testimonial-slider mt-[40px] lg:mt-6">
              <div className="item">
                <div className="bg-[#F9FAFB] px-4 py-4 rounded-[20px] h-full">
                  <img src="img/exhibitionist/quotes.svg" alt="" />
                  <div
                    className="text-small lg:text-medium text-[#232423] mt-2 lg:my-3"
                  >
                    Game-Changing Guidance!
                  </div>
                  <div className="text-verysmall lg:text-base text-[#888888]">
                    "I can't express how transformative my experience has been
                    learning from this teacher. Their strategic guidance and
                    player analysis have been game-changing. Before, I was
                    struggling in my fantasy sports leagues, but now I'm
                    consistently at the top of the standings."
                  </div>
                  <div className="flex items-center gap-[12px] mt-4 lg:mt-5">
                    <img
                      className="w-4 h-4 lg:w-5 lg:h-5"
                      src="img/exhibitionist/customer1.png"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <div className="text-verysmall lg:text-base font-semibold">
                        Jessica W.
                      </div>
                      <div
                        className="text-[10px] leading-[1.6] lg:text-verysmall text-[#888888]"
                      >
                        Fantasy Sport Player
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="bg-[#F9FAFB] px-4 py-4 rounded-[20px] h-full">
                  <img src="img/exhibitionist/quotes.svg" alt="" />
                  <div
                    className="text-small lg:text-medium text-[#232423] mt-2 lg:my-3"
                  >
                    Rookie to Champion
                  </div>
                  <div className="text-verysmall lg:text-base text-[#888888]">
                    "Learning from this teacher has been a winning experience.
                    Their strategic guidance and player analysis have helped me
                    make the right picks and win consistently. I'm a proud
                    student!"
                  </div>
                  <div className="flex items-center gap-[12px] mt-4 lg:mt-5">
                    <img
                      className="w-4 h-4 lg:w-5 lg:h-5"
                      src="img/exhibitionist/customer2.png"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <div className="text-verysmall lg:text-base font-semibold">
                        Lisa R.
                      </div>
                      <div
                        className="text-[10px] leading-[1.6] lg:text-verysmall text-[#888888]"
                      >
                        Fantasy Sport Player
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="bg-[#F9FAFB] px-4 py-4 rounded-[20px] h-full">
                  <img src="img/exhibitionist/quotes.svg" alt="" />
                  <div
                    className="text-small lg:text-medium text-[#232423] mt-2 lg:my-3"
                  >
                    The Fantasy Guru You Need!
                  </div>
                  <div className="text-verysmall lg:text-base text-[#888888]">
                    "I can't express how transformative my experience has been
                    learning from this teacher. Their strategic guidance and
                    player analysis have been game-changing. Before, I was
                    struggling in my fantasy sports leagues, but now I'm
                    consistently at the top of the standings."
                  </div>
                  <div className="flex items-center gap-[12px] mt-4 lg:mt-5">
                    <img
                      className="w-4 h-4 lg:w-5 lg:h-5"
                      src="img/exhibitionist/customer3.png"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <div className="text-verysmall lg:text-base font-semibold">
                        Joseph Dmello
                      </div>
                      <div
                        className="text-[10px] leading-[1.6] lg:text-verysmall text-[#888888]"
                      >
                        Fantasy Sport Player
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-3 mt-[40px] lg:mt-6 lg:hidden">
            <div className="item">
              <div className="bg-[#F9FAFB] px-4 py-4 rounded-[20px] h-full">
                <img src="img/exhibitionist/quotes.svg" alt="" />
                <div
                  className="text-small lg:text-medium text-[#232423] mt-2 lg:my-3"
                >
                  Game-Changing Guidance!
                </div>
                <div className="text-verysmall lg:text-base text-[#888888]">
                  "I can't express how transformative my experience has been
                  learning from this teacher. Their strategic guidance and
                  player analysis have been game-changing. Before, I was
                  struggling in my fantasy sports leagues, but now I'm
                  consistently at the top of the standings."
                </div>
                <div className="flex items-center gap-[12px] mt-4 lg:mt-5">
                  <img
                    className="w-4 h-4 lg:w-5 lg:h-5"
                    src="img/exhibitionist/customer1.png"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <div className="text-verysmall lg:text-base font-semibold">
                      Jessica W.
                    </div>
                    <div
                      className="text-[10px] leading-[1.6] lg:text-verysmall text-[#888888]"
                    >
                      Fantasy Sport Player
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="bg-[#F9FAFB] px-4 py-4 rounded-[20px] h-full">
                <img src="img/exhibitionist/quotes.svg" alt="" />
                <div
                  className="text-small lg:text-medium text-[#232423] mt-2 lg:my-3"
                >
                  Rookie to Champion
                </div>
                <div className="text-verysmall lg:text-base text-[#888888]">
                  "Learning from this teacher has been a winning experience.
                  Their strategic guidance and player analysis have helped me
                  make the right picks and win consistently. I'm a proud
                  student!"
                </div>
                <div className="flex items-center gap-[12px] mt-4 lg:mt-5">
                  <img
                    className="w-4 h-4 lg:w-5 lg:h-5"
                    src="img/exhibitionist/customer2.png"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <div className="text-verysmall lg:text-base font-semibold">
                      Lisa R.
                    </div>
                    <div
                      className="text-[10px] leading-[1.6] lg:text-verysmall text-[#888888]"
                    >
                      Fantasy Sport Player
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="bg-[#F9FAFB] px-4 py-4 rounded-[20px] h-full">
                <img src="img/exhibitionist/quotes.svg" alt="" />
                <div
                  className="text-small lg:text-medium text-[#232423] mt-2 lg:my-3"
                >
                  The Fantasy Guru You Need!
                </div>
                <div className="text-verysmall lg:text-base text-[#888888]">
                  "I can't express how transformative my experience has been
                  learning from this teacher. Their strategic guidance and
                  player analysis have been game-changing. Before, I was
                  struggling in my fantasy sports leagues, but now I'm
                  consistently at the top of the standings."
                </div>
                <div className="flex items-center gap-[12px] mt-4 lg:mt-5">
                  <img
                    className="w-4 h-4 lg:w-5 lg:h-5"
                    src="img/exhibitionist/customer3.png"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <div className="text-verysmall lg:text-base font-semibold">
                      Joseph Dmello
                    </div>
                    <div
                      className="text-[10px] leading-[1.6] lg:text-verysmall text-[#888888]"
                    >
                      Fantasy Sport Player
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

export default Test9;
