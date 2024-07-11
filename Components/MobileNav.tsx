import { XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react'

interface props {
    nav: boolean;
  closeNav: () => void;
}

const MobileNav = ( { nav, closeNav }: props ) => {
    const navAnimation = nav ? "translate-x-0" : "translate-x-[100%]";
  return (
      <div className={`${navAnimation} z-40 fixed top-0 bottom-0 left-0 right-0 transition duration-300 transform bg-[#141c27]`}>
      <div className='flex justify-center items-center flex-col h-full w-full '>
        <div className='nav-link-mobile'>Home</div>
        <div className='nav-link-mobile'>About</div>
        <div className='nav-link-mobile'>Projects</div>
        <div className='nav-link-mobile'>Skills</div>
        <div className='nav-link-mobile'>Contact</div>
          </div>
          <div onClick={closeNav} className=' text-yellow-300 right-[2rem] top-[2rem] w-[2rem] h-[2rem] cursor-pointer absolute'>
              <XMarkIcon />
          </div>
    </div>
  );
}

export default MobileNav