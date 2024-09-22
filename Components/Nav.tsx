import React from 'react';

const Nav = () => {
  return (
    <div className=' shadow-md w-[100%] h-[12vh] bg-[#141c27] z-30 relative top-0 '>
      <div className='flex md:justify-between justify-center items-center h-full md:w-[80%] w-full ms-auto md:mx-auto'>
        <h1 className='md:flex-[0.6] font-bold sm:text-[25px] text-white cursor-pointer'>
          WEP
          <span className='text-yellow-300'>DEV</span>
        </h1>
        <div className='nav-link hidden md:block'>Home</div>
        <div className='nav-link hidden md:block'>About</div>
        <div className='nav-link hidden md:block'>Projects</div>
        <div className='nav-link hidden md:block'>Skills</div>
        <div className='nav-link hidden md:block'>Contact</div>
      </div>
    </div>
  );
};

export default Nav;
