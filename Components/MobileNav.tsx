import React from 'react';

const MobileNav = () => {
  return (
    <div className='mobile-nav'>
      <div className='mobile-nav-items'>
        <div className='mobile-nav-item'>
          <a href='#' className='mobile-nav-link'>
            Home
          </a>
        </div>
        <div className='mobile-nav-item'>
          <a href='#About' className='mobile-nav-link'>
            About
          </a>
        </div>
        <div className='mobile-nav-item'>
          <a href='#Projects' className='mobile-nav-link'>
            Projects
          </a>
        </div>
        <div className='mobile-nav-item'>
          <a href='#Skills' className='mobile-nav-link'>
            Skills
          </a>
        </div>
        <div className='mobile-nav-item'>
          <a href='#Contact' className='mobile-nav-link'>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
