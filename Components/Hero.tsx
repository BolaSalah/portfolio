import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'; // cv icon
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/solid'; // cv icon
import TextEffect from './TextEffect'; // to type effect
import { ToastContainer, toast } from 'react-toastify'; // to show toast when click download cv
import 'react-toastify/dist/ReactToastify.css'; //toast show when click download cv 
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const notify = () => toast(`Preparing Download...`);

  return (
    <div className='hero' id='Home'>
      <div className='hero-main-container'>
        {/* hero-main */}
        <div className='hero-main'>
          <h1 className='hero-name'>
            HI, I &rsquo; m <span className='text-yellow-300'>Bola Salah</span>
          </h1>
          <TextEffect />
          <div className='hero-description'>
            I have an experience in building responsive and user-friendly
            websites , creating engaging user interfaces. Expertise in Front-End
            Technologies: From vanilla JavaScript to cutting-edge frameworks
            with React.js
          </div>
          <div className='hero-container-cv'>
                <a href='./cv/FrontEnd-Bola-Resume.pdf'download onClick={notify}
                  target='_blank' className='hero-cv-download-link'>
                  <p>download cv</p>
                  <ArrowDownTrayIcon className='hero-cv-download-link-icon' />
                </a>
              <ToastContainer position='bottom-right'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'/>
                <Link href='https://drive.google.com/file/d/15HmB6f3uzaYmkU7hocyGVrdmo-XrOr-O/view?usp=sharing' 
                  target='_blank' className='hero-cv-download-link'>
                  <p>View cv</p>
                  <DocumentMagnifyingGlassIcon className='hero-cv-download-link-icon' />
                </Link>
          </div>
        </div>
        {/* hero-image */}
        <div className='hero-image-container'>
          <Image
            width={400}
            height={400}
            src='/images/3.png'
            alt='bola'
            className='hero-image'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
