import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='bg-slate-950 backdrop-blur-lg'>
            <div className='w-[70%] mx-auto'>
                <div className='flex justify-between items-center text-slate-200 py-6'>
                    <div>
                        <img className='w-36' src="https://supabase.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--dark.b36ebb5f.png&w=256&q=75" alt="" />
                    </div>
                    <nav className='flex gap-6 font-light'>
                        <Link href="#">Home</Link>
                        <Link href="#">About</Link>
                        <Link href="#">Services</Link>
                        <Link href="#">Blog</Link>
                        <Link href="#">Contact</Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header