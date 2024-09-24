'use client';
import React, { useState, useEffect, useRef } from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import Particle from './Particle'; // to dynamic background
import { ToastContainer, toast } from 'react-toastify'; // to show toast when click send message

interface IElement {
  title: string;
  icon: React.JSX.Element;
  data: string;
}

const ContactUs = () => {
  const notify = () => toast(`Thanks, you sent a message to Bola`);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
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

  // url of my location
  const mapUrl = 'https://maps.google.com/?q=';
  const latitude = 30.1427316;
  const longitude = 31.3754579;

  // code, whatsAppUrl and phone for whatsapp masssage
  const countryCode = '+20';
  const phoneNumber = '01202554039';
  const whatsAppUrl = 'https://wa.me/';

  // email address for  masssage on gmail
  const emailAddress = 'bolasalah1999@gmail.com';

  // handle function when click on button
  const handleMapClick = (event: any) => {
    // address
    if (event.target.name == 'Address') {
      if (latitude && longitude) {
        window.open(`${mapUrl}${latitude},${longitude}`, '_blank');
      }
    }
    // whatsapp
    else if (event.target.name == 'WhatsApp') {
      window.open(`${whatsAppUrl}${countryCode}${phoneNumber}`, '_blank');
    }
    // gmail
    else if (event.target.name == 'Send Us Email') {
      window.open(`mailto:${emailAddress}`, '_blank');
    }
  };
  const form = useRef<HTMLFormElement | null>(null);

  // send email to me
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      try {
         emailjs.sendForm(
          'service_h9bnen1',
          'template_ejnmuy9',
          form.current,
          {
            publicKey: 'bHJcqMModNrqGVFeu',
          }
        );
        console.log('Email sent successfully!');
        notify();
        setUserName('');
        setUserEmail('');
        setUserMessage('');
      } catch (error) {
        console.error('Failed to send email:', error);
      }
    }
  };
  return (
    <div className='contact' id='Contact'>
      <Particle />
      <h1 data-aos='zoom-in' className='contact-title'>
        Contact<span className='yellow'>us</span>
      </h1>
      <div className='contact-container-items'>
        {ContactUsArray.map((item, index) => (
          <div
            data-aos='fade-up'
            data-aos-delay={`${index}00`}
            key={index}
            className='contact-container-item'
          >
            <button
              name={item.title}
              className='contact-container-item-btn'
              onClick={(event) => {
                handleMapClick(event);
              }}
            ></button>
            <div className='contact-container-item-icon'>{item.icon}</div>
            <div className='contact-container-item-description'>
              <h1 className='contact-container-item-title'>{item.title}</h1>
              <p className='contact-container-item-data'>{item.data}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='contact-container-form'>
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
          <h1 className='contact-form-title'>
            write a <span className='yellow'>message</span> to me
          </h1>
          <div className='contact-form-contianer-inputs'>
            <label className='contact-form-contianer-label'>Name</label>
            <input
              type='text'
              name='user_name'
              className='contact-form-contianer-input'
              required
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <label className='contact-form-contianer-label'>Email</label>
            <input
              type='email'
              name='user_email'
              className='contact-form-contianer-input'
              required
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
            <label className='contact-form-contianer-label'>Message</label>
            <textarea
              name='message'
              className='contact-form-contianer-area'
              required
              value={userMessage}
              onChange={(e) => {
                setUserMessage(e.target.value);
              }}
            />
            <input
              type='submit'
              value='Send'
              className='contact-form-contianer-submit'
            />
          </div>
          <ToastContainer
            position='bottom-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='dark'
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
