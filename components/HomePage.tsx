import React from 'react'

const HomePage = () => {
    return (
        <div className='w-[75%] mx-auto text-slate-200 text-center'>
            <div className='mt-10 flex flex-col justify-center items-center gap-4 h-[400px]'>
                <div className='bg-[#282828] py-2 px-2 w-fit flex gap-2 items-center rounded-full text-[12px]'>
                    <span className='bg-green-400 px-2 rounded-full text-green-800 border-2 border-green-500'>Claim your text</span>
                    <h4 className='pr-1'>Launch Week X — 11-15 Dec</h4>
                </div>
                <h1 className='text-[72px] leading-[80px]'>Build in a weekend <br /> Scale to millions</h1>
                <p>Supabase is an open source Firebase alternative. <br />Start your project with a Postgres database, Authentication</p>
                <div className='flex gap-4 mt-4'>
                    <button className='bg-white text-[#1E2021] px-10 py-2 rounded-md'>About Us</button>
                    <button className='bg-[#1E2021] px-10 py-2 rounded-md'>Contact us</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage