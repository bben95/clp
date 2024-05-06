import React, { useState } from "react";
import About1 from "../sectionComponents/about/about1";
import About2 from "../sectionComponents/about/about2";
import About4 from "../sectionComponents/about/about4";
import About5 from "../sectionComponents/about/about5";
import About6 from "../sectionComponents/about/about6";
import About7 from "../sectionComponents/about/about7";
import About8 from "../sectionComponents/about/about8";
import About9 from "../sectionComponents/about/about9";
import About10 from "../sectionComponents/about/about10";
import About11 from "../sectionComponents/about/about11";
import About12 from "../sectionComponents/about/about12";
import { addNumber, removeNumber } from"../redux/index";
import { useSelector, useDispatch } from 'react-redux'
export function About(props) {
  const components = [
    <About1 />,
    <About2 />,
    <About4 />,
    <About5 />,
    <About6 />,
    <About7 />,
    <About8 />,
    <About9 />,
    <About10 />,
    <About11 />,
    <About12 />,
  ];
  const indexs = useSelector(state => state.data);
  const [select, setSelect] = useState(Array(components.length).fill(false)); 
  const dispatch=useDispatch()
  

  const handleSelect = (i) => {
    if (select[i] === true) {
      const newArray = [...select];
      newArray[i] = !newArray[i];
      setSelect(newArray);
      dispatch(removeNumber({ index:2 }))
    } else {
      const newArray = select.map((item, index) =>
        index === i ? true : false
      );
      setSelect(newArray);
      dispatch(addNumber({ index:2, number:i }));
    }
  };
  return (
    <>
      <fieldset>
        <div className="space-y-2 flex flex-col mx-2 my-2 h-[100vh] overflow-scroll">
          {components.map((component, i) => (
            <label
              htmlFor="Option1"
              className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50 w-[90%]"
              key={i}
            >
              <div className="flex items-center">
                &#8203;
                <input
                  type="checkbox"
                  className="size-4 rounded border-gray-300"
                  id="Option1"
                  onChange={() => handleSelect(i)}
                  checked={indexs[2]!==null?indexs[2]===i: select[i]}
                />
              </div>

              <div className="w-[90%]">{component}</div>
            </label>
          ))}
        </div>
      </fieldset>
    </>
  );
}
