import React from 'react'


export function Sidenavbar(props) {
   
const items=["Nav Bar", "Hero", "About", "Why should", "Who should", "Course", "Testimonial", "Table", "FAQ"]  

    return (
        <>
<div class="flex h-screen flex-col justify-between border-e bg-white w-[20%]">
  <div class="px-4 py-6 overflow-y-scroll">
 

    <ul class="mt-1">
 

  

    {items.map((item,i)=><li key={i}>
    <a
        href="#"
        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
        {item}
    </a>
    </li>)}

  

  
    </ul>
  </div>

  <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
    <a href="#" class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
      {/* <img
        alt=""
        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        class="size-10 rounded-full object-cover"
      /> */}

      <div>
        <p class="text-xs">
          <strong class="block font-medium">Eric Frusciante</strong>

          <span> eric@frusciante.com </span>
        </p>
      </div>
    </a>
  </div>
</div>
        </>
    )
}


