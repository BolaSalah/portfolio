import React from 'react'
import { FaBootstrap, FaCss3Alt, FaHtml5, FaReact, FaSass } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiJest, SiTypescript } from 'react-icons/si';

const Skills = () => {

  // Array of project
    const SkillsArray = [
      { title: 'Html', icon: <FaHtml5 /> },
      { title: 'Css', icon: <FaCss3Alt /> },
      { title: 'Tailwind', icon: <RiTailwindCssFill /> },
      { title: 'Bootstrap', icon: <FaBootstrap /> },
      { title: 'Sass', icon: <FaSass /> },
      { title: 'Js', icon: <IoLogoJavascript /> },
      { title: 'TypeScript', icon: <SiTypescript /> },
      { title: 'React.js', icon: <FaReact /> },
      { title: 'Next.js', icon: <RiNextjsFill /> },
      { title: 'Jest', icon: <SiJest /> },
    ];
    
  return (
    <div className='bg-slate-800 p-12 relative'>
      <h1
        data-aos='zoom-in'
        className='uppercase text-white font-bold text-3xl w-[90%] text-center mx-auto'
      >
        sk<span className='text-yellow-300'>ills</span>
      </h1>
      <div className='w-[90%] mx-auto flex sm:gap-2 gap-8 flex-wrap my-12 justify-center'>
        {SkillsArray.map((skill, index) => (
          <div
            data-aos='fade-up'
            data-aos-delay='300'
            key={index}
            className='md:w-[19%] sm:w-[32%] w-[40%] flex flex-col items-center mb-10 py-4 bg-[#55e6a5]'
          >
            <div className='sm:text-8xl text-6xl'>{skill.icon}</div>
            <p className='sm:text-xl mt-3'>{skill.title}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Skills