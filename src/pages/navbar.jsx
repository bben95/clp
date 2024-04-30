import React from 'react'
import NavBar1 from '../sectionComponents/navBar/navBar1'
import NavBar2 from '../sectionComponents/navBar/navBar2'
import NavBar3 from '../sectionComponents/navBar/navBar3'


export function Navbar(props) {
    const components=[<NavBar1/>,<NavBar2/>,<NavBar3/>]

    return (
        <>

<fieldset>

  <div className="space-y-2 flex flex-col mx-2 my-2">

{components.map((component) =><label
      htmlFor="Option1"
      className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50 w-[90%]"
    >
      <div className="flex items-center">
        &#8203;
        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option1" />
      </div>

      <div className='w-[90%]'>
        {component}
      </div>
    </label>)}
  </div>
</fieldset>
        </>
    )
}
