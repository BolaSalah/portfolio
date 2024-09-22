import Link from 'next/link';
import React from 'react'

const MobileNav = (  ) => {
  return (
    <div className='flex justify-center md:hidden'>
      <div className={`fixed bottom-2 z-1 w-[80%] bg-[#141c27] rounded-lg`}>
        <div className='flex justify-center items-center p-1 pb-2 '>
          <div className='w-1/5 flex justify-center'>
            <p className='nav-link text-[10px] sm:text-[20px]'>Home</p>
          </div>
          <div className='w-1/5 flex justify-center'>
            <p className='nav-link text-[10px] sm:text-[20px]'>About</p>
          </div>
          <div className='w-1/5 flex justify-center'>
            <p className='nav-link text-[10px] sm:text-[20px]'>Projects</p>
          </div>
          <div className='w-1/5 flex justify-center'>
            <p className='nav-link text-[10px] sm:text-[20px]'>Skills</p>
          </div>
          <div className='w-1/5 flex justify-center'>
            <p className='nav-link text-[10px] sm:text-[20px]'>Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav