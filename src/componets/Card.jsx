import React from 'react';

export default function Card() {
  return (
    <>
      <section id="card" className='vh-100'>
        <main className=" center h-100">
          <div className="content rounded-3  d-flex  flex-lg-row flex-md-row flex-sm-column flex-column">
            <div className="result p-5 rounded-3 center flex-column">
              <h2 className='title'>Your Result</h2>
              <div className="perntage my-2 rounded-circle center flex-column">
                <span className="num">76</span>
                <span className='text'>of 100</span>
              </div>
              <h2 className='h5 fw-bolder'>Great</h2>
              <p className="text-center">
                You scored higher than 65% of
                the people who have taken 
                these tests.
              </p>
            </div>
            <div className="summary p-5">
              <h2 className='fw-bolder'>Summary</h2>
              <ul className='list-unstyled'>
                <li className='my-3 bgRed p-3 rounded-2'>
                  <span className='iconTxt center fw-bolder'>
                    <i className="fa-solid fa-bolt me-3 fs-3"></i>Reaction
                  </span>
                  <span className='static fw-bolder'>80 <span className="blur">/ 100</span>
                  </span>
                </li>
                <li className='my-3 p-3 rounded-2 bgOrange'>
                  <span className='iconTxt center fw-bolder'>
                    <i className="fa-solid fa-brain me-3 fs-3"></i>Memory
                  </span>
                  <span className='static fw-bolder'>92 <span className="blur">/ 100</span>
                  </span>
                </li>
                <li className='my-3 p-3 rounded-2 bgGreen'>
                  <span className='iconTxt center fw-bolder'>
                    <i className="fa-solid fa-comment-dots me-3 fs-3"></i>Verbal</span>
                  <span className='static fw-bolder'>61 <span className="blur">/ 100</span>
                  </span>
                </li>
                <li className='my-2 p-3 rounded-2 bgBlue'>
                  <span className='iconTxt center fw-bolder'>
                    <i className="fa-solid fa-eye me-3 fs-3"></i>Visual</span>
                  <span className='static fw-bolder'>72 <span className="blur">/ 100</span>
                  </span>
                </li>
              </ul>
              <a href="#" className="btn btnMain px-3 p-2 rounded-pill text-center w-100">Continue</a>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}
