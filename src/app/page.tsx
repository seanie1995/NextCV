'use client'

import Image from "next/image";
import React from 'react';
import SkillsCard from './components/SkillsCard';
import type { Skills } from '../../types/skills';
import SkillsList from "../../public/data/skills.json"

import { FaLinkedin, FaGithub } from "react-icons/fa"

import WorkCard from './components/WorkCard';
import WorkList from '../../public/data/work.json' assert { type: 'json' };
import type { WorkExperience } from '../../types/work'

import EducationCard from './components/EducationCard'
import EducationList from "../../public/data/education.json"
import type { Education } from '../../types/education'

import Contact from "./components/ContactForm";
export default function Home() {

  const typedSkillsList: Skills[] = SkillsList;
  const typedWorkList: WorkExperience[] = WorkList;
  const typedEducationList: Education[] = EducationList
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <section className="flex flex-col items-center gap-6 mt-35">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/images/ProfPhoto.jpg"
            alt="Sean's profile photo"
            width={300}
            height={300}
            className="rounded-full w-72 h-72 object-cover"
          />

          <div className="text-center flex flex-col gap-2">
            <h2 className="text-xl text-white">Sean Schelin</h2>
            <h1 className="text-5xl  text-white">Full Stack Developer</h1>
            <p className="text-xl text-white">
              Recent graduate from{" "}
              <a
                className="font-bold hover:text-purple-900 hover:underline transition duration-300 ease-in-out text-white"
                href="https://chasacademy.se/"
              >
                Chas Academy
              </a>
              {" "}(June 2025)
            </p>
            <p className="text-xl text-white">Studied Full Stack Development .NET</p>
            <p className="font-bold text-white text-lg">Find me on:</p>
            <ul className="flex justify-center gap-6">
              <li>
                <a
                  href="https://www.linkedin.com/in/sean-harry-schelin-057227179/"
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
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-4xl font-bold mb-10 border-b-2 border-purple-600 pb-2 w-fit text-white">
              Skills
            </h2>

            {/* Skills layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center ">
              {typedSkillsList.map((item, index) => (
                <SkillsCard key={index} data={item} />
              ))}
            </div>
          </div>
        </div>

        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-4xl font-bold mb-10 border-b-2 border-purple-600 pb-2 w-fit text-white">
            Work Experience
          </h2>

          {/* Work layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            {typedWorkList.map((item, index) => (
              <WorkCard key={index} data={item} />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-4xl font-bold mb-10 border-b-2 border-purple-600 pb-2 w-fit text-white">
            Education
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {typedEducationList.map((item, index) => (
              <EducationCard key={index} data={item} />
            ))}
          </div>
        </div>
        <Contact />
      </section>
    </main>
  );
}
