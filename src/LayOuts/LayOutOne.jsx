import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import { Outlet } from 'react-router-dom'

function LayOutOne() {
    return (
        <>

            <Navbar />
            <Outlet />

        </>
    )
}

export default LayOutOne
