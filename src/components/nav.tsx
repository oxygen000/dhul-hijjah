import Link from 'next/link'
import React from 'react'

function nav() {
    
  return (
    <div>
      <nav className='flex p-8  '>
        <ul className=' flex-1  '>
        <i><Link href={'#'} className='ml-9 font-medium'>Home</Link></i>
        <i><Link href={'#'} className='ml-9 font-medium'>About</Link></i>
        <i><Link href={'#'} className='ml-9 font-medium'>Event</Link></i>
        <i><Link href={'#'} className='ml-9 font-medium'>Locations</Link></i>
        </ul>
      <Link href={'#'} className='bg-[#111633] font-medium text-white w-35 h-8 text-center p-1'>Contact Us</Link>
      </nav>
    </div>
  )
}

export default nav
