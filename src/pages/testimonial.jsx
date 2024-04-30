import React from 'react'
import Test1 from '../sectionComponents/testimonial/test1'
import Test2 from '../sectionComponents/testimonial/test2'
import Test3 from '../sectionComponents/testimonial/test3'
import Test4 from '../sectionComponents/testimonial/test4'
import Test5 from '../sectionComponents/testimonial/test5'
import Test6 from '../sectionComponents/testimonial/test6'
import Test7 from '../sectionComponents/testimonial/test7'
import Test8 from '../sectionComponents/testimonial/test8'
import Test9 from '../sectionComponents/testimonial/test9'
import Test10 from '../sectionComponents/testimonial/test10'
import Test11 from '../sectionComponents/testimonial/test11'

export function Testimonial(props) {
     
    const components=[<Test1/>,<Test2/>,<Test2/>,<Test3/>,<Test4/>,<Test5/>,<Test6/>,<Test7/>,<Test8/>,<Test9/>,<Test10/>,<Test11/>]

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
