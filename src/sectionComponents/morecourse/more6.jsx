import React, { useState } from 'react';
function More6() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
   <section className="bg-cultured section-pad">
        <div className="container">
          <div
            className="text-secondary text-center font-semibold font-melodrama text-32 lg:text-[56px] leading-[1.1]"
          >
            I can help you
            <span className="text-primary6">with</span>
          </div>
          <div
            className="text-secondary/70 md:max-w-[563px] text-center mx-auto mt-2 text-16 leading-[1.6]"
          >
            Join our MasterclassName Courses for Finance and Stocks and take a
            decisive step towards achieving your financial goals.
          </div>
          <div
            className="grid md:grid-cols-4 grid-cols-1 gap-[4px] mt-5 lg:mt-6 bg-secondary rounded-3xl px-1 lg:px-3 py-1 lg:py-3"
          >
            <div
              className="px-3 lg:pt-[132px] py-[27px] lg:pb-4 text-white rounded-[20px] help-cards"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                className="w-[40px] lg:w-5 h-[40px] lg:h-5 duration-500"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M21.5032 33.7207V37.7808C21.5032 41.2208 18.3032 44.0007 14.3632 44.0007C10.4232 44.0007 7.20312 41.2208 7.20312 37.7808V33.7207C7.20312 37.1607 10.4032 39.6007 14.3632 39.6007C18.3032 39.6007 21.5032 37.1407 21.5032 33.7207Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.4996 28.2195C21.4996 29.2195 21.2196 30.1395 20.7396 30.9395C19.5596 32.8795 17.1396 34.0995 14.3396 34.0995C11.5396 34.0995 9.11958 32.8595 7.93958 30.9395C7.45958 30.1395 7.17969 29.2195 7.17969 28.2195C7.17969 26.4995 7.97964 24.9595 9.25964 23.8395C10.5596 22.6995 12.3396 22.0195 14.3196 22.0195C16.2996 22.0195 18.0796 22.7195 19.3796 23.8395C20.6996 24.9395 21.4996 26.4995 21.4996 28.2195Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.5032 28.22V33.72C21.5032 37.16 18.3032 39.6 14.3632 39.6C10.4232 39.6 7.20312 37.14 7.20312 33.72V28.22C7.20312 24.78 10.4032 22 14.3632 22C16.3432 22 18.1232 22.6999 19.4232 23.8199C20.7032 24.9399 21.5032 26.5 21.5032 28.22Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M44.0004 21.9403V26.0604C44.0004 27.1604 43.1204 28.0603 42.0004 28.1003H38.0804C35.9204 28.1003 33.9404 26.5204 33.7604 24.3604C33.6404 23.1004 34.1204 21.9203 34.9604 21.1003C35.7004 20.3403 36.7204 19.9004 37.8404 19.9004H42.0004C43.1204 19.9404 44.0004 20.8403 44.0004 21.9403Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 21V17C4 11.56 7.28 7.76 12.38 7.12C12.9 7.04 13.44 7 14 7H32C32.52 7 33.02 7.01998 33.5 7.09998C38.66 7.69998 42 11.52 42 17V19.9H37.84C36.72 19.9 35.7 20.34 34.96 21.1C34.12 21.92 33.64 23.1 33.76 24.36C33.94 26.52 35.92 28.1 38.08 28.1H42V31C42 37 38 41 32 41H27"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div
                className="text-20 lg:text-24 leading-[1.3] font-bold tracking-[-0.09] mt-3 lg:mt-4 mb-1"
              >
                Managing Finance
              </div>
              <div className="opacity-70 text-14 lg:text-16 leading-[1.5]">
                Increased conversion and expension on new markets Dynamic
                business devolopment.
              </div>
            </div>
            <div
              className="px-3 lg:pt-[132px] py-[27px] lg:pb-4 text-white rounded-[20px] help-cards"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                className="w-[40px] lg:w-5 h-[40px] lg:h-5 duration-500"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M35.9002 15.4202L35.6202 15.2602L32.8402 13.6602L27.1002 10.3402C25.3402 9.3202 22.6602 9.3202 20.9002 10.3402L15.1602 13.6602L12.3802 15.2802L12.0202 15.4802C8.4402 17.8802 8.2002 18.3202 8.2002 22.1802V31.4002C8.2002 35.2602 8.4402 35.7002 12.1002 38.1602L20.9002 43.2402C21.7802 43.7602 22.8802 44.0002 24.0002 44.0002C25.1002 44.0002 26.2202 43.7602 27.1002 43.2402L35.9802 38.1002C39.5602 35.7002 39.8002 35.2602 39.8002 31.4002V22.1802C39.8002 18.3202 39.5602 17.8802 35.9002 15.4202Z"
                  fill="white"
                />
                <path
                  d="M12.3799 15.28L15.1599 13.66L20.6399 10.5L20.8999 10.34C22.6599 9.32 25.3399 9.32 27.0999 10.34L27.3599 10.5L32.8399 13.66L35.6199 15.26V10.98C35.6199 6.48 33.1399 4 28.6399 4H19.3399C14.8399 4 12.3799 6.48 12.3799 10.98V15.28Z"
                  fill="white"
                />
                <path
                  d="M29.6805 26.6796L28.4405 28.1996C28.2405 28.4196 28.1005 28.8596 28.1205 29.1596L28.2405 31.1196C28.3205 32.3196 27.4605 32.9396 26.3405 32.4996L24.5205 31.7796C24.2405 31.6796 23.7605 31.6796 23.4805 31.7796L21.6605 32.4996C20.5405 32.9396 19.6805 32.3196 19.7605 31.1196L19.8805 29.1596C19.9005 28.8596 19.7605 28.4196 19.5605 28.1996L18.3205 26.6796C17.5405 25.7596 17.8805 24.7396 19.0405 24.4396L20.9405 23.9596C21.2405 23.8796 21.6005 23.5996 21.7605 23.3396L22.8205 21.6996C23.4805 20.6796 24.5205 20.6796 25.1805 21.6996L26.2405 23.3396C26.4005 23.5996 26.7605 23.8796 27.0605 23.9596L28.9605 24.4396C30.1205 24.7396 30.4605 25.7596 29.6805 26.6796Z"
                  fill="white"
                />
              </svg>
              <div
                className="text-20 lg:text-24 leading-[1.3] font-bold tracking-[-0.09] mt-3 lg:mt-4 mb-1"
              >
                Leadership
              </div>
              <div className="opacity-70 text-14 lg:text-16 leading-[1.5]">
                Increased conversion and expension on new markets Dynamic
                business devolopment.
              </div>
            </div>
            <div
              className="px-3 lg:pt-[132px] py-[27px] lg:pb-4 text-white rounded-[20px] help-cards"
            >
              <svg
                className="w-[40px] lg:w-5 h-[40px] lg:h-5 duration-500"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M4 17C4 10 8 7 14 7H34C40 7 44 10 44 17V31C44 38 40 41 34 41H14"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M34 18L27.74 23C25.68 24.64 22.3 24.64 20.24 23L14 18"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 33H16"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 25H10"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div
                className="text-20 lg:text-24 leading-[1.3] font-bold tracking-[-0.09] mt-3 lg:mt-4 mb-1"
              >
                Job Hunting
              </div>
              <div className="opacity-70 text-14 lg:text-16 leading-[1.5]">
                Increased conversion and expension on new markets Dynamic
                business devolopment.
              </div>
            </div>
            <div
              className="px-3 lg:pt-[132px] py-[27px] lg:pb-4 text-white rounded-[20px] help-cards"
            >
              <svg
                className="w-[40px] lg:w-5 h-[40px] lg:h-5 duration-500"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M36.64 24.0004C41.84 24.0004 44 22.0004 42.08 15.4404C40.78 11.0204 36.98 7.22036 32.56 5.92036C26 4.00036 24 6.16036 24 11.3604V17.1204C24 22.0004 26 24.0004 30 24.0004H36.64Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M40.0008 29.3995C38.1408 38.6595 29.2608 45.3795 19.1608 43.7395C11.5808 42.5195 5.48084 36.4195 4.24084 28.8395C2.62084 18.7795 9.30084 9.89953 18.5208 8.01953"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div
                className="text-20 lg:text-24 leading-[1.3] font-bold tracking-[-0.09] mt-3 lg:mt-4 mb-1"
              >
                Business
              </div>
              <div className="opacity-70 text-14 lg:text-16 leading-[1.5]">
                Increased conversion and expension on new markets Dynamic
                business devolopment.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default More6;