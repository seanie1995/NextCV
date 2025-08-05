import React from 'react';
import WorkCard from '../components/WorkCard';
import WorkList from '../../../public/data/work.json' assert {type: 'json'};
import type { WorkExperience } from '../../../types/work'

const Work = () => {
    const typedWorkList: WorkExperience[] = WorkList;
    return (
        <div>
            <h2 className="text-2xl my-10">Work Experience</h2>
            <div className='flex gap-5 flex-col'>
                {typedWorkList.map((item, index) => (
                    <WorkCard key={index} data={item} />
                ))}
            </div>

        </div>
    );
};

export default Work;
