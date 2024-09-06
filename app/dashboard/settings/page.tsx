import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const Setting = () => {
    return (
        <div className='flex items-center justify-center h-full overflow-hidden'>
            <div className='ml-3 '>
                <UserProfile />
            </div>
        </div>
    )
}

export default Setting
