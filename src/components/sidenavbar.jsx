import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Sidenavbar(props) {
  const [state, setState] = useState("hero");
  const navigate = useNavigate();

  const handleClick = (item) => {
    setState(item);
    switch (item) {
      case "Navbar": {
        navigate("/");
        break;
      }
      case "About": {
        navigate("/about");
        break;
      }
      case "Course": {
        navigate("/course");
        break;
      }
      case "Hero": {
        navigate("/hero");
        break;
      }
      case "More": {
        navigate("/more");
        break;
      }
      case "Table": {
        navigate("/table");
        break;
      }
      case "Testimonial": {
        navigate("/testimonial");
        break;
      }
      default:{
        navigate("/");
      }
    }
  };
  const handleFinish = () => {
    navigate("/final");
  };

  const items = [
    "Navbar",
    "Hero",
    "About",
    "Course",
    "More",
    "Table",
    "Testimonial",
  ];

  return (
    <>
      <div className="flex h-screen flex-col justify-between border-e bg-white w-[20%]">
        <div className="px-4 py-6 overflow-y-scroll">
          <ul className="mt-1 ">
            {items.map((item, i) => (
              <li key={i}>
                <button
                  className={
                    "block rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100 text-gray-500" +
                    (state === item ? "bg-gray-100 text-gray-900" : "")
                  }
                  onClick={() => handleClick(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 mt-[10px]"
            onClick={handleFinish}
          >
            Finish
          </button>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">

            <div>
              <p className="text-xs">
                <strong className="block font-medium">Rigi</strong>

                <span> www.rigi.club </span>
              </p>
            </div>
        </div>
      </div>
    </>
  );
}
