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
        <div className='h-screen p-5 shadow-sm border bg-white'>
            <div className='flex justify-center'>
                <Image src={'/log.svg'} alt='logo' width={120} height={100} />
            </div>
            <hr className='my-7 border' />
            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <Link key={index} href={menu.path}>
                        <div className={`flex mt-5 gap-2 mb-2 p-3 items-center hover:bg-primary hover:text-white rounded-lg cursor-pointer ${path === menu.path ? 'bg-primary text-white' : ''}`}>
                            <menu.icon className='h-6 w-6' />
                            <h2 className='text-lg'>{menu.name}</h2>
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
