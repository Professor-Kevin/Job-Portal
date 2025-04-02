import React from 'react';

import { work } from '../Data/Data';

export default function Working() {
    return (
        <div className="mt-5 pt-5">
            <div className='container-fluid text-center my-5'>
                <h1 className='text-secondary fw-bold'>How it <span className='text-primary'>Works</span> </h1>
                <p className='text-other'>Effortlessly navigate through the process and land your dream job</p>

                <div className="row">

                    <div className="col-lg-6 col-md-6 col-sm-12 position-relative">
                        <div className='d-flex justify-content-center'>
                            <img className="img-fluid homepage-img w-75 w-md-100" src="images/Working/Girl.png" alt="no pic" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center text-center text-md-start flex-column p-4">
                        {work.map((item, index) => (
                            <div key={index} className="container d-flex align-items-center text-secondary my-3">
                                {/* Image inside a flexbox wrapper */}
                                <div className="background-other rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '80px', height: '80px' }}>
                                    <img
                                        src={`images/Working/${item.name}.png`}
                                        className="job-category-card-img p-2 img-fluid"
                                        alt={item.name}
                                    />
                                </div>

                                {/* Text Content */}
                                <div className='d-flex flex-column'>
                                    <h4 className="text-secondary">{item.name}</h4>
                                    <p className="text-secondary">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>



            </div >
        </div>
    )
}
