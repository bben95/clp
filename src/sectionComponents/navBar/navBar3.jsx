import React, { useState } from 'react';

const NavBar3 = () => {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <header className="sticky top-0 bg-white z-50 md:pb-[12px] overflow-hidden w-[100vw]">
      {/* Top Banner Marquee Slider */}
      <div className="flex">
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
      <nav className="flex items-center justify-between container mt-0 md:mt-[12px] relative py-1 xl:py-0">
        <div>
          <a href="#!" className="flex w-[119px] md:w-[159px] h-[28px] md:h-4 relative z-[999]">
            <img src="img/rigi/influencers-logo.svg" alt="influencers logo" loading="lazy" width="159" height="32" className="flex" />
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
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="mb-0 mr-[56px]">
              <a className="nav-link" href="#course">Course</a>
            </li>
            <li className="mb-0 mr-[56px]">
              <a className="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li className="mb-0 mr-[56px]">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="mb-0 button-wrapper">
              <a href="#!" className="button py-[12px] px-[20px] bg-primary min-w-[160px] inline-block text-white text-16 leading-[1.5]">
                <div className="relative overflow-hidden">
                  <span className="button-content">Log in</span>
                  <span className="button-content-hover">Log in</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar3;
