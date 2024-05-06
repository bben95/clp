import React, { useState } from "react";
import Table8 from "../sectionComponents/table/table8";
import Table9 from "../sectionComponents/table/table9";
import Table10 from "../sectionComponents/table/table10";
import Table12 from "../sectionComponents/table/table12";
import { addNumber, removeNumber } from"../redux/index";
import { useSelector, useDispatch } from 'react-redux'

export function Table(props) {
  const indexs = useSelector(state => state.data);
  const components = [<Table8 />, <Table9 />, <Table10 />, <Table12 />];
  const [select, setSelect] = useState(Array(components.length).fill(false));
  const dispatch=useDispatch()

  const handleSelect = (i) => {
    if (select[i] === true) {
      const newArray = [...select];
      newArray[i] = !newArray[i];
      setSelect(newArray);
      dispatch(removeNumber({ index:5 }))
    } else {
      const newArray = select.map((item, index) =>
        index === i ? true : false
      );
      setSelect(newArray);
      dispatch(addNumber({ index:5, number:i }));
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
