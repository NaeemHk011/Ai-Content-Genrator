'use client'
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateSection from './_components/TemplateSection'

const Dashboard = () => {
    const [userSearchInput, setuserSearchInput] = useState<string>()
    return (
        <div>
            {/* search section */}
            <SearchSection onSearchInput={(value: string) => setuserSearchInput(value)} />

            {/* template list section  */}
            <TemplateSection userSearchInput={userSearchInput} />
        </div>
    )
}

export default Dashboard