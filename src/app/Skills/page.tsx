import React from 'react';
import SkillsCard from '../components/SkillsCard';
import type { Skills } from '../../../types/skills';
import SkillsList from "../../../public/data/skills.json"

const SkillsPage = () => {
    const typedSkillsList: Skills[] = SkillsList;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-4xl font-bold mb-10 border-b-2 border-purple-600 pb-2 w-fit text-white">
                Skills
            </h2>

            {/* Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {typedSkillsList.map((item, index) => (
                    <SkillsCard key={index} data={item} />
                ))}
            </div>
        </div>
    );
};

export default SkillsPage;
