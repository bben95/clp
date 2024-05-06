import React, { useState } from "react";
import Course1 from "../sectionComponents/course/course1";
import Course2 from "../sectionComponents/course/course2";
import Course3 from "../sectionComponents/course/course3";
import Course4 from "../sectionComponents/course/course4";
import Course6 from "../sectionComponents/course/course6";
import Course5 from "../sectionComponents/course/course5";
import Course7 from "../sectionComponents/course/course7";
import Course8 from "../sectionComponents/course/course8";
import Course9 from "../sectionComponents/course/course9";
import Course10 from "../sectionComponents/course/course10";
import Course11 from "../sectionComponents/course/course11";
import Course12 from "../sectionComponents/course/course12";
import { addNumber, removeNumber } from"../redux/index";
import { useSelector, useDispatch } from 'react-redux'

export function Course(props) {
  const components = [
    <Course1 />,
    <Course2 />,
    <Course3 />,
    <Course4 />,
    <Course5 />,
    <Course6 />,
    <Course7 />,
    <Course8 />,
    <Course9 />,
    <Course10 />,
    <Course11 />,
    <Course12 />,
  ];
  const indexs = useSelector(state => state.data);
  const [select, setSelect] = useState(Array(components.length).fill(false));
  const dispatch=useDispatch()

  const handleSelect = (i) => {
    if (select[i] === true) {
      const newArray = [...select];
      newArray[i] = !newArray[i];
      setSelect(newArray);
      dispatch(removeNumber({ index:3 }))
    } else {
      const newArray = select.map((item, index) =>
        index === i ? true : false
      );
      setSelect(newArray);
      dispatch(addNumber({ index:3, number:i }));
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
            >
              <div className="flex items-center">
                &#8203;
                <input
                  type="checkbox"
                  className="size-4 rounded border-gray-300"
                  id="Option1"
                  checked={indexs[2]!==null?indexs[2]===i: select[i]}
                  onChange={() => handleSelect(i)}
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
