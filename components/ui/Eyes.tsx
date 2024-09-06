'use client'
import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate, setrotate] = useState(0)
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;
            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setrotate(angle - 180)
        })
    })
    return (
        <div className='w-full h-screen overflow-hidden'>
            <div className='relative w-full h-full bf-cover bg-center'>
                <div className='flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                    <div className='w-[12vw] h-[12vw] flex items-center justify-center bg-[#00cdac] rounded-full'>
                        <div className='relative w-2/3 h-2/3 items-center justify-center bg-black rounded-full'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7'>
                                <div className='w-7 h-7 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[12vw] h-[12vw] flex items-center justify-center bg-[#00cdac] rounded-full'>
                        <div className='relative w-2/3 h-2/3 flex items-center justify-center bg-black rounded-full'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7'>
                                <div className='w-7 h-7 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Eyes