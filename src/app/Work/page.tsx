import React from 'react';
import WorkCard from '../components/WorkCard';
import WorkList from '../../../public/data/work.json' assert { type: 'json' };
import type { WorkExperience } from '../../../types/work'

const Work = () => {
    const typedWorkList: WorkExperience[] = WorkList;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <header className="mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading">
                    Work Experience
                </h2>
                <p className="mt-4 text-gray-400 max-w-xl">
                    My professional experience and roles.
                </p>
            </header>

            <div className="grid gap-6">
                {typedWorkList.map((item, index) => (
                    <WorkCard key={index} data={item} />
                ))}
            </div>
        </div>
    );
};

export default Work;
