import React from 'react';
import t1 from '../../asset/testimonial1.jpg';
import t2 from '../../asset/testimonial2.jpg';
import s4 from '../../asset/4stars.svg';
import tq from '../../asset/testimonial-quotes.svg';
function Test7() {
  return (
    <main>
    <section className="mt-[80px] lg:mt-[140px]" id="testimonials">
        <div className="container">
          <div
            className="rounded-[27px] border border-primary/20 py-1 px-[20px] max-w-fit"
          >
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
                className="text-12 lg:text-14 leading-[1.5] font-bold text-primary"
              >
                Our testimonials
              </div>
            </div>
          </div>
          <div
            className="mt-[20px] lg:mt-3 mb-3 lg:mb-5 text-xl lg:text-[56px] lg:leading-[1.14] font-bodoni font-normal max-w-[600px]"
          >
            See what our students tell about us
          </div>
          <div className="slider-section">
            <div className="testimonial-slider6">
              <div className="item">
                <div
                  className="flex items-center lg:flex-row flex-col rounded-2xl relative overflow-hidden bg-[#F7F2EA]"
                >
                  <img
                    className="absolute bottom-0 right-0"
                    src={tq}
                    alt=""
                  />
                  <img
                    className="w-full lg:w-auto h-[250px] lg:h-auto object-cover object-top lg:object-none"
                    src={t2}
                    alt=""
                  />
                  <div className="text-secondary lg:mx-4 px-2 lg:px-0 py-3 lg:py-0">
                    <img src={s4} alt="" />
                    <div className="text-small lg:text-base opacity-80 my-3">
                      This course provided a clear and step-by-step roadmap that
                      demystified the entire process. From crafting a compelling
                      product page to mastering marketing strategies, I gained
                      valuable insights that turbocharged my store's growth.
                    </div>
                    <div className="text-base font-semibold">Khushi Kapoor</div>
                    <div className="text-small opacity-80">
                      Marketing Coordinator
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="flex items-center lg:flex-row flex-col rounded-2xl relative overflow-hidden bg-[#F7F2EA]"
                >
                  <img
                    className="absolute bottom-0 right-0"
                    src={tq}
                    alt=""
                  />
                  <img
                    className="w-full lg:w-auto h-[250px] lg:h-auto object-cover object-top lg:object-none"
                    src={t1}
                    alt=""
                  />
                  <div className="text-secondary lg:mx-4 px-2 lg:px-0 py-3 lg:py-0">
                    <img src={s4} alt="" />
                    <div className="text-small lg:text-base opacity-80 my-3">
                      This course provided a clear and step-by-step roadmap that
                      demystified the entire process. From crafting a compelling
                      product page to mastering marketing strategies, I gained
                      valuable insights that turbocharged my store's growth.
                    </div>
                    <div className="text-base font-semibold">Khushi Kapoor</div>
                    <div className="text-small opacity-80">
                      Marketing Coordinator
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

export default Test7;
