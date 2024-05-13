import React, { useState } from "react";
import More1 from "../sectionComponents/morecourse/more1";
import More2 from "../sectionComponents/morecourse/more2";
import More3 from "../sectionComponents/morecourse/more3";
import More4 from "../sectionComponents/morecourse/more4";
import More5 from "../sectionComponents/morecourse/more5";
import More6 from "../sectionComponents/morecourse/more6";
import More7 from "../sectionComponents/morecourse/more7";
import More8 from "../sectionComponents/morecourse/more8";
import { addNumber, removeNumber } from"../redux/index";
import { useSelector, useDispatch } from 'react-redux';

export function More(props) {
  const components = [
    <More1 />,
    <More2 />,
    <More3 />,
    <More4 />,
    <More5 />,
    <More6 />,
    <More7 />,
    <More8 />,
  ];
  const [select, setSelect] = useState(Array(components.length).fill(false));
  const dispatch=useDispatch()
  const indexs = useSelector(state => state.data);

  const handleSelect = (i) => {
    if (select[i] === true) {
      const newArray = [...select];
      newArray[i] = !newArray[i];
      setSelect(newArray);
      dispatch(removeNumber({ index:4 }))
    } else {
      const newArray = select.map((item, index) =>
        index === i ? true : false
      );
      setSelect(newArray);
      dispatch(addNumber({ index:4, number:i }));
    }
  };

  return (
    <>
      <fieldset>
        <div className="space-y-2 flex flex-col mx-2 my-2 h-[100vh] w-[80vw] overflow-y-scroll">
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
                  checked={indexs[4]!==null?indexs[4]===i: select[i]}
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
