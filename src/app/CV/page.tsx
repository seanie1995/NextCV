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

const CV = () => {
  return (
    <div>
      <span>This is a CV page!</span>
    </div>
  );
};

export default CV;
