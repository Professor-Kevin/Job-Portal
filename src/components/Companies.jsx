import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { companies } from "../Data/Data";

export default function Companies() {
    return (
        <>
            <div className="container text-center my-5 pt-5">
                <h1 className="text-secondary fw-bold">
                    Trusted By <span className="text-primary">1000+</span> Companies
                </h1>
            </div>

            <Swiper
                slidesPerView={5} 
                spaceBetween={30}
                loop={true} 
                autoplay={{ delay: 700, disableOnInteraction: false }}
                modules={[Autoplay]}
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 10 }, // Mobile
                    480: { slidesPerView: 3, spaceBetween: 15 }, // Small screens
                    768: { slidesPerView: 4, spaceBetween: 20 }, // Tablets
                    1024: { slidesPerView: 5, spaceBetween: 25 }, // Desktops
                    1280: { slidesPerView: 6, spaceBetween: 30 }, // Large screens
                }}
            >
                {companies.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="d-flex justify-content-center">
                            <img
                                className="img-fluid companies-img"
                                src={`images/Companies/${item}.png`}
                                alt={item}
                                style={{ maxWidth: "150px", height: "auto" }}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
