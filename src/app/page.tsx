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

  useEffect(() => {
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
      <section className='flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-16'>
        <div className='flex flex-col items-center gap-6 text-center max-w-2xl'>
          {/* Profile Photo */}
          <div className='relative'>
            <Image
              src='/images/NewProfPhoto.jpg'
              alt="Sean's profile photo"
              width={200}
              height={200}
              priority
              className='rounded-full w-40 h-40 object-cover border-4 border-purple-600/30'
            />
          </div>

          {/* Name and Title */}
          <div className='space-y-2'>
            <p className='text-purple-400 font-medium'>Full Stack Developer</p>
            <h1 className='text-4xl sm:text-5xl font-bold text-white'>
              Sean Schelin
            </h1>
          </div>

          {/* Description */}
          <p className='text-gray-300 max-w-lg'>
            Building modern web applications with Next.js and TypeScript.
            Passionate about clean code and great user experiences.
          </p>

          {/* Social Links */}
          <div className='flex flex-wrap justify-center gap-4'>
            <a
              href='https://www.linkedin.com/in/sean-schelin-057227179/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors'
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <a
              href='https://github.com/seanie1995'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 px-5 py-2.5 bg-gray-700 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors'
            >
              <FaGithub />
              GitHub
            </a>
          </div>

          {/* CV Download */}
          <div className='pt-4'>
            <p className='text-sm text-gray-400 mb-3'>Download CV</p>
            <div className='flex flex-wrap justify-center gap-3'>
              <a
                href='/files/Sean-Schelin-CV-swe.pdf'
                download='Sean-Schelin-CV-swe.pdf'
                className='px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm transition-colors'
              >
                English CV
              </a>
              <a
                href='/files/Sean-Schelin-CV-eng.pdf'
                download='Sean-Schelin-CV-eng.pdf'
                className='px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm transition-colors'
              >
                Swedish CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16'
        id='portfolio'
      >
        <div className='mb-10'>
          <h2 className='text-3xl font-bold text-white mb-4'>Portfolio</h2>
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
            repos.map((repo) => (
              <li key={repo.name}>
                <RepoCard data={repo} />
              </li>
            ))
          )}
        </ul>
      </section>

      {/* Contact Section */}
      <section className='py-16'>
        <Contact />
      </section>
    </main>
  );
}
