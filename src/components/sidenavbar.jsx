import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


export function Sidenavbar(props) {
  const  [state, setState] = useState("hero");
  const navigate=useNavigate();

  const handleClick=(item)=>{
    setState(item);
    switch(item){
      case "Hero":{
        navigate("/")
        break;
      };
      case "About":{
        navigate("/about")
        break;
      };
      case "Course":{
        navigate("/course")
        break;
      };
      case "Navbar":{
        navigate("/navbar")
        break;
      };
      case "More":{
        navigate("/more")
        break;
      };
      case "Table":{
        navigate("/table")
        break;
      };
      case "Testimonial":{
        navigate("/testimonial")
        break;
      };
    }
  }
  const handleFinish=()=>{
    navigate("/final")
  }

   
const items=["Hero","About", "Course", "Navbar", "More", "Table", "Testimonial"]  

    return (
        <>
<div className="flex h-screen flex-col justify-between border-e bg-white w-[20%]">
  <div className="px-4 py-6 overflow-y-scroll">
 

    <ul className="mt-1 ">
 

  

    {items.map((item,i)=><li key={i}>
    <button
        className={"block rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100 text-gray-500"+(state===item?"bg-gray-100 text-gray-900":"")}
        onClick={()=>handleClick(item)}
    >
        {item}
    </button>
    </li>)}

  

  
    </ul>
    <button
  className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 ml-[30px] mt-[10px]"
  onClick={handleFinish}
>
 Finish
</button>
  </div>


  <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
    <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
      {/* <img
        alt=""
        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="size-10 rounded-full object-cover"
      /> */}

      <div>
        <p className="text-xs">
          <strong className="block font-medium">Eric Frusciante</strong>

          <span> eric@frusciante.com </span>
        </p>
      </div>
    </a>
  </div>
</div>
        </>
    )
}


