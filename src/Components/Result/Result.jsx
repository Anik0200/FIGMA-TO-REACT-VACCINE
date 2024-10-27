import React from 'react'
import './Result.css'
import ButtonCmn from '../Common/ButtonCmn'


export default function Result() {
    return (
        <>
            <section className='result'>
                <div className="container">


                    <div className="main-result">
                        <div className="result-header">
                            <h2 className='font-Montserrat font-bold text-secondary'>Check your COVID-19 result on our Database</h2>
                        </div>
                    </div>


                    <div className="input-collection">

                        <div className="input-f">
                            <input type="text" placeholder='Okeowo' />
                            <input type="text" placeholder='NIK Number' />
                            <ButtonCmn text="Search" />
                        </div>

                        <div className="gg px-[13px] md:px-0">
                            <h2 className='font-Montserrat font-bold text-primary text-center'>
                                Need a certificate for your COVID-19 result?
                                Please click here
                            </h2>
                        </div>
                    </div>



                </div>
            </section>
        </>
    )
}
