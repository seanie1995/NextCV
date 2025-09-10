import React from 'react'
import type { Skills } from "../../../types/skills"

type SkillsCardProps = {
    data: Skills
}

const SkillsCard: React.FC<SkillsCardProps> = ({ data }) => {
    return (
        <div className="w-full p-6 bg-gray-900 text-white rounded-2xl shadow-lg border-l-4 border-purple-600 flex flex-col transition-transform hover:scale-105 min-h-[220px]">
            <h3 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-1">
                {data.category}
            </h3>
            <ul className="list-disc list-inside flex-1 flex flex-col gap-2 text-gray-300">
                {data.skills.map((item, index) => (
                    <li key={index} className="text-lg">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SkillsCard
