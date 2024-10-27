import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { AiOutlineYoutube } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

function Footer() {
    return (
        <>
            <section className='footer'>
                <div className="container">

                    <div className="footer-main">

                        <div className="footer-logo w-[141px] md:w-[200px] lg:w-[251px]">
                            <img src="/Images/logo.png" alt="" />
                        </div>

                        <div className="footer-menu">
                            <ul>
                                <li><Link>Home</Link></li>
                                <li><Link>Services</Link></li>
                                <li><Link>Schedule</Link></li>
                                <li><Link>Contact us</Link></li>
                            </ul>
                        </div>

                        <div className="footer-icons">
                            <AiOutlineYoutube className='icon' />
                            <CiInstagram className='icon' />
                            <CiTwitter className='icon' />
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Footer
