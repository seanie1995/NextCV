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
    <>
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
    </>
  );
};

export default CV;
