import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { jobCategory } from '../Data/Data';

export default function JobCategory() {
    return (
        <div className="mt-5 pt-5">
            <div className='container-fluid text-center my-5'>
                <h1 className='text-secondary fw-bold'>Browse <span className='text-primary'>Job</span> Category</h1>
                <p className='text-other'>Explore diverse job opportunities tailored to your skills. Start your carrer journey today !</p>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={false}
                    navigation={true}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 }
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {jobCategory.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="card background-primary border p-2 text-center job-category-card">
                                <span className='background-other rounded-circle mx-auto my-3'>

                                    <img
                                        src={`images/Category/${item.name}.png`}
                                        className="job-category-card-img p-2"
                                        alt={item.name}
                                    />
                                </span>
                                <h4 className="text-secondary ">{item.name}</h4>
                                <p className="text-secondary ">{item.desc}</p>
                                <h6 className="text-primary fw-bold ">{item.jobs}+ More Job Posted</h6>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    )
}
