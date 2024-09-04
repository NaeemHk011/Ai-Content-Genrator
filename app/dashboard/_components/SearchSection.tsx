import React from 'react'
import { Search } from 'lucide-react';

const SearchSection = ({onSearchInput}:any) => {
    return (
        <div className='p-6 text-white bg-gradient-to-br from-purple-700 to-blue-600 flex justify-center items-center flex-col '>
            <h1 className='text-2xl font-bold '>Browse All Templates</h1>
            <p>What would you like to create today?</p>
            <div className='flex justify-center items-center w-full '>
                <div className=' flex gap-2 items-center rounded-md border p-1 bg-white my-5 w-[50%] '>
                    <Search className='text-primary' />
                    <input type="text" placeholder='Seach...' onChange={(event)=>onSearchInput(event.target.value)} className='bg-transparent w-full outline-none text-black' />
                </div>
            </div>
        </div>
    )
}

export default SearchSection