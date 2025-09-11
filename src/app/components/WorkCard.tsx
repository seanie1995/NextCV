import React from 'react'
import type { WorkExperience } from '../../../types/work'

type WorkCardProps = {
    data: WorkExperience;
};

const WorkCard: React.FC<WorkCardProps> = ({ data }) => {

    // Shared card style
    const baseCard =
        "w-full p-6 bg-gray-900 text-white rounded-2xl shadow-lg border-l-4 border-purple-600 flex flex-col transition-transform hover:scale-105 min-h-[220px]";

    const baseHeading = "text-2xl font-semibold mb-3 border-b border-gray-700 pb-1";
    const baseList = "list-disc list-inside flex-1 flex flex-col gap-2 text-gray-300";

    return (
        <div className={baseCard}>
            <h3 className={baseHeading}>{data.company}</h3>
            <h4 className="text-lg font-medium text-purple-400 mb-3">
                {data.title} | {data.period}
            </h4>
            <ul className={baseList}>
                {data.responsibilities.map((item, index) => (
                    <li key={index} className="text-lg">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WorkCard
