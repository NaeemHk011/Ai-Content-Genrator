import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
    return (
        <div className='p-3 shadow-sm border-b-2 flex justify-between bg-[#00cdac] '>
            <div><h1 className='text-lg font-bold text-black'>Browse All Templates</h1></div>
            <div className=''>
                {/* <h2 className='bg-[#00cdac]ary p-1 rounded-full text-sx text-white px-2 items-center'>🔥Join Membership for just $9.99/Month</h2> */}
                <UserButton>Profile</UserButton>
            </div>
        </div>
    )
}

export default Header