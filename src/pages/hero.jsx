import React from 'react'
import Hero1 from '../sectionComponents/hero/hero1'
import Hero2 from '../sectionComponents/hero/hero2'
import Hero3 from '../sectionComponents/hero/hero3'
import Hero4 from '../sectionComponents/hero/hero4'
import Hero5 from '../sectionComponents/hero/hero5'
import Hero6 from '../sectionComponents/hero/hero6'
import Hero7 from '../sectionComponents/hero/hero7'
import Hero8 from '../sectionComponents/hero/hero8'
import Hero9 from '../sectionComponents/hero/hero9'
import Hero10 from '../sectionComponents/hero/hero10'
import Hero11 from '../sectionComponents/hero/hero11'
import Hero12 from '../sectionComponents/hero/hero12'

export function Hero(props) {
    const components=[<Hero1/>,<Hero2/>,<Hero3/>,<Hero4/>,<Hero5/>,<Hero6/>,<Hero7/>,<Hero8/>,<Hero9/>,<Hero10/>,<Hero11/>,<Hero12/>]
    

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