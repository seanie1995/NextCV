'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { fetchSpecificRepos } from './Utils/FetchGithubProjects';
import { CompleteRepoInfo } from '../../types/RepositoryInfo';
import RepoCard from './components/RepoCard';
import Contact from './components/ContactForm';

const projectPhotos = [
  {
    name: 'frostgrave-warband-manager',
    displayName: 'Frostgrave Warband Manager',
    imgUrl: '/images/RepoPhotos/frostgrave.jpg',
  },
  {
    name: 'Planned-Planthood',
    displayName: 'Planned Planthood',
    imgUrl: '/images/RepoPhotos/planned-planthood.png',
  },
  {
    name: 'RestaurantAPI',
    displayName: 'Restaurant Booking API',
    imgUrl: '/images/RepoPhotos/restaurant.jpg',
  },
  {
    name: 'NextCV',
    displayName: 'CV/Portfolio',
    imgUrl: '/images/RepoPhotos/cv.png',
  },
];

export default function Home() {
  const [repos, setRepos] = useState<CompleteRepoInfo[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const fetchData = async () => {
      const data = await fetchSpecificRepos();

      const dataWithPhotos: CompleteRepoInfo[] = data.map((i) => {
        const matchingPhoto = projectPhotos.find((p) => p.name === i.name);
        return {
          ...i,
          imgUrl: matchingPhoto ? matchingPhoto.imgUrl : '',
          displayName: matchingPhoto ? matchingPhoto.displayName : '',
        };
      });

      setRepos(dataWithPhotos);
    };

    fetchData();
  }, []);

  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-16 relative overflow-hidden'>
        {/* Animated background gradient */}
        <div className='absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent pointer-events-none' />
        
        <div className='flex flex-col items-center gap-6 text-center max-w-2xl relative z-10'>
          {/* Profile Photo */}
          <div 
            className={`relative transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse' />
            <Image
              src='/images/NewProfPhoto.jpg'
              alt="Sean's profile photo"
              width={200}
              height={200}
              priority
              className='relative rounded-full w-40 h-40 object-cover border-4 border-purple-600/30 hover:scale-110 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30'
            />
          </div>

          {/* Name and Title */}
          <div 
            className={`space-y-2 transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className='text-purple-400 font-medium tracking-wider uppercase text-sm'>Full Stack Developer</p>
            <h1 className='text-4xl sm:text-5xl font-bold text-white bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default'>
              Sean Schelin
            </h1>
          </div>

          {/* Description */}
          <p 
            className={`text-gray-300 max-w-lg transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Building modern web applications with Next.js and TypeScript.
            Passionate about clean code and great user experiences.
          </p>

          {/* Social Links */}
          <div 
            className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <a
              href='https://www.linkedin.com/in/sean-schelin-057227179/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1 group'
            >
              <FaLinkedin className='group-hover:rotate-12 transition-transform duration-300' />
              LinkedIn
            </a>
            <a
              href='https://github.com/seanie1995'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 px-5 py-2.5 bg-gray-700 hover:bg-gray-800 text-white rounded-lg font-medium transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-gray-500/40 hover:-translate-y-1 group'
            >
              <FaGithub className='group-hover:rotate-12 transition-transform duration-300' />
              GitHub
            </a>
          </div>

          {/* CV Download */}
          <div 
            className={`pt-4 transition-all duration-1000 delay-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className='text-sm text-gray-400 mb-3'>Download CV</p>
            <div className='flex flex-wrap justify-center gap-3'>
              <a
                href='/files/Sean-Schelin-CV-swe.pdf'
                download='Sean-Schelin-CV-swe.pdf'
                className='px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5 border border-white/5 hover:border-purple-500/50'
              >
                Software Engineer
              </a>
              <a
                href='/files/Sean-Schelin-CV-eng.pdf'
                download='Sean-Schelin-CV-eng.pdf'
                className='px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 border border-white/5 hover:border-cyan-500/50'
              >
                English
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
          <div className='w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2'>
            <div className='w-1 h-2 bg-white/50 rounded-full animate-pulse' />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16'
        id='portfolio'
      >
        <div className='mb-10'>
          <h2 className='text-3xl font-bold text-white mb-4 hover:text-purple-400 transition-colors duration-300'>Portfolio</h2>
          <p className='text-gray-400'>
            A selection of projects I&apos;ve worked on.
          </p>
        </div>

        <ul className='grid md:grid-cols-2 gap-6'>
          {repos.length === 0 ? (
            <li className='col-span-full text-center py-12 text-gray-400'>
              Loading projects...
            </li>
          ) : (
            repos.map((repo, index) => (
              <li 
                key={repo.name}
                className='transform transition-all duration-500 hover:scale-[1.02]'
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                  opacity: isVisible ? 1 : 0
                }}
              >
                <RepoCard data={repo} />
              </li>
            ))
          )}
        </ul>
      </section>

      {/* Contact Section */}
      <section className='py-16 relative'>
        <div className='absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none' />
        <Contact />
      </section>
    </main>
  );
}
