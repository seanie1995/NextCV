"use client";

import React from "react";
import WorkCard from "../components/WorkCard";
import WorkList from "../../../public/data/work.json" assert { type: "json" };
import type { WorkExperience } from "../../../types/work";

import EducationCard from ".././components/EducationCard";
import EducationList from "../../../public/data/education.json";
import type { Education } from "../../../types/education";
import SkillsCard from "./../components/SkillsCard";
import type { Skills } from "../../../types/skills";
import SkillsList from "../../../public/data/skills.json";

const typedSkillsList: Skills[] = SkillsList;
const typedWorkList: WorkExperience[] = WorkList;
const typedEducationList: Education[] = EducationList;

const CV = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <section>
        <header className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading">
            Work Experience
          </h2>
        </header>

        <div className="grid gap-6">
          {typedWorkList.map((item, index) => (
            <WorkCard key={index} data={item} />
          ))}
        </div>
      </section>

      <section>
        <header className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading">
            Education
          </h2>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {typedEducationList.map((item, index) => (
            <EducationCard key={index} data={item} />
          ))}
        </div>
      </section>

      <section>
        <header className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading">
            Skills
          </h2>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {typedSkillsList.map((item, index) => (
            <SkillsCard key={index} data={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CV;
