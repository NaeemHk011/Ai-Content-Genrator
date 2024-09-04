import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
    return (
        <div className='p-5 shadow-sm border-b-2 flex justify-between '>
            <div className='flex items-center gap-2 p-2 border rounded-md max-w-lg'>
                <Search />
                
                <input type="text" placeholder='Search...' className='outline-none' />
            </div>
            
            <div>
                {/* <h2 className='bg-primary p-1 rounded-full text-sx text-white px-2 items-center'>🔥Join Membership for just $9.99/Month</h2> */}
            </div>
        </div>
    )
}

export default Header