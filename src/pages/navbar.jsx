import React, { useState } from "react";
import NavBar1 from "../sectionComponents/navBar/navBar1";
import NavBar2 from "../sectionComponents/navBar/navBar2";
import NavBar3 from "../sectionComponents/navBar/navBar3";
import { addNumber, removeNumber } from"../redux/index";
import { useSelector, useDispatch } from 'react-redux'

export function Navbar(props) {
  const indexs = useSelector(state => state.data);
  const components = [<NavBar1 />, <NavBar2 />, <NavBar3 />];
  const [select, setSelect] = useState(Array(components.length).fill(false));

  const dispatch=useDispatch()

  const handleSelect = (i) => {
    if (select[i] === true) {
      const newArray = [...select];
      newArray[i] = !newArray[i];
      setSelect(newArray);
      dispatch(removeNumber({ index:0 }))
    } else {
      const newArray = select.map((item, index) =>
        index === i ? true : false
      );
      setSelect(newArray);
      dispatch(addNumber({ index:0, number:i }));
    }
  };

  return (
    <>
      <fieldset>
        <div className="space-y-2 flex flex-col mx-2 my-2 h-[100vh] w-[80vw] overflow-y-scroll">
          {components.map((component, i) => (
            <label
              htmlFor="Option1"
              className="flex cursor-pointer items-center gap-4 rounded-lg py-3 px-4 transition hover:bg-gray-100 has-[:checked]:bg-blue-50 w-[90%]"
              key={i}
            >
              <div className="flex items-center">
                &#8203;
                <input
                  type="checkbox"
                  className="size-4 rounded border-gray-300"
                  id="Option1"
                  checked={indexs[0]!==null?indexs[0]===i: select[i]}
                  onChange={() => handleSelect(i)}
                />
              </div>

              <div className="w-[100%] rounded-lg overflow-hidden shadow-md">{component}</div>
            </label>
          ))}
        </div>
      </fieldset>
    </>
  );
}
