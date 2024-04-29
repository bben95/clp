import React, { useState} from 'react';
import vp from '../../asset/verify-pass.svg';
import vf from '../../asset/verify-fail.svg';

function Table9() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
     <section class="py-5 lg:pb-[100px] lg:pt-[20px] bg-white">
        <div class="container9 text-secondary">
        <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <th></th>
                <th>Graphy</th>
                <th>Udemy</th>
                <th>RiGi</th>
              </tr>
              <tr>
                <td>Video Lessons</td>
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
                <td>PDF Resources</td>
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
                <td>
                  <img
                    class="mx-auto"
                    src={vp}
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>Lifetime Validity</td>
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
                <td>Live Zoom Classes</td>
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
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default Table9;
