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
    <div className='projects' id='Projects'>
      <h1 data-aos='zoom-in' className='projects-title'>
        pro<span className='yellow'>jects</span>
      </h1>
      <div className='projects-container'>
        {projectsArray.map((project, index) => (
          <div
            data-aos='flip-up'
            data-aos-delay={`${index}00`}
            className='projects-item'
            key={index}
          >
            <Link href={project.GithubRepoLink} target='_blank'>
              <div className='projects-item-card'>
                <div>
                  <Image
                    width={200}
                    height={200}
                    className='projects-item-card-img'
                    src={project.imageUrl}
                    alt={project.title}
                  />
                </div>
                <div className='projects-item-card-title'>{project.title}</div>
                <div className='projects-item-card-skills'>
                  {project.skills}
                </div>
                <div>{project.date}</div>
                <button className='projects-item-card-btn'>more</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
