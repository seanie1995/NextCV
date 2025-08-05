import React from 'react';
import SkillsCard from '../components/SkillsCard';
import type { Skills } from '../../../types/skills';
import SkillsList from "../../../public/data/skills.json"

const SkillsPage = () => {
    const typedSkillsList: Skills[] = SkillsList;

    return (
        <div>
            <h2 className="text-2xl my-10">Skills</h2>
            <div className='flex-row gap-10 xl:flex'>
                {typedSkillsList.map((item, index) => (
                    <SkillsCard key={index} data={item} />
                ))}</div>

        </div>
    );
};

export default SkillsPage;
