import React from 'react';

const About = () => {
  const data =[
    {monthStart:"Sep",yearStart:"2019",monthEnd:"May",yearEnd:"2023",title:"future academy",dep:"computer science"},
    {monthStart:"Aug",yearStart:"2022",monthEnd:"Sep",yearEnd:"2022",title:"ITI Course for 1 month",dep:"Ui & Ux Development"},
    {monthStart:"Nov",yearStart:"2023",monthEnd:"April",yearEnd:"2024",title:"ITI course for 4 months",dep:"Front-End Development"},
  ]
  return (
    <div className='bg-slate-800 py-20 relative'>
      <h1 className='w-[80%] mx-auto lg:hidden block uppercase font-bold text-4xl text-white mb-12 text-center'>
            About <span className='text-yellow-300'>me</span>
          </h1>
      <div className='w-[80%] mx-auto grid lg:grid-cols-2 grid-cols-1 items-center overflow-x-hidden'>
        {/* about-data */}
        <div className='px-10 lg:order-1 order-2'>
          <h1 className=' hidden lg:block uppercase font-bold text-3xl text-white mb-5 text-center'>
            About <span className='text-yellow-300'>me</span>
          </h1>
          {/* data */}
          {data.map((ele,index) => (
            <div className='flex items-center text-center bg-[#55e6a5] my-10' key={index}>
              <div className='bg-yellow-300 -rotate-[30deg] origin-bottom-left sm:text-xl w-[15%] '>
                <p>{ele.monthStart}</p>
                <p>{ele.yearStart}</p>
              </div>
              <h1 className='w-[70%] sm:text-lg text-sm'>
                <p>{ele.title}</p>
                <p>{ele.dep}</p>
              </h1>
              <div className='bg-yellow-300 rotate-[30deg] origin-bottom-right sm:text-xl w-[15%] '>
                <p>{ele.monthEnd}</p>
                <p>{ele.yearEnd}</p>
              </div>
            </div>
          ))}
        </div>
        {/* about-image */}
        <div className='sm:w-[450px] sm:h-[450px] w-[300px] h-[300px] mx-auto overflow-hidden relative lg:order-2 order-1'>
          <div className='bg-[#55e6a5] absolute top-8 left-8 w-[90%] h-[90%]'></div>
          <div className='w-[90%] h-[90%] overflow-hidden absolute'>
            <img src='./images/4.png' alt='About-image' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
