import React from 'react'
import Companies from '../components/Companies'
import JobCategory from '../components/JobCategory'
import Footer from '../components/Footer'
import Working from '../components/Working'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'

export default function HomePage() {
    return (
        <>
            <div className="background-primary ">
                <div className="container-fluid pt-5">
                    <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
                        {/* Left Side Content */}
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center text-center text-md-start flex-column p-4">
                            <div className="container d-flex flex-column text-secondary">
                                <h1 className="fs-1 fw-bold">Get Your First <span className="text-primary">JOB</span></h1>
                                <p className="fs-2">Don't hustle for Job, Hustle for skills</p>
                            </div>

                            <div className="mx-auto rounded-5 w-100 w-md-50">
                                <form action="" className="d-flex flex-column flex-md-row justify-content-center gap-2">

                                    <div className="background-secondary p-2 rounded-4 w-100 w-md-auto">
                                        <label className="form-label text-secondary ms-2">Job Title</label>
                                        <input type="text" className="form-control background-secondary border-0 text-secondary outline-none" placeholder="Software Developer" />
                                    </div>

                                    <div className="background-secondary p-2 rounded-4 w-100 w-md-auto">
                                        <label className="form-label text-secondary ms-2">Job Type</label>
                                        <input type="text" className="form-control background-secondary border-0 text-secondary outline-none" placeholder="Development" />
                                    </div>

                                    <div className="text-center">
                                        <button className="btn background-other p-4 w-100 w-md-auto rounded-4">
                                            <i className="fa-brands fa-searchengin fs-3 fw-bold"></i>
                                        </button>
                                    </div>

                                </form>
                            </div>

                        </div>

                        {/* Right Side Image */}
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                            <img className="img-fluid homepage-img w-75 w-md-100" src="images/Boy.png" alt="no pic" />
                        </div>
                    </div>
                </div>

                <Companies />
                <JobCategory />
                <Working/>
                <Testimonial/>
                <NewsLetter/>
                <Footer/>
            </div>


        </>
    )
}
