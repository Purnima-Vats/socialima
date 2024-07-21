import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='h-24 flex items-center justify-between'>
            {/* LEFT */}
            <div className='md:hidden lg:block w-[20%]'>
                <Link 
                className='text-xl font-bold text-blue-500'
                href="/">SOCIALIMA</Link>
            </div>

            {/* CENTER */}
            <div className='hidden md:flex w-[50%]'>
                {/* LINKS */}
                <div className="flex gap-6 text-gray-600">
                    <Link href="/" className='flex gap-2'>
                        <Image src="/house.svg" width={24} height={24} alt="home" />
                        <span>Home</span>
                    </Link>
                    <Link href="/" className='flex gap-2'>
                        {/* <Image src="/friends.png" width={20} height={20} alt="Friends" /> */}
                        <Image src="/friends.svg" width={24} height={24} alt="Friends"/>
                        <span>Friends</span>
                    </Link>
                    <Link href="/" className='flex gap-2'>
                        {/* <Image src="/stories.png" width={20} height={20} alt="Stories" /> */}
                        <Image src="/stories.svg" width={24} height={24} alt="Stories"/>
                        <span>Stories</span>
                    </Link>
                </div>
            </div>

            {/* RIGHT */}
            <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
                <MobileMenu/>
            </div>
        </div>
    )
}

export default Navbar