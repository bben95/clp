import React from 'react'
import Course1 from '../sectionComponents/course/course1'
import Course2 from '../sectionComponents/course/course2'
import Course3 from '../sectionComponents/course/course3'
import Course4 from '../sectionComponents/course/course4'
import Course6 from '../sectionComponents/course/course6'
import Course5 from '../sectionComponents/course/course5'
import Course7 from '../sectionComponents/course/course7'
import Course8 from '../sectionComponents/course/course8'
import Course9 from '../sectionComponents/course/course9'
import Course10 from '../sectionComponents/course/course10'
import Course11 from '../sectionComponents/course/course11'
import Course12 from '../sectionComponents/course/course12'
import More1 from '../sectionComponents/morecourse/more1'
import More2 from '../sectionComponents/morecourse/more2'
import More3 from '../sectionComponents/morecourse/more3'
import More4 from '../sectionComponents/morecourse/more4'
import More5 from '../sectionComponents/morecourse/more5'
import More6 from '../sectionComponents/morecourse/more6'
import More7 from '../sectionComponents/morecourse/more7'
import More8 from '../sectionComponents/morecourse/more8'

export function Course(props) {
    const components=[<Course1/>,<Course2/>,<Course3/>,<Course4/>,<Course5/>,<Course6/>,<Course7/>,<Course8/>,<Course9/>,<Course10/>,<Course11/>,<Course12/>]
    

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
