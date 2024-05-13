import React from 'react';
import vp from '../../asset/verify-pass.svg';
import vf from '../../asset/verify-fail.svg';

function Table9() {

  return (
    <main>
     <section className="py-5 lg:pb-[100px] lg:pt-[20px] bg-white">
        <div className="container9 text-secondary">
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
                    className="mx-auto"
                    src={vp}
                    alt="img1"
                  />
                </td>
                <td>
                  <img
                    className="mx-auto"
                    src={vf}
                    alt="img2"
                  />
                </td>
                <td>
                  <img
                    className="mx-auto"
                    src={vp}
                    alt="img3"
                  />
                </td>
              </tr>
              <tr>
                <td>PDF Resources</td>
                <td>
                  <img
                    className="mx-auto"
                    src={vp}
                    alt="img4"
                  />
                </td>
                <td>
                  <img
                    className="mx-auto"
                    src={vp}
                    alt="img5"
                  />
                </td>
                <td>
                  <img
                    className="mx-auto"
                    src={vp}
                    alt="img6"
                  />
                </td>
              </tr>
              <tr>
                <td>Lifetime Validity</td>
                <td>
                  <img
                    className="mx-auto"
                    src={vf}
                    alt="img7"
                  />
                </td>
                <td>
                  <img
                    className="mx-auto"
                    src={vf}
                    alt="img8"
                  />
                </td>
                <td>
                  <img
                    className="mx-auto"
                    src={vp}
                    alt="img9"
                  />
                </td>
              </tr>
              <tr>
                <td>Live Zoom classNamees</td>
                <td>
                  <img
                    className="mx-auto"
                    src={vf}
                    alt="img10"
                  />
                </td>
                <td>
                  <img
                    className="mx-auto"
                    src={vf}
                    alt="img11"
                  />
                </td>
                <td>
                  <img
                    className="mx-auto"
                    src={vp}
                    alt="img12"
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
