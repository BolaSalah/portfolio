import React, { useState, useEffect } from 'react';

const Nav = () => {

  //  const [show, setShow] = useState(false)
  // const controlNavbar = () => {
  //     if (window.scrollY >  250 ) {
  //         setShow(true)
  //     }else{
  //       setShow(false)
  //     }
  // }

  // useEffect(() => {
  //     window.addEventListener('scroll', controlNavbar)
  //     return () => {
  //         window.removeEventListener('scroll', controlNavbar)
  //     }
  // }, [])

const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
      setShow(true); 
    } else { // if scroll up show the navbar
      setShow(false);  
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  // className={`active ${show && 'hidden'}`}
  return (
      //</div><div className={`active ${show && 'hidden'}`}>
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