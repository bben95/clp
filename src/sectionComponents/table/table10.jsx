import React from 'react';
import verify from '../../asset/verify.svg';
import not from '../../asset/not-verified.svg';
import up from '../../asset/usp-pattern.png';
function Table10() {
  return (
    <main>
    <section className="relative">
      <img src={up} alt="img1" className="absolute lg:bottom-0 bottom-[40%] w-[275px]"/>
      <div className="container">
        <div className="flex gap-4 sm:flex-row flex-col">
          <div className="lg:w-[30%] flex flex-col lg:gap-4  z-10">
            <h2 className="text-[40px] font-bold10">What makes us different from others</h2>
            <h4 className="text-primary10 text-24"> //USPs</h4>
            <p className="font-sora text-16">
              Add this certificate to your CV or your resume or post it
              directly on LinkedIn to enhance your professional credibility
            </p>
          </div>
          <div className="w-[20%] z-10">
          <table style={{ width: '50%' }}>

              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Graphy</th>
                  <th>Udemy</th>
                  <th className="bg-primary text-white">RIGI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="lg:px-[30px] text-start">Video Lessons</td>
                  <td><img alt="img2" src={verify} /></td>
                  <td><img alt="img3" src={verify} /></td>
                  <td><img alt="img4" src={verify} /></td>
                </tr>
                <tr>
                  <td className="lg:px-[30px] text-start">PDF Resources</td>
                  <td><img alt="img5" src={verify} /></td>
                  <td><img alt="img6" src={not} /></td>
                  <td><img alt="img7" src={verify} /></td>
                </tr>
                <tr>
                  <td className="lg:px-[30px] text-start">Lifetime Validity</td>
                  <td><img alt="img8" src={not} /></td>
                  <td><img alt="img9" src={not} /></td>
                  <td><img alt="img10" src={verify} /></td>
                </tr>
                <tr>
                  <td className="lg:px-[30px] text-start">Live Zoom classes</td>
                  <td><img alt="img11" src={verify} /></td>
                  <td><img alt="img12" src={not} /></td>
                  <td><img alt="img13" src={verify} /></td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </section>
    </main>
  );
}

export default Table10;
