import React from 'react'
import { Search } from 'lucide-react';

const SearchSection = ({ onSearchInput }: any) => {
    return (
        <div className='p-2 font-semibold text-white bg-gradient-to-br from-[#0b6477] to-green-600 flex justify-center items-center flex-col '>
            <p>What would you like to create today?</p>
            <div className='flex justify-center items-center w-full '>
                <div className=' flex gap-2 items-center rounded-md border p-1 bg-white my-5 w-[50%] '>
                    <Search className='text-primary' />
                    <input type="text" placeholder='Seach...' onChange={(event) => onSearchInput(event.target.value)} className='bg-transparent w-full outline-none text-black' />
                </div>
            </div>
        </div>
    )
}

export default SearchSection