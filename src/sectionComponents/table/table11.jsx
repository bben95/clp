import React from 'react';
import vp from '../../asset/verify-pass.svg';
import vf from '../../asset/verify-fail.svg';

function Table8() {

  return (
    <main>
      <section className="py-5 lg:py-[80px] bg-white">
        <div className="container text-black">
          <div className="text-center">
            <div
              className="text-heading-small lg:text-heading max-w-[505px] mx-auto"
            >
              Our Exclusive Learning Experience
            </div>
            <div
              className="text-small lg:text-xl text-[#888888] max-w-[721px] mx-auto mt-2 lg:mt-3 mb-[40px] lg:mb-6"
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
                    className="mx-auto"
                    src={vp}
                    alt="img11"
                  />
                </td>
                <td>
                  <img
                    className="mx-auto"
                    src={vf}
                    alt="img12"
                  />
                </td>
                <td>
                  <img
                    className="mx-auto"
                    src={vp}
                    alt="img13"
                  />
                </td>
              </tr>
              <tr>
                <td>Interactive Learning</td>
                <td>
                  <img
                    className="mx-auto"
                    src={vf}
                    alt="img14"
                  />
                </td>
                <td>
                  <img
                    className="mx-auto"
                    src={vf}
                    alt="img15"
                  />
                </td>
                <td>
                  <img
                    className="mx-auto"
                    src={vp}
                    alt="img16"
                  />
                </td>
              </tr>
              <tr>
                <td>Accredited Certificates</td>
                <td>
                  <img
                    className="mx-auto"
                    src={vf}
                    alt="img17"
                  />
                </td>
                <td>
                  <img
                    className="mx-auto"
                    src={vp}
                    alt="img18"
                  />
                </td>
                <td>
                  <img
                    className="mx-auto"
                    src={vp}
                    alt="img19"
                  />
                </td>
              </tr>
              <tr>
                <td>Competitive Pricing (INR)</td>
                <td>
                  <img
                    className="mx-auto"
                    src={vf}
                    alt="img20"
                  />
                </td>
                <td>
                  <img
                    className="mx-auto"
                    src={vp}
                    alt="img21"
                  />
                </td>
                <td>
                  <img
                    className="mx-auto"
                    src={vp}
                    alt="img22"
                  />
                </td>
              </tr>
              <tr>
                <td>Money-Back Guarantee</td>
                <td>
                  <img
                    className="mx-auto"
                    src={vp}
                    alt="img23"
                  />
                </td>
                <td>
                  <img
                    className="mx-auto"
                    src={vf}
                    alt="img24"
                  />
                </td>
                <td className="last-cell">
                  <img
                    className="mx-auto"
                    src={vp}
                    alt="img25"
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
