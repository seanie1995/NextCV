import React from 'react'
import type { WorkExperience } from '../../../types/work'

type WorkCardProps = {
    data: WorkExperience;
};

const WorkCard: React.FC<WorkCardProps> = ({ data }) => {
    return (
        <div className="w-full p-6 bg-gray-900 text-white rounded-2xl shadow-lg border-l-4 border-purple-600 flex flex-col transition-transform hover:scale-105 min-h-[220px]">
            <h3 className="text-2xl font-semibold mb-2">
                {data.company}
            </h3>
            <h4 className="text-lg font-medium text-purple-400 mb-3">
                {data.title} | {data.period}
            </h4>
            <ul className="list-disc list-inside flex-1 flex flex-col gap-1 text-gray-300">
                {data.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default WorkCard
