import React from 'react';
import cg from '../../asset/check-green.svg';
import cross from '../../asset/cross-red.svg';

function Table12() {

  return (
    <main>
     <section className="section-pad">
        <div className="container">
          <div className="flex flex-wrap lg:flex-nowrap -mx-2">
            <div className="w-full lg:w-1/3 px-2">
              <div className="font-heading stroke-text opacity-20">USP</div>

              <h2 className="heading-medium bg-white relative mb-4 max-w-[540px]">
                What makes us different from others
              </h2>

              <p>
                Our experienced instructors will lead you through gentle and
                accessible yoga sessions, focusing on foundational poses
                (asanas), breathing techniques (pranayama), and relaxation
                methods.
              </p>
            </div>

            <div className="w-full lg:w-2/3 px-2">
              <div className="py-5 lg:py-0 lg:pl-8">
                <div className="overflow-auto">
                    
                  <table className="w-full bg-lightyellow">
                    <thead>
                      <tr>
                        <th
                          className="p-2 md:p-3 text-14 md:text-20 font-medium border-b border-b-white border-r border-r-white"
                        ></th>
                        <th
                          className="p-2 md:p-3 text-14 md:text-20 font-medium border-b border-b-white border-r border-r-white"
                        >
                          Graphy
                        </th>
                        <th
                          className="p-2 md:p-3 text-14 md:text-20 font-medium border-b border-b-white border-r border-r-white"
                        >
                          Udemy
                        </th>
                        <th
                          className="bg-primary p-2 md:p-3 text-14 md:text-20 font-medium text-white border-b border-b-white border-r border-r-white"
                        >
                          RIGI
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          className="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white"
                        >
                          Video Lessons
                        </td>
                        <td
                          className="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cg}
                            className="inline-block w-[20px] md:w-auto"
                            alt="img11"
                          />
                        </td>
                        <td
                          className="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cg}
                            className="inline-block w-[20px] md:w-auto"
                            alt="img12"
                          />
                        </td>
                        <td
                          className="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cg}
                            className="inline-block w-[20px] md:w-auto"
                            alt="img13"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white"
                        >
                          PDF Resources
                        </td>
                        <td
                          className="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cg}
                            className="inline-block w-[20px] md:w-auto"
                            alt="img14"
                          />
                        </td>
                        <td
                          className="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cross}
                            className="inline-block w-[20px] md:w-auto"
                            alt="img15"
                          />
                        </td>
                        <td
                          className="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cg}
                            className="inline-block w-[20px] md:w-auto"
                            alt="img16"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white"
                        >
                          Lifetime Validity
                        </td>
                        <td
                          className="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cross}
                            className="inline-block w-[20px] md:w-auto"
                            alt="img17"
                          />
                        </td>
                        <td
                          className="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cross}
                            className="inline-block w-[20px] md:w-auto"
                            alt="img18"
                          />
                        </td>
                        <td
                          className="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cg}
                            className="inline-block w-[20px] md:w-auto"
                            alt="img19"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white"
                        >
                          Live Zoom classes
                        </td>
                        <td
                          className="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cg}
                            className="inline-block w-[20px] md:w-auto"
                            alt="img21"
                          />
                        </td>
                        <td
                          className="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cross}
                            className="inline-block w-[20px] md:w-auto"
                            alt="img22"
                          />
                        </td>
                        <td
                          className="p-2 md:p-4 text-14 md:text-20 font-medium border-r border-r-white text-center"
                        >
                          <img
                            src={cg}
                            className="inline-block w-[20px] md:w-auto"
                            alt="img23"
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
