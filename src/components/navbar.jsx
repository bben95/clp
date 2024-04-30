import React from 'react'
import logo from '../asset/RigiLogo.png'

export function NavBar(props) {
    

    return (
        <>
            <div className="flex flex-row justify-between border-b bg-white items-center ">
  <div className="px-4 py-2 ">
  <img src={logo} className='w-8' alt="" />
    </div>
    <div className='flex gap-2 mx-[25px]'>
   

<button
  className="inline-block rounded border border-indigo-600 bg-indigo-600 px-2 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"

>
  Download
</button>



<button
  className="inline-block rounded border border-indigo-600 px-2 py-1 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
 
>
  Download
</button>
    </div>
    </div>
        </>
    )
}
