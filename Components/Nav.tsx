import React from 'react';

const Nav = () => {
  return (
    <div className='Navbar'>
      <div className='Navbar-items'>
        <h1 className='Navbar-logo'>
          WEP
          <span className='yellow'>DEV</span>
        </h1>
        <a href='#' className='nav-link'>
          Home
        </a>
        <a href='#About' className='nav-link'>
          About
        </a>
        <a href='#Projects' className='nav-link'>
          Projects
        </a>
        <a href='#Skills' className='nav-link'>
          Skills
        </a>
        <a href='#Contact' className='nav-link'>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Nav;
