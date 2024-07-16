import React from 'react'
import { BiLogoGmail } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const ContactUs = () => {

    // Array of project
    const ContactUsArray = [
      { title: 'Address', icon: <FaLocationDot />, data: 'El Nozha 2 - Cairo'},
      { title: 'WhatsApp', icon: <FaWhatsapp />, data: '01202554039'},
      { title: 'Send Us Email', icon: <BiLogoGmail />, data: 'BolaSalah1999@gmail.com'}
    ];
  return (
    <div className=' bg-black p-12 relative' id='contact'>
      <h1
        data-aos='zoom-in'
        className='uppercase text-white font-bold text-3xl w-[90%] text-center mx-auto'
      >
        Contact<span className='text-yellow-300'>us</span>
      </h1>
      <div className='flex flex-wrap gap-1 w-[90%] mx-auto justify-center items-center'>
        {ContactUsArray.map((item, index) => (
          <div
            data-aos='fade-up'
            data-aos-delay='300'
            key={index}
            className='lg:w-[33%] sm:w-[49%] w-[98%]  mx-auto my-10 flex gap-5 p-4 '
          >
            <div className='sm:text-7xl text-4xl bg-[#55e6a5] p-4 rounded-full'>
              {item.icon}
            </div>
            <div className='text-white mt-2'>
              <h1 className='sm:text-2xl text-lg mb-3'>{item.title}</h1>
              <p className='sm:text-lg text-sm'>{item.data}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactUs