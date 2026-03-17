import React from 'react'
import type { Skills } from "../../../types/skills"

type SkillsCardProps = {
    data: Skills
}

const SkillsCard: React.FC<SkillsCardProps> = ({ data }) => {

    return (
        <article className="glass-card hover-lift p-6">
            <h3 className="text-xl font-semibold mb-4 text-white border-b border-white/10 pb-2">
                {data.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
                {data.skills.map((item, index) => (
                    <li 
                        key={index} 
                        className="px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </article>
    )
}

export default SkillsCard
