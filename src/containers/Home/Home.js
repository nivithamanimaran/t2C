import React from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import homecover1 from '../../assests/Homepage/homecover1.png'
import arrow3 from '../../assests/Homepage/arrow3.svg'

function Home() {
  return (
    <>
      <Navbar page={1} />
      <div className='container-fluid'>
        <div className='row position-absolute'>
          {/* <div className='col'>
            <p className='h1 text-dark p-lg-5 position-absolute'>Start Big from <br /><span className='homeheadcolor'>Day One.</span>
            </p>
            <div className='col'>
            <p className='fs-6'>We work with you in the trenches as your CTO,
              business strategy, design thinking.</p>
            </div>
            <div className='col'>
            <button className='btn btn-dark rounded-5 border border-0 text-light'>Learn More<img src={arrow2} className='img-fluid' alt='arrow2'/></button>
            </div> 
          </div> */}
        </div>
        {/* <div className='row'>
          <div className='col'>
            <img src={homecover1} alt='homecover1' width='100%' />
          </div>
        </div> */}

      </div>
      <div className='container-fluid'>
        <div className='row position-absolute p-lg-5 mt-lg-5'>
          <div className='col pt-lg-5 pt-5'>
            <p className='h1 text-dark mt-lg-5 mx-lg-5'>Start Big from <br /><span className='homeheadcolor'>Day One.</span>
            </p>
            <p className='mx-lg-5 mt-lg-0'>We work with you in the trenches as your CTO,<br/>
              business strategy, design thinking.</p>
            <button className='btn btn-dark rounded-5 fw-bold mx-lg-5' id='headbottoncolor' data-bs-toggle="modal" data-bs-target="#Modal">Learn More <img src={arrow3} className='img-fluid' alt='arrow2'width='12%'/></button>
          </div>
        </div>
        <div className='row'>
          <div className='col p-0'>
            <img src={homecover1} alt='homecoverimg' className='img-fluid col-12 d-none d-sm-none d-md-block d-lg-block' />
            {/* <img src={homemobile} alt='homecoverimg' className='img-fluid col-12 d-block d-sm-block d-md-none d-lg-none'/> */}
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
