import Link from 'next/link';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-slate-800 text-lg py-6 relative flex items-center justify-center gap-3'>
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
