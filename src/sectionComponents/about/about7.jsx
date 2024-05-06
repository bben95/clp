import React from 'react';
import leaf from '../../asset/leaf.svg';
import ma  from '../../asset/mandala-art-full.svg'
import story from '../../asset/story.webp'
import sbg from '../../asset/story-bg-patch.svg'
function About7() {

  return (
    <main>
     <section
        className="bg-alabaster pb-[84px] lg:pb-[120px] pt-[270px] mt-[-70px] relative overflow-hidden mt-8"
        id="about"
      >
        <div className="container">
          <img
            src={leaf}
            className="absolute z-[3] top-3 lg:top-[-80px] -left-3 lg:left-0 w-[290px] h-[280px] lg:w-auto lg:h-auto"
            alt=""
          />
          <img
            className="absolute z-[3] w-[530px] top-[-105px] right-[-220px]  lg:inline-block"
            src={ma}
            alt=""
          />
          <div
            className="flex items-start lg:items-center lg:flex-row flex-col lg:mt-[-100px]"
          >
            <div className="block lg:hidden mt-[22px]">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    d="M19.4162 7.98501C19.8609 8.58238 20.1761 9.26602 20.3414 9.99219C21.0509 9.81755 21.7868 9.77703 22.5112 9.8727C23.5794 10.0263 24.6001 10.5459 25.1629 11.5473C25.7248 12.5482 25.638 13.692 25.2137 14.6833C24.94 15.3209 24.5177 15.9308 23.9799 16.4745C24.5143 16.9928 24.9344 17.6172 25.2132 18.3075C25.621 19.3448 25.6478 20.5282 25.0436 21.5464C24.4425 22.5595 23.399 23.1031 22.3002 23.2441C21.5832 23.3311 20.856 23.2711 20.163 23.0678C19.9644 23.7883 19.6365 24.4449 19.2027 24.984C18.5087 25.8478 17.5031 26.4569 16.3253 26.4429C15.1395 26.4288 14.144 25.7882 13.4712 24.9017C13.0267 24.3045 12.7118 23.621 12.5468 22.895C11.8033 23.0702 11.0622 23.1141 10.3762 23.014C9.30801 22.8604 8.28728 22.3408 7.7245 21.3394C7.16257 20.3385 7.25029 19.1952 7.67368 18.2034C7.96965 17.5346 8.3881 16.9271 8.90746 16.4122C8.37322 15.8938 7.95316 15.2695 7.67417 14.5793C7.26642 13.542 7.23954 12.3586 7.84374 11.3403C8.44488 10.3273 9.48787 9.78451 10.5872 9.64263C11.304 9.55521 12.0311 9.61474 12.7241 9.81759C12.9108 9.12026 13.2375 8.46827 13.6844 7.90135C14.3787 7.03891 15.3843 6.42981 16.5629 6.44429C17.7474 6.45874 18.7433 7.09855 19.4162 7.98501ZM18.4849 13.0034C17.5726 12.462 16.4825 12.3053 15.4546 12.5676C14.4267 12.8299 13.5451 13.4898 13.0037 14.4021C12.4623 15.3145 12.3056 16.4045 12.5679 17.4324C12.8302 18.4604 13.4901 19.342 14.4025 19.8833C15.3148 20.4247 16.4048 20.5815 17.4328 20.3191C18.4607 20.0568 19.3423 19.3969 19.8837 18.4846C20.425 17.5722 20.5818 16.4822 20.3195 15.4543C20.0572 14.4264 19.3972 13.5447 18.4849 13.0034ZM17.4643 14.7234C17.9205 14.994 18.2504 15.4349 18.3816 15.9488C18.5127 16.4628 18.4344 17.0078 18.1637 17.464C17.893 17.9201 17.4522 18.2501 16.9382 18.3812C16.4243 18.5124 15.8793 18.434 15.4231 18.1633C14.9669 17.8927 14.637 17.4519 14.5058 16.9379C14.3746 16.4239 14.453 15.8789 14.7237 15.4228C14.9944 14.9666 15.4352 14.6366 15.9492 14.5055C16.4631 14.3743 17.0081 14.4527 17.4643 14.7234Z"
                    fill="#C8A26B"
                  />
                </svg>
                <div
                  className="text-16 leading-[1.5] font-bold text-primary ml-[2px] mr-2"
                >
                  My&nbsp;Story
                </div>
                <div className="w-full h-[2px] bg-primary"></div>
              </div>
              <div
                className="font-bodoni text-[28px] leading-[1.14] text-secondary font-normal mt-[19px] lg:mt-[30px] mb-3"
              >
                Some background about me
              </div>
            </div>
            <div className="relative w-full lg:w-1/2">
              <img
                className="lg:w-[536px] lg:h-[680px] w-full relative z-[1]"
                src={story}
                alt=""
              />
              <img
                className="absolute top-[10%] left-0 lg:left-[5%] bottom-0 right-0"
                src={sbg}
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:block">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                  >
                    <path
                      d="M19.4162 7.98501C19.8609 8.58238 20.1761 9.26602 20.3414 9.99219C21.0509 9.81755 21.7868 9.77703 22.5112 9.8727C23.5794 10.0263 24.6001 10.5459 25.1629 11.5473C25.7248 12.5482 25.638 13.692 25.2137 14.6833C24.94 15.3209 24.5177 15.9308 23.9799 16.4745C24.5143 16.9928 24.9344 17.6172 25.2132 18.3075C25.621 19.3448 25.6478 20.5282 25.0436 21.5464C24.4425 22.5595 23.399 23.1031 22.3002 23.2441C21.5832 23.3311 20.856 23.2711 20.163 23.0678C19.9644 23.7883 19.6365 24.4449 19.2027 24.984C18.5087 25.8478 17.5031 26.4569 16.3253 26.4429C15.1395 26.4288 14.144 25.7882 13.4712 24.9017C13.0267 24.3045 12.7118 23.621 12.5468 22.895C11.8033 23.0702 11.0622 23.1141 10.3762 23.014C9.30801 22.8604 8.28728 22.3408 7.7245 21.3394C7.16257 20.3385 7.25029 19.1952 7.67368 18.2034C7.96965 17.5346 8.3881 16.9271 8.90746 16.4122C8.37322 15.8938 7.95316 15.2695 7.67417 14.5793C7.26642 13.542 7.23954 12.3586 7.84374 11.3403C8.44488 10.3273 9.48787 9.78451 10.5872 9.64263C11.304 9.55521 12.0311 9.61474 12.7241 9.81759C12.9108 9.12026 13.2375 8.46827 13.6844 7.90135C14.3787 7.03891 15.3843 6.42981 16.5629 6.44429C17.7474 6.45874 18.7433 7.09855 19.4162 7.98501ZM18.4849 13.0034C17.5726 12.462 16.4825 12.3053 15.4546 12.5676C14.4267 12.8299 13.5451 13.4898 13.0037 14.4021C12.4623 15.3145 12.3056 16.4045 12.5679 17.4324C12.8302 18.4604 13.4901 19.342 14.4025 19.8833C15.3148 20.4247 16.4048 20.5815 17.4328 20.3191C18.4607 20.0568 19.3423 19.3969 19.8837 18.4846C20.425 17.5722 20.5818 16.4822 20.3195 15.4543C20.0572 14.4264 19.3972 13.5447 18.4849 13.0034ZM17.4643 14.7234C17.9205 14.994 18.2504 15.4349 18.3816 15.9488C18.5127 16.4628 18.4344 17.0078 18.1637 17.464C17.893 17.9201 17.4522 18.2501 16.9382 18.3812C16.4243 18.5124 15.8793 18.434 15.4231 18.1633C14.9669 17.8927 14.637 17.4519 14.5058 16.9379C14.3746 16.4239 14.453 15.8789 14.7237 15.4228C14.9944 14.9666 15.4352 14.6366 15.9492 14.5055C16.4631 14.3743 17.0081 14.4527 17.4643 14.7234Z"
                      fill="#C8A26B"
                    />
                  </svg>
                  <div
                    className="text-16 leading-[1.5] font-bold text-primary ml-[2px] mr-2"
                  >
                    My&nbsp;Story
                  </div>
                  <div className="w-full h-[2px] bg-primary"></div>
                </div>
                <div
                  className="font-bodoni text-[56px] leading-[1.2] text-secondary font-normal max-w-[465px] mt-[30px] mb-3"
                >
                  Some background about me
                </div>
              </div>
              <div
                className="text-16 leading-[1.6] font-medium text-secondary/80 mb-3 mt-[45px] lg:mt-0"
              >
                Ananya Sharma is a dedicated and passionate yoga instructor
                based in the serene town of Rishikesh, known as the yoga capital
                of the world. With over 10 years of experience in practicing and
                teaching yoga, Ananya has earned a reputation for her authentic
                approach to the ancient art. What sets her apart is her deep
                connection with the spiritual roots of yoga and her ability to
                make the practice accessible to modern individuals through
                online platforms.
              </div>
              <div className="text-16 leading-[1.6] font-medium text-secondary/80">
                Teaching Philosophy: Ananya's teaching philosophy revolves
                around the belief that yoga is not just a physical practice but
                a holistic journey towards self-discovery and well-being. She
                emphasizes the integration of breath, movement, and mindfulness
                to create a harmonious balance between the body, mind, and soul.
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default About7;
