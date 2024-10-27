import React from 'react'
import '../Banner/Banner.css';
import ButtonCmn from '../Common/ButtonCmn';
import { CiClock2 } from "react-icons/ci";


function Banner() {
    return (
        <>
            <section className='banner'>
                <div className="container">
                    <div className="banner-row">

                        <div className="banner-text">
                            <h2 className='font-bold font-Montserrat text-primary'>Get Vaccinated. Boost your Immune System</h2>
                            <h1 className='font-extrabold font-Montserrat text-secondary leading-normal'>
                                COVID-19 Vaccination
                                Got Easier With,
                                <span className='text-primary block'>Vaccination.ng</span>
                            </h1>
                            <p className='font-bold font-Montserrat text-secondary opacity-[70%] leading-normal'>
                                Vaccination.ng will help you find the nearest
                                centre for vaccination, in all 36 states in Nigeria.
                            </p>

                            <div className="banner-btn flex">
                                <ButtonCmn text="Get Vaccine" />
                                <ButtonCmn text="Help Centre" />
                            </div>
                        </div>

                        <div className="banner-image">
                            <img src="/Images/bannerImage.png" alt="" />
                        </div>

                    </div>

                    <div className="banner-footer">
                        <div className="heading flex items-center">
                            <CiClock2 className='clockIcon bg-[rgb(255,255,255,0.1)]  text-primary' />
                            <h2 className='font-bold font-Montserrat text-secondary'>Schedule your Vaccination</h2>
                        </div>

                        <div className="booking bg-[rgb(255,255,255,0.1)]">

                            <div className="book-wrap flex justify-between flex-wrap items-center">

                                <div className="item flex items-center">
                                    <CiClock2 className='bookIcon bg-[rgb(255,255,255,0.1)]  text-primary' />
                                    <div className="text">
                                        <h2 className='font-semibold font-Montserrat text-secondary opacity-[50%]'>Location</h2>
                                        <p className='font-bold font-Montserrat text-secondary'>Ikeja Lagos, Nigeria</p>
                                    </div>
                                </div>

                                <div className="item flex items-center ">
                                    <CiClock2 className='bookIcon bg-[rgb(255,255,255,0.1)]  text-primary' />
                                    <div className="text">
                                        <h2 className='font-semibold font-Montserrat text-secondary opacity-[50%]'>Date</h2>
                                        <p className='font-bold font-Montserrat text-secondary'>29 February, 2022</p>
                                    </div>
                                </div>

                                <div className="item flex items-center order-last">
                                    <CiClock2 className='bookIcon bg-[rgb(255,255,255,0.1)]  text-primary' />
                                    <div className="text">
                                        <h2 className='font-semibold font-Montserrat text-secondary opacity-[50%]'>Vaccine Type</h2>
                                        <p className='font-bold font-Montserrat text-secondary'>Mordena</p>
                                    </div>
                                </div>

                                <div className="item order-last">
                                    <ButtonCmn text="Book Now" />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Banner
