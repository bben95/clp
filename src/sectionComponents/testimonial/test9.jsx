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
        class="py-5 lg:py-[120px] bg-white testimonial-section overflow-hidden"
        id="testimonials"
      >
        <div class="container">
          <div class="text-center">
            <div class="text-heading-small lg:text-heading">
              Customer experiences, real voices
            </div>
            <div
              class="max-w-[610px] mx-auto text-small lg:text-xl text-[#888888] mt-2 lg:mt-3"
            >
              Read what our satisfied clients have to say about their experience
              with our fantasy sport services.
            </div>
          </div>
          <div class="hidden lg:block">
            <div class="testimonial-slider mt-[40px] lg:mt-6">
              <div class="item">
                <div class="bg-[#F9FAFB] px-4 py-4 rounded-[20px] h-full">
                  <img src="img/exhibitionist/quotes.svg" alt="" />
                  <div
                    class="text-small lg:text-medium text-[#232423] mt-2 lg:my-3"
                  >
                    Game-Changing Guidance!
                  </div>
                  <div class="text-verysmall lg:text-base text-[#888888]">
                    "I can't express how transformative my experience has been
                    learning from this teacher. Their strategic guidance and
                    player analysis have been game-changing. Before, I was
                    struggling in my fantasy sports leagues, but now I'm
                    consistently at the top of the standings."
                  </div>
                  <div class="flex items-center gap-[12px] mt-4 lg:mt-5">
                    <img
                      class="w-4 h-4 lg:w-5 lg:h-5"
                      src="img/exhibitionist/customer1.png"
                      alt=""
                    />
                    <div class="flex flex-col">
                      <div class="text-verysmall lg:text-base font-semibold">
                        Jessica W.
                      </div>
                      <div
                        class="text-[10px] leading-[1.6] lg:text-verysmall text-[#888888]"
                      >
                        Fantasy Sport Player
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="bg-[#F9FAFB] px-4 py-4 rounded-[20px] h-full">
                  <img src="img/exhibitionist/quotes.svg" alt="" />
                  <div
                    class="text-small lg:text-medium text-[#232423] mt-2 lg:my-3"
                  >
                    Rookie to Champion
                  </div>
                  <div class="text-verysmall lg:text-base text-[#888888]">
                    "Learning from this teacher has been a winning experience.
                    Their strategic guidance and player analysis have helped me
                    make the right picks and win consistently. I'm a proud
                    student!"
                  </div>
                  <div class="flex items-center gap-[12px] mt-4 lg:mt-5">
                    <img
                      class="w-4 h-4 lg:w-5 lg:h-5"
                      src="img/exhibitionist/customer2.png"
                      alt=""
                    />
                    <div class="flex flex-col">
                      <div class="text-verysmall lg:text-base font-semibold">
                        Lisa R.
                      </div>
                      <div
                        class="text-[10px] leading-[1.6] lg:text-verysmall text-[#888888]"
                      >
                        Fantasy Sport Player
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="bg-[#F9FAFB] px-4 py-4 rounded-[20px] h-full">
                  <img src="img/exhibitionist/quotes.svg" alt="" />
                  <div
                    class="text-small lg:text-medium text-[#232423] mt-2 lg:my-3"
                  >
                    The Fantasy Guru You Need!
                  </div>
                  <div class="text-verysmall lg:text-base text-[#888888]">
                    "I can't express how transformative my experience has been
                    learning from this teacher. Their strategic guidance and
                    player analysis have been game-changing. Before, I was
                    struggling in my fantasy sports leagues, but now I'm
                    consistently at the top of the standings."
                  </div>
                  <div class="flex items-center gap-[12px] mt-4 lg:mt-5">
                    <img
                      class="w-4 h-4 lg:w-5 lg:h-5"
                      src="img/exhibitionist/customer3.png"
                      alt=""
                    />
                    <div class="flex flex-col">
                      <div class="text-verysmall lg:text-base font-semibold">
                        Joseph Dmello
                      </div>
                      <div
                        class="text-[10px] leading-[1.6] lg:text-verysmall text-[#888888]"
                      >
                        Fantasy Sport Player
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid gap-3 mt-[40px] lg:mt-6 lg:hidden">
            <div class="item">
              <div class="bg-[#F9FAFB] px-4 py-4 rounded-[20px] h-full">
                <img src="img/exhibitionist/quotes.svg" alt="" />
                <div
                  class="text-small lg:text-medium text-[#232423] mt-2 lg:my-3"
                >
                  Game-Changing Guidance!
                </div>
                <div class="text-verysmall lg:text-base text-[#888888]">
                  "I can't express how transformative my experience has been
                  learning from this teacher. Their strategic guidance and
                  player analysis have been game-changing. Before, I was
                  struggling in my fantasy sports leagues, but now I'm
                  consistently at the top of the standings."
                </div>
                <div class="flex items-center gap-[12px] mt-4 lg:mt-5">
                  <img
                    class="w-4 h-4 lg:w-5 lg:h-5"
                    src="img/exhibitionist/customer1.png"
                    alt=""
                  />
                  <div class="flex flex-col">
                    <div class="text-verysmall lg:text-base font-semibold">
                      Jessica W.
                    </div>
                    <div
                      class="text-[10px] leading-[1.6] lg:text-verysmall text-[#888888]"
                    >
                      Fantasy Sport Player
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="bg-[#F9FAFB] px-4 py-4 rounded-[20px] h-full">
                <img src="img/exhibitionist/quotes.svg" alt="" />
                <div
                  class="text-small lg:text-medium text-[#232423] mt-2 lg:my-3"
                >
                  Rookie to Champion
                </div>
                <div class="text-verysmall lg:text-base text-[#888888]">
                  "Learning from this teacher has been a winning experience.
                  Their strategic guidance and player analysis have helped me
                  make the right picks and win consistently. I'm a proud
                  student!"
                </div>
                <div class="flex items-center gap-[12px] mt-4 lg:mt-5">
                  <img
                    class="w-4 h-4 lg:w-5 lg:h-5"
                    src="img/exhibitionist/customer2.png"
                    alt=""
                  />
                  <div class="flex flex-col">
                    <div class="text-verysmall lg:text-base font-semibold">
                      Lisa R.
                    </div>
                    <div
                      class="text-[10px] leading-[1.6] lg:text-verysmall text-[#888888]"
                    >
                      Fantasy Sport Player
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="bg-[#F9FAFB] px-4 py-4 rounded-[20px] h-full">
                <img src="img/exhibitionist/quotes.svg" alt="" />
                <div
                  class="text-small lg:text-medium text-[#232423] mt-2 lg:my-3"
                >
                  The Fantasy Guru You Need!
                </div>
                <div class="text-verysmall lg:text-base text-[#888888]">
                  "I can't express how transformative my experience has been
                  learning from this teacher. Their strategic guidance and
                  player analysis have been game-changing. Before, I was
                  struggling in my fantasy sports leagues, but now I'm
                  consistently at the top of the standings."
                </div>
                <div class="flex items-center gap-[12px] mt-4 lg:mt-5">
                  <img
                    class="w-4 h-4 lg:w-5 lg:h-5"
                    src="img/exhibitionist/customer3.png"
                    alt=""
                  />
                  <div class="flex flex-col">
                    <div class="text-verysmall lg:text-base font-semibold">
                      Joseph Dmello
                    </div>
                    <div
                      class="text-[10px] leading-[1.6] lg:text-verysmall text-[#888888]"
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
