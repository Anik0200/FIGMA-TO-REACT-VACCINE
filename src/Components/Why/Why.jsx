import React from 'react'
import './Why.css';
import { LuShield } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { LuUsers2 } from "react-icons/lu";

function Why() {
    return (
        <>
            <section className='why'>
                <div className="container">

                    <div className="why-head">
                        <h2 className='font-Montserrat font-bold text-secondary'>
                            Why get vaccinated
                            today?
                        </h2>
                        <p className='font-Montserrat font-normal text-secondary opacity-[50%]'>
                            Magna adipiscing at elit at ornare lectus nibh lorem.
                            Ac, sed ac lorem pellentesque vestibulum risus matti.
                            In molestie condimentum malesuada non.
                        </p>
                    </div>


                    <div className="items-mains">

                        <div className="item-special text-start">
                            <LuShield className='icon text-[30px] md:text-[46px] text-primary font-bold' />

                            <h2 className='font-Montserrat font-bold text-primary'>
                                Protects your immune
                                system against viruses
                            </h2>

                            <p className='font-Montserrat font-normal text-secondary'>
                                Velit ut consectetur mauris, orci amet,
                                faucibus.
                                Sit turpis fringilla ipsum pretium,
                                dictum. Dolor eget vel nulla lorem ac.
                            </p>

                            <Link className='font-Montserrat font-bold text-secondary'>
                                Read More
                                <span>
                                    <FaArrowRight />
                                </span>
                            </Link>
                        </div>


                        <div className="items-wrap">

                            <div className="item text-start">
                                <LuUsers2 className='icon text-[30px] md:text-[46px] text-secondary font-bold' />

                                <h2 className='font-Montserrat font-bold text-secondary'>
                                    Minimize the spread
                                    of the Virus
                                </h2>

                                <Link className='font-Montserrat font-bold text-secondary'>
                                    Read More
                                    <span>
                                        <FaArrowRight />
                                    </span>
                                </Link>
                            </div>

                            <div className="item text-start">
                                <LuUsers2 className='icon text-[30px] md:text-[46px] text-secondary font-bold' />

                                <h2 className='font-Montserrat font-bold text-secondary'>
                                    Minimize the spread
                                    of the Virus
                                </h2>

                                <Link className='font-Montserrat font-bold text-secondary'>
                                    Read More
                                    <span>
                                        <FaArrowRight />
                                    </span>
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Why
