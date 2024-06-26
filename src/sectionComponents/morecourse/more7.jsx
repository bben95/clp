import React from 'react';
import ff from '../../asset/flower-fill2.svg';
function More7() {

  return (
    <main>
    <section className="pt-1 lg:py-[50px]">
        <div className="container">
          <div className="text-secondary">
            <div
              className="text-xl lg:text-[40px] lg:leading-[1.2] font-bodoni font-normal mb-4 lg:mb-5"
            >
              What will I learn in this course
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 lg:gap-[20px]">
              <div className="rounded-2xl bg-alabaster px-2 py-2 lg:py-3 lg:px-3">
                <div className="flex items-center">
                  <img src={ff} alt="" />
                  <div className="text-base600 ml-[7px]">
                    Yoga Philosophy and Principles
                  </div>
                </div>
                <div className="mt-2 opacity-80 text-small">
                  Gain an understanding of the basic principles and philosophy
                  of yoga, including concepts like mindfulness and the mind-body
                  connection.
                </div>
              </div>
              <div className="rounded-2xl bg-alabaster px-2 py-2 lg:py-3 lg:px-3">
                <div className="flex items-center">
                  <img src={ff} alt="" />
                  <div className="text-base600 ml-[7px]">
                    Breathing Techniques (Pranayama)
                  </div>
                </div>
                <div className="mt-2 opacity-80 text-small">
                  Learn various breathing exercises that help calm the mind,
                  increase lung capacity, and promote relaxation.
                </div>
              </div>
              <div className="rounded-2xl bg-alabaster px-2 py-2 lg:py-3 lg:px-3">
                <div className="flex items-center">
                  <img src={ff} alt="" />
                  <div className="text-base600 ml-[7px]">
                    Basic Yoga Poses (Asanas):
                  </div>
                </div>
                <div className="mt-2 opacity-80 text-small">
                  Explore a range of foundational yoga poses, focusing on proper
                  alignment, benefits, and modifications. These poses will help
                  improve flexibility & strength.
                </div>
              </div>
              <div className="rounded-2xl bg-alabaster px-2 py-2 lg:py-3 lg:px-3">
                <div className="flex items-center">
                  <img src={ff} alt="" />
                  <div className="text-base600 ml-[7px]">Sun Salutations</div>
                </div>
                <div className="mt-2 opacity-80 text-small">
                  Often used as a warm-up or a complete practice in itself, Sun
                  Salutations (Surya Namaskar) are a sequence of poses that help
                  build strength.
                </div>
              </div>
              <div className="rounded-2xl bg-alabaster px-2 py-2 lg:py-3 lg:px-3">
                <div className="flex items-center">
                  <img src={ff} alt="" />
                  <div className="text-base600 ml-[7px]">
                    Yoga Alignment and Safety
                  </div>
                </div>
                <div className="mt-2 opacity-80 text-small">
                  Understand how to align your body in each pose to prevent
                  injuries and ensure an effective practice. Learning about safe
                  alignment is crucial.
                </div>
              </div>
              <div className="rounded-2xl bg-alabaster px-2 py-2 lg:py-3 lg:px-3">
                <div className="flex items-center">
                  <img src={ff} alt="" />
                  <div className="text-base600 ml-[7px]">Relaxation Techniques</div>
                </div>
                <div className="mt-2 opacity-80 text-small">
                  Discover methods for deep relaxation and stress reduction,
                  such as Savasana (Corpse Pose) and guided relaxation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default More7;