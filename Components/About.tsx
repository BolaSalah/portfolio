import React from 'react';
import Image from 'next/image';

interface IData {
  monthStart: string;
  yearStart: string;
  monthEnd: string;
  yearEnd: string;
  title: string;
  dep: string;
}

const About = () => {
  // Array of data
  const data: IData[] = [
    {
      monthStart: 'Nov',
      yearStart: '2023',
      monthEnd: 'April',
      yearEnd: '2024',
      title: 'ITI course for 4 months',
      dep: 'Front-End Development',
    },
    {
      monthStart: 'Sep',
      yearStart: '2019',
      monthEnd: 'May',
      yearEnd: '2023',
      title: 'future academy',
      dep: 'computer science',
    },
    {
      monthStart: 'Aug',
      yearStart: '2022',
      monthEnd: 'Sep',
      yearEnd: '2022',
      title: 'ITI Course for 1 month',
      dep: 'Ui & Ux Development',
    },
  ];
  return (
    <div className='about' id='About'>
      <h1 className='about-title-small'>
        About <span className='yellow'>me</span>
      </h1>
      <div className='about-container'>
        {/* about-data */}
        <div className='abour-left'>
          <h1 data-aos='zoom-in' className='about-title-large'>
            About <span className='yellow'>me</span>
          </h1>
          {/* data */}
          {data.map((ele, index) => (
            <div
              data-aos='fade-left'
              data-aos-delay='100'
              className='about-item'
              key={index}
            >
              <div className='about-item-right'>
                <p>{ele.monthStart}</p>
                <p>{ele.yearStart}</p>
              </div>
              <h1 className='about-item-data'>
                <p>{ele.title}</p>
                <p>{ele.dep}</p>
              </h1>
              <div className='about-item-left'>
                <p>{ele.monthEnd}</p>
                <p>{ele.yearEnd}</p>
              </div>
            </div>
          ))}
        </div>
        {/* about-image */}
        <div data-aos='fade-left' className='about-right'>
          <div className='about-right-box'></div>
          <div className='about-right-container-img'>
            <Image
              width={400}
              height={400}
              src='/images/4.png'
              alt='About-image'
              className='about-right-img'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
