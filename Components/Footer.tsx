import Link from 'next/link';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <span>© 2024 Bola Salah</span>
      <Link href={'https://github.com/BolaSalah'} target='_blank'>
        <BsGithub />
      </Link>
      <Link href={'https://www.linkedin.com/in/bola-salah'} target='_blank'>
        <FaLinkedin />
      </Link>
    </div>
  );
};

export default Footer;
