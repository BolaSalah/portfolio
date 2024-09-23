import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IProject {
  GithubRepoLink: string;
  title: string;
  imageUrl: string;
  date: string;
  skills: string;
}

const Projects = () => {
  // Array of project
  const projectsArray: IProject[] = [
    {
      GithubRepoLink: 'https://github.com/BolaSalah/food-delivery',
      title: 'Food-Delivery',
      imageUrl: '/images/projects/6-FoodDelivery.png',
      date: 'Sep - 2024',
      skills: 'React.JS Next.JS TailwindCSS',
    },
    {
      GithubRepoLink: 'https://github.com/BolaSalah/portfolio',
      title: 'Portfolio',
      imageUrl: '/images/projects/5-Portfolio.png',
      date: 'July - 2024',
      skills: 'React.JS Next.JS TailwindCSS',
    },
    {
      GithubRepoLink: 'https://github.com/BolaSalah/Movies-react',
      title: 'Movies',
      imageUrl: '/images/projects/4-Movies.png',
      date: 'July - 2024',
      skills: 'React.JS TailwindCSS',
    },
    {
      GithubRepoLink: 'https://github.com/EslamElkurdi/Amazon',
      title: 'Amazone-clone ( ITI )',
      imageUrl: '/images/projects/3-AmazonClone.png',
      date: 'Mar & Apr - 2024',
      skills: 'React.JS TailwindCSS',
    },
    {
      GithubRepoLink: 'https://github.com/AndrewJacop/facebook-clone',
      title: 'Facbook-clone ( ITI )',
      imageUrl: '/images/projects/2-FacebookClone.png',
      date: 'Feb - 2024',
      skills: 'NativeJS  Bootstrap',
    },
    {
      GithubRepoLink: 'https://github.com/BolaSalah/Bola-Jewellery',
      title: 'Jewellery ( ITI )',
      imageUrl: '/images/projects/1-Jewellery.png',
      date: 'Jan - 2024',
      skills: 'NativeJS Bootstrap',
    },
  ];

  return (
    <div className='bg-black p-12 pt-14 relative' id='Projects'>
      <h1
        data-aos='zoom-in'
        className='uppercase text-white font-bold text-3xl w-[90%] text-center mx-auto'
      >
        pro<span className='text-yellow-300'>jects</span>
      </h1>
      <div className='flex flex-wrap gap-8 my-8 w-[90%] mx-auto justify-center items-center'>
        {projectsArray.map((project, index) => (
          <div
            data-aos='fade-up'
            data-aos-delay={`${index*2}00`}
            className='bg-slate-700 my-4 lg:w-[30%] sm:w-[45%] w-[90%] rounded-lg shadow-CardProjects overflow-hidden'
            key={index}
          >
            <Link href={project.GithubRepoLink} target='_blank'>
              <div className=' hover:bg-slate-800 duration-500 transition text-white  text-center'>
                <div>
                  <Image
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='mb-5 h-[220px] w-full'
                    src={project.imageUrl}
                    alt={project.title}
                  />
                </div>
                <div className='title'>{project.title}</div>
                <div className=' [word-spacing:5px] text-sm xl:text-lg'>
                  {project.skills}
                </div>
                <div className='mt-2'>{project.date}</div>
                <button className='my-3 bg-[#9acdb6] transition duration-500 hover:bg-[#55e6a5] px-8 py-2 rounded-lg text-black'>
                  more
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
