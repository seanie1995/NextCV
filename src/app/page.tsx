'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { fetchSpecificRepos } from './Utils/FetchGithubProjects';
import { CompleteRepoInfo } from '../../types/RepositoryInfo';
import RepoCard from './components/RepoCard';
import Contact from './components/ContactForm';

export default function Home() {
  const [repos, setRepos] = useState<CompleteRepoInfo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
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

  return (
    <main className="min-h-screen">
      <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-20">
        <div className={`absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-cyan-900/10 pointer-events-none`} />
        
        <div className={`relative z-10 flex flex-col items-center gap-8 text-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            <Image
              src="/images/NewProfPhoto.jpg"
              alt="Sean's profile photo"
              width={300}
              height={300}
              priority
              className="relative rounded-full w-48 h-48 sm:w-56 sm:h-56 object-cover border-4 border-white/10 shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-4 max-w-2xl">
            <h2 className="text-lg sm:text-xl text-purple-400 font-medium tracking-wide animate-fade-in">
              Full Stack Developer
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white animate-fade-in delay-100">
              Sean <span className="gradient-text">Schelin</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed animate-fade-in delay-200">
              Building modern web applications with{' '}
              <span className="text-purple-400 font-medium">Next.js</span> and{' '}
              <span className="text-cyan-400 font-medium">TypeScript</span>. 
              Passionate about clean code and great user experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-300">
            <a
              href="https://www.linkedin.com/in/sean-schelin-057227179/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1"
              aria-label="Connect on LinkedIn"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>
            <a
              href="https://github.com/seanie1995"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/30 hover:-translate-y-1"
              aria-label="View GitHub profile"
            >
              <FaGithub className="text-xl" />
              GitHub
            </a>
          </div>

          <div className="animate-fade-in delay-400">
            <p className="text-sm text-gray-400 mb-3">Download CV</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="../../files/Sean-Schelin-CV-swe.pdf"
                download="Sean-Schelin-CV-swe.pdf"
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-1"
              >
                Software Engineer
              </a>
              <a
                href="../../files/Sean-Schelin-CV-eng.pdf"
                download="Sean-Schelin-CV-eng.pdf"
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-1"
              >
                English
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="portfolio">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading">
            Portfolio
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl">
            A selection of projects I&apos;ve worked on, showcasing my skills in full-stack development.
          </p>
        </div>

        <ul className="grid lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {repos.length === 0 ? (
            <li className="col-span-full text-center py-12">
              <div className="inline-block w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
              <p className="mt-4 text-gray-400">Loading projects...</p>
            </li>
          ) : (
            repos.map((repo, index) => (
              <li 
                key={repo.name} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <RepoCard data={repo} />
              </li>
            ))
          )}
        </ul>
      </section>

      <section className="py-20">
        <Contact />
      </section>
    </main>
  );
}
