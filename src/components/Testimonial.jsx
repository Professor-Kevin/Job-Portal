import React from 'react';
import Rating from '@mui/material/Rating';

import { testimonials } from '../Data/Data';

export default function Testimonial() {
    return (
        <div className="mt-5 pt-5">
            <div className='container-fluid text-center my-5'>
                <h1 className='text-secondary fw-bold'>What <span className='text-primary'>user</span>  say about us</h1>
                <p className='text-other'>Explore diverse job opportunities tailored to your skills. Start your carrer journey today !</p>

                <div className="d-flex flex-wrap justify-content-center gap-3">
                    {testimonials.map((item, index) => (
                        <div key={index} className="background-primary border p-3 text-center d-flex flex-column justify-content-between h-auto" style={{ maxWidth: "300px" }}>

                            {/* Profile Image & Name with Rating in one row */}
                            <div className="d-flex align-items-center justify-content-center">
                                <span className="rounded-circle mt-2">
                                    <img src="images/profile.png"
                                        className="job-category-card-img rounded-circle"
                                        style={{ width: "50px", height: "50px" }}
                                        alt="profile" />
                                </span>
                                <div className="d-flex flex-column align-items-start ms-3">
                                    <h6 className="text-secondary mb-1">{item.name}</h6>
                                    <Rating name="read-only" value={item.rating} readOnly size="small" />
                                </div>
                            </div>

                            {/* Testimonial Text Below */}
                            <p className="text-secondary mt-2">{item.testimonial}</p>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}
