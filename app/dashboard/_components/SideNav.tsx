'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import UserTrack from './UserTrack'

const SideNav = () => {
    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path: '/dashboard/billing'
        },
        {
            name: 'Setting',
            icon: Settings,
            path: '/dashboard/settings'
        }
    ]

    const path = usePathname();
    useEffect(() => {
        console.log(path)
    }, [path]);

    return (
        <div className='h-screen p-5 mb-10 shadow-sm border bg-white'>
            <Link href={'/'}><div className='flex justify-center gap-1'>

                <Image src={'/logo.svg'} alt='logo' width={60} height={60} />
                <h2 className='semibold'>Content Generator Ai</h2>

            </div> </Link>
            <hr className='my-1.5 border' />
            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <Link key={index} href={menu.path}>
                        <div className={`flex mt-3 gap-4  p-2 items-center hover:bg-[#00cdac] hover:text-white rounded-lg cursor-pointer ${path === menu.path ? 'bg-[#00cdac] text-black' : ''}`}>
                            <menu.icon className='h-6 w-6' />
                            <h2 className='text-md'>{menu.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='absolute bottom-10 left-0 w-full '>
                <UserTrack />
            </div>

        </div>
    )
}

export default SideNav;
