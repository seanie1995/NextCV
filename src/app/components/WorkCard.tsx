import React from 'react'
import type { WorkExperience } from '../../../types/work'
import { FaCalendarAlt } from "react-icons/fa";

type WorkCardProps = {
    data: WorkExperience;
};

const WorkCard: React.FC<WorkCardProps> = ({ data }) => {

    return (
        <article className="glass-card hover-lift p-6 sm:p-8">
            <header className="mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                        {data.company}
                    </h3>
                    <span className="flex items-center gap-2 text-sm text-gray-400">
                        <FaCalendarAlt className="text-purple-400" />
                        {data.period}
                    </span>
                </div>
                <h4 className="text-lg font-medium text-purple-400">
                    {data.title}
                </h4>
            </header>
            
            <ul className="space-y-3">
                {data.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
        </article>
    )
}

export default WorkCard
