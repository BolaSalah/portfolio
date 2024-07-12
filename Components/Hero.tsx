import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';
import Particle from './Particle';
import TextEffect from './TextEffect';
const Hero = () => {
  return (
    <div className='p-16 bg-[url("/images/banner.jpg")] bg-cover bg-center overflow-x-hidden'>
      <Particle /> 
      <div className='lg:pt-1 pt-2 grid md:grid-cols-2 grid-cols-1 justify-items-center items-center w-[80%] h-full gap-12 mx-auto'>
        {/* hero-main */}
        <div className='flex flex-col justify-center lg:items-start items-center md:order-1 order-2'>
          <h1 className='mb-3 font-bold lg:text-4xl md:text-2xl text-lg text-white'>
            HI, I'm <span className='text-yellow-300'>Bola Salah</span>
          </h1>
          <TextEffect />
          <div className='text-[#ffffff92] mt-3 lg:text-left text-center'>
            I have an experience in building responsive and user-friendly
            websites , creating engaging user interfaces. Expertise in Front-End
            Technologies: From vanilla JavaScript to cutting-edge frameworks
            with React.js
          </div>
          <div className='grid mt-3'>
            <button className='p-4 rounded-lg bg-[#55e6a5] hover:bg-yellow-300 uppercase flex justify-center gap-2'>
              <a href='./cv/Resume.pdf' target='_blank' download>
                <p>download cv</p>
              </a>
              <ArrowDownTrayIcon className='w-6 h-6' />
            </button>
          </div>
        </div>
        {/* hero-image */}
        <div className='md:order-2 order-1 lg:w-[400px] lg:h-[400px] sm:w-[300px] sm:h-[300px] w-[220px] h-[220px] relative flex items-center justify-center rounded-full overflow-hidden'>
          <img
            src='./images/3.png'
            alt='bola'
            className='rounded-full object-contain '
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
