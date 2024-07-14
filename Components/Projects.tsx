import Link from 'next/link';
import React from 'react';

const Projects = () => {
  const projectsArray = [
    {
      GithubRepoLink: 'https://github.com/BolaSalah/portfolio',
      title: 'Portfolie',
      imageUrl: './images/projects/5-Portfolio.png',
      date: 'July -2024',
      skills: 'React JS & Next JS - Tailwind CSS',
    },
    {
      GithubRepoLink: 'https://github.com/BolaSalah/Movies-react',
      title: 'Movies',
      imageUrl: './images/projects/4-Movies.png',
      date: 'July -2024',
      skills: 'React JS - Tailwind CSS',
    },
    {
      GithubRepoLink: '',
      title: 'Amazone-clone ( ITI - Team )',
      imageUrl: './images/projects/1-Jewellery.png',
      date: 'Mar & Apr - 2024',
      skills: 'React JS - Tailwind CSS',
    },
    {
      GithubRepoLink: 'https://github.com/AndrewJacop/facebook-clone',
      title: 'Facbook-clone ( ITI - Team )',
      imageUrl: './images/projects/2-FacebookClone.png',
      date: 'Feb -2024',
      skills: 'Native JS - Bootstrap',
    },
    {
      GithubRepoLink: 'https://github.com/BolaSalah/Bola-Jewellery',
      title: 'Jewellery ( ITI - individual )',
      imageUrl: './images/projects/1-Jewellery.png',
      date: 'Jan -2024',
      skills: 'Native JS - Bootstrap',
    },
  ];

  return (
    <div className=' bg-black p-20 relative text-center'>
      <h1 className='uppercase text-white font-bold text-3xl w-[90%] mx-auto'>
        pro<span className='text-yellow-300'>jects</span>
      </h1>
      {/* <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-6 w-[90%] mx-auto'> */}
      <div className='flex flex-wrap my-8 w-[90%] mx-auto justify-center items-center'>
        {projectsArray.map((project, index) => (
          <div className='text-white text-center my-6 px-3 w-1/3 transition duration-500
           transform  hover:-translate-y-8' key={index}>
          <Link href={project.GithubRepoLink} target='blanc'>
              <div className="font-bold">{project.title}</div>
            <div>
              <img
                className='my-3 h-[220px]'
                src={project.imageUrl}
                alt={project.title}
                />
            </div>
            <div>{project.date}</div>
            <div>{project.skills}</div>
           </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
