import React from 'react'

function ButtonCmn({ text }) {
    return (
        <>
            <button className='w-[138px] h-[50px] md:w-[175px] md:h-[64px] lg:w-[200px] lg:h-[69px]  text-[14px] md:text-[20px] lg:text-[24px] bg-[rgb(255,255,255,0.1)] rounded-[20px] border-2 border-primary border-solid  text-secondary font-Montserrat font-bold hover:border-transparent hover:bg-primary
            transition-all duration-500'>
                {text}
            </button>
        </>
    )
}

export default ButtonCmn
