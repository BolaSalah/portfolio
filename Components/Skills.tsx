import React from 'react';
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiJest, SiTypescript } from 'react-icons/si';

interface ISkill {
  title: string;
  icon: React.JSX.Element;
}

const Skills = () => {
  // Array of project
  const SkillsArray: ISkill[] = [
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
    <div className='skills' id='Skills'>
      <h1 data-aos='zoom-in' className='skills-title'>
        sk<span className='yellow'>ills</span>
      </h1>
      <div className='skills-container'>
        {SkillsArray.map((skill, index) => (
          <div
            data-aos='fade-up'
            data-aos-delay={`${index}00`}
            key={index}
            className='skills-item'
          >
            <div className='skills-item-icon'>{skill.icon}</div>
            <p className='skills-item-title'>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
