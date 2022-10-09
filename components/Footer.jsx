import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
    <div className='border- w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
    <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-white'>
                Welinux
            </span>
    </Link>
        </div>

        </div>
    </div>
  )
}

export default Footer