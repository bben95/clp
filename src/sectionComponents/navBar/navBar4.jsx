import React, { useState } from 'react';
import logo from "../../asset/RigiLogo.png";

const NavBar4 = () => {

    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <header className="sticky top-0 bg-primary z-50 overflow-hidden">
      <div className="flex ">
        <div
          className="flex mx-[-0.5px] animate-marquee min-w-full flex-shrink-0 bg-[#ffdb4d] flex-nowrap items-center justify-center overflow-hidden"
        >
          <div className="w-fit whitespace-nowrap py-1 px-3 text-14">
            ⏰ Last Day to Enroll is Today, Hurry Up! Use the Coupon Code
            HAPPY for the Maximum Discount ⏰
          </div>
          <div className="w-fit whitespace-nowrap py-1 px-3 text-14">
            ⏰ Last Day to Enroll is Today, Hurry Up! Use the Coupon Code
            HAPPY for the Maximum Discount ⏰
          </div>
          <div className="w-fit whitespace-nowrap py-1 px-3 text-14">
            ⏰ Last Day to Enroll is Today, Hurry Up! Use the Coupon Code
            HAPPY for the Maximum Discount ⏰
          </div>
        </div>
        <div
          className="flex mx-[-0.5px] animate-marquee min-w-full flex-shrink-0 bg-[#ffdb4d] flex-nowrap items-center justify-center overflow-hidden"
        >
          <div className="w-fit whitespace-nowrap py-1 px-3 text-14">
            ⏰ Last Day to Enroll is Today, Hurry Up! Use the Coupon Code
            HAPPY for the Maximum Discount ⏰
          </div>
          <div className="w-fit whitespace-nowrap py-1 px-3 text-14">
            ⏰ Last Day to Enroll is Today, Hurry Up! Use the Coupon Code
            HAPPY for the Maximum Discount ⏰
          </div>
          <div className="w-fit whitespace-nowrap py-1 px-3 text-14">
            ⏰ Last Day to Enroll is Today, Hurry Up! Use the Coupon Code
            HAPPY for the Maximum Discount ⏰
          </div>
        </div>
      </div>
      <nav
        className="flex items-center justify-between container mt-0 md:py-[18px] relative py-1"
      >
        <div>
          <a
            href="#!"
            className="flex w-[119px] md:w-[159px] h-[28px] md:h-4 relative z-[999]"
          >
            <img
              src="img/Growwth Hub.svg"
              alt=" logo"
              loading="lazy"
              width="106"
              height="32"
              className="flex"
            />
          </a>
        </div>

        <div className="nav-area flex">
          <button className="hamburger relative z-[999]">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="md:flex items-center mt-3 lg:mt-0">
            <li className="mb-0 mr-[56px]">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="mb-0 mr-[56px]">
              <a className="nav-link" href="#course">Courses</a>
            </li>
            <li className="mb-0 mr-[56px]">
              <a className="nav-link" href="#contact">contact</a>
            </li>
            <li className="mb-0 mr-[56px]">
              <a className="nav-link" href="#success-stories">success stories</a>
            </li>
            <li className="mb-0 mr-[56px]">
              <a className="nav-link" href="#blogs">blogs</a>
            </li>
          </ul>
        </div>

        <div className="hidden xl:block">
          <a
            href="#!"
            className="button inline-block py-[10px] px-[28px] bg-primary border border-purple rounded-[60px] text-white text-16"
          >
            <div className="relative overflow-hidden">
              <span className="button-content">BUY COURSES</span>
              <span className="button-content-hover">BUY COURSES</span>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar4;
