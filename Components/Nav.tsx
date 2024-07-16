import { Bars3Icon } from '@heroicons/react/16/solid';
import React from 'react';

interface props {
  openNav: () => void;
}

const Nav = ({ openNav }: props) => {
  return (
    <div className=' shadow-md w-[100%] h-[12vh] bg-[#141c27] z-30 relative top-0 '>
      <div className='flex justify-between items-center h-full w-[80%] mx-auto'>
        <h1 className='flex-[0.6] font-bold text-[25px] text-white cursor-pointer'>
          WEP
          <span className='text-yellow-300'>DEV</span>
        </h1>
        <div className='nav-link'>Home</div>
        <div className='nav-link'>About</div>
        <div className='nav-link'>Projects</div>
        <div className='nav-link'>Skills</div>
        <div className='nav-link'>Contact</div>
        <div onClick={openNav}>
          <Bars3Icon className='w-[2rem] md:hidden cursor-pointer h-[2rem] text-yellow-300' />
        </div>
      </div>
    </div>
  );
};

export default Nav;
