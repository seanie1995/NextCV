import React from 'react';
import SkillsCard from '../components/SkillsCard';
import type { Skills } from '../../../types/skills';
import SkillsList from "../../../public/data/skills.json"

const SkillsPage = () => {
    const typedSkillsList: Skills[] = SkillsList;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <header className="mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading">
                    Skills
                </h2>
                <p className="mt-4 text-gray-400 max-w-xl">
                    Technologies and tools I work with regularly.
                </p>
            </header>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {typedSkillsList.map((item, index) => (
                    <SkillsCard key={index} data={item} />
                ))}
            </div>
        </div>
    );
};

export default SkillsPage;
