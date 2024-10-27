import React from 'react'
import './Feedback.css'
import { FaPaperPlane } from "react-icons/fa";

function Feedback() {
    return (
        <>
            <section className='feedback relative'>
                <div className="container">

                    <div className='feedbackHead text-center'>
                        <h2 className='font-Montserrat font-bold text-primary'>FEEDBACK</h2>
                        <h3 className='font-Montserrat font-extrabold text-[#000000]'>
                            What our Patients Think
                        </h3>
                        <p className='font-Montserrat font-normal text-[#000000] opacity-[50%]'>
                            Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit.
                            Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.
                        </p>
                    </div>


                    <div className="doctors">

                        <div className="doc">
                            <div className="docInfo flex justify-start items-center gap-[20px]">
                                <img src="../Images/doctor.png" alt="" />

                                <div className="docName">
                                    <h3 className='font-Montserrat font-bold text-[#000000]'>Oyindamola Maja</h3>
                                    <p className='font-Montserrat font-bold text-[#000000] opacity-[50%]'>Badagry, Lagos</p>
                                </div>
                            </div>

                            <p className='p font-Montserrat font-normal text-[#000000] opacity-[60%] text-center'>
                                “Been stressing about a close centre
                                to get the covid-19 vaccine, until
                                i tried Vaccination.ng”
                            </p>
                        </div>


                        <div className="doc">
                            <div className="docInfo flex justify-start items-center gap-[20px]">
                                <img src="../Images/doctor.png" alt="" />

                                <div className="docName">
                                    <h3 className='font-Montserrat font-bold text-[#000000]'>Oyindamola Maja</h3>
                                    <p className='font-Montserrat font-bold text-[#000000] opacity-[50%]'>Badagry, Lagos</p>
                                </div>
                            </div>

                            <p className='p font-Montserrat font-normal text-[#000000] opacity-[60%] text-center'>
                                “Been stressing about a close centre
                                to get the covid-19 vaccine, until
                                i tried Vaccination.ng”
                            </p>
                        </div>


                        <div className="doc">
                            <div className="docInfo flex justify-start items-center gap-[20px]">
                                <img src="../Images/doctor.png" alt="" />

                                <div className="docName">
                                    <h3 className='font-Montserrat font-bold text-[#000000]'>Oyindamola Maja</h3>
                                    <p className='font-Montserrat font-bold text-[#000000] opacity-[50%]'>Badagry, Lagos</p>
                                </div>
                            </div>

                            <p className='p font-Montserrat font-normal text-[#000000] opacity-[60%] text-center'>
                                “Been stressing about a close centre
                                to get the covid-19 vaccine, until
                                i tried Vaccination.ng”
                            </p>
                        </div>

                    </div>



                    <div className="qoute-shadow absolute">

                        <div className="qoute">
                            <h2 className='font-Montserrat font-bold text-secondary'>Get a quote</h2>

                            <p className='font-Montserrat font-normal text-secondary'>
                                Please do enter your email address below
                            </p>

                            <div className="input-colls">
                                <input type="text" placeholder='lenux.ng@gmail.com' />

                                <div className="FaPaperPlane">
                                    <FaPaperPlane className='' />
                                </div>
                            </div>
                        </div>

                    </div>




                </div>
            </section>
        </>
    )
}

export default Feedback
