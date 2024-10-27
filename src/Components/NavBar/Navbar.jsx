import React from 'react'
import '../NavBar/Navbar.css';
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import ButtonCmn from '../Common/ButtonCmn';

function Navbar() {

    const [show, setShow] = React.useState(false);

    return (
        <>
            <nav className='navbar'>
                <div className="container">
                    <div className="menu-row">

                        <div className="logo w-[141px] md:w-[200px] lg:w-[251px]">
                            <img src="/Images/logo.png" alt="" />
                        </div>

                        <div className="hidden lg:block">
                            <div className="menu-dekstop flex gap-[181px]">
                                <ul>
                                    <li><Link>Home</Link></li>
                                    <li><Link>Services</Link></li>
                                    <li><Link>Schedule</Link></li>
                                    <li><Link>Contact us</Link></li>
                                </ul>

                                <ButtonCmn text={"Check Status"} />
                            </div>
                        </div>

                        <div className="block lg:hidden">
                            <RiMenu3Fill className='menu-icon text-[#C4C4C4] bg-[#c4c4c442]' onClick={() => setShow(!show)} />

                            {show && (
                                <div className="menu-mobile relative">
                                    <ul>
                                        <li><Link>Home</Link></li>
                                        <li><Link>Services</Link></li>
                                        <li><Link>Schedule</Link></li>
                                        <li><Link>Contact us</Link></li>

                                        <li><button>Check Status</button></li>
                                    </ul>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
