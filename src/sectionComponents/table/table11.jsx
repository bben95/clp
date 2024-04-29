import React, { useState} from 'react';
import vp from '../../asset/verify-pass.svg';
import vf from '../../asset/verify-fail.svg';

function Table8() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
      <section class="py-5 lg:py-[80px] bg-white">
        <div class="container text-black">
          <div class="text-center">
            <div
              class="text-heading-small lg:text-heading max-w-[505px] mx-auto"
            >
              Our Exclusive Learning Experience
            </div>
            <div
              class="text-small lg:text-xl text-[#888888] max-w-[721px] mx-auto mt-2 lg:mt-3 mb-[40px] lg:mb-6"
            >
              Embark on a transformative learning adventure. Discover new
              horizons, expand your skills, and shape your future with our
              exclusive learning experience
            </div>
          </div>
          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <th></th>
                <th>Udemy</th>
                <th>Coursera</th>
                <th>RiGi</th>
              </tr>
              <tr>
                <td>Instructor Quality</td>
                <td>
                  <img
                    class="mx-auto"
                    src={vp}
                    alt=""
                  />
                </td>
                <td>
                  <img
                    class="mx-auto"
                    src={vf}
                    alt=""
                  />
                </td>
                <td>
                  <img
                    class="mx-auto"
                    src={vp}
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>Interactive Learning</td>
                <td>
                  <img
                    class="mx-auto"
                    src={vf}
                    alt=""
                  />
                </td>
                <td>
                  <img
                    class="mx-auto"
                    src={vf}
                    alt=""
                  />
                </td>
                <td>
                  <img
                    class="mx-auto"
                    src={vp}
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>Accredited Certificates</td>
                <td>
                  <img
                    class="mx-auto"
                    src={vf}
                    alt=""
                  />
                </td>
                <td>
                  <img
                    class="mx-auto"
                    src={vp}
                    alt=""
                  />
                </td>
                <td>
                  <img
                    class="mx-auto"
                    src={vp}
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>Competitive Pricing (INR)</td>
                <td>
                  <img
                    class="mx-auto"
                    src={vf}
                    alt=""
                  />
                </td>
                <td>
                  <img
                    class="mx-auto"
                    src={vp}
                    alt=""
                  />
                </td>
                <td>
                  <img
                    class="mx-auto"
                    src={vp}
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>Money-Back Guarantee</td>
                <td>
                  <img
                    class="mx-auto"
                    src={vp}
                    alt=""
                  />
                </td>
                <td>
                  <img
                    class="mx-auto"
                    src={vf}
                    alt=""
                  />
                </td>
                <td class="last-cell">
                  <img
                    class="mx-auto"
                    src={vp}
                    alt=""
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default Table8;