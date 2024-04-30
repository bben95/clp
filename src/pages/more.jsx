import React from 'react'
import More1 from '../sectionComponents/morecourse/more1'
import More2 from '../sectionComponents/morecourse/more2'
import More3 from '../sectionComponents/morecourse/more3'
import More4 from '../sectionComponents/morecourse/more4'
import More5 from '../sectionComponents/morecourse/more5'
import More6 from '../sectionComponents/morecourse/more6'
import More7 from '../sectionComponents/morecourse/more7'
import More8 from '../sectionComponents/morecourse/more8'

export function More(props) {
    
   const components=[<More1/>,<More2/>,<More3/>,<More4/>,<More5/>,<More6/>,<More7/>,<More8/>]

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
