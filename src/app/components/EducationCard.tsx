import React from "react";
import type { Education } from "../../../types/education";
import { FaCalendarAlt, FaGraduationCap } from "react-icons/fa";

type EducationProps = {
  data: Education;
};

const EducationCard: React.FC<EducationProps> = ({ data }) => {
  return (
    <article className="glass-card hover-lift p-6">
      <header className="mb-3">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-xl font-semibold text-white">
            {data.program}
          </h2>
          <FaGraduationCap className="text-purple-400 text-xl flex-shrink-0 mt-1" />
        </div>
      </header>
      
      <h3 className="text-lg text-purple-400 mb-2">
        {data.institution}
      </h3>
      
      <span className="flex items-center gap-2 text-sm text-gray-400">
        <FaCalendarAlt className="text-purple-400" />
        {data.startDate} - {data.endDate}
      </span>
    </article>
  );
};

export default EducationCard;
