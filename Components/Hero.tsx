import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';
import TextEffect from './TextEffect'; // to type effect
import { ToastContainer, toast } from 'react-toastify'; // to show toast when click download cv
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

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
          <div className='hero-cv'>
            <button className='hero-cv-download' onClick={notify}>
              <a href='./cv/FrontEnd-Bola-Resume.pdf' target='_blank' download>
                <p> download cv </p>
              </a>
              <ArrowDownTrayIcon className='w-6 h-6' />
            </button>
            <ToastContainer
              position='bottom-right'
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='dark'
            />
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
