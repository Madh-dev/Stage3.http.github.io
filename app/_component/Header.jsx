import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <main className='mt-6'>
  <div className='w-3/5 m-auto border border-[#197686] rounded-xl p-1  flex justify-between items-center'>
    <Image src='/logo.png' alt='logo' width={60} height={60} />
    {/* <h2>TIkz</h2> */}
    <div className=' justify-between gap-6 items-center hidden md:flex'>
        <Link href={'/'} >Events</Link>
        <Link href={'/tickets'} >My Tickets</Link>
        <Link href={'/about'} >About Project</Link>
    </div>
    <div>
        <button className='bg-white rounded-lg p-3 text-[#0A0C11]'>MY TICKETS </button>
    </div>
    </div>
    </main>
  
  )
}

export default Header
