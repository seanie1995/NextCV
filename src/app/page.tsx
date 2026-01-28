"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { fetchSpecificRepos } from "./Utils/FetchGithubProjects";
import { CompleteRepoInfo,  } from "../../types/RepositoryInfo";
import RepoCard from "./components/RepoCard";

import Contact from "./components/ContactForm";
export default function Home() {
  const [repos, setRepos] = useState<CompleteRepoInfo[]>([]);
  const [repoPhotos, setRepoPhotos] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSpecificRepos();
      
      const dataWithPhotos: CompleteRepoInfo[] = data.map((i) => {
        const matchingPhoto = projectPhotos.find((p) => p.name === i.name);
        return {
          ...i,
          imgUrl: matchingPhoto ? matchingPhoto.imgUrl  : "",
          displayName: matchingPhoto ? matchingPhoto.displayName : ""
        }
      })

      setRepos(dataWithPhotos)
    };

    fetchData();
  }, []);

  const projectPhotos = [
  {
    name: "frostgrave-warband-manager",
    displayName: "Frostgrave Warband Manager",
    imgUrl: "/images/RepoPhotos/frostgrave.jpg"
  },
  {
    name: "Planned-Planthood",
    displayName: "Planned Planthood",
    imgUrl: "/images/RepoPhotos/planned-planthood.png"
  },
  {
    name: "RestaurantAPI",
    displayName: "Restaurant Booking API",
    imgUrl: "/images/RepoPhotos/restaurant.jpg"
  },
];


  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      
        <section className="flex flex-col items-center gap-4 mt-30">

          {/* Profile Photo */}
          <Image
            src="/images/NewProfPhoto.jpg"
            alt="Sean's profile photo"
            width={300}
            height={300}
            className="rounded-full w-72 h-72 object-cover"
          />

          {/* Profile Description */}
          <section className="text-center flex flex-col gap-2">
            <h2 className="text-xl text-white">Sean Schelin</h2>
            <h1 className="text-5xl  text-white">Full Stack Developer</h1>
           
            
            <p className="text-xl text-white">
              Studying Frontend Development with NextJS and Typescript at Lexicon
            </p>
            <p className="font-bold text-white text-lg">Find me on:</p>
            <ul className="flex justify-center gap-6">
              <li>
                <a
                  href="https://www.linkedin.com/in/sean-schelin-057227179/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-purple-600 text-white rounded-full font-semibold transition transform hover:scale-105"
                >
                  <FaLinkedin className="text-xl" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/seanie1995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-purple-600 text-white rounded-full font-semibold transition transform hover:scale-105"
                >
                  <FaGithub className="text-xl" />
                  GitHub
                </a>
              </li>
            </ul>

            <p className="font-bold text-white text-lg">Download my CV</p>
            <ul className="flex justify-center gap-6">
              <li>
                <a
                  href="../../files/Sean-Schelin-CV-swe.pdf"
                  download="Sean-Schelin-CV-swe.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-purple-600 text-white rounded-full font-semibold transition transform hover:scale-105"
                >
                  SWE
                </a>
              </li>
              <li>
                <a
                  href="../../files/Sean-Schelin-CV-eng.pdf"
                  download="Sean-Schelin-CV-swe.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-purple-600 text-white rounded-full font-semibold transition transform hover:scale-105"
                >
                  ENG
                </a>
              </li>
            </ul>
          </section>

          {/* Portfolio Section */}
          </section>

          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-4xl font-bold mb-10 border-b-2 border-purple-600 pb-2 w-fit text-white">
              Portfolio
            </h2>

            <ul className="grid lg:grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2">
              {repos.length === 0 ? <p>Loading...</p> : repos.map((i, index) => (
                <RepoCard data={i} key={index}/>
              ))}
            </ul>
          </section>
          <Contact />
      
    </main>
  );
}
