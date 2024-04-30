import React from 'react'
import About1 from '../sectionComponents/about/about1'
import About2 from '../sectionComponents/about/about2'
import About4 from '../sectionComponents/about/about4'
import About5 from '../sectionComponents/about/about5'
import About6 from '../sectionComponents/about/about6'
import About7 from '../sectionComponents/about/about7'
import About8 from '../sectionComponents/about/about8'
import About9 from '../sectionComponents/about/about9'
import About10 from '../sectionComponents/about/about10'
import About11 from '../sectionComponents/about/about11'
import About12 from '../sectionComponents/about/about12'


export function About(props) {
  const components=[<About1/>,<About2/>,<About4/>, <About5/>, <About6/>, <About7/>, <About8/>, <About9/>, <About10/>,<About11/>,<About12/>]

  return (
    <>
    <fieldset>

    <div className="space-y-2 flex flex-col mx-2 my-2 h-[100vh] overflow-scroll">
  
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
