import React from 'react'

export default function NewsLetter() {
    return (
        <div className="my-5 py-5">
            <div className='container text-center mt-5 mb-2 rounded-3 p-3 px-5 background-secondary'>
                <div className="row justify-content-between align-items-center">
                    {/* Left Side: Heading */}
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className='text-secondary fw-bold'>
                            Never want to miss any <span className='text-primary'>Job update</span>
                        </h1>
                    </div>

                    {/* Right Side: Responsive Subscription Form */}
                    <div className="col-lg-6 col-md-6 col-sm-12 bg-secondary p-4 rounded-3">
                        <form className="w-100">
                            <div className="d-flex flex-column flex-md-row bg-body-tertiary rounded-3 p-2 gap-2">
                                {/* Input Field */}
                                <input
                                    type="email"
                                    placeholder="Your@gmail.com"
                                    className="bg-body-tertiary border-0 px-3 py-2 flex-grow-1 w-100"
                                    style={{ outline: 'none' }}
                                />
                                {/* Subscribe Button */}
                                <button
                                    type="submit"
                                    className="btn background-other text-secondary fw-bold px-3 py-2"
                                    style={{ minWidth: '120px' }}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
