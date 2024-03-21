import React, { useState } from 'react';


function NavBar1() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <header className="fixed w-full bg-secondary top-0 z-50">
      {/* Top Banner Marquee Slider */}
      <div className="flex mb-1">
        <div className="flex mx-[-0.5px] animate-marquee min-w-full flex-shrink-0 bg-[#ffdb4d] flex-nowrap items-center justify-center overflow-hidden">
          <div className="w-fit whitespace-nowrap py-1 px-3 text-14">
            ⏰ Last Day to Enroll is Today, Hurry Up! Use the Coupon Code HAPPY for the Maximum Discount ⏰
          </div>
          <div className="w-fit whitespace-nowrap py-1 px-3 text-14">
            ⏰ Last Day to Enroll is Today, Hurry Up! Use the Coupon Code HAPPY for the Maximum Discount ⏰
          </div>
          <div className="w-fit whitespace-nowrap py-1 px-3 text-14">
            ⏰ Last Day to Enroll is Today, Hurry Up! Use the Coupon Code HAPPY for the Maximum Discount ⏰
          </div>
        </div>
        <div className="flex animate-marquee min-w-full flex-shrink-0 bg-[#ffdb4d] flex-nowrap items-center justify-center overflow-hidden">
          <div className="w-fit whitespace-nowrap py-1 px-3 text-14">
            ⏰ Last Day to Enroll is Today, Hurry Up! Use the Coupon Code HAPPY for the Maximum Discount ⏰
          </div>
          <div className="w-fit whitespace-nowrap py-1 px-3 text-14">
            ⏰ Last Day to Enroll is Today, Hurry Up! Use the Coupon Code HAPPY for the Maximum Discount ⏰
          </div>
          <div className="w-fit whitespace-nowrap py-1 px-3 text-14">
            ⏰ Last Day to Enroll is Today, Hurry Up! Use the Coupon Code HAPPY for the Maximum Discount ⏰
          </div>
        </div>
      </div>
      <nav className="flex items-center justify-between container mt-0 md:my-[12px] relative py-1 xl:py-0">
        <div>
          <a href="#!" className="flex w-[119px] md:w-[159px] h-[28px] md:h-4 relative z-[999]">
            <img src="img/onyx/onyx-logo.svg" alt="influencers logo" loading="lazy" width="69" height="38" className="flex" />
          </a>
        </div>
        <div className={`nav-area ${open?'nav-open':null}`}>
          <button className={`hamburger relative z-[999] ${open?'active':null}`} onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="md:flex items-center">
            <li className="mb-0 mr-[56px]">
              <a className="nav-link text-white" href="#about">About</a>
            </li>
            <li className="mb-0 mr-[56px]">
              <a className="nav-link text-white" href="#masterclass">Masterclass</a>
            </li>
            <li className="mb-0">
              <a className="nav-link text-white" href="#contact">Contact</a>
            </li>
            <li className="mb-0 button-wrapper inline-block md:hidden">
              <a href="#!" className="button py-[12px] px-[24px] bg-primary min-w-[166px] rounded-[32px] inline-block text-white text-16 leading-[1.5]">
                <div className="relative overflow-hidden">
                  <span className="button-content">Buy Course</span>
                  <span className="button-content-hover">Buy Course</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-0 button-wrapper hidden lg:inline-block">
          <a href="#!" className="button py-[12px] px-[24px] bg-primary min-w-[166px] rounded-[32px] inline-block text-white text-16 leading-[1.5]">
            <div className="relative overflow-hidden">
              <span className="button-content">Buy Course</span>
              <span className="button-content-hover">Buy Course</span>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar1;
