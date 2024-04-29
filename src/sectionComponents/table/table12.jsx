import React, { useState} from 'react';
import cg from '../../asset/check-green.svg';
import cross from '../../asset/cross-red.svg';

function Table12() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
     <section class="section-pad">
        <div class="container">
          <div class="flex -mx-2 flex-wrap">
            <div class="w-full lg:w-1/3 px-2">
              <div class="font-heading stroke-text opacity-20">USP</div>

              <h2 class="heading-medium bg-white relative mb-4 max-w-[540px]">
                What makes us different from others
              </h2>

              <p>
                Our experienced instructors will lead you through gentle and
                accessible yoga sessions, focusing on foundational poses
                (asanas), breathing techniques (pranayama), and relaxation
                methods.
              </p>
            </div>

            <div class="w-full lg:w-2/3 px-2">
              <div class="py-5 lg:py-0 lg:pl-8">
                <div class="overflow-auto">
                    
                  <table class="w-full bg-lightyellow " style={{ width: '100%' }}>
                    <thead>
                      <tr>
                        <th
                          class="p-2 md:p-3 text-14 md:text-20 font-medium border-b border-b-white border-r border-r-white"
                        ></th>
                        <th
                          class="p-2 md:p-3 text-14 md:text-20 font-medium border-b border-b-white border-r border-r-white"
                        >
                          Graphy
                        </th>
                        <th
                          class="p-2 md:p-3 text-14 md:text-20 font-medium border-b border-b-white border-r border-r-white"
                        >
                          Udemy
                        </th>
                        <th
                          class="bg-primary p-2 md:p-3 text-14 md:text-20 font-medium text-white border-b border-b-white border-r border-r-white"
                        >
                          RIGI
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          class="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white"
                        >
                          Video Lessons
                        </td>
                        <td
                          class="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cg}
                            class="inline-block w-[20px] md:w-auto"
                            alt=""
                          />
                        </td>
                        <td
                          class="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cg}
                            class="inline-block w-[20px] md:w-auto"
                            alt=""
                          />
                        </td>
                        <td
                          class="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cg}
                            class="inline-block w-[20px] md:w-auto"
                            alt=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white"
                        >
                          PDF Resources
                        </td>
                        <td
                          class="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cg}
                            class="inline-block w-[20px] md:w-auto"
                            alt=""
                          />
                        </td>
                        <td
                          class="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cross}
                            class="inline-block w-[20px] md:w-auto"
                            alt=""
                          />
                        </td>
                        <td
                          class="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cg}
                            class="inline-block w-[20px] md:w-auto"
                            alt=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white"
                        >
                          Lifetime Validity
                        </td>
                        <td
                          class="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cross}
                            class="inline-block w-[20px] md:w-auto"
                            alt=""
                          />
                        </td>
                        <td
                          class="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cross}
                            class="inline-block w-[20px] md:w-auto"
                            alt=""
                          />
                        </td>
                        <td
                          class="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cg}
                            class="inline-block w-[20px] md:w-auto"
                            alt=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white"
                        >
                          Live Zoom Classes
                        </td>
                        <td
                          class="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cg}
                            class="inline-block w-[20px] md:w-auto"
                            alt=""
                          />
                        </td>
                        <td
                          class="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cross}
                            class="inline-block w-[20px] md:w-auto"
                            alt=""
                          />
                        </td>
                        <td
                          class="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cg}
                            class="inline-block w-[20px] md:w-auto"
                            alt=""
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Table12;
