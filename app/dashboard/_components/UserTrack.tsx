'use client'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { aiOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'
import { AIOutputType } from '../history/page';
import { eq } from 'drizzle-orm';

const UserTrack = () => {

    const { user } = useUser();
    const [TotalUsage, setTotalUsage] = useState<number>(0)


    useEffect(() => {
        user && getData()
    }, [user])

    const getData = async () => {
        if (!user?.primaryEmailAddress?.emailAddress) return; // Check if email exists
        // @ts-ignore 
        const result: AIOutputType[] = await db.select().from(aiOutput)
            .where(eq(aiOutput.createdBy, user.primaryEmailAddress.emailAddress))
        getTotalUsage(result)
    }

    const getTotalUsage = (result: AIOutputType[]) => {
        let total: number = 0;
        result.forEach(element => {
            total = total + Number(element.aiResponse?.length)

        });
        setTotalUsage(total)
    }
    return (
        <div className='m-5'>
            <div className='bg-primary text-white rounded-lg p-3'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-[#9981f9] w-full  rounded-full mt-3'>
                    <div className='h-2 bg-white rounded-full' style={{ width: (TotalUsage / 100000) * 100 + "%" }}></div>

                </div>
                <h2 className='text-sm my-2'>{TotalUsage}/10,0000 Credits Used</h2>
            </div>
            <Button variant={'secondary'} className='text-primary w-full my-3'>Upgrade</Button>

        </div>
    )
}

export default UserTrack