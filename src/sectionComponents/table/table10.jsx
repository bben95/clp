import React, { useState} from 'react';
import verify from '../../asset/verify.svg';
import not from '../../asset/not-verified.svg';
import up from '../../asset/usp-pattern.png';
function Table10() {
    const [open,setOpen]=useState(false)

    const handleClick=()=>{
    setOpen(!open);
    }
  return (
    <main>
    <section class="lg:pt-[250px] pt-[200px]  relative">
      <img src={up} class="absolute lg:bottom-0 bottom-[40%] w-[275px]"/>
      <div class="container">
        <div class="flex lg:gap-[136px]  gap-4 sm:flex-row flex-col">
          <div class="lg:w-[45%] flex flex-col lg:gap-4 gap-2 z-10">
            <h2 class="lg:text-[40px] text-[28px]">What makes us different from others</h2>
            <h4 class="text-primary text-16 lg:text-24">// USPs</h4>
            <p class="font-sora text-16">
              Add this certificate to your CV or your resume or post it
              directly on LinkedIn to enhance your professional credibility
            </p>
          </div>
          <div class="lg:w-[55%] z-10">
          <table style={{ width: '100%' }}>

              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Graphy</th>
                  <th>Udemy</th>
                  <th class="bg-primary text-white">RIGI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="lg:px-[30px] text-start">Video Lessons</td>
                  <td><img src={verify} /></td>
                  <td><img src={verify} /></td>
                  <td><img src={verify} /></td>
                </tr>
                <tr>
                  <td class="lg:px-[30px] text-start">PDF Resources</td>
                  <td><img src={verify} /></td>
                  <td><img src={not} /></td>
                  <td><img src={verify} /></td>
                </tr>
                <tr>
                  <td class="lg:px-[30px] text-start">Lifetime Validity</td>
                  <td><img src={not} /></td>
                  <td><img src={not} /></td>
                  <td><img src={verify} /></td>
                </tr>
                <tr>
                  <td class="lg:px-[30px] text-start">Live Zoom Classes</td>
                  <td><img src={verify} /></td>
                  <td><img src={not} /></td>
                  <td><img src={verify} /></td>
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
