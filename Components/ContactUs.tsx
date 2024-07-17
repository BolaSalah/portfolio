import React, { useState, useEffect } from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

interface IElement {
  title: string;
  icon: React.JSX.Element;
  data: string;
}

const ContactUs = () => {

  // Array of elements
  const ContactUsArray: IElement[] = [
    { title: 'Address', icon: <FaLocationDot />, data: 'El Nozha 2 - Cairo' },
    { title: 'WhatsApp', icon: <FaWhatsapp />, data: '01202554039' },
    {
      title: 'Send Us Email',
      icon: <BiLogoGmail />,
      data: 'BolaSalah1999@gmail.com',
    },
  ];

  // get location
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error.message);
          console.error('Error retrieving location:', error);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  // url of my location
  const mapUrl = 'https://maps.google.com/?q='; 

  // code, whatsAppUrl and phone for whatsapp masssage
  const countryCode = '+20'; 
  const phoneNumber = '01202554039';
  const whatsAppUrl = 'https://wa.me/'; 

  // email address for  masssage on gmail
  const emailAddress = 'bolasalah1999@gmail.com';
  
  // handle function when click on button 
  const handleMapClick = (event:any) => {

    // address
    if (event.target.name == "Address") {
    if (latitude && longitude) {
      window.open(`${mapUrl}${latitude},${longitude}`,'_blank');
      }
    }
    // whatsapp
    else if (event.target.name == "WhatsApp") {
      window.open(
       `${whatsAppUrl}${countryCode}${phoneNumber}`,'_blank'
      );
      }
      // gmail
      else if (event.target.name == "Send Us Email") {
      window.open(
       `mailto:${emailAddress}`,'_blank'
      );
      }
  };
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
            data-aos-delay='100'
            key={index}
            className='lg:w-[33%] sm:w-[49%] w-[98%] my-10 p-4 flex sm:gap-5 gap-1 mx-auto hover:cursor-pointer relative'
          >
            <button
            name={item.title}
              className=' w-full h-full absolute top-0 '
              onClick={(event) => {
                handleMapClick(event);
              }}
              >
              </button>
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
};

export default ContactUs;
